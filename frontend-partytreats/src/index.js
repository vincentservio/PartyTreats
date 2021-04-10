const loadIndex = () => {
  loadNav();
  loadHome();
};

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
document.addEventListener("DOMContentLoaded", loadNav);

const loadHome = () => {
  
}