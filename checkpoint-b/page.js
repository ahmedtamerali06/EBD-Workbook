
import { items } from "./items.js";

// Display items on the webpage
export function renderItems(list) {
  const productList = document.querySelector("#list");

  productList.innerHTML = "";

  list.forEach((item) => {
    const li = document.createElement("li");

    li.classList.add("stock-line");
    li.textContent = `${item.name} (${item.category})`;

    productList.append(li);
  });
}

// Find only electronics
export function matching() {
  return items.filter((item) => item.category === "electronics");
}

// Set up the page and button
export function start() {
  renderItems(items);

  const button = document.querySelector("#select");

  button.addEventListener("click", () => {
    renderItems(matching());
  });
}

<script type="module">
  import { start } from "./page.js";
  start();
</script>