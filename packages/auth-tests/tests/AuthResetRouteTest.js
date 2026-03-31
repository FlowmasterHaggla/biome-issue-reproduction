const fastify = require('fastify')

class AuthResetRouteTest {
  async run () {
    const app = fastify()

    app.post('/auth/reset', async (request) => {
      return { route: "/auth/reset", method: "POST", echo: request.body || null }
    })

    const response = await app.inject({ method: "POST", body: {"email":"reset@example.com"},  url: "/auth/reset" })
    const payload = response.json()
    console.log("AuthResetRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AuthResetRouteTest }
