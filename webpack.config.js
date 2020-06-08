const Plugin = require('./plugin')
module.exports = {
  mode: 'production',
  plugins: [
    new Plugin()
  ]
}