const router = require("express").Router();
const ToDoList = require("../model/toDoList");
const mongoose = require("mongoose");
const _ = require("lodash");

//Later refactor into Controller / Controlles
router.route("/ToDoList").get(async (req, res) => {
  const myList = await ToDoList.find();
  console.log(myList);
  res.render("ToDoList/lists", { recievedList: myList });
});
router.route("/AddItemToList").post(async (req, res) => {
  const { newListItem } = req.body;
  const newListItemToAdd = { itemName: newListItem };
  const myList = await ToDoList.findById("62bf0c42cbe3fc03340c49e1");
  myList.listItem.unshift(newListItemToAdd);
  myList
    .save()
    .then((result) => {
      console.log("The Listtt\n");
      console.log(result);
      console.log("\n--EndOf .sve() resut--");
      setTimeout(() => {
        console.log(newListItem, newListItemToAdd);
      }, 2000);
    })
    .catch((err) => {
      setTimeout(() => {
        console.log(err);
      }, 2002);
    });

  res.redirect("/ToDoList");
});
//Single To DO List
router.route("/SignleToDoList").get(async (req, res) => {
  const myList = await ToDoList.findById("62bf0c42cbe3fc03340c49e1");
  res.render("ToDoList/lists", { recievedList: myList });
});

//This our only working route to make our project simple.
//Test List
router.route("/ToDoList/TestList").get(async (req, res) => {
  const myList = await ToDoList.findById("62bf0c42cbe3fc03340c49e1");
  console.log(`\n List Name: \n ` + myList);
  // myList.listItem.forEach((x) => {
  //   console.log(`\t ${x}`);
  // });
  res.render("ToDoList/TestList", { recievedList: myList });
});
router.route("/AddItemToTestList").post(async (req, res) => {
  const { newListItem } = req.body;
  const newListItemToAdd = { itemName: newListItem };
  const myList = await ToDoList.findById("62bf0c42cbe3fc03340c49e1");
  myList.listItem.unshift(newListItemToAdd);
  myList
    .save()
    .then((result) => {
      console.log("\n\n Added to list: " + newListItem);
    })
    .catch((err) => console.log(err));
  res.redirect("/ToDoList/TestList");
});

router.route("/delete/:itemID").get(async (req, res) => {
  let toDeleteitemID = req.params.itemID;
  //get the id and item id store it
  setTimeout(() => {
    console.log(toDeleteitemID);
  }, 2001);

  ToDoList.findByIdAndUpdate(
    "62bf0c42cbe3fc03340c49e1",
    { $pull: { listItem: { _id: toDeleteitemID } } },
    (err) => {
      if (err) {
        console.log(err);
        // ("Bad");
      } else {
        console.log("Deleted!!");
        // res.send("Done!!")
      }
    }
  );
  
  //   {
  //     //irrelevant fields
  //     "divers": [
  //         {
  //             "_id": "012345678",
  //             "user": "123456789",
  //             "meetingLocation": "carpool",
  //             "exercise": "34567890",
  //         },
  //         {
  //             "_id": "012345679",
  //             "user": "123456780",
  //             "meetingLocation": "onSite",
  //             "exercise": "34567890",
  //         }
  //     ]
  // }

  //   Dive.update({ _id: diveId },
  // { "$pull": { "divers": { "user": userIdToRemove } }},
  // { safe: true, multi:true }, function(err, obj) {
  //     //do something smart
  // });

  // var diveSchema = new Schema({
  //   //irrelevant fields
  //       divers: [{
  //           user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  //           meetingLocation: { type: String, enum: ['carpool', 'onSite'], required: true },
  //           dives: Number,
  //           exercise: { type: Schema.Types.ObjectId, ref: 'Exercise' },
  //       }]
  //   });

  //delete that item from mongoDB

  //redirect to the page or if error send error and redirect
  res.redirect("/ToDoList/TestList");
});

module.exports = router;
