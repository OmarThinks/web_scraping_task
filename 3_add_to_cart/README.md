# 3) Add To cart:



# Output:

The output is printed when running the code.



# How the code works:

1. Get The link of the product
2. get the quantity to be added to cart
3. Scrap the CSRF Token from the page
4. Scrap the product id
5. send the post request to add product to cart

# Dependencies:

1. **axios** (To send http requests)
2. **cheerio** (To prase the XML into js data types)





# How to run the code:

<b>

```bash
npm run add_to_cart
```
</b>

The result:

<b>

```bash
> scraping@1.0.0 add_to_cart E:\...\web_scraping_task
> node 3_add_to_cart/index.js

{
  status: 200,
  statusText: 'OK ',
  headers: {
    date: 'Mon, 26 Apr 2021 15:21:47 GMT',
    'content-type': 'application/json;charset=UTF-8',
    'content-length': '56',
    connection: 'close',
    'set-cookie': [
      ...
    ],
    'accept-ranges': 'bytes',
    'x-dw-request-base-id': '_9wsR4vahmABAAB_',
    'cache-control': 'no-cache, no-store, must-revalidate',
    pragma: 'no-cache',
    expires: 'Thu, 01 Dec 1994 16:00:00 GMT',
    'cf-cache-status': 'DYNAMIC',
    'cf-request-id': '09b05ec8bd000041dd3e3c3000000001',
    'expect-ct': 'max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"',
    server: 'cloudflare',
    'cf-ray': '6460cd879f1641dd-MRS'
  },
  config: {
    url: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct',
    method: 'post',
    data: 'format=ajax&Quantity=5&pid=427241712880&csrf_token=...exvdVwtG-Ps0Lm06EJRA%3D',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      'User-Agent': 'axios/0.21.1',
      'Content-Length': 233
    },
    transformRequest: [ [Function: transformRequest] ],
    transformResponse: [ [Function: transformResponse] ],
    timeout: 0,
    adapter: [Function: httpAdapter],
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    validateStatus: [Function: validateStatus]
  },
  request: <ref *1> ClientRequest {
    _events: [Object: null prototype] {
      socket: [Function (anonymous)],
      abort: [Function (anonymous)],
      aborted: [Function (anonymous)],
      connect: [Function (anonymous)],
      error: [Function (anonymous)],
      timeout: [Function (anonymous)],
      prefinish: [Function: requestOnPrefinish]
    },
    _eventsCount: 7,
    _maxListeners: undefined,
    outputData: [],
    outputSize: 0,
    writable: true,
    destroyed: false,
    _last: true,
    chunkedEncoding: false,
    shouldKeepAlive: false,
    _defaultKeepAlive: true,
    useChunkedEncodingByDefault: true,
    sendDate: false,
    _removedConnection: false,
    _removedContLen: false,
    _removedTE: false,
    _contentLength: null,
    _hasBody: true,
    _trailer: '',
    finished: true,
    _headerSent: true,
    socket: TLSSocket {
      _tlsOptions: [Object],
      _secureEstablished: true,
      _securePending: false,
      _newSessionPending: false,
      _controlReleased: true,
      secureConnecting: false,
      _SNICallback: null,
      servername: 'www.shopdisney.co.uk',
      alpnProtocol: false,
      authorized: true,
      authorizationError: null,
      encrypted: true,
      _events: [Object: null prototype],
      _eventsCount: 10,
      connecting: false,
      _hadError: false,
      _parent: null,
      _host: 'www.shopdisney.co.uk',
      _readableState: [ReadableState],
      _maxListeners: undefined,
      _writableState: [WritableState],
      allowHalfOpen: false,
      _sockname: null,
      _pendingData: null,
      _pendingEncoding: '',
      server: undefined,
      _server: null,
      ssl: [TLSWrap],
      _requestCert: true,
      _rejectUnauthorized: true,
      parser: null,
      _httpMessage: [Circular *1],
      [Symbol(res)]: [TLSWrap],
      [Symbol(verified)]: true,
      [Symbol(pendingSession)]: null,
      [Symbol(async_id_symbol)]: 238,
      [Symbol(kHandle)]: [TLSWrap],
      [Symbol(kSetNoDelay)]: false,
      [Symbol(lastWriteQueueSize)]: 0,
      [Symbol(timeout)]: null,
      [Symbol(kBuffer)]: null,
      [Symbol(kBufferCb)]: null,
      [Symbol(kBufferGen)]: null,
      [Symbol(kCapture)]: false,
      [Symbol(kBytesRead)]: 0,
      [Symbol(kBytesWritten)]: 0,
      [Symbol(connect-options)]: [Object],
      [Symbol(RequestTimeout)]: undefined
    },
    _header: 'POST /on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct HTTP/1.1\r\n' +
      'Accept: application/json, text/plain, */*\r\n' +
      'Content-Type: application/x-www-form-urlencoded; charset=UTF-8\r\n' +
      'User-Agent: axios/0.21.1\r\n' +
      'Content-Length: 233\r\n' +
      'Host: www.shopdisney.co.uk\r\n' +
      'Connection: close\r\n' +
      '\r\n',
    _keepAliveTimeout: 0,
    _onPendingData: [Function: noopPendingOutput],
    agent: Agent {
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      defaultPort: 443,
      protocol: 'https:',
      options: [Object],
      requests: {},
      sockets: [Object],
      freeSockets: {},
      keepAliveMsecs: 1000,
      keepAlive: false,
      maxSockets: Infinity,
      maxFreeSockets: 256,
      scheduling: 'fifo',
      maxTotalSockets: Infinity,
      totalSocketCount: 1,
      maxCachedSessions: 100,
      _sessionCache: [Object],
      [Symbol(kCapture)]: false
    },
    socketPath: undefined,
    method: 'POST',
    maxHeaderSize: undefined,
    insecureHTTPParser: undefined,
    path: '/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct',
    _ended: true,
    res: IncomingMessage {
      _readableState: [ReadableState],
      _events: [Object: null prototype],
      _eventsCount: 3,
      _maxListeners: undefined,
      socket: [TLSSocket],
      httpVersionMajor: 1,
      httpVersionMinor: 1,
      httpVersion: '1.1',
      complete: true,
      headers: [Object],
      rawHeaders: [Array],
      trailers: {},
      rawTrailers: [],
      aborted: false,
      upgrade: false,
      url: '',
      method: null,
      statusCode: 200,
      statusMessage: 'OK ',
      client: [TLSSocket],
      _consuming: false,
      _dumped: false,
      req: [Circular *1],
      responseUrl: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct',
      redirects: [],
      [Symbol(kCapture)]: false,
      [Symbol(RequestTimeout)]: undefined
    },
    aborted: false,
    timeoutCb: null,
    upgradeOrConnect: false,
    parser: null,
    maxHeadersCount: null,
    reusedSocket: false,
    host: 'www.shopdisney.co.uk',
    protocol: 'https:',
    _redirectable: Writable {
      _writableState: [WritableState],
      _events: [Object: null prototype],
      _eventsCount: 2,
      _maxListeners: undefined,
      _options: [Object],
      _ended: true,
      _ending: true,
      _redirectCount: 0,
      _redirects: [],
      _requestBodyLength: 233,
      _requestBodyBuffers: [],
      _onNativeResponse: [Function (anonymous)],
      _currentRequest: [Circular *1],
      _currentUrl: 'https://www.shopdisney.co.uk/on/demandware.store/Sites-disneyuk-Site/en_GB/Cart-AddProduct',
      [Symbol(kCapture)]: false
    },
    [Symbol(kCapture)]: false,
    [Symbol(kNeedDrain)]: false,
    [Symbol(corked)]: 0,
    [Symbol(kOutHeaders)]: [Object: null prototype] {
      accept: [Array],
      'content-type': [Array],
      'user-agent': [Array],
      'content-length': [Array],
      host: [Array]
    }
  },
  data: { tokenMessage: 'product.addtocart.invalid_token' }
}
```
</b>