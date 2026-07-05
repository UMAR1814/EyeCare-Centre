Add node module file in backend and frontend file to run this project for creating node module file use "npm i"

CI/CD (GitHub Actions) → Vercel
- This repository includes a workflow at `.github/workflows/frontend-vercel.yml` that builds the `Frontend` React app and deploys it to Vercel on pushes to `main`.
- Before the workflow can deploy, add these repository secrets in GitHub Settings → Secrets:
	- `VERCEL_TOKEN` — a Vercel personal token (from https://vercel.com/account)
	- `VERCEL_ORG_ID` — your Vercel organization ID
	- `VERCEL_PROJECT_ID` — your Vercel project ID
- The workflow installs dependencies, runs tests, builds the app, then deploys with the Vercel Action.

If you prefer deployments via Vercel's Git integration instead of the Action, you can connect the GitHub repo directly in the Vercel dashboard and skip adding these secrets.

Quick CLI steps (create project + get IDs)
- Install Vercel CLI and login, then create/link the project from the `Frontend` folder:

```bash
npm i -g vercel
cd Frontend
vercel login
vercel --prod --confirm
```

- Get Org/Project IDs (JSON output) for use as GitHub secrets:

```bash
# list projects (shows project id)
npx vercel projects ls --token $VERCEL_TOKEN --json

# or inspect a specific project by name
npx vercel projects inspect <project-name> --token $VERCEL_TOKEN --json
```

- Add the IDs and token as GitHub repo secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) in your repository settings.

GitHub Pages deploy (optional)
- A workflow at `.github/workflows/frontend-pages.yml` builds the `Frontend` app and publishes `Frontend/build` to the `gh-pages` branch on every push to `main`.
- After the first run, enable Pages in the repository Settings → Pages and select `gh-pages` as the source (if not selected automatically).
- The workflow uses the automatically provided `GITHUB_TOKEN`, so no extra secrets are needed for Pages.

To trigger immediately, push to `main`:

```bash
git add .
git commit -m "Add GitHub Pages deploy workflow"
git push origin main
```
