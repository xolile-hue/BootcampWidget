function longestWord(sentence){
	var xam= sentence.split(" ")
	var length1=0
	var word =""
	for(var i=0;i<xam.length;i++){
		if (xam[i].length>=length1){
  			length1=xam[i].length
  			word = xam[i]
  			//console.log(xam[i].length)
  			//console.log(xam[i])
		}
	}
  console.log(word)
	return word
}

function shortestWord(sentence){
	var xam1= sentence.split(" ")
	//var length2=0
	var word1 =xam1[0]
	for(var i=0;i<xam1.length;i++){
		if (xam1[i].length<=word1.length){
  			//length2=xam1[i].length
  			word1 = xam1[i]
  			//console.log(xam1[i].length)
  			//console.log(xam1[i])
		}
	}
  console.log(word1)
	return word1
}

function wordLengths(sentence){
	var fff =sentence.split(" ");
  var tt = fff.map(a=>a.length);
  var total =0;
  //console.log(fff)
  //console.log(tt)
  for (var i=0; i<tt.length;i++){ 
    total+=tt[i]
  }
  console.log(total)
  return total
}