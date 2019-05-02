
/*

const DrawApp = {
    version: '1.0',
    name: 'Drawing app',
    description: 'App para realizar formas diversas en HTML5 Canvas',
    author: 'Germán',
    canvasDom: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    init: function (id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setHandlers()
    },
    setDimensions: function () {
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.winH = window.innerHeight
        this.winW = window.innerWidth
    },
    setHandlers: function () {
        window.onresize = () => this.setDimensions()
    },
    drawFilledSquares: function () {
        this.ctx.fillStyle = 'blue'                                             // cambia los colores de relleno
        this.ctx.fillRect(this.winW / 2 - 50, this.winH / 2 - 50, 100, 100)
        this.ctx.fillStyle = 'yellow'
        this.ctx.fillRect(this.winW / 2 - 10, this.winH / 2 - 10, 20, 20)
    },
    drawLinearSquare: function () {
        this.ctx.strokeStyle = 'green'                                          // cambia los colores de bordes
        this.ctx.strokeRect(this.winW / 2 - 100, this.winH / 2 - 100, 200, 200)
    },
    drawLine: function () {
        this.ctx.strokeStyle = 'green'
        this.ctx.lineWidth = 20
        this.ctx.setLineDash([60, 30])

        this.ctx.beginPath()
        this.ctx.moveTo(100, this.winH / 2)
        this.ctx.lineTo(this.winW - 100, this.winH / 2)
        this.ctx.stroke()
    },
    drawLines: function (number, gap) {

        for (let i = 0; i < number; i++) {
            this.ctx.beginPath()
            this.ctx.moveTo(100, 100 + i * gap)
            this.ctx.lineTo(this.winW - 100, 100 + i * gap)
            this.ctx.stroke()
        }
    },
    drawCircle: function () {
        this.ctx.beginPath()
        this.ctx.fillStyle = 'brown'
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(this.winW / 2, this.winH / 2, 100, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.fill()
        this.ctx.closePath()

        this.ctx.beginPath()
        this.ctx.fillStyle = 'white'
        this.ctx.strokeStyle = 'black'
        this.ctx.arc(this.winW / 2, this.winH / 2, 50, 0, Math.PI * 2)
        this.ctx.stroke()
        this.ctx.fill()
        this.ctx.closePath()
    },
    showText: function (text) {
        this.ctx.font = '50px sans-serif'
        this.ctx.fillText(text, 100, 100)
    },
    loadUrlImage: function (url) {
        const image = new Image()
        image.src = url
        image.onload = () => {
            this.ctx.drawImage(image, 100, 100, 300, 300)
        }
    },
    loadLocalImage: function (url) {
        const image = new Image()
        image.src = url
        image.onload = () => {
            this.ctx.drawImage(image, 100, 100, 50, 50)
        }
    }

}

*/





/*
const AnimateApp = {
    version: '1.0',
    name: 'Animate app',
    description: 'App para realizar formas en movimiento en HTML5 Canvas',
    author: 'Germán',
    canvasDom: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    init: function (id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setHandlers()
    },
    setDimensions: function () {
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.winH = window.innerHeight
        this.winW = window.innerWidth
    },
    setHandlers: function () {
        window.onresize = () => this.setDimensions()
    },
    drawMovingBall: function (url) {
        const ball = new Ball(this.ctx, url, this.winW)

        setInterval(() => {
            this.clear()
            ball.draw()
        }, 5)
    },
    clear: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    }
}



class Ball {
    constructor(ctx, url, winW) {
        this.ctx = ctx

        this.img = new Image()
        this.img.src = url

        this.winW = winW
        this.posX = 0
        this.vel = 2

        this.ballWidth = 100
    }
    draw() {
        if (this.posX >= this.winW - this.ballWidth || this.posX < 0) this.changeDirection()

        this.posX += this.vel
        this.ctx.drawImage(this.img, this.posX, 100, this.ballWidth, 100)
    }

    changeDirection() {
        this.vel *= -1;
    }
}

*/





const ControlsApp = {
    version: '1.0',
    name: 'Controls app',
    description: 'App para realizar formas controladas mediante teclado en HTML5 Canvas',
    author: 'Germán',
    canvasDom: undefined,
    ctx: undefined,
    winW: undefined,
    winH: undefined,
    ball: undefined,
    init: function (id) {
        this.canvasDom = document.getElementById(id)
        this.ctx = this.canvasDom.getContext('2d')
        this.setDimensions()
        this.setHandlers()
        this.setEventListeners()
    },
    setDimensions: function () {
        this.canvasDom.setAttribute('width', window.innerWidth)
        this.canvasDom.setAttribute('height', window.innerHeight)
        this.winH = window.innerHeight
        this.winW = window.innerWidth
    },
    setHandlers: function () {
        window.onresize = () => this.setDimensions()
    },
    drawControlledBall: function (url) {
        this.ball = new Ball(this.ctx, url, this.winW)

        setInterval(() => {
            this.clear()
            this.ball.draw()
        }, 5)
    },
    clear: function () {
        this.ctx.clearRect(0, 0, this.winW, this.winH)
    },
    setEventListeners: function () {
        document.onkeyup = e => {
            if (e.keyCode === 37) this.ball.moveLeft()
            if (e.keyCode === 39) this.ball.moveRight()
        }
    }
}



class Ball {
    constructor(ctx, url, winW) {
        this.ctx = ctx

        this.img = new Image()
        this.img.src = url

        this.winW = winW
        this.posX = 0
        this.vel = 10

        this.ballWidth = 100
    }
    draw() {
        this.ctx.drawImage(this.img, this.posX, 100, this.ballWidth, 100)
    }

    moveLeft() {
        if (this.posX > 0) this.posX -= this.vel
    }

    moveRight() {
        if (this.posX < this.winW - this.ballWidth) this.posX += this.vel
    }

}