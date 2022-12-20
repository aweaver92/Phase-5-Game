
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

console.log(collisions);

canvas.width = 1920
canvas.height = 1057

// const collisionsMap = []
// for (let i = 0; i < collisions.length; i += 64) {
//     collisionsMap.push(collisions.slice(i, 70 + i))
// }

// const boundaries = []

// collisionsMap.forEach((row, i) => {
//     row.forEach((symbol, j) => {
//         if (symbol === 2985)
//         boundaries.push(
//             new Boundary({
//                 position: {
//                 x: j * Boundary.width,
//                 y: i * Boundary.height
//             }
//         }))
//     })
// })

const image = new Image()
image.src = './img/map.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foreground.png'

const playerImage = new Image()
playerImage.src = './img/characters/Front-Idle.png'

const playerDownImage = new Image()
playerDownImage.src = './img/characters/sWalk.png'

const playerUpImage = new Image()
playerUpImage.src = './img/characters/nWalk.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/characters/wWalk.png'

const playerRightImage = new Image()
playerRightImage.src = './img/characters/eWalk.png'

const playerUpRightImage = new Image()
playerUpRightImage.src = './img/characters/neWalk.png'

const playerUpLeftImage = new Image()
playerUpLeftImage.src = './img/characters/nwWalk.png'

const playerDownRightImage = new Image()
playerDownRightImage.src = './img/characters/seWalk.png'

const playerDownLeftImage = new Image()
playerDownLeftImage.src = './img/characters/swWalk.png'


const player = new Sprite({
  position: {
    x: canvas.width / 2 - 500 / 4 / 2,
    y: canvas.height / 2 - 84 / 2
  },
  image: playerDownImage,
  frames: {
    max:17
  },
  sprites: {
    up: playerUpImage,
    down: playerDownImage,
    left: playerLeftImage,
    right: playerRightImage,
    upright: playerUpRightImage,
    upleft: playerUpLeftImage,
    downright: playerDownRightImage,
    downleft: playerDownLeftImage
  },
  username: "Shazbot"
})
console.log(player.username)



const background = new Sprite({
    position: {
        x: -2100,
        y: -20
    },
    image: image
})
background.draw()

const foreground = new Sprite({
    position: {
        x: -2100,
        y: -20
    },
    image: foregroundImage
})

// const username = new Sprite({
//     position: {
//         x: -2100,
//         y: -20
//     },
//     username: "Shazbot"
// })
// username.draw()

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }
}

// const testBoundary = new Boundary({
//     position: {
//         x: 400,
//         y: 400
//     }
// })

const movables = [background, foreground]
// const movables = [background, foreground, testBoundary]
function renderUsername(props) {
    return(
    document.write(player.username)
    )
}
renderUsername()
function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    // boundaries.forEach(boundary => {
    //     boundary.draw()
    // })
    player.draw()
    foreground.draw()
    // testBoundary.draw()
    // let moving = true
    player.moving = false
        //diagonal up directions
        if (keys.d.pressed && keys.w.pressed ) {
            player.moving = true
            player.image = player.sprites.upright
            movables.forEach((movable) => {
            movable.position.x -= 6, movable.position.y += 3})
        }
        else if (keys.a.pressed && keys.w.pressed) {
            player.moving = true
            player.image = player.sprites.upleft
            movables.forEach((movable) => {
            movable.position.y += 3, movable.position.x += 6})
        }
        //diagonal down directions
        else if (keys.a.pressed && keys.s.pressed ){
            player.moving = true
            player.image = player.sprites.downleft
            movables.forEach((movable) => {
            movable.position.x += 6, movable.position.y -= 3})
        }
        else if (keys.s.pressed && keys.d.pressed){
            player.moving = true
            player.image = player.sprites.downright
            movables.forEach((movable) => {
            movable.position.y -= 3, movable.position.x -= 6})
        }

        //wasd directions
        else if (keys.w.pressed && lastKey === 'w') {
            player.moving = true
            player.image = player.sprites.up
            movables.forEach((movable) => {
            movable.position.y += 6})
        }
        else if (keys.a.pressed && lastKey === 'a') {
            player.moving = true
            player.image = player.sprites.left
            movables.forEach((movable) => {
            movable.position.x += 6})
        }
        else if (keys.s.pressed && lastKey === 's') {
            player.moving = true
            player.image = player.sprites.down
            movables.forEach((movable) => {
                movable.position.y -= 6})
            }
        else if (keys.d.pressed && lastKey === 'd') {
            player.moving = true
            player.image = player.sprites.right
            movables.forEach((movable) => {
            movable.position.x -= 6})
        }

        // diagonal into straight up/down movement transitions
        else if (keys.w.pressed && lastKey === 'd') {
            player.moving = true
            player.image = player.sprites.up
            movables.forEach((movable) => {
            movable.position.y += 6})
            }
        else if (keys.w.pressed && lastKey === 'a') {
            player.moving = true
            player.image = player.sprites.up
            movables.forEach((movable) => {
            movable.position.y += 6})
            }
        else if (keys.s.pressed && lastKey === 'd') {
            player.moving = true
            player.image = player.sprites.down
            movables.forEach((movable) => {
            movable.position.y -= 6})
            }
        else if (keys.s.pressed && lastKey === 'a') {
            player.moving = true
            player.image = player.sprites.down
            movables.forEach((movable) => {
            movable.position.y -= 6})
            }

            // diagonal into straight left/right movement transitions
        else if (keys.d.pressed && lastKey === 'w') {
            player.moving = true
            player.image = player.sprites.right
            movables.forEach((movable) => {
            movable.position.x -= 6})
            }
        else if (keys.a.pressed && lastKey === 'w') {
            player.moving = true
            player.image = player.sprites.left
            movables.forEach((movable) => {
            movable.position.x += 6})
            }
        else if (keys.d.pressed && lastKey === 's') {
            player.moving = true
            player.image = player.sprites.right
            movables.forEach((movable) => {
            movable.position.x -= 6})
            }
        else if (keys.a.pressed && lastKey === 's') {
            player.moving = true
            player.image = player.sprites.left
            movables.forEach((movable) => {
            movable.position.x += 6})
            }
    }
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
        keys.w.pressed = true
        lastKey = 'w'
        break

        case 'a':
        keys.a.pressed = true
        lastKey = 'a'
        break

        case 's':
        keys.s.pressed = true
        lastKey = 's'
        break

        case 'd':
        keys.d.pressed = true
        lastKey = 'd'
        break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
        keys.w.pressed = false
        break

        case 'a':
        keys.a.pressed = false
        break

        case 's':
        keys.s.pressed = false
        break

        case 'd':
        keys.d.pressed = false
        break
    }
})




    // c.drawImage(
    //     playerImage,
    //     0,
    //     0,
    //     playerImage.width / 8,
    //     playerImage.height,
    //     canvas.width / 2 - playerImage.width /4 / 2,
    //     canvas.height / 2 - playerImage.height / 2,
    //     playerImage.width / 8,
    //     playerImage.height
    //     )
