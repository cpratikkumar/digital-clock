function clock() {
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let am = document.getElementById("amorpm");
  if (hr >= 12) {
    am.innerHTML = "PM ";
  } else {
    am.innerHTML = "AM";
  }

  if (hr > 12) {
    hr = hr - 12;
  }
  document.getElementById("hr").innerHTML = hr;
  document.getElementById("min").innerHTML = min;
  document.getElementById("sec").innerHTML = sec;
}

setInterval(clock, 1000);
