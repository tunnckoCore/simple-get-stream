/*!
 * simple-get-stream <https://github.com/tunnckoCore/simple-get-stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var simpleGet = require('simple-get')
var through2 = require('through2')

/**
 * Request a page and return a response stream
 *
 * **Example**
 *
 * ```js
 * const request = require('simple-get-stream')
 * const stream = request('http://www.tunnckocore.tk')
 *
 * stream.once('error', console.error)
 * stream.pipe(process.stdout) // => html content of the page
 * ```
 *
 * @name  simpleGetStream
 * @param  {String|Object} `<opts>` url or options object, passed to `simple-get`
 * @return {Stream} Response stream instead of Request stream as `simple-get` does
 * @api public
 */
function simpleGetStream (opts) {
  var stream = through2()
  stream.req = simpleGet.call(this, opts, function callback (err, res) {
    if (err) return stream.emit('error', err)
    res.pipe(stream)
  })
  return stream
}

;['get', 'post', 'put', 'patch', 'head', 'delete'].forEach(function (method) {
  simpleGetStream[method] = function (opts) {
    if (typeof opts === 'string') opts = { url: opts }
    opts.method = method
    return simpleGetStream.call(this, opts)
  }
})

module.exports = simpleGetStream
