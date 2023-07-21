import express  from "express";
const router = express.Router();
const surveyControler = require('../controllers/surveyControler');

router.get('/', surveyControler.getNames);

module.exports = router;
