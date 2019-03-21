# movie list test
> 9 Digital Coding Challenge

## How to run? 
The nodeJS application should be deployed and run with PM2

```sh
$ npm install
$ npm install pm2 -g
$ pm2 start index.js
```

## How to run unit test?
```sh
$ npm install 
$ npm test
```

## Ideas/Assumption behind application
1. I read the code challenge instruction to throw error for invalid JSON, which I interpret as invalid JSON format. 
2. structure of the request and its payload are not validated, thus missing 'drm' and 'episodeCount' will not cause 'Bad Request' error. It will just be filtered out as undefined properties.
    1.1 If its required, I would use 'express-validator' and implement a middleware in 'routes/movies' with unit tests.

## License

MIT © [Sir Hoe Teo]()