"format cjs";

var wrap = require('word-wrap');
var longest = require('longest');
var rightPad = require('right-pad');

var filter = function(array) {
  return array.filter(function(x) {
    return x;
  });
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function (options) {

  var types = options.types;
  // NOTE: 范围选择列表，暂时不启用，采用手动输入
  // var scopes = options.scopes;

  var length = longest(Object.keys(types)).length * 2 + 1;

  var typeList = Object.keys(types).map(key => ({
    name: `${rightPad(key + '：', length/2, '  ')} ${types[key].description}`,
    value: key
  }));

  // NOTE: 范围选择列表，暂时不启用，采用手动输入
  // var scopeList = map(scopes, function (type, key) {
  //   return {
  //     name: rightPad(key + ':', length) + ' ' + type.description,
  //     value: key
  //   };
  // });

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter: function(cz, commit) {
      console.log('\n标题会在108个字符后进行裁剪。 主体内容每行会在108个字符后自动换行，手动换行请直接输入"\\n"。\n');

      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.
      cz.prompt([
        {
          type: 'list',
          name: 'type',
          message: '选择你此次提交的改变类型：',
          choices: typeList
        }, {
          type: 'input',
          name: 'scope',
          message: '本次提交的改变所影响的范围（如：组件或文件名称）？ (按 enter 键跳过)\n'
        }, {
          type: 'input',
          name: 'subject',
          message: '一句话概括说明本次提交内容，尽量包含主谓宾结构，杜绝简单的单词（如：update，limit）：\n'
        }, {
          type: 'input',
          name: 'body',
          message: '详细说明此次改动包含哪些内容：（按 enter 键跳过）\n'
        }, {
          type: 'confirm',
          name: 'isBreaking',
          message: '是否存在不兼容变更（breaking changes）',
          default: false
        }, {
          type: 'input',
          name: 'breaking',
          message: '列出所有不兼容的变更内容：\n',
          when: function(answers) {
            return answers.isBreaking;
          }
        }, {
          type: 'confirm',
          name: 'isIssueAffected',
          message: '此次变更是否影响某些打开的 issue ？',
          default: false
        }, {
          type: 'input',
          name: 'issues',
          message: '列出此次改动引用的所有 issues （如："fix #123", "Closes #123, #124"）：\n',
          when: function(answers) {
            return answers.isIssueAffected;
          }
        }
      ]).then(function(answers) {

        var maxLineWidth = 108;

        var wrapOptions = {
          trim: true,
          newline: '\n',
          indent:'',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        var scope = answers.scope.trim();
        scope = scope ? '（' + answers.scope.trim() + '）' : '';

        // Hard limit this line
        var head = (answers.type + scope + '： ' + answers.subject.trim()).slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        var body = wrap(answers.body, wrapOptions);

        // Apply breaking change prefix, removing it if already present
        var breaking = answers.breaking ? answers.breaking.trim() : '';
        breaking = breaking ? '不兼容变更：' + breaking.replace(/^不兼容变更： /, '') : '';
        breaking = wrap(breaking, wrapOptions);

        var issues = answers.issues ? wrap(answers.issues, wrapOptions) : '';

        var footer = filter([ breaking, issues ]).join('\n\n');

        commit(head + '\n\n' + body + '\n\n' + footer);
      });
    }
  };
};
