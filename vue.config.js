const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  pwa: {
    workboxPluginMode: "GenerateSW",
  },
  base: "/SpellTome/",
  transpileDependencies: true,
});
