document.addEventListener('DOMContentLoaded', function() {
          // Manipolazione del DOM
          var pageTitle = document.title;
          console.log('La pagina corrente è: ' + pageTitle);
    
          // Funzionalità JavaScript aggiuntiva
          var contactButton = document.getElementById('contactButton');
          if (contactButton) {
            contactButton.addEventListener('click', function() {
              alert('Grazie per averci contattato! Risponderemo al più presto.');
            });
          }
        });