const sejarahController = require("../controllers/sejarah");
const router = require("express").Router();

router.get("/", sejarahController.getAll);
router.post("/", sejarahController.create);
router.get("/:id", sejarahController.findOne);
router.put("/:id", sejarahController.update);
router.delete("/:id", sejarahController.delete);

module.exports = router;
