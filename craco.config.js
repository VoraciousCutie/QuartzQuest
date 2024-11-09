const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@elements': path.resolve(__dirname, 'src/components/elements'),
      '@modules': path.resolve(__dirname, 'src/components/modules'),
    },
  },
};