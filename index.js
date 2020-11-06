// The Headless CMS API response
const responseHeadless = require('./responseHeadless.json')

// Modify the API so that it fits the requirements
// HERE ⤵
const responseAPI = responseHeadless;
   //sanpshotObj=responseAPI('title','items'.'sys'.'type',) 
   import data from './data/responseHeadless.json';
   const newdata=data.map((data)=> {
     return (
       <Card key = {data.id}
     )
   }
   )


// Validating `responseAPI` against snapshot
const { assert } = require('chai')
const responseSnapshot = require('./snapshot.json')
assert.deepEqual(responseAPI, responseSnapshot, 'Response doesn\'t match snapshot')
console.log('It works!')