function toCase(text) {
  // write your code here
	if (text.length === 0) {
    return '-';
  }
const lowerCase = text.toLowerCase();
const upperCase = text.toUpperCase();
 return `${lowerCase}-${upperCase}`;
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
