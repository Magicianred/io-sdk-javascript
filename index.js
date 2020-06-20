const config = require("./config");
const configFile = require("./config-file");
const configWebApi = require("./config-webapi");
const importerFile = require("./importer-file");
const importerWebApi = require("./importer-webapi");
const translate = require("./translate");

function main(args) {
    let body = { "form": config.form }
    if (args.sourcetype) {
        if (args.sourcetype.toLowerCase() == 'file') {
            body = { "form": configFile.form }

        } else if (args.sourcetype.toLowerCase() == 'webapi') {
            body = { "form": configWebApi.form }

        }
    } else if (args.file) {
        let rows = importerFile(args.file)
        let data = []
        for(row of rows) 
            data.push(translate(row))
        body = { data: data }

    } else if (args.webapi) {
        let rows = importerWebApi(args.webapi)
        let data = []
        for(row of rows) 
            data.push(translate(row))
        body = { data: data }

    }
    
    return { "body": body }
}

module.exports.main = main
