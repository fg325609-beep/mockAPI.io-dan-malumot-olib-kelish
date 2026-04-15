const wrapper = document.getElementById("container");
const search = document.getElementById("input");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
  .then(response => response.json())
  .then(data => {
    render(data); // Dastlab barcha ma'lumotni chiqaradi
    filterInput(data); // Qidiruv funksiyasini ishga tushiradi
  })
  .catch(error => console.error("Xatolik yuz berdi:", error));

function render(users) {
  const cards = users.map(el => `
    <div class="card" key="${el.id}">
        <img src="${el.avatar}" alt="${el.name}" style="width:100px">
        <p>${el.name}</p>
        <a href="#">${new Date(el.createdAt).toLocaleDateString()}</a>
    </div>
  `).join(''); // Join ichiga bo'sh satr qo'shish shart

  wrapper.innerHTML = cards;
}

function filterInput(data) {
  // "input" hodisasi har bir harf yozilganda ishlaydi
  search.addEventListener("input", (e) => {
    let inputValue = e.target.value.toLowerCase();

    let filteredData = data.filter(item => {
      // Ismi yoki sanasi mos kelishini tekshiramiz
      return item.name.toLowerCase().includes(inputValue) || 
             item.createdAt.toLowerCase().includes(inputValue);
    });

    render(filteredData); // Faqat qidiruvga moslarini qayta chizadi
  });
}