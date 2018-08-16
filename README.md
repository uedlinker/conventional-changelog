# Conventional Changelog

> 通过 git 元数据创建更新日志

## 关于本仓库

本仓库是一个像 [monorepo](https://github.com/babel/babel/blob/master/doc/design/monorepo.md) 管理的仓库，整合了若干围绕 `conventional-changelog` 定制化后的 npm 包

原始工具及生态请参考[这里](https://github.com/conventional-changelog/conventional-changelog)


## 模块说明

- [cz-conventional-changelog](https://github.com/uedlinker/conventional-changelog/tree/master/packages/cz-conventional-changelog) - 根据 Angular git commit 提交规范定制的适配器 用于和 commitizen 配套使用
- [conventional-changelog-uedlinker](https://github.com/uedlinker/conventional-changelog/tree/master/packages/conventional-changelog-uedlinker) - 定制化 `conventional-changelog` 预设，配合 `custom-standard-version` 生成 `CHANGELOG`
- [commitlint-config](https://github.com/uedlinker/conventional-changelog/tree/master/packages/commitlint-config) - 基于 Angular 提交规范汉化版本的 commitlint 配置，配合 `commitlint` 强制检查提交是否符合规范
