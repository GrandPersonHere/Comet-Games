if (localStorage.getItem("aboutblankEnabled") === "true") {
    let iFramed
    try {
      iFramed = window !== top
    } catch (e) {
      iFramed = true
    }
    if (!iFramed) {
      const popup = open("about:blank", "_blank")
      const document = popup.document
      const body = document.body
      const bodystyle = body.style
      const iframe = document.createElement('iframe')
      const iframestyle = iframe.style
      iframe.src = location.href
      iframestyle.top = iframestyle.bottom = iframestyle.left = iframestyle.right = 0
      iframestyle.border = iframestyle.outline = 'none'
      iframestyle.width = iframestyle.height = '100%'
      bodystyle.margin = bodystyle.padding = '0'
      document.body.appendChild(iframe)
      location.replace('https://classroom.google.com/');
    }
  }
  
  const aboutblankEnabled = localStorage.getItem('aboutblankEnabled');
  
  if (aboutblankEnabled === 'true' || aboutblankEnabled === '' || aboutblankEnabled === null) {
    document.getElementById('enableAboutBlank').disabled = true;
    document.getElementById('disableAboutBlank').disabled = false;
  } else {
    document.getElementById('enableAboutBlank').disabled = false;
    document.getElementById('disableAboutBlank').disabled = true;
  }

function home() {
    window.location.href = '/index.html';
}

function games() {
  window.location.href = '/games/index.html';
}

function settings() {
  window.location.href = '/settings/settings.html';
}

function fav() {
  window.location.href = '#';
}

function prox() {
  window.location.href = '/search.html';
}