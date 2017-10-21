const LEFT = 10
const TOP = 10

function setup() {
  createCanvas(500, 500)
}

function draw() {

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

  plotData([
      [2, 3, 2.7, 3.2, 4.1],
      [10, 14, 12, 15, 20]
  ],
    'timeSeries'
  )

  // plotData([2, 3, 2.7, 3.2, 4.1], 'timeSeries')
}

function drawPoint(x, y) {
  const r = 5
  ellipse(x, y, r, r)
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
