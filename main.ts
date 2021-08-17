input.onButtonPressed(Button.A, function () {
    game.pause()
    basic.clearScreen()
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index < 1; index++) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    }
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    game.resume()
    basic.showArrow(ArrowNames.South)
})
led.setBrightness(255)
game.startCountdown(10000)
for (let index = 0; index < 40; index++) {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
}
basic.showArrow(ArrowNames.East)
basic.forever(function () {
    radio.setGroup(255)
    basic.showNumber(40)
})
