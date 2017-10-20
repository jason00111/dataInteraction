console.log('theUSD (unixtime,price,amount):', theUSD)

const LEFT = 10
const TOP = 10

function setup() {
  createCanvas(500, 500)
}

function draw() {
  theUSD.forEach((point, index) => {
    const horizontal = index * 10 + LEFT
    drawPoint(horizontal, Number(point[1]) * 10)
    line(horizontal, TOP, horizontal, Number(point[2]) * 10 + TOP)
  })
}

function drawPoint(x, y) {
  const r = 5
  ellipse(x, y, r, r)
}
