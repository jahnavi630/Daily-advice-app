import express from "express";
const app = express();
const port = 3000;

// Set the view engine to ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  let today;
  if (req.query.date) {
    today = new Date(req.query.date);
  } else {
    today = new Date(); // Use current date and time if no date is provided
  }
  
  const day = today.getDay();

  let type = "a weekday";
  let adv = "it's time to work hard";

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  res.render("index", {
    dayType: type,
    advice: adv,
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
