const loadContact = () => {
  clearPage();
  loadNav();

  fetch("http://localhost:3000/pastries")
    .then((response) => response.json())
    .then((data) => {
      const index = document.getElementById("bg-te");
      data.map(
        (pastry) =>
          (index.innerHTML += `
        <div>${pastry.type_of} - ${pastry.theme}</div>
        <div>${pastry.color} - ${pastry.size}</div>
        <div>${pastry.customer} - </div>
        `)
      );
    });
};
