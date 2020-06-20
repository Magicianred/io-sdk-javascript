const fs = require('fs')
const importerFile = require("./importer-file")

test("importer File", () => {
    let data = fs.readFileSync("data/test.xlsx").toString('base64')
    let imp = importerFile(data)
    expect(imp).toMatchSnapshot()
})