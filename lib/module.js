const { resolve } = require('path')
const consola = require('consola')

const logger = consola.withScope('nuxt:domain')

module.exports = function(moduleOptions) {
  const options = {
    ...this.options['nuxt-domain'],
    ...moduleOptions
  }

  if (options.domains && options.domains.length === 0) {
    logger.warn('No domain to configure')
  }

  const domains = options.domains.map(domain => {
    return {
      fqdn: domain.find(item => typeof item === 'string'),
      options: domain.find(item => item instanceof Object)
    }
  })

  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'nuxt-domains.js',
    options: {
      domains
    }
  })
}

module.exports.meta = require('../package.json')
