function resta() {

    const hitoA = parseInt(prompt("Ingrese el primer hito historico que desea calcular diferencia de años\n\n1914 = Primera Guerra Mundial.\n1939 = Segunda Guerra Mundial.\n1760 = Revolucion Industrial.\n2022 = Mundial de Messi."));
    const hitoB = parseInt(prompt("Ingrese el segundo hito historico del cual quiere saber la diferencia de años respecto a la anterior eleccion.\n\n1914 = Primera Guerra Mundial.\n1939 = Segunda Guerra Mundial.\n1760 = Revolucion Industrial.\n2022 = Mundial de Messi."));

    alert("La diferencia entre estos momentos historicos es de " + (hitoA - hitoB) + " años.")
}

// class historicos{
//     constructor(id,nombre,inicio,fin,geografia,resumen){
//         this.id = id;
//         this.nombre = nombre;
//         this.inicio = inicio;
//         this.fin = fin;
//         this.geografia = geografia;
//         this.resumen = resumen;

//     }
// }

const historicos = [
    {
        id: 1,
        nombre: "La Primera Guerra",
        inicio: 1914,
        fin: 1918,
        geografia: "internacional",
        resumen: " También llamada anteriormente La Gran Guerra (antes de la Segunda Guerra Mundial). Fue un conflicto militar de carácter mundial, aunque centrado en Europa, que empezó el 28 de julio de 1914 y finalizó el 11 de noviembre de 1918, cuando Alemania aceptó las condiciones del armisticio."
    },
    {
        id: 2,
        nombre: " La Segunda Guerra",
        inicio: 1939,
        fin: 1945,
        geografia: "internacional",
        resumen: " Fue la mayor contienda bélica en la historia de la humanidad, con más de cien millones de militares movilizados y un estado de guerra total en que los grandes contendientes destinaron toda su capacidad económica, militar y científica al servicio del esfuerzo bélico, borrando la distinción entre recursos civiles y militares."
    },
    {
        id: 3,
        nombre: " La Revolucion Industrial",
        inicio: 1750,
        fin: 1840,
        geografia: "internacional",
        resumen: " Es el proceso de transformación económica, social y tecnológica que se inició en el Reino de Gran Bretaña, que se extendió unas décadas después a gran parte de Europa occidental y América Anglosajona."
    },
    {
        id: 4,
        nombre: " El Mundial 2022",
        inicio: 2022,
        fin: 2022,
        geografia: "internacional",
        resumen: " Momento historico en el que Lionel Andres Messi hizo feliz a una nacion",
    },
]

console.log(historicos);
const hoy = new Date("July 28, 2024")
alert("Bienvenido al libro de historia, aprendera historia brevemente.\n\nSu numero de usuario es  " + ( Math.random() * 100 + 10) + " al dia de la fecha " + (hoy.toDateString() ));

let opcion;

do {

    opcion = parseInt(prompt("Ingresa la opcion que desee.\n\n1.Recorre los grandes momentos en la historia.\n2.Calcular años de diferencia\n3.Grandes Heroes de la historia\n4.Sugerir eventos\n5.Ver con que eventos contamos.\n6.Ver sobre que heroes tenemos info.\n\nPara SALIR, ingrese 0"))

    switch (opcion) {
        case 1:
            for (let i = 0; i < historicos.length; i++) {
                alert(historicos[i].nombre + " inicio en el año " + historicos[i].inicio + " y finalizo en" + historicos[i].fin + "." + historicos[i].resumen)
            }
            //   let nuevoMomento = prompt("Queres agregar un nuevo momento historico al libro?\n\n1.Si\n2.No")
            //  if(nuevoMomento == 1){
            //       const newMoment1 = new historicos (historicos.push, prompt("Ingresa el nombre del evento"), prompt ("ingresa el año de inicio"), prompt("Ingresa el año de finalizacion"), prompt("ingresa si fue internacional o no"), prompt("Deja un breve resumen"))
            //   }
            break;

        case 2:
            resta();
            break;


            break;

        case 3:
            let heroes = prompt("¿Sobre cual de estos heroes queres saber mas?\n\n1.Jose de San Martin\n2.Mahoma\n3.Nelson Mandela\n4.Emiliano El Dibu Martinez. ");
            if (heroes == 1) {
                alert("José Francisco de San Martín y Matorras​ ​ fue un militar y político argentino, y el libertador de Argentina, Chile y Perú. Es una de las dos figuras más trascendentes de las guerras de independencia hispanoamericanas junto a Simón Bolívar.")
            } else if (heroes == 2) {
                alert("Considerado el fundador del Islam, Mahoma nació el 26 de abril de 570 y murió el 8 de junio de 632 en el actual territorio de Arabia Saudita. Fue un profeta que llevó a cabo su actividad entre los siglos VI y VII de la era actual, lo que hizo que pasara a la posteridad como una figura fundamental para esta religión.")
            } else if (heroes == 3) {
                alert("Nelson Rolihlahla Mandela fue un abogado, activista contra el apartheid, político y filántropo sudafricano que presidió el gobierno de su país de 1994 a 1999. Fue el primer mandatario de raza negra que encabezó el poder ejecutivo, y el primero en resultar elegido por sufragio universal en su país.")
            } else if (heroes == 4) {
                alert("Damián Emiliano Martínez Romero​, más conocido como «Dibu» Martínez o simplemente «Dibu», es un futbolista argentino. Le tapo tremenda bocha a Kolo Muani en el mundial y nos salvo las papas. Tambien nos salvo con Ecuador, maaaaamita que manera de sufri")
            } else {
                alert("Ingresa un numero entre esos que te di pa.")
            }

            break;

        case 4:
            let nuevo = historicos.push(prompt("Sugierenos un evento para luego ingresar mas datos sobre el"))
            alert("Gracias, el evento sugerido se agrego a nuestra base de datos, pronto recibira informacion")

            break;

        case 5:

            historicos.forEach((historicos) => alert("Tenemos informacion sobre " + historicos.nombre))
            break;

        case 6:
            const eminencias = ["El dibu", "San Martin", "Mahoma", "Nelson Mandela"];
            alert("Aqui en el Libro de historia tenemos informacion sobre: " + eminencias.join(", ") + "\n\n Lo que da una totalidad de " + eminencias.length + " Heroes" + "\n\nElige la opcion 3 en el menu si quieres saber mas sobre ellos!" )
            
            const datos = eminencias.includes(prompt("Consulta al base de datos para ver si tenemos info sobre tu heroe"))
            {
                if(datos === false){
                    alert("Aun no tenemos informacion sobre ese Heroe")
                }
            }
            break;

        default:
    }

} while (opcion !== 0)

alert("Lo vimo")