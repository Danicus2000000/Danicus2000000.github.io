+++
date = '2025-01-21T09:51:38Z'
draft = false
title = 'Building a GitHub Action for React App Deployment'
category = ["YAML"]
+++

Issue:

During the creation of a basic react app, the result of a build of this app must be displayed as a static web application hosted in GitHub pages.

Solution:

Configuring a GitHub action (YAML) in order to build the react app and then clone the build over to the GitHub pages deployment branch.

Below is the resulting YAML pipeline for this:

```yaml
name: Deploy gh-page Branch
permissions:
  contents: write
# Run workflow on every push to the master branch
on:
  push:
    branches: [ main ]

jobs:
  deploy-to-github-pages:
    # use ubuntu-latest image to run steps on
    runs-on: ubuntu-latest
    steps:
    # uses GitHub's checkout action to checkout code form the master branch
    - uses: actions/checkout@v4
      
    # sets up node
    - name: Setup node
      uses: actions/setup-node@v4

    # Installs required npm packages
    - name: Installs required npm dependencies
      run: npm install

    # Generate npm build
    - name: Generates npm build
      run: npm run build

    # Commit to gh-pages branch
    - name: Commit wwwroot to GitHub Pages
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        BRANCH: gh-pages
        FOLDER: build
```
