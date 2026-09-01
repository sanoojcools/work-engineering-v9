# CONTRACTS

Frozen joints live as JSON Schema in `/schemas`.

| Joint | Schema | Fixture |
|---|---|---|
| Intent record | `schemas/intent.schema.json` | `intent.INT-007.json` |
| Scout session | `schemas/scout_session.schema.json` | `session.*.json` |
| Genome + persist gate | `schemas/genome.schema.json` | `genome.G-*.json` |
| Work Unit | `schemas/work_unit.schema.json` | `work_units.json` |
| Scenario portfolio | `schemas/scenario_portfolio.schema.json` | `wu-114.scenarios.json` |

Provenance enum everywhere: `observed | declared | designed | inferred`.

Scout session `provenance` is const `declared`. A future writer that emits `observed` from an interview is a contract break.

Box 2 internals remain undesigned. Only the intent record fields above are consumable.
