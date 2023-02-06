async function getAnswer(){
    var id = document.getElementsByClassName("math-question__wrapper___iRtlD")[0]["dataset"]["questionId"];
    var response = await fetch("https://api.freckle.com/2/math/questions/"+id+"?lang=en", {
      method: "GET",
    
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    });

    
    json = await response.json();
    var answer=json["obfuscated-correct-answers"];
    if (typeof answer == "undefined") {
        answer=json['obfuscated-fill-in-the-blanks-correct-answers'];
    }
    if (typeof answer =="undefined") {
        answer=json['obfuscated-graph-scatter-points-points']
    }

    
    var final = JSON.parse(atob(answer));
    console.log(final);
    
    var buttons = document.querySelectorAll('[data-mathjax="true"]');
    for (var i = 0; i < buttons.length; i++){
        for (var x = 0; x < final.length; x++){
            if (buttons[i].innerText == final[x]){
                buttons[i].parentElement.setAttribute("class", "button__button___TCWNI button__secondary___WMaVW button__lg___w9Vy5 button__selectedStyle___jCcyN");
                x++;
            }
        }
    }
    
    try {
        var inputBar = document.getElementById("answer-input")
        inputBar.setAttribute("placeholder", final);
        inputBar.parentElement.setAttribute("class", "math-question-input-answer__floatingInput___Ouy10 floating-label-input__floatingLabel___cfTSY floating-label-input__floating___KA93N");
    } catch(error) {
        console.log();
    }
    getAnswer();
}
getAnswer();
