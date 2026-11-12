#!/usr/bin/env node
// Answer-cue check: fails if the correct option can be spotted by length or wording.
// Usage: node tools/check-answer-balance.js   (run from repo root before every push)
// Per question:  correct length ≤1.5× mean distractor; if correct is strictly longest, ≤1.25×;
//                correct must not be the only option carrying a " — " explanation;
//                no "always/never/only/all/none" in distractors unless the correct option has one too.
// Whole bank:    correct strictly longest in ≤30% of questions; mean length ratio 0.90–1.15.
const fs = require('fs'), path = require('path');
const file = process.argv[2] || path.join(__dirname, '..', 'index.html');
const src = fs.readFileSync(file, 'utf8');
const a = src.indexOf('const QUESTIONS = ['), b = src.indexOf('\n];', a) + 3;
const Q = eval(src.slice(a, b).replace('const QUESTIONS =', '(').replace(/\];$/, '])'));
const ABS = /\b(always|never|only|all|none)\b/i;
let fails = [], longest = 0, ratioSum = 0;
Q.forEach((q, i) => {
  const L = q.opts.map(o => o.length), c = L[q.ans], o = L.filter((_, j) => j !== q.ans);
  const avg = o.reduce((x, y) => x + y, 0) / o.length, r = c / avg, isLong = c > Math.max(...o);
  ratioSum += r; if (isLong) longest++;
  const why = [];
  if (r > 1.5) why.push('correct ' + r.toFixed(2) + '× longer than distractors');
  else if (isLong && r > 1.25) why.push('correct is longest at ' + r.toFixed(2) + '×');
  if (/ — /.test(q.opts[q.ans]) && !q.opts.some((x, j) => j !== q.ans && / — /.test(x))) why.push('only the correct option has a " — " explanation');
  if (!ABS.test(q.opts[q.ans]) && q.opts.some((x, j) => j !== q.ans && ABS.test(x))) why.push('absolute word only in distractors');
  if (why.length) fails.push(`#${i} ${q.q.slice(0, 70)}…\n    ${why.join('; ')}`);
});
const pct = 100 * longest / Q.length, mean = ratioSum / Q.length;
console.log(`${Q.length} questions · correct longest ${pct.toFixed(0)}% · mean length ratio ${mean.toFixed(2)} · ${fails.length} flagged`);
fails.forEach(f => console.log('  ' + f));
const bankFail = pct > 30 || mean < 0.9 || mean > 1.15;
if (bankFail) console.log('BANK FAIL: target longest ≤30% and ratio 0.90–1.15');
process.exit(fails.length || bankFail ? 1 : 0);
