# Rollback / checkpoints

| Layer | Checkpoint | Roll back |
|---|---|---|
| Git | annotated tags `checkpoint-YYYYMMDD-N` | `git checkout <tag>` or `git revert <sha>`; list: `git tag -l 'checkpoint-*'` |
| Netlify | every deploy is immutable and kept | Netlify UI → Deploys → pick deploy → **Publish deploy** (official "rollback" feature). CLI: `netlify api restoreSiteDeploy --data '{"site_id":"<id>","deploy_id":"<id>"}'` |
| Corpus | `MANIFEST.sha256` | `sha256sum -c MANIFEST.sha256` detects any change |

Log of checkpoints: see `CHECKPOINTS.md`.
