# @dansmaculotte/nuxt-domains

> Module for Nuxt.js to handle multiple domains

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

## :construction: WIP

This module is considered experimental and a work-in-progress.

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-domains` dependency to your project

```bash
yarn add nuxt-domains # or npm install nuxt-domains
```

2. Add `nuxt-domains` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-domains',

    // With options
    ['nuxt-domains', { /* module options */ }]
  ]
}
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## Resources

- https://github.com/nuxt-community/router-module
- https://github.com/nuxt-community/router-extras-module

## License

[MIT License](./LICENSE)

Copyright (c) Gaël Reyrol <gael@dansmaculotte.fr>

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/nuxt-domains/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-domains

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-domain.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-domains

[circle-ci-src]: https://img.shields.io/circleci/project/github/dansmaculotte/nuxt-domains.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/dansmaculotte/nuxt-domains

[codecov-src]: https://img.shields.io/codecov/c/github/dansmaculotte/nuxt-domains.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/dansmaculotte/nuxt-domains

[license-src]: https://img.shields.io/npm/l/nuxt-domains.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-domains
