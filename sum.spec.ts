import {stringSum,parseInput,hascustomdelimeter,checkValidityAndFilter,getregstring} from "./sum"
describe("Check Sum",()=>{
    describe(("initial cases"),()=>{
        test(("empty input"),()=>{
            expect(stringSum("")).toEqual(0)
        })
        test(("empty input as all greater than 1000"),()=>{
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
        test(("delimeter of varied length"),()=>{
            expect(stringSum("//***\n1***2***3")).toEqual(6)
        })    
    })
    describe(" validate input ",()=>{
        test(" check for negative numbers",()=>{
            expect(()=>stringSum("//;\n1;2,-3,-5")).toThrow(new Error('negative numbers not allowed -3,-5'))
        })

    })
    describe(" ignore greater than 1000 ",()=>{
        test("adding it should ignore 1002,1005 and return 8",()=>{
            expect(stringSum("//;\n1002;1005,3,5")).toEqual(8)
        })
    })
    describe("multiple custom delimeter",()=>{
        test(("delimeter with special char *"),()=>{
            expect(stringSum("//[*][%]\n1*2%3")).toEqual(6)
        })
        test(("delimeter with \\"),()=>{
                expect(stringSum("//[*][%][\\]\n1*2%3\\4")).toEqual(10)
        })
        test(("delimeter of varied length"),()=>{
            expect(stringSum("//[***][\\]\n1***2\\3")).toEqual(6)
        })     
    })
})

describe(("input validator"),()=>{
    test(("should throw error"),()=>{
        expect(()=>checkValidityAndFilter(["1","2","-3","-5"])).toThrow(new Error('negative numbers not allowed -3,-5'))
    })
    test(("should return all numbers ignoring greater than 1000"),()=>{
        expect(checkValidityAndFilter(["1001","10002","3","5","6"])).toEqual([3,5,6])
    })
    test(("should throw error"),()=>{
        expect(()=>checkValidityAndFilter(["1001","1002","-3","-5"])).toThrow(new Error('negative numbers not allowed -3,-5'))
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
    describe("multiple custom delimeter",()=>{
        test(("delimeter with special char *"),()=>{
            expect(parseInput("//[*][%]\n1*2%3")).toEqual(["1","2","3"])
        })
        test(("delimeter with \\"),()=>{
                expect(parseInput("//[*][%][\\]\n1*2%3\\4")).toEqual(["1","2","3","4"])
        })
        test(("delimeter of varied length"),()=>{
            expect(parseInput("//[***][\\]\n1***2\\3")).toEqual(["1","2","3"])
        })     
    })
})

describe(("check if custom delimeter check works"),()=>{
    test(("input has custom delimeter should return true"),()=>{
        expect(hascustomdelimeter("//;\n1;2")).toEqual(true)
    })
    test(("input doesn't have custom delimeter should return false"),()=>{
        expect(hascustomdelimeter("1,2,3")).toEqual(false)
    })
    test(("delimeter with \\"),()=>{
        expect(hascustomdelimeter(String.raw`//[*][%][\]\n1*2%3\4`)).toEqual(true)
})
test(("delimeter of varied length"),()=>{
    expect(hascustomdelimeter(String.raw`//[***][\\]\n1***2\\3`)).toEqual(true)
})
})

describe(("Tests for get regstring"),()=>{
    test(("input with backslash"),()=>{
        expect(getregstring("\\")).toEqual("\\\\")
    })
    test(("input with *"),()=>{
        expect(getregstring("***")).toEqual(String.raw`\*\*\*`)
    })
})