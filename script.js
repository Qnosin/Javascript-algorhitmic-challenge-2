let allPath = 1

const calculatePath = (n) =>{
    for(let x =0; x<n; x++){
        let newNum = allPath * x
        allPath += newNum;
    }
    return allPath
}
console.log(calculatePath(9)) // type a numbers of city