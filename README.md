## @aniket/countdown
<br>
A JS class to countdown seconds and trigger events on tick and completed
<br>
<br>


### Install
```
npm i @aniket/countdown
```

### Example


```js
import Countdown from '@aniket/countdown'

function tick (count) {
  console.log('COUNT : ', count)
}

function completed () {
  console.log('COMPLETED!')
}

// create a countdown timer for 5 seconds
let timer = new Countdown(5, tick, completed)
```
