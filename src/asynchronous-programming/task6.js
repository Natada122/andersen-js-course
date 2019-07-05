/* eslint-disable no-console */
function getResolvedPromise(value) {
  return Promise.resolve(value);
}
getResolvedPromise(500)
  .then(value => {
    if (value > 300) throw Error('Ошибка!');
  })
  .catch(error => console.log(error))
  .finally(console.log('This is Finally!'));
