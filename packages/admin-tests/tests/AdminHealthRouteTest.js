const fastify = require('fastify')

class AdminHealthRouteTest {
  async run () {
    const app = fastify()

    app.get('/admin/health', async () => {
      return { route: "/admin/health", method: "GET", echo: null }
    })

    const response = await app.inject({ method: "GET",  url: "/admin/health" })
    const payload = response.json()
    console.log("AdminHealthRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AdminHealthRouteTest }
