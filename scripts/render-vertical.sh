#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out
npx remotion render src/index.ts BayuPortfolioVertical out/bayu-portfolio-vertical.mp4 --codec=h264 --crf=18 --image-format=jpeg --concurrency=2
bash scripts/qc.sh out/bayu-portfolio-vertical.mp4
