function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  
        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}
  
disableScroll()





$('.am').on('click', function() {
    $('.am-wrapper').css('display', 'block')
    $('.am-wrapper').css('height', '80%')
    $('.am-wrapper').css('top', '10%')
    $('.am-text').css('display', 'block')
    $('.Kusou').css('display', 'block')
    if(window.innerWidth > 800) {
        $('.am').css('top', '15%')
    } else {
        $('.am').css('top', '15%')
    }
    $('.am').css('opacity', '0')
    $('.projects').css('opacity', '0')
    $('.cm').css('opacity', '0')
    $('.sk').css('opacity', '0')
    $('.am-back').css('display', 'inline')
    $('h1').css('opacity', '0')
})




$('.am-back').on('click', function() {
    $('.Kusou').css('display', 'none')
    $('.am-text').css('display', 'none')
    $('.am-wrapper').css('transition', '0.7s')
    $('.am-wrapper').css('height', '1px')
    $('.am-wrapper').css('top', '99%')
    $('.am').css('opacity', '1')
    $('.projects').css('opacity', '1')
    $('.cm').css('opacity', '1')
    $('.sk').css('opacity', '1')
    $('.am-back').css('display', 'none')
    $('.am').css('top', '90%')
    $('h1').css('opacity', '1')
})




$('.sk').on('click', function() {
    $('.sk-wrapper').css('display', 'block')
    $('.sk-wrapper').css('height', '80%')
    $('.sk-wrapper').css('top', '10%')
    if(window.innerWidth > 800) {
        $('.sk').css('top', '15%')
    } else {
        $('.sk').css('top', '15%')
    }
    $('.sk').css('opacity', '0')
    $('.projects').css('opacity', '0')
    $('.am').css('opacity', '0')
    $('.cm').css('opacity', '0')
    $('.sk-back').css('display', 'inline')
    $('h1').css('opacity', '0')
})




$('.sk-back').on('click', function() {
    $('.sk-wrapper').css('transition', '0.7s')
    $('.sk-wrapper').css('height', '1px')
    $('.sk-wrapper').css('top', '99%')
    $('.projects').css('opacity', '1')
    $('.am').css('opacity', '1')
    $('.cm').css('opacity', '1')
    $('.sk').css('opacity', '1')
    $('.sk-back').css('display', 'none')
    $('.sk').css('top', '90%')
    $('h1').css('opacity', '1')
})



$('.cm').on('click', function() {
    $('.cm-wrapper').css('display', 'block')
    $('.cm-wrapper').css('height', '80%')
    $('.cm-wrapper').css('top', '10%')
    if(window.innerWidth > 800) {
        $('.cm').css('top', '15%')
    } else {
        $('.cm').css('top', '15%')
    }
    $('.cm').css('opacity', '0')
    $('.projects').css('opacity', '0')
    $('.am').css('opacity', '0')
    $('.sk').css('opacity', '0')
    $('.cm-back').css('display', 'inline')
    $('h1').css('opacity', '0')
})



$('.cm-back').on('click', function() {
    $('.cm-wrapper').css('transition', '0.7s')
    $('.cm-wrapper').css('height', '1px')
    $('.cm-wrapper').css('top', '99%')
    $('.projects').css('opacity', '1')
    $('.am').css('opacity', '1')
    $('.sk').css('opacity', '1')
    $('.cm').css('opacity', '1')
    $('.cm-back').css('display', 'none')
    $('.cm').css('top', '90%')
    $('h1').css('opacity', '1')
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
    $('.projects').css('opacity', '0')
    $('.am').css('opacity', '0')
    $('.sk').css('opacity', '0')
    $('.cm').css('opacity', '0')
    $('.pr-back').css('display', 'inline')
    $('h1').css('opacity', '0')
    $('.projectPic').css('display', 'block')
})


$('.pr-back').on('click', function() {
    $('.projectimg').css('display', 'none')
    $('.pr-wrapper').css('transition', '0.7s')
    $('.pr-wrapper').css('height', '0px')
    $('.pr-wrapper').css('top', '99%')
    $('.projects').css('opacity', '1')
    $('.am').css('opacity', '1')
    $('.sk').css('opacity', '1')
    $('.cm').css('opacity', '1')
    $('.pr-back').css('display', 'none')
    $('.projects').css('top', '90%')
    $('h1').css('opacity', '1')
    $('.projectPic').css('display', 'none')
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

let snowball21 = $('#snowball10')

let snowball22 = $('#snowball11')

let snowball23 = $('#snowball12')

let snowball24 = $('#snowball13')

let snowball25 = $('#snowball14')

let snowball26 = $('#snowball15')

let snowball27 = $('#snowball16')

let snowball28 = $('#snowball17')

let snowball29 = $('#snowball18')

let snowball30 = $('#snowball19')











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

function animation(){


let length = window.innerWidth;

let height = window.innerHeight

console.log(height)

let randomNum1 = Math.floor(Math.random() * length)

/*

$('#snowball1').css('transform', 'translateX(' + randomNum1 + 'px)')

let x1 = snowball1.position()

$('#snowball1').css('transition', '7s')

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
    
    $('#snowball2').css('transition', '7s')
    
    $('#snowball2').css('transition-timing-function', 'linear')
    
    $('#snowball2').css('transform', 'translate(' + x2.left + 'px, '+ height + 'px)')
    
    console.log(x2.left)
    
    }

    function repeat2() {
        setInterval(funcsnowball2, 1000)
    }
    

    setTimeout(funcsnowball2, 500)

    //setTimeout(repeat2, 1)

    //setInterval(funcsnowball2, 11000)

//////////////THREE////////////////



function funcsnowball3() {

    let randomNum3 = Math.floor(Math.random() * length)

    $('#snowball3').css('transition', '0s')

    $('#snowball3').css('transform', 'translateY(-50px)')
    
    $('#snowball3').css('transform', 'translateX(' + randomNum3 + 'px)')

    let x3 = snowball3.position()
    
    $('#snowball3').css('transition', '7s')
    
    $('#snowball3').css('transition-timing-function', 'linear')
    
    $('#snowball3').css('transform', 'translate(' + x3.left + 'px, '+ height + 'px)')
    
    console.log(height)
    
    }
    

    function repeat3() {
        setInterval(funcsnowball3, 10000)
    }
    

    setTimeout(funcsnowball3, 1000)

    //setTimeout(repeat3, 1000)

    /*
    setTimeout(funcsnowball3, 2000)

    setInterval(funcsnowball3, 12000) */



    //44444444444444444444444444444444444444444444444444



    function funcsnowball4() {

        let randomNum4 = Math.floor(Math.random() * length)

        $('#snowball4').css('transition', '0s')

        $('#snowball4').css('transform', 'translateY(-50px)')
        
        $('#snowball4').css('transform', 'translateX(' + randomNum4 + 'px)')
        
        let x4 = snowball4.position()
        
        $('#snowball4').css('transition', '7s')
        
        $('#snowball4').css('transition-timing-function', 'linear')
        
        $('#snowball4').css('transform', 'translate(' + x4.left + 'px,' + height  + 'px)')
        
        console.log(x4.left)
        
        }

        function repeat4() {
            setInterval(funcsnowball4, 10000)
        }
        
    
        setTimeout(funcsnowball4, 1500)
    
        //setTimeout(repeat4, 2000)

        /*
        
        setTimeout(funcsnowball4, 3000)

        setInterval(funcsnowball4, 13000)*/


//555555555555555555555555555555555555555555555555555



function funcsnowball5() {

    let randomNum5 = Math.floor(Math.random() * length)

    $('#snowball5').css('transition', '0s')

    $('#snowball5').css('transform', 'translateY(-50px)')
    
    $('#snowball5').css('transform', 'translateX(' + randomNum5 + 'px)')
    
    let x5 = snowball5.position()
    
    $('#snowball5').css('transition', '7s')
    
    $('#snowball5').css('transition-timing-function', 'linear')
    
    $('#snowball5').css('transform', 'translate(' + x5.left + 'px,' + height  + 'px)')
    
    console.log(x5.left)
    
    }


    function repeat5() {
        setInterval(funcsnowball5, 10000)
    }
    

    setTimeout(funcsnowball5, 2000)

    //setTimeout(repeat5, 3000)
    
    //setTimeout(funcsnowball5, 4000)

    //setInterval(funcsnowball5, 14000)


    //666666666666666666666666666666666666

    function funcsnowball6() {

        let randomNum6 = Math.floor(Math.random() * length)

        $('#snowball6').css('transition', '0s')

        $('#snowball6').css('transform', 'translateY(-50px)')
        
        $('#snowball6').css('transform', 'translateX(' + randomNum6 + 'px)')
    
        let x6 = snowball6.position()
        
        $('#snowball6').css('transition', '7s')
        
        $('#snowball6').css('transition-timing-function', 'linear')
        
        $('#snowball6').css('transform', 'translate(' + x6.left + 'px,' + height  + 'px)')
        
        console.log(height)
        
        }
        
        function repeat6() {
            setInterval(funcsnowball6, 10000)
        }
        
    
        setTimeout(funcsnowball6, 2500)
    
        //setTimeout(repeat6, 4000)

        //setTimeout(funcsnowball6, 5000)

        //setInterval(funcsnowball6, 15000)



        //77777777777777777777777777777777777


        function funcsnowball7() {

            let randomNum7 = Math.floor(Math.random() * length)

            $('#snowball7').css('transition', '0s')

            $('#snowball7').css('transform', 'translateY(-50px)')
            
            $('#snowball7').css('transform', 'translateX(' + randomNum7 + 'px)')
        
            let x7 = snowball7.position()
            
            $('#snowball7').css('transition', '7s')
            
            $('#snowball7').css('transition-timing-function', 'linear')
            
            $('#snowball7').css('transform', 'translate(' + x7.left + 'px,' + height  + 'px)')
            
            console.log(x7.left)
            
            }

            function repeat7() {
                setInterval(funcsnowball7, 10000)
            }
            
        
            setTimeout(funcsnowball7, 3000)
        
        //    setTimeout(repeat7, 5000)
            
            //setTimeout(funcsnowball7, 10000)

            //setInterval(funcsnowball7, 110000)


            //8888888888888888888888888


            function funcsnowball8() {

                let randomNum8 = Math.floor(Math.random() * length)

                $('#snowball8').css('transition', '0s')

                $('#snowball8').css('transform', 'translateY(-50px)')
                
                $('#snowball8').css('transform', 'translateX(' + randomNum8 + 'px)')
            
                let x8 = snowball8.position()
                
                $('#snowball8').css('transition', '7s')
                
                $('#snowball8').css('transition-timing-function', 'linear')
                
                $('#snowball8').css('transform', 'translate(' + x8.left + 'px,' + height  + 'px)')
                
                console.log(x8.left)
                
                }
                
                function repeat8() {
                    setInterval(funcsnowball8, 10000)
                }
                
            
                setTimeout(funcsnowball8, 3500)
            
        //        setTimeout(repeat8, 6000)

                //setTimeout(funcsnowball8, 8000)

                //setInterval(funcsnowball8, 18000)


                //99999999999999999999999


                function funcsnowball9() {

                    let randomNum9 = Math.floor(Math.random() * length)
    
                    $('#snowball9').css('transition', '0s')
    
                    $('#snowball9').css('transform', 'translateY(-50px)')
                    
                    $('#snowball9').css('transform', 'translateX(' + randomNum9 + 'px)')
                
                    let x9 = snowball9.position()
                    
                    $('#snowball9').css('transition', '7s')
                    
                    $('#snowball9').css('transition-timing-function', 'linear')
                    
                    $('#snowball9').css('transform', 'translate(' + x9.left + 'px,' + height  + 'px)')
                    
                    console.log(x9.left)
                    
                    }

                    function repeat9() {
                        setInterval(funcsnowball9, 10000)
                    }
                    
                
                    setTimeout(funcsnowball9, 4000)
                
            //        setTimeout(repeat9, 10000)
                    
                    //setTimeout(funcsnowball9, 10000)
    
                    //setInterval(funcsnowball9, 110000)

                    //1111111100000000000000


                    function funcsnowball10() {

                        let randomNum10 = Math.floor(Math.random() * length)
        
                        $('#snowball10').css('transition', '0s')
        
                        $('#snowball10').css('transform', 'translateY(-50px)')
                        
                        $('#snowball10').css('transform', 'translateX(' + randomNum10 + 'px)')
                    
                        let x10 = snowball10.position()
                        
                        $('#snowball10').css('transition', '7s')
                        
                        $('#snowball10').css('transition-timing-function', 'linear')
                        
                        $('#snowball10').css('transform', 'translate(' + x10.left + 'px,' + height  + 'px)')

                    }

                    function repeat10() {
                        setInterval(funcsnowball10, 10000)
                    }
                    
                
                    setTimeout(funcsnowball10, 4500)
                
           //         setTimeout(repeat10, 8000)

                    //setTimeout(funcsnowball10, 10000)
    
                    //setInterval(funcsnowball10, 20000)
                
                        
                    //111111111111-----1111111111


                    function funcsnowball11() {

                        let randomNum11 = Math.floor(Math.random() * length)
        
                        $('#snowball11').css('transition', '0s')
        
                        $('#snowball11').css('transform', 'translateY(-50px)')
                        
                        $('#snowball11').css('transform', 'translateX(' + randomNum11 + 'px)')
                    
                        let x11 = snowball11.position()
                        
                        $('#snowball11').css('transition', '7s')
                        
                        $('#snowball11').css('transition-timing-function', 'linear')
                        
                        $('#snowball11').css('transform', 'translate(' + x11.left + 'px,' + height  + 'px)')
                        
                        console.log(x11.left)
                        
                        }

                        function repeat11() {
                            setInterval(funcsnowball11, 10000)
                        }
                        
                    
                        setTimeout(funcsnowball11, 5000)
                    
            //            setTimeout(repeat11, 10000)
                        
                        //setTimeout(funcsnowball11, 11000)
        
                        //setInterval(funcsnowball11, 21000)


                        //1111111111112222222222222222222222


                        function funcsnowball12() {

                            let randomNum12 = Math.floor(Math.random() * length)
            
                            $('#snowball12').css('transition', '0s')
            
                            $('#snowball12').css('transform', 'translateY(-50px)')
                            
                            $('#snowball12').css('transform', 'translateX(' + randomNum12 + 'px)')
                        
                            let x12 = snowball12.position()
                            
                            $('#snowball12').css('transition', '7s')
                            
                            $('#snowball12').css('transition-timing-function', 'linear')
                            
                            $('#snowball12').css('transform', 'translate(' + x12.left + 'px,' + height  + 'px)')

                        }

                        function repeat12() {
                            setInterval(funcsnowball12, 10000)
                        }
                        
                    
                        setTimeout(funcsnowball12, 5500)
                    
            //            setTimeout(repeat12, 10000)

                        //setTimeout(funcsnowball12, 12000)
    
                        //setInterval(funcsnowball12, 22000)
                        
                            

                        //111111111111333333333333333333333333


                        function funcsnowball13() {

                            let randomNum13 = Math.floor(Math.random() * length)
            
                            $('#snowball13').css('transition', '0s')
            
                            $('#snowball13').css('transform', 'translateY(-50px)')
                            
                            $('#snowball13').css('transform', 'translateX(' + randomNum13 + 'px)')
                        
                            let x13 = snowball13.position()
                            
                            $('#snowball13').css('transition', '7s')
                            
                            $('#snowball13').css('transition-timing-function', 'linear')
                            
                            $('#snowball13').css('transform', 'translate(' + x13.left + 'px,' + height  + 'px)')

                        }

                        function repeat13() {
                            setInterval(funcsnowball13, 10000)
                        }
                        
                    
                        setTimeout(funcsnowball13, 6000)
                    
                //        setTimeout(repeat13, 11000)

                        //setTimeout(funcsnowball13, 13000)
    
                        //setInterval(funcsnowball13, 23000)

                        //1111111111114444444444444444444


                        function funcsnowball14() {

                            let randomNum14 = Math.floor(Math.random() * length)
            
                            $('#snowball14').css('transition', '0s')
            
                            $('#snowball14').css('transform', 'translateY(-50px)')
                            
                            $('#snowball14').css('transform', 'translateX(' + randomNum14 + 'px)')
                        
                            let x14 = snowball14.position()
                            
                            $('#snowball14').css('transition', '7s')
                            
                            $('#snowball14').css('transition-timing-function', 'linear')
                            
                            $('#snowball14').css('transform', 'translate(' + x14.left + 'px,' + height  + 'px)')
                            
                            console.log(x14.left)
                            
                            }

                            function repeat14() {
                                setInterval(funcsnowball3, 6500)
                            }
                            
                        
                            setTimeout(funcsnowball14, 6500)
                        
              //              setTimeout(repeat14, 12000)
                            
                            //setTimeout(funcsnowball14, 14000)
            
                            //setInterval(funcsnowball14, 24000)

                            
                            //111111111111555555555555555555555


                            function funcsnowball15() {

                                let randomNum15 = Math.floor(Math.random() * length)
                
                                $('#snowball15').css('transition', '0s')
                
                                $('#snowball15').css('transform', 'translateY(-50px)')
                                
                                $('#snowball15').css('transform', 'translateX(' + randomNum15 + 'px)')
                            
                                let x15 = snowball15.position()
                                
                                $('#snowball15').css('transition', '7s')
                                
                                $('#snowball15').css('transition-timing-function', 'linear')
                                
                                $('#snowball15').css('transform', 'translate(' + x15.left + 'px,' + height  + 'px)')
                                
                                console.log(x15.left)
                                
                                }

                                function repeat15() {
                                    setInterval(funcsnowball15, 10000)
                                }
                                
                            
                                setTimeout(funcsnowball15, 7000)
                            
                   //             setTimeout(repeat15, 13000)
                                
                                //setTimeout(funcsnowball15, 15000)
                
                                //setInterval(funcsnowball15, 25000)

                                //11111111111666666666666666666


                                function funcsnowball16() {

                                    let randomNum16 = Math.floor(Math.random() * length)
                                
                                    $('#snowball16').css('transition', '0s')
                                
                                    $('#snowball16').css('transform', 'translateY(-50px)')
                                    
                                    $('#snowball16').css('transform', 'translateX(' + randomNum16 + 'px)')
                                
                                    let x16 = snowball16.position()
                                    
                                    $('#snowball16').css('transition', '7s')
                                    
                                    $('#snowball16').css('transition-timing-function', 'linear')
                                    
                                    $('#snowball16').css('transform', 'translate(' + x16.left + 'px, '+ height + 'px)')
                                    
                                    console.log(height)
                                    
                                    }

                                    function repeat16() {
                                        setInterval(funcsnowball16, 10000)
                                    }
                                    
                                
                                    setTimeout(funcsnowball16, 7500)
                                
                //                    setTimeout(repeat16, 14000)
                                    
                                    //setTimeout(funcsnowball16, 16000)
                                
                                    //setInterval(funcsnowball16, 26000)

                                    //1111111111177777777777777777

                                    function funcsnowball17() {

                                        let randomNum17 = Math.floor(Math.random() * length)
                                    
                                        $('#snowball17').css('transition', '0s')
                                    
                                        $('#snowball17').css('transform', 'translateY(-50px)')
                                        
                                        $('#snowball17').css('transform', 'translateX(' + randomNum17 + 'px)')
                                    
                                        let x17 = snowball17.position()
                                        
                                        $('#snowball17').css('transition', '7s')
                                        
                                        $('#snowball17').css('transition-timing-function', 'linear')
                                        
                                        $('#snowball17').css('transform', 'translate(' + x17.left + 'px, '+ height + 'px)')
                                        
                                        console.log(height)
                                        
                                        }

                                        function repeat17() {
                                            setInterval(funcsnowball17, 10000)
                                        }
                                        
                                    
                                        setTimeout(funcsnowball17, 8000)
                                    
                  //                      setTimeout(repeat17, 15000)
                                        
                                        //setTimeout(funcsnowball17, 110000)
                                    
                                        //setInterval(funcsnowball17, 210000)


                                    //111111111188888888888888888888888

                                    function funcsnowball18() {

                                        let randomNum18 = Math.floor(Math.random() * length)
                                    
                                        $('#snowball18').css('transition', '0s')
                                    
                                        $('#snowball18').css('transform', 'translateY(-50px)')
                                        
                                        $('#snowball18').css('transform', 'translateX(' + randomNum18 + 'px)')
                                    
                                        let x18 = snowball18.position()
                                        
                                        $('#snowball18').css('transition', '7s')
                                        
                                        $('#snowball18').css('transition-timing-function', 'linear')
                                        
                                        $('#snowball18').css('transform', 'translate(' + x18.left + 'px, '+ height + 'px)')
                                        
                                        console.log(height)
                                        
                                        }

                                        function repeat18() {
                                            setInterval(funcsnowball18, 10000)
                                        }
                                        
                                    
                                        setTimeout(funcsnowball18, 8500)
                                    
                   //                     setTimeout(repeat18, 16000)
                                        
                                        //setTimeout(funcsnowball18, 18000)
                                    
                                        //setInterval(funcsnowball18, 28000)

                                    //11111111119999999999999999

                                    function funcsnowball19() {

                                        let randomNum19 = Math.floor(Math.random() * length)
                                    
                                        $('#snowball19').css('transition', '0s')
                                    
                                        $('#snowball19').css('transform', 'translateY(-50px)')
                                        
                                        $('#snowball19').css('transform', 'translateX(' + randomNum19 + 'px)')
                                    
                                        let x19 = snowball19.position()
                                        
                                        $('#snowball19').css('transition', '7s')
                                        
                                        $('#snowball19').css('transition-timing-function', 'linear')
                                        
                                        $('#snowball19').css('transform', 'translate(' + x19.left + 'px, '+ height + 'px)')
                                        
                                        console.log(height)
                                        
                                        }

                                        function repeat19() {
                                            setInterval(funcsnowball19, 10000)
                                        }
                                        
                                    
                                        setTimeout(funcsnowball19, 9000)
                                    
                    //                    setTimeout(repeat19, 110000)
                                        
                                        //setTimeout(funcsnowball19, 110000)
                                    
                                        //setInterval(funcsnowball19, 210000)

                                    //22222222222220000000000000000

                                    function funcsnowball20() {

                                        let randomNum20 = Math.floor(Math.random() * length)
                                    
                                        $('#snowball20').css('transition', '0s')
                                    
                                        $('#snowball20').css('transform', 'translateY(-50px)')
                                        
                                        $('#snowball20').css('transform', 'translateX(' + randomNum20 + 'px)')
                                    
                                        let x20 = snowball20.position()
                                        
                                        $('#snowball20').css('transition', '7s')
                                        
                                        $('#snowball20').css('transition-timing-function', 'linear')
                                        
                                        $('#snowball20').css('transform', 'translate(' + x20.left + 'px, '+ height + 'px)')
                                        
                                        console.log(height)
                                        
                                        }

                                        function repeat20() {
                                            setInterval(funcsnowball20, 10000)
                                        }
                                        
                                    
                                        setTimeout(funcsnowball20, 9500)
                                    
                     //                   setTimeout(repeat20, 18000)
                                        
                                        //setTimeout(funcsnowball20, 20000)
                                    
                                        //setInterval(funcsnowball20, 30000)
                                    }

                                    setTimeout(animation, 1)

                                    setInterval(animation, 9500)

                                    //setInterval(animation, 19500)


/*
let length = window.innerWidth

console.log(length)

let randomNum = Math.floor(Math.random() * length)

$('.snowball').css('transform', 'translateX(' + randomNum + 'px)')

let snowball = $('.snowball')

let x = snowball.position()

console.log(x.left)

$('.snowball').css('transition', '7s')

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