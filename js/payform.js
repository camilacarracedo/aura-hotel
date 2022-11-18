const validation = new JustValidate('#form', {
    errorFieldCssClass: 'is-invalid',
});

validation 
    .addField('#name', [
        {
            rule: 'required',
            errorMessage: 'Campo requerido',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 15,
        },
    ])
    .addField('#last-name', [
        {
            rule: 'required',
            errorMessage: 'Campo requerido',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 20,
        },
    ])
    .addField('#email', [
    {
        rule: 'required',
        errorMessage: 'Campo requerido',
    },
    {
        rule: 'customRegexp',
        value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    ])
    .addField('#phone', [
    {
        rule: 'required',
        errorMessage: 'Campo requerido',
    },
    {
        rule: 'number',
    },
    {
        rule: 'minLength',
        value: 7,
    },
    {
        rule: 'maxLength',
        value: 15,
    },
    ])
    .addField('#username', [
        {
            rule: 'required',
            errorMessage: 'Campo requerido',
        },
    ])
    .addField('#cardNumber', [
        {
            rule: 'required',
            errorMessage: 'Campo requerido',
        },
        {
            rule: 'number',
        },
        {
            rule: 'minLength',
            value: 16,
        },
        {
            rule: 'maxLength',
            value: 16,
        },
    ])
    .addField('#cvv', [
        {
            rule: 'required',
            errorMessage: 'Campo requerido',
        },
        {
            rule: 'minLength',
            value: 3,
        },
        {
            rule: 'maxLength',
            value: 4,
        },
    ]),

validation.onSuccess((event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = new URLSearchParams(formData);

    fetch('https://httpbin.org/post', {
    method: 'POST',
    body: payload,
    })
    .then(res => res.json())
    .then(data => console.log(data))

    Swal.fire({
        text: 'Presione continuar para confirmar el pago',
        showCancelButton: true,
        confirmButtonText: 'Continuar'
        }).then((result) => {
            if(result.isConfirmed) {
                console.log("Se confirmo el pago");
                Swal.fire({
                    title: 'Se completo el pago!',
                    text: 'Gracias por elegir Aura Hotel & Spa! , le llegara un mail con los datos de la reserva',
                    icon: 'success',
                    confirmButtonText: 'Ok',
                    })
                }
            });
            form.reset();
    });