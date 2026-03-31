const fastify = require('fastify')

class AuthRegisterRouteTest {
  async run () {
    const app = fastify()

    app.post('/auth/register', async (request) => {
      return { route: "/auth/register", method: "POST", echo: request.body || null }
    })

    const response = await app.inject({ method: "POST", body: {"email":"user@example.com"},  url: "/auth/register" })
    const payload = response.json()
    console.log("AuthRegisterRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AuthRegisterRouteTest }
