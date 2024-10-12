basic.forever(function () {
    serial.writeNumber(input.lightLevel())
    serial.writeLine(serial.readLine())
})
