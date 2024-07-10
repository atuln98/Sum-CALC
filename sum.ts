export function stringSum(inputStr : string ) : number{
    let res : number = 0
    if(!inputStr){
        return res
    }
    let inputArray : string[] = inputStr.split(",")
    inputArray.forEach((v)=>{
        if(isNaN(parseInt(v))){
            throw Error("this is not a valid input please check")
        }
        res += parseInt(v)
    })
    return res
}