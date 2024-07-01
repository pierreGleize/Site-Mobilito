

function FaireApparaitrePanier(){
    let closePanier=document.getElementById('closePanier')
    let popPanier=document.querySelector('.pop-up-panier-background')
    const btnCadie=document.getElementById('panier')
   btnCadie.addEventListener('click', ()=>{
    popPanier.classList.toggle('open')
   })
   closePanier.addEventListener('click',()=>{
    popPanier.classList.remove('open')
   })
 }
 FaireApparaitrePanier()
