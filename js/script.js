// Attendre chargement du DOM

    $(document).ready(function(){

    // Burger Menu pour responsive
        $('nav + a').click(function(evt){
            evt.preventDefault();

            $('nav').slideToggle();
            
            
        })


    // Fonction pour bouton Facebook à remplir avec les infos de l'app
        window.fbAsyncInit = function() {
            FB.init({
                appId            : 'your-app-id',
                autoLogAppEvents : true,
                xfbml            : true,
                version          : 'v2.10'
            });
            FB.AppEvents.logPageView();
        };
        
        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/fr_FR/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));


    // Créer une fonction pour ouvrir la modal
        function openModal(){

        // Ouvrir la modal au click sur les boutons
            $('src="img/btn-comments.png"').click(function(){
            
            // Afficher le titre du projet
                var modalTitle = $(this).parent().prev().prev().prev().prev().child().text()
                $('#modal span').text(modalTitle)
            
            // Afficher l'image du projet
                var modalImage = $(this).parent().prev().prev().prev().prev().prev().prev().attr('src')
                $('#modal img').attr('src', modalImage).attr('alt', modalTitle)

                $('#modal').fadeIn();
            });
        }



    }) //Fin du chargement du DOM