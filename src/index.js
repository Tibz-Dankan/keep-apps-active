"use strict";

const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const keepActiveController = (app) => {
  app.use((req, res, next) => {
    if (process.env.NODE_ENV === "production") {
      app.use(cors({ origin: "https://keep-active-backend.onrender.com" }));
    } else {
      app.use(cors());
    }

    app.post("/api/keep-active", (req, res) => {
      try {
        console.log(req.body);

        res
          .status(200)
          .json({ status: "success", message: `Hi from ${appName}` });
      } catch (error) {
        console.warn(error);
        res.status(500).json({ status: "fail", message: error.message });
      }
    });

    next();
  });
};

module.exports = {
  keepActiveController,
};
