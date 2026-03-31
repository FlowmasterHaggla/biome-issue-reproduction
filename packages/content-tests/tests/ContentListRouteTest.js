const fastify = require('fastify')

class ContentListRouteTest {
  async run () {
    const app = fastify()

    app.get('/content/list', async () => {
      return { route: "/content/list", method: "GET", echo: null }
    })

    const response = await app.inject({ method: "GET",  url: "/content/list" })
    const payload = response.json()
    console.log("ContentListRouteTest => " + payload.route)

    await app.close()
    return payload
  }
}

module.exports = { ContentListRouteTest }
