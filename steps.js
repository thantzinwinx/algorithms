function step(n){
    const stepsArr = new Array(n);
    for (let i =0; i < n; i ++){
        stepsArr[i] = "#"
        console.log(stepsArr.join(""))
    }
}

step(6)