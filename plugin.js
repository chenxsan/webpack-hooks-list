const MyPlugin = 'MYPlugin'
let bin = []
function snapshot(hook, time = new Date().getTime()) {
  bin = bin.concat([[hook, time]])
}
const targetLength = 35
class Plugin {
  apply(compiler) {
    const compilerHooks = Object.keys(compiler.hooks)
    compilerHooks.forEach((hook) => {
      compiler.hooks[hook].tap(MyPlugin, () => {
        snapshot(
          `${'compiler.hooks'.padStart(targetLength)}.${hook.padEnd(
            targetLength
          )}`
        )
      })
    })
    compiler.hooks.compilation.tap(MyPlugin, (compilation) => {
      Object.keys(compilation.hooks).forEach((hook) => {
        try {
          compilation.hooks[hook].tap(MyPlugin, () => {
            snapshot(
              `${'compilation.hooks'.padStart(targetLength)}.${hook.padEnd(
                targetLength
              )}`
            )
          })
        } catch (err) {
          console.log(hook, ' Cannot use tap')
        }
      })
    })
    compiler.hooks.done.tap(MyPlugin, () => {
      console.table(bin)
    })
  }
}
module.exports = Plugin
