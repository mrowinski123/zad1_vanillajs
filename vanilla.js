/**
 * Created by mrowinski on 07.12.2016.
 */
//source http://www.tutorialspoint.com/json/json_ajax_example.htm
//pobranie json, vanillaJS
function loadJSON(){
    var data = 'http://jsonplaceholder.typicode.com/posts';
    var http_request = new XMLHttpRequest();
//for opera, firefox, chrome and safari
    try{
        http_request = new XMLHttpRequest();
    }
    catch(e){
     //for IE
        try{
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch(e2){
            try{
                http_request = new ActiveXObject('Microsoft.XMLHTTP');
            }
            catch(e3){
                //error
                alert("ERROR, browser broke!")
                return false;
            }
        }
    }

    http_request.onreadystatechange = function(){
        if(http_request.readyState == 4){
            var jsonObj = JSON.parse(http_request.responseText);//tworzenie obiektow json
            create_objData(jsonObj);//stworzenie struktury ze wszystkimi obiektami
        }
    }

    http_request.open("GET", data, true);//wyslanie zapytania GET do serwera
    http_request.send();//przeslanie danych z serwera

    function create_objData(jsonData) {
        document.write("<img src=fb_icon.png/>");
        document.write("<h1>News</h1>");
        for (var i = 0; i < jsonData.length; i++) {
            document.write("<li> ID: "+jsonData[i].id+"</li>");
            document.write("<li> Title: " + jsonData[i].title + "</li>");
            document.write("<li> Body: " + jsonData[i].body + "</li><br></br>");
        }
    }
}