import path from 'path'
import AutoLoad from '@fastify/autoload'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Pass --options via CLI arguments in command to enable these options.
export const options = {}

export default async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
  // ⬇️ 显式调用 listen，并绑定 0.0.0.0
  // fastify.ready(err => {
  //   if (err) throw err
  //   fastify.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  //     if (err) {
  //       fastify.log.error(err)
  //       process.exit(1)
  //     }
  //     fastify.log.info(`Server is now listening on ${address}`)
  //   })
  // })
}
