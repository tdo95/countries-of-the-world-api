
let searchbox = document.querySelector('input');

searchbox.addEventListener('input', async (e) => {
    console.log(e.target.value)
    let text = e.target.value;
    let res = await fetch(`/api/${text}`);
    let data = await res.json()
    console.log(data)
    
})