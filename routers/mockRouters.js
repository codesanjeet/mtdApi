const express = require("express");
const mockController = require("../controllers/mockController");
const router = express.Router();

router.route("/cat/set/post").post(mockController.createCatset);
router.route("/cat/set/:setId").get(mockController.getCatsetBySetId);
router.route("/cat/set/:setId/VARC").get(mockController.getVARCBySetId);
router.route("/cat/set/:setId/DILR").get(mockController.getDILRBySetId);
router.route("/cat/set/:setId/QUANT").get(mockController.getQUANTBySetId);

module.exports = router;
