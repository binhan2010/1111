import { FOOD_API_KEY } from "./config.js"; // Giả sử bạn có một file config.js cho API đồ ăn

const searchQuery = new URLSearchParams(location.search);

const query = searchQuery.get("q")?.trim();

(async () => {
  if (query) {
    const data = await (
      await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${encodeURIComponent(
          query
        )}&apiKey=${FOOD_API_KEY}&number=20` // Sử dụng API Spoonacular (ví dụ) và giới hạn số lượng kết quả
      )
    ).json();

    console.log(data);

    document.querySelector("form").style.display = "none";
    document.querySelector("#food-grid").style.display = "grid"; // Đổi ID thành food-grid

    document.querySelector("#food-grid").innerHTML = /*html*/ `
      <h1 className="text-2xl mb-8">
        Search result for '${query}'</h1>
      <div
      >
        ${data.results
          .map(
            (item) => /*html*/ `
              <a href="./food-info.html?id=${item.id}" >
                <div class="food-card">
                  <img
                    style="width: auto; height: auto; aspect-ratio: 1/1; object-fit: cover;"
                    class="fade-in"
                    onload="this.style.opacity = '1'"
                    src="${item.image}" // API Spoonacular trả về đường dẫn trực tiếp đến ảnh
                    alt="${item.title}"
                  />
                  <p class="multiline-ellipsis-2">
                    ${item.title}
                  </p>
                </div>
              </a>
        `
          )
          .join("")}
      </div>
    `;
  }

  document.querySelector(".backdrop").classList.add("backdrop-hidden");
})();