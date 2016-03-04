# [simple-get-stream][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Simply wraps [simple-get][] and his methods to return Response stream instead of Request stream. Simple as `simpleGet.get(url).pipe(process.stdout)`

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i simple-get-stream --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const simpleGetStream = require('simple-get-stream')
```

### [simpleGetStream](index.js#L32)
> Request a page and return a response stream

**Params**

* `<opts>` **{String|Object}**: Url or options object, passed to `simple-get`.    
* `returns` **{Stream}**: Response stream instead of Request stream as `simple-get` does.  

**Example**

```js
const request = require('simple-get-stream')
const stream = request('http://www.tunnckocore.tk')

stream.once('error', console.error)
stream.pipe(process.stdout) // => html content of the page
```

### Advanced example
> Showing use of `.post` method and getting the response, using [through2][]

```js
const through2 = require('through2')
const request = require('simple-get-stream')

const stream = request.post({
  url: 'http://httpbin.org/post',
  body: JSON.stringify({
    foo: 'bar',
    baz: 'qux'
  })
})

stream.once('error', console.error)
stream.pipe(through2(function (buf) {
  var res = buf.toString()
  var data = JSON.parse(res)

  console.log(data.json) 
  /* => {
    foo: 'bar',
    baz: 'qux'
  } */
}))
```

## Related
* [github-base](https://www.npmjs.com/package/github-base): Base methods for creating node.js apps that work with the GitHub… [more](https://www.npmjs.com/package/github-base) | [homepage](https://github.com/jonschlinkert/github-base)
* [npm-info](https://www.npmjs.com/package/npm-info): Base class for downloading data from the npm registry | [homepage](https://github.com/doowb/npm-info)
* [request-all](https://www.npmjs.com/package/request-all): Performs a multiple requests and data from all pages are concatenated… [more](https://www.npmjs.com/package/request-all) | [homepage](https://github.com/tunnckocore/request-all)
* [simple-get](https://www.npmjs.com/package/simple-get): Simplest way to make http get requests. Supports HTTPS, redirects, gzip/deflate,… [more](https://www.npmjs.com/package/simple-get) | [homepage](https://github.com/feross/simple-get)
* [simple-get-stream](https://www.npmjs.com/package/simple-get-stream): Simply wraps `simple-get` and his methods to return Response stream instead… [more](https://www.npmjs.com/package/simple-get-stream) | [homepage](https://github.com/tunnckocore/simple-get-stream)
* [then-got](https://www.npmjs.com/package/then-got): Promisified `simple-get`. | [homepage](https://github.com/hybridables/then-got)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/simple-get-stream/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[simple-get]: https://github.com/feross/simple-get
[through2]: https://github.com/rvagg/through2

[npmjs-url]: https://www.npmjs.com/package/simple-get-stream
[npmjs-img]: https://img.shields.io/npm/v/simple-get-stream.svg?label=simple-get-stream

[license-url]: https://github.com/tunnckoCore/simple-get-stream/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/simple-get-stream
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/simple-get-stream.svg

[travis-url]: https://travis-ci.org/tunnckoCore/simple-get-stream
[travis-img]: https://img.shields.io/travis/tunnckoCore/simple-get-stream/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/simple-get-stream
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/simple-get-stream.svg

[david-url]: https://david-dm.org/tunnckoCore/simple-get-stream
[david-img]: https://img.shields.io/david/tunnckoCore/simple-get-stream.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

