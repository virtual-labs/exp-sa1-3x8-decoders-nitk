let tot_rows = 0;

function em_tab() {
  let id = document.getElementById("tabl");
  while (tot_rows > 0) {
    let row = id.deleteRow(tot_rows);
    tot_rows--;
  }
}
function clr_tab() {
  em_tab();
  for (let i = 1; i < 30; i++) {
    let s = "fa" + i;
    id = document.getElementById(s);
    id.style.backgroundColor = "blue";
  }
  chnclr("vcc");
}
function chnclr(var1) {
  let ele = document.getElementById(var1);
  if (var1 != "vcc" && ele.style.backgroundColor == "tomato") {
    ele.style.backgroundColor = "#04c22d";
  } else {
    ele.style.backgroundColor = "tomato";
  }
  if (var1 == "vcc") {
    for (let i = 0; i < 4; i++) {
      let s = "a" + i;
      let di = document.getElementById(s);
      di.style.backgroundColor = "tomato";
    }
  }
  print();
}

//Print function
function print() {
  let ins = new Array(4);
  for (let i = 0; i < ins.length; i++) {
    let s = "a" + i;
    let di = document.getElementById(s);
    if (di.style.backgroundColor == "tomato") {
      ins[i] = false;
    } else {
      ins[i] = true;
    }
  }
  let outs = new Array(16);
  for (let i = 0; i < outs.length; i++) {
    outs[i] = 0;
  }
  let flt_pos = new Array();
  for (let i = 1; i < 30; i++) {
    let s = "fa" + i;
    let di = document.getElementById(s);
    if (di.style.backgroundColor == "red") {
      flt_pos.push(i);
    }
  }
  if (flt_pos[0] == undefined) flt_pos.push(0);

  dec_outs(ins, outs, flt_pos); //calling func decouts

  for (let j = 0; j < 16; j++) {
    let str = "d" + j;
    let id = document.getElementById(str);
    if (outs[j] == 1 || outs[j] == -1) {
      id.style.backgroundColor = "rgb(3 255 92)";
      id.style.boxShadow = "0 0 16px 2px rgb(3 255 92)";
    } else {
      id.style.backgroundColor = "rgb(209, 199, 199)";
      id.style.boxShadow = "none";
    }
  }
}

//Checking output
function dec_outs(a, output, fa_pos) {
  if (document.getElementById("vcc").style.backgroundColor == "tomato") {
    for (let i = 0; i < 16; i++) {
      output[i] = 2;
    }
    let b = new Array(4);
    let c = new Array(4);
    let itr = 0;
    while (fa_pos[itr] < 5 && fa_pos[itr] > 0) {
      let sa = fa_pos[itr];
      a[sa - 1] = 1;
      itr++;
    }
    b[0] = a[0];
    c[0] = a[0];
    b[1] = a[1];
    c[1] = a[1];
    b[2] = a[2];
    c[2] = a[2];
    b[3] = ~a[3];
    c[3] = a[3];

    for (let i = itr; i < fa_pos.length; i++) {
      let sa = fa_pos[i];
      if (sa > 4 && sa <= 8) {
        if (sa == 8) b[3] = 0;
        else b[sa - 5] = 1;
      }
      if (sa > 8 && sa <= 12) {
        a[sa - 9] = 1;
      }
      if (sa == 13) b[3] = 1;
      if (sa > 13 && sa <= 29) output[sa - 14] = 1;
    }
    for (
      let i = 0;
      i < 16;
      i++ //deciding outputs;
    ) {
      if (output[i] == 2) {
        switch (i) {
          case 0:
            output[i] = b[3] & ~a[0] & ~a[1] & ~a[2];
            break;
          case 1:
            output[i] = b[3] & a[0] & ~a[1] & ~a[2];
            break;
          case 2:
            output[i] = b[3] & ~a[0] & a[1] & ~a[2];
            break;
          case 3:
            output[i] = b[3] & a[0] & a[1] & ~a[2];
            break;
          case 4:
            output[i] = b[3] & ~a[0] & ~a[1] & a[2];
            break;
          case 5:
            output[i] = b[3] & a[0] & ~a[1] & a[2];
            break;
          case 6:
            output[i] = b[3] & ~a[0] & a[1] & a[2];
            break;
          case 7:
            output[i] = b[3] & a[0] & a[1] & a[2];
            break;
          case 8:
            output[i] = a[3] & ~b[0] & ~b[1] & ~b[2];
            break;
          case 9:
            output[i] = a[3] & b[0] & ~b[1] & ~b[2];
            break;
          case 10:
            output[i] = a[3] & ~b[0] & b[1] & ~b[2];
            break;
          case 11:
            output[i] = a[3] & b[0] & b[1] & ~b[2];
            break;
          case 12:
            output[i] = a[3] & ~b[0] & ~b[1] & b[2];
            break;
          case 13:
            output[i] = a[3] & b[0] & ~b[1] & b[2];
            break;
          case 14:
            output[i] = a[3] & ~b[0] & b[1] & b[2];
            break;
          case 15:
            output[i] = a[3] & b[0] & b[1] & b[2];
            break;
          default:
            break;
        }
      }
    }
    // console.log(output[0]);
  }
}

//Adding row in Table
function ad_tab() {
  let bstr = new Array(20);
  let inps = new Array(4);
  for (let i = 0; i < 4; i++) {
    let s = "a" + i;
    let di = document.getElementById(s);
    if (di.style.backgroundColor == "tomato") {
      bstr[3-i] = 0;
      inps[i] = 0;
    } else {
      bstr[3-i] = 1;
      inps[i] = 1;
    }
  }
  let outps1 = new Array(16);
  let outps2 = new Array(16);
  let flts = new Array();
  flts.push(0);
  dec_outs(inps, outps2, flts);
  for (let i = 0; i < 16; i++) {
    let str = "d" + i;
    let id = document.getElementById(str);
    if (id.style.backgroundColor == "rgb(3, 255, 92)") {
      bstr[4 + i] = 1;
      outps1[i] = 1;
    } else {
      bstr[4 + i] = 0;
      outps1[i] = 0;
    }
  }
  let chk = 1;
  let flous = new Array();
  for (let i = 0; i < 16; i++) {
    if (i == 0 && outps1[i] - outps2[i] != 2) {
      chk = 0;
      flous.push(i);
    } else if (i != 0) {
      if (outps1[i] != outps2[i]) {
        chk = 0;
        flous.push(i);
      }
    }
  }
  tot_rows++;
  let id = document.getElementById("tabl");
  let row = id.insertRow(tot_rows);
  let j = 0;
  for (let i = 0; i < 20; i++) {
    let cell = row.insertCell(i);
    if (i < 4 && chk == 1) cell.style.backgroundColor = "#b3b3b361";
    if (chk == 0) {
      if (i < 4) cell.style.backgroundColor = "#b3b3b361";
      else if (i - 4 == flous[j]) {
        cell.style.backgroundColor = "rgb(250,80,110,0.72)";
        j++;
      } else cell.style.backgroundColor = "#fff";
    }
    cell.innerHTML = bstr[i];
  }
  flts.pop();
  for (let i = 1; i < 30; i++) {
    let s = "fa" + i;
    let di = document.getElementById(s);
    if (di.style.backgroundColor == "red") {
      flts.push(i);
    }
  }
  if (flts[0] == undefined) flts.push(0);
  let cell = row.insertCell(20);
  let str;
  if (flts[0] == 0) {
    str = "NA";
  } else {
    str = flts[0];
    for (let i = 1; i < flts.length; i++) {
      str = str + "," + flts[i];
    }
  }
  if (str != "NA") {
    cell.style.backgroundColor = "pink";
  }
  cell.innerHTML = str;
}

//Adding Fault Positions
function addfltpos(posid) {
  //   console.log(posid);
  let di = document.getElementById(posid);
  if (di.style.backgroundColor === "red") di.style.backgroundColor = "blue";
  else di.style.backgroundColor = "red";
  print();
}
