# ExpressJS Cheatsheet

Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

```typescript
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
```


---

## Basic Routing

Route definitions take the following structure: 

```typescript
app.METHOD(PATH, HANDLER)
// `app` is an instance of `express`.
// `METHOD` is an [HTTP request method] in lowercase
// `PATH` is a path on the server.
// `HANDLER` is the function executed when the route is matched.

app.get('/', (req,res) => {
	res.send('Respoding to a GET request');
});
app.post('/', (req,res) => {...});
app.put('/', (req,res) => {...});
app.delete('/', (req,res) => {...});
app.all('/', (req,res) => {// matches all HTTP methods})
```

---
## Response API

```typescript
// res.download() - prompt a file to be downloaded.
res.download(path.join(__dirname, 'file'));

// res.end() - ends the response process.```
res.status(404).end()

// res.json() - sends a JSON response
res.json({username: 'stan'});

// res.redirect - redirects a request
res.redirect(301, 'google.com');

// res.send - sends a response of various types (Buffer, String, Boolean, Array)
res.send(Buffer.from('<p> hennlou</p>'));

// res.sendFile - sends a file to the client and attemps to serve it(e.x - pdf, html, ..etc)
res.sendFile(path.join(__dirname, 'mypdf.pdf'));

// res.set - set the response's HTTP Header's FIELD to VALUE
res.set('Content-Type', 'text/plain')

// res.status - sets the HTTP status for the response. It is a chainable alias of Node's response.statusCode.
res.status(200).json(myData);

```

|                    |                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------- |
| `res.download()`   | Prompt a file to be downloaded.                                                       |
| `res.end()`        | End the response process.                                                             |
| `res.json()`       | Send a JSON response.                                                                 |
|                    |                                                                                       |
| `res.redirect()`   | Redirect a request.                                                                   |
| `res.render()`     | Render a view template.                                                               |
| `res.send()`       | Send a response of various types.                                                     |
| `res.sendFile()`   | Send a file as an octet stream.                                                       |
| `res.sendStatus()` | Set the response status code and send its string representation as the response body. |
|                    |                                                                                       |

---
## Serving Static Files

To serve static files such as images, CSS files, and JavaScript files, use the `express.static` built-in middleware function in Express.

```typescript
app.use(express.static('public'))
// or if we are running express not from root directory.
app.use(express.static(path.join(__dirname, 'public')))

// now we can request resources sitting in our /public folder on the root level.
// http://localhost:3000/images/kitten.jpg
// http://localhost:3000/css/style.css
// http://localhost:3000/js/app.js
```

### Downloading files to client

We have 2 options - we can either stream the file and pipe it to the response or just use the built in `download` method

```typescript
import path from 'path';
import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const FILE_PATH = path.join(__dirname, 'myFile.dat');
// download example
app.get('/file-download-api', (req, res) => {
	res.download(FILE_PATH, {}, (err) => {
	    if (!err) return; // file sent
	    if (err.status !== 404) return next(err); // non-404 error
	});
})
// pipe example
app.get('file-download-api', async (req,res) => {
    const stats = fileSystem.statSync(FILE_PATH);
	const readStream = createReadStream(FILE_PATH);
    response.writeHead(200, {
        "Content-Type": "application/octet-stream",
        "Content-Disposition": "attachment; filename=" + fileName,
        'Content-Length': stat.size,
    });
	await pipeline(readStream, res);
})
```

---

## Error Middlewares

Error Middlewares have 4 parameters instead of the usual `(req,res,next)`.

Otherwise they behave exactly like regular middleware and you can have a number of them in different order.
```typescript
const erorrMiddleware = (err, req, res, next) => {
	console.error(err.stack);
	res.status(500);
	res.json({ message: 'Internal server error.' });
	next();
};
```

---

## API fundamentals

### Working with Parameters

```typescript
app.get('/user/:username', function (req, res) {
	const username = req.params.username;
	const user = userRepository.get(username);
	res.json(user);
});
```

### Parsing JSONs

```typescript
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded (FORM bodies too)

app.post('/profile', (req, res, next) => {
  console.log(req.body)
  res.json(req.body)
})
```
