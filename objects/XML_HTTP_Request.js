const URL = 'https://data.hartford.gov/resource/daux-ukcc.json';
let xmlHTTP;

window.onload = function () {
    xmlHTTP = new XMLHttpRequest();
    xmlHTTP.onreadystatechange = process;
    xmlHTTP.open('GET', URL, true);
    xmlHTTP.send();
};

function process() {
    if(xmlHTTP.readyState === 4 && xmlHTTP.status === 200){

        let restaurantData = JSON.parse(xmlHTTP.responseText);
        let output = '';

        for(let i = 0; i < restaurantData.length; i++){
            output += restaurantData[i].blms_dba + '<br/>';
            output += restaurantData[i].blms_loc_street + '<br/>';
            output += restaurantData[i].bldt_lic_text2 + '<p/>';
        }

        document.getElementById('result').innerHTML = output;
   }
}






















