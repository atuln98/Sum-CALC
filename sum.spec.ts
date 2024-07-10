import {stringSum} from "./sum"
describe("Check Sum",()=>{
    describe(("initial cases"),()=>{
        test(("empty input"),()=>{
            expect(stringSum("")).toEqual(0)
        })
        test(("check if sum is correct"),()=>{
            expect(stringSum("1,2,3,4")).toEqual(10)
        })
        test(("check invalid input no NaN allowed"),()=>{
            expect(()=>stringSum("1,2,a3,4")).toThrow(Error("this is not a valid input please check"))
        })
    })
   
})