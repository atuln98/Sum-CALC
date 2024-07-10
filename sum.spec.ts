import {stringSum} from "./sum"
describe("Check Sum",()=>{
    test(("initial input"),()=>{
        expect(stringSum("")).toEqual(0)
    })
})