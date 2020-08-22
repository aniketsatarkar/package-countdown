/**
 * Helper class to do a countdown seconds and trigger tick and compelted events.
 * Author: Aniket Aniket <aniketsatarkar9@gmail.com>
 */

export default class Countdown {
  interval = null // setInterval instance
  tick = null // tick event handler 
  completed = null // completed event handler
  countdown = 5 // countdown timer value in seconds

  // to initialize a class object with countdown seconds with tick and completed handlers
  // ex: const countdown = new Countdown(5, (count) => {}, () => { } )
  constructor (countdown = 5, tick = null, completed = null) {
    
    // set values
    this.countdown = countdown
    this.tick = tick
    this.completed = completed

    // start interval for 1 second.
    this.interval = setInterval(() => {
      this._triggerTick()
      if (this.countdown - 1 === 0) {
        this._triggerCompleted()
      }
      this.countdown -= 1
    }, 1000)
  }

  // method to reset the countdown timer
  clear() {
    if (this.interval !== undefined &&  this.interval !== null) {
      clearInterval(this.interval)
      this.countdown = 1
    }
  }

  // to trigger tick event if a delegate function is provided
  _triggerTick () {
    if (this.tick !== undefined && this.tick !== null) {
      this.tick(this.countdown)
    }
  }

  // to trigger completed event if a delegate function is provided.
  _triggerCompleted () {
    if (this.completed !== undefined && this.completed !== null) {
      this.completed()
    }
    this.clear()
  }

} // end of class
