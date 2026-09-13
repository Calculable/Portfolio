import { execFileSync } from 'node:child_process';
import { statSync } from 'node:fs';
import { resolve } from 'node:path';

// Git history survives a fresh CI checkout; filesystem dates do not.
export function dateAdded(file, cwd = process.cwd()) {
  const timestamps = execFileSync('git', ['log', '--follow', '--diff-filter=A', '--format=%ct', '--', file], { cwd, encoding: 'utf8' }).trim().split('\n').filter(Boolean);
  if (timestamps.length) return Number(timestamps.at(-1)) * 1000;
  // New, uncommitted pictures still appear during local development.
  return statSync(resolve(cwd, file)).mtimeMs;
}

export function newestFirst(a, b) {
  return b.added - a.added || a.file.localeCompare(b.file, 'en', { numeric: true });
}

export function titleFromFilename(file) {
  return file.replace(/^.*\//, '').replace(/\.[^.]+$/, '').replace(/^\d+[-_]/, '').replace(/[-_]+/g, ' ').replace(/^./, (letter) => letter.toUpperCase());
}
