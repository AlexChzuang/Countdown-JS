document.addEventListener("DOMContentLoaded", function() {
  let timer
  let cnt = 0
  document.querySelector('button').addEventListener('click', function() {
    if (timer) {
      console.log(1231231)
      clearInterval(timer)   // 取消 setInterval 的功能
      timer = null;

      document.querySelector('button').textContent = 'Start'
      // ('#running').slideUp(); // 展開
      document.querySelector('#running').classList.remove('active')

    } else {
      timer = setInterval(function() {
        cnt += 1
        document.getElementById('seconds').textContent = Math.floor(cnt/10)

        const lastChild = document.querySelector('.dots div:last-child')
        lastChild.parentNode.prepend(lastChild)
        // document.querySelector('dots').appendChild( document.createElement('div:last-child'))
      },100)

      document.querySelector('button').textContent = 'Stop'
      // document.querySelector('#running').slideDown();
      document.querySelector('#running').classList.add('active')
    }  
  })
})