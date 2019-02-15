const express = require("express")
const router = express.Router()
const blogPostController = require("../controllers/blogPost")


router.get("/", blogPostController.index)
router.get("/show", blogPostController.show)

module.exports = router