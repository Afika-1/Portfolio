// javascript begins
$(document).ready(function () {
    $('#menuBar').click(function () {
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function () {
        $('#menuBar').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop()>0){
            $('.top').show();
        }
        else{
            $('.top').hide();
        }
    });

    $('a[href*="#"]').on('click',function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 350, 'linear'
        );
    });


});

// const fname= document.getElementById('name-box')
// const email= document.getElementById('email')
// const message=document.getElementById('message-box')
// const form=document.getElementById('form')
// const errorMessage=document.getElementById('error')
// form.addEventListener('submit', (e)=>{

//     let messages=[]
//     if(fname.value==='' || fname==null){
//         messages.push('Full name required')
//     }

//     if (message.value==='' || message==null){
//         messages.push('Please fill all fields')
//     }
//     if (messages){
//     e.preventDefault()
//     errorMessage.innerText=messages.join(',')}
// })

// let cvButton= document.querySelector("section info #cv");
// cvButton.addEventListener("click", ()=>{ const span = document.querySelector("a button");
// cvButton.computedStyleMap.paddingRight= '10px;';
// setTimeout(()=>{
// },3000);
// })