$(document).ready(function () {
  $(`#carousel-imagens`).slick({
    autoplay: true,
  });

  $(`.menu-hamburguer`).click(function () {
    $(`nav`).slideToggle();
  });

  $(`#telefone`).mask(`(00) 00000-0000`, {
    placeholder: "(__) _____-____",
  });

  $(`form`).validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      veiculoInteresse: {
        required: false,
      },
      mensagem: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, preencha seu nome",
      telefone: "Por favor, preencha seu telefone",
      email: "Por favor, preencha seu email",
      veiculointeresse: "Por favor, preencha seu veiculo de interesse",
      mensagem: "Por favor, preencha sua mensagem",
    },
    submitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });

  $(`.lista-veiculos button`).click(function () {
    const destino = $(`#contato`);
    const nomeVeiculo = $(this).parent().find(`h3`).text();

    $(`#veiculo-interesse`).val(nomeVeiculo);

    $(`html`).animate(
      {
        scrollTop: destino.offset().top,
      },
      1000
    );
  });
});
