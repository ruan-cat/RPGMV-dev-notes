# 无法导出数据 Error: Every operation must have a unique `operationId`

- 公开的 apifox 地址： [https://01s-11.apifox.cn/](https://01s-11.apifox.cn/)

运行命令：

```bash
npx apifox-swagger apifox-swagger --projectId=6386631
--outdir=./output --token=***
```

报错如下：

<!-- 这里为了提交issue 故不使用导入语法
	<<< ./error.log
-->

```log
cli ===> Command {
  _events: [Object: null prototype] { 'option:version': [Function (anonymous)] },
  _eventsCount: 1,
  _maxListeners: undefined,
  commands: [],
  options: [
    Option {
      flags: '-V, --version',
      description: 'output the version number',
      required: false,
      optional: false,
      variadic: false,
      mandatory: false,
      short: '-V',
      long: '--version',
      negate: false,
      defaultValue: undefined,
      defaultValueDescription: undefined,
      presetArg: undefined,
      envVar: undefined,
      parseArg: undefined,
      hidden: false,
      argChoices: undefined,
      conflictsWith: [],
      implied: undefined,
      helpGroupHeading: undefined
    }
  ],
  parent: null,
  _allowUnknownOption: false,
  _allowExcessArguments: false,
  registeredArguments: [],
  _args: [],
  args: [],
  rawArgs: [],
  processedArgs: [],
  _scriptPath: null,
  _name: 'apifox-swagger',
  _optionValues: {},
  _optionValueSources: {},
  _storeOptionsAsProperties: false,
  _actionHandler: null,
  _executableHandler: false,
  _executableFile: null,
  _executableDir: null,
  _defaultCommandName: null,
  _exitCallback: null,
  _aliases: [],
  _combineFlagAndOptionalValue: true,
  _description: 'Apifox API 文档导出工具',
  _summary: '',
  _argsDescription: undefined,
  _enablePositionalOptions: false,
  _passThroughOptions: false,
  _lifeCycleHooks: {},
  _showHelpAfterError: false,
  _showSuggestionAfterError: true,
  _savedState: null,
  _outputConfiguration: {
    writeOut: [Function: writeOut],
    writeErr: [Function: writeErr],
    outputError: [Function: outputError],
    getOutHelpWidth: [Function: getOutHelpWidth],
    getErrHelpWidth: [Function: getErrHelpWidth],
    getOutHasColors: [Function: getOutHasColors],
    getErrHasColors: [Function: getErrHasColors],
    stripColor: [Function: stripColor]
  },
  _hidden: false,
  _helpOption: undefined,
  _addImplicitHelpCommand: undefined,
  _helpCommand: undefined,
  _helpConfiguration: {},
  _helpGroupHeading: undefined,
  _defaultCommandGroup: undefined,
  _defaultOptionGroup: undefined,
  _version: '1.0.0',
  _versionOptionName: 'version',
  [Symbol(shapeMode)]: false,
  [Symbol(kCapture)]: false
}
options ===> {
  outdir: './output',
  projectId: '6386631',
  token: 'APS-ZElgDJCK9SZW5WVk1YKkTT56hOC7myjT'
}
Fetching apifox client https://api.apifox.com/v1/projects/6386631/export-openapi?locale=zh-CN...
Fetching swagger from apifox project [6386631] to <all>...
Swagger format: 3.1.0
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1tell-repair~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1repair-to-do~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c2-repairsetting~1repair-done~1repair-done~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1repair-done~1repair-done~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1repair-return~1repair-return~1query-all/get/queryRepairReturn
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1repair-return~1repair-return~1add/post/addRepairReturn
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1force-back~1force-back~1query-all/get/queryForceBack
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-repairsetting~1force-back~1force-back~1modify/put/modifyForceBack
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-owneraccount~1owner-detail~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-owneraccount~1owner-list-queryAll/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1comm-c2-tablereadingtype~1query-all/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j2-configmanager~1c-mapping-domain~1query-all/get/queryAllUsingGET
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j6-contract~1partya~1query-contract-partya/get/queryAllUsingGET_1
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j7-park~1park-manage~1parking-info~1remove~1{psId}/delete/removeUsingDELETE
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c4-applydiscount~1query-all-applydiscount/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c4-applydiscount~1query-record/get/queryRecord
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c4-applydiscount~1modify-discount-state/put/modifyApplyDiscountState
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c5-feemanage~1payremind~1query-arrears/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c5-feemanage~1cancellationfee~1query-cancellationfee/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c5-feemanage~1feesum~1get-feesum/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c5-feemanage~1payremind~1download-payremind/get/downloadOweIn
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c5-feemanage~1discounttype~1get-typelistpage/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j1-menumana~1privilege~1query-condition/get/queryAllUsingGET
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c6-repomanage~1experem~1preExperemQuery/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1house~1home~1delete-by-house_id/delete/removeHouse
 ✘  Every operation must have a unique `operationId`. at #/paths/~1house~1home~1post/post/addHouse ✘  Every operation must have a unique `operationId`. at #/paths/~1j3-report~1report-component~1condition~1query/get/queryAllUsingGET
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j3-report~1report-group~1query-all/get/queryAllUsingGET_1
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1repair-report-summary~1query/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1inspection-statistics-table/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1today-inspection-table/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1repair-report~1unrepair-query/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1repair-report-fee/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1dissatisfied-repair~1query/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1query-condition~1floor/get/queryFloor
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1query-condition~1unit/get/queryUnit
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1query-condition~1room/get/queryRoom
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c7-repomanage~1owner-payment-detail/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1j5-community~1notepad~1detail~1remove-notepad/delete/removeUsingDELETE
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-pacemgr~1query-space-page/get/queryList
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-expensesetting~1query-feeitem-page/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-expensesetting~1delete-fee/delete/removeSample
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-expensesetting~1query-discount-page/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-expensesetting~1insert-discount/post/additemlog
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-expensesetting~1delete-discount/delete/removeSample
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-housefeemgr~1query-housefee-page/get/queryAll
 ✘  Every operation must have a unique `operationId`. at #/paths/~1c3-housefeemgr~1query-paymentrecord-page/get/queryRecord
file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/openapi-typescript@7.9.1_typescript@5.9.2/node_modules/openapi-typescript/dist/lib/redoc.mjs:74
      throw new Error(errorMessage);
            ^

Error: Every operation must have a unique `operationId`. at #/paths/~1c3-housefeemgr~1query-paymentrecord-page/get/queryRecord
    at _processProblems (file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/openapi-typescript@7.9.1_typescript@5.9.2/node_modules/openapi-typescript/dist/lib/redoc.mjs:74:13)
    at validateAndBundle (file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/openapi-typescript@7.9.1_typescript@5.9.2/node_modules/openapi-typescript/dist/lib/redoc.mjs:108:3)
    at process.processTicksAndRejections (node:internal/process/task_queues:105:5)
    at async openapiTS (file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/openapi-typescript@7.9.1_typescript@5.9.2/node_modules/openapi-typescript/dist/index.mjs:40:18)
    at async M (file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/@shixinde+apifox-swagger@4.0.1_sass@1.91.0_typescript@5.9.2/node_modules/@shixinde/apifox-swagger/dist/index.js:97:13)
    at async Command.<anonymous> (file:///D:/code/github-desktop-store/01s-11comm/node_modules/.pnpm/@shixinde+apifox-swagger@4.0.1_sass@1.91.0_typescript@5.9.2/node_modules/@shixinde/apifox-swagger/dist/index.js:272:5)

Node.js v22.14.0
```
