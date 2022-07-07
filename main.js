let problem1 = document.getElementById("problem")
let anser1 = document.getElementById("anser1")
let anser2 = document.getElementById("anser2")
let anser3 = document.getElementById("anser3")
let anser4 = document.getElementById("anser4")
let clearCheck = document.getElementById("clearCheck")
let clearNum = document.getElementById("clearNum")
let timer = document.getElementById("timer")
let tieen = document.getElementById("tieen")
let pinpon = document.getElementById("pinpon")
const slider_volume = document.getElementById("volume");
document.addEventListener('keypress', keypress_ivent);
window.addEventListener("DOMContentLoaded", function() { problemExecutioner() })



function keypress_ivent(e) {
    if (e.key == '1') {
        clickChecker(value1)
    } else if (e.key == '2') {
        clickChecker(value2)
    } else if (e.key == "3") {
        clickChecker(value3)
    } else if (e.key == "4") {
        clickChecker(value4)
    }
    return false;
}


slider_volume.addEventListener("input", e => {
    tieen.volume = slider_volume.value;
    pinpon.volume = slider_volume.value;
});


var value1 = false
var value2 = false
var value3 = false
var value4 = false
var clearNumber = 0



anser1.onclick = function() { clickChecker(value1) }
anser2.onclick = function() { clickChecker(value2) }
anser3.onclick = function() { clickChecker(value3) }
anser4.onclick = function() { clickChecker(value4) }


// ["問題文", "こたえ", "うそこたえ1", "うそこたえ2"]
var problems = [
    ["11の2乗", "121", "124", "144", "142"],
    ["12の2乗", "144", "164", "124", "132"],
    ["13の2乗", "169", "164", "144", "189"],
    ["14の2乗", "196", "166", "186", "194"],
    ["15の2乗", "225", "245", "235", "215"],
    ["17の2乗", "289", "298", "321", "299"],
    ["19の2乗", "361", "369", "381", "289"],
    ["2の3乗", "8", "10", "6", "16"],
    ["2の5乗", "32", "40", "30", "36"],
    ["2の7乗", "128", "132", "140", "134"],
    ["2の9乗", "512", "520", "492", "502"],
    ["2の10乗", "1024", "1048", "1032", "984"],
    ["3の4乗", "81", "91", "99", "71"],
    ["5の3乗", "125", "145", "135", "115"],
    ["5の4乗", "625", "725", "640", "715"],
    ["53+99", "152", "153", "151", "154"],
    ["86+97", "183", "182", "184", "187"],
    ["783+999", "1782", "1781", "1783", "1780"],
    ["287+798", "1085", "1087", "1086", "1084"],
    ["698+299+497", "1494", "1487", "1497", "1496"],
    ["678-99", "579", "578", "560", "560"],
    ["126-97", "29", "30", "28", "49"],
    ["587-398", "189", "190", "187", "188"],
    ["100-78", "22", "12", "32", "25"],
    ["800-369", "431", "421", "441", "425"],
    ["386×5", "1930", "1940", "1830", "2030"],
    ["14×45", "630", "640", "620", "610"],
    ["35×24", "840", "850", "830", "825"],
    ["48×25", "1200", "1100", "1210", "1190"],
    ["24×75", "1800", "1700", "1810", "1820"],
    ["125×32", "4000", "3980", "3990", "4010"],
    ["53×11", "583", "573", "543", "533"],
    ["79×11", "869", "890", "891", "873"],
    ["47×55", "2585", "2595", "2575", "2580"],
    ["25の2乗", "625", "650", "645", "630"],
    ["65の2乗", "4225", "4340", "4330", "4240"],
    ["85の2乗", "7225", "7220", "7230", "7250"],
    ["115の2乗", "13225", "13335", "13345", "13315"],
    ["|x+2|=3　x=?", "1,-5", "3", "-3", "1"],
    ["|x+1|>3　x=?", "x<-4,2<x", "-2<x<4", "±3", "-4<x<2"],
    ["|x+1|<3　x=?", "-4<x<2", "-2<x<4", "±3", "x<-4,2<x"]
]

function tim1() {
    setInterval(function() {
        count--
        timer.innerText = count
    }, 1000)

}

var tim1
var count = 5

function startTimer1() {
    count = 5
    timer.innerText = count
    tim1 = setInterval(function() {
        count--
        timer.innerText = count
    }, 1000);
}

function stopTimer() {
    clearInterval(tim1);
}

// function startCount() {
//     var count = 5
//     timer.innerText = count;
//     tim1 = setInterval(function() {
//         count--
//         timer.innerText = count
//     }, 1000)
//     tim2 = setInterval(function() {
//         problemExecutioner()
//         clearInterval(tim1.this)
//         clearInterval(tim2.this)
//     }, count * 1000)
// }

function clickChecker(value) {
    if (value == true) {
        console.log("正解です")
        stopTimer()
        problemExecutioner()
        pinpon.currentTime = 0;
        pinpon.play()
        clearNumber += 1
        clearNum.innerText = clearNumber
        clearCheck.innerText = "⭕"
    } else {
        stopTimer()
        tieen.currentTime = 0;
        tieen.play()
        console.log("不正解！")
        problemExecutioner()
        clearCheck.innerText = "❌"

    }
}

function teston() {
    problem = ["|x+2|=3　x=?", "±3", "3", "-3", "1"]
    problemCreator(problem[0], problem[1], problem[2], problem[3], problem[4])
}

function problemCreator(problem, anser, x, y, z) {
    problem1.innerText = problem
    random = Math.random()
    console.log(random)
    if (random < 0.25) {
        anser1.innerText = anser
        anser2.innerText = x
        anser3.innerText = y
        anser4.innerText = z
        value1 = true
        value2 = false
        value3 = false
        value4 = false

    } else if (random < 0.50) {
        anser1.innerText = x
        anser2.innerText = anser
        anser3.innerText = y
        anser4.innerText = z
        value1 = false
        value2 = true
        value3 = false
        value4 = false
    } else if (random < 0.75) {
        anser1.innerText = x
        anser2.innerText = y
        anser3.innerText = anser
        anser4.innerText = z
        value1 = false
        value2 = false
        value3 = true
        value4 = false
    } else {
        anser1.innerText = x
        anser2.innerText = y
        anser3.innerText = z
        anser4.innerText = anser
        value1 = false
        value2 = false
        value3 = false
        value4 = true
    }
}

function problemExecutioner() {
    let random = Math.floor((Math.random() * (problems.length)))
    problem = problems[random]
    problemCreator(problem[0], problem[1], problem[2], problem[3], problem[4])
    startTimer1()
}