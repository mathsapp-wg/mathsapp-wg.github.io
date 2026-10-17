# MathsApp Working Group Homepage

Official website for the **MathsApp Working Group** in Applied Geometry and Statistics.

## Free Deployment to GitHub Pages (`mathsapp-wg`)

This project includes automated **GitHub Actions** (`.github/workflows/deploy.yml`) and Single Page App (SPA) routing support (`public/404.html`), allowing you to host the site **100% free** forever with automatic HTTPS and CDN.

### Step 1: Create a Repository on GitHub
1. Go to [github.com/new](https://github.com/new) logged in as **mathsapp-wg** (or your organization/account).
2. Choose a repository name:
   - **Option A (Root Domain, Recommended)**: Name the repository `mathsapp-wg.github.io`
     - Your website will live at `https://mathsapp-wg.github.io`
   - **Option B (Project Subpath)**: Name the repository `mathsapp`
     - Your website will live at `https://mathsapp-wg.github.io/mathsapp`
3. Set the repository visibility to **Public**.
4. Leave "Add a README file" unchecked (we already have all files ready).
5. Click **Create repository**.

---

### Step 2: Push from Terminal
Run these commands from your local project folder:

```bash
# Link your repository (replace with your chosen repo name)
git remote add origin https://github.com/mathsapp-wg/mathsapp-wg.github.io.git

# Push to GitHub
git branch -M main
git push -u origin main
```

*(Or if you use GitHub CLI: `gh repo create mathsapp-wg/mathsapp-wg.github.io --public --source=. --push`)*

---

### Step 3: Enable GitHub Pages
1. Go to your repository on GitHub: `https://github.com/mathsapp-wg/<repo-name>/settings/pages`
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. That's it! GitHub will automatically trigger the workflow in `.github/workflows/deploy.yml`. In ~60 seconds, your site is live!

---

## Local Development

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev

# Build for production
npm run build
```
