### @babel/preset-stage-2

is deprecated for babel v7

https://babeljs.io/docs/en/babel-preset-stage-2

### .ts loading with babel variant (not with ts-loader)

https://stackoverflow.com/questions/38320220/how-to-setup-typescript-babel-webpack

### babel.config.js

```
module.exports = {
  presets: ['@babel/env'],
  plugins: [
    '@babel/plugin-transform-runtime',
    '@babel/plugin-transform-async-to-generator',
    '@babel/transform-arrow-functions',
    '@babel/proposal-object-rest-spread',
    '@babel/proposal-class-properties'
  ]
};
```

### import \*.html in .ts issue

https://medium.com/@sampsonjoliver/importing-html-files-from-typescript-bd1c50909992

https://github.com/microsoft/TypeScript/issues/2865

/// <reference path="../**/html.d.ts" />

but tag in $ctrl.tags doest work in template if use require()

### MiniCssExtractPlugin issue

```
{
  loader: MiniCssExtractPlugin.loader,
  options: {
    esModule: false,
  },
}
```

https://github.com/vuejs/vue-loader/issues/1742

### assets loading variant

`type: 'asset/resource'` instead of file-loader/url-loader

https://webpack.js.org/guides/asset-modules/

https://webpack.js.org/guides/asset-management/#loading-images

https://webpack.js.org/guides/asset-management/#loading-fonts

### paste .ccs, .js and other ready assets in head

```
ERROR in Error: Child compilation failed:
Module not found: Error: Can't resolve './styles/reset.css'
```

dont use https://github.com/huruji/html-webpack-include-assets-plugin

use https://github.com/jharris4/html-webpack-tags-plugin instead

### exclude /node_modules/ with loaders

files from /node_modules/ will go to chunk anyway but will not be transformed with loader

### vscode eslint-plugin issue

```
// settings.json
"eslint.workingDirectories": [{ "mode": "auto" }]
```

https://github.com/microsoft/vscode-eslint/issues/696

### karma.conf plugins option

By default, Karma loads plugins from all sibling npm packages which have a name starting with karma-\*.

### karma with typescript

```
const karmaTypescriptES6Transform = require('karma-typescript-es6-transform');
const tsconfig = require('./tsconfig.json');


karmaTypescriptConfig: {
  ...tsconfig,
  bundlerOptions: {
    transforms: [karmaTypescriptES6Transform()],
  },
}
```

https://www.npmjs.com/package/karma-typescript

```
:ERROR [validator.karma-typescript]: Invalid syntax in bundle: 'import' and 'export' may only appear at the top level (13:177)
Possible fix: configure karma-typescript to compile es6 modules with karma-typescript-es6-transform
```

https://github.com/monounity/karma-typescript/tree/master/packages/karma-typescript-es6-transform

### karma with es6

Doesn't solve "exports is not defined" issue, use karma-webpack instead!

```
babelPreprocessor: {
  options: {
    presets: ['@babel/preset-env'],
    sourceMap: 'inline'
  },
}
```

https://www.npmjs.com/package/karma-babel-preprocessor

### karma "exports is not defined" issue

```
Uncaught ReferenceError: exports is not defined
Uncaught ReferenceError: require is not defined
```

It's because browsers don't support CommonJS, require and exports. This plugin only transpiles file by file and does nothing to module.

Use https://www.npmjs.com/package/karma-webpack to build!

https://github.com/babel/karma-babel-preprocessor/issues/10
