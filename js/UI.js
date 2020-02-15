$(document).ready(function(){
       
       let card1Image ='https://www.cleansolar.com/wp-content/uploads/2019/09/slide3.jpg'
       let card2Image ='http://greenmileenergy.net/wp-content/uploads/2019/05/POWER-YOUR-HOME-WITH-SOLAR-POWER-PRODUCTS-nxenhm4vd852lyvsmro1l4wqh04wyu79vqfuhpvatw.jpg'
       let card3Image ='https://www.ledgerinsights.com/wp-content/uploads/2018/09/solar-energy-810x476.jpg'


       $('#button').fadeIn(5000);
       $('#navvv').effect('bounce', 5000)
       $('#font1').effect('slide', 4000)

       $('#card1').on('mouseenter', function(){
            $('#card1').css({
                   'background': 'goldenrod',
                   'font-weight': 'bolder'
              });
       })

       $('#card2').mouseenter(function(){
              $('#card2').css({
                     'background': 'lightskyblue',
                     'font-weight': 'bolder'
                });
         })

         $('#card3').mouseenter(function(){
              $('#card3').css({
                     'background': 'goldenrod',
                     'font-weight': 'bolder'
                });
         })


         $('#card1').on('mouseleave', function(){
              $('#card1').css({
                     'background': `url(${card1Image})`,
                     'background-repeat': 'no-repeat',
                     'background-size': 'cover',
                     'border-radius': '7px',
                     'font-weight': 'normal'
              });
         })
  
         $('#card2').mouseleave(function(){
              $('#card2').css({
                     'background': `url(${card2Image})`,
                     'background-repeat': 'no-repeat',
                     'background-size': 'cover',
                     'border-radius': '7px',
                     'font-weight': 'normal'
              });
           })
  
           $('#card3').mouseleave(function(){
              $('#card3').css({
                     'background': `url(${card3Image})`,
                     'background-repeat': 'no-repeat',
                     'background-size': 'cover',
                     'border-radius': '7px',
                     'font-weight': 'normal'
              });
           })


})