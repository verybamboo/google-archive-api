import db from "../db/connection.js";
import Article from "../models/article.js";
import Memory from "../models/memory.js";
import memories from "./memories.json" assert { type: "json" };
import { data } from "../testArticle.js";
// import allArticles from "../AllInOne.json" assert { type: "json" };

const insertData = async () => {
  await db.dropDatabase();

  await Memory.insertMany(memories);

  await Article.insertMany(data);

  await db.close();
};

insertData();

// const insertNewData = async () => {
//   await Article.deleteMany();
//   db.close();
// };
// insertNewData();
