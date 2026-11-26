#!/usr/bin/env bash
# Hook Stop: impedisce di chiudere il turno se ci sono modifiche non salvate su GitHub.
input="$(cat)"
# Evita loop: se il blocco è già scattato una volta in questo turno, lascia passare.
if [ "$(printf '%s' "$input" | jq -r '.stop_hook_active // false')" = "true" ]; then exit 0; fi
cd "${CLAUDE_PROJECT_DIR:-.}" 2>/dev/null || exit 0
git rev-parse --is-inside-work-tree >/dev/null 2>&1 || exit 0

motivi=()
[ -n "$(git status --porcelain)" ] && motivi+=("ci sono modifiche non committate")
ramo="$(git symbolic-ref --short -q HEAD)"
if [ -n "$ramo" ]; then
  # Chiede a GitHub a che punto è il branch (funziona anche nei clone shallow).
  remoto="$(git ls-remote origin "refs/heads/$ramo" 2>/dev/null | cut -f1)"
  if [ -z "$remoto" ]; then
    motivi+=("il branch $ramo non è ancora su GitHub")
  elif [ "$remoto" != "$(git rev-parse HEAD)" ]; then
    motivi+=("il branch $ramo non è allineato con GitHub (commit non pushati)")
  fi
fi
if [ ${#motivi[@]} -gt 0 ]; then
  testo="Lavoro non salvato in cloud: $(IFS='; '; echo "${motivi[*]}"). Fai commit e push su GitHub prima di finire (vedi CLAUDE.md)."
  jq -n --arg r "$testo" '{decision:"block", reason:$r}'
fi
exit 0
