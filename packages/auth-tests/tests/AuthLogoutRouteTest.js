const fastify = require('fastify')

class AuthLogoutRouteTest {
  async run () {
    const app = fastify()

    app.post('/auth/logout', async (request) => {
      return { route: "/auth/logout", method: "POST", echo: request.body || null }
    })

    const response = await app.inject({ method: "POST", body: {"reason":"manual"},  url: "/auth/logout" })
    const payload = response.json()
    console.log("AuthLogoutRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AuthLogoutRouteTest }
