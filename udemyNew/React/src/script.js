/* eslint-disable no-unused-vars */
function button() {
    return 'button'
}

class Slider {
    constructor(width, height, count) {
        this.width = width
        this.height = height
        this.count = count
    }
    nextSlide() {
        console.log('Moving forward');
    }
    prevSide() {
        console.log('Moving back');
    }
    whoAmI() {
        console.log(this.width, this.height, this.count);
    }
}


class AutoSlider extends Slider {
    constructor(width, height, count, auto) {
        super(width, height, count)
        this.auto = auto
    }
    play() {
        console.log(`${this.auto}`);
    }
}

const slider = new AutoSlider(600, 400, 5, true)
slider.play()

// export { button, Slider }