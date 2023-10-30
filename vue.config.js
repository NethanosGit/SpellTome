const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    workboxPluginMode: "GenerateSW",
  },
  transpileDependencies: true,
});
