// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "bootstrap"

import { initNavbar } from "./components/navbar"


document.addEventListener("turbo:load", () => {
  // call all the functions
  initNavbar();
})
