function firstNonRepeatedChar(str) {
	let charCount = {}
	for(let char of str ){
		charCount[char] = (charCount[char] || 0) + 1
	}

	for(let char of str ){
		if(charCount[char] ===1)
	}
	return char
}
const input = prompt("krishna reddy");
alert(firstNonRepeatedChar(input)); 
