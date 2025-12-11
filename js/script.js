const allLinks = document.querySelectorAll('nav a');
const secoes = document.querySelectorAll('main section');

const showSection = (id) => {
    secoes.forEach((secao) =>{
        if(secao.id === id){
            secao.style.display = 'block';
        }else{
            secao.style.display = 'none';        }
    }) 
}

console.log(showSection())

allLinks.forEach((link) =>{
    link.addEventListener('click', (e) =>{
        e.preventDefault();
       const id = link.getAttribute('href').substring(1);
    })
})