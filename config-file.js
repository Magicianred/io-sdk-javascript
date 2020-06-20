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
    "sourcetype": "file",
    // describe the form - supported field are in the list
    "form": [
        // shows infomative message in the form
        {
            "type": "message",
            "name": "note",
            "description": "Upload the Excel file in the configured format"
        },
        // upload a file as a base64 string
        {
            "name": "file",
            "description": "Excel File",
            "type": "upload",
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
