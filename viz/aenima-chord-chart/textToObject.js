var fs = require('fs'),
    dirName = process.argv[2],
    files,
    file,
    fPath,
    lyrics = [],
    wordArr = [];

if (!fs.existsSync(dirName)) {
  return console.log('You must pass a directory');
}

files = fs.readdirSync(dirName);
wordArr = buildWordArray(files);
lyrics = formatLyrics(buildLyrics(wordArr));
fs.writeFileSync('lyrics.json', JSON.stringify(lyrics));

function buildWordArray(files) {
  var tmpArr = [];

  files.forEach(function(file, idx) {
    file = fs.readFileSync(dirName+'/'+file, 'utf8')
              .toLowerCase()
              .replace(/\.|\,/g, '')
              .replace(/\r|\n/g, ' ')
              .replace(/\[.*\]/);

    tmpArr = file.split(/\s+/);
  });

  return tmpArr;
}

function buildLyrics(wordArr) {
  var indexByWord = {},
      wordLen = wordArr.length,
      nextWord;

  wordArr.forEach(function(word, idx) {
    if (!indexByWord[word]) {
      indexByWord[word] = {
        name: word,
        count: 0,
        followedBy: []
      };
    }

    indexByWord[word].count++;
    if(idx <= wordLen) {
      nextWord = wordArr[idx+1];
      if(indexByWord[word].followedBy.indexOf(nextWord) == -1) {
        indexByWord[word].followedBy.push(nextWord);
      }
    }
  });

  return indexByWord;
}

function formatLyrics(ob) {
  var tmpArr = [];
  for(var key in ob) {
    if(ob.hasOwnProperty(key)) {
      tmpArr.push(ob[key]);
    }
  }
  return tmpArr;
}