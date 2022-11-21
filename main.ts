input.onButtonPressed(Button.A, function () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 225 * 10)
    music.playMelody("C5 B A G F E D C ", 120)
    for (let index = 0; index < 100; index++) {
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(370, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(294, music.beat(BeatFraction.Whole))
        music.playTone(277, music.beat(BeatFraction.Whole))
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.B, function () {
    DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eBackward, 100)
})
function Line_patrol () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0)) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 100)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0)) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 40)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 0)) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 0)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 100)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1)) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 40)
    }
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1)) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 100)
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 0)
    }
}
for (let index = 0; index < 10; index++) {
    basic.showString("PRESS A ")
    basic.showArrow(ArrowNames.West)
}
basic.forever(function () {
    if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
        DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eAllMotor, MyEnumDir.eForward, 60)
    } else {
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eR1) == 1) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 160)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 30)
        }
        if (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 1 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eLeftMotor, MyEnumDir.eForward, 30)
            DFRobotMaqueenPlusV2.controlMotor(MyEnumMotor.eRightMotor, MyEnumDir.eForward, 160)
        }
    }
    while (DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0 || DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eM) == 0 && DFRobotMaqueenPlusV2.readLineSensorState(MyEnumLineSensor.eL1) == 0) {
        Line_patrol()
    }
})
