require("dotenv").config();

const supabase = require("./utils/supabase");

async function testDB() {
  console.log("Testing connection...");

  const { data, error } = await supabase
    .from("users")
    .select("*");

  if (error) {
    console.log("ERROR:");
    console.log(error);
  } else {
    console.log("SUCCESS:");
    console.log(data);
  }
}

testDB();