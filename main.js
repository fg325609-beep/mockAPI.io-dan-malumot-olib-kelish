const wrapper = document.getElementById("container");
const search = document.getElementById("input")
fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(response => response.json())
.then(data =>{
    
    
   
    
    render(data)
})
.catch(error=> console.error("xatolik yuz berdi",error));
function render(users){
    const cards = users.map(el =>`
        <div id"card" key = "${el.id}">
    <img src="${el.avatar}" alt="">
    <p>${el.name}</p>
    <a href="#">${el.createdAt}</a>
</div>
        `).join()

        wrapper.innerHTML = cards
}
render(users)


function filterInput(data){
    search.addEventListener("search",(e) =>{
        let input = e.target.value.toLowerCase();
        let filterIndia = data.filter(input =>
            search.name.tolowercase().includes(input);
            search.createdAt.tolowercase().includes(input);

        )
        render(filterIndia)
    });

}