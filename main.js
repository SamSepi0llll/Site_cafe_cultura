$(document).ready(function(){
    $('#tel').mask('(00) 00000-0000')
    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            tel: {
                required: true
            }
        },
        messages: {
            nome: '<p class="error"> Por favor Insira seu nome.</p>',
            email: '<p class="error">Por favor Insira um E-mail válido.</p>',
            tel: '<p class="error">Por favor Insira seu Telefone.</p>'
        },
        submitHandler: function(){
            $('.alert-success').fadeIn(1000)
            $('.alert-danger').fadeOut()
            $('#nome').val('')
            $('#email').val('')
            $('#tel').val('')
        },
        invalidHandler: function (){
            $('.alert-success').fadeOut()
            $('.alert-danger').fadeIn(1000)
        }
    })
    function validaNome (nomeComp){
        const nomeArray = nomeComp.split(' ')
        return nomeArray.length >= 2;
    }
    $('#nome').on('keyup', function(){
        let nome = document.querySelector('#nome').value
        if(!validaNome(nome)){
            $('.name-error').fadeIn(500)
        }
        else{
            $('.name-error').fadeOut()
        }
    })
})