# The execute order of webpack hooks

There're so many hooks in webpack, and you might be wondering in exactly which order they run.

Here's the order list running `yarn webpack` to compile this project:

```
┌─────────┬───────────────────────────────────────────────────────────────────────────┬───────────────┐
│ (index) │                                     0                                     │       1       │
├─────────┼───────────────────────────────────────────────────────────────────────────┼───────────────┤
│    0    │ '                     compiler.hooks.environment                        ' │ 1598072324241 │
│    1    │ '                     compiler.hooks.afterEnvironment                   ' │ 1598072324241 │
│    2    │ '                     compiler.hooks.entryOption                        ' │ 1598072324246 │
│    3    │ '                     compiler.hooks.afterPlugins                       ' │ 1598072324288 │
│    4    │ '                     compiler.hooks.afterResolvers                     ' │ 1598072324288 │
│    5    │ '                     compiler.hooks.initialize                         ' │ 1598072324288 │
│    6    │ '                     compiler.hooks.beforeRun                          ' │ 1598072324289 │
│    7    │ '                     compiler.hooks.run                                ' │ 1598072324289 │
│    8    │ '                     compiler.hooks.normalModuleFactory                ' │ 1598072324290 │
│    9    │ '                     compiler.hooks.contextModuleFactory               ' │ 1598072324291 │
│   10    │ '                     compiler.hooks.beforeCompile                      ' │ 1598072324291 │
│   11    │ '                     compiler.hooks.compile                            ' │ 1598072324291 │
│   12    │ '                     compiler.hooks.thisCompilation                    ' │ 1598072324293 │
│   13    │ '                     compiler.hooks.compilation                        ' │ 1598072324294 │
│   14    │ '                     compiler.hooks.make                               ' │ 1598072324301 │
│   15    │ '                  compilation.hooks.addEntry                           ' │ 1598072324302 │
│   16    │ '                  compilation.hooks.buildModule                        ' │ 1598072324322 │
│   17    │ '                  compilation.hooks.normalModuleLoader                 ' │ 1598072324323 │
│   18    │ '                  compilation.hooks.succeedModule                      ' │ 1598072324328 │
│   19    │ '                  compilation.hooks.succeedEntry                       ' │ 1598072324329 │
│   20    │ '                  compilation.hooks.log                                ' │ 1598072324329 │
│   21    │ '                     compiler.hooks.finishMake                         ' │ 1598072324329 │
│   22    │ '                  compilation.hooks.log                                ' │ 1598072324329 │
│   23    │ '                  compilation.hooks.finishModules                      ' │ 1598072324329 │
│   24    │ '                  compilation.hooks.log                                ' │ 1598072324330 │
│   25    │ '                  compilation.hooks.log                                ' │ 1598072324330 │
│   26    │ '                  compilation.hooks.log                                ' │ 1598072324330 │
│   27    │ '                  compilation.hooks.log                                ' │ 1598072324330 │
│   28    │ '                  compilation.hooks.log                                ' │ 1598072324331 │
│   29    │ '                  compilation.hooks.log                                ' │ 1598072324331 │
│   30    │ '                  compilation.hooks.log                                ' │ 1598072324331 │
│   31    │ '                  compilation.hooks.log                                ' │ 1598072324331 │
│   32    │ '                  compilation.hooks.seal                               ' │ 1598072324331 │
│   33    │ '                  compilation.hooks.optimizeDependencies               ' │ 1598072324331 │
│   34    │ '                  compilation.hooks.log                                ' │ 1598072324331 │
│   35    │ '                  compilation.hooks.log                                ' │ 1598072324332 │
│   36    │ '                  compilation.hooks.log                                ' │ 1598072324332 │
│   37    │ '                  compilation.hooks.afterOptimizeDependencies          ' │ 1598072324333 │
│   38    │ '                  compilation.hooks.log                                ' │ 1598072324333 │
│   39    │ '                  compilation.hooks.beforeChunks                       ' │ 1598072324333 │
│   40    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   41    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   42    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   43    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   44    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   45    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   46    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   47    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   48    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   49    │ '                  compilation.hooks.afterChunks                        ' │ 1598072324334 │
│   50    │ '                  compilation.hooks.log                                ' │ 1598072324334 │
│   51    │ '                  compilation.hooks.optimize                           ' │ 1598072324334 │
│   52    │ '                  compilation.hooks.optimizeModules                    ' │ 1598072324334 │
│   53    │ '                  compilation.hooks.afterOptimizeModules               ' │ 1598072324334 │
│   54    │ '                  compilation.hooks.optimizeChunks                     ' │ 1598072324335 │
│   55    │ '                  compilation.hooks.log                                ' │ 1598072324336 │
│   56    │ '                  compilation.hooks.log                                ' │ 1598072324336 │
│   57    │ '                  compilation.hooks.log                                ' │ 1598072324336 │
│   58    │ '                  compilation.hooks.log                                ' │ 1598072324336 │
│   59    │ '                  compilation.hooks.afterOptimizeChunks                ' │ 1598072324337 │
│   60    │ '                  compilation.hooks.optimizeTree                       ' │ 1598072324337 │
│   61    │ '                  compilation.hooks.afterOptimizeTree                  ' │ 1598072324337 │
│   62    │ '                  compilation.hooks.optimizeChunkModules               ' │ 1598072324337 │
│   63    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   64    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   65    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   66    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   67    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   68    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   69    │ '                  compilation.hooks.log                                ' │ 1598072324337 │
│   70    │ '                  compilation.hooks.afterOptimizeChunkModules          ' │ 1598072324338 │
│   71    │ '                  compilation.hooks.shouldRecord                       ' │ 1598072324338 │
│   72    │ '                  compilation.hooks.reviveModules                      ' │ 1598072324338 │
│   73    │ '                  compilation.hooks.beforeModuleIds                    ' │ 1598072324338 │
│   74    │ '                  compilation.hooks.moduleIds                          ' │ 1598072324338 │
│   75    │ '                  compilation.hooks.optimizeModuleIds                  ' │ 1598072324339 │
│   76    │ '                  compilation.hooks.afterOptimizeModuleIds             ' │ 1598072324339 │
│   77    │ '                  compilation.hooks.reviveChunks                       ' │ 1598072324339 │
│   78    │ '                  compilation.hooks.beforeChunkIds                     ' │ 1598072324339 │
│   79    │ '                  compilation.hooks.chunkIds                           ' │ 1598072324339 │
│   80    │ '                  compilation.hooks.optimizeChunkIds                   ' │ 1598072324339 │
│   81    │ '                  compilation.hooks.afterOptimizeChunkIds              ' │ 1598072324339 │
│   82    │ '                  compilation.hooks.recordModules                      ' │ 1598072324340 │
│   83    │ '                  compilation.hooks.recordChunks                       ' │ 1598072324340 │
│   84    │ '                  compilation.hooks.optimizeCodeGeneration             ' │ 1598072324340 │
│   85    │ '                  compilation.hooks.log                                ' │ 1598072324340 │
│   86    │ '                  compilation.hooks.beforeModuleHash                   ' │ 1598072324340 │
│   87    │ '                  compilation.hooks.log                                ' │ 1598072324341 │
│   88    │ '                  compilation.hooks.afterModuleHash                    ' │ 1598072324341 │
│   89    │ '                  compilation.hooks.log                                ' │ 1598072324341 │
│   90    │ '                  compilation.hooks.beforeCodeGeneration               ' │ 1598072324341 │
│   91    │ '                  compilation.hooks.log                                ' │ 1598072324342 │
│   92    │ '                  compilation.hooks.afterCodeGeneration                ' │ 1598072324342 │
│   93    │ '                  compilation.hooks.log                                ' │ 1598072324342 │
│   94    │ '                  compilation.hooks.beforeRuntimeRequirements          ' │ 1598072324342 │
│   95    │ '                  compilation.hooks.additionalModuleRuntimeRequirements' │ 1598072324342 │
│   96    │ '                  compilation.hooks.additionalChunkRuntimeRequirements ' │ 1598072324342 │
│   97    │ '                  compilation.hooks.additionalTreeRuntimeRequirements  ' │ 1598072324343 │
│   98    │ '                  compilation.hooks.afterRuntimeRequirements           ' │ 1598072324343 │
│   99    │ '                  compilation.hooks.log                                ' │ 1598072324343 │
│   100   │ '                  compilation.hooks.beforeHash                         ' │ 1598072324343 │
│   101   │ '                  compilation.hooks.log                                ' │ 1598072324343 │
│   102   │ '                  compilation.hooks.log                                ' │ 1598072324343 │
│   103   │ '                  compilation.hooks.chunkHash                          ' │ 1598072324344 │
│   104   │ '                  compilation.hooks.contentHash                        ' │ 1598072324345 │
│   105   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   106   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   107   │ '                  compilation.hooks.fullHash                           ' │ 1598072324345 │
│   108   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   109   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   110   │ '                  compilation.hooks.afterHash                          ' │ 1598072324345 │
│   111   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   112   │ '                  compilation.hooks.recordHash                         ' │ 1598072324345 │
│   113   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   114   │ '                  compilation.hooks.beforeModuleAssets                 ' │ 1598072324345 │
│   115   │ '                  compilation.hooks.log                                ' │ 1598072324345 │
│   116   │ '                  compilation.hooks.shouldGenerateChunkAssets          ' │ 1598072324345 │
│   117   │ '                  compilation.hooks.beforeChunkAssets                  ' │ 1598072324345 │
│   118   │ '                  compilation.hooks.renderManifest                     ' │ 1598072324346 │
│   119   │ '                  compilation.hooks.assetPath                          ' │ 1598072324346 │
│   120   │ '                  compilation.hooks.chunkAsset                         ' │ 1598072324348 │
│   121   │ '                  compilation.hooks.log                                ' │ 1598072324348 │
│   122   │ '                  compilation.hooks.additionalChunkAssets              ' │ 1598072324348 │
│   123   │ '                  compilation.hooks.additionalAssets                   ' │ 1598072324348 │
│   124   │ '                  compilation.hooks.optimizeAssets                     ' │ 1598072324348 │
│   125   │ '                  compilation.hooks.processAssets                      ' │ 1598072324348 │
│   126   │ '                  compilation.hooks.optimizeChunkAssets                ' │ 1598072324348 │
│   127   │ '                  compilation.hooks.afterOptimizeChunkAssets           ' │ 1598072324348 │
│   128   │ '                  compilation.hooks.assetPath                          ' │ 1598072324360 │
│   129   │ '                  compilation.hooks.afterOptimizeAssets                ' │ 1598072324438 │
│   130   │ '                  compilation.hooks.afterProcessAssets                 ' │ 1598072324438 │
│   131   │ '                  compilation.hooks.log                                ' │ 1598072324438 │
│   132   │ '                  compilation.hooks.record                             ' │ 1598072324438 │
│   133   │ '                  compilation.hooks.needAdditionalSeal                 ' │ 1598072324438 │
│   134   │ '                  compilation.hooks.afterSeal                          ' │ 1598072324438 │
│   135   │ '                  compilation.hooks.log                                ' │ 1598072324438 │
│   136   │ '                     compiler.hooks.afterCompile                       ' │ 1598072324438 │
│   137   │ '                  compilation.hooks.log                                ' │ 1598072324438 │
│   138   │ '                     compiler.hooks.shouldEmit                         ' │ 1598072324439 │
│   139   │ '                     compiler.hooks.emit                               ' │ 1598072324439 │
│   140   │ '                  compilation.hooks.assetPath                          ' │ 1598072324439 │
│   141   │ '                     compiler.hooks.afterEmit                          ' │ 1598072324440 │
│   142   │ '                  compilation.hooks.log                                ' │ 1598072324441 │
│   143   │ '                  compilation.hooks.needAdditionalPass                 ' │ 1598072324441 │
│   144   │ '                  compilation.hooks.log                                ' │ 1598072324441 │
│   145   │ '                     compiler.hooks.done                               ' │ 1598072324441 │
└─────────┴───────────────────────────────────────────────────────────────────────────┴───────────────┘
```
