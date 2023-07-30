module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    Plugin: ['react-native-reanimated/plugin'],
  };
};
