# ELSO ECMO Exam — answer-option rebalance report

Date: 2026-11-12

## Whole bank (392 questions)

| Metric | Before | After |
|---|---|---|
| Correct answer is the longest option | 350 (89%) | 82 (21%) |
| Correct answer is the shortest option | — | 51 (13%) |
| Mean correct ÷ mean wrong length | 4.01× | 1.03× |
| Questions failing the cue check | 347 | 0 |

Chance level with 4 options is 25% longest / 25% shortest.

## What changed

- 347 questions: options rewritten (correct answer trimmed to the deciding fact; distractors rewritten as plausible, parallel, similar-length misconceptions). Stems, answer keys, topics, difficulty and the 69 Updated flags unchanged.
- 146 explanations: the original full correct-answer text appended as "Key point:" so no teaching detail was lost.
- 54 distractors tuned in a second pass so the correct answer is not predictably the middle-length option.
- Spelling: American, matching the rest of the bank.
- New check: `node tools/check-answer-balance.js` — run before every push; exits with an error if any question is lopsided.

## By topic — correct answer longest

| Topic | Qs | Before | After | Ratio before | Ratio after |
|---|---|---|---|---|---|
| Clinical Scenarios | 32 | 100% | 16% | 5.34× | 1.04× |
| Physiology | 25 | 84% | 24% | 2.90× | 1.04× |
| Adverse Effects | 25 | 84% | 16% | 2.87× | 1.01× |
| Circuit & Oxygenator | 24 | 83% | 17% | 2.81× | 1.01× |
| Anticoagulation | 21 | 81% | 14% | 3.78× | 0.98× |
| Cannulation | 18 | 72% | 17% | 2.78× | 0.99× |
| VA ECMO – Cardiac | 18 | 83% | 17% | 2.57× | 1.03× |
| Nomenclature | 15 | 87% | 40% | 4.44× | 1.00× |
| Crisis Management | 14 | 93% | 36% | 3.69× | 1.07× |
| Weaning & Decannulation | 14 | 100% | 21% | 6.32× | 1.04× |
| VV ECMO – Respiratory | 13 | 92% | 31% | 2.70× | 1.07× |
| Infection on ECMO | 12 | 92% | 17% | 5.13× | 1.06× |
| Renal Support on ECMO | 12 | 92% | 8% | 5.79× | 0.98× |
| Coagulation on ECMO | 10 | 100% | 10% | 5.41× | 0.98× |
| Pharmacokinetics on ECMO | 10 | 100% | 20% | 5.84× | 1.00× |
| ECPR | 9 | 56% | 11% | 1.75× | 0.96× |
| Neonatal ECMO | 9 | 56% | 11% | 2.12× | 1.04× |
| OHCA ECPR | 9 | 100% | 22% | 5.84× | 1.04× |
| ECMO Ethics | 8 | 100% | 50% | 3.95× | 1.04× |
| ARDS Special Situations | 8 | 100% | 25% | 4.78× | 1.07× |
| Pregnancy ECMO | 8 | 100% | 0% | 5.54× | 1.03× |
| RV Failure on ECMO | 7 | 100% | 0% | 4.79× | 1.02× |
| Trauma ECMO | 7 | 100% | 29% | 5.67× | 1.07× |
| Monitoring on ECMO | 6 | 100% | 50% | 3.51× | 1.15× |
| History of ECMO | 6 | 67% | 17% | 2.14× | 1.09× |
| Massive PE on ECMO | 6 | 100% | 17% | 5.50× | 1.06× |
| Post-cardiac Surgery ECMO | 6 | 100% | 0% | 4.74× | 1.03× |
| Toxicology ECMO | 6 | 100% | 17% | 5.51× | 1.09× |
| ECMO Outcomes | 5 | 60% | 0% | 2.19× | 0.97× |
| Bridge to VAD/Transplant | 5 | 100% | 20% | 5.65× | 1.05× |
| Pediatric ECMO | 4 | 100% | 25% | 3.84× | 1.05× |
| Transport on ECMO | 4 | 100% | 25% | 3.38× | 1.09× |
| Nutrition on ECMO | 4 | 100% | 25% | 4.57× | 1.03× |
| Special Populations | 4 | 100% | 50% | 3.29× | 1.07× |
| ECMO Program | 3 | 100% | 67% | 2.91× | 1.10× |
| Rehabilitation on ECMO | 3 | 100% | 100% | 3.51× | 1.20× |
| Sedation on ECMO | 2 | 100% | 50% | 3.16× | 1.05× |
