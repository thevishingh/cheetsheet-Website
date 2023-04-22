// After the DOM is loaded
window.addEventListener(
    "load",
    function (e) {
      // Hamburger or X
      let navham = document.getElementById("nav-ham");
      // 1st level (only one)
      let navul = document.querySelector("nav > ul");
      // 2nd level (many)
      let navulliuls = document.querySelectorAll("nav > ul > li > ul");
      // 1st level links that have a 2nd level dropdown (many)
      let navullis = document.querySelectorAll(
        "nav > ul > li a:not(:only-child)"
      );
  
      // Toggle 2nd level visibility
      let toggle2nd = function (e) {
        // Make 2nd level visible
        let thisul = this.parentNode.querySelector("ul");
        thisul.classList.toggle("active");
        // Hide other dropdowns
        for (let item of navulliuls) {
          if (item !== thisul) {
            item.classList.remove("active");
          }
        }
        // Do not execute this link or hidenav
        e.stopPropagation();
      };
  
      // Toggle mobile navigation bar
      let togglenav = function (e) {
        // Hamburger to X toggle
        navham.classList.toggle("active");
        // 1st level visible toggle
        navul.classList.toggle("active");
        // Do not execute hidenav
        e.stopPropagation();
      };
  
      // Hide mobile navigation bar
      let hidenav = function (e) {
        // Hamburger
        navham.classList.remove("active");
        // 1st level visible toggle
        navul.classList.remove("active");
        e.stopPropagation();
        // Hide 2nd level
        for (let item of navulliuls) {
          item.classList.remove("active");
        }
      };
  
      // Toggle 2nd level visibility on click on any link that has a 2nd level dropdown
      for (let item of navullis) {
        item.addEventListener("click", toggle2nd, false);
      }
  
      // Hamburger or X click
      navham.addEventListener("click", togglenav, false);
  
      // Clicking away from dropdown will remove the dropdown class
      document.documentElement.addEventListener("click", hidenav, false);
    },
    false
  );
  