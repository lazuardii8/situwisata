        window.onscroll = function() {myFunction()};

        var header = document.getElementById("myHeader");
        var sticky = header.offsetTop;

        function myFunction() {
          if (window.pageYOffset > sticky) {
            header.classList.add("fixed-nav");
        } else {
            header.classList.remove("fixed-nav");
        }
    }

    function openNav() {
      document.getElementById("mySidenav").style.width = "100%";
  }

  function closeNav() {
      document.getElementById("mySidenav").style.width = "0";
  }