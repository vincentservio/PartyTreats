const clearPage = () => {
  const clearnav = () => {
    document.getElementById("Order").innerHTML = "";
    document.getElementById("Home").innerHTML = "";
    document.getElementById("About").innerHTML = "";
    document.getElementById("Contact").innerHTML = "";
  };
  clearnav();
  document.getElementById("Form").innerHTML = "";
  // document.getElementById("bg-te").innerHTML = "";
};
