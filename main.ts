function girar90derecha () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(220)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 20)
    basic.pause(800)
    maqueen.motorStop(maqueen.Motors.All)
}
function girar90izquierda () {
    maqueen.motorStop(maqueen.Motors.All)
    basic.pause(220)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 20)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 20)
    basic.pause(800)
    maqueen.motorStop(maqueen.Motors.All)
}
let ultimogiro = 0
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 4) {
        maqueen.motorStop(maqueen.Motors.All)
        girar90izquierda()
        if (maqueen.Ultrasonic(PingUnit.Centimeters) == 4) {
            maqueen.motorStop(maqueen.Motors.All)
            girar90derecha()
            if (maqueen.Ultrasonic(PingUnit.Centimeters) == 4) {
                maqueen.motorStop(maqueen.Motors.All)
                girar90derecha()
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
