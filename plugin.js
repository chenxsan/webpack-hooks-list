const MyPlugin = 'MYPlugin'
let bin = []
function snapshot(hook, time = new Date().getTime()) {
  bin = bin.concat([[hook, time]])
}
const targetLength = 30
class Plugin {
  apply(compiler) {
    const compilerHooks = [
      'additionalPass',
      'afterCompile',
      'afterDone',
      'afterEmit',
      'afterEnvironment',
      'afterPlugins',
      'afterResolvers',
      'assetEmitted',
      'beforeCompile',
      'beforeRun',
      'compile',
      'contextModuleFactory',
      'emit',
      'entryOption',
      'environment',
      'infrastructureLog',
      'initialize',
      'make',
      'normalModuleFactory',
      'run',
      'shouldEmit',
      'thisCompilation',
      'watchClose',
      'watchRun',
      'watchRun',
    ]
    const compilationHooks = [
      'buildModule',
      'rebuildModule',
      'failedModule',
      'succeedModule',
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
      if (typeof compiler.hooks[hook] === 'undefined') {
        throw new Error(`${hook} does not exist in compiler`)
      }
      compiler.hooks[hook].tap(MyPlugin, () => {
        snapshot(`${'compiler.hooks'.padStart(targetLength)}.${hook.padEnd(targetLength)}`)
      })
    })
    compiler.hooks.compilation.tap(MyPlugin, (compilation) => {
      compilationHooks.forEach((hook) => {
        if (typeof compilation.hooks[hook] === 'undefined') {
          throw new Error(`${hook} does not exist in compilation`)
        }
        compilation.hooks[hook].tap(MyPlugin, () => {
          snapshot(`${'compilation.hooks'.padStart(targetLength)}.${hook.padEnd(targetLength)}`)
        })
      })
    })
    compiler.hooks.done.tap(MyPlugin, () => {
      snapshot(`${'compiler.hooks'.padStart(targetLength)}.${'done'.padEnd(targetLength)}`)
      console.table(bin)
    })
  }
}
module.exports = Plugin
