const main = require("./index").main
const fs = require('fs')

test("main form", () => {
    //console.log(main)
    let form = main({})
    //console.log(form.body.form)
    expect(form).toMatchSnapshot()
})

test("choose file form", () => {
    //console.log(main)
    let form = main({ "sourcetype": "file" })
    //console.log(form.body.form)
    expect(form).toMatchSnapshot()
})

test("file form return data", () => {
    let file = fs.readFileSync("data/data.xlsx").toString('base64')
    let data = main({ "file": file })
    expect(data).toMatchSnapshot()
})

test("choose webapi form", () => {
    //console.log(main)
    let form = main({ "sourcetype": "webapi" })
    //console.log(form.body.form)
    expect(form).toMatchSnapshot()
})

test("webapi form return data", () => {
    let file = fs.readFileSync("data/data.xlsx").toString('base64')
    let data = main({ "file": file })
    expect(data).toMatchSnapshot()
})

