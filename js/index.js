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
    character = "https://media.tenor.co/images/de3cc7fc4ff265ed1f2883581f5a8c98/raw";
    break;
  
  case 2:
    quote = "\"Now your sanity and mine can die TOGETHER!\"";
    author = "- Undyne";
    character = "http://vignette3.wikia.nocookie.net/undertale/images/9/99/Undyne_(genocide_armor).gif/revision/20151219024306";
    break;
    
  case 3:
    quote = "\"I'M UNDYNE AND I'M PILING ON THE SMOOCHES!\"";
    author = "- Alphys";
    character = "http://vignette1.wikia.nocookie.net/vsbattles/images/c/cc/Alphys_embarrassed.gif/revision/latest?cb=20160210092442";
    break;
    
  case 4:
    quote = "\"I should have killed you when I had the chance.\"";
    author = "- Alphys";
    character = "http://vignette1.wikia.nocookie.net/vsbattles/images/c/cc/Alphys_embarrassed.gif/revision/latest?cb=20160210092442";
    break;
    
  case 5:
    quote = "\"YOU! WILL! NEVER! SPARE ME!\"";
    author = "- Undyne";
    character = "http://vignette2.wikia.nocookie.net/undertale/images/e/ed/Undyne.gif/revision/latest?cb=20151206073203";
    break;
    
  case 6:
    quote = "\"I can't go to hell. I'm already out of vacation days.\"";
    author = "- Burgerpants"
    character = "https://pbs.twimg.com/media/CRGLYooUAAALiGt.png";
    break;
    
  case 7:
    quote = "\"Our family is bigger than evah. Now that my wife. Is fused with sixteen othah people.\"";
    author = "- Snowdrake's Father";
    character = "http://vignette4.wikia.nocookie.net/undertale/images/f/f5/Snowdrake.gif/revision/latest?cb=20151218012359";
    break;
    
  case 8:
    quote = "\"In this world, it's kill or be killed.\"";
    author = "- Flowey";
    character = "https://img.fireden.net/vg/image/1444/32/1444329515579.gif";
    break;
    
  case 9:
    quote = "\"Prove to me that you are strong enough to survive.\"";
    author = "- Toriel";
    character = "http://vignette2.wikia.nocookie.net/undertale/images/f/f8/TorielBattleHurt.png/revision/latest?cb=20160531102626";
    break;
    
  case 10:
    quote = "\"Get Dunked On!\"";
    author = "- Sans";
    character = "https://i.imgur.com/Id5IaEp.gif";
    break;
    
  case 11:
    quote = "\"You're a wimpy loser with a big heart!\"";
    author = "- Undyne";
    character = "http://vignette2.wikia.nocookie.net/undertale/images/9/98/Undynewithoutarmor.gif/revision/latest?cb=20160216032300";
    break;
    
  case 12:
    quote = "\"I like to just lie on the floor and feel like garbage\"";
    author = "- Napstablook";
    character = "https://67.media.tumblr.com/026d8c27cd8e4c589bfaba180b233d41/tumblr_nw5i6uiY7d1r9xrggo3_400.gif";
    break;
    
  case 13:
    quote = "\"There's a burning feeling inside me. A feeling that WON'T let me die.\"";
    author = "- Undyne";
    character = "http://vignette3.wikia.nocookie.net/undertale/images/9/99/Undyne_(genocide_armor).gif/revision/20151219024306";
    break;
    
  case 14:
    quote = "\"Who needs arms with LEGS like these?!\"";
    author = "- Mettaton";
    character = "https://cdn2.scratch.mit.edu/get_image/user/6773088_90x90.png?v=1466461674.44";
    break;
    
  case 15:
    quote = "\"It's me, SASS! YOU WANNA HAVE A BAD TOM?!\"";
    author = "- Sans";
    character = "https://i.imgur.com/Id5IaEp.gif";
    break;
    
  case 16:
    quote = "\"Mew Mew Kissy Cutie 2 is neither kissy nor cutie. It's trash!\"";
    author = "- Alphys";
    character = "http://vignette1.wikia.nocookie.net/vsbattles/images/c/cc/Alphys_embarrassed.gif/revision/latest?cb=20160210092442";
    break;
    
  case 17:
    quote = "\"You're gonna have a bad time.\"";
    author = "- Sans";
    character = "https://media.tenor.co/images/de3cc7fc4ff265ed1f2883581f5a8c98/raw";
    break;
    
  case 18:
    quote = "\"DARK DARKER YET DARKER THE DARKNESS KEEPS GROWING THE SHADOWS CUTTING DEEPER\"";
    author = "- Gaster";
    character = "https://undertalemysteries.files.wordpress.com/2016/01/hqdefault1.jpg?w=361";
    break;
    
  case 19:
    quote = "\"Who does Alphys have a crush on?\"";
    author = "- Mettaton";
    character = "http://vignette1.wikia.nocookie.net/undertale/images/5/58/Mettaton.gif/revision/latest?cb=20151111052225";
    break;
    
  default:
    quote = "\"OHHHHHHHH, YESSSSSSSS!\"";
    author = "- Mettaton";
    character = "https://cdn2.scratch.mit.edu/get_image/user/6773088_90x90.png?v=1466461674.44";
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
}