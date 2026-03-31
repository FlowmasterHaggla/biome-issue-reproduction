const fastify = require('fastify')

class AdminMetricsRouteTest {
  async run () {
    const app = fastify()

    app.get('/admin/metrics', async () => {
      return { route: "/admin/metrics", method: "GET", echo: null }
    })

    const response = await app.inject({ method: "GET",  url: "/admin/metrics" })
    const payload = response.json()
    console.log("AdminMetricsRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AdminMetricsRouteTest }
