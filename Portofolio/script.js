var themeBtn = document.getElementById('theme')

themeBtn.onclick = function(){
    document.body.classList.toggle('dark__theme')
    if(document.body.classList.contains('dark__theme')){
        theme.src = "./media/icons/sun.svg"
    }else{
        theme.src = "./media/icons/moon.svg"
    }
}