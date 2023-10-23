// import statements
import {username, password} from "./modules/credentials.mjs";
import users from "./users.json" assert { type: "json" };
import express from 'express';

const app = express();

// the default port specified
const PORT = 3000;

// bind port
app.listen(PORT, () => {
    console.log("Server listening on port ", PORT);
});

// returns the hard-coded login credentials imported from saved modules
app.get("/login", (request, response) => {
    const login = {
       "Username" : username,
       "Password" : password
    };
    response.send(login);
});

// returns the user data imported from json files, based on JSON Placeholder's user data
app.get("/users", (request, response) => {
    response.send(users);
});