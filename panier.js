function activePanier(){
    let popPanier=document.querySelector('.pop-up-panier-background')
   
    popPanier.classList.add("active")

} 

function desactivePanier(){
    let popPanier=document.querySelector('.pop-up-panier-background')
    popPanier.classList.remove("active")
}

function FaireApparaitrePanier(){
    let closePanier=document.getElementById('closePanier')
    let popPanier=document.querySelector('.pop-up-panier-background')
    const btnCadie=document.getElementById('panier')
    btnCadie.addEventListener('click', ()=>{
        activePanier()
    })
    
        closePanier.addEventListener('click',(event)=>{
        if(event.target===closePanier){
            desactivePanier()
        }
    })
 }
 FaireApparaitrePanier()
