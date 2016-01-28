# simple-get-stream
Simply wraps `simple-get` and his methods to return Response stream instead of Request stream. For example `simpleGet.get('http://httpbin.org/ip').pipe(process.stdout)`.
