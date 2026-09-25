---
id: Deployment guide
title: Deployment guide
section: AI
subsection: Development guidelines
sortValue: 5
---

# Quick Deployment Guide for Prototypes

This guide provides simple, fast methods for building and deploying your React application so you can share a live prototype with others.

## Introduction

Once you have a working prototype on your local machine, the next step is to host it on a public URL. The services listed below are excellent for this purpose, offering generous free tiers and simple command-line interfaces (CLIs) that make deployment a breeze.

## 1. Build Your Application

Before you can deploy, you need to create a production-ready build of your application. This process compiles your React code into a set of static HTML, CSS, and JavaScript files that can be served by any web server.

From your project's root directory, run the following command:

```bash
# Using npm
npm run build

# Or using yarn
yarn build
```

This command will create a new directory named `dist` (or sometimes `build`) in your project. This is the folder you will deploy.

## 2. Choose a Deployment Service

Here are four popular options for hosting your static site, ranked from simplest to most involved. For the absolute fastest deployment with no prior setup, Surge is the best choice.

### Quick Comparison

| Service | Speed | Setup Required | Custom Domains | Notes |
|---------|-------|----------------|----------------|--------|
| **Surge** | Fastest | None | Yes (paid) | Best for instant sharing |
| **Vercel** | Fast | Account signup | Yes (free) | Best overall experience |
| **Netlify** | Fast | Account signup | Yes (free) | Good alternative to Vercel |
| **GitHub Pages** | Slower | Git repo required | Yes (free) | Best if already using GitHub |

### Recommendation by Use Case

- **Quick prototype sharing**: Use Surge
- **Professional demo**: Use Vercel or Netlify
- **Open source project**: Use GitHub Pages

### Option A: Deploying with Surge

Surge is famous for its simplicity and speed, making it an excellent choice for instant deployments. You can create an account directly from the command line on your first use.

1.  **Install the Surge CLI**:
    ```bash
    npm install -g surge
    ```

2.  **Deploy your app**:
    From your project's root directory, run the `surge` command and point it to your build folder.
    ```bash
    surge dist
    ```
    The first time you use it, Surge will prompt you to create a free account. It will then ask you to confirm the publish directory and will suggest a random domain name, which you can edit on the fly before deploying.

    Your site will be live moments after you hit Enter.

### Option B: Deploying with Vercel

Vercel is a zero-configuration deployment platform that is also incredibly easy to use.

1.  **Install the Vercel CLI**:
    ```bash
    npm install -g vercel
    ```

2.  **Log in to your Vercel account**:
    ```bash
    vercel login
    ```
    *(This will open a browser window for you to log in or sign up.)*

3.  **Deploy your app**:
    From your project's root directory, run the `vercel` command.
    ```bash
    vercel
    ```
    Follow the interactive prompts, accepting the defaults for most options. Vercel will automatically detect your framework and configuration, upload your project, and provide a unique `your-project.vercel.app` URL.

### Option C: Deploying with Netlify

Netlify offers a similar, straightforward deployment experience to Vercel.

1.  **Install the Netlify CLI**:
    ```bash
    npm install -g netlify-cli
    ```

2.  **Log in to your Netlify account**:
    ```bash
    netlify login
    ```

3.  **Deploy your app**:
    Run the `netlify deploy` command, specifying your build folder with the `-d` flag.
    ```bash
    netlify deploy -d dist
    ```
    Netlify will upload your files and provide a unique preview URL (e.g., `random-name.netlify.app`). You can then promote this deploy to a "production" deploy within the Netlify dashboard.

### Option D: Deploying to GitHub Pages

If your project is already in a GitHub repository, GitHub Pages is a free and reliable hosting option.

GitHub project sites are served from `/<repo-name>/`. Configure both the seed's asset path and client-side routing for that subpath before deploying.

1.  **Install the gh-pages package**:
    ```bash
    npm install gh-pages --save-dev
    ```

2.  **Use hash-based routing**:
    GitHub Pages does not provide a fallback for client-side routes. In `src/app/index.tsx`, replace `BrowserRouter` with `HashRouter`:
    ```jsx
    import { HashRouter as Router } from 'react-router-dom';
    ```

3.  **Add deployment scripts to your `package.json`**:
    Replace `<repo-name>` with the repository name. `ASSET_PATH` configures webpack to emit asset URLs for the GitHub Pages project subpath.
    ```json
    "scripts": {
      "predeploy": "ASSET_PATH=/<repo-name>/ npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```
    On Windows, use `cross-env ASSET_PATH=/<repo-name>/ npm run build` for the `predeploy` command.

4.  **Deploy your app**:
    Run the deployment script.
    ```bash
    npm run deploy
    ```
    This command builds the project and pushes the static files to the `gh-pages` branch.

5.  **Configure the publishing source**:
    In the repository's GitHub settings, open **Pages**, select **Deploy from a branch**, and choose the `gh-pages` branch and `/ (root)` folder. The site will be available at `https://<your-username>.github.io/<repo-name>/`.
