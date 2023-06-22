// Import express and body-parser modules
const express = require("express");
const bodyParser = require("body-parser");

// Create an express app
const app = express();

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route to handle POST requests to /politicians
app.post("/politicians", (req, res) => {
  // Get the politicians array and the party name from the request body
  let politicians = req.body.politicians;
  let party = req.body.party;

  // Create an object of MaxVote class and call its method for the given party
  let mv = new MaxVote(politicians, party);
  let mvPolitician = mv.getMaxVote();

  // Create an object of MaxMoney class and call its method for the given party
  let mm = new MaxMoney(politicians, party);
  let mmPolitician = mm.getMaxMoney();

  // Send a response with the names and values of the politicians with the maximum votes and money in the given party
  res.json({
    maxVote: {
      name: mvPolitician.name,
      votes: mvPolitician.votes,
    },
    maxMoney: {
      name: mmPolitician.name,
      money: mmPolitician.money,
    },
  });
});

// Define a port to listen on
const port = 3000;

// Start the server and listen on the port
app.listen(port, () => {
  console.log("Server is running on port " + port);
});
