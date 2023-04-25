const saludo = () => {
    let nombre;
    let apellido;

    do {
        nombre = prompt("Por favor escriba su nombre");
        apellido = prompt("Por favor escriba su apellido");


        if (!nombre && !apellido) {
            alert(`Por favor ingrese nombre y apellido`);
        } else if (!nombre) {
            alert("Por favor ingrese un nombre");
        } else if (!apellido) {
            alert("Por favor ingrese un apellido");
        } else {
            alert(`Bienvenido a la tienda de Dementesgamers, espero que tengas un buen día ${nombre} ${apellido}`);
            break;
        }
    } while (true);
};

const requisitos = () => {
    let edad;

    for (; ;) {
        edad = parseInt(prompt("Por favor, escriba su edad para corroborar que sos mayor de 18 años"));

        if (edad < 18) {
            alert(`Lo siento, pero con ${edad} eres muy joven para realizar una compra, te sugiero que antes de comprar pidas la autorizacion a tus padres`);
            break;
        } else if (edad >= 18) {
            alert(`Genial, te sugiero que revises la categoria de promociones :)`);
            break;
        }
    }
};

const plataforma = () => {
    let equipo;

    for (; ;) {
        equipo = prompt("Escribe tu plataforma favorita").toLowerCase();

        switch (equipo) {
            case "playstation":
                alert(`Te contamos que tenemos en oferta el juego "God Of War Ragnarok" para ${equipo}`);
                break;

            case "xbox":
                alert(`Te contamos que tenemos en oferta el juego "Halo Infiniti" para ${equipo}`);
                break;

            case "nintendo":
                alert(`Te contamos que tenemos en oferta el juego "Zelda Breath Of The Wild" para ${equipo}`);
                break;

            case "pc":
                alert(`Te contamos que tenemos en oferta Monitores Asus para ${equipo}`);
                break;

            case "":
                continue;

            default:
                alert("Por favor, escriba su plataforma favorita");
                continue;
        }
        break;
    }
};

const compra = () => {
    let objetivo;

    while (true) {
        objetivo = prompt("Dementesgamers es una tienda dedicada exclusivamente al mundo de los videojuegos, ¿A qué se le ofrece su visita? (Comprar / Vender) de lo contrario escriba ESC");

        if (objetivo === "ESC") {
            break;
        } else if (objetivo.toLowerCase() === "comprar") {
            alert("Me alegra, en nuestra tienda conseguirás los mejores títulos al mejor precio");
            requisitos();
            break;
        } else if (objetivo.toLowerCase() === "vender") {
            let correo = prompt("Lo sentimos, en este momento no estamos interesados en comprar, pero por favor deje su correo y en algún momento nos pondremos en contacto");
            alert(`Le deseo un buen día y gracias por su interés`);

            let respuesta = prompt("¿Desea ver la página web de todas formas? (si o no)");

            while (respuesta.toLowerCase() !== "si" && respuesta.toLowerCase() !== "no") {
                respuesta = prompt(`Presione "si" o "no", si es que ya se encuentra acompañado de un mayor`);
            }

            if (respuesta.toLowerCase() === "si") {
                plataforma();
            }
            break;
        } else {
            alert("Opción inválida, por favor seleccione Comprar o Vender");
        }
    }
};

saludo();
compra();
plataforma();