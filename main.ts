basic.forever(function () {
    music.playMelody("D C E C F E D C ", 274)
    basic.pause(100)
    music.playTone(131, music.beat(BeatFraction.Whole))
    music.playTone(139, music.beat(BeatFraction.Whole))
    music.playTone(147, music.beat(BeatFraction.Whole))
    music.playTone(156, music.beat(BeatFraction.Whole))
})
