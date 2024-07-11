function resta() {

    const hitoA = parseInt(prompt("Ingrese el primer hito historico que desea calcular diferencia de años\n\n1914 = Primera Guerra Mundial.\n1939 = Segunda Guerra Mundial.\n1760 = Revolucion Industrial.\n2022 = Mundial de Messi."));
    const hitoB = parseInt(prompt("Ingrese el segundo hito historico del cual quiere saber la diferencia de años respecto a la anterior eleccion.\n\n1914 = Primera Guerra Mundial.\n1939 = Segunda Guerra Mundial.\n1760 = Revolucion Industrial.\n2022 = Mundial de Messi."));

    alert("La diferencia entre estos momentos historicos es de " + (hitoA - hitoB) + " años.")
}

alert("Bienvenido al libro de historia, aprendera historia brevemente");

let opcion;

do {

    opcion = parseInt(prompt("Ingresa la opcion que desee.\n\n1.Grandes momentos en la historia.\n2.Calcular años de diferencia\n3.Grandes Heroes de la historia\n4.Quiz\n\nPara SALIR, ingrese 0"))

    switch (opcion) {
        case 1:
            let momentosHistoricos = parseInt(prompt("Selecciona sobre que momento historico queres saber\n\n1.Primer Guerra mundial.\n2.Segunda Guerra Mundial\n3.Revolucion Industrial\n4.Messi gana el mundial<3\n\n5.Volver al menu"));
            if (momentosHistoricos == 1) {
                alert("La primera guerra mundial fue un conflicto militar de carácter mundial, que empezó el 28 de julio de 1914 y finalizó el 11 de noviembre de 1918, cuando Alemania aceptó las condiciones del armisticio. La causa que detonó el inicio de la primera guerra fue el asesinato del archiduque Francisco Fernando, heredero de la corona austro-húngara, y de su esposa, la archiduquesa Sofía, en Sarajevo el 28 de junio de 1914")
            } else if (momentosHistoricos == 2) {
                alert("Fue el conflicto más grande y destructivo de toda la historia. Alemania invadió Polonia el 1 de septiembre de 1939 y así dio inicio a la Segunda Guerra Mundial. Como respuesta, Gran Bretaña y Francia le declararon la guerra a Alemania.");
            } else if (momentosHistoricos == 3) {
                alert("Fue el proceso de cambio de una economía agraria y artesanal a una dominada por la industria y la fabricación de maquinaria. Este proceso se inició en Gran Bretaña y desde allí se extendió a otras partes del mundo.")
            } else if (momentosHistoricos == 4) {
                alert("Es el Mundial de Messi. En su quinta y última aventura en el torneo, como el jugador más definitivo, como el motor del reencuentro de Argentina con la cima del mundo, 36 años después del triunfo en México 1986 con Diego Armando Maradona.")
            } else if (momentosHistoricos == 5) {

            } else {
                alert("Indica una opcion valida.")
            }

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
            let quiz = prompt("Si ya completaste nuestro breve libro de historia, significa que estas listo para THE FINAL QUIZ.\n\nPresiona 1 si te la aguantas, si no, presiona 2 para volver al menu.");
            if (quiz == 1){
                let pregunta1 = prompt("¿Quien es el heroe que con la pierna izquierda hizo feliz a 45 millones de personas?\n\n1.Mahoma\n2.Leo Messi\n3.Mandela\n4.El Dibu");
                if (pregunta1 == 1 ){
                    alert("Le erraste feo, no tenes corazon ni cultura");
                } else if(pregunta1 == 2){
                    alert("Muy bien, aunque el dibu tambien nos salvo con la zurda")
                } else if(pregunta1 == 3){
                    alert("Le pifiaste, volve a leer nuestro contenido")
                } else if(pregunta1 == 4){
                    alert("Jujuuuu aguante el dibu")
                } else {
                    alert("No nos estamos entendiendo, vamos con la siguiente")
                }
                let pregunta2 = prompt("¿Que deporte juega Andres Lionel Messi?\n\n1.Tenis.\n2.Cricket.\n3.Fulbo'.\n4.Futboll.");
                if (pregunta2 == 1){
                    alert("Pifiaste Pa'")
                } else if(pregunta2 == 2){
                    alert("Eso es golf para los nenes")
                } else if(pregunta2 == 3){
                    alert("Te felicito, sos digno conocedor del buen arte")
                } else if(pregunta2 == 4){
                    alert("Mira te la voy a dejar pasar, avanti")
                } else {
                    alert("Casi entendes la dinamica...Sigamos")
                }
                let pregunta3 = prompt("La ultima pregunta, atento!\n\n¿Estara bien todo esto que codie?\n\n1.Dios quiera.\n2.Dios me salve.\n3.Dios me ampare");
                if (pregunta3 == 1){
                    alert("Me diverti haciendolo al menos'")
                } else if(pregunta3 == 2){
                    alert("JS NO ES NADA QUE VER CON HTML Y CSS")
                } else if(pregunta3 == 3){
                    alert("ESTA COMPLEJO, PERO VALE LA PENA EL ESFUERZO")
                 
                } else {
                    alert("Felicitaciones, llegaste hasta aca y seguramente aprendiste algo.")
                }
            } if (quiz == 2){}

        default:
    }

} while (opcion !== 0)

alert("Lo vimo")