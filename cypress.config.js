const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;
module.exports = defineConfig({

  watchForFileChanges:false,
  //viewportHeight:736,
  //viewportWidth:414,
  e2e: {
    specPattern: "**/*.feature",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
    env:{
      username:'Admin',
      password:'admin123' 
    }
  },
});
