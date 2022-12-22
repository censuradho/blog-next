# Blog | Next frontend for headless GHOST CMS

Create and publish flaring fast blogs with <i>next-cms-ghost</i>. Powered by the React framework Next.js and content fed by headless Ghost, you'll get a production ready hybrid frontend that combines the best of static and server-rendered sites. Most importantly, your website can be easily distributed globally to be served from the edge. At the same time your content creators can continue to work with the Ghost authoring system they are used to.

## ✨ Features
<details>
<summary>Ghost CMS integration</summary>
<br />
<ul>
  <li>Supports Ghost `v3`</li>
</ul>
</details>
<details>
<summary>Ghost Casper look & feel</summary>
<br />
<ul>
  <li>Fully responsive</li>
  <li>Styled 404 page</li>
  <li>Preview Section in posts</li>
  <li>Sitemap</li>
  <li>RSS feed</li>
  <li>SEO optimized</li>
</ul>
</details>
<details>
<summary>Extened Casper Styles ✨</summary>
<br />
<ul>
  <li>Dark Mode</li>
  <li>Most recent posts pinned on top</li>
</ul>
</details>
<details>
<summary>Images with Next/Images 🚀</summary>
<br />
<ul>
  <li>Auto-optimized images</li>
  <li>No content shifts due to consistent placeholders</li>
</ul>
</details>
<details>
<summary>Advanced Routing</summary>
<br />
<ul>
  <li>Auto-detects custom paths</li>
</ul>
</details>
<details>
<summary>Integrated Plugins</summary>
<br />
<ul>
  <li>Google Analytics</li> 
</ul>
</details>
<details>
<summary>NextJS Features</summary>
<br />
<ul>
  <li>Incremental Regeneration</li>
  <li>Support for Preview</li>
</ul>
</details>


## 🎌 Getting Started

```bash
git clone https://github.com/censuradho/blog-next.git
cd blog-next
yarn

# Development
yarn dev

# Production
yarn build
```

## 🔑 Ghost Content API keys

All content is sourced from a Ghost CMS. Choose the method according to your build scenario.

### Building locally

Create a new text file `.env.local` in the project root folder with the following content:

```
CMS_GHOST_API_URL=http://localhost:2368
CMS_GHOST_API_KEY=9fccdb0e4ea5b572e2e5b92942
```

Change `CMS_GHOST_API_URL` and `CMS_GHOST_API_KEY` with the values that you can generate in your Ghost Admin under `Integrations`.

### Building with cloud providers

If you build your project with a cloud provider, the best option is to provide the keys with environment variables:

| Key               | Value (example)              |
| ----------------- | ---------------------------- |
| CMS_GHOST_API_URL | https:\/\/your-ghost-cms.org |
| CMS_GHOST_API_KEY | 9fccdb0e4ea5b572e2e5b92942   |

&nbsp;

## 💫 Deploy

For best results, deploying to Vercel is recommended. As an alternative, you can also deploy to Netlify.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/censuradho/blog-next)

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/censuradho/blog-next&utm_source=github)

&nbsp;

## 🤯 Ensure headless mode of Ghost CMS

For best SEO results it is strongly recommended to disable the default Ghost Handlebars theme front-end by selecting the _Make this site private_ flag within your Ghost admin settings.

