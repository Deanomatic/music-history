var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";
var final = "";
songs.push("Hotel Califoria by the Eagles on album Hotel Califoria");//pushing Hotel California to the bottom.
console.log("songs", songs);

songs.unshift("Testify by NEEDTOBREATHE on album HARD LOVE");// unshifting Testify to the top
console.log("songs", songs);

var main = document.getElementById("main");
	//i is a place holder
	//length of the songs array //i++ is adding one every time
for (var i = 0; i < songs.length; i++) {
	var a = songs[i].replace(/>/g, "-");
	var removeChar = /\*|\(|!|@/g;//this is getting rid of all the junk. the backslashes in purple make it possible to write that without making it a comment.
	var outPut = a.replace(removeChar, "");
	final += outPut + "<br>";
	console.log("songs", final);
}

var makeTag = document.createElement("ul");
console.log(makeTag);


main.innerHTML = final;
// document.write(songName1);

// Each student must add one song to the beginning and the end of the array.
// Loop over the array and remove any words or characters that obviously don't belong.
// Students must find and replace the > character in each item with a - character.
// Must add each string to the DOM in index.html in the main content area.

