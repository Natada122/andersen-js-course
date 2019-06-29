/* eslint-disable no-console */
const urls = [
  'http://www.json-generator.com/api/json/get/cevhxOsZnS',
  'http://www.json-generator.com/api/json/get/cguaPsRxAi',
  'http://www.json-generator.com/api/json/get/cfDZdmxnDm',
  'http://www.json-generator.com/api/json/get/cfkrfOjrfS',
  'http://www.json-generator.com/api/json/get/ceQMMKpidK',
];
const promises = urls.map(url => fetch(url));
function getDataSequence() {
  promises.forEach(value => {
    value.then(response => response.json()).then(data => console.log(data));
  });
}

function getDataParallel() {
  Promise.all(promises).then(results =>
    results.forEach(response => {
      response.json().then(data => console.log(data));
    })
  );
}
getDataParallel();
getDataSequence();
