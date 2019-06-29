/* eslint-disable no-console */
function foo(x, cb) {
  if (x > 10) {
    console.log('x > 10');
    cb();
  } else console.log('x <=10');
}
const createCb = str => () => console.log(str);

foo(5, createCb('cb'));
foo(20, createCb('cb'));
