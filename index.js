
//i need to fetch my data in localidades.json, then filter it by the value of the input with id ="ubicacion" and then show it in the DOM
fetch('localidades.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
  });