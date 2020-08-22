# The execute order of webpack hooks

There're so many hooks in webpack, and you might be wondering in exactly which order they run.

Here's the order list running `yarn webpack` compiling this project:

```
┌─────────┬──────────────────────────────────────────────────────────────────────┬───────────────┐
│ (index) │                                  0                                   │       1       │
├─────────┼──────────────────────────────────────────────────────────────────────┼───────────────┤
│    0    │   '                compiler.hooks.environment                   '    │ 1598072027176 │
│    1    │   '                compiler.hooks.afterEnvironment              '    │ 1598072027176 │
│    2    │   '                compiler.hooks.entryOption                   '    │ 1598072027181 │
│    3    │   '                compiler.hooks.afterPlugins                  '    │ 1598072027222 │
│    4    │   '                compiler.hooks.afterResolvers                '    │ 1598072027222 │
│    5    │   '                compiler.hooks.initialize                    '    │ 1598072027222 │
│    6    │   '                compiler.hooks.beforeRun                     '    │ 1598072027222 │
│    7    │   '                compiler.hooks.run                           '    │ 1598072027223 │
│    8    │   '                compiler.hooks.normalModuleFactory           '    │ 1598072027224 │
│    9    │   '                compiler.hooks.contextModuleFactory          '    │ 1598072027224 │
│   10    │   '                compiler.hooks.beforeCompile                 '    │ 1598072027224 │
│   11    │   '                compiler.hooks.compile                       '    │ 1598072027224 │
│   12    │   '                compiler.hooks.thisCompilation               '    │ 1598072027227 │
│   13    │   '                compiler.hooks.compilation                   '    │ 1598072027228 │
│   14    │   '                compiler.hooks.make                          '    │ 1598072027237 │
│   15    │   '             compilation.hooks.addEntry                      '    │ 1598072027237 │
│   16    │   '             compilation.hooks.buildModule                   '    │ 1598072027257 │
│   17    │   '             compilation.hooks.normalModuleLoader            '    │ 1598072027258 │
│   18    │   '             compilation.hooks.succeedModule                 '    │ 1598072027262 │
│   19    │   '             compilation.hooks.succeedEntry                  '    │ 1598072027263 │
│   20    │   '             compilation.hooks.log                           '    │ 1598072027263 │
│   21    │   '                compiler.hooks.finishMake                    '    │ 1598072027263 │
│   22    │   '             compilation.hooks.log                           '    │ 1598072027263 │
│   23    │   '             compilation.hooks.finishModules                 '    │ 1598072027263 │
│   24    │   '             compilation.hooks.log                           '    │ 1598072027264 │
│   25    │   '             compilation.hooks.log                           '    │ 1598072027264 │
│   26    │   '             compilation.hooks.log                           '    │ 1598072027265 │
│   27    │   '             compilation.hooks.log                           '    │ 1598072027265 │
│   28    │   '             compilation.hooks.log                           '    │ 1598072027265 │
│   29    │   '             compilation.hooks.log                           '    │ 1598072027265 │
│   30    │   '             compilation.hooks.log                           '    │ 1598072027265 │
│   31    │   '             compilation.hooks.seal                          '    │ 1598072027266 │
│   32    │   '             compilation.hooks.optimizeDependencies          '    │ 1598072027266 │
│   33    │   '             compilation.hooks.log                           '    │ 1598072027266 │
│   34    │   '             compilation.hooks.log                           '    │ 1598072027266 │
│   35    │   '             compilation.hooks.log                           '    │ 1598072027266 │
│   36    │   '             compilation.hooks.log                           '    │ 1598072027266 │
│   37    │   '             compilation.hooks.log                           '    │ 1598072027266 │
│   38    │   '             compilation.hooks.log                           '    │ 1598072027267 │
│   39    │   '             compilation.hooks.afterOptimizeDependencies     '    │ 1598072027267 │
│   40    │   '             compilation.hooks.log                           '    │ 1598072027267 │
│   41    │   '             compilation.hooks.beforeChunks                  '    │ 1598072027267 │
│   42    │   '             compilation.hooks.log                           '    │ 1598072027268 │
│   43    │   '             compilation.hooks.log                           '    │ 1598072027268 │
│   44    │   '             compilation.hooks.log                           '    │ 1598072027268 │
│   45    │   '             compilation.hooks.log                           '    │ 1598072027268 │
│   46    │   '             compilation.hooks.log                           '    │ 1598072027269 │
│   47    │   '             compilation.hooks.afterChunks                   '    │ 1598072027270 │
│   48    │   '             compilation.hooks.log                           '    │ 1598072027270 │
│   49    │   '             compilation.hooks.optimize                      '    │ 1598072027270 │
│   50    │   '             compilation.hooks.optimizeModules               '    │ 1598072027270 │
│   51    │   '             compilation.hooks.afterOptimizeModules          '    │ 1598072027271 │
│   52    │   '             compilation.hooks.optimizeChunks                '    │ 1598072027271 │
│   53    │   '             compilation.hooks.log                           '    │ 1598072027272 │
│   54    │   '             compilation.hooks.log                           '    │ 1598072027273 │
│   55    │   '             compilation.hooks.log                           '    │ 1598072027273 │
│   56    │   '             compilation.hooks.log                           '    │ 1598072027273 │
│   57    │   '             compilation.hooks.afterOptimizeChunks           '    │ 1598072027273 │
│   58    │   '             compilation.hooks.optimizeTree                  '    │ 1598072027273 │
│   59    │   '             compilation.hooks.afterOptimizeTree             '    │ 1598072027273 │
│   60    │   '             compilation.hooks.optimizeChunkModules          '    │ 1598072027273 │
│   61    │   '             compilation.hooks.log                           '    │ 1598072027273 │
│   62    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   63    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   64    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   65    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   66    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   67    │   '             compilation.hooks.log                           '    │ 1598072027274 │
│   68    │   '             compilation.hooks.afterOptimizeChunkModules     '    │ 1598072027274 │
│   69    │   '             compilation.hooks.shouldRecord                  '    │ 1598072027274 │
│   70    │   '             compilation.hooks.reviveModules                 '    │ 1598072027274 │
│   71    │   '             compilation.hooks.beforeModuleIds               '    │ 1598072027274 │
│   72    │   '             compilation.hooks.moduleIds                     '    │ 1598072027274 │
│   73    │   '             compilation.hooks.optimizeModuleIds             '    │ 1598072027275 │
│   74    │   '             compilation.hooks.afterOptimizeModuleIds        '    │ 1598072027275 │
│   75    │   '             compilation.hooks.reviveChunks                  '    │ 1598072027275 │
│   76    │   '             compilation.hooks.beforeChunkIds                '    │ 1598072027275 │
│   77    │   '             compilation.hooks.chunkIds                      '    │ 1598072027275 │
│   78    │   '             compilation.hooks.optimizeChunkIds              '    │ 1598072027275 │
│   79    │   '             compilation.hooks.afterOptimizeChunkIds         '    │ 1598072027276 │
│   80    │   '             compilation.hooks.recordModules                 '    │ 1598072027276 │
│   81    │   '             compilation.hooks.recordChunks                  '    │ 1598072027276 │
│   82    │   '             compilation.hooks.optimizeCodeGeneration        '    │ 1598072027276 │
│   83    │   '             compilation.hooks.log                           '    │ 1598072027276 │
│   84    │   '             compilation.hooks.beforeModuleHash              '    │ 1598072027276 │
│   85    │   '             compilation.hooks.afterModuleHash               '    │ 1598072027277 │
│   86    │   '             compilation.hooks.log                           '    │ 1598072027277 │
│   87    │   '             compilation.hooks.beforeCodeGeneration          '    │ 1598072027277 │
│   88    │   '             compilation.hooks.afterCodeGeneration           '    │ 1598072027278 │
│   89    │   '             compilation.hooks.log                           '    │ 1598072027278 │
│   90    │   '             compilation.hooks.beforeRuntimeRequirements     '    │ 1598072027278 │
│   91    │ '             compilation.hooks.additionalModuleRuntimeRequirements' │ 1598072027279 │
│   92    │ '             compilation.hooks.additionalChunkRuntimeRequirements'  │ 1598072027279 │
│   93    │  '             compilation.hooks.additionalTreeRuntimeRequirements'  │ 1598072027279 │
│   94    │   '             compilation.hooks.afterRuntimeRequirements      '    │ 1598072027280 │
│   95    │   '             compilation.hooks.log                           '    │ 1598072027280 │
│   96    │   '             compilation.hooks.beforeHash                    '    │ 1598072027280 │
│   97    │   '             compilation.hooks.log                           '    │ 1598072027280 │
│   98    │   '             compilation.hooks.log                           '    │ 1598072027280 │
│   99    │   '             compilation.hooks.chunkHash                     '    │ 1598072027280 │
│   100   │   '             compilation.hooks.contentHash                   '    │ 1598072027281 │
│   101   │   '             compilation.hooks.log                           '    │ 1598072027281 │
│   102   │   '             compilation.hooks.log                           '    │ 1598072027281 │
│   103   │   '             compilation.hooks.fullHash                      '    │ 1598072027281 │
│   104   │   '             compilation.hooks.log                           '    │ 1598072027281 │
│   105   │   '             compilation.hooks.log                           '    │ 1598072027281 │
│   106   │   '             compilation.hooks.afterHash                     '    │ 1598072027281 │
│   107   │   '             compilation.hooks.log                           '    │ 1598072027281 │
│   108   │   '             compilation.hooks.recordHash                    '    │ 1598072027281 │
│   109   │   '             compilation.hooks.log                           '    │ 1598072027282 │
│   110   │   '             compilation.hooks.beforeModuleAssets            '    │ 1598072027282 │
│   111   │   '             compilation.hooks.log                           '    │ 1598072027282 │
│   112   │   '             compilation.hooks.shouldGenerateChunkAssets     '    │ 1598072027282 │
│   113   │   '             compilation.hooks.beforeChunkAssets             '    │ 1598072027282 │
│   114   │   '             compilation.hooks.renderManifest                '    │ 1598072027282 │
│   115   │   '             compilation.hooks.assetPath                     '    │ 1598072027282 │
│   116   │   '             compilation.hooks.chunkAsset                    '    │ 1598072027284 │
│   117   │   '             compilation.hooks.log                           '    │ 1598072027284 │
│   118   │   '             compilation.hooks.additionalChunkAssets         '    │ 1598072027284 │
│   119   │   '             compilation.hooks.additionalAssets              '    │ 1598072027284 │
│   120   │   '             compilation.hooks.optimizeAssets                '    │ 1598072027284 │
│   121   │   '             compilation.hooks.processAssets                 '    │ 1598072027284 │
│   122   │   '             compilation.hooks.assetPath                     '    │ 1598072027298 │
│   123   │   '             compilation.hooks.optimizeChunkAssets           '    │ 1598072027373 │
│   124   │   '             compilation.hooks.afterOptimizeChunkAssets      '    │ 1598072027373 │
│   125   │   '             compilation.hooks.afterOptimizeAssets           '    │ 1598072027373 │
│   126   │   '             compilation.hooks.afterProcessAssets            '    │ 1598072027373 │
│   127   │   '             compilation.hooks.log                           '    │ 1598072027373 │
│   128   │   '             compilation.hooks.record                        '    │ 1598072027373 │
│   129   │   '             compilation.hooks.needAdditionalSeal            '    │ 1598072027373 │
│   130   │   '             compilation.hooks.afterSeal                     '    │ 1598072027373 │
│   131   │   '             compilation.hooks.log                           '    │ 1598072027373 │
│   132   │   '                compiler.hooks.afterCompile                  '    │ 1598072027373 │
│   133   │   '             compilation.hooks.log                           '    │ 1598072027374 │
│   134   │   '                compiler.hooks.shouldEmit                    '    │ 1598072027374 │
│   135   │   '                compiler.hooks.emit                          '    │ 1598072027374 │
│   136   │   '             compilation.hooks.assetPath                     '    │ 1598072027374 │
│   137   │   '                compiler.hooks.afterEmit                     '    │ 1598072027375 │
│   138   │   '             compilation.hooks.log                           '    │ 1598072027376 │
│   139   │   '             compilation.hooks.needAdditionalPass            '    │ 1598072027376 │
│   140   │   '             compilation.hooks.log                           '    │ 1598072027376 │
│   141   │   '                compiler.hooks.done                          '    │ 1598072027376 │
└─────────┴──────────────────────────────────────────────────────────────────────┴───────────────┘
```
