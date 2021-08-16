basic.showNumber(3105897)
game.startCountdown(600000)
basic.forever(function () {
    basic.showNumber(3105897)
    basic.showLeds(`
        # # # # #
        # # # # #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(3105897 - 82348)
    basic.showLeds(`
        # # . . #
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showNumber(3105897 - (82348 + 82340))
    basic.showLeds(`
        # # # # #
        # # # # #
        # # . . #
        # . . . #
        . . . . .
        `)
    basic.showNumber(3105889 - 4e+40)
    basic.showString("Game over")
})
