input.onGesture(Gesture.Shake, function () {
    BSS = randint(1, 3)
    if (BSS == 1) {
        basic.showIcon(IconNames.Square)
    } else if (BSS == 2) {
        basic.showIcon(IconNames.Target)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
let BSS = 0
basic.showString("BSS")
basic.showIcon(IconNames.Square)
basic.showIcon(IconNames.Target)
basic.showIcon(IconNames.Scissors)
basic.clearScreen()
basic.forever(function () {
	
})
