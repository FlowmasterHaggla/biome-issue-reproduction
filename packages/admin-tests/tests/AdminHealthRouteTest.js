const fastify = require('fastify');

class AdminHealthRouteTest {
  constructor() {
    this.scope = 'admin';
    this.baseRoute = '/admin/health';
    this.defaultMethod = 'GET';
    this.version = 'v1';
  }

  buildHeaders(overrides = {}) {
    return {
      'x-repro-suite': this.scope,
      'x-repro-class': 'AdminHealthRouteTest',
      'x-repro-version': this.version,
      ...overrides,
    };
  }

  buildBody(seed = 0) {
    if (this.defaultMethod === 'GET') {
      return undefined;
    }

    return {
      ...{},
      seed,
      timestamp: '2026-03-31T00:00:00Z',
      tags: ['biome', 'fastify', this.scope],
    };
  }

  buildRequest(seed = 0, routeSuffix = '', methodOverride = null) {
    const method = methodOverride || this.defaultMethod;
    const route = routeSuffix ? this.baseRoute + routeSuffix : this.baseRoute;
    const body = this.buildBody(seed);

    const request = {
      method,
      url: route,
      headers: this.buildHeaders({
        'x-seed': String(seed),
      }),
    };

    if (body) {
      request.body = body;
    }

    return request;
  }

  attachRoutes(app) {
    app.route({
      method: this.defaultMethod,
      url: this.baseRoute,
      handler: async (request) => {
        return {
          ok: true,
          route: this.baseRoute,
          method: this.defaultMethod,
          scope: this.scope,
          className: 'AdminHealthRouteTest',
          hasBody: Boolean(request.body),
          bodyKeys: request.body ? Object.keys(request.body) : [],
          headerSeed: request.headers['x-seed'] || null,
        };
      },
    });

    app.get(this.baseRoute + '/meta', async () => {
      return {
        ok: true,
        route: this.baseRoute + '/meta',
        scope: this.scope,
        className: 'AdminHealthRouteTest',
        contract: ['ok', 'route', 'method', 'scope', 'className'],
      };
    });

    app.get(this.baseRoute + '/ping', async () => {
      return {
        ok: true,
        route: this.baseRoute + '/ping',
        className: 'AdminHealthRouteTest',
        status: 'alive',
      };
    });
  }

  assertBaseResponse(payload) {
    if (!payload || payload.ok !== true) {
      throw new Error('AdminHealthRouteTest: expected ok=true payload');
    }

    if (payload.route !== this.baseRoute) {
      throw new Error('AdminHealthRouteTest: unexpected base route in payload');
    }

    if (payload.className !== 'AdminHealthRouteTest') {
      throw new Error('AdminHealthRouteTest: unexpected className in payload');
    }
  }

  async runSingle(app, request) {
    const response = await app.inject(request);
    return {
      statusCode: response.statusCode,
      payload: response.json(),
    };
  }

  async run() {
    const app = fastify();
    this.attachRoutes(app);

    const baseResult = await this.runSingle(app, this.buildRequest(1));
    const metaResult = await this.runSingle(app, {
      method: 'GET',
      url: this.baseRoute + '/meta',
      headers: this.buildHeaders(),
    });
    const pingResult = await this.runSingle(app, {
      method: 'GET',
      url: this.baseRoute + '/ping',
      headers: this.buildHeaders(),
    });

    this.assertBaseResponse(baseResult.payload);

    if (
      baseResult.statusCode !== 200 ||
      metaResult.statusCode !== 200 ||
      pingResult.statusCode !== 200
    ) {
      throw new Error(
        'AdminHealthRouteTest: expected all status codes to be 200',
      );
    }

    const summary = {
      suite: this.scope,
      className: 'AdminHealthRouteTest',
      baseRoute: this.baseRoute,
      baseMethod: this.defaultMethod,
      checks: {
        base: baseResult.statusCode,
        meta: metaResult.statusCode,
        ping: pingResult.statusCode,
      },
      sample: baseResult.payload,
    };

    await app.close();
    return summary;
  }
}

module.exports = { AdminHealthRouteTest };
