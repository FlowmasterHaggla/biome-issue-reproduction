const fastify = require('fastify')

class AdminAuditRouteTest {
  async run () {
    const app = fastify()

    app.post('/admin/audit', async (request) => {
      return { route: "/admin/audit", method: "POST", echo: request.body || null }
    })

    const response = await app.inject({ method: "POST", body: {"event":"signin"},  url: "/admin/audit" })
    const payload = response.json()
    console.log("AdminAuditRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AdminAuditRouteTest }
