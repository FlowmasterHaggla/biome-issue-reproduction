const fastify = require('fastify')

class ContentCreateRouteTest {
  async run () {
    const app = fastify()

    app.post('/content/create', async (request) => {
      return { route: "/content/create", method: "POST", echo: request.body || null }
    })

    const response = await app.inject({ method: "POST", body: {"title":"hello"},  url: "/content/create" })
    const payload = response.json()
    console.log("ContentCreateRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { ContentCreateRouteTest }
