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

let height = window.innerHeight

console.log(height)

let randomNum1 = Math.floor(Math.random() * length)

/*

$('#snowball1').css('transform', 'translateX(' + randomNum1 + 'px)')

let x1 = snowball1.position()

$('#snowball1').css('transition', '10s')

$('#snowball1').css('transition-timing-function', 'linear')

$('#snowball1').css('transform', 'translate(' + x1.left + 'px, 2000px)')

console.log(x1.left) */


/////////////TWO///////////////////


function funcsnowball2() {

    let randomNum2 = Math.floor(Math.random() * length)

    $('#snowball2').css('transition', '0s')

    $('#snowball2').css('transform', 'translateY(-50px)')

    
    $('#snowball2').css('transform', 'translateX(' + randomNum2 + 'px)')

    let x2 = snowball2.position()
    
    $('#snowball2').css('transition', '10s')
    
    $('#snowball2').css('transition-timing-function', 'linear')
    
    $('#snowball2').css('transform', 'translate(' + x2.left + 'px,  1300px)')
    
    console.log(x2.left)
    
    }
    

    setTimeout(funcsnowball2, 1000)

    setInterval(funcsnowball2, 11000)

//////////////THREE////////////////



function funcsnowball3() {

    let randomNum3 = Math.floor(Math.random() * length)

    $('#snowball3').css('transition', '0s')

    $('#snowball3').css('transform', 'translateY(-50px)')
    
    $('#snowball3').css('transform', 'translateX(' + randomNum3 + 'px)')

    let x3 = snowball3.position()
    
    $('#snowball3').css('transition', '10s')
    
    $('#snowball3').css('transition-timing-function', 'linear')
    
    $('#snowball3').css('transform', 'translate(' + x3.left + 'px, 1300px)')
    
    console.log(height)
    
    }
    
    setTimeout(funcsnowball3, 2000)

    setInterval(funcsnowball3, 12000)



    //44444444444444444444444444444444444444444444444444



    function funcsnowball4() {

        let randomNum4 = Math.floor(Math.random() * length)

        $('#snowball4').css('transition', '0s')

        $('#snowball4').css('transform', 'translateY(-50px)')
        
        $('#snowball4').css('transform', 'translateX(' + randomNum4 + 'px)')
        
        let x4 = snowball4.position()
        
        $('#snowball4').css('transition', '10s')
        
        $('#snowball4').css('transition-timing-function', 'linear')
        
        $('#snowball4').css('transform', 'translate(' + x4.left + 'px, 1300px)')
        
        console.log(x4.left)
        
        }
        
        setTimeout(funcsnowball4, 3000)

        setInterval(funcsnowball4, 13000)


//555555555555555555555555555555555555555555555555555



function funcsnowball5() {

    let randomNum5 = Math.floor(Math.random() * length)

    $('#snowball5').css('transition', '0s')

    $('#snowball5').css('transform', 'translateY(-50px)')
    
    $('#snowball5').css('transform', 'translateX(' + randomNum5 + 'px)')
    
    let x5 = snowball5.position()
    
    $('#snowball5').css('transition', '10s')
    
    $('#snowball5').css('transition-timing-function', 'linear')
    
    $('#snowball5').css('transform', 'translate(' + x5.left + 'px, 1300px)')
    
    console.log(x5.left)
    
    }
    
    setTimeout(funcsnowball5, 4000)

    setInterval(funcsnowball5, 14000)


    //666666666666666666666666666666666666

    function funcsnowball6() {

        let randomNum6 = Math.floor(Math.random() * length)

        $('#snowball6').css('transition', '0s')

        $('#snowball6').css('transform', 'translateY(-50px)')
        
        $('#snowball6').css('transform', 'translateX(' + randomNum6 + 'px)')
    
        let x6 = snowball6.position()
        
        $('#snowball6').css('transition', '10s')
        
        $('#snowball6').css('transition-timing-function', 'linear')
        
        $('#snowball6').css('transform', 'translate(' + x6.left + 'px, 1300px)')
        
        console.log(height)
        
        }
        
        setTimeout(funcsnowball6, 5000)

        setInterval(funcsnowball6, 15000)



        //77777777777777777777777777777777777


        function funcsnowball7() {

            let randomNum7 = Math.floor(Math.random() * length)

            $('#snowball7').css('transition', '0s')

            $('#snowball7').css('transform', 'translateY(-50px)')
            
            $('#snowball7').css('transform', 'translateX(' + randomNum7 + 'px)')
        
            let x7 = snowball7.position()
            
            $('#snowball7').css('transition', '10s')
            
            $('#snowball7').css('transition-timing-function', 'linear')
            
            $('#snowball7').css('transform', 'translate(' + x7.left + 'px, 1300px)')
            
            console.log(x7.left)
            
            }
            
            setTimeout(funcsnowball7, 7000)

            setInterval(funcsnowball7, 17000)


            //8888888888888888888888888


            function funcsnowball8() {

                let randomNum8 = Math.floor(Math.random() * length)

                $('#snowball8').css('transition', '0s')

                $('#snowball8').css('transform', 'translateY(-50px)')
                
                $('#snowball8').css('transform', 'translateX(' + randomNum8 + 'px)')
            
                let x8 = snowball8.position()
                
                $('#snowball8').css('transition', '10s')
                
                $('#snowball8').css('transition-timing-function', 'linear')
                
                $('#snowball8').css('transform', 'translate(' + x8.left + 'px, 1300px)')
                
                console.log(x8.left)
                
                }
                
                setTimeout(funcsnowball8, 8000)

                setInterval(funcsnowball8, 18000)


                //99999999999999999999999


                function funcsnowball9() {

                    let randomNum9 = Math.floor(Math.random() * length)
    
                    $('#snowball9').css('transition', '0s')
    
                    $('#snowball9').css('transform', 'translateY(-50px)')
                    
                    $('#snowball9').css('transform', 'translateX(' + randomNum9 + 'px)')
                
                    let x9 = snowball9.position()
                    
                    $('#snowball9').css('transition', '10s')
                    
                    $('#snowball9').css('transition-timing-function', 'linear')
                    
                    $('#snowball9').css('transform', 'translate(' + x9.left + 'px, 1300px)')
                    
                    console.log(x9.left)
                    
                    }
                    
                    setTimeout(funcsnowball9, 9000)
    
                    setInterval(funcsnowball9, 19000)

                    //1111111100000000000000


                    function funcsnowball10() {

                        let randomNum10 = Math.floor(Math.random() * length)
        
                        $('#snowball10').css('transition', '0s')
        
                        $('#snowball10').css('transform', 'translateY(-50px)')
                        
                        $('#snowball10').css('transform', 'translateX(' + randomNum10 + 'px)')
                    
                        let x10 = snowball10.position()
                        
                        $('#snowball10').css('transition', '10s')
                        
                        $('#snowball10').css('transition-timing-function', 'linear')
                        
                        $('#snowball10').css('transform', 'translate(' + x10.left + 'px, 1300px)')

                    }

                    setTimeout(funcsnowball10, 10000)
    
                    setInterval(funcsnowball10, 20000)
                
                        
                    //111111111111-----1111111111


                    function funcsnowball11() {

                        let randomNum11 = Math.floor(Math.random() * length)
        
                        $('#snowball11').css('transition', '0s')
        
                        $('#snowball11').css('transform', 'translateY(-50px)')
                        
                        $('#snowball11').css('transform', 'translateX(' + randomNum11 + 'px)')
                    
                        let x11 = snowball11.position()
                        
                        $('#snowball11').css('transition', '10s')
                        
                        $('#snowball11').css('transition-timing-function', 'linear')
                        
                        $('#snowball11').css('transform', 'translate(' + x11.left + 'px, 1300px)')
                        
                        console.log(x11.left)
                        
                        }
                        
                        setTimeout(funcsnowball11, 11000)
        
                        setInterval(funcsnowball11, 21000)


                        //1111111111112222222222222222222222


                        function funcsnowball12() {

                            let randomNum12 = Math.floor(Math.random() * length)
            
                            $('#snowball12').css('transition', '0s')
            
                            $('#snowball12').css('transform', 'translateY(-50px)')
                            
                            $('#snowball12').css('transform', 'translateX(' + randomNum12 + 'px)')
                        
                            let x12 = snowball12.position()
                            
                            $('#snowball12').css('transition', '10s')
                            
                            $('#snowball12').css('transition-timing-function', 'linear')
                            
                            $('#snowball12').css('transform', 'translate(' + x12.left + 'px, 1300px)')

                        }

                        setTimeout(funcsnowball12, 12000)
    
                        setInterval(funcsnowball12, 22000)
                        
                            

                        //111111111111333333333333333333333333


                        function funcsnowball13() {

                            let randomNum13 = Math.floor(Math.random() * length)
            
                            $('#snowball13').css('transition', '0s')
            
                            $('#snowball13').css('transform', 'translateY(-50px)')
                            
                            $('#snowball13').css('transform', 'translateX(' + randomNum13 + 'px)')
                        
                            let x13 = snowball13.position()
                            
                            $('#snowball13').css('transition', '10s')
                            
                            $('#snowball13').css('transition-timing-function', 'linear')
                            
                            $('#snowball13').css('transform', 'translate(' + x13.left + 'px, 1300px)')

                        }

                        setTimeout(funcsnowball13, 13000)
    
                        setInterval(funcsnowball13, 23000)

                        //1111111111114444444444444444444


                        function funcsnowball14() {

                            let randomNum14 = Math.floor(Math.random() * length)
            
                            $('#snowball14').css('transition', '0s')
            
                            $('#snowball14').css('transform', 'translateY(-50px)')
                            
                            $('#snowball14').css('transform', 'translateX(' + randomNum14 + 'px)')
                        
                            let x14 = snowball14.position()
                            
                            $('#snowball14').css('transition', '10s')
                            
                            $('#snowball14').css('transition-timing-function', 'linear')
                            
                            $('#snowball14').css('transform', 'translate(' + x14.left + 'px, 1300px)')
                            
                            console.log(x14.left)
                            
                            }
                            
                            setTimeout(funcsnowball14, 14000)
            
                            setInterval(funcsnowball14, 24000)

                            
                            //111111111111555555555555555555555


                            function funcsnowball15() {

                                let randomNum15 = Math.floor(Math.random() * length)
                
                                $('#snowball15').css('transition', '0s')
                
                                $('#snowball15').css('transform', 'translateY(-50px)')
                                
                                $('#snowball15').css('transform', 'translateX(' + randomNum15 + 'px)')
                            
                                let x15 = snowball15.position()
                                
                                $('#snowball15').css('transition', '10s')
                                
                                $('#snowball15').css('transition-timing-function', 'linear')
                                
                                $('#snowball15').css('transform', 'translate(' + x15.left + 'px, 1300px)')
                                
                                console.log(x15.left)
                                
                                }
                                
                                setTimeout(funcsnowball15, 15000)
                
                                setInterval(funcsnowball15, 25000)


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