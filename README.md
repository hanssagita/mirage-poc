# Simple API Mock using mirage JS

## Reference

[Mirage JS](https://miragejs.com/)

## MirageJs config


```js
import { createServer } from 'miragejs'

createServer({
    routes() {
      this.namespace = '/api' // API namespace
      this.timing = API_DELAY_TIMING // API timing in Number type

      this.get("/api/users", () => [  // simple new API endpoint mock
        { id: "1", name: "Luke" },
        { id: "2", name: "Leia" },
        { id: "3", name: "Anakin" },
      ])

      this.passthrough() // Passthrough real API call
    }
  })
```




## API mock Structure


```js
{
  url: 'mock path',
  method: 'get | post | put | delete',
  results: [
    {
      queryParams: {}, // in JSON object
      requestBody: {}, // in JSON object
      response: {} // in JSON object
}
```