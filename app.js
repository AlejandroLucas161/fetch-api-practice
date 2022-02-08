/* You can pass two properties to the fetch method. 
The first one will be the URL and the second one 
(optional) is an object of options that you want to pass to it 
(e.g. do a post request instead of a get request) */
// fetch('URL', {options (optional)})

/* The main thing you need to know when doing anything 
with JSON data that you are posting to the server is make sure 
you set the headers to the correct content type of application JSON 
and also need to stringify the body (you can't send a Javascript object, 
you have to convert it to JSON string) */

fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name: 'User 1'
  })
}) 
  .then(res => {
   return res.json()
  })
  .then(data => console.log(data))
  .catch(err => console.log('Error'))