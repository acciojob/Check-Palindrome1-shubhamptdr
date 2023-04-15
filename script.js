// complete the given function

function palindrome(str){
	const tmp = str.toLowerCase().slice();
  console.log(tmp);
  const resverse = str.toLowerCase().split("").reverse().join("");
  return tmp === resverse;
}
module.exports = palindrome
