// craco.config.js

module.exports = {
    webpack: {
      configure: (webpackConfig, { env, paths }) => {
        webpackConfig.optimization = {
          ...webpackConfig.optimization,
          portableRecords: true,
        };
        return webpackConfig;
      },
    },
  };
  