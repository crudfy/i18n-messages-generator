i18n-messages-generator
=========================

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

```
import { buildLangFiles } from 'vue';
const messages = buildLangFiles('./lang', true, /(.js){0,1}(.ts){0,1}$/i))

const i18n = VueI18n.createI18n({
  locale: 'ja', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})


```
