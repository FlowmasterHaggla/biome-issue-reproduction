const fastify = require('fastify')

class AdminUsersRouteTest {
  async run () {
    const app = fastify()

    app.get('/admin/users', async () => {
      return { route: "/admin/users", method: "GET", echo: null }
    })

    const response = await app.inject({ method: "GET",  url: "/admin/users" })
    const payload = response.json()
    console.log("AdminUsersRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { AdminUsersRouteTest }
