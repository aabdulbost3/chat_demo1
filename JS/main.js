const addMessageToConversation = function() {


  let messageText = document.querySelector('.conversation__write').value;


  if ( messageText.trim().length == 0 ) {


    return false;


  } else {



    document.querySelector('.conversation__body').insertAdjacentHTML('beforeend', `<div class="conversation__bubble conversation__bubble--right"><p class="conversation__text">${messageText}</p></div>`);


    document.querySelector('.conversation__write').value = '';


    document.querySelector('.conversation__write').focus();

  }

};



document.querySelector('.btn--list').addEventListener('click', function() {


  document.querySelector('.container').classList.add('list--active');



});



document.querySelectorAll('.conversation__info, .list__header').forEach(function(e) {


  e.addEventListener('click', function() {


    document.querySelector('.mask').classList.toggle('minimize');


  });


});



document.querySelector('#chat1').addEventListener('click', function() {


  document.querySelector('.container').classList.remove('list--active');



});



document.querySelector('.btn--send').addEventListener('click', addMessageToConversation);


document.querySelector('.conversation__write').addEventListener('keydown', function(e) {


  if (e.key == 'Enter') {


    addMessageToConversation();


  } else {


    return false;

  }

});