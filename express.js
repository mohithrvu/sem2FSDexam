






// A class to represent a politician with a name, party, votes and money
class Politician {
    constructor(name, party, votes, money) {
      this.name = name;
      this.party = party;
      this.votes = votes;
      this.money = money;
    }
  }

  // Create some politicians for testing
let p1 = new Politician("Alice", "A", 100, 500);
let p2 = new Politician("Bob", "B", 200, 300);
let p3 = new Politician("Charlie", "A", 150, 400);
let p4 = new Politician("David", "B", 250, 200);
let p5 = new Politician("Eve", "C", 50, 100);

// Create an array of politicians
let politicians = [p1, p2, p3, p4, p5];
  
  // A class to find the politician with the maximum votes in a given party
  class MaxVote {
    constructor(politicians, party) {
      this.politicians = politicians; // an array of Politician objects
      this.party = party; // the name of the party to filter by
    }
  
    // A method to return the politician with the maximum votes in the given party
    getMaxVote() {
      let maxVote = 0; // initialize the maximum vote
      let maxPolitician = null; // initialize the politician with the maximum vote
      for (let politician of this.politicians) {
        // loop through the politicians array
        if (
          politician.party === this.party &&
          politician.votes > maxVote
        ) {
          // if the current politician belongs to the given party and has more votes than the maximum vote
          maxVote = politician.votes; // update the maximum vote
          maxPolitician = politician; // update the politician with the maximum vote
        }
      }
      return maxPolitician; // return the politician with the maximum vote or null if none found
    }
  }
  
  // A class to find the politician with the maximum money in a given party
  class MaxMoney {
    constructor(politicians, party) {
      this.politicians = politicians; // an array of Politician objects
      this.party = party; // the name of the party to filter by
    }
  
    // A method to return the politician with the maximum money in the given party
    getMaxMoney() {
      let maxMoney = 0; // initialize the maximum money
      let maxPolitician = null; // initialize the politician with the maximum money
      for (let politician of this.politicians) {
        // loop through the politicians array
        if (
          politician.party === this.party &&
          politician.money > maxMoney
        ) {
          // if the current politician belongs to the given party and has more money than the maximum money
          maxMoney = politician.money; // update the maximum money
          maxPolitician = politician; // update the politician with the maximum money
        }
      }
      return maxPolitician; // return the politician with the maximum money or null if none found
    }
  }
  
  // Import express and body-parser modules
  const express = require("express");
  const bodyParser = require("body-parser");
  
  // Create an express app
  const app = express();
  
  // Use body-parser middleware to parse JSON requests
  app.use(bodyParser.json());
  
  // Define a route to handle GET requests to /politicians/max/:party
  app.get("/politicians/max/:party", (req, res) => {
    // Get the party name from the request params
    let party = req.params.party;
  
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
  