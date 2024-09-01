// Building a RESTful API

// Lecture: Section Overview

/*
    - An "uptime monitor" allows users to enter URLs they want monitored,
    and receive alerts when those resources "go down" or "come back down".
    - The app should be useable, so we'll include features such as
    user sign-in and sign-up.
    - We'll also include functionality for sending an SMS alert to a user,
    rather than email.
    - Requirements
        - The API listens on a PORT and accepts incoming HTTP requests
        for POST, GET, PUT, DELETE and HEAD.
        - The API allows a client to connect, then create a new user,
        then edit and delete that user.
        - The API allows a user to "sign in" which gives them a token that
        they can use for subsequent authenticated requests.
        - The API allows a user to "sign up" which invalidates their token.
        - The API allows a signed-in user to use their token to create a new "check".
        - The API allows a signed-in user to edit or delete any of their checks.
        - In the background, workers perform all the "checks" at the appropriate times,
        and send alerts to the users when a check changes its state from "up" to
        "down", or vice versa.
    - For our app, we'll use the filesystem as a key-value store of JSON docs.
    In a real app, database is needed.
*/

// Dependenies
const http = require("http");

// The server should respond to all requests with a string
const server = http.createServer(function(req, res) {
    res.end("Hello World\n");
});

// Start the server, and have it listen on port 3000
server.listen(3000, function() {
    console.log("The server is listening on port 3000 now.")  
})