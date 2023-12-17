let arrRGB = [0, 0, 0];

function changeColor(){
  if (document.getElementById('input1').value == ''){
    arrRGB[0] = 0;
  }
  else {
    arrRGB[0] = document.getElementById('input1').value;
  }
  if (document.getElementById('input2').value == ''){
    arrRGB[1] = 0;
  }
  else {
    arrRGB[1] = document.getElementById('input2').value;
  }
  if (document.getElementById('input3').value == ''){
    arrRGB[2] = 0;
  }
  else {
    arrRGB[2] = document.getElementById('input3').value;
  }
  document.getElementById('Square').style.backgroundColor = "rgb(" + arrRGB[0] + ", " + arrRGB[1] + ", " + arrRGB[2] + ")";
}


function GenFunc() {
    console.log("rgb(" + arrRGB[0] + ", " + arrRGB[1] + ", " + arrRGB[2] + ")");
    var div = document.createElement('div');
    div.style.color = "rgb(" + arrRGB[0] + ", " + arrRGB[1] + ", " + arrRGB[2] + ")";
    div.style.height = "95%";
    div.style.width = "15%";
    div.style.margin = "5px"
    document.getElementById("GenSpace").appendChild(div);
}

