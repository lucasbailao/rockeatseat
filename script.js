function toggleMode() {
    
    const html = document.documentElement
    html.classList.toggle("light")

    // pegar a tag img 
    const img = document.querySelector("#profile img")


    //substituir a imagem 
    // se tiver light mode, adicionar a imagem light
    if(html.classList.contains("light")){
        img.setAttribute('src', './assets/ftazul.png')
        
    } else {

        img.setAttribute('src', './assets/ftamarela.png')
       
    }
    


    
   
}