import { createServer } from 'miragejs'
import DummyRoutes from './modules/Dummy'
import DummyOtherDomain from './modules/DummyOtherDomain'

const API_DELAY_TIMING = 0

const routes = [
  ...DummyRoutes,
  ...DummyOtherDomain
]

const isSimilarObject = (obj1, obj2) => {
  const val1 = typeof obj1 === 'string' ? obj1 : JSON.stringify(obj1)
  const val2 = typeof obj2 === 'string' ? obj2 : JSON.stringify(obj2)
  return val1 === val2
}

const initializeServer = () => {
  createServer({
    routes() {
      this.namespace = '/api'
      this.timing = API_DELAY_TIMING

      routes.forEach(route => {
        this[route.method](route.url, (schema, { queryParams, requestBody }) => {
          if (route.results.length === 1) return route.results[0].response
          const result = route.results.find(result => {
            const hasAndSameRequestBody = requestBody ? isSimilarObject(result.requestBody, requestBody) : true
            const sameQueryParams = isSimilarObject(result.queryParams, queryParams)
            return  sameQueryParams && hasAndSameRequestBody
          })
          return result.response
        })
      })

      this.passthrough('https://rickandmortyapi.com/**')
    }
  })
} 

export {
  initializeServer
} 