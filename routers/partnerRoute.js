const partnerRouter = require("express").Router();
const partnerController = require("../controllers/partnerController");

partnerRouter.get("/", partnerController.getAllPartner);
partnerRouter.post("/add", partnerController.addOnePartner);
partnerRouter.put("/edit/:id", partnerController.updatePartner);
partnerRouter.delete("/delete/:id", partnerController.deletePartner);

module.exports = partnerRouter;
