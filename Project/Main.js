let modal = document.querySelector('#myModal')
let modalclick = document.querySelector('#modal-click')
let closeBtn =document.querySelector('.close')

modalclick.addEventListener('click',function(){
    modal.style.display= 'block'

    closeBtn.addEventListener('click',function(event){
        modal.style.display ='none'
        
    })

})

let modal2 = document.querySelector('#secondmodel')
let createBtn = document.querySelector('#createbtn')
let exitBtn =document.querySelector('.exit')

createBtn.addEventListener('click', function(){
    modal2.style.display = 'block'
    modal.style.display= 'none'

    exitBtn.addEventListener('click',function(event){
        modal2.style.display ='none'
    })
})