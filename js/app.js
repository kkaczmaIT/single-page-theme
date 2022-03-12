function navbarHide(el,nav){
    let link = document.querySelectorAll(el);
    let navbar = document.querySelector('.navbar-collapse');
    link.forEach(function(linkItem){
      linkItem.addEventListener('click',function(){
        navbar.classList.remove('show');
      });
    })
  }
  navbarHide('a.nav-link');