# Simple API Mock using mirage JS

## Reference

[Mirage JS](https://miragejs.com/)

[My learning summary in notion](https://hanssagita.notion.site/MirageJs-4268ccd1d1414ec19ab90f8e78115ac2)



## New API mock endpoint Guideline

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