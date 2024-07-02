import express from "express";
const app = express(),
  port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
