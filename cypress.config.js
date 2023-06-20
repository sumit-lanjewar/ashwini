const { defineConfig } = require("cypress");
const xlsx = require("node-xlsx").default;
const fs = require("fs");
const path = require("path");

module.exports = defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 80000,
  reporter: "mochawesome",
  reporterOptions: {
    reporter: 'cypress-mochawesome-reporter'
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
     
      on("task", { parseXlsx({ filepath }) {
        return new Promise((resolve, reject) => {
          try {
            const jsondata = xlsx.parse(fs.readFileSync(filepath));
            resolve(jsondata);
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    // implement other node event listeners here
    config.screenshotOnRunFailure = true;
    return config;
  },
},
});

