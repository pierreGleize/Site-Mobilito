const reponse= await fetch('mobilier.json')
const data= await reponse.json()





function listeProduits (data){
    
    for(let i=0;i<data.length;i++){
    const article=data[i]
   
    const produit= document.querySelector(".liste-produits")

    const articleElement=document.createElement('article')
    const imageElement=document.createElement("img")
    imageElement.src=article.image
    const nomElement=document.createElement('h3')
    nomElement.innerText=article.nom
    const prixElement=document.createElement('p')
    prixElement.innerText=`${article.prix} €`
    

    const addToCart=document.createElement('button')
    addToCart.innerText="Ajouter au panier"
    addToCart.className="add-to-cart"
    
    const imageToCart=document.createElement('img')
    imageToCart.src= "image/cart3.svg"
    imageToCart.id='img-caddie'



    produit.appendChild(articleElement)
   
    articleElement.appendChild(imageElement)
    articleElement.appendChild(nomElement)
    articleElement.appendChild(prixElement)
    articleElement.appendChild(addToCart)
    addToCart.appendChild(imageToCart)

   
    const contenuePanier=document.querySelector('.pop-up-panier')
    let total=document.getElementById('total')
    
    addToCart.addEventListener('click', ()=>{
    
    const nomPanier = document.createElement('p')
    nomPanier.innerText=article.nom
    const boutonPlus = document.createElement('button')
    boutonPlus.innerText="+"
    boutonPlus.className="bouton-plus"
    const boutonMoins = document.createElement('button')
    boutonMoins.innerText="-"
    boutonMoins.className="bouton-moins"
    let quantité =document.createElement('span')
    quantité.textContent=1

    const prixPanier= document.createElement('p')
    prixPanier.innerText = `${article.prix}€`
     let value=0
    value=parseInt(total.textContent, 10)
    value +=article.prix
    total.textContent=value

    contenuePanier.appendChild(nomPanier)
    contenuePanier.appendChild(prixPanier)
    
    prixPanier.appendChild(boutonMoins)
    prixPanier.appendChild(boutonPlus)
    contenuePanier.appendChild(quantité)
    
   
    boutonPlus.addEventListener('click',()=>{
        let valeur = parseInt(quantité.textContent,10)
        valeur++
        quantité.textContent=valeur
        let value=0
        value=parseInt(total.textContent,10)
        value += article.prix
        total.textContent=value
       
    })
    boutonMoins.addEventListener('click',()=>{
        let valeurs = parseInt(quantité.textContent,10)

        
        if(valeurs>1){

        valeurs--
        quantité.textContent=valeurs
        value=parseInt(total.textContent,10)
        value -= article.prix
        total.textContent=value
       
    }else{
        valeurs--
        quantité.textContent=valeurs
        value=parseInt(total.textContent,10)
        value -= article.prix
        total.textContent=value

        nomPanier.remove()
        boutonMoins.remove()
        boutonPlus.remove()
        prixPanier.remove()
        quantité.remove()
        

    }
       
       
        

    })
    })

    
   }
   
}
  listeProduits(data)

   const boutonALL = document.getElementById('btn-all')
   boutonALL.addEventListener("click", ()=>{
    
    
    document.querySelector('.liste-produits').innerHTML=""
    
    listeProduits(data)
    incrementerCaddie()
})
    
   
   const boutonCanape = document.getElementById('btn-canape')
   boutonCanape.addEventListener("click", ()=>{
    const canapeFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Canapé"
    })
    document.querySelector('.liste-produits').innerHTML=""
   
    listeProduits(canapeFiltrer)
     incrementerCaddie()
   })
   const boutonChaise = document.getElementById('btn-chaise')
   boutonChaise.addEventListener("click", ()=>{
    const chaiseFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Chaise"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(chaiseFiltrer)
    incrementerCaddie()
    
   })
   const boutonDeco = document.getElementById('btn-deco')
   boutonDeco.addEventListener("click", ()=>{
    const decoFilter = data.filter(function (piece){
        return piece.catégorie ==="Déco"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(decoFilter)
    incrementerCaddie()
    
   })
   const boutonTable= document.getElementById('btn-table')
   boutonTable.addEventListener("click", ()=>{
    const tableFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Table"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(tableFiltrer)
    incrementerCaddie()
    
   })

function incrementerCaddie(){
    let value = 0
    const btnPanier=document.getElementById('commandes')
    const btnAddPanier = document.querySelectorAll('.add-to-cart')
   btnAddPanier.forEach((button)=>{
    button.addEventListener("click",()=>{
     value=parseInt(btnPanier.textContent, 10)
    value +=1
    btnPanier.textContent=value
    })
   })
 const panierPop=document.querySelector('.pop-up-panier')
const boutonClose= document.getElementById('viderPanier')
boutonClose.addEventListener('click',()=>{
    panierPop.innerHTML=""
    btnPanier.textContent=0
    let total=document.getElementById('total')
    total.textContent=0
})       
}
incrementerCaddie()
  
    
    
    







   




   
   



