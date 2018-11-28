var userInput = process.argv[2];

var characterCount = {};

var countLetters = function(phrase) {

  for (var i = 0; i < phrase.length; i++) {
    if (phrase[i] === " ") {
      continue;
    }
    if (characterCount[phrase[i]]) {
      characterCount[phrase[i]].push(i) ;

    } else {
      characterCount[phrase[i]] = [i];
    }
  }
  console.log(characterCount);
}

countLetters("Omgggggg ooo this is a nice place!");
