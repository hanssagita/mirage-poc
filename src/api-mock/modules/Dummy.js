const dummyRoutes = [
  {
    url: '/dummy',
    method: 'get',
    results: [
      {
        queryParams: {},
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message'
          }
        }
      },
      {
        queryParams: {
          page: '1'
        },
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message page 1'
          }
        }
      },
      {
        queryParams: {
          page: '2'
        },
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message page 2'
          }
        }
      },
    ]
  },
  {
    url: '/dummy-post',
    method: 'post',
    results: [
      {
        queryParams: {},
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message normal post'
          }
        }
      },
      {
        queryParams: {},
        requestBody: {
          username: 'test'
        },
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message post with request body'
          }
        }
      },
      {
        queryParams: {
          login: 'true'
        },
        requestBody: {
          username: 'test'
        },
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message post with request body and query param'
          }
        }
      }
    ]
  },
  {
    url: '/dummy-put',
    method: 'put',
    results: [
      {
        queryParams: {},
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message put'
          }
        }
      }
    ]
  },
  {
    url: '/dummy-delete',
    method: 'delete',
    results: [
      {
        queryParams: {},
        requestBody: {},
        response: {
          status: 'OK',
          code: 200,
          data: {
            message: 'Dummy message delete'
          }
        }
      }
    ]
  }
]

export default dummyRoutes