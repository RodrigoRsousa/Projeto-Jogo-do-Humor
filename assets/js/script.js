const elementoNome = document.getElementById('nome'); 
const elementoSituacao = document.querySelector('#situacao'); 
const elementoImg = document.querySelector('#imagem') 
let elementoBtn = document.querySelector('#alterar') 


elementoBtn.addEventListener('click', () =>{
    
    if(elementoBtn.value == 'primeiro'){
        elementoImg.src = './assets/imag/j2.jpg' 
        elementoNome.innerText = 'Julio do desconto kkk' 
        elementoSituacao.innerText = 'Pega a visão' 
        elementoBtn.value = 'segundo' 
    } else if(elementoBtn.value == 'segundo') { 
        elementoImg.src = './assets/imag/j3.jpg' 
        elementoNome.innerText = 'Julius sabio' 
        elementoSituacao.innerText = 'De grão em grão a galinha enche o pappo kkkkkkk' 
        elementoBtn.value = 'terceiro'  
    } else { 
        elementoImg.src = './assets/imag/j4.jpg' 
        elementoNome.innerText = 'Julius Guedes' 
        elementoSituacao.innerText = 'Segredo para o enriquecimento kkkkk' 
        elementoBtn.value = 'primeiro' 
        
    } 
     
   

      
})