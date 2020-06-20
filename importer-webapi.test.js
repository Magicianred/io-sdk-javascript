const fs = require('fs')
const importerWebApi = require("./importer-webapi")

test("importer WebApi", async () => {
    let endpoint = "https://raw.githubusercontent.com/Magicianred/io-sdk-javascript/webapi/data/messages.json";
    const imp = await importerWebApi(endpoint)
    expect(imp != null).toBe(true)
    expect(Array.isArray(imp)).toBe(true)
    expect(imp).toMatchSnapshot()
})

test("importer WebApi NotFound", async () => {
    let endpoint = "https://raw.githubusercontent.com/Magicianred/io-sdk-javascript/webapi/data/notfound.json";
    const imp = await importerWebApi(endpoint)
    expect(imp != null).toBe(true)
    expect(Array.isArray(imp)).toBe(false)
    expect(imp).toMatchSnapshot()
})