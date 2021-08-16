basic.forever(function () {
    basic.showNumber(0)
    basic.showLeds(`
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        # # # # .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        . # # # #
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # .
        # . # . #
        . # # # #
        # # # # .
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # . # . #
        # # # # .
        # . # . #
        . # # # #
        . # # . .
        `)
    basic.pause(1000)
    basic.showNumber(2)
    basic.pause(1000)
    basic.showLeds(`
        # # . # #
        . . # . #
        # . . # .
        . . # . #
        . . # # #
        `)
    basic.pause(1000)
    basic.showNumber(2 + 3)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # . # #
        . . # . #
        # . . # .
        . . . . #
        `)
    basic.pause(1000)
    basic.showNumber(2 + (3 + 1))
    basic.pause(1000)
    basic.showLeds(`
        # # . . .
        . . . # #
        # . . # #
        . . . . #
        # . . . .
        `)
    basic.pause(1000)
    basic.showNumber(2 + (3 + (1 + 1)))
    basic.pause(1000)
    basic.showLeds(`
        . # . . .
        . . . . .
        . . . . #
        . . . . #
        . . . . .
        `)
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # . # #
        # # . . #
        `)
    basic.pause(1000)
    basic.showNumber(2 + (3 + (1 + (1 + 3))))
    basic.pause(1000)
    basic.showLeds(`
        . # # # #
        # . # . #
        . # # . #
        # . # . #
        # # # # #
        `)
    basic.pause(1000)
    basic.showNumber(2 + (3 + (1 + (1 + (3 + 5 * (5 * 4))))))
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(1000)
    basic.showNumber(5 * (5 * (4 + (5 + 4))))
    basic.pause(1000)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showString("Game over")
})
