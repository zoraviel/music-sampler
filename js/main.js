// assign variables
let sound = document.querySelectorAll('.sound');
let cover = document.querySelectorAll('.cover');
let name = document.querySelectorAll('.name');
let players = document.querySelectorAll('audio');

// function to hide all divs
function hideAll() {
  sound.forEach(function(el) {
    el.style.display = 'none';
  });
  name.forEach(function(el) {
    el.style.display = 'none';
  });
}


hideAll();


cover.forEach(function(el) {
  el.onclick = (e) => {
    hideAll();
    players.forEach(function(el) {
            el.pause();
            el.currentTime = 0;
        });

    switch (e.target.getAttribute('id')) {
      case 'opdd':
        document.querySelector('#ddsound')
        	.style.display = 'block';
          document.querySelector('#opddname')
            .style.display = 'block';
        break;
      case 'king':
        document.querySelector('#fazsound')
        	.style.display = 'block';
          document.querySelector('#kname')
          	.style.display = 'block';
        break;
      case 'mad':
        document.querySelector('#accsound')
        .style.display = 'block';
        document.querySelector('#accname')
          .style.display = 'block';
        break;
      case 'food':
        document.querySelector('#guinsound')
        .style.display = 'block';
        document.querySelector('#mmname')
          .style.display = 'block';
        break;
    }

  }

});
