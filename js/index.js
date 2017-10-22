//Global variable
var theURL =  "http://twitter.com/share?text=";

function generateQuote() {
 var quote;
 var author;
 var character;
 var getQuote = Math.floor(Math.random() * 20);
  
switch(getQuote) {
  case 1:
    quote = "\"It's a beautiful day outside. Birds are singing, flowers are blooming. On days like this...kids like you...SHOULD BE BURNING IN HELL.\"" ;
    author = "- Sans";
    character = "img/san.gif";
    break;
  
  case 2:
    quote = "\"Now your sanity and mine can die TOGETHER!\"";
    author = "- Undyne";
    character = "img/undyne.gif";
    break;
    
  case 3:
    quote = "\"I'M UNDYNE AND I'M PILING ON THE SMOOCHES!\"";
    author = "- Alphys";
    character = "img/alphys.gif";
    break;
    
  case 4:
    quote = "\"I should have killed you when I had the chance.\"";
    author = "- Alphys";
    character = "img/alphys.gif";
    break;
    
  case 5:
    quote = "\"YOU! WILL! NEVER! SPARE ME!\"";
    author = "- Undyne";
    character = "img/undyne2.gif";
    break;
    
  case 6:
    quote = "\"I can't go to hell. I'm already out of vacation days.\"";
    author = "- Burgerpants";
    character = "img/burgerpants.png";
    break;
    
  case 7:
    quote = "\"Our family is bigger than evah. Now that my wife. Is fused with sixteen othah people.\"";
    author = "- Snowdrake's Father";
    character = "img/Snowdrake.gif";
    break;
    
  case 8:
    quote = "\"In this world, it's kill or be killed.\"";
    author = "- Flowey";
    character = "img/flowey.gif";
    break;
    
  case 9:
    quote = "\"Prove to me that you are strong enough to survive.\"";
    author = "- Toriel";
    character = "img/Toriel.png";
    break;
    
  case 10:
    quote = "\"Get Dunked On!\"";
    author = "- Sans";
    character = "img/sans2.gif";
    break;
    
  case 11:
    quote = "\"You're a wimpy loser with a big heart!\"";
    author = "- Undyne";
    character = "img/undyne3.gif";
    break;
    
  case 12:
    quote = "\"I like to just lie on the floor and feel like garbage\"";
    author = "- Napstablook";
    character = "img/napstablook.gif";
    break;
    
  case 13:
    quote = "\"There's a burning feeling inside me. A feeling that WON'T let me die.\"";
    author = "- Undyne";
    character = "img/undyne.gif";
    break;
    
  case 14:
    quote = "\"Who needs arms with LEGS like these?!\"";
    author = "- Mettaton";
    character = "img/metatton.gif";
    break;
    
  case 15:
    quote = "\"It's me, SASS! YOU WANNA HAVE A BAD TOM?!\"";
    author = "- Sans";
    character = "img/sans2.gif";
    break;
    
  case 16:
    quote = "\"Mew Mew Kissy Cutie 2 is neither kissy nor cutie. It's trash!\"";
    author = "- Alphys";
    character = "img/alphys.gif";
    break;
    
  case 17:
    quote = "\"You're gonna have a bad time.\"";
    author = "- Sans";
    character = "img/san.gif";
    break;
    
  case 18:
    quote = "\"DARK DARKER YET DARKER THE DARKNESS KEEPS GROWING THE SHADOWS CUTTING DEEPER\"";
    author = "- Gaster";
    character = "img/gaster.jpg";
    break;
    
  case 19:
    quote = "\"Who does Alphys have a crush on?\"";
    author = "- Mettaton";
    character = "img/mettaton2.gif";
    break;
    
  default:
    quote = "\"OHHHHHHHH, YESSSSSSSS!\"";
    author = "- Mettaton";
    character = "img/metatton.gif";
    break;
}

//Show on h2 and h3
document.getElementById("quote").innerHTML = quote;
document.getElementById("author").innerHTML = author;
document.getElementById("character").src = character;
}


//Share on twitter the quote
function share() {
  document.getElementById("twitter-share-button").href = theURL + document.getElementById("quote").innerHTML + " " +  document.getElementById("author").innerHTML;
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggleMenu() {
  
 document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};