$('.am').on('click', function() {
    $('.am-wrapper').css('display', 'block')
    $('.am-wrapper').css('height', '80%')
    $('.am-wrapper').css('top', '10%')
    $('.am-text').css('display', 'block')
    $('img').css('display', 'block')
    if(window.innerWidth > 800) {
        $('.am').css('top', '4%')
    } else {
        $('.am').css('top', '4%')
    }
    $('.projects').css('opacity', '0')
    $('.am-back').css('display', 'inline')
})




$('.am-back').on('click', function() {
    $('img').css('display', 'none')
    $('.am-text').css('display', 'none')
    $('.am-wrapper').css('transition', '0.5s')
    $('.am-wrapper').css('height', '1px')
    $('.am-wrapper').css('top', '99%')
    $('.projects').css('opacity', '1')
    $('.am-back').css('display', 'none')
    $('.am').css('top', '90%')
})



$('.projects').on('click', function() {
    $('.pr-wrapper').css('display', 'flex')
    $('.pr-wrapper').css('height', '80%')
    $('.pr-wrapper').css('top', '10%')
    $('.projectimg').css('display', 'block')
    if(window.innerWidth > 800) {
        $('.projects').css('top', '4%')
    } else {
        $('.projects').css('top', '4%')
    }
    $('.am').css('opacity', '0')
    $('.pr-back').css('display', 'inline')
})


$('.pr-back').on('click', function() {
    $('.projectimg').css('display', 'none')
    $('.pr-wrapper').css('transition', '0.5s')
    $('.pr-wrapper').css('height', '0px')
    $('.pr-wrapper').css('top', '99%')
    $('.am').css('opacity', '1')
    $('.pr-back').css('display', 'none')
    $('.projects').css('top', '90%')
})






//SNOW BALL FUNCTION



let snowball1 = $('#snowball1')

let snowball2 = $('#snowball2')

let snowball3 = $('#snowball3')

let snowball4 = $('#snowball4')

let snowball5 = $('#snowball5')

let snowball6 = $('#snowball6')

let snowball7 = $('#snowball7')

let snowball8 = $('#snowball8')

let snowball9 = $('#snowball9')

let snowball10 = $('#snowball10')

let snowball11 = $('#snowball11')

let snowball12 = $('#snowball12')

let snowball13 = $('#snowball13')

let snowball14 = $('#snowball14')

let snowball15 = $('#snowball15')

let snowball16 = $('#snowball16')

let snowball17 = $('#snowball17')

let snowball18 = $('#snowball18')

let snowball19 = $('#snowball19')

let snowball20 = $('#snowball20')









/*
let x4 = snowball4.position()

let x5 = snowball5.position()

let x6 = snowball6.position()

let x7 = snowball7.position()

let x8 = snowball8.position()

let x9 = snowball9.position()

let x10 = snowball10.position()

let x11 = snowball11.position()

let x12 = snowball12.position()

let x13 = snowball13.position()

let x14 = snowball14.position()

let x15 = snowball15.position()

let x16 = snowball16.position()

let x17 = snowball17.position()

let x18 = snowball18.position()

let x19 = snowball19.position()

let x20 = snowball20.position() */



let length = window.innerWidth;

let randomNum1 = Math.floor(Math.random() * length)

$('#snowball1').css('transform', 'translateX(' + randomNum1 + 'px)')

let x1 = snowball1.position()

$('#snowball1').css('transition', '10s')

$('#snowball1').css('transition-timing-function', 'linear')

$('#snowball1').css('transform', 'translate(' + x1.left + 'px, 2000px)')

console.log(x1.left)


/////////////TWO///////////////////


function funcsnowball2() {

    let randomNum2 = Math.floor(Math.random() * length)

    $('#snowball2').css('transition', '0s')

    $('#snowball2').css('transform', 'translateY(-50px)')

    
    $('#snowball2').css('transform', 'translateX(' + randomNum2 + 'px)')

    let x2 = snowball2.position()
    
    $('#snowball2').css('transition', '10s')
    
    $('#snowball2').css('transition-timing-function', 'linear')
    
    $('#snowball2').css('transform', 'translate(' + x2.left + 'px, 2000px)')
    
    console.log(x2.left)
    
    }
    

    setTimeout(funcsnowball2, 1000)

    setInterval(funcsnowball2, 11000)

//////////////THREE////////////////



function funcsnowball3() {

    let randomNum3 = Math.floor(Math.random() * length)

    $('#snowball2').css('transition', '0s')
    
    $('#snowball3').css('transform', 'translateX(' + randomNum3 + 'px)')

    let x3 = snowball3.position()
    
    $('#snowball3').css('transition', '10s')
    
    $('#snowball3').css('transition-timing-function', 'linear')
    
    $('#snowball3').css('transform', 'translate(' + x3.left + 'px, 2000px)')
    
    console.log(x3.left)
    
    }
    
    setTimeout(funcsnowball3, 1000)



    //44444444444444444444444444444444444444444444444444



    function funcsnowball4() {

        let randomNum4 = Math.floor(Math.random() * length)

        $('#snowball2').css('transition', '0s')
        
        $('#snowball4').css('transform', 'translateX(' + randomNum4 + 'px)')
        
        let x4 = snowball4.position()
        
        $('#snowball4').css('transition', '10s')
        
        $('#snowball4').css('transition-timing-function', 'linear')
        
        $('#snowball4').css('transform', 'translate(' + x4.left + 'px, 2000px)')
        
        console.log(x4.left)
        
        }
        
        setTimeout(funcsnowball4, 1000)


//555555555555555555555555555555555555555555555555555



function funcsnowball5() {

    let randomNum5 = Math.floor(Math.random() * length)
    
    $('#snowball5').css('transform', 'translateX(' + randomNum5 + 'px)')
    
    let x5 = snowball5.position()
    
    $('#snowball5').css('transition', '10s')
    
    $('#snowball5').css('transition-timing-function', 'linear')
    
    $('#snowball5').css('transform', 'translate(' + x5.left + 'px, 2000px)')
    
    console.log(x5.left)
    
    }
    
    setTimeout(funcsnowball5, 1000)


    //666666666666666666666666666666666666

    function funcsnowball6() {

        let randomNum6 = Math.floor(Math.random() * length)
        
        $('#snowball6').css('transform', 'translateX(' + randomNum6 + 'px)')
    
        let x6 = snowball6.position()
        
        $('#snowball6').css('transition', '10s')
        
        $('#snowball6').css('transition-timing-function', 'linear')
        
        $('#snowball6').css('transform', 'translate(' + x6.left + 'px, 2000px)')
        
        console.log(x6.left)
        
        }
        
        setTimeout(funcsnowball6, 1000)



        //77777777777777777777777777777777777


        function funcsnowball7() {

            let randomNum7 = Math.floor(Math.random() * length)
            
            $('#snowball7').css('transform', 'translateX(' + randomNum7 + 'px)')
        
            let x7 = snowball7.position()
            
            $('#snowball7').css('transition', '10s')
            
            $('#snowball7').css('transition-timing-function', 'linear')
            
            $('#snowball7').css('transform', 'translate(' + x7.left + 'px, 2000px)')
            
            console.log(x7.left)
            
            }
            
            setTimeout(funcsnowball7, 1000)


            //8888888888888888888888888


            function funcsnowball8() {

                let randomNum8 = Math.floor(Math.random() * length)
                
                $('#snowball8').css('transform', 'translateX(' + randomNum8 + 'px)')
            
                let x8 = snowball8.position()
                
                $('#snowball8').css('transition', '10s')
                
                $('#snowball8').css('transition-timing-function', 'linear')
                
                $('#snowball8').css('transform', 'translate(' + x8.left + 'px, 2000px)')
                
                console.log(x8.left)
                
                }
                
                setTimeout(funcsnowball8, 1000)


                //99999999999999999999999


/*
let length = window.innerWidth

console.log(length)

let randomNum = Math.floor(Math.random() * length)

$('.snowball').css('transform', 'translateX(' + randomNum + 'px)')

let snowball = $('.snowball')

let x = snowball.position()

console.log(x.left)

$('.snowball').css('transition', '10s')

$('.snowball').css('transition-timing-function', 'linear')

$('.snowball').css('transform', 'translate(' + x.left + 'px, 2000px)') */
/*
$('.snowball').css('transform', 'translate(100px, 10000px)') */












/*$('.am').on('click', function() {
    $('.am-wrapper').css('display', 'block')
    $('.am-wrapper').css('height', '80%')
    $('.am-wrapper').css('top', '10%')
    if(window.innerWidth > 800) {
        $('.am').css('top', '4%')
    } else {
        $('.am').css('top', '4%')
    }
    $('.projects').css('display', 'none')
})


$('.am-back').on('click', function() {
    $('.am-wrapper').css('display', 'none')
    $('.am-wrapper').css('height', '1px')
    $('.am-wrapper').css('top', '99%')
    $('.projects').css('display', 'inline')
    $('.am').css('top', '90%')
})*/