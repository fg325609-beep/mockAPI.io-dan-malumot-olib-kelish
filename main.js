const wrapper = document.getElementById("container");

fetch("https://699d9b4283e60a406a46e1ba.mockapi.io/Teachers")
.then(Response => Response.json())
.then(data =>{
    console.log(data);
    
    // render(data)
});
// .catch(error=> console.error("xatolik yuz berdi",error));
// function render(users){
//     const cards = users.map(el =>`
//         `)
// }
