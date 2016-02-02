/*!
 * simple-get-stream <https://github.com/tunnckoCore/simple-get-stream>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var request = require('./index')
var through2 = require('through2')
var isBuffer = require('is-buffer')

test('should main export simpleGet() returns response stream', function (done) {
  var stream = request('http://www.tunnckocore.tk')

  stream.once('error', done)
  stream.pipe(through2(function (buf) {
    test.strictEqual(isBuffer(buf), true)
    done()
  }))
})

test('should have response stream in `stream.res` property', function (done) {
  var stream = request('http://www.tunnckocore.tk')

  stream.once('error', done)
  stream.pipe(through2(function (buf) {
    test.ok(stream.res)
    done()
  }))
})

test('should work for other methods and return response stream', function (done) {
  var stream = request.post({
    url: 'http://httpbin.org/post',
    body: JSON.stringify({
      foo: 'bar',
      baz: 'qux'
    })
  })

  stream.once('error', done)
  stream.pipe(through2(function (buf) {
    var res = buf.toString()
    var data = JSON.parse(res)

    test.deepEqual(data.json, {
      foo: 'bar',
      baz: 'qux'
    })
    done()
  }))
})
