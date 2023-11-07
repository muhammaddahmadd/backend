async function insert() {
  try {
    const user = await User.findOne({ email: "Amjad@desolint.com" });
    if (!user) {
      const newUser = new User({
        email: "Amjad@desolint.com",
        password: "123456abc",
      });
      await newUser.save();
      console.log("Data inserted successfully");
    }
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}

// Call the insert function before starting the server
await insert();
