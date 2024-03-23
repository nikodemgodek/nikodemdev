document.getElementById('section-aboutme').addEventListener('scroll', function() {
    var element = document.getElementById('section-aboutme');
    var position = element.getBoundingClientRect();
  
    // Sprawdź, czy element jest widoczny
    if(position.top < window.innerHeight && position.bottom >= 0) {
      element.classList.remove('test');
    } else {
      element.classList.add('test');
    }
  });