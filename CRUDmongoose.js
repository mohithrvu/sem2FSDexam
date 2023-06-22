// Import mongoose module
const mongoose = require("mongoose");

// Define the Politician class
class Politician {
  constructor(name, votes, money) {
    this.name = name;
    this.votes = votes;
    this.money = money;
  }
}

// Define the Party class
class Party {
  constructor(model) {
    this.model = model;
  }

  async createPolitician(politician) {
    await this.model.create(politician);
  }

  async readPoliticians() {
    const politicians = await this.model.find();
    return politicians;
  }

  async updatePolitician(name, updates) {
    await this.model.updateOne({ name }, updates);
  }

  async deletePolitician(name) {
    await this.model.deleteOne({ name });
  }
}

async function main() {
  // Connect to the MongoDB server
  const uri ='mongodb+srv://mohithmurthy10:mq1E9LxDaFLf2sNq@cluster0.yzadrb4.mongodb.net/?retryWrites=true&w=majority';
  await mongoose.connect(uri);

  // Define a mongoose schema for politicians
  const PoliticianSchema = new mongoose.Schema({
    name: String,
    votes: Number,
    money: Number
  });

  // Create a mongoose model for politicians
  const PoliticianModel = mongoose.model("Politician", PoliticianSchema);

  // Create a party object with the model
  const party = new Party(PoliticianModel);

  // Create politicians
  const politician1 = new Politician("Politician 1", 1000, 50000);
  await party.createPolitician(politician1);
  await party.createPolitician(new Politician("Politician 2", 2000, 60000));
  await party.createPolitician(new Politician("Politician 3", 3000, 70000));
  await party.createPolitician(new Politician("Politician 4", 4000, 80000));

  // Read all politicians
  const allPoliticians = await party.readPoliticians();
  console.log("All Politicians:", allPoliticians);

  // Update a politician
  const updates = { votes: 1500, money: 75000 };
  await party.updatePolitician("Politician 1", updates);

   // Read all politicians after the update
   const updatedPoliticians = await party.readPoliticians();
   console.log("Updated Politicians:", updatedPoliticians);

   // Delete a politician
   await party.deletePolitician("Politician 3");

   // Read all politicians after the deletion
   const remainingPoliticians = await party.readPoliticians();
   console.log("Remaining Politicians:", remainingPoliticians);

   // Close the connection
   await mongoose.connection.close();
}

main();
