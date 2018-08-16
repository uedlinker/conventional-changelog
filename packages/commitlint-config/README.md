# @uedlinker/commitlint-config

一个基于 [Angular 提交规范](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#) 汉化版本的 `commitlint` 配置，用来强制约定提交规范，与 [@commitlint/cli](https://github.com/marionebl/commitlint/blob/master/%40commitlint/cli) 一起使用。

- [使用](#使用)
- [提交规范](#提交规范)
- [提交信息示例](#提交信息示例)

## 使用

这个配置需要配合 [commitlint](https://github.com/marionebl/commitlint) 和 [husky](https://github.com/typicode/husky) 一起使用，实现自动验证每次的提交信息。 

> 可以通过 `commitizen` 工具和 `@uedlinker/cz-conventional-changelog` 预设来实现交互式的符合此规范的提交，具体可以通过猛戳[这里](https://github.com/uedlinker/conventional-changelog/tree/master/packages/cz-conventional-changelog?1534404261278)获取详细信息。（**强烈推荐**，谁用谁知道 😎）

### 安装

```shell
npm i --save-dev @commitlint/cli husky @uedlinker/commitlint-config
```

### 配置 package.json

```js
{
  "scripts": {
    "commitmsg": "commitlint -E GIT_PARAMS"
  },
  ...
  "commitlint": {
    "extends": ["@uedlinker/commitlint-config"],
    "rules": {
      "scope-enum": [2, "always", [
        // 在这里定义你的 Scopes
        ...
      ]]
    }
  }
}
```

## 提交规范

下面是提交信息的格式：

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

一条提交信息由 header, body 和 footer 组成，三者由一个空行隔开。

为了方便 Github 和其他 Git 工具浏览，提交信息每行不能超过 108 个字符。

### 头部（Header）

头部（Header）由三部分组成：`<type>(<scope>): <subject>`。

- `type`: 提交类型。
- `scope`: 范围（可理解为模块）。
- `subject`: 标题（可理解为提交概要信息）。

头部总共的字符不能超过 108 个字符。

#### 提交类型（Type）

只允许以下几种提交类型：

- `feat` 或 `新功能`: 增加新功能；
- `fix` 或 `修复`: Bug 修复；
- `perf` 或 `性能优化`: 性能优化；
- `revert` 或 `撤销`: 撤销之前的提交；
- `docs` 或 `文档`: 文档；
- `style` 或 `代码样式`: 代码格式（非 UI）；
- `refactor` 或 `重构`: 重构；
- `test` 或 `测试`: 测试；
- `chore` 或 `杂项`: 比较零碎的变动；
- `build` 或 `构建`: 影响构建系统或外部依赖的更改（example scopes: gulp, broccoli, npm）；
- `ci` 或 `持续集成`: 持续集成脚本（example scopes: travis, circle, browser-stack, sauce-labs）。

#### 范围（Scope）

每个项目的范围（Scope）不一定相同，需要项目负责人在项目构建时就预先约定好 scope，避免出现杂乱无章、毫无意义且与项目文档不一致的 scope。范围（Scope）可理解为一个项目中的模块，它可以是一个大功能，一个目录等等。其格式可以是英文或者中文，如果是英文，请在命名的时候保持格式的一致。

如果没有比较合适的范围（Scope），可以使用 `*`。

建议在 `package.json` 中的 `commitlint` 字段中自定义 scope：

```js
{
  ...
  "commitlint": {
    "extends": ["@uedlinker/commitlint-config"],
    "rules": {
      "scope-enum": [2, "always", [
        "components/Button",
        "组件/按钮",
        ...
      ]]
    }
  }
  ...
}
```

#### 标题（Subject）

标题（Subject）是对提交信息的简短描述。其约定如下：

- 是一个有意义的句子；
- 句末不使用句号。

### 主体信息（Body）

格式与标题保持一致。主要罗列一些变动信息和与之前的对比信息。

### Footer

- 不兼容改动信息。
- 关联 issues。

#### 不兼容改动信息

所有不兼容变更需要放在 footer 中，并且以 `BREAKING CHANGE` 或 `不兼容变更`开始，后面是对变更的描述、理由和迁移方法。

#### 关联 issues

关闭 issues 必须在 footer 区域分开一行，以类似 `closes` 关键词开头：

```
closes #234
```

也可以一次关闭多个 issues

```
closes #123, #245, #992
```

本规范中关键词集合如下：`close`, `closes`, `closed`, `fix`, `fixes`, `fixed`, `resolve`, `resolves`, `resolved`

## 提交信息示例

只有头部信息的提交（常用）：

```
feat(components/Button): add Button component
```

一个包含头部、主体和 Footer 的完整提交信息：

```
修复（组件/按钮）： 修复不兼容 Array.includes() 的情况

在某些浏览器中，例如一些没有升级系统的 iPhone5 机型中的浏览器，不支持这个新特性。

closes #123, #124
```
