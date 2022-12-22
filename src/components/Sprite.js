import React from 'react';

 export default function Sprite({canvas, position, velocity, image, sprites, username, frames = {max: 1}})  {

    constructor({canvas, position, velocity, image, sprites, username, frames = {max: 1}}) {
        super();
        this.position = position
        this.image = image
        this.sprites = sprites
        this.frames = {...frames, val: 0, elapsed: 0}
        this.username = username
        this.canvas = canvas
        this.moving = false
    }

    // this.image.onload = () => {
    //     this.width = this.image.width / this.frames.max
    //     this.height = this.image.height
    // }
    // render() {

        const c = this.canvas.getContext('2d')
        c.drawImage(
            this.image,
            this.frames.val * this.width,
            0,
            this.image.width / this.frames.max,
            this.image.height,
            this.position.x,
            this.position.y,
            this.image.width / this.frames.max,
            this.image.height
        )
        if (!this.moving) return
        if (this.frames.max > 1) {
            this.frames.elapsed++
        }

        if (this.frames.elapsed % 5 === 0){
            if (this.frames.val < this.frames.max - 1) this.frames.val++
            else this.frames.val = 0
        }
        return <div></div>
    }

// }
