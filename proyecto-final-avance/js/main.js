$(document).ready(function() {
    
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });

    // Posts
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

    // Scroll arriba de la web
    $('.subir').click(function(e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500);

        return false;
    });

});