console.log('theUSD (unixtime,price,amount):', theUSD)

const LEFT = 10

function setup() {
  createCanvas(500, 500)
}

function draw() {
  theUSD.forEach((point, index) =>
    drawPoint(index * 10 + LEFT, Number(point[1]) * 10)
  )
}

function drawPoint(x, y) {
  const r = 5
  ellipse(x, y, r, r)
}
