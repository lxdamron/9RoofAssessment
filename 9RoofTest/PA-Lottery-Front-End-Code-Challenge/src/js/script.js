function onTabClick(event) {
  let activeTabs = document.querySelectorAll('.active');

  // Deactivate Existing Panel and Tab 
  activeTabs.forEach(function(tab) {
    tab.className = tab.className.replace('active', '');
  });

  // Activate New Tab and Panel
  event.target.parentElement.className += ' active';
  document.getElementById(event.target.href.split('#')[1]).className += ' active';
};

const element = document.getElementById('nav-tab');

element.addEventListener('click', onTabClick, false);