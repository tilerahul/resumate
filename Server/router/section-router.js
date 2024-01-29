const express = require('express');
const router = express.Router();
const {basicDetailController, educationController, experienceController, 
    skillController, projectController, achievementController, certificationController, 
    langaugeController} = require('../controller/section-controller');

router.route('/bascidetails').post(basicDetailController);
router.route('/educations').post(educationController);
router.route('/experiences').post(experienceController);
router.route('/skills').post(skillController);
router.route('/projects').post(projectController);
router.route('/achievements').post(achievementController);
router.route('/certificates').post(certificationController);
router.route('/languages').post(langaugeController);

module.exports = router;