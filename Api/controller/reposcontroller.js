const router = require("express").Router();
const organizeRepos = require("../util/organizeRepos");

router.get("/repos", async (req, res) => {
  try {
    const repos = await organizeRepos();
    res.status(200).json({ data: repos });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
