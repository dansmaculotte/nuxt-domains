# nuxt-domain

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> A module to handle multi-domain nuxt app

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `nuxt-domain` dependency to your project

```bash
yarn add nuxt-domain # or npm install nuxt-domain
```

2. Add `nuxt-domain` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    'nuxt-domain',

    // With options
    ['nuxt-domain', { /* module options */ }]
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
[npm-version-src]: https://img.shields.io/npm/v/nuxt-domain/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/nuxt-domain

[npm-downloads-src]: https://img.shields.io/npm/dt/nuxt-domain.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/nuxt-domain

[circle-ci-src]: https://img.shields.io/circleci/project/github/dansmaculotte/nuxt-domain.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/dansmaculotte/nuxt-domain

[codecov-src]: https://img.shields.io/codecov/c/github/dansmaculotte/nuxt-domain.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/dansmaculotte/nuxt-domain

[license-src]: https://img.shields.io/npm/l/nuxt-domain.svg?style=flat-square
[license-href]: https://npmjs.com/package/nuxt-domain
