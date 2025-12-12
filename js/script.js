const secoes = document.querySelectorAll('main section');
const allLinks = document.querySelectorAll('nav a');

function showSection(id){
    secoes.forEach((secao) =>{
        if(secao.id === id){
            secao.style.display = 'block';
        }else{
            secao.style.display = 'none';
        }
    })
}

allLinks.forEach((link) =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        showSection(id)
    })
})