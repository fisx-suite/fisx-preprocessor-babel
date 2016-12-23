fisx-preprocessor-babel
======

[![Dependency Status](https://david-dm.org/wuhy/fisx-preprocessor-babel.svg)](https://david-dm.org/wuhy/fisx-preprocessor-babel) [![devDependency Status](https://david-dm.org/wuhy/fisx-preprocessor-babel/dev-status.svg)](https://david-dm.org/wuhy/fisx-preprocessor-babel#info=devDependencies) [![NPM Version](https://img.shields.io/npm/v/fisx-preprocessor-babel.svg?style=flat)](https://npmjs.org/package/fisx-preprocessor-babel)

> A preprocessor to process the code compiled by babel when using babel-plugin-external-helpers plugin. 

## How to use

### Install

```shell
npm install fisx-preprocessor-babel --save-dev
```

### Add configure to fis-conf.js

```js
fis.match('/src/**.js', {
    preprocessor: fis.plugin('babel')
});
```

You can use the [fisx-prepackager-babel](https://github.com/wuhy/fisx-prepackager-babel) plugin to output the babel helper code file.

### Options

* babelHelperModId - `string` `optional`: define the babel helpers module id, by default `babelHelpers`

* disableBabel - `boolean` `optional`: if the processed file has disableBabel configure with `true`, the preprocessor will ignore this file
