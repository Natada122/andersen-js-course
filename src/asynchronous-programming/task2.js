/* eslint-disable no-console */
function parseJSON(jsonStr, successCb, failureCb) {
  try {
    successCb(JSON.parse(jsonStr));
  } catch (error) {
    failureCb(error);
  }
}
const successCb = result => {
  console.log('Success parse!');
  console.log(result);
};
const failureCb = error => {
  console.log('Failure parse!');
  console.log(error);
};
parseJSON('{"x": 10}', successCb, failureCb);
parseJSON('{x}', successCb, failureCb);
