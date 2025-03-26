const axios = require("axios");
const fs = require("fs");

require("dotenv").config();

const { OPENXBL_KEY, XBL_XUID } = process.env;
const url = "https://xbl.io/api/v2";

var dataDir = '../_data/oxbl';

if ( !fs.existsSync(dataDir) ) {
    fs.mkdirSync(dataDir);
}


axios
  .get(`${url}/account/${XBL_XUID}`, {
    headers: {
      "x-authorization": OPENXBL_KEY,
    },
  })
  .then((response) => {
    // console.log("Fetched Data:", response.data);
    fs.writeFile(
      `${dataDir}/account.json`,
      JSON.stringify(response.data, null, 2).replaceAll("boot", "--boot"),
      "utf8",
      (err) => console.log(err)
    );
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });


axios
  .get(`${url}/player/summary/${XBL_XUID}`, {
    headers: {
      "x-authorization": OPENXBL_KEY,
    },
  })
  .then((response) => {
    // console.log("Fetched Data:", response.data);
    fs.writeFile(
      `${dataDir}/summary.json`,
      JSON.stringify(response.data, null, 2).replaceAll("boot", "--boot"),
      "utf8",
      (err) => console.log(err)
    );
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });


  axios
  .get(`${url}/player/titleHistory/${XBL_XUID}`, {
    headers: {
      "x-authorization": OPENXBL_KEY,
    },
  })
  .then((response) => {
    // console.log("Fetched Data:", response.data);
    fs.writeFile(
      `${dataDir}/history.json`,
      JSON.stringify(response.data, null, 2).replaceAll("boot", "--boot"),
      "utf8",
      (err) => console.log(err)
    );
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });


  axios
  .get(`${url}/achievements/player/${XBL_XUID}`, {
    headers: {
      "x-authorization": OPENXBL_KEY,
    },
  })
  .then((response) => {
    // console.log("Fetched Data:", response.data);
    fs.writeFile(
      `${dataDir}/achievements.json`,
      JSON.stringify(response.data, null, 2).replaceAll("boot", "--boot"),
      "utf8",
      (err) => console.log(err)
    );
  })
  .catch((error) => {
    console.error("Error:", error.message);
  });
