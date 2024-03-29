const filePath =
  process.platform === 'linux' ? '/dev/stdin' : 'b/17291/example.txt';

const input = +require('fs').readFileSync(filePath).toString().trim();

let dp = [null, 1, 2, 4, 7];

for (let i = 5; i <= input; i++) {
  if (i % 2 === 0) dp[i] = dp[i - 1] * 2 - dp[i - 4] - dp[i - 5];
  else dp[i] = dp[i - 1] * 2;
}

console.log(dp[input]);
