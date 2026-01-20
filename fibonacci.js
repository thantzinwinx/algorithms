const lcs = (str1 , str2 ) => {
    if(str1.length === 0 || str2.length === 0) return 0;
    const m = str1.length;
    const n = str2.length;
    const dp = Array.from({length: m + 1}, () => Array(n + 1).fill(0));
    console.log("dp",dp);
    for(let i = 1; i <= m; i++){
        for(let j = 1; j <= n; j++){
            if(str1[i - 1] === str2[j - 1]){
                dp[i][j] = dp[i - 1][j - 1] + 1;
                console.log("dp[i][j]",dp[i][j]);
            }else{
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                console.log("dp[i][j]",dp[i][j]);
            }
        }
    }
    return dp[m][n];
}

console.log(lcs("AGGTAB", "GXTXAYB"));