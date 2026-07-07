const api = "https://fakestoreapi.com/products";

let task = Number(prompt(`
-------------- Product Explorer --------------

 1. Show Product Count          11. Jewellery Products
 2. Only Product Names          12. Show First 5 Products
 3. Products Below ₹100         13. Show Last 5 Products
 4. Products Above ₹100         14. Add Serial Number
 5. Show Category               15. Long Description
 6. Display Rating              16. Highest Rated Product
 7. Product Search              17. Cheapest Product
 8. Electronics Products        18. Costliest Product
 9. Men's Clothing              19. Error Page
10. Women's Clothing            20. Mini Project
                                21. Challenge Task

Enter Task Number (1-21)
-----------------------------
`));

fetch(api)
    .then((response) => {
        return response.json();
    })
    .then((products) => {

        // Task 1 : Show Product Count

        if (task == 1) {
            document.getElementById("count").innerHTML =
                "Total Products : " + products.length;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 2 : Display Only Product Names

        else if (task == 2) {

            let output = "";

            products.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 3 : Display Products Below $100

        else if (task == 3) {

            let output = "";

            let below100 = products.filter((c) => {
                return c.price < 100;
            });
            below100.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>Price : $${c.price}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 4 : Display Products Above $100

        else if (task == 4) {

            let output = "";

            let above100 = products.filter((c) => {
                return c.price > 100;
            });
            above100.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>Price : $${c.price}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 5 : Show Category

        else if (task == 5) {

            let output = "";

            products.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>Category : ${c.category}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 6 : Display Rating

        else if (task == 6) {

            let output = "";

            products.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>Rating :${c.rating.rate}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 7 : Search Product

        else if (task == 7) {

            document.getElementById("search").style.display = "block";
            document.getElementById("filters").style.display = "none";

            document.getElementById("search").addEventListener("keyup", function () {

                let text = document.getElementById("search").value.toLowerCase();
                let output = "";

                products.forEach((c) => {
                    if (c.title.toLowerCase().includes(text)) {
                        output += `
                            <div class="card">
                                <h3>${c.title}</h3>
                            </div>`;
                    }
                });

                document.getElementById("products").innerHTML = output;
            });
        }

        // Task 8 : Electronics Products

        else if (task == 8) {

            let output = "";

            products.forEach((c) => {
                if (c.category == "electronics") {
                    output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>${c.category}</p>
                </div>`;
                }
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 9 : Men's Clothing

        else if (task == 9) {

            let output = "";

            products.forEach((c) => {

                if (c.category == "men's clothing") {
                    output += `
                    <div class="card">
                        <h3>${c.title}</h3>
                        <p>${c.category}</p>
                    </div>`;
                }
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 10 : Women's Clothing

        else if (task == 10) {

            let output = "";

            products.forEach((c) => {
                if (c.category == "women's clothing") {
                    output += `
                    <div class="card">
                        <h3>${c.title}</h3>
                        <p>${c.category}</p>
                    </div>`;
                }
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 11 : Jewellery Products

        else if (task == 11) {

            let output = "";

            products.forEach((c) => {
                if (c.category == "jewelery") {
                    output += `
                    <div class="card">
                        <h3>${c.title}</h3>
                        <p>Category : ${c.category}</p>
                    </div>`;
                }
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 12 : Show First 5 Products

        else if (task == 12) {

            let output = "";

            let firstFive = products.slice(0, 5);

            firstFive.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 13 : Show Last 5 Products

        else if (task == 13) {
            let output = "";

            let lastFive = products.slice(-5);

            lastFive.forEach((c) => {
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 14 : Add Serial Number

        else if (task == 14) {

            let output = "";

            products.forEach((c, index) => {
                output += `
                <div class="card">
                    <h3>Product ${index + 1}</h3>
                    <p>${c.title}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 15 :  Long Description

        else if (task == 15) {

            let output = "";
            products.forEach((c) => {
                let description = c.description;
                if (description.length > 100) {
                    description = description.slice(0, 100) + " Read More...";
                }
                output += `
                <div class="card">
                    <h3>${c.title}</h3>
                    <p>${description}</p>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 16 : Highest Rated Product

        else if (task == 16) {
            let highest = products[0];

            products.forEach((c) => {
                if (c.rating.rate > highest.rating.rate) {
                    highest = c;
                }
            });

            document.getElementById("products").innerHTML = `
            <div class="card">
                <h3>${highest.title}</h3>
                <p>Rating :${highest.rating.rate}</p>
            </div>`;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 17 : Cheapest Product

        else if (task == 17) {
            let cheapest = products[0];

            products.forEach((c) => {
                if (c.price < cheapest.price) {
                    cheapest = c;
                }
            });

            document.getElementById("products").innerHTML = `
            <div class="card">
                <h3>${cheapest.title}</h3>
                <p>Price : $${cheapest.price}</p>
            </div>`;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";
        }

        // Task 18 : Costliest Product

        else if (task == 18) {
            let costliest = products[0];

            products.forEach((c) => {
                if (c.price > costliest.price) {
                    costliest = c;
                }
            });

            document.getElementById("products").innerHTML = `
            <div class="card">
                <h3>${costliest.title}</h3>
                <p>Price : $${costliest.price}</p>
            </div>`;
            document.getElementById("filters").style.display = "none";
            document.getElementById("search").style.display = "none";

        }

        // Task 20 : Mini Project 

        else if (task == 20) {

            // Show Product
            document.getElementById("count").innerHTML =
                "Total Products : " + products.length;

            let output = "";

            products.forEach((c) => {

                output += `
                <div class="card">
                    <img src="${c.image}" alt="${c.title}">
                    <h3>${c.title}</h3>
                    <p><b>Category :</b> ${c.category}</p>
                    <p class="price"><b>Price :</b> $${c.price}</p>
                    <p class="rating"><b>Rating :</b> ${c.rating.rate}</p>
                    <button>Buy Now</button>
                </div>`;
            });
            document.getElementById("products").innerHTML = output;
            document.getElementById("filters").style.display = "block";
            document.getElementById("price").style.display = "none";
            document.getElementById("search").style.display = "block";

            // Search Product

            document.getElementById("search").addEventListener("keyup", function () {
                let text = document.getElementById("search").value.toLowerCase();
                let output = "";
                products.forEach((c) => {
                    if (c.title.toLowerCase().includes(text)) {
                        output += `
                        <div class="card">
                            <img src="${c.image}" alt="${c.title}">
                            <h3>${c.title}</h3>
                            <p><b>Category :</b> ${c.category}</p>
                            <p class="price"><b>Price :</b> $${c.price}</p>
                            <p class="rating"><b>Rating :</b>  ${c.rating.rate}</p>
                            <button>Buy Now</button>
                        </div>`;
                    }
                });
                document.getElementById("products").innerHTML = output;
                document.getElementById("filters").style.display = "block";
                document.getElementById("price").style.display = "none";
                document.getElementById("search").style.display = "block";
            });

            // Filter Category

            document.getElementById("category").addEventListener("change", function () {
                let selectedCategory = document.getElementById("category").value;
                let output = "";
                products.forEach((c) => {
                    if (selectedCategory == "all" || c.category == selectedCategory) {
                        output += `
                        <div class="card">
                            <img src="${c.image}" alt="${c.title}">
                            <h3>${c.title}</h3>
                            <p><b>Category :</b> ${c.category}</p>
                            <p class="price"><b>Price :</b> $${c.price}</p>
                            <p class="rating"><b>Rating :</b>  ${c.rating.rate}</p>
                            <button>Buy Now</button>
                        </div>`;
                    }
                });
                document.getElementById("products").innerHTML = output;
                document.getElementById("filters").style.display = "block";
                document.getElementById("price").style.display = "none";
                document.getElementById("search").style.display = "block";
            });
        }

        // Task 21 : Challenge Task

        else if (task == 21) {

            document.getElementById("count").innerHTML =
                "Total Products : " + products.length;
            function showProducts() {
                let search = document.getElementById("search").value.toLowerCase();
                let category = document.getElementById("category").value;
                let maxPrice = document.getElementById("price").value;
                let output = "";
                let total = 0;
                products.forEach((c) => {

                    let match = true;

                    // Search Product

                    if (search != "") {
                        if (c.title.toLowerCase().indexOf(search) == -1) {
                            match = false;
                        }
                    }

                    // Filter Category

                    if (category != "all") {
                        if (c.category != category) {
                            match = false;
                        }
                    }

                    // Filter Price

                    if (maxPrice != "") {
                        if (c.price > Number(maxPrice)) {
                            match = false;
                        }
                    }
                    if (match) {
                        total++;
                        output += `
                            <div class="card">
                                <img src="${c.image}">
                                <h3>${c.title}</h3>
                                <p>Category : ${c.category}</p>
                                <p class="price">Price : $${c.price}</p>
                                <p class="rating">Rating :  ${c.rating.rate}</p>
                            </div>`;
                    }
                })
                document.getElementById("count").innerHTML =
                    "Total Products : " + total;
                if (total == 0) {
                    document.getElementById("products").innerHTML =
                        "<h2>No Products Found</h2>";
                }
                else {
                    document.getElementById("products").innerHTML = output;
                    document.getElementById("filters").style.display = "block";
                    document.getElementById("price").style.display = "inline-block";
                    document.getElementById("search").style.display = "block";
                }
            }
            // Show All Products
            showProducts();
            // Search
            document.getElementById("search").addEventListener("keyup", showProducts);
            // Category
            document.getElementById("category").addEventListener("change", showProducts);
            // Price
            document.getElementById("price").addEventListener("keyup", showProducts);
        }

    })

    // Task 19 : Error Page

    .catch((error) => {

        document.getElementById("products").innerHTML = `
        <div class="card">
            <h2>❌ Unable to Load Products</h2>
            <p>Please try again later.</p>
        </div>`;
    });
