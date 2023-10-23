# Figma Plugin: Renaming Layers 🎉
A Figma plugin that simplifies renaming layers and components by streamlining your refactoring process. While designing in Figma, clean up your layers by renaming duplicates and variations of a component within the same layer all at once! For example, rename all `buttons` within a parent component in one go while excluding nodes of different types such as `text`, `spacers`, and `images`. 

https://github.com/debbieyuen/figma-plugin-renaming-layers/assets/31296177/41a4e166-0164-477c-a638-39d9c651f469

## Requirements
* [Figma Desktop App](https://www.figma.com/downloads/)
* [TypeScript ^4.7.4](https://www.typescriptlang.org/)
* [React ^18.2.0](https://react.dev/learn/installation)
* [Webpack ^5.74.0](https://webpack.js.org/guides/installation/)
* [Prettier ^2.7.1](https://prettier.io/docs/en/install.html)

## Set Up

Clone the repository
```bash
$ git clone https://github.com/debbieyuen/figma-plugin-renaming-layers.git
```

Install dependencies with `npm`.
```bash
$ npm install --save-dev @figma/plugin-typings
$ npm install figma-plugin-ds 
```

Run `npm:build:watch` to start webpack in watch mode. Or in VSCode Mac, `shift` `command` `B` and select `npm:build:watch`. Within the Figma app, open `Figma` -> `Plugins` -> `Development` -> `Import plugin from manifest...` and choose `manifest.json` file from this repo.
```bash
$ npm run build:watch 
```

## Credits and References
* [Figma API Overview](https://www.figma.com/plugin-docs/api/api-overview/)
* [Figma Plugin React](https://github.com/nirsky/figma-plugin-react-template)
