fisx-preprocessor-babel
======
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

### Options

* babelHelperModId - `string` `optional`: define the babel helpers module id, by default `babelHelpers`

* disableBabel - `boolean` `optional`: if the processed file has disableBabel configure with `true`, the preprocessor will ignore this file
