# The execute order of webpack hooks

There're so many hooks in webpack, and you might be wondering in exactly which order they run.

Here's the order list running `yarn webpack` compiling this project:

```
┌─────────┬──────────────────────────────────────────────────────────────────────┬───────────────┐
│ (index) │                                  0                                   │       1       │
├─────────┼──────────────────────────────────────────────────────────────────────┼───────────────┤
│    0    │   '                compiler.hooks.environment                   '    │ 1598072114552 │
│    1    │   '                compiler.hooks.afterEnvironment              '    │ 1598072114552 │
│    2    │   '                compiler.hooks.entryOption                   '    │ 1598072114558 │
│    3    │   '                compiler.hooks.afterPlugins                  '    │ 1598072114617 │
│    4    │   '                compiler.hooks.afterResolvers                '    │ 1598072114617 │
│    5    │   '                compiler.hooks.initialize                    '    │ 1598072114617 │
│    6    │   '                compiler.hooks.beforeRun                     '    │ 1598072114618 │
│    7    │   '                compiler.hooks.run                           '    │ 1598072114618 │
│    8    │   '                compiler.hooks.normalModuleFactory           '    │ 1598072114619 │
│    9    │   '                compiler.hooks.contextModuleFactory          '    │ 1598072114620 │
│   10    │   '                compiler.hooks.beforeCompile                 '    │ 1598072114620 │
│   11    │   '                compiler.hooks.compile                       '    │ 1598072114620 │
│   12    │   '                compiler.hooks.thisCompilation               '    │ 1598072114622 │
│   13    │   '                compiler.hooks.compilation                   '    │ 1598072114623 │
│   14    │   '                compiler.hooks.make                          '    │ 1598072114631 │
│   15    │   '             compilation.hooks.addEntry                      '    │ 1598072114631 │
│   16    │   '             compilation.hooks.buildModule                   '    │ 1598072114651 │
│   17    │   '             compilation.hooks.normalModuleLoader            '    │ 1598072114652 │
│   18    │   '             compilation.hooks.succeedModule                 '    │ 1598072114658 │
│   19    │   '             compilation.hooks.succeedEntry                  '    │ 1598072114658 │
│   20    │   '             compilation.hooks.log                           '    │ 1598072114658 │
│   21    │   '                compiler.hooks.finishMake                    '    │ 1598072114659 │
│   22    │   '             compilation.hooks.log                           '    │ 1598072114659 │
│   23    │   '             compilation.hooks.finishModules                 '    │ 1598072114659 │
│   24    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   25    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   26    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   27    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   28    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   29    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   30    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   31    │   '             compilation.hooks.log                           '    │ 1598072114660 │
│   32    │   '             compilation.hooks.seal                          '    │ 1598072114661 │
│   33    │   '             compilation.hooks.optimizeDependencies          '    │ 1598072114661 │
│   34    │   '             compilation.hooks.log                           '    │ 1598072114661 │
│   35    │   '             compilation.hooks.log                           '    │ 1598072114661 │
│   36    │   '             compilation.hooks.log                           '    │ 1598072114662 │
│   37    │   '             compilation.hooks.afterOptimizeDependencies     '    │ 1598072114662 │
│   38    │   '             compilation.hooks.log                           '    │ 1598072114662 │
│   39    │   '             compilation.hooks.beforeChunks                  '    │ 1598072114662 │
│   40    │   '             compilation.hooks.log                           '    │ 1598072114663 │
│   41    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   42    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   43    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   44    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   45    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   46    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   47    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   48    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   49    │   '             compilation.hooks.afterChunks                   '    │ 1598072114664 │
│   50    │   '             compilation.hooks.log                           '    │ 1598072114664 │
│   51    │   '             compilation.hooks.optimize                      '    │ 1598072114664 │
│   52    │   '             compilation.hooks.optimizeModules               '    │ 1598072114664 │
│   53    │   '             compilation.hooks.afterOptimizeModules          '    │ 1598072114664 │
│   54    │   '             compilation.hooks.optimizeChunks                '    │ 1598072114665 │
│   55    │   '             compilation.hooks.log                           '    │ 1598072114665 │
│   56    │   '             compilation.hooks.log                           '    │ 1598072114666 │
│   57    │   '             compilation.hooks.log                           '    │ 1598072114666 │
│   58    │   '             compilation.hooks.log                           '    │ 1598072114666 │
│   59    │   '             compilation.hooks.afterOptimizeChunks           '    │ 1598072114666 │
│   60    │   '             compilation.hooks.optimizeTree                  '    │ 1598072114667 │
│   61    │   '             compilation.hooks.afterOptimizeTree             '    │ 1598072114667 │
│   62    │   '             compilation.hooks.optimizeChunkModules          '    │ 1598072114667 │
│   63    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   64    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   65    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   66    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   67    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   68    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   69    │   '             compilation.hooks.log                           '    │ 1598072114667 │
│   70    │   '             compilation.hooks.afterOptimizeChunkModules     '    │ 1598072114667 │
│   71    │   '             compilation.hooks.shouldRecord                  '    │ 1598072114668 │
│   72    │   '             compilation.hooks.reviveModules                 '    │ 1598072114668 │
│   73    │   '             compilation.hooks.beforeModuleIds               '    │ 1598072114668 │
│   74    │   '             compilation.hooks.moduleIds                     '    │ 1598072114668 │
│   75    │   '             compilation.hooks.optimizeModuleIds             '    │ 1598072114668 │
│   76    │   '             compilation.hooks.afterOptimizeModuleIds        '    │ 1598072114668 │
│   77    │   '             compilation.hooks.reviveChunks                  '    │ 1598072114669 │
│   78    │   '             compilation.hooks.beforeChunkIds                '    │ 1598072114669 │
│   79    │   '             compilation.hooks.chunkIds                      '    │ 1598072114669 │
│   80    │   '             compilation.hooks.optimizeChunkIds              '    │ 1598072114669 │
│   81    │   '             compilation.hooks.afterOptimizeChunkIds         '    │ 1598072114669 │
│   82    │   '             compilation.hooks.recordModules                 '    │ 1598072114669 │
│   83    │   '             compilation.hooks.recordChunks                  '    │ 1598072114669 │
│   84    │   '             compilation.hooks.optimizeCodeGeneration        '    │ 1598072114670 │
│   85    │   '             compilation.hooks.log                           '    │ 1598072114670 │
│   86    │   '             compilation.hooks.beforeModuleHash              '    │ 1598072114670 │
│   87    │   '             compilation.hooks.log                           '    │ 1598072114671 │
│   88    │   '             compilation.hooks.afterModuleHash               '    │ 1598072114671 │
│   89    │   '             compilation.hooks.log                           '    │ 1598072114671 │
│   90    │   '             compilation.hooks.beforeCodeGeneration          '    │ 1598072114671 │
│   91    │   '             compilation.hooks.log                           '    │ 1598072114672 │
│   92    │   '             compilation.hooks.afterCodeGeneration           '    │ 1598072114672 │
│   93    │   '             compilation.hooks.log                           '    │ 1598072114672 │
│   94    │   '             compilation.hooks.beforeRuntimeRequirements     '    │ 1598072114672 │
│   95    │ '             compilation.hooks.additionalModuleRuntimeRequirements' │ 1598072114672 │
│   96    │ '             compilation.hooks.additionalChunkRuntimeRequirements'  │ 1598072114672 │
│   97    │  '             compilation.hooks.additionalTreeRuntimeRequirements'  │ 1598072114673 │
│   98    │   '             compilation.hooks.afterRuntimeRequirements      '    │ 1598072114673 │
│   99    │   '             compilation.hooks.log                           '    │ 1598072114673 │
│   100   │   '             compilation.hooks.beforeHash                    '    │ 1598072114673 │
│   101   │   '             compilation.hooks.log                           '    │ 1598072114673 │
│   102   │   '             compilation.hooks.log                           '    │ 1598072114673 │
│   103   │   '             compilation.hooks.chunkHash                     '    │ 1598072114674 │
│   104   │   '             compilation.hooks.contentHash                   '    │ 1598072114675 │
│   105   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   106   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   107   │   '             compilation.hooks.fullHash                      '    │ 1598072114675 │
│   108   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   109   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   110   │   '             compilation.hooks.afterHash                     '    │ 1598072114675 │
│   111   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   112   │   '             compilation.hooks.recordHash                    '    │ 1598072114675 │
│   113   │   '             compilation.hooks.log                           '    │ 1598072114675 │
│   114   │   '             compilation.hooks.beforeModuleAssets            '    │ 1598072114676 │
│   115   │   '             compilation.hooks.log                           '    │ 1598072114676 │
│   116   │   '             compilation.hooks.shouldGenerateChunkAssets     '    │ 1598072114676 │
│   117   │   '             compilation.hooks.beforeChunkAssets             '    │ 1598072114676 │
│   118   │   '             compilation.hooks.renderManifest                '    │ 1598072114676 │
│   119   │   '             compilation.hooks.assetPath                     '    │ 1598072114676 │
│   120   │   '             compilation.hooks.chunkAsset                    '    │ 1598072114678 │
│   121   │   '             compilation.hooks.log                           '    │ 1598072114678 │
│   122   │   '             compilation.hooks.additionalChunkAssets         '    │ 1598072114679 │
│   123   │   '             compilation.hooks.additionalAssets              '    │ 1598072114679 │
│   124   │   '             compilation.hooks.optimizeAssets                '    │ 1598072114679 │
│   125   │   '             compilation.hooks.processAssets                 '    │ 1598072114679 │
│   126   │   '             compilation.hooks.optimizeChunkAssets           '    │ 1598072114679 │
│   127   │   '             compilation.hooks.afterOptimizeChunkAssets      '    │ 1598072114679 │
│   128   │   '             compilation.hooks.assetPath                     '    │ 1598072114692 │
│   129   │   '             compilation.hooks.afterOptimizeAssets           '    │ 1598072114770 │
│   130   │   '             compilation.hooks.afterProcessAssets            '    │ 1598072114770 │
│   131   │   '             compilation.hooks.log                           '    │ 1598072114770 │
│   132   │   '             compilation.hooks.record                        '    │ 1598072114770 │
│   133   │   '             compilation.hooks.needAdditionalSeal            '    │ 1598072114770 │
│   134   │   '             compilation.hooks.afterSeal                     '    │ 1598072114770 │
│   135   │   '             compilation.hooks.log                           '    │ 1598072114770 │
│   136   │   '                compiler.hooks.afterCompile                  '    │ 1598072114770 │
│   137   │   '             compilation.hooks.log                           '    │ 1598072114770 │
│   138   │   '                compiler.hooks.shouldEmit                    '    │ 1598072114770 │
│   139   │   '                compiler.hooks.emit                          '    │ 1598072114771 │
│   140   │   '             compilation.hooks.assetPath                     '    │ 1598072114771 │
│   141   │   '                compiler.hooks.afterEmit                     '    │ 1598072114773 │
│   142   │   '             compilation.hooks.log                           '    │ 1598072114773 │
│   143   │   '             compilation.hooks.needAdditionalPass            '    │ 1598072114773 │
│   144   │   '             compilation.hooks.log                           '    │ 1598072114773 │
│   145   │   '                compiler.hooks.done                          '    │ 1598072114774 │
└─────────┴──────────────────────────────────────────────────────────────────────┴───────────────┘
```
