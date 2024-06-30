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
    // const cateElement=document.createElement('p')
    // cateElement.innerText=`Catégorie : ${article.catégorie}`

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
    // articleElement.appendChild(cateElement)
    articleElement.appendChild(addToCart)
    addToCart.appendChild(imageToCart)

   
     
 
    
    imageToCart.addEventListener('click', ()=>{
        alert(`Je veux acheter ${article.nom} à ${article.prix} €`)
    })
   }
   
}
  listeProduits(data)

   const boutonALL = document.getElementById('btn-all')
   boutonALL.addEventListener("click", ()=>{
    
    
    document.querySelector('.liste-produits').innerHTML=""
    
    listeProduits(data)})
    
   
   const boutonCanape = document.getElementById('btn-canape')
   boutonCanape.addEventListener("click", ()=>{
    const canapeFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Canapé"
    })
    document.querySelector('.liste-produits').innerHTML=""
    
    listeProduits(canapeFiltrer)
    
   })
   const boutonChaise = document.getElementById('btn-chaise')
   boutonChaise.addEventListener("click", ()=>{
    const chaiseFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Chaise"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(chaiseFiltrer)
    
   })
   const boutonDeco = document.getElementById('btn-deco')
   boutonDeco.addEventListener("click", ()=>{
    const decoFilter = data.filter(function (piece){
        return piece.catégorie ==="Déco"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(decoFilter)
    
   })
   const boutonTable= document.getElementById('btn-table')
   boutonTable.addEventListener("click", ()=>{
    const tableFiltrer = data.filter(function (piece){
        return piece.catégorie ==="Table"
    })
    document.querySelector('.liste-produits').innerHTML=""

    listeProduits(tableFiltrer)
    
   })

   const btnPanier=document.getElementById('commandes')
    const btnAddPanier = document.querySelectorAll('.add-to-cart')
   btnAddPanier.forEach((button)=>{
    button.addEventListener("click",()=>{
        let currentValue=parseInt(btnPanier.textContent, 10)
        currentValue +=1
        btnPanier.textContent=currentValue
    })
   })



   
   



