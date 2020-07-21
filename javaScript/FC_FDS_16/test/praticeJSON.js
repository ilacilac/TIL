// const obj = {
//   name: 'Lee',
//   age: 20,
//   alive: true,
//   hobby: ['traveling', 'tennis']
// };

// const json = JSON.stringify(obj);

// // console.log('typeof', typeof json); // typeof string
// // console.log(json); // {"name":"Lee","age":20,"alive":true,"hobby":["traveling","tennis"]}

// const prettyJson = JSON.stringify(obj, null, 2);
// // console.log(prettyJson);

// /*
// const objectJson = JSON.parse(json);
// console.log(objectJson);
// console.log(typeof objectJson); // object
// */
// function filter(key, value) {
//   return typeof value === 'number' ? undefined : value;
// }

// const strFilteredObject = JSON.stringify(obj, filter, 2);
// console.log(typeof strFilteredObject, strFilteredObject);
// /*
// string {
//   "name": "Lee",
//   "alive": true,
//   "hobby": [
//     "traveling",
//     "tennis"
//   ]
// }
//  */

//console.log(typeof xhr);
// console.log(typeof xhr); // object
// console.log(xhr);
/*
XMLHttpRequest
onabort: null
onerror: null
onload: null
onloadend: null
onloadstart: null
onprogress: null
onreadystatechange: null
ontimeout: null
readyState: 0
response: ""
responseText: ""
responseType: ""
responseURL: ""
responseXML: null
status: 0
statusText: ""
timeout: 0
upload: XMLHttpRequestUpload {onloadstart: null, onprogress: null, onabort: null, onerror: null, onload: null, …}
withCredentials: false
__proto__: XMLHttpRequest
*/

const xhr = new XMLHttpRequest();

xhr.open('GET', '/users');
xhr.setRequestHeader('content-type', 'application/json');
xhr.send();