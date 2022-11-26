function press(){
   var word = document.getElementById("translate").value;
   translate(word)
}



function translate(x){
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", x);
    encodedParams.append("target", "es");
    encodedParams.append("source", "en");
    
    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'Accept-Encoding': 'application/gzip',
            'X-RapidAPI-Key': 'cf86e00efcmshf4ffafad759135bp163e1ejsned33e71c68fd',
            'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
        },
        body: encodedParams
    };
    
    fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        .then(response => response.json())
        .then(response => document.getElementById("change").innerHTML =response.data.translations[0].translatedText )
        .catch(err => console.error(err));
}