import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, utimesSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { execFileSync } from 'node:child_process';
import { dateAdded, newestFirst, titleFromFilename } from '../src/lib/photo-order.js';

test('addition dates survive edits, renames and changed checkout timestamps', () => {
  const cwd = mkdtempSync(join(tmpdir(), 'portfolio-order-'));
  const git = (...args) => execFileSync('git', args, { cwd, stdio: 'pipe' });
  const commit = (date) => {
    git('add', '.');
    execFileSync('git', ['commit', '-m', 'fixture'], { cwd, stdio: 'pipe', env: { ...process.env, GIT_AUTHOR_DATE: date, GIT_COMMITTER_DATE: date } });
  };
  try {
    git('init'); git('config', 'user.name', 'Test'); git('config', 'user.email', 'test@example.com');
    writeFileSync(join(cwd, 'old.jpg'), 'original-photo');
    commit('2025-01-01T12:00:00Z');
    const original = dateAdded('old.jpg', cwd);
    writeFileSync(join(cwd, 'new.jpg'), 'new-photo');
    commit('2025-02-01T12:00:00Z');
    writeFileSync(join(cwd, 'old.jpg'), 'edited-photo');
    commit('2025-03-01T12:00:00Z');
    assert.equal(dateAdded('old.jpg', cwd), original);
    git('mv', 'old.jpg', 'renamed.jpg'); commit('2025-04-01T12:00:00Z');
    utimesSync(join(cwd, 'renamed.jpg'), new Date(), new Date());
    assert.equal(dateAdded('renamed.jpg', cwd), original);
    const photos = ['renamed.jpg', 'new.jpg'].map(file => ({ file, added: dateAdded(file, cwd) })).sort(newestFirst);
    assert.equal(photos[0].file, 'new.jpg');
    writeFileSync(join(cwd, 'uncommitted.jpg'), 'preview');
    assert.ok(dateAdded('uncommitted.jpg', cwd) > original);
    assert.deepEqual([{file:'010.jpg',added:1},{file:'002.jpg',added:1}].sort(newestFirst).map(p=>p.file), ['002.jpg','010.jpg']);
    assert.equal(titleFromFilename('folder/001-Sonnenaufgang-am-See.JPG'), 'Sonnenaufgang am See');
  } finally { rmSync(cwd, { recursive: true, force: true }); }
});
