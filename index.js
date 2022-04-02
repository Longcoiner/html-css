$(document).ready(function(){
    $('.btn-buyticket').click(function(){
       $('.modal').addClass('open')
    })
    $('.js-modal-close').click(function(){
       $('.modal').removeClass('open')
    })
    $('.modal').click(function(){
       $('.modal').removeClass('open')
    })
    $('.modal-container').click(function(e){
        e.stopPropagation()
        
    })


})