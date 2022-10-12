const dummyRoutes = [
  {
    url: 'https://service.mock.com/dummy',
    method: 'get',
    results: [
      {
        queryParams: {},
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy from other domain'
          }
        }
      }
    ]
  }
]

export default dummyRoutes