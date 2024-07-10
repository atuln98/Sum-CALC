export function stringSum(inputStr : string ) : number{
    let res : number = 0
    if(!inputStr){
        return res
    }
    let inputArray : string[] = inputStr.split(",")
    inputArray.forEach((v)=>{
        res += parseInt(v)
    })
    return res
}