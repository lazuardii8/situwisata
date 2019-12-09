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

        function readURL(input) {
          if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
              $('.image--preview').attr('src', e.target.result);
            }

            $('.image--type').html(input.files[0].type);
            $('.image--name').html(input.files[0].name);
            $('.image--size').html(input.files[0].size);

            if (input.files[0].size > 1048576) {
              $('.foto--error').remove();
              $('.image--detail-all').remove();
              $('.file--upload input').val('');
              $('.file--upload').append('<p  class="foto--error" style="color:red">Ukuran tidak boleh lebih dari 1 mb</p>');
              console.log('lebih dari 1mb');
            } else {
              if (input.files[0].type == 'image/png' || input.files[0].type == 'image/jpg' || input.files[0].type == 'image/jpeg') {
                console.log('bener sihhh');
                $('.foto--error').remove();
              } else {
                console.log('salah');
                $('.foto--error').remove();
                $('.image--detail-all').remove();
                $('.file--upload input').val('');
                $('.file--upload').append('<p class="foto--error" style="color:red">Hanya untuk upload foto dengan format jpg, jpeg dan png</p>');
              }
            }

            reader.readAsDataURL(input.files[0]);


          }

        }
        $.fn.uploadGambar = function () {
          this.append(`
            <div class="grid-row image--detail-all">
            <div class="grid-item-6">
            <img class="image--preview" src="Resources/img/beach-calm-clouds-457882.jpg" alt="">
            </div>
            <div class="grid-item-6">
            <ul class="ul__list">
            <li>Nama foto : <span class="image--name"></span></li>
            <li>Size : <span class="image--size"></span></li>
            <li>type : <span class="image--type"></span></li>
            </ul>
            </div>
            </div>
            `);
        }