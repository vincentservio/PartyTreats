const loadIndex = () => {
  loadNav();
  loadHome();
};
document.addEventListener("DOMContentLoaded", loadIndex);

const loadNav = () => {
  // debugger;
  clearPage();
  document.getElementById("Order").innerText += "Order";
  document.getElementById("Home").innerText += "Home";
  document.getElementById("About").innerText += "About";
  document.getElementById("Contact").innerText += "Contact";
  document.getElementById("Order").addEventListener("click", loadform);
  document.getElementById("Home").addEventListener("click", loadHome);
  document.getElementById("Contact").addEventListener("click", loadContact);
  document.getElementById("About").addEventListener("click", loadAbout);
};

const loadHome = () => {
  clearPage();
  loadNav();
  const home = document.getElementById("bg-te");
  home.innerHTML += ` <div id="bg-text" class="bg-text"> <h1>I am John Doe</h1>
      <p>And I'm a Photographer</p> </div>`;
};
