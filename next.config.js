require('dotenv').config();
const withCSS = require("@zeit/next-css");

module.exports = withCSS()

module.exports = {
  env: {
    CLIENT_URL: process.env.CLIENT_URL,
  },
};
