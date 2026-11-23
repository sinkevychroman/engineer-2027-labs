# Engineer 2027 · Engineering Labs

A public, evidence-driven learning repository focused on **independent problem solving** and practical software engineering.

## Objective

Build demonstrable engineering ability across JavaScript, TypeScript, React, Node.js, SQL, testing, debugging, production operations, algorithms, and system design. Work is evaluated by correctness, reasoning, tests, and repeatability, not commit count.

## How work gets done

1. Pick one engineering task and record its acceptance criteria in a GitHub Issue.
2. Create a branch, for example `lab/001-event-loop`.
3. Implement independently. Each task is labeled **NO AI / NO GOOGLE** or **AI ALLOWED**.
4. Add automated tests and run `npm test` locally.
5. Open a Pull Request, link its Issue, and wait for CI and code review.
6. Explain the implementation and trade-offs during a review session.
7. Record evidence (PR, tests, mistakes, time, reviewer feedback) in the **Engineer 2027 Notion dashboard**.
8. Merge after passing the checkpoint. Repeat older topics for retention.

Do not commit code from employers, clients, or private systems. Do not present AI-generated solutions as independent work.

## Repository layout

```text
exercises/                   Independent coding exercises
  00-ci-smoke/               Sample used only to verify CI (not assessed)
projects/                    Small practical builds
.github/workflows/ci.yml     Automated test job for pushes and PRs
.github/ISSUE_TEMPLATE/      Engineering task issue template
.github/PULL_REQUEST_TEMPLATE.md
 docs/architecture/          Architecture decision records
 docs/checkpoints/           Session evidence template
```

## Requirements

- Node.js 22+ (Node.js 26 LTS recommended)
- npm
- Git

## Quick start

```bash
npm test
```

This starter uses the built-in `node:test` runner, so **no dependencies need to be installed**. TypeScript tooling, linting, and more checks will be added through reviewable Pull Requests when the exercises require them.

## Assessment policy

- `NO AI / NO GOOGLE`: implement and explain the solution yourself; automated tests and reviewer analysis are allowed **after your submission**.
- `AI ALLOWED`: AI can assist, but you must review, test and defend all changes.
- A green CI run does **not** mean a skill is mastered.
- Track **Engineering Level** and **Interview Readiness** separately.

## Evidence

Keep the actual implementation, CI output, PR discussion and architecture decisions here. Track assessment results and next steps in Notion:

[Engineer 2027 Dashboard](https://app.notion.com/p/400e85fa7faa81b096ddc0a48a9871f6)

The repository starts with an infrastructure-only smoke test. It is not evidence of assessment progress.
