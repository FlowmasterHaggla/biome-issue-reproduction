const fastify = require('fastify')

class ContentDeleteRouteTest {
  async run () {
    const app = fastify()

    app.delete('/content/delete', async (request) => {
      return { route: "/content/delete", method: "DELETE", echo: request.body || null }
    })

    const response = await app.inject({ method: "DELETE",  url: "/content/delete" })
    const payload = response.json()
    console.log("ContentDeleteRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { ContentDeleteRouteTest }
