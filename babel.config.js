module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "~components": "./components",
            "~assets": "./assets",
            "~utils": "./utils",
            "~hooks": "./hooks",
            "~config": "./config",
            "~guards": "./guards",
            "~localization": "./localization",
            "~static": "./static",
            "~store": "./store",
            "~partials": "./partials",
            "~http": "./http",
            "~types": "./types",
            "~schemas": "./schemas",
          },
          extensions: [
            ".svg",
            ".js",
            ".jsx",
            ".ts",
            ".tsx",
            ".json",
            ".native.js",
            ".android.js",
            ".ios.js",
            ".native.ts",
            ".android.ts",
            ".ios.ts",
          ],
        },
      ],
    ],
  };
};
