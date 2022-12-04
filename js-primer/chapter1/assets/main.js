function hello(name) {
  const teisuu = 'varは定数';
  let suisyouHensuu = 'letは推奨の変数';
  var hisuisyouHensuu = 'varは非推奨の変数';

  console.log(teisuu + 'で、' + suisyouHensuu + 'です！' + hisuisyouHensuu + 'は使わないように！\n');

  /*
  データ型
  */
  // プリミティブ型
  console.log('👇 データ型');
  console.log(typeof true); // => "boolean"
  console.log(typeof 42); // => "number"
  console.log(typeof 9007199254740992n); // => "bigint"
  console.log(typeof 'JavaScript'); // => "string"
  console.log(typeof Symbol('シンボル')); // => "symbol"
  console.log(typeof undefined); // => "undefined"
  // オブジェクト型
  console.log(typeof null); // => "object"
  console.log(typeof ['配列']); // => "object"
  console.log(typeof { key: 'value' }); // => "object"
  console.log(typeof function () {}); // => "function"
  console.log('👆 データ型');

  // '===' は型変換せずに比較したい時に用いる。暗黙的な型変換をしない。
  console.log(1 === '1');
}

/**
 * JSDoc: コメントでクラスや関数の説明ができる
 * 例: 数値を合計した値を返します
 * @param {...number} values
 * @return {number}
 */
function sum(...values) {
  // reduceメソッド: 隣り合う2つの配列要素に対して左から右へ同時に関数を適用し、単一の値にする
  return values.reduce((total, value) => {
    if (typeof value !== 'number') {
      throw new Error(`${value}はNumber型ではありません`);
    }
    return total + Number(value);
  }, 0);
}

/**
 * デフォルト引数
 */
function echo(x = 'デフォルト値') {
  return x;
}

/**
 * Rest parameters(残余引数)関数に渡された値を代入
 */
function restParams(arg1, ...restArgs) {
  console.log(arg1, restArgs);
}

main();

function main() {
  hello('名前');
  const x = 1,
    y = 2,
    z = 10;
  console.log('sum関数の結果:', sum(x, y, x));
  console.log(echo());
  restParams("a","b","c")
}
