function serieFibonacci(num){
    const array = [0,1]    ;
    for(let i = 2; i<=num;i++){
        array[i] = array[i-1] + array[i-2];
    }

    return array[num];
}
console.log(serieFibonacci(10));