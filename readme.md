# The execute order of webpack hooks

There're so many hooks in webpack, and you might be wondering in exactly which order they run.

Here's the order list:

```
┌─────────┬─────────────────────────────────────────────────────────────────┬───────────────┐
│ (index) │                                0                                │       1       │
├─────────┼─────────────────────────────────────────────────────────────────┼───────────────┤
│    0    │ '                compiler.hooks.environment                   ' │ 1591622537701 │
│    1    │ '                compiler.hooks.afterEnvironment              ' │ 1591622537701 │
│    2    │ '                compiler.hooks.entryOption                   ' │ 1591622537705 │
│    3    │ '                compiler.hooks.afterPlugins                  ' │ 1591622537742 │
│    4    │ '                compiler.hooks.afterResolvers                ' │ 1591622537742 │
│    5    │ '                compiler.hooks.initialize                    ' │ 1591622537742 │
│    6    │ '                compiler.hooks.beforeRun                     ' │ 1591622537743 │
│    7    │ '                compiler.hooks.run                           ' │ 1591622537743 │
│    8    │ '                compiler.hooks.normalModuleFactory           ' │ 1591622537744 │
│    9    │ '                compiler.hooks.contextModuleFactory          ' │ 1591622537744 │
│   10    │ '                compiler.hooks.beforeCompile                 ' │ 1591622537745 │
│   11    │ '                compiler.hooks.compile                       ' │ 1591622537745 │
│   12    │ '                compiler.hooks.thisCompilation               ' │ 1591622537747 │
│   13    │ '                compiler.hooks.make                          ' │ 1591622537752 │
│   14    │ '             compilation.hooks.buildModule                   ' │ 1591622537771 │
│   15    │ '             compilation.hooks.succeedModule                 ' │ 1591622537776 │
│   16    │ '             compilation.hooks.finishModules                 ' │ 1591622537777 │
│   17    │ '             compilation.hooks.seal                          ' │ 1591622537778 │
│   18    │ '             compilation.hooks.optimizeDependencies          ' │ 1591622537778 │
│   19    │ '             compilation.hooks.afterOptimizeDependencies     ' │ 1591622537779 │
│   20    │ '             compilation.hooks.optimize                      ' │ 1591622537780 │
│   21    │ '             compilation.hooks.optimizeModules               ' │ 1591622537780 │
│   22    │ '             compilation.hooks.afterOptimizeModules          ' │ 1591622537781 │
│   23    │ '             compilation.hooks.optimizeChunks                ' │ 1591622537781 │
│   24    │ '             compilation.hooks.afterOptimizeChunks           ' │ 1591622537782 │
│   25    │ '             compilation.hooks.optimizeTree                  ' │ 1591622537782 │
│   26    │ '             compilation.hooks.afterOptimizeTree             ' │ 1591622537782 │
│   27    │ '             compilation.hooks.optimizeChunkModules          ' │ 1591622537782 │
│   28    │ '             compilation.hooks.afterOptimizeChunkModules     ' │ 1591622537783 │
│   29    │ '             compilation.hooks.shouldRecord                  ' │ 1591622537783 │
│   30    │ '             compilation.hooks.reviveModules                 ' │ 1591622537783 │
│   31    │ '             compilation.hooks.beforeModuleIds               ' │ 1591622537783 │
│   32    │ '             compilation.hooks.moduleIds                     ' │ 1591622537783 │
│   33    │ '             compilation.hooks.optimizeModuleIds             ' │ 1591622537784 │
│   34    │ '             compilation.hooks.afterOptimizeModuleIds        ' │ 1591622537784 │
│   35    │ '             compilation.hooks.reviveChunks                  ' │ 1591622537784 │
│   36    │ '             compilation.hooks.beforeChunkIds                ' │ 1591622537784 │
│   37    │ '             compilation.hooks.optimizeChunkIds              ' │ 1591622537784 │
│   38    │ '             compilation.hooks.afterOptimizeChunkIds         ' │ 1591622537784 │
│   39    │ '             compilation.hooks.recordModules                 ' │ 1591622537784 │
│   40    │ '             compilation.hooks.recordChunks                  ' │ 1591622537784 │
│   41    │ '             compilation.hooks.beforeHash                    ' │ 1591622537786 │
│   42    │ '             compilation.hooks.chunkHash                     ' │ 1591622537787 │
│   43    │ '             compilation.hooks.afterHash                     ' │ 1591622537788 │
│   44    │ '             compilation.hooks.recordHash                    ' │ 1591622537788 │
│   45    │ '             compilation.hooks.beforeModuleAssets            ' │ 1591622537788 │
│   46    │ '             compilation.hooks.shouldGenerateChunkAssets     ' │ 1591622537788 │
│   47    │ '             compilation.hooks.beforeChunkAssets             ' │ 1591622537788 │
│   48    │ '             compilation.hooks.assetPath                     ' │ 1591622537788 │
│   49    │ '             compilation.hooks.chunkAsset                    ' │ 1591622537790 │
│   50    │ '             compilation.hooks.additionalChunkAssets         ' │ 1591622537790 │
│   51    │ '             compilation.hooks.additionalAssets              ' │ 1591622537790 │
│   52    │ '             compilation.hooks.optimizeAssets                ' │ 1591622537790 │
│   53    │ '             compilation.hooks.processAssets                 ' │ 1591622537790 │
│   54    │ '             compilation.hooks.assetPath                     ' │ 1591622537801 │
│   55    │ '             compilation.hooks.optimizeChunkAssets           ' │ 1591622537871 │
│   56    │ '             compilation.hooks.afterOptimizeChunkAssets      ' │ 1591622537871 │
│   57    │ '             compilation.hooks.afterOptimizeAssets           ' │ 1591622537871 │
│   58    │ '             compilation.hooks.afterProcessAssets            ' │ 1591622537871 │
│   59    │ '             compilation.hooks.record                        ' │ 1591622537872 │
│   60    │ '             compilation.hooks.needAdditionalSeal            ' │ 1591622537872 │
│   61    │ '             compilation.hooks.afterSeal                     ' │ 1591622537872 │
│   62    │ '                compiler.hooks.afterCompile                  ' │ 1591622537872 │
│   63    │ '                compiler.hooks.shouldEmit                    ' │ 1591622537872 │
│   64    │ '                compiler.hooks.emit                          ' │ 1591622537872 │
│   65    │ '             compilation.hooks.assetPath                     ' │ 1591622537872 │
│   66    │ '                compiler.hooks.afterEmit                     ' │ 1591622537874 │
│   67    │ '             compilation.hooks.needAdditionalPass            ' │ 1591622537875 │
│   68    │ '                compiler.hooks.done                          ' │ 1591622537875 │
└─────────┴─────────────────────────────────────────────────────────────────┴───────────────┘
```
