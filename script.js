

function changeImage(){
    if ( document.getElementById('imagePreview').src.indexOf("./assets/sofa.png") == -1){
        document.getElementById('imagePreview').src = "./assets/sofa.gif";
    } else{document.getElementById('imagePreview').src = "./assets/sofa.png";}
}


/*
function changeImage() {
    image.src = './assets/sofa.gif';
    

}*/