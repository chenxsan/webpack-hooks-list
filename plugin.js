const MyPlugin = 'MYPlugin'
let bin = []
function snapshot(hook, time = new Date().getTime()) {
  bin = bin.concat([[hook, time]])
}
const targetLength = 50
class Plugin {
  apply(compiler) {
    const compilerHooks = Object.keys(compiler.hooks)
    const compilationHooks = [
      'buildModule',
      'rebuildModule',
      'failedModule',
      'succeedModule',
      'stillValidModule',
      'addEntry',
      'failedEntry',
      'succeedEntry',
      'dependencyReferencedExports',
      'finishModules',
      'finishRebuildingModule',
      'seal',
      'unseal',
      'optimizeDependencies',
      'afterOptimizeDependencies',
      'optimize',
      'optimizeModules',
      'afterOptimizeModules',
      'optimizeChunks',
      'afterOptimizeChunks',
      'optimizeTree',
      'afterOptimizeTree',
      'optimizeChunkModules',
      'afterOptimizeChunkModules',
      'shouldRecord',
      'reviveModules',
      'beforeModuleIds',
      'moduleIds',
      'optimizeModuleIds',
      'afterOptimizeModuleIds',
      'reviveChunks',
      'beforeChunkIds',
      'optimizeChunkIds',
      'afterOptimizeChunkIds',
      'recordModules',
      'recordChunks',
      'beforeHash',
      'afterHash',
      'recordHash',
      'record',
      'beforeModuleAssets',
      'additionalChunkAssets',
      'shouldGenerateChunkAssets',
      'beforeChunkAssets',
      'additionalAssets',
      'optimizeChunkAssets',
      'afterOptimizeChunkAssets',
      'optimizeAssets',
      'afterOptimizeAssets',
      'processAssets',
      'afterProcessAssets',
      'needAdditionalSeal',
      'afterSeal',
      'chunkHash',
      'moduleAsset',
      'chunkAsset',
      'assetPath',
      'needAdditionalPass',
      'childCompiler',
    ]
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
