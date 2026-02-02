const secoes = document.querySelectorAll('main section');
const allLinks = document.querySelectorAll('nav a');
const btnMobile = document.getElementById('btn-mobile');
const navList = document.querySelector('.nav-list');

function showSection(id){
    secoes.forEach((secao) =>{
        if(secao.id === id){
            secao.style.display = 'block';
        }else{
            secao.style.display = 'none';
        }
    })  
    btnMobile.classList.remove('active');
}

allLinks.forEach((link) =>{
    link.addEventListener('click', (e)=>{
        e.preventDefault();
        const id = link.getAttribute('href').slice(1);
        navList.classList.remove('active')
        showSection(id)
    })
})

btnMobile.addEventListener('click', (e)=>{
   navList.classList.toggle('active');
   btnMobile.classList.toggle('active');
})

showSection('home'); // Exibe a seção inicial ao carregar a página