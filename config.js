module.exports = {
    // Default time to live of a message
    "time_to_live": 3600,
    // Mapping the Heading of the Excel file (first row) in message fields
    "field_map": {
        "fiscal_code": "Destinatario",
        "subject": "Titolo",
        "markdown": "Testo",
        "due_date": "Scadenza"
    },
    // conversion functions you can apply to each field
    "convert": {
        // convert Excel date in JavaScript date
        "due_date": function(v) { return new Date(Math.round((v - 25569)*86400*1000)) }
    },
    // describe the form - supported field are in the list
    "form": [
        // shows infomative message in the form
        {
            "type": "message",
            "name": "note",
            "description": "Write 'file' for import excel, write 'webapi' to download json data"
        },
        // choose source type
        {
            "name": "sourcetype",
            "description": "Choose 'file' or 'webapi'",
            "type": "string",
            "required": true
        }
        /*,
        // a string field
        {
        "name": "login",
        "description": "Login",
        "type": "string",
        "required": true
        },
        // a password field
        {
        "name": "password",
        "description": "Password",
        "type": "password",
        "required": true
        }*/
  ]
}
