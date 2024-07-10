export function stringSum(inputStr : string ) : number{
    let res : number = 0
    if(!inputStr){
        return res
    }
    let inputArray : string[] = parseInput(inputStr)
    inputArray.forEach((v)=>{
        if(isNaN(parseInt(v))){
            throw Error("this is not a valid input please check")
        }
        res += parseInt(v)
    })
    return res
}

export function parseInput(inputStr : string) : string[]{
    let regexp : RegExp = new RegExp("\n|,","g")
    return inputStr.split(regexp)
}