# [charlie.social](https://charlie.social)

A simple portfolio I built while on a plane from Rome to Atlanta without wifi. First real project with Solid. More practice with TypeScript, Tailwind, pnpm, and vite too!

Hosted on Vercel.

Feel free to make an issue to provide feedback or ask a question.

Favicon from [favicon.io](https://favicon.io).

Color pallet from [colorhunt.co](https://colorhunt.co/palette/2c36393f4e4fa27b5cdcd7c9).

# SolidStart

Everything you need to build a Solid project, powered by [`solid-start`](https://start.solidjs.com);

## Creating a project

```bash
# create a new project in the current directory
npm init solid

# create a new project in my-app
npm init solid my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Solid apps are built with _adapters_, which optimise your project for deployment to different environments.

By default, `npm run build` will generate a Node app that you can run with `npm start`. To use a different adapter, add it to the `devDependencies` in `package.json` and specify in your `vite.config.js`.