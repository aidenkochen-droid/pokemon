let pikachu: Sprite = null
animation.runImageAnimation(
pikachu,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f . . . . . . . . f . . . 
    . . . f . . . . . . . . f . . . 
    . . . 5 . . . . . . . . 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 f 1 5 5 1 f 5 5 . . . 
    . . . 5 5 1 f 5 5 f 1 5 5 . . . 
    . . . 2 2 5 5 5 5 5 5 2 2 . 5 5 
    . . . 2 2 5 5 2 2 2 5 2 2 5 5 . 
    . . . . . 5 5 5 5 5 5 5 e 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . . . 5 5 5 5 5 5 5 . . . . 
    . . . . . 5 5 . . . 5 5 . . . . 
    . . . . . 5 5 . . . 5 5 . . . . 
    `],
500,
false
)
scene.setBackgroundImage(assets.image`sunny day`)
music.play(music.createSoundEffect(WaveShape.Sine, 1501, 5000, 255, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.InBackground)
