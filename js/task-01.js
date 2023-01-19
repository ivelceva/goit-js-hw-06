let categories = document.querySelector("ul#categories");
let items = categories.querySelectorAll("li.item");
console.log("Number of categories: " + items.length);

items.forEach(function (item) {
  let title = item.querySelector("h2").textContent;
  let elements = item.querySelectorAll("li").length;
  console.log("Category: " + title);
  console.log("Elements: " + elements);
});
