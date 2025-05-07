const srt : string = "Abrar"
// primitive data types
// ss bb u nn = string, symbol, bigint, boolean, number, undefine
// non-primitive data types
// array, object

let anyVar : number = 1;

let arr : number[] = [1,2,3]

export type TObj = {
    name: string;
    age: number;
    education?: {
        institute: "University" | "College" | "Diploma" | "School";
        level: string;
    }
}
export const obj : TObj = {
    name: "Munsur",
    age: 30,
    education: {
        institute: "College",
        level: "Undergrad",
    }
}