---
title: "Hosting Static Sites on Fly.io"
date: 2023-02-14
tags: ["cloudflare", "fly.io"]
---

I recently joined the team at [Fly.io](https://fly.io), and have slowly been moving my various sites and hobby projects over. In case you haven't heard of Fly.io, we help developers host apps (all sorts of apps, not only JavaScript-based ones) close to users – no devops skills required. I use Fly.io to host a few Python apps like [this one](#) and [this one](#).

While Fly.io is primarily designed for hosting applications, it's also a great place to host static sites. In this post, I'll show you how to deploy a static site to Fly.io in just a few minutes.

## Getting Started

First, you'll need to install the Fly CLI. If you're on macOS and have Homebrew installed, you can run: 