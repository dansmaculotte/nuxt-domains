const extractDomain = require('extract-domain')

export default async function (ctx, inject) {
  const domains = <%= JSON.stringify(options.domains) %>

  const $domain = () => {
    const host = (process.client) ? window.location.href : ctx.req.protocol + '://' + ctx.req.headers.host

    return domains.find(domain => domain.fqdn === extractDomain(host))
  }

  inject('domain', $domain)
  ctx.$domain = $domain
}
