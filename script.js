var newDiv = document.createElement("div");

newDiv.setAttribute("id", "count_down");
newDiv.style.border = "1px solid";
newDiv.style.boxShadow = "5px 5px #888888";
newDiv.style.fontSize = "50px";
newDiv.style.margin = "10%";
newDiv.style.fontFamily = "arial";
newDiv.style.textAlign = "center";

newDiv.style.overflow = "scroll";
newDiv.style.color = "#74c365";

document.body.append(newDiv);

var count = 10;

function counter() {
  ten(() => {
    nine(() => {
      eight(() => {
        seven(() => {
          six(() => {
            five(() => {
              four(() => {
                three(() => {
                  two(() => {
                    one(() => {
                      wish(() => {});
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
}

function one(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  //console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function two(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  //console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function three(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  //console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function four(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function five(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function six(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function seven(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function eight(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function nine(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function ten(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = count;
  count--;
  // console.log(count--);
  setTimeout(() => {
    callback();
  }, 1000);
}
function wish(callback) {
  var res = document.getElementById("count_down");
  res.innerHTML = "Happy Independence Day";

  // console.log("Happy Independence Day");
  setTimeout(() => {
    callback();
  }, 1000);
}

counter();
