let products = document.querySelectorAll(".product"),
search_box = document.querySelector("#search");



search_box.addEventListener("input", (e) => {
    let value = e.target.value;
    products.forEach(product => {

        if (product.querySelector("h2").textContent.toUpperCase().includes(value.toUpperCase()) == false) {
            product.classList.add("hide")
        } else {
            product.classList.remove("hide")
        }

    });
})








