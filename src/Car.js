function Driver () {
  this.timeSpance = 0
  this.nowTime = 0
}

Driver.prototype.start = function () {
  this.timeInter = setInterval(function () { this.nowTime++; }
    , 1000)
  console.info(this.nowTime)
}

Driver.prototype.stop = function () {
  console.info(this.timeSpance)
  this.nowTime = 0
  this.timeSpance = 0
  clearInterval(this.timeInter)
}

Driver.prototype.timeSpace = function () {
  return this.timeSpance
}
