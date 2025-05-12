//zad 3
function printNumbers(nr){
  let res = "";
  for(let i = 0; i<=nr; i += 1){
    res += i;
    if(i != nr){
      res += " ";
    }
  }
  return res;
}
console.log(printNumbers(5));


//zad 4
function generateRandom(min, max){
  return Math.floor(Math.random()*(max - min + 1) + min);
}
let counter = 0;
for(let i=0; i<10; i+=1){
  if (generateRandom(1, 20) > 10){
    counter += 1;
  } 
}
if(counter == 5){
  console.log("udalo sie");
}


//zad 5
function checkPalindrom(txt){
  txt = txt.toLowerCase().trim(); 
  let res = txt.split("").reverse().join("");
  return res == txt;
}
console.log(checkPalindrom("abcba"));
console.log(checkPalindrom("abca"));


//zad 6
function random(max){
  return Math.floor(Math.random()*(max + 1));
}
let tab = [];
for (let i = 0; i < 20; i += 1) {
  tab.push(Math.floor(Math.random() * 100));
}
tab.sort((a, b) => a - b);
let sum = 0;
tab.forEach(num => {
  sum += num;
});
console.log(sum / tab.length); 


//zad 7
function deleteDub(nums) {
  if (nums.length === 0) return 0;
  let k = 1; 
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  for (let i = k; i < nums.length; i++) {
    nums[i] = "_";
  }
  return k;
}
let nums = [1, 1, 2];
let res = deleteDub(nums);
console.log(res);  
console.log(nums);  


//zad 8
function sameSubstr(strs){
  	if(strs.length === 0) return "";
  	let pref = strs[0]; //bierzemy pierwszy element jako prefiks
  	//iterujemy po wszystkich elementach
  	for(let i=1; i<strs.length; i++){
      while(strs[i].indexOf(pref) !== 0){
        pref = pref.slice(0,-1); //jesli prefix nie pasuje to go skracamy
        if(pref == "") return "";
      }
    }
    return pref;
}
let s1 = ["flower","flow","flight"]
console.log(sameSubstr(s1));
let s2 = ["dog","racecar","car"];
console.log(sameSubstr(s2));


//zad 9
function rzymskie(n){
   let dictionary = { "I": 1, "IV": 4, "V": 5, "IX": 9,"X": 10,"XL": 40,"L": 50,
  	"XC": 90, "C": 100, "CD": 400, "D": 500, "CM": 900, "M": 1000};
   let res = 0;
   let i = 0;
   while(i < n.length){
     if(i+1 < n.length && dictionary[n.substring(i, i+2)]){
        res += dictionary[n.substring(i, i+2)];
        i += 2;
     }else{
        res += dictionary[n[i]];
        i += 1;
     }
   }
   return res;
}
console.log(rzymskie("XIV"));     // 14
console.log(rzymskie("MCMXCIV")); // 1994
console.log(rzymskie("III"));     // 3


//zad 10
const arr = [
	[ 66,  97, 114, 100,   4,   2, 110,  11,   1,   6,  20, ],
	[ 99,   3,  10, 122,  76, 101, 111,   3,  32, 100,   0, ],
	[  6,  22,   1, 111,  32,  10, 110,   7,  97,  97,  67, ],
	[ 60,  97, 116,  32, 100,  23,  97, 114, 100,  32,  34, ],
	[  2, 106,  15,   6, 111,  56,  80,  20,  10,  86,  10, ],
	[ 20, 110,  121, 32, 107,  55,  50,  99, 110, 105,   8, ],
	[ 12,   9,  22, 102,  66, 100,  12, 105,  50,  76, 110, ],
	[ 42,  81, 123,  92,  26,  98,  20,   1,  20,  11,  10, ],
]
const str = "rrrdddllddrrruuuurrddrruurddddlld";
function decode(arr, str){
  let x = 0;
  let y = 0;
  let res = String.fromCharCode(arr[x][y]);
  for(let c of str){
    switch(c) {
      case "r":
        y++;
        break;
      case "l":
        y--;
        break;
      case "d":
        x++;
        break;
      case "u":
        x--;
        break;
    }
    res += String.fromCharCode(arr[x][y]);
  }
  return res;
}

console.log(decode(arr, str));


//zad 11
function lastLen(word){
  let i = word.length-1;
  while(word[i] == " "){
    i--;
  }
  let k = i;
  while(i >= 0){
    if(word[i] == " "){
      break;
    }
    i--;
  }
  return word.substr(i, k);
}
console.log(lastLen("   fly me   to   the moon "));


//zad 12
function schody(n){
  let dp = [];
  dp[0] = 1;
  dp[1] = 1;
  for(let i=2; i<=n; i++){
    dp[i] = dp[i-1] + dp[i-2];
  }
  return dp[n];
}
console.log(schody(5));