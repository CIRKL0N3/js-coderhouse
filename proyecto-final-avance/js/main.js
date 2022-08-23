$(document).ready(function() {
    
    // Slider
    if(window.location.href.indexOf('index') > -1) {

        $('.galeria').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true
        });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1) {
        let posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quas blanditiis doloribus repellat magni, saepe tempore suscipit a mollitia nisi necessitatibus est, nemo ex libero in dignissimos numquam non ipsum. Vel, eum. Praesentium natus nulla labore eveniet atque asperiores optio mollitia repellat voluptas omnis, delectus ipsam pariatur quas autem iure! Repudiandae velit laudantium quod id libero est dolores commodi minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error magnam tempore! Placeat dignissimos perspiciatis, repudiandae quibusdam maxime perferendis nihil delectus doloribus sapiente'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quas blanditiis doloribus repellat magni, saepe tempore suscipit a mollitia nisi necessitatibus est, nemo ex libero in dignissimos numquam non ipsum. Vel, eum. Praesentium natus nulla labore eveniet atque asperiores optio mollitia repellat voluptas omnis, delectus ipsam pariatur quas autem iure! Repudiandae velit laudantium quod id libero est dolores commodi minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error magnam tempore! Placeat dignissimos perspiciatis, repudiandae quibusdam maxime perferendis nihil delectus doloribus sapiente'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quas blanditiis doloribus repellat magni, saepe tempore suscipit a mollitia nisi necessitatibus est, nemo ex libero in dignissimos numquam non ipsum. Vel, eum. Praesentium natus nulla labore eveniet atque asperiores optio mollitia repellat voluptas omnis, delectus ipsam pariatur quas autem iure! Repudiandae velit laudantium quod id libero est dolores commodi minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error magnam tempore! Placeat dignissimos perspiciatis, repudiandae quibusdam maxime perferendis nihil delectus doloribus sapiente'
            },
            {
                title: 'Prueba de titulo 4',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quas blanditiis doloribus repellat magni, saepe tempore suscipit a mollitia nisi necessitatibus est, nemo ex libero in dignissimos numquam non ipsum. Vel, eum. Praesentium natus nulla labore eveniet atque asperiores optio mollitia repellat voluptas omnis, delectus ipsam pariatur quas autem iure! Repudiandae velit laudantium quod id libero est dolores commodi minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error magnam tempore! Placeat dignissimos perspiciatis, repudiandae quibusdam maxime perferendis nihil delectus doloribus sapiente'
            },
            {
                title: 'Prueba de titulo 5',
                date: 'Publicado el dia ' + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus quas blanditiis doloribus repellat magni, saepe tempore suscipit a mollitia nisi necessitatibus est, nemo ex libero in dignissimos numquam non ipsum. Vel, eum. Praesentium natus nulla labore eveniet atque asperiores optio mollitia repellat voluptas omnis, delectus ipsam pariatur quas autem iure! Repudiandae velit laudantium quod id libero est dolores commodi minus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio error magnam tempore! Placeat dignissimos perspiciatis, repudiandae quibusdam maxime perferendis nihil delectus doloribus sapiente'
            },
        ];

        posts.forEach((item, index) => {
            let post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer más</a>
                </article>
            `;

            $("#posts").append(post);
        });
    }

    // Selector de tema
    let theme = $("#theme");

    $("#to-green").click(function() {
        theme.attr("href", "proyecto-final-avance/css/green.css");
    });

    $("#to-red").click(function() {
        theme.attr("href", "proyecto-final-avance/css/red.css");
    });

    $("#to-blue").click(function() {
        theme.attr("href", "proyecto-final-avance/css/blue.css");
    });

    // Página about
    let about_theme = $("#about_theme");

    $("#to-green").click(function() {
        about_theme.attr("href", "css/green.css");
    });

    $("#to-red").click(function() {
        about_theme.attr("href", "css/red.css");
    });

    $("#to-blue").click(function() {
        about_theme.attr("href", "css/blue.css");
    });

    // Scroll arriba de la web
    $('.subir').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

    // Login falso

    $("#login form").submit(function() {
        let form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    let form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != "undefined") {
        let about_parrafo = $("#about p");
        
        about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a>");

        $("#login").hide();

        $("#logout").click(function() {
            localStorage.clear();
            location.reload();
        });
    }

    // Acordeon

    if(window.location.href.indexOf('about') > -1) {
        $("#acordeon").accordion();
    }

    // Reloj
    if(window.location.href.indexOf('reloj') > -1) {
        
        setInterval(function() {
            let reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }

    // Validación 
    if(window.location.href.indexOf('contact') > -1) {

        $("form input[name='date']").datepicker( {
            dateFormat: 'dd-mm-yy'
        });

        $.validate( {
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        });
    }

    // Fetch (Página about)
    let div_usuarios = document.querySelector("#usuarios");
    let div_profesor = document.querySelector("#profesor");
    let div_janet = document.querySelector("#janet");

        getUsuarios()
            .then(data => data.json())
            .then(users => {
                listadoUsuarios(users.data);

                return getInfo();
            })
            .then(data => {
                div_profesor.innerHTML = data;

                return getJanet();
            })
            .then(data => data.json())
            .then(user => {
                mostrarJanet(user.data);
            });
            

    function getUsuarios() {
        return fetch('https://reqres.in/api/users');
    }

    function getJanet() {
        return fetch('https://reqres.in/api/users/2');
    }

    function getInfo() {
        let profesor = {
            nombre: 'Víctor',
            apellidos: 'Robles',
            url: 'https://victorroblesweb.es'
        };

        return new Promise((resolve, reject) => {
            let profesor_string = "";

            setTimeout(function() {
                profesor_string = JSON.stringify(profesor);

                if(typeof profesor_string != 'string' || profesor_string == '') return reject('error');

                return resolve(profesor_string);

            }, 3000);

        });
    }

    function listadoUsuarios(usuarios) {
        usuarios.map((user, i) => {
            let nombre = document.createElement('h3');

            nombre.innerHTML = i + '. ' + user.first_name + " " + user.last_name;

            div_usuarios.appendChild(nombre);

            document.querySelector(".loading").style.display = 'none';
        });
    }

    function mostrarJanet(user) {
        console.log();
        let nombre = document.createElement('h4');
        let avatar = document.createElement('img');

        nombre.innerHTML = user.first_name + " " + user.last_name;
        avatar.src = user.avatar;
        avatar.width = '100';

        div_janet.appendChild(nombre);
        div_janet.appendChild(avatar);

        document.querySelector("#janet .loading").style.display = 'none';
        
    }

});