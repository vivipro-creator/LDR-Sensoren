//% color=#ffcc00 icon="\uf185" block="LDR Sensoren"
namespace LDRSensoren {

    //% blockId="ldr_read_right" block="LDR rechts (P1)" weight=90
    export function readRight(): number {
        return pins.analogReadPin(AnalogPin.P1);
    }

    //% blockId="ldr_read_left" block="LDR links (P0)" weight=80
    export function readLeft(): number {
        return pins.analogReadPin(AnalogPin.P0);
    }

    //% blockId="ldr_show_both" block="zeige beide LDR-Werte (rechts/links)" weight=70
    export function showBoth(): void {
        basic.showNumber(readRight());
        basic.pause(1000);
        basic.showNumber(readLeft());
        basic.pause(100);
    }
}
