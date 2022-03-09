function girar90derecha () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar90izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 100)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 100)
    basic.pause(260)
    maqueen.motorStop(maqueen.Motors.All)
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 15) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90izquierda()
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
        basic.pause(260)
        girar90derecha()
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
