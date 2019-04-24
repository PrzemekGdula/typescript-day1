let mojObiekt: object = undefined
mojObiekt = {}
// mojObiekt = 123

const func = (a: number, b: number = 2, c?: number): number => {
    if (c === undefined) {
        c = 0
    }
    return a + b + c
}
let result: string
// const v = func();
// result = func(2)
const value = func(2)
// const v1 = func("abc")
const value2 = func(2, 3)
const value3 = func(2, 3, 4)

enum Weekend { PIATEK, SOBOTA, NIEDZIELA }
const dzien: Weekend = Weekend.PIATEK
const krotka55: [number, boolean] = [1, true]

function func1(krotka: [number, boolean], dzien: Weekend, n: number = 20, p1?: boolean, p2?: boolean): Array<Weekend> {
    return [Weekend.PIATEK, Weekend.NIEDZIELA];
}

const func2 = (krotka: [number, boolean], dzien: Weekend, n: number = 20, p1?: boolean, p2?: boolean): Weekend[] => {
    return null
}

const res1 = func1(krotka55, Weekend.NIEDZIELA);
const res2 = func1(krotka55, Weekend.NIEDZIELA, 30);
const res3 = func1(krotka55, Weekend.NIEDZIELA, 30, false);
const res4 = func1(krotka55, Weekend.NIEDZIELA, 30, false, false);

interface NaszTyp {
    imie: string;
    wiek: string;
    dodatkowe?: boolean;
}

interface NowyTyp {
    uczen: NaszTyp;
    liczbaObecnosci: number;
}

const wpisWDzienniku: NowyTyp = {
    uczen: {
        wiek: "18",
        imie: "Łukasz"
    },
    liczbaObecnosci: 20,
}
wpisWDzienniku["liczbaUwag"] = 20;

function testowaFunkcja(param1: NaszTyp) {
    console.log(param1.wiek)
    console.log(param1.imie)
    console.log(param1.dodatkowe)
}

let testowyObiekt = {
    imie: "Łukasz",
    wiek: "20"
}

testowaFunkcja(testowyObiekt)