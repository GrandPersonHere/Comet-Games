if (localStorage.getItem('aboutblankEnabled') === null) {
    localStorage.setItem('aboutblankEnabled', 'false');
  }
  
  function enableAboutBlank() {
    localStorage.setItem('aboutblankEnabled', 'true');
    location.reload();
  }
  
  function disableAboutBlank() {
    localStorage.setItem('aboutblankEnabled', 'false');
    location.reload();
  }