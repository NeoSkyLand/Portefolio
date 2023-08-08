const DarkMode = () => {
    let burgerBars = document.querySelectorAll(".bm-burger-bars");
    let burgerCross = document.querySelectorAll(".bm-cross");
    let burgerMenu = document.querySelectorAll(".bm-menu");
    let burgerMorph = document.querySelectorAll(".bm-morph-shape");
    let burgerText = document.querySelectorAll(".bm-item-list");
    if (!document.body.classList.contains("dark")) {
      document.body.classList.add("dark");
      burgerBars.forEach((bar) => {
        bar.style.background = "#CB6CE6";
      });
      burgerCross.forEach((cross) => {
        cross.style.background = "#8C52FF";
      });
      burgerMenu.forEach((menu) => {
        menu.style.background = "#000000";
      });
      burgerMorph.forEach((morph) => {
        morph.style.fill= "#FF66C4";
      });
      burgerText.forEach((item) => {
        item.style.color = "#8C52FF";
      });
    } else {
      document.body.classList.remove("dark");
      burgerBars.forEach((bar) => {
        bar.style.background = "#17DDFF";
      });
      burgerCross.forEach((cross) => {
        cross.style.background = "#99ecef";
      });
      burgerMenu.forEach((menu) => {
        menu.style.background = "#0097B2";
      });
      burgerMorph.forEach((morph) => {
        morph.style.fill = "#99ecef";
      });
      burgerText.forEach((item) => {
        item.style.color = "#99ecef";
      });
    }
  };
  
  export default DarkMode;
  