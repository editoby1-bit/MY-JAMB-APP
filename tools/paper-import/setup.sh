#!/usr/bin/env bash
# One-time setup for the paper import tool (Codespaces / Ubuntu / Debian).
# Installs the free PDF reader (poppler) and OCR engine (tesseract).
set -e
if command -v tesseract >/dev/null && command -v pdftotext >/dev/null; then
  echo "Already installed."; exit 0
fi
SUDO=$(command -v sudo || true)
$SUDO apt-get update -q || true
$SUDO apt-get install -y -q tesseract-ocr poppler-utils
echo "Done. Next: python3 tools/paper-import/import_paper.py --help"
