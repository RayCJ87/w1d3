var userInput = process.argv[2];

var characterCount = {

};

var countLetters = function(phrase) {
	var lowerPhrase = phrase.toLowerCase();
	var len = lowerPhrase.length;
	for (var i = 0; i < len; i++) {
		if (lowerPhrase[i] === " ") {
			continue;
		}
		if (characterCount[lowerPhrase[i]]) {
			characterCount[lowerPhrase[i]] += 1;
		} else {
			characterCount[lowerPhrase[i]] = 1;
		}
	}
}

countLetters(userInput)
console.log(characterCount);