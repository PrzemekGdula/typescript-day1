let zrobione: boolean = true
let liczba: number = 123
let text: string = 'To jest test'
let wnioskowanie = 'Test inferencji'
//wnioskowanie = 123

const tablicaLiczb: number[] = [1, 2, 3]
const tablicaLiczb2: Array<number> = tablicaLiczb

const tablicaStringow: Array<string> = ['ok', 'test']
const TablicaStringow2: string[] = tablicaStringow

let krotka: [number, boolean] = [1, false];
// krotka = ['asd', 'asd']
let krotka1: [string, boolean[]] = ['test', [true, false]]
let krotka3: [[number, boolean], [string, boolean[]]] = [krotka, krotka1]

krotka3 = undefined

let miesiacRezerwacji: string = 'lipiec'
miesiacRezerwacji = 'june'

if (miesiacRezerwacji === 'lipiec') {
    //fuckup
}

enum Miesiac { STYCZEN, LUTY, MARZEC, KWIECIEN, MAJ, CZERWIEC, LIPIEC, SIERPIEN, WRZESIEN, PAZDZIERNIK, LISTOPAD }

let newMiesiacRezerwacji: Miesiac = Miesiac.LIPIEC
newMiesiacRezerwacji = null

if (newMiesiacRezerwacji === Miesiac.LIPIEC) {
    console.log('sukces')
}

let jeszczeNieWiemy: any = {}
jeszczeNieWiemy = 123
jeszczeNieWiemy = krotka3
jeszczeNieWiemy = Miesiac.KWIECIEN

// function test(a:number, b:Miesiac): void {
//     return a + b;
// }

function testNever(): never {
    throw new Error()
}

let mojObiekt: object = undefined

// mojObiekt = 123