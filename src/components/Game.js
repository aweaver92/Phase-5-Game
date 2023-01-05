const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

// console.log(collisions);

canvas.width = 1920
canvas.height = 950

const image = new Image()
image.src = '../../img/map.png'

const foregroundImage = new Image()
foregroundImage.src = '../../img/foreground.png'

const playerImage = new Image()
playerImage.src = '../../img/characters/Front-Idle.png'

const playerDownImage = new Image()
playerDownImage.src = '../../img/characters/sWalk.png'

const playerUpImage = new Image()
playerUpImage.src = '../../img/characters/nWalk.png'

const playerLeftImage = new Image()
playerLeftImage.src = '../../img/characters/wWalk.png'

const playerRightImage = new Image()
playerRightImage.src = '../../img/characters/eWalk.png'

const playerUpRightImage = new Image()
playerUpRightImage.src = '../../img/characters/neWalk.png'

const playerUpLeftImage = new Image()
playerUpLeftImage.src = '../../img/characters/nwWalk.png'

const playerDownRightImage = new Image()
playerDownRightImage.src = '../../img/characters/seWalk.png'

const playerDownLeftImage = new Image()
playerDownLeftImage.src = '../../img/characters/swWalk.png'

const playerDodgeRightImage = new Image()
playerDodgeRightImage.src = '../../img/characters/Dodge-Right.png'

const menuImage = new Image()
menuImage.src = '../../img/menu.jpg'

const unmutedMusicImage = new Image()
unmutedMusicImage.src = '../../img/unmuted.jpg'



// const banana = new Image()
// banana.src = '../../img/characters/banana.png';

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
    downleft: playerDownLeftImage,
    dodgeright: playerDodgeRightImage,
    menu: menuImage
  },
  username: ""
})
// const playerwide = new Sprite({
//     position: {
//       x: canvas.width / 2 - 500 / 4 / 2,
//       y: canvas.height / 2 - 84 / 2
//     },
//     image: playerwidecanvas,
//     frames: {
//       max:10
//     },
//     sprites: {
//       dodgeright: playerDodgeRightImage
//     },
//     username: ""
//   })

const pauseMenu = new Sprite({
    position: {
        x: -2100,
        y: -20
    },
    image: menuImage
})

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

const unmutedMusic = new Sprite({
    position: {
        x: -2000,
        y: -20
    },
    image: unmutedMusicImage
})
unmutedMusic.draw()



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
    },
    e: {
        pressed: false
    },
    q: {
        pressed: false
    },
    z: {
        pressed: false
    }
}


const movables = [background, foreground, unmutedMusic]

let isPaused = false;

function pause() {
  if (!isPaused) {
    // create the image element
    var img = document.createElement("img");
    img.src = "../../img/menu.jpg";
    img.style.display = "block";
    img.style.margin = "auto";
    img.style.position = "absolute";
    img.style.top = "0";
    img.style.bottom = "0";
    img.style.left = "0";
    img.style.right = "0";

    // add the image to the body of the page
    document.body.appendChild(img);

    // add an event listener for the click event
    img.addEventListener("click", function() {
      // remove the image from the body of the page
      document.body.removeChild(img);

      // set the flag to false
      isPaused = false;
    });

    // set the flag to true
    isPaused = true;
  } else {
    // remove the image from the body of the page
    document.body.removeChild(img);

    // set the flag to false
    isPaused = false;
  }
}

// register the pause function as a keydown event handler for the q key
window.addEventListener("keydown", function(event) {
  if (event.code === "Escape") {
    pause();
  }
});


function animate() {
    window.requestAnimationFrame(animate)
    background.draw()
    player.draw()
    foreground.draw()
    unmutedMusic.draw()

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
        else if (keys.e.pressed && lastKey === 'e') {
            player.moving = true
            player.image = player.sprites.dodgeright
            movables.forEach((movable) => {
            movable.position.x -= 7})
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

        case 'e':
        keys.e.pressed = true
        lastKey = 'e'
        break

        case 'q':
        keys.q.pressed = true
        lastKey = 'q'
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

        case 'e':
        keys.e.pressed = false
        break

        case 'q':
        keys.q.pressed = false
        break
    }
})
