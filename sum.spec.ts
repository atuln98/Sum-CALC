import {stringSum,parseInput,hascustomdelimeter} from "./sum"
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
    describe(("multiple delimeters"),()=>{
        test(" new line ",()=>{
            expect(stringSum("1\n1\n2\n4")).toEqual(8)
        })
        test(" new line with csv ",()=>{
            expect(stringSum("1,1\n2,4")).toEqual(8)
        })
        
    })
    describe(" custom delimeter ",()=>{
        test(" check ",()=>{
            expect(stringSum("//;\n1;2")).toEqual(3)
        })
    })
    describe(" validate input ",()=>{
        test(" check for negative numbers",()=>{
            expect(()=>stringSum("//;\n1;2,-3,-5")).toThrow(new Error('negative numbers not allowed -3,-5'))
        })

    })
})

describe(("input parser"),()=>{
    describe(("initial cases"),()=>{
            test(("empty input"),()=>{
                expect(parseInput("")).toEqual([""])
            })
            test(("csv input"),()=>{
                expect(parseInput("1,2,3,4")).toEqual(["1","2","3","4"])
            })
    })
    describe(("multiple delimeter"),()=>{
        test(" new line ",()=>{
            expect(parseInput("1\n1\n2\n4")).toEqual(["1","1","2","4"])
        })
        test(" new line with csv ",()=>{
            expect(parseInput("1,1\n2,4")).toEqual(["1","1","2","4"])
        })
        test(" custom delimeter ",()=>{
            expect(parseInput("//;\n1;2")).toEqual(["1","2"])
        })
    })
})

describe(("check if delimeter check works"),()=>{
    test(("input has custom delimeter should return true"),()=>{
        expect(hascustomdelimeter("//;\n1;2")).toEqual(true)
    })
    test(("input doesn't have custom delimeter should return false"),()=>{
        expect(hascustomdelimeter("1,2,3")).toEqual(false)
    })
})