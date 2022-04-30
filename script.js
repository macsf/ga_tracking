document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

  const $serviceThumbs = Array.prototype.slice.call(document.querySelectorAll(".thumb-service"), 0);
  const $highlightProducts = Array.prototype.slice.call(document.querySelectorAll("#highlightProducts a"), 0);
  const $otherProducts = Array.prototype.slice.call(document.querySelectorAll("#products a"), 0);

  const $btnLogin = Array.prototype.slice.call(document.querySelectorAll("#loginButton"), 0);
  const $btnAddToCart = Array.prototype.slice.call(document.querySelectorAll("#addToCart"), 0);
  const $btnSubmitForm = Array.prototype.slice.call(document.querySelectorAll("#submitContactForm"), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  if ($highlightProducts.length > 0) {
    $highlightProducts.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "view_item", {
          currency: "USD",
          value: 100,
          items: [{
            item_name: el.id
          }]
        });
        console.log(el);
        window.location.href = `./${el.id}.html`;
      });
    });
  }

  if ($otherProducts.length > 0) {
    $otherProducts.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "view_item", {
          currency: "USD",
          value: 100,
          items: [{
            item_name: el.id
          }]
        });
        alert(`Clicked on ${el.id}`);
      });
    });
  }

  if ($serviceThumbs.length > 0) {
    $serviceThumbs.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "select_content", {
          content_type: "service",
          item_id: el.id
        });
        alert(`Clicked on ${el.id}`);
      });
    });
  }

  if ($btnLogin.length == 1) {
    $btnLogin.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "login");
        alert("Login.");
      });
    });
  }

  if ($btnAddToCart.length == 1) {
    $btnAddToCart.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "add_to_cart");
        alert("Add product to shopping cart.");
      });
    });
  }

  if ($btnSubmitForm.length == 1) {
    $btnSubmitForm.forEach((el) => {
      el.addEventListener("click", () => {
        gtag("event", "generate_lead");
        alert("Submit Contact Form.");
      });
    });
  }

});
