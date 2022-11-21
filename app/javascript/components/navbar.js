import Vue from "vue";
import TurbolinksAdapter from "vue-turbolinks";

Vue.use(TurbolinksAdapter);

const initNavbar = () => {
  const navbar = document.getElementById("navbar")
  if (navbar) {
    new Vue({
      el: navbar,
      data: {
        navbarClass: ""
      },
      methods: {
        updateNavbar: function() {
          // compare window.scrollY to window.innerHeight
          // if scrollY is bigger -> we change the navbar color to white
          // if scrollY is smaller(else) -> we change the navbar color to transparent(?)
          if (window.scrollY > window.innerHeight) {
            this.navbarClass = "navbar-lewagon-white"
          } else {
            this.navbarClass = ""
          }
        }
      },
      mounted() {
        console.log("hello from the navbar vue")
        // event: "scroll"
        // attribute of window: scrollY, innerHeight
        window.addEventListener("scroll", this.updateNavbar)
      }
    })
  }
}

export { initNavbar };
