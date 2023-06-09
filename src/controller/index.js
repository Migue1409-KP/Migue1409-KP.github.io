const controller = {
  getIndex: (req, res) => {
    res.render("index", { title: "Hi there" });
  },
};

module.exports = controller;