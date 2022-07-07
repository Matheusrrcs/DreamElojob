$("#comprar").click((e) => {
    e.preventDefault();
    let titles = document.getElementById("title").textContent.replaceAll(" ", "").trim()

    if (titles == "MD10" || titles == "MD5") {
        md10()
    }
    else if (titles == "COACH") {
        coach()
    }
    else {
        eloboostDuo()
    }


})




function eloboostDuo() {

    let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
    let ch = id("choice").textContent.toLocaleLowerCase().trim()
    let value = id("valor").textContent.replaceAll("POR", "Por").trim()


    let lga = id("ligaAtual").value.toLocaleLowerCase()
    let lgd = id("ligaDesejada").value.toLocaleLowerCase()
    let dva = id("divisaoAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()
    let dvd = id("divisaoDesejada").value.toLocaleLowerCase().replaceAll(" ", "").trim()

    lga = lga[0].toUpperCase() + lga.substr(1);
    lgd = lgd[0].toUpperCase() + lgd.substr(1);


    ch = ch[0].toUpperCase() + ch.substr(1);
    titles = titles[0].toUpperCase() + titles.substr(1);


    var text


    window.mobileCheck = function mobileCheck() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };


    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }


    if ((lga.toLowerCase() == 'mestre' || lga.toLowerCase() == 'graomestre' || lga.toLowerCase() == 'desafiante' || lga.toLowerCase() == "radiante") && (lgd.toLowerCase() == 'mestre' || lgd.toLowerCase() == 'graomestre' || lgd.toLowerCase() == 'desafiante' || lgd.toLowerCase() == "radiante")) {

        if (lga.toLocaleLowerCase() == 'graomestre') {
            lga = "Grão Mestre"
        }
        else if (lgd.toLocaleLowerCase() == 'graomestre') {
            lgd = "Grão Mestre"
        }

        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + ' %20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
    }

    else if (lgd.toLowerCase() == 'mestre' || lgd.toLowerCase() == 'graomestre' || lgd.toLowerCase() == 'desafiante' || lgd.toLowerCase() == "radiante") {

        if (lga.toLocaleLowerCase() == 'graomestre') {
            lga = "Grão Mestre"
        }
        else if (lgd.toLocaleLowerCase() == 'graomestre') {
            lgd = "Grão Mestre"
        }

        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + '%20' + dva + '%20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
    }

    else if (lga.toLowerCase() == 'mestre' || lga.toLowerCase() == 'graomestre' || lga.toLowerCase() == 'desafiante' || lga.toLowerCase() == "radiante") {

        if (lga.toLocaleLowerCase() == 'graomestre') {
            lga = "Grão Mestre"
        }
        else if (lgd.toLocaleLowerCase() == 'graomestre') {
            lgd = "Grão Mestre"
        }

        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + ' %20e%20quero%20chegar%20no%20' + lgd + '%20.' + value
    }



    else {

        if (lga.toLocaleLowerCase() == 'graomestre') {
            lga = "Grão Mestre"
        }
        else if (lgd.toLocaleLowerCase() == 'graomestre') {
            lgd = "Grão Mestre"
        }
        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20para%20' + ch + ',%20atualmente%20' + lga + '%20' + dva + '%20e%20quero%20chegar%20no%20' + lgd + '%20' + dvd + '. ' + value

    }

    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571987262223&text=`.concat(text);
  
 

    window.open(url);
      gtag_report_conversion(window.location.href)
}

function md10() {
    let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
    let ch = id("choice").textContent.toLocaleLowerCase().trim()
    let value = id("valor").textContent.replaceAll("POR", "Por").trim()


    let lga = id("ligaAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()


    lga = lga[0].toUpperCase() + lga.substr(1);



    ch = ch[0].toUpperCase() + ch.substr(1);
    titles = titles[0].toUpperCase() + titles.substr(1);


    var text


    window.mobileCheck = function mobileCheck() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };


    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }
    if (lga.toLocaleLowerCase() == 'graomestre') {
        lga = "Grão Mestre"
    }

    text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20de ' + ch + "%20 " + value + '%20. O%20meu%20elo%20era%20 ' + lga

    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571987262223&text=`.concat(text);
 

    window.open(url);
      gtag_report_conversion(window.location.href)
}

function coach() {
    let titles = document.getElementById("title").textContent.toLocaleLowerCase().trim()
    let ch = id("choice").textContent.toLocaleLowerCase().trim()
    let value = id("valor").textContent.replaceAll("POR", "Por").trim()


    let lga = id("ligaAtual").value.toLocaleLowerCase().replaceAll(" ", "").trim()


    lga = lga[0].toUpperCase() + lga.substr(1);



    ch = ch[0].toUpperCase() + ch.substr(1);
    titles = titles[0].toUpperCase() + titles.substr(1);


    var text


    window.mobileCheck = function mobileCheck() {
        let check = false;
        (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    };


    if (mobileCheck() == false) {
        type = "web"
    } else {
        type = "api"
    }
    if (lga == 1) {
        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20de ' + ch + "%20de " + lga + " partida%20" + value

    }
    else {
        text = 'Olá,%20estou%20no%20site%20e%20quero%20' + titles + '%20de ' + ch + "%20de " + lga + " partidas%20" + value

    }
    var url = `https://${type}.whatsapp.com/send?1=pt_BR&phone=5571987262223&text=`.concat(text);
  

    window.open(url);
      gtag_report_conversion(window.location.href)
}

function id(id) {
    return document.getElementById(id)
}