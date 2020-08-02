class Playground {
  teamname1: string;
  teamname2: string;

  constructor(tname1: string, tname2: string) {
    this.teamname1 = tname1;
    this.teamname2 = tname2;
    
  

    for (let i = 1; i < 3; i++) {
      if (i == 1) {
        let lb1 = document.createElement("h3");
        lb1.setAttribute("class", "tname1");
        lb1.innerText = this.teamname1;
        lb1.setAttribute("id", "teamone");
        let nxline3= document.createElement("br")

        document.body.append(lb1);
        document.body.append(nxline3)
      } else if (i == 2) {
        let lb1 = document.createElement("h3");
        lb1.setAttribute("class", "tname2");
        lb1.innerText = this.teamname2;
        lb1.setAttribute("id", "teamtwo");
        document.body.append(lb1);
        
      }
      createplayground(i);
    }

    function createplayground(j) {
      //Create tuple for each team

      let team = "T" + j;

      let div1 = document.createElement("div");
      div1.setAttribute("id", "playarea");
      div1.setAttribute("class", "maintable"+j);
      document.body.append(div1);
      var tab = document.createElement("table");
      tab.setAttribute('class','tables')
      var row1 = document.createElement("tr");
      var one = document.createElement("th");
      var two = document.createElement("th");
      var three = document.createElement("th");
      var four = document.createElement("th");
      var five = document.createElement("th");
      var six = document.createElement("th");
      var seven = document.createElement("th");
      var eight = document.createElement("th");
      one.innerText = "TEAM "+j;
      two.innerText = "B1";
      three.innerText = "B2";
      four.innerText = "B3";
      five.innerText = "B4";
      six.innerText = "B5";
      seven.innerText = "B6";
      eight.innerText = "Total";
      div1.appendChild(tab);
      tab.appendChild(row1);
      row1.appendChild(one);
      row1.appendChild(two);
      row1.appendChild(three);
      row1.appendChild(four);
      row1.appendChild(five);
      row1.appendChild(six);
      row1.appendChild(seven);
      row1.appendChild(eight);
      for (let k = 1; k < 11; k++) {
        let Player = "P" + k;
        var rowc = document.createElement("tr");
        var onec = document.createElement("th");
        var twoc = document.createElement("td");
        twoc.setAttribute("id", team + Player + "C1");
        var threec = document.createElement("td");
        threec.setAttribute("id", team + Player + "C2");
        var fourc = document.createElement("td");
        fourc.setAttribute("id", team + Player + "C3");
        var fivec = document.createElement("td");
        fivec.setAttribute("id", team + Player + "C4");
        var sixc = document.createElement("td");
        sixc.setAttribute("id", team + Player + "C5");
        var sevenc = document.createElement("td");
        sevenc.setAttribute("id", team + Player + "C6");
        var eightc = document.createElement("th");
        eightc.setAttribute("id", team + Player + "C7");

        onec.innerText = "Player" + k;
        tab.appendChild(rowc);
        rowc.appendChild(onec);
        rowc.appendChild(twoc);
        rowc.appendChild(threec);
        rowc.appendChild(fourc);
        rowc.appendChild(fivec);
        rowc.appendChild(sixc);
        rowc.appendChild(sevenc);
        rowc.appendChild(eightc);
      }
      var div2 = document.createElement("div");
      div2.setAttribute("class", "division2");
      var scoredisplay1 = document.createElement("label");
      scoredisplay1.innerText = "SCORE: ";
      var scoredisplay2 = document.createElement("label");
      scoredisplay2.setAttribute("id", "sc" + j);
      let nxline2 = document.createElement("br");
      let hitbtn = document.createElement("button");
      hitbtn.innerText = "HIT";
      hitbtn.setAttribute("id", "hbtn" + j);
      hitbtn.setAttribute('class','btn btn-primary')
      hitbtn.setAttribute("onclick", "playerHit()");
      let nxline = document.createElement("br");
      div1.appendChild(div2);
      div2.appendChild(scoredisplay1);
      div2.appendChild(scoredisplay2);
      div2.appendChild(nxline2);
      div2.appendChild(hitbtn);
      div1.appendChild(nxline);
    }
  }
}

function playerHit() {
  let originalPlayer: string;

  if (document.getElementById("T1P1C7").innerHTML == "")
    originalPlayer = "T1P1C";
  else if (document.getElementById("T1P2C7").innerHTML == "")
    originalPlayer = "T1P2C";
  else if (document.getElementById("T1P3C7").innerHTML == "")
    originalPlayer = "T1P3C";
  else if (document.getElementById("T1P4C7").innerHTML == "")
    originalPlayer = "T1P4C";
  else if (document.getElementById("T1P5C7").innerHTML == "")
    originalPlayer = "T1P5C";
  else if (document.getElementById("T1P6C7").innerHTML == "")
    originalPlayer = "T1P6C";
  else if (document.getElementById("T1P7C7").innerHTML == "")
    originalPlayer = "T1P7C";
  else if (document.getElementById("T1P8C7").innerHTML == "")
    originalPlayer = "T1P8C";
  else if (document.getElementById("T1P9C7").innerHTML == "")
    originalPlayer = "T1P9C";
  else if (document.getElementById("T1P10C7").innerHTML == "")
    originalPlayer = "T1P10C";
  //TEAM-2
  else if (document.getElementById("T2P1C7").innerHTML == "")
    originalPlayer = "T2P1C";
  else if (document.getElementById("T2P2C7").innerHTML == "")
    originalPlayer = "T2P2C";
  else if (document.getElementById("T2P3C7").innerHTML == "")
    originalPlayer = "T2P3C";
  else if (document.getElementById("T2P4C7").innerHTML == "")
    originalPlayer = "T2P4C";
  else if (document.getElementById("T2P5C7").innerHTML == "")
    originalPlayer = "T2P5C";
  else if (document.getElementById("T2P6C7").innerHTML == "")
    originalPlayer = "T2P6C";
  else if (document.getElementById("T2P7C7").innerHTML == "")
    originalPlayer = "T2P7C";
  else if (document.getElementById("T2P8C7").innerHTML == "")
    originalPlayer = "T2P8C";
  else if (document.getElementById("T2P9C7").innerHTML == "")
    originalPlayer = "T2P9C";
  else if (document.getElementById("T2P10C7").innerHTML == "")
    originalPlayer = "T2P10C";

  var resultValue = generaterandom();

  for (let index = 1; index < 7; index++) {
    let cellIndex = originalPlayer + index;
    if (document.getElementById(cellIndex).innerHTML == "") {
      document.getElementById(cellIndex).innerHTML = resultValue;
      break;
    }
  }

  if (
    resultValue == "0" ||
    document.getElementById(originalPlayer + 6).innerHTML != ""
  ) {
    var totalScore: number = 0;
    if (document.getElementById(originalPlayer + 1).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 1).innerText);
    if (document.getElementById(originalPlayer + 2).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 2).innerText);
    if (document.getElementById(originalPlayer + 3).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 3).innerText);
    if (document.getElementById(originalPlayer + 4).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 4).innerText);
    if (document.getElementById(originalPlayer + 5).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 5).innerText);
    if (document.getElementById(originalPlayer + 6).innerHTML != "")
      totalScore =
        totalScore +
        Number(document.getElementById(originalPlayer + 6).innerText);

    document.getElementById(originalPlayer + 7).innerHTML = "" + totalScore;

    //disableing buttons and total score
    if (originalPlayer == "T1P10C") {
      window.alert("Team 2's turn");
      (<HTMLInputElement>document.getElementById("hbtn1")).disabled = true;

      var teamscore: number = 0;
      for (let sc = 1; sc < 11; sc++) {
        teamscore =
          teamscore +
          Number(document.getElementById("T1P" + sc + "C7").innerText);
        //console.log(Number(document.getElementById("T1P"+sc+"C7").innerText))
        //console.log(typeof(teamscore))
      }

      var score1 = teamscore.toString();
      document.getElementById("sc1").innerText = score1;
    } else if (originalPlayer == "T2P10C") {
      (<HTMLInputElement>document.getElementById("hbtn2")).disabled = true;
      window.alert("Game over, scroll down for result");
      var teamscore: number = 0;
      for (let sc = 1; sc < 11; sc++) {
        teamscore =
          teamscore +
          Number(document.getElementById("T2P" + sc + "C7").innerText);
      }
      var s1 = Number(document.getElementById("sc1").innerText);
      var s2 = teamscore;
      var score2 = teamscore.toString();
      document.getElementById("sc2").innerText = score2;
      // console.log(s1);
      // console.log(s2);
      // console.log(typeof s1);
      // console.log(typeof s2);
      if (s1 > s2) {
        var resultdiv = document.createElement("div");
        resultdiv.setAttribute("class", "alert alert-primary");
        var message = document.createElement("h2");
        message.innerText =
          (<HTMLInputElement>document.getElementById("t1")).value +
          ", Won the match";
        document.body.append(resultdiv);
        resultdiv.appendChild(message);
      } else {
        var resultdiv = document.createElement("div");
        resultdiv.setAttribute("class", "alert alert-primary");
        var message = document.createElement("h2");
        message.innerText =
          (<HTMLInputElement>document.getElementById("t2")).value +
          ", Won the match,Congratulations";
          document.body.append(resultdiv);
      resultdiv.appendChild(message);
      
      }
    }
  }
}

function generaterandom() {
  var audio = new Audio("cb.mp3");
  audio.play();

  var arra1 = [0, 1, 2, 3, 4, 5, 6];
  var ctr = arra1.length,
    temp,
    index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  var final = arra1.slice(0, 1);
  return final.join("");
}

let buildgame = () => {
  (<HTMLInputElement>document.getElementById("firstbutton")).disabled = true;
  let tn1 = (<HTMLInputElement>document.getElementById("t1")).value;
  let tn2 = (<HTMLInputElement>document.getElementById("t2")).value;
  let newgame = new Playground(tn1, tn2);
};
