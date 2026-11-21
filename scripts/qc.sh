#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

FILE="${1:-out/bayu-portfolio-vertical.mp4}"
if [ ! -f "$FILE" ]; then
  echo "FAIL: file not found: $FILE"
  exit 1
fi

echo "==> File"
ls -lh "$FILE"

echo "==> ffprobe"
ffprobe -v error -show_entries format=duration,size,bit_rate -show_entries stream=codec_name,width,height,r_frame_rate,nb_frames,pix_fmt -of default=noprint_wrappers=1 "$FILE"

echo "==> Black frame check (first pass)"
ffmpeg -v error -i "$FILE" -vf "blackdetect=d=0.5:pix_th=0.10" -an -f null - 2>&1 | tail -n 40 || true

echo "==> Duration sanity"
DUR=$(ffprobe -v error -show_entries format=duration -of default=noprint_wrappers=1:nokey=1 "$FILE")
echo "duration_seconds=$DUR"

python3 - <<'PY' "$DUR"
import sys
d=float(sys.argv[1])
ok=45.0 <= d <= 65.0
print(f"duration_ok={ok}")
sys.exit(0 if ok else 2)
PY

echo "QC PASS: $FILE"
