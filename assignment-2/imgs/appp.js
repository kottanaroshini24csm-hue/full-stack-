const { MongoClient } = require("mongodb");

const mongoUrl = "mongodb://localhost:27017";
const mongoClient = new MongoClient(mongoUrl);

async function main() {
  try {
    await mongoClient.connect();
    console.log("Connected to MongoDB successfully.\n");

    const database = mongoClient.db("universityDB");
    const learners = database.collection("learners");

    // Start from a clean collection
    await learners.deleteMany({});

    // 1. Insert documents
    console.log("--- 1. Inserting Learner Records ---");
    const learnerList = [
      { rollNo: "24CM101", name: "Karthik Rao", branch: "CSE-AIML", year: 3, marks: 81, email: "karthik@example.com" },
      { rollNo: "24CM102", name: "Divya Nair", branch: "CSE", year: 2, marks: 94, email: "divya@example.com" },
      { rollNo: "24CM103", name: "Harsha Vardhan", branch: "ECE", year: 3, marks: 72, email: "harsha@example.com" },
      { rollNo: "24CM104", name: "Meghana Iyer", branch: "CSE-AIML", year: 4, marks: 48, email: "meghana@example.com" },
      { rollNo: "24CM105", name: "Sai Teja", branch: "IT", year: 2, marks: 66, email: "saiteja@example.com" },
      { rollNo: "24CM106", name: "Lakshmi Priya", branch: "CSE", year: 3, marks: 89, email: "lakshmi@example.com" }
    ];
    await learners.insertMany(learnerList);
    console.log("Inserted 6 learners.\n");

    // 2. Display all learners
    console.log("--- 2. All Learners ---");
    console.table(await learners.find().toArray());

    // 3. Display learners in CSE-AIML
    console.log("--- 3. Learners in CSE-AIML ---");
    console.table(await learners.find({ branch: "CSE-AIML" }).toArray());

    // 4. Display learners with marks > 75
    console.log("--- 4. Learners with Marks > 75 ---");
    console.table(await learners.find({ marks: { $gt: 75 } }).toArray());

    // 5. Search by rollNo
    console.log("--- 5. Search Learner by Roll No (24CM101) ---");
    console.log(await learners.findOne({ rollNo: "24CM101" }));

    // 6. Condition: Year 3 and marks >= 70
    console.log("\n--- 6. Year 3 Learners with Marks >= 70 ---");
    console.table(await learners.find({ year: 3, marks: { $gte: 70 } }).toArray());

    // 7. Update marks
    console.log("\n--- 7. Update Marks of 24CM101 to 96 ---");
    await learners.updateOne({ rollNo: "24CM101" }, { $set: { marks: 96 } });
    console.log(await learners.findOne({ rollNo: "24CM101" }));

    // 8. Update email and branch
    console.log("\n--- 8. Update Email and Branch of 24CM103 ---");
    await learners.updateOne(
      { rollNo: "24CM103" },
      { $set: { email: "harsha.new@example.com", branch: "CSE" } }
    );
    console.log(await learners.findOne({ rollNo: "24CM103" }));

    // 9. Delete a learner
    console.log("\n--- 9. Delete Learner 24CM105 ---");
    await learners.deleteOne({ rollNo: "24CM105" });
    console.log("Deleted. Remaining count:", await learners.countDocuments());

    // 10. Sort by marks (descending)
    console.log("\n--- 10. Learners Sorted by Marks (Descending) ---");
    console.table(await learners.find().sort({ marks: -1 }).toArray());

    // 11. Create a unique index
    console.log("\n--- 11. Creating Unique Index on rollNo ---");
    const indexName = await learners.createIndex({ rollNo: 1 }, { unique: true });
    console.log("Index created:", indexName);

    // Real-time extension queries
    console.log("\n================ REAL-TIME EXTENSION ================");

    console.log("\nLearners Scoring > 80:");
    console.table(await learners.find({ marks: { $gt: 80 } }).toArray());

    console.log("\nLearners Scoring < 50:");
    console.table(await learners.find({ marks: { $lt: 50 } }).toArray());

    console.log("\nHighest-Scoring Learner:");
    const toppers = await learners.find().sort({ marks: -1 }).limit(1).toArray();
    console.table(toppers);

  } finally {
    await mongoClient.close();
    console.log("\nConnection closed.");
  }
}

main().catch(console.error);
