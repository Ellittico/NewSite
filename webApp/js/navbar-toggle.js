document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    }); 
  });

  //to fix
  document.addEventListener('click',()=>{
    //document.getElementById("sideMenu").style.display="none";
  })

  function openSideMenu(){
    document.getElementById("sideMenu").style.display="block";
  }

