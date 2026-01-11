const express = require("express");
const fs = require("fs"); // File system
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send(`
    <h2>Enter Your Name</h2>
    <form method="POST" action="/submit">
      <input type="text" name="username" required />
      <button type="submit">Submit</button>
    </form>
  `);
});

app.post("/submit", (req, res) => {
  const name = req.body.username;

  // ✅ Save name to a file
  fs.appendFileSync("names.txt", name + "\n");

  res.send(`<h2>Name Saved: ${name}</h2>`);
});

app.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
