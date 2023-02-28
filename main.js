function loadHTML() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("demo").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "indexexample.html");
    xhttp.send();
  }

  $(function(){
    $('#load').click(function(evt){
      $('#loadContent').load('jq.html')

    });
  });
    
    
    