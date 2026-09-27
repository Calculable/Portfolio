import test from 'node:test';
import assert from 'node:assert/strict';
import { searchWaterfalls, externalLinks } from '../src/lib/waterfall-data.js';
const sample = [
 { id: 'node/1', name: 'Trümmelbachfälle', names: { en: 'Trummelbach Falls' }, aliases: ['Cascade'], lat: 47, lon: 8, osmType: 'node', osmID: 1 },
 { id: 'way/1', name: null, names: {}, aliases: [], lat: 46, lon: 7, osmType: 'way', osmID: 1 },
];
test('search handles accents, alternative names and unnamed opt-in', () => {
 assert.equal(searchWaterfalls(sample, '').length, 1);
 assert.equal(searchWaterfalls(sample, '', true).length, 2);
 assert.equal(searchWaterfalls(sample, 'trummelbach falls').length, 1);
 assert.equal(searchWaterfalls(sample, 'cascade').length, 1);
 assert.equal(searchWaterfalls(sample, 'not present', true).length, 0);
});
test('links encode untrusted labels and restrict Wikimedia identifiers', () => {
 const links = externalLinks({ ...sample[0], name: '<script>&', wikidata: 'javascript:alert(1)', wikipedia: 'evil.com:Something' });
 assert.equal(links.length, 3);
 assert.ok(links.every(([, link]) => link.startsWith('https://')));
 assert.ok(links[1][1].includes('%3Cscript%3E%26'));
 assert.equal(externalLinks({ ...sample[0], wikidata: 'Q123', wikipedia: 'de:Rheinfall' }).length, 5);
});
