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
        if (ultimogiro == 0) {
            girar90izquierda()
            ultimogiro = 1
        } else {
            girar90derecha()
            ultimogiro = 0
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 20)
    }
})
