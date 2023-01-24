var id=document.getElementsByClassName("math-question__wrapper___iRtlD")[0]["dataset"]["questionId"]
fetch("https://api.freckle.com/2/math/questions/"+id+"?lang=en", {
  method: "GET",

  headers: {
    "Content-type": "application/json; charset=UTF-8"
  }
})
  .then((response) => response.json())
  .then((json) => console.log(atob(json["obfuscated-correct-answers"])));