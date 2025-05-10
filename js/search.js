(async () => {
    const searchQuery = new URLSearchParams(location.search);
    const query = searchQuery.get("q")?.trim();
  
    if (query) {
      const data = await fetch(
        `https://6816d83326a599ae7c38b722.mockapi.io/api/food?name=${encodeURIComponent(
          query
        )}`
      );
      const data2 = await data.json();
  
      console.log(data2);
  
      document.querySelector("form").style.display = "none";
      document.querySelector("#doan-grid").style.display = "grid";
  
      document.querySelector("#doan-grid").innerHTML = /*html*/ `
        <h1 className="text-2xl mb-8">
          tìm kiếm cho '${query}'</h1>
        <div
        >
          ${data2
            .map(
              (item) => /*html*/ `
                <div class="food-card">
                  <h3>${item.name}</h3>
                  <p>Giá: ${item.price}</p>
                  <p>Mô tả: ${item.description}</p>
                  <img
                    style="width: auto; height: auto; aspect-ratio: 2/3;"
                    class="fade-in"
                    onload="this.style.opacity = '1'"
                    src="${item.image}"
                    alt="${item.name}"
                  />
                </div>
              `
            )
            .join("")}
        </div>
      `;
    }
  
    document.querySelector(".backdrop").classList.add("backdrop-hidden");
  })();
document.querySelector("backendbackend")