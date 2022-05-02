import type { Application } from 'express'

function attachPublicRoutes(app: Application) {
  app.get('/', (_req, res) => {
    res.status(200).send('Hello, World!')
  })

  app.get('/ping', (_req, res) => {
    res.status(200).send('pong')
  })
}

// function attachPrivateRoutes(app: Application) {
//
// }

export default function attachRoutes(app: Application) {
  attachPublicRoutes(app)

  // use auth middleware
  // app.use(useAuth)

  // and then attach private routes
  // attachPrivateRoutes(app)
}
