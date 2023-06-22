const { MongoClient } = require('mongodb');

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
  constructor(collection) {
    this.collection = collection;
  }

  async createPolitician(politician) {
    await this.collection.insertOne(politician);
  }

  async readPoliticians() {
    const politicians = await this.collection.find().toArray();
    return politicians;
  }

  async updatePolitician(name, updates) {
    await this.collection.updateOne({ name }, { $set: updates });
  }

  async deletePolitician(name) {
    await this.collection.deleteOne({ name });
  }
}

async function main() {
  const uri = 'mongodb+srv://mohithmurthy10:mq1E9LxDaFLf2sNq@cluster0.yzadrb4.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URI
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('college');
    const politiciansCollection = database.collection('politicians');

    const party = new Party(politiciansCollection);

    // Create politicians
    const politician1 = new Politician('Politician 1', 1000, 50000);
    await party.createPolitician(politician1);
    await party.createPolitician(new Politician('Politician 2', 2000, 60000));
    await party.createPolitician(new Politician('Politician 3', 3000, 70000));
    await party.createPolitician(new Politician('Politician 4', 4000, 80000));

    // Read all politicians
    const allPoliticians = await party.readPoliticians();
    console.log('All Politicians:', allPoliticians);

    //Update a politician
    const updates = { votes: 1500, money: 75000 };
    await party.updatePolitician('Politician 1', updates);

    //Read all politicians after the update
    const updatedPoliticians = await party.readPoliticians();
    console.log('Updated Politicians:', updatedPoliticians);

    // Delete a politician
    console.log("deleted")
    await party.deletePolitician('Politician 3');
    
    

    // Read all politicians after the deletion
    const remainingPoliticians = await party.readPoliticians();
    console.log('Remaining Politicians:', remainingPoliticians);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    // Close the MongoDB connection
    await client.close();
  }
}

main();