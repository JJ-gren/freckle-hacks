async function yourFunction(){
    var id=document.getElementsByClassName("math-question__wrapper___iRtlD")[0]["dataset"]["questionId"]
var response= await fetch("https://api.freckle.com/2/math/questions/"+id+"?lang=en", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
json=await response.json()
console.log(atob(json["obfuscated-correct-answers"]))

var answer=atob(json["obfuscated-correct-answers"])
var list=document.querySelectorAll('[data-mathjax="true"]')
for (button of list) {
    
    if (String(button.innerText)==(answer.slice(2,answer.length-2))) {
  button.parentElement.className="button__button___TCWNI button__secondary___WMaVW button__lg___w9Vy5 button__selectedStyle___jCcyN"

  //button.parentElement.attributes[5].value="true"

  //console.log(button.parentElement.attributes[5].value,button.parentElement.className)
}
}
    setTimeout(yourFunction, 1000);
}

yourFunction();
