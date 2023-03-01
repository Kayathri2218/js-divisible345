//3. Design a method to check how many numbers are divisible by 4,3and 5 in the array. 

let d = [45, 60, 120, 39, 180];
let count = 0;
for(let i = 0; i < d.length; i++) {
    if (d[i]%60==0) {
        count++;
    }
}
console.log(count);