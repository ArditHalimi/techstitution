$(document).ready(function () {

    console.log("Dom is ready!")




    $('#border-wait-form').submit(function (event) {
        event.preventDefault();
        var date=new Date();

        var piaKufitare= $('#pika-kufitar').val();
        var hyrjeMinMinuta=$('#hyrje-min-minuta').val();
        var hyrjeMaxMinuta=$('#hyrje-max-minuta').val();
        var daljeMinMinuta=$('#dalje-min-minuta').val();
        var daljeMaxMinuta=$('#dalje-max-minuta').val();

        var hyrjeMinMetra=$('#hyrje-min-metra').val();
        var hyrjeMaxMetra=$('#hyrje-max-metra').val();
        var daljeMinMetra=$('#dalje-min-metra').val();
        var daljeMaxMetra=$('#dalje-max-metra').val();
       /* console.log("Pika Kufitare",piaKufitare,"Hyrje max minuta",hyrjeMinMinuta,"Hyrje max minuta",hyrjeMaxMinuta,"Dalje min minuta",daljeMinMinuta,"Dalje max minuta",daljeMaxMinuta,
        "Hyrje min metra ",hyrjeMinMetra,"Hyrje max metra",hyrjeMaxMetra,"Dalja min metra",daljeMinMetra,"Dalje max metra",daljeMaxMetra);*/

        var dataJson={};
        dataJson ["pikaKufitare"]=piaKufitare;
        dataJson ["hyrjeMinMinuta"]=parseInt(hyrjeMinMinuta);
        dataJson ["hyrjeMaxMinuta"]=parseInt(hyrjeMaxMinuta);
        dataJson ["daljeMinMinuta"]=parseInt(daljeMinMinuta);
        dataJson ["daljeMaxMinuta"]=parseInt(daljeMaxMinuta);
        dataJson ["hyrjeMaxMetra"]=parseInt(hyrjeMaxMetra);
        dataJson ["hyrjeMinMetra"]=parseInt(hyrjeMinMetra);
        dataJson ["daljeMinMetra"]=parseInt(daljeMinMetra);
        dataJson ["daljeMinMetra"]=parseInt(daljeMinMetra);
        dataJson ["date"]=date;
        console.log(dataJson);

    });
});