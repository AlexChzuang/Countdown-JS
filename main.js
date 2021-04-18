$(document).ready(function() { // Ready: Specify a function to execute when the DOM is fully loaded.
  let timer
  let cnt = 0
  $('button').click(function() {
    if (timer) {
      clearInterval(timer)   // 取消 setInterval 的功能
      timer = null;

      $('button').text('Start')
      $('#running').slideUp(); // 展開


    } else {
      timer = setInterval(function() {
        cnt += 1
        $('#seconds').text(Math.floor(cnt/10))

        $('.dots div:last-child').prependTo($('.dots'))
      },100)

      $('button').text('Stop!!')
      $('#running').slideDown();

    }  
  })
})