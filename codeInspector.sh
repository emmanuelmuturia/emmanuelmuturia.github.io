#!/bin/bash
set -euo pipefail

npm run format
npm run check-format
npm run test:ci
npm run build