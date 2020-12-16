const db = require("../../data/connection"); 

module.exports = {
    add,
    find,
    findBy,
    findById,
    getAll
  };
  
  function find() {
    return db("users").select("id", "username").orderBy("id");
  }
  
  function findBy(filter) {
    return db("users").where(filter).orderBy("id");
  }
  
  async function add(user) {
    const [id] = await db("users").insert(user, "id");
    return findById(id);
  }
  
  function findById(id) {
    return db("users").where({ id }).first();
  }

  function getAll(){
    return db("users"); 
  }
  