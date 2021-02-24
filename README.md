# eslint-config-meedsio

ESLint [shareable config](http://eslint.org/docs/developer-guide/shareable-configs.html) for Meeds-io based projects.

## Installation

```
$ npm install --save-dev eslint eslint-config-meedsio
```

## Usage

`eslint-config-meedsio` combines rules defined by `plugin:vue/strongly-recommended`, `eslint:recommended` with some additional customized rules.

To use it, you can simply define it in ESLint configuration of your project:
```js
{
  "extends": [
    "eslint-config-meedsio"
  ]
}
```

## License

Apache-3