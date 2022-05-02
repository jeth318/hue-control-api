const { MongoClient } = require("mongodb");
const { mongoUri } = require("../rest/config");

const client = new MongoClient(mongoUri);

const getCollection = async () => {
  const cluster = await client.connect();
  const db = cluster.db("automator");
  return db.collection("state");
};

const getState = async () => {
  try {
    const collection = await getCollection();
    const state = await collection.findOne({});
    console.log(state.active);
    return state.active;
  } catch (error) {
    console.log("Error", error);
  } finally {
    client.close();
  }
};

const setState = async (active) => {
  try {
    const collection = await getCollection();
    const currentState = await collection.findOne();
    await collection.findOneAndUpdate(
      { _id: currentState._id },
      { $set: { active } },
      { upsert: true }
    );
    return active;
  } catch (error) {
    console.log("Error", error);
  } finally {
    client.close();
  }
};

module.exports = { getState, setState };
