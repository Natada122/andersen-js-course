/* eslint-disable no-console */
function getData() {
  try {
    fetch('http://www.json-generator.com/api/json/get/cfQCylRjuG')
      .then(response => response.json())
      .then(users => {
        if (users.getUsersData)
          fetch('http://www.json-generator.com/api/json/get/cfVGucaXPC')
            .then(response => response.json())
            .then(data => console.log(data));
      });
  } catch (error) {
    console.log(error);
  }
}
getData();
