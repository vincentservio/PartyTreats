const loadIndex = () => {
  // loadNav();
  loadHome();
};
// document.addEventListener("DOMContentLoaded", loadIndex);

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
  debugger;
  // clearPage();
  // loadNav();

  const home = document.getElementById("w3-quarter");
  home.innerHTML += ` 

              <img src='https://previews.dropbox.com/p/thumb/ABHXRN-RIy0S3QPO0Pyob9cJ8BP1pYapWGEojnJy3Ws-Gte28n4IMrd1ILc-5Rcar2NVkNsgHB4DTc_la5m7s5X4pJb49p3qfz8sClcDd5ckkPUkAXGhHkahe-WxC4-iXxZ5LhY4F4RM_ytMlZrtFxzsMCRd6NJcnpci4Z6ODyxEaQi8Wkv3h7MNtEb4yeHL8vM0suiabdU5WKbBgcServdQh_yeCH2EbR13gJEoeEyTJ3CBEWXQ3bztVbpVgtAK5wtx5XeUwFKgsK0MDmzEt4E3h5XJ62oNO_XJ02q1EaGjJkeskYMldcLmdWdATih3EmzTzfNbNTwkfaJYK0VWAJXta_xnInKJ-qiDIw8nZg-UEg/p.jpeg?fv_content=true&size_mode=5' alt='' style="width: 100%">

       <h3>The Perfect Sandwich, A Real NYC Classic</h3>
          <p>
            Just some random text, lorem ipsum text praesent tincidunt ipsum
            lipsum.
          </p>

  `;

  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  const init = (n) => {
    slides.forEach((slide, index) => {
      slide.style.display = "none";
      dots.forEach((dot, index) => {
        dot.classList.remove("active");
      });
    });
    slides[n].style.display = "block";
    dots[n].classList.add("active");
  };
  document.addEventListener("DOMContentLoaded", init(currentSlide));
  const next = () => {
    currentSlide >= slides.length - 1 ? (currentSlide = 0) : currentSlide++;
    init(currentSlide);
  };

  const prev = () => {
    currentSlide <= 0 ? (currentSlide = slides.length - 1) : currentSlide--;
    init(currentSlide);
  };

  document.querySelector(".next").addEventListener("click", next);

  document.querySelector(".prev").addEventListener("click", prev);

  setInterval(() => {
    next();
  }, 5000);

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      console.log(currentSlide);
      init(i);
      currentSlide = i;
    });
  });
};

function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
//  <div id="bg-text" class="bg-text">
//     <div class="grid-container">
//   <div class="grid-item">
//   <img  class="homeimg"src="https://previews.dropbox.com/p/thumb/ABGnykItqbX65cHvw-Jpx7RJdQaGT-PZRu0C-CgVMrOW7EWNdp9JrtziITl_hOsiN0H-zY5jvOy0StBNOq276bx82nyQAILlkI57axkx3LFNNB2WV2BfEC4BMPdfVsaKgZFCIQiVRQ7EJ9Jpvq-uWvxCUWwVSBbaRjElbyOKXxVBbnmF9BSyIcJQ-DphJewo8Yxml02NkdKEM7RjhDQWT43GtlWaU8sK_-lx3ksFel-H92Q2PS-AG2BrRRC5ArCLvjDQ318t5fktmOJLCOZ2y5_3XaMgUpb-brKWKb-HdIixD_cHBoc9Ei3kWCDmb5sFgW5sMRiYhh9571ODP6Ah8RKk3rWfaVRXHyV7j0Hc9jAVLqXdpMWSWFfrYULXRW2tm1Dz5reA32prigV3WmLfUsSQLXzmdO2rfgYDkOkRNWVgow/p.jpeg?fv_content=true&size_mode=5" alt="home"/>

//   </div>
//   <div class="grid-item"><img class="homeimg"src="https://previews.dropbox.com/p/thumb/ABFPMGtF5pt_r7MKcPQEz6oGIheeOE4tHSaMKvN17zzVdK__Ts11akj1Vx3fS3z1lwh0UYmbr870JXxCTiLMW3dySshdP1Gx6d0DGGgnjJvEyG56VUkrGIasXxapEFVsexbytUfHUKbJ6yHCAmNlODtCVKF0-0848Qg2CIm0mFwptKacxQTxaIrjcQfNIen6kvI1_4EUDbvLbn_IZgzwal7kpfSV_rMCl7MaGamqLMNGgcOE2FvILrmJpJeaMNH3SvSZnBiDzdWZYdZRwOUXELoMwKJu_Z6VsBpwDz1jZWdbPZHTDYJ8Q1EpLkF4-yx3kQ6tuu-P3EGFD1l80ahZtJQmUs8ecqkqV8gmma-VCW9NpQ/p.jpeg?fv_content=true&size_mode=5" alt="homse"/></div>
//   <div class="grid-item"><img class="homeimg"src="https://previews.dropbox.com/p/thumb/ABEmD6azNV-ab5Tj1t8x75aUJSTSBgCGAShto2WKu75rzDygxHbFMY0xZJeyrM_hfXC09BxG8_BvelWDsezievuCxjuVJT5oQqoE-WFGcy6sTsDo0zpm9fGzaFcNYDAyX4bZ-Qt7xXGm7aYgdRdCptUK8A5xx4LRv3-nIYDnKGjLiG76S5R_wbVYfqN7-lBM8b6GHUl5qqvVf2hBu4Kd9F3n6UImcMQsFNn6aNcrC2k5AHzPvECl1FuCGvJCmgUIz-sfZLMM-i2zGwMcU5LigN-qWD1DN4nmxu9vyonEGVdOG93-xq17o7gF4NplrmExk6NWcIPJDeX42I-_lxaDUltG-a7G1Mh_P11dUBdwzqHPwJnRiisXJKoJ3d5jEVKRkOCg5JMqExhttAmzLtsXdxpG6RSOzyzjtB-ZBfaukjswcQ/p.jpeg?fv_content=true&size_mode=5"/></div>
//   <div class="grid-item"><img class="homeimg"src="https://previews.dropbox.com/p/thumb/ABHLSWwG47UKqp800Jqj-vJH89jTFQOFXaEiDMNR6Dc3YmmGoqZKEHVGAI8G93U32qr9UHhpEW0uDJEGVL86Wqt4JLHDvhvwpo2CqaFoWdsrLdYEJIyJh-afMOk3_Xgt5gKJXfKajMLEPFDGU9edb3qq3bsdujy0bz_kDWmSzhVU7v8A9Ww7i407Hsp-1lc8Ex1xQUTovaDsez2dSq9yemFAosS8Vsr7MZEePgFkX2573IpattnSYyQswhtFW6GXER586XplnjTBmOsSbY1v2vp7JMr4nWPqTDXs1KvPDVdqADNpUZyvCxzXtnHUHREhtPsL3ukBYjbWKzM8aWXjtmtQS6FF0LcVX-Gj2vSELRyLYA/p.jpeg?fv_content=true&size_mode=5"/></div>
//   <div class="grid-item"><img class="homeimg"src="https://previews.dropbox.com/p/thumb/ABFelE_fJakfxzzN4S7_7ROsg5zX86XLfST3dBXl8ENgS9xd4YwDk0x20GtJ0oOGLQiwPmDMEAlbVG2XGkBP5TCkW97T9HA2kmLRDFCTIiakckVHsAgokBttmKtuo57fymPcynlER8jKXAa274aBJz7QpZA4WE1OHPQmPycguoWGJbze7yT6bAHRs_ycnpzzdKEKBGiTts-RDkLd80nS2sZKxlqNgESsIGi5T2DIm0O6z84k-AjNZtwfkf_ZSOpco6r1HDzwAk_u3yA62JCJn5XP50a-wm2qWbgRL9K1wma-w166letjiqIfsG9H4nMfaO5al9vmuF3wpgyrKnb5jFxpTz8lggIEcQR3_rF53qpiUqhc_adAudRJocoYPcerdyhlsRogS3jmLRzrqC21_HmIuTNYMj7UPKNnIvdH8WoIyg/p.jpeg?fv_content=true&size_mode=5" alt="home"/></div>
//   <div class="grid-item"><img class="homeimg"src="https://previews.dropbox.com/p/thumb/ABGEcQs0iJO3WMbGHqLHuxTMUMy1-t5_v-dQo_Olpcm0mclHn8xTCbdlgz2oHxuU9SlN3fskcVm-fN56hDSEQtx3E1kIUYPwQfJmzh_GAtAdCwR2rPG2iI3PIdQE0BJ_rDNhE3mWNkdOsTpVIGiiWZEURdKmrPhWQWH1x1PYd-_MbclGGHRKrxyYIaytUQhr7vBEggs7GT5PmdNd7G1Aq82L6J4n0zYWl5dBzQ46RilAWpToXIH-9Afle_fBjGj70aqcsuvIcB15y002_56RmQlqThKWQWRUxXufEV9LIPF9l1rGT1vVT23Dmv_feZXD5XH342UzXo7zq8t2Ew1zoGTUS5MIPAwYZkqBFqMFXTkpKR9aK7zN7S7BlX9ZOdd2bSTXAgsCy9wkurwqy1tQlf0S85cu86pbD2e4vUpgvFPKQg/p.jpeg?fv_content=true&size_mode=5"/></div>

//         <div class="slideshow-container">

// <div class="mySlides fade">
//   <div class="numbertext">1 / 3</div>
//   <img src="https://previews.dropbox.com/p/thumb/ABFPMGtF5pt_r7MKcPQEz6oGIheeOE4tHSaMKvN17zzVdK__Ts11akj1Vx3fS3z1lwh0UYmbr870JXxCTiLMW3dySshdP1Gx6d0DGGgnjJvEyG56VUkrGIasXxapEFVsexbytUfHUKbJ6yHCAmNlODtCVKF0-0848Qg2CIm0mFwptKacxQTxaIrjcQfNIen6kvI1_4EUDbvLbn_IZgzwal7kpfSV_rMCl7MaGamqLMNGgcOE2FvILrmJpJeaMNH3SvSZnBiDzdWZYdZRwOUXELoMwKJu_Z6VsBpwDz1jZWdbPZHTDYJ8Q1EpLkF4-yx3kQ6tuu-P3EGFD1l80ahZtJQmUs8ecqkqV8gmma-VCW9NpQ/p.jpeg?fv_content=true&size_mode=5" style="width:100%">
//   <div class="text">Caption Text</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">2 / 3</div>
//   <img src="https://previews.dropbox.com/p/thumb/ABEmD6azNV-ab5Tj1t8x75aUJSTSBgCGAShto2WKu75rzDygxHbFMY0xZJeyrM_hfXC09BxG8_BvelWDsezievuCxjuVJT5oQqoE-WFGcy6sTsDo0zpm9fGzaFcNYDAyX4bZ-Qt7xXGm7aYgdRdCptUK8A5xx4LRv3-nIYDnKGjLiG76S5R_wbVYfqN7-lBM8b6GHUl5qqvVf2hBu4Kd9F3n6UImcMQsFNn6aNcrC2k5AHzPvECl1FuCGvJCmgUIz-sfZLMM-i2zGwMcU5LigN-qWD1DN4nmxu9vyonEGVdOG93-xq17o7gF4NplrmExk6NWcIPJDeX42I-_lxaDUltG-a7G1Mh_P11dUBdwzqHPwJnRiisXJKoJ3d5jEVKRkOCg5JMqExhttAmzLtsXdxpG6RSOzyzjtB-ZBfaukjswcQ/p.jpeg?fv_content=true&size_mode=5" style="width:100%">
//   <div class="text">Caption Two</div>
// </div>

// <div class="mySlides fade">
//   <div class="numbertext">3 / 3</div>
//   <img src="https://previews.dropbox.com/p/thumb/ABHLSWwG47UKqp800Jqj-vJH89jTFQOFXaEiDMNR6Dc3YmmGoqZKEHVGAI8G93U32qr9UHhpEW0uDJEGVL86Wqt4JLHDvhvwpo2CqaFoWdsrLdYEJIyJh-afMOk3_Xgt5gKJXfKajMLEPFDGU9edb3qq3bsdujy0bz_kDWmSzhVU7v8A9Ww7i407Hsp-1lc8Ex1xQUTovaDsez2dSq9yemFAosS8Vsr7MZEePgFkX2573IpattnSYyQswhtFW6GXER586XplnjTBmOsSbY1v2vp7JMr4nWPqTDXs1KvPDVdqADNpUZyvCxzXtnHUHREhtPsL3ukBYjbWKzM8aWXjtmtQS6FF0LcVX-Gj2vSELRyLYA/p.jpeg?fv_content=true&size_mode=5" style="width:100%">
//   <div class="text">Caption Three</div>
// </div>

// <a class="prev" onclick=${plusSlides(-1)}>&#10094;</a>
// <a class="next" onclick=${plusSlides(1)}>&#10095;</a>

// </div>
// <br>

// <div style="text-align:center">
//   <span class="dot" onclick=${currentSlide(1)}></span>
//   <span class="dot" onclick=${currentSlide(2)}></span>
//   <span class="dot" onclick=${currentSlide(3)}></span>
// </div>
