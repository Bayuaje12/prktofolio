#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
mkdir -p out
echo "==> Rendering vertical 1080x1920"
npx remotion render src/index.ts BayuPortfolioVertical out/bayu-portfolio-vertical.mp4 --codec=h264 --crf=18 --image-format=jpeg --concurrency=2
echo "==> Rendering horizontal 1920x1080"
npx remotion render src/index.ts BayuPortfolioHorizontal out/bayu-portfolio-horizontal.mp4 --codec=h264 --crf=18 --image-format=jpeg --concurrency=2
echo "==> Done"
ls -lh out/*.mp4
