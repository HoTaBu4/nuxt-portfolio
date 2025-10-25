#!/usr/bin/env node

import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const args = process.argv.slice(2);

if (args.length === 0) {
  console.error('Usage: node scripts/run-nuxt.mjs <command> [args...]');
  process.exit(1);
}

// Ensure Nuxt uses the WASM fallback when platform-specific native bindings are unavailable.
if (!process.env.OXC_PARSER_FORCE_FALLBACK) {
  process.env.OXC_PARSER_FORCE_FALLBACK = '1';
}

const command = args[0];
const commandArgs = args.slice(1);

const __dirname = dirname(fileURLToPath(import.meta.url));
const binDir = resolve(__dirname, '../node_modules/.bin');
let cliExecutable = resolve(binDir, 'nuxi');

if (process.platform === 'win32') {
  const windowsExecutable = `${cliExecutable}.cmd`;
  if (existsSync(windowsExecutable)) {
    cliExecutable = windowsExecutable;
  }
}

const child = spawn(cliExecutable, [command, ...commandArgs], {
  stdio: 'inherit',
  shell: process.platform === 'win32'
});

child.on('exit', (code) => {
  process.exit(code == null ? 1 : code);
});

child.on('error', (error) => {
  console.error(error);
  process.exit(1);
});
