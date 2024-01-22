function registro() {
   
    let inputnombre = document.getElementById('nombreRegister').value;
    let inputemail = document.getElementById('emailRegister').value;
    let inputcontrasena = document.getElementById('contrasenaRegister').value;

    console.log(inputnombre + " " + inputemail + " " + inputcontrasena);

    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "name": inputnombre,
            "email": inputemail,
            "password": inputcontrasena
        })
    };

    fetch('http://localhost:8083/api/registro', options)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.statusText}`);
            }
            return response.json();
        })
        .then(response => {
            if (response.token) {
                
                localStorage.setItem('token', response.access_token);
            }
            console.log(response);
        })
        .catch(err => console.error(err));
}


function logueo(){
    
    let inputemail = document.getElementById('emailLogin').value;
    let inputcontrasena = document.getElementById('contrasenaLogin').value;

    console.log( inputemail + " " + inputcontrasena);
    const options = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "email": inputemail,
            "password": inputcontrasena
        })
    };
      
      fetch('http://localhost:8083/api/logueo', options)
      .then(response => {
        if (!response.ok) {
            throw new Error(`Error en la solicitud: ${response.statusText}`);
        }
        
        return response.json();
    })
    .then(response => {
        
        console.log(response);
    })
    .catch(err => console.error(err));
}