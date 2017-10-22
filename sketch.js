const CANVAS_WIDTH = 500, CANVAS_HEIGHT = 500,
      LEFT = 10, TOP = 10

let time = 0, points = []

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  noCursor()
  time = 0
}

function draw() {

  background(255)

  plotData([
      [2, 3, 2.7, 3.2, 4.1],
      [10, 14, 12, 15, 20]
    ],
    'timeSeries'
  )

  if (!cursorOverPoint(mouseX, mouseY)) {
    drawCursorAnimation()
  } else {
    // text(`(${mouseX},${mouseY})`, mouseX, mouseY)
    drawCursorAnimation()
  }

  time++

  points = []

  // plotData([
  //   ["1307576477","26.591000000000","1.000000000000"],
  //   ["1307576818","28.000000000000","1.000000000000"],
  //   ["1307576906","29.000000000000","0.880000000000"],
  //   ["1307577066","29.999900000000","1.500000000000"],
  //   ["1307579245","29.500000000000","1.000000000000"],
  //   ["1307582051","30.000000000000","3.250000000000"],
  //   ["1307584965","29.500000000000","1.000000000000"]
  // ],
  //   [ 'none', 'point', 'bar']
  // )
}

const speed=0.1, animationSize=5, pointRadius=5

function cursorOverPoint(x, y) {
  return points.find(point => (
    Math.hypot(x - point[0], y - point[1]) < animationSize + pointRadius
  ))
}
// ${Math.floor(random(0,256))}
function drawCursorAnimation() {
  let n=0
  while (n<100) {
    n++
    stroke(color(`rgba(0, 0, 0, 0.4)`))
    point(
      animationSize/2*randomGaussian() + mouseX,
      animationSize/2*randomGaussian() + mouseY
    )
  }
  stroke(color('black'))
}

function drawPoint(x, y) {
  ellipse(x, y, pointRadius, pointRadius)
  points.push([x,y])
}

function drawTick(point, horizontal, format) {
  ({
    'none': () => {},
    'point': point => drawPoint(horizontal, Number(point) * 10),
    'bar': point => line(horizontal, TOP, horizontal, Number(point) * 10 + TOP)
  })[format](point)
}

function plotData(data, format) {
  if (!Array.isArray(data)) return

  if (format === 'timeSeries') {
    if (Array.isArray(data[0])) {
      data.forEach((timeSeries, setIndex) => {
        timeSeries.forEach((value, timeIndex) => {
          drawPoint(timeIndex * 10 + LEFT, Number(value) * 10)
        })
      })
    } else {
      data.forEach((value, timeIndex) => {
        drawPoint(timeIndex * 10 + LEFT, Number(value) * 10)
      })
    }
  } else if (Array.isArray(format)) {
    data.forEach((time, index) => {
      const horizontal = index * 10 + LEFT
      time.forEach((point, index) => drawTick(point, horizontal, format[index]))
    })
  }
}
