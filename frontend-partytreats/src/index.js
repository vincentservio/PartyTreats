const loadHome = () => {
  loadNav();
};
document.addEventListener("DOMContentLoaded", loadHome);

const loadNav = () => {
  // debugger;
  document.getElementById("nav").innerText += "Form";
  document.getElementById("Home").innerText += "Home";
  document.getElementById("About").innerText += "About";
  document.getElementById("Contact").innerText += "Contact";
  document.getElementById("nav").addEventListener("click", loadform);
};

function loadform() {
  clearPage();
  const index = document.getElementById("Form");

  // let id = event.target.dataset.id;
  //  let cardFormDiv = document.getElementById("name-form");
  let html = `
        <form>
            Theme: <input type="text" id="theme" placeholder="Finding Nemo">
            <br/>
           Color: <input type="text" id="color" placeholder="Blue">
             <br> 
            Size:<input type="text" id="size" placeholder="Small">

            <br> 
            <select id="days">
                <option>CupCakes</option>
                <option>Cake</option>
                <option>Cookies</option>
            
            <select>
              <br> 
            <input type="submit"> 
        </form>
        `;
  index.innerHTML += html;
  //  document.querySelector("form").addEventListener("submit", () => {
  //    createChore(event, id);
  //  }
  //  );
  // fetch("http://localhost:3000/pastries")
  //   .then((response) => response.json())
  //   .then((data) => {
  //     data.map((pastry) => (index.innerHTML += `<div>${pastry.type_of}</div>`));
  //   });
}
