# [![NPM version][npm-image]][npm-url]

> [conventional-changelog](https://github.com/ajoslin/conventional-changelog) [uedlinker](https://github.com/angular/angular) 预设


## Uedlinker Convention

Uedlinker's [提交信息规范](https://github.com/uedlinker/conventional-changelog/blob/master/packages/commitlint-config/README.md#%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83).

### 示例

只有标题:

```
新功能（button)： 添加 'size' prop
```

标题和关联 issue：

```
修复（button）： 禁用状态下点击依然有效

closes #28
```

标题和不兼容变更:

```
性能优化（table）： 提高加载超过 1000 条数据后的速度

不兼容变更: 不再支持拖拽功能
```

### 提交规范格式

参考[这里](https://github.com/uedlinker/conventional-changelog/blob/master/packages/commitlint-config/README.md#%E6%8F%90%E4%BA%A4%E8%A7%84%E8%8C%83)

[npm-image]: https://img.shields.io/npm/v/@uedlinker/conventional-changelog-uedlinker.svg?style=flat
[npm-url]: https://www.npmjs.com/package/@uedlinker/conventional-changelog-uedlinker
[travis-image]: https://travis-ci.org/conventional-changelog/conventional-changelog-angular.svg?branch=master
[travis-url]: https://travis-ci.org/conventional-changelog/conventional-changelog-angular
[daviddm-image]: https://david-dm.org/conventional-changelog/conventional-changelog-angular.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/conventional-changelog/conventional-changelog-angular
[coveralls-image]: https://coveralls.io/repos/conventional-changelog/conventional-changelog-angular/badge.svg
[coveralls-url]: https://coveralls.io/r/conventional-changelog/conventional-changelog-angular