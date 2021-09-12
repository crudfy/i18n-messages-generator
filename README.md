i18n-messages-generator
==================================================================================================
[![npm](https://img.shields.io/npm/v/i18n-messages-generator.svg)](https://www.npmjs.com/package/i18n-messages-generator)
[![npm](https://img.shields.io/npm/dt/i18n-messages-generator.svg)](https://www.npmjs.com/package/i18n-messages-generator)

Generate i18n messages from lang folder

## Install
```sh
yarn add i18n-messages-generator
```
Or
```sh
npm install i18n-messages-generator
```

## How to use it

![Alt text](./src/project-files-example.jpg?raw=true "Project files example")

```
import { buildLangFiles } from 'vue';
const messages = buildLangFiles('./lang', true, /(.js){0,1}(.ts){0,1}$/i))

const i18n = VueI18n.createI18n({
  locale: 'fr', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


```
