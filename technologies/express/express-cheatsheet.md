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


```typescript
// productRouter.ts
import { Router } from 'express';

export const productRouter = Router()
productsRouter.get('/', productsController.getAll);
productsRouter.get('/:id', productsController.getById);

// appRouter.ts
import {productRouter, usersRouter} from '@components';

export const appRouter = Router();
appRouter.use('/products', productsRouter);
appRouter.use('/users', usersRouter);

// app.ts
import {appRouter} from 'appRouter';

app.use(appRouter);

```
### Working with Parameters

```typescript
router.get('/user/:username', function (req, res) {
	const username = req.params.username;
	const user = userService.get(username);
	res.json(user);
});
```

---
## Response API

|                    |                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------- |
| `res.download()`   | Prompt a file to be downloaded.                                                       |
| `res.end()`        | End the response process.                                                             |
| `res.json()`       | Send a JSON response.                                                                 |
| `res.redirect()`   | Redirect a request.                                                                   |
| `res.render()`     | Render a view template.                                                               |
| `res.send()`       | Send a response of various types.                                                     |
| `res.sendFile()`   | Send a file to the client an attempt to serve it                                      |
| `res.sendStatus()` | Set the response status code and send its string representation as the response body. |
**Examples**

```typescript
res.download(path.join(__dirname, 'file'));
res.status(404).end()
res.json({username: 'stan'});
res.redirect(301, 'google.com');
res.send(Buffer.from('<p> hennlou</p>'));
res.sendFile(path.join(__dirname, 'mypdf.pdf'));
res.set('Content-Type', 'text/plain')
res.status(200).json(myData);
```
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

---
## Downloading files to client

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

## Middlewares


```typescript
const loggerMiddleware = (req,res, next) => {
	console.log(`RECEIVED ${req.method} ${req.url} @${Date.now()}`);
	next();
}

// app.ts
app.use(loggerMiddleware);
```

### Error Middleware Implementation

It's common to use custom *Error* objects and utilize them in the ErrorMiddleware. Error Middlewares MUST provide 4 parameters instead of the usual 3 for middlewares.

Make sure to add the error middleware AFTER the *appRouter* in `app.ts`

```typescript
import { NextFunction, Request, Response } from 'express';

const SERVER_ERROR_MESSAGE = 'An unexpected error has ocurred';

export interface IAppError extends Error {
	status: number;
}

export class AppError extends Error implements IAppError {
	status: number;
	constructor(status: number, message: string) {
		super(message);
		this.status = status;
	}
}

export const errorMiddleware = (
error: AppError,
request: Request,
response: Response,
next: NextFunction,
) => {
	if (!error) {
	next();
	}
	const status = error.status ? error.status : 500;
	const message = status === 500 ? SERVER_ERROR_MESSAGE : error.message;
	response.status(status).json({ message });
};
```

### Common Middlewares

```typescript
const app = express()

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded (FORM bodies too)
app.use(cors({
  origin: 'https://example.com',
  methods: ['GET', 'POST'],
  credentials: true
})); // enable CORS

// ORDER is important - logger naturally should be first, error middleware right after router.
app.use([loggerMiddleware, myCustomMiddleware1, myCustomMiddleware2]);
app.use(appRouter);
app.use(errorMiddleware);

// 404 middleware
app.use('*', (req, res) => {
  res.status(404).json({ error: 'Not Found' });
});
```
