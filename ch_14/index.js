// Initial State of the app
const DEFAULT = 0
let counter = DEFAULT


window.addEventListener('DOMContentLoaded', function() {
    
    const btns = $('.btn')
    const btnDecr = $('#btnDecr')
    const btnReset = $('#btnReset')
    const btnIncr = $('#btnIncr')

    /**
 * Listener
 */
// btns.forEach(function(btn) {
//     btn.addEventListener('click', function(e) {
//         if (e.currentTarget.id === 'btnDecr') {
//             onDecreaseClicked()   
//         } else if (e.currentTarget.id === 'btnIncr') {
//             onIncreaseClicked()
//         } else {
//             onResetClicked()
//         }
//     })
// })
    
    btnDecr.on('click', () => onDecreaseClicked())
    btnReset.on('click', () => onResetClicked())
    btnIncr.on('click', () => onIncreaseClicked())
})



// Handlers

/**
 * Actions taken after 'Decrease' button clicked.
 * Actions include decreasing the counter.
 */
function onDecreaseClicked() {
    decreaseCounter()
}

/**
 * Actions taken after 'Increase' button clicked.
 * Actions include increasing the counter.
 */
function onIncreaseClicked() {
    increaseCounter()
}

/**
 * Actions taken after 'Reset' button clicked.
 * Actions include reseting the counter.
 */
function onResetClicked() {
    resetCounter()
}

// Model

/**
 * Decreases the counter and syncs the UI
 */
function decreaseCounter() {
    counter-- 
    showCounter(counter)
}

/**
 * Increases the counter and syncs the UI
 */
function increaseCounter() {
    counter++ 
    showCounter(counter)
}

/**
 * Resets the counter and syncs the UI
 */
function resetCounter() {
    counter = DEFAULT 
    showCounter()
}

// View

/**
 * Assigns counter to the corresponsing UI element
 * and styles accordingly. 
 * @param {Number|String} counter - the counter value
 */
function showCounter() {
    const counterDOM = $('#counter')
    counterDOM.html (counter)
    styleCounter(counterDOM)
}

/**
 * Assigns a specific color style to the counter
 * value. Green, when positive value, red when
 * negative value, black when zero.
 * 
 * @param {Number} counter - the counter value 
 */
function styleCounter(counterDOM) {
   // if (counter > 0 ) {
        // counterDOM.style.color = 'green'
        counterDOM.toggleClass('green', counter > 0);
   // } else if (counter < 0) {
        // counterDOM.style.color = 'red'
        counterDOM.toggleClass('red', counter < 0);
   // } else {
        // counterDOM.style.color = 'black'
        counterDOM.toggleClass('black', counter === 0);
   // }
}


// simple

// const DEFAULT = 0
// let counter = DEFAULT

// btnDecrDOM.addEventListener('click', function() {
//     counter--
//     counterDOM.innerHTML = counter
// })

// btnResetDOM.addEventListener('click', function() {
//     counter = DEFAULT
//     counterDOM.innerHTML = counter
// })

// btnIncrDOM.addEventListener('click', function() {
//     counter++
//     counterDOM.innerHTML = counter
// })