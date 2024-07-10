export function stringSum(inputStr : string ) : number{
    let res : number = 0
    if(!inputStr){
        return res
    }
    let inputArray : string[] = parseInput(inputStr)
    let validatedInput : number[] = checkValidity(inputArray)
    validatedInput.forEach((v)=>{
        //should create an input filter function if there could be multiple filters
        //can use check validity for same
        //used check validity in next commit can use according to the requirement
        // can also compute sum in single traversal
        res += v
    })
    return res
}

export function checkValidity(inputArray : string[]) : number[]{
    let positiveNumbers: number[]=[]
    let negativeNumbers: number[]=[]
    inputArray.forEach((i)=>{
        let value : number = parseInt(i)
        if(isNaN(value)){
            throw Error("this is not a valid input please check")
        }
        if(parseInt(i)<0){
            negativeNumbers.push(parseInt(i))
        }else if(parseInt(i)<1000){
            positiveNumbers.push(value)
        }
    })
    if(negativeNumbers.length>0){
        throw Error("negative numbers not allowed " + negativeNumbers.join(','))
    }
    return positiveNumbers;
}

export function parseInput(inputStr : string) : string[]{
    let regExpa : string[]=["\n",","]
    if(hascustomdelimeter(inputStr)){
        let splitString=inputStr.indexOf("\n")
        regExpa.push(...getDelimeters(inputStr.slice(2,splitString)))
        inputStr = inputStr.slice(splitString+1)
    }
    let regExps : string = ""
    regExps=regExpa.join('|');
    let regexp : RegExp = new RegExp(regExps,"g")
    return inputStr.split(regexp)
}

export function getDelimeters(delimeters : string):string []{
    let res : string[]=[]
    let regCompatiblestr : string =""
    if(delimeters.charAt(0)=='['){
        delimeters = delimeters.substring(1,delimeters.length-1)
        let regexp : RegExp = new RegExp("\\]\\[","g")
        let delimetersarray : string[]  = delimeters.split(regexp)
        delimetersarray.forEach((v:string)=>{
            regCompatiblestr = getregchar(v)
            res.push(regCompatiblestr)
        })
    }else{
        regCompatiblestr = getregchar(delimeters)
        res.push(regCompatiblestr)
    }
    return res
}

function getregchar(character:string):string{
    let specialchars:string[] = '.,+,*,?,^,$,(,),[,],{,},|'.trim().split(',')
    if(character==''){
        return('\\\\'+character)
    }else if(specialchars.includes(character)){
            return('\\'+character)
    }else{
        return(character)
    }
}

export function hascustomdelimeter(inputStr : string) : boolean {
    if(inputStr.slice(0,2)=='//'){
        return true;
    }
    return false;
}