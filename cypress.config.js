const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');

//module.exports = defineConfig({
  
 
 // e2e: {

    module.exports = defineConfig({
      // setupNodeEvents can be defined in either
      // the e2e or component configuration
      e2e: {
    //     setupNodeEvents(on, config) {
    //       on('task', {
    //         readFileMaybe(filename) {
    //           if (fs.existsSync(filename)) {
    //             return fs.readFileSync(filename, 'utf8')
    //           }
    
    //           return null
    //         },
    //       })
    //     },
    //   },
    // })
    setupNodeEvents(on, config) {
      on('task', {
        exceltojsonconverter: (filepath) => {
          const result = excelToJson({
            source: fs.readFileSync(filepath)
          });
          return result;
        }
      });
      // implement node event listeners here
    },
   
    
  },
  
  
});
