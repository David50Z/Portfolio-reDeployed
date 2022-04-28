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

let length = window.innerWidth

console.log(length)

let randomNum = Math.floor(Math.random() * length)

$('.snowball').css('transform', 'translateX(' + randomNum + 'px)')

let snowball = $('.snowball')

let x = snowball.position()

console.log(x.left)

$('.snowball').css('transition', '10 s')

$('.snowball').css('transform', 'translate(' + x.left + 'px, 2000px)') 
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