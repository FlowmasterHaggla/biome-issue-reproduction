const fastify = require('fastify')

class ContentUpdateRouteTest {
  async run () {
    const app = fastify()

    app.put('/content/update', async (request) => {
      return { route: "/content/update", method: "PUT", echo: request.body || null }
    })

    const response = await app.inject({ method: "PUT", body: {"title":"updated"},  url: "/content/update" })
    const payload = response.json()
    console.log("ContentUpdateRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { ContentUpdateRouteTest }
