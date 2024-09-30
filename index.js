#!/usr/bin/env node

const [emValue, baseSize = 16] = process.argv.slice(2).map(Number);

if (!emValue || isNaN(baseSize)) {
  console.log("Usage: em2px-cli <emValue> [baseSize]");
  console.log("Example: em2px-cli 2 16");
  process.exit(1);
}

const pxValue = emValue * baseSize;
console.log(`${emValue}em = ${pxValue}px (Base: ${baseSize}px)`);