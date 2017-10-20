console.log('theUSD (unixtime,price,amount):', theUSD)

function setup() {
  createCanvas(500, 500)
}

function draw() {
  theUSD.forEach(point => drawPoint(Number(point[1]), 50))
}

function drawPoint(x, y) {
  const r = 5
  ellipse(x, y, r, r)
}
