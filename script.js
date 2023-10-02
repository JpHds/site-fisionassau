function sendForm() {
    var form = document.getElementById("myForm");

    if (form.checkValidity()) {
      alert('Mensagem enviada!');
      return true;
    } else {
      return false; 
    }
  }
