module.exports = {
  stories: ["../src/**/*.stories.tsx"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],

  webpackFinal: async (config) => {
    config.node = {
      fs: "empty",
      __dirname: true,
      __filename: true,
    };
    config.resolve = {
      ...config.resolve,
      extensions: [".js", ".jsx", ".ts", ".tsx"],
    };

    config.output = {
      ...config.output,
      // https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15
      pathinfo: false,
    };
    const defaultRules = config.module.rules.filter((rule) => {
      return !(rule && rule.test && rule.test.toString().includes(".css"));
    });
    const customRules = [
      // ts(x)
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              // https://medium.com/@kenneth_chau/speeding-up-webpack-typescript-incremental-builds-by-7x-3912ba4c1d15
              experimentalWatchApi: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        exclude: /reboot\.css$/,
        use: [
          "style-loader",
          {
            loader: "dts-css-modules-loader",
            options: {
              namedExport: true,
            },
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                mode: "local",
                localIdentName: "[folder]__[local]__[hash:base64:5]",
              },
              importLoaders: 1,
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /reboot\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ];
    config.module.rules = [...defaultRules, ...customRules];
    return config;
  },
};
