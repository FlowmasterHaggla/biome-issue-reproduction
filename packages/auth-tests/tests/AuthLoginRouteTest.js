const fastify = require('fastify')

class AuthLoginRouteTest {
  async run () {
    const app = fastify()

    app.get('/auth/login', async () => {
      return { route: "/auth/login", method: "GET", echo: null }
    })

    const response = await app.inject({ method: "GET",  url: "/auth/login" })
    const payload = response.json()
    console.log("AuthLoginRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AuthLoginRouteTest }
