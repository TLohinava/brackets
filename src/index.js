module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(item => item.join(''));
  if(str.length%2 === 0 ) {
    for (let i = str.length-1; i >=0; i--) {
      for (let j = 0; j < arr.length; j++) {
        if(str.includes(arr[j])) {
          str = str.replaceAll(arr[j], "");
        }
      } 
    }
  } return str.length === 0;
}