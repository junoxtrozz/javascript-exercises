const ftoc = function(fTemp) {
  let celsiusTemp = ((fTemp - 32) * (5/9));
  if(celsiusTemp % 10 !== 0)
  {
    celsiusTemp = Math.round(celsiusTemp * 10) / 10;
  }
  return celsiusTemp;
}

const ctof = function(cTemp) {
  let farenheitTemp = ((cTemp * (9/5)) + 32);
  if(farenheitTemp % 10 !== 0)
  {
    farenheitTemp = Math.round(farenheitTemp * 10) / 10;
  }
  return farenheitTemp;
}

module.exports = {
  ftoc,
  ctof
}
