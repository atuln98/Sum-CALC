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
    let regExpa=["\n",","]
    let regExps : string = ""
    if(hascustomdelimeter(inputStr)){
        let inputstart : number = inputStr.indexOf("\n")
        inputstart+=1
        regExpa.push(inputStr[2])
        inputStr = inputStr.slice(inputstart)
    }
    regExps=regExpa.join('|');
    let regexp : RegExp = new RegExp(regExps,"g")
    return inputStr.split(regexp)
}

export function hascustomdelimeter(inputStr : string) : boolean {
    if(inputStr.slice(0,2)=='//'){
        return true;
    }
    return false;
}