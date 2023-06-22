// A class to represent a politician with a name, party, votes and money
class Politician {
    constructor(name, party, votes, money) {
      this.name = name;
      this.party = party;
      this.votes = votes;
      this.money = money;
    }
  }
  
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
      for (let politician of this.politicians) { // loop through the politicians array
        if (politician.party === this.party && politician.votes > maxVote) { // if the current politician belongs to the given party and has more votes than the maximum vote
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
      for (let politician of this.politicians) { // loop through the politicians array
        if (politician.party === this.party && politician.money > maxMoney) { // if the current politician belongs to the given party and has more money than the maximum money
          maxMoney = politician.money; // update the maximum money
          maxPolitician = politician; // update the politician with the maximum money
        }
      }
      return maxPolitician; // return the politician with the maximum money or null if none found
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
  
  // Create an object of MaxVote class and call its method for party A
  let mvA = new MaxVote(politicians, "A");
  let mvAPolitician = mvA.getMaxVote();
  console.log("The politician with the maximum votes in party A is " + mvAPolitician.name + " with " + mvAPolitician.votes + " votes.");
  
  // Create an object of MaxMoney class and call its method for party B
  let mmB = new MaxMoney(politicians, "B");
  let mmBPolitician = mmB.getMaxMoney();
  console.log("The politician with the maximum money in party B is " + mmBPolitician.name + " with $" + mmBPolitician.money + ".");
  