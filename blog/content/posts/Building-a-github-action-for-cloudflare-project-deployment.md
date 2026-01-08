+++
date = '2026-01-08T08:48:25Z'
draft = false
title = 'Building a Github Action for Cloudflare Project Deployment'
+++

During recent development for the [oyster language](https://github.com/HeckingGoose/Oyster) by [@HeckingGoose](https://github.com/heckinggoose) I was asked to assist with building a github action to deploy a Jekyll static pages site to a cloudflare project this was to allow for documentation to be referenced both within the linter for the language and in general.

Then after some initial investigation i discovered the beauty of the [Cloudflare wrangler action](https://github.com/cloudflare/wrangler-action) which allows for the easy deployment of any specified set of files to a cloudflare project directly in a github action.

Finally after successfully applying this to the oyster documentation this same concept was then used to deploy this site and blog to its new home!

So after some investigation we came up with the following for building the Jekyll pages site and deploying the result out to cloudflare

```yml
name: Deploy Docs

on:
  push:
    branches: ["main"]
  workflow_dispatch:
jobs:
  deploy:
    runs-on: windows-latest
    permissions:
      contents: read
      deployments: write
    name: Deploy to Cloudflare Pages
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: "3.4" # Specify the Ruby version you need
          bundler-cache: true

      - name: Setup Jekyll
        run: |
          gem install jekyll bundler
          bundle install

      - name: Build Jekyll Site
        run: bundle exec jekyll build

      - name: Deploy to Cloudflare Pages
        uses: cloudflare/wrangler-action@v3
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          command: pages deploy _site --project-name=${{env.PROJECT_NAME}}
          gitHubToken: ${{ secrets.GITHUB_TOKEN }}
```
