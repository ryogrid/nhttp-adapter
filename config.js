module.exports = {
  nhttp_urls: [
    "https://ryogrid.net:8889",
    // "https://example2.com/anotherEndpoint",
    // ....
  ],
  port: 4000,
  clusters: 1,

  server_meta: {
    "contact": "unset",
    "pubkey": "0000000000000000000000000000000000000000000000000000000000000000",
    "description": "nhttp adapter",
    "name": "nhttp",
    "software": "git+https://github.com/Yonle/nhttp-adapter",
    "supported_nips": [1,2,9,11,12,15,16,20,22,33,40,50],
    "version": require("./package.json").version
  }
}
