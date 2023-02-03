const foto = document.querySelector('.container');
const usuario = document.querySelector('.name');
const telefono = document.querySelector('.cel');
const email = document.querySelector('.email');
const nacionalidad = document.querySelector('.pais')

fetch('https://randomuser.me/api/?results=1&inc=name,dob,picture,phone,email,location&noinfo')
.then(response => response.json())
//.then(data=> console.log(data))
.then(data => {
    data.results.forEach(persona => {
        console.log(persona)
        let imagen = document.createElement('img')
        imagen.src = persona.picture.large
        foto.appendChild(imagen)
        console.log(imagen)

        let nombre = document.createElement('h1')
        nombre.innerHTML = persona.name.first + " " + persona.name.last
        usuario.appendChild(nombre)
        console.log(nombre)

        let numero = document.createElement('p')
        numero.innerHTML = "cel: " + persona.phone 
        telefono.appendChild(numero)
        console.log(numero)

        let correo = document.createElement('p')
        correo.innerHTML =  persona.email 
        email.appendChild(correo)
        console.log(correo)

        let nacion = document.createElement('p')
        nacion.innerHTML = persona.location.city +" - "+ persona.location.country 
        nacionalidad.appendChild(nacion)
        console.log(nacion)

    });

})

.catch(err => console.log(err))