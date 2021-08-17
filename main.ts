game.startCountdown(10000)
for (let index = 0; index < 2; index++) {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Forever)
}
basic.forever(function () {
    basic.showNumber(40)
})
