'use strict';
/**
 * 与えられた自然数の階乗を返す
 * 階乗とは、1からその与えられた自然数までの数をすべてかけたものです
 * @param {Number} n
 * @returns {Number}
 */
function factorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result = result * i;
    }
    return result;
}

const assert = require('assert');
assert.equal(factorial(1), 1, `1の階乗は1ですが、実際は${factorial(1)}でした`);
assert.equal(factorial(2), 2, `2の階乗は2ですが、実際は${factorial(2)}でした`);
assert.equal(factorial(3), 6, `3の階乗は6ですが、実際は${factorial(3)}でした`);
assert.equal(factorial(10), 3628800, `10の階乗は3628800ですが、実際は${factorial(10)}でした`);
console.log('すべてのテストを通過しました');
/*
const assert = require('assert');
この部分は Node.js が持つアサーションという機能を、
オブジェクトとして読み込む記述方法です。詳しくはこの後の回で説明していきます。
また、ここで使われている ` (バッククオート) で囲まれている文字列は、
 ${プログラム内の値} という形式の文字列を含めることで、
 変数の値を埋め込むことができる Template Literal という機能になります。
 */