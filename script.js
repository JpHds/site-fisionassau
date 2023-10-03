function sendForm() {
    var form = document.getElementById("myForm");

    if (form.checkValidity()) {
      alert('Mensagem enviada!');
      return true;
    } else {
      return false; 
    }
  }

  const list = document.querySelectorAll('.list');
  function activeLink() {
    list.forEach((item) => 
    item.classList.remove('active'));
    this.classList.add('active');
  }

    list.forEach((item) => 
    item.addEventListener('click', activeLink));

    const button = document.querySelector(".btn-for-top");

  window.addEventListener("scroll", function (event) {
    if (window.scrollY <= 165) {
      button.classList.remove("visible");
    } else {
      button.classList.add("visible");
    }
  });c