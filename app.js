const express = require("express");
const app = express();
const models = require("./models");
const { Op } = require("sequelize");

/*
// CREATE
const task = models.task.build({
  title: "do the dishes",
  iscompleted: false,
});
task.save().then((newTask) => {
  console.log("newTask :", newTask);
});
*/

/*
// READ
// select all
models.task.findAll().then((tasks) => {
  console.log("tasks :", tasks);
});

// select attributes
models.task
  .findAll({
    attributes: ["title"],
  })
  .then((tasks) => {
    console.log("tasks :", tasks);
  });

// select with no filter
models.task.findOne().then((task) => {
  console.log("task :", task);
});

// select with filter
models.task
  .findOne({
    where: {
      title: "go home",
    },
  })
  .then((task) => {
    console.log("task :", task);
  });

// use Operator
models.task
  .findAll({
    where: {
      [Op.and]: [{ title: "go home" }, { iscompleted: "f" }],
    },
  })
  .then((tasks) => {
    console.log("tasks :", tasks);
  });  
*/

/*
// UPDATE
models.task
  .update(
    {
      iscompleted: "f",
    },
    {
      where: {
        title: "go home",
      },
    }
  )
  .then((result) => {
    console.log("result :", result);
  });
*/

/*
// DELETE
models.task
  .destroy({
    where: {
      title: "do the dishes",
    },
  })
  .then((removedItemsNum) => {
    console.log("removedItemsNum :", removedItemsNum);
  });
*/

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
