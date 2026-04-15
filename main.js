const wrapper = document.getElementById("container");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(response => response.json())
.then(data =>{
    
    
    console.log(data);
    
    render(data)
})
.catch(error=> console.error("xatolik yuz berdi",error));
function render(users){
    const cards = users.map(el =>`
        <div key = "${el.id}">
    <h1>${el.avatar}</h1>
    <p>${el.name}</p>
    <a href="#">${el.createdAt}</a>
</div>
        `).join()

        wrapper.innerHTML = cards
}
render(users)