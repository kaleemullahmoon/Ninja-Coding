/* 

*       *               *         *                 * * * * * * *   * * * * * * *         *              *
*     *               *   *       *                 *               *                    * *            * *
*   *                *     *      *                 *               *                   *   *          *   *
* *                *        *     *                 * * * * * * *   * * * * * * *      *     *        *     *
* *              * * * * * * *    *                 *               *                 *       *      *       *
*   *          *              *   *                 *               *                *         *    *         * 
*     *      *                 *  *                 *               *               *           *  *           *
*       *  *                    * * * * * * * * *   * * * * * * *   * * * * * * *  *              *             *            

*/

$(document).ready(function(){
    // toggle button
    $('.btn').click(function(){
        $('.nav-links').slideToggle(1000);
        $('.btn').toggleClass('change');
    })

    // transparent background
    $(window).scroll(function(){
        let position = $(window).scrollTop();

        if(position>=100){
            $('nav, nav-container').addClass('navBackground')
        }else{
            $('nav, nav-container').removeClass('navBackground')
        }
    })
    // smooth scroll

    $('.nav-links a').click(function(link){
        link.preventDefault();

        let target = $(this).attr('href');

        $('html, body').stop().animate({
            scrollTop:$(target).offset().top
        }, 3000);
    })
    
  //owl team
  $('.team-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  })
  //owl customers
  $('.customers-center').owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 4000,
    nav: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  })
})


var a = 0;
$(window).scroll(function () {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function () {
      var $this = $(this),
        countTo = $this.attr('data-target');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

