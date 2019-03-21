# movie list test
> 9 Digital Coding Challenge

## How to run? 

```sh
$ npm install
$ node index.js
```

## How to run unit test?
```sh
$ npm install 
$ npm test
```

## Ideas/Assumption behind application
1. I read the code challenge instruction to throw error for 'invalid JSON', which I interpret as invalid JSON format. 
2. Structure of the request and its payload are not validated, thus missing 'drm' and 'episodeCount' will not cause 'Bad Request' error. It will just be filtered out as undefined properties.
    1.1 If its required, I would use 'express-validator' and implement a middleware in 'routes/movies' with unit tests.
3. Unit test are written to show the techniques and structure. In real project, there should be alot more assertions/expect statement and more test on positive/negative flows.

## License

MIT © [Sir Hoe Teo]()