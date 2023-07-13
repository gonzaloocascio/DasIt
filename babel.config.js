module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.tsx, .ts'],
        alias: {
          '@src': './src',
          '@assets': './src/assets',
          '@components': './src/components',
          '@screens': './src/screens',
          '@store': './src/store',
          '@navigation': './src/navigation',
        },
      },
    ],
    // 'react-native-reanimated/plugin',
  ],
};
