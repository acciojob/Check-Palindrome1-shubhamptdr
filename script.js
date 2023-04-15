// complete the given function

function palindrome(str){
	const tmp = str.slice();
  console.log(tmp);
  const resverse = str.split("").reverse().join("");
  return tmp === resverse;
}
module.exports = palindrome
