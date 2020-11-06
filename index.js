// The Headless CMS API response
const responseHeadless = require('./responseHeadless.json')

// Modify the API so that it fits the requirements
// HERE ⤵
const responseAPI = responseHeadless;
   //sanpshotObj=responseAPI('title','items'.'sys'.'type',) 
   //const element = <h1>Hello, world</h1>;

  const data=responseHeadless; 
    console.log(data);
    var k=5; 
    console.log(k);

  function reqListener(data) {
    d = JSON.parse(this.responseText);
    console.log(d);
}

 //  import data from './responseHeadless.json';
  /*
   const newdata=data.map((data)=> {
     return (
       <Card key = {data.id}>|
         <Card.Body>
         <Card.Title> {data.name}</Card.Title>
         <Card.Text>
                 {data.desc}
         </Card.Text>

         <a className="btn-primary"
         href={data.url}
         target="_blank">
         Download
         </a>
      </Card.Body>
      </Card>
     )
   }
   )


// Validating `responseAPI` against snapshot
const { assert } = require('chai')
const responseSnapshot = require('./snapshot.json')
assert.deepEqual(responseAPI, responseSnapshot, 'Response doesn\'t match snapshot')
console.log('It works!')

*/