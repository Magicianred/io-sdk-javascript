const fs = require('fs')
const importerFile = require("./importer-file")
const translate = require("./translate")

test("translate", () => {    
    let imp = importerFile(fs.readFileSync("data/data.xlsx").toString('base64'))
    //console.log(imp)
    let tran = translate(imp[0])
    //console.log(tran)
    expect(tran).toMatchSnapshot()
})