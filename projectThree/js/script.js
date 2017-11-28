/*global $*/
// $(document).ready(function(){
//     var randomQuote; 
// var rapper; 

var quotes = [
'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live',
'Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.',
'Punishments include such things as flashbacks, flooding of unbearable emotions, painful body memories, flooding of memories in which the survivor perpetrated against others, self-harm, and suicide attempts.',
'That\'s the thing about people who think they hate computers. What they really hate is lousy programmers.',
'I\'m not a great programmer; I\'m just a good programmer with great habits.'

]


  function newQuote(){
     var randomNumber = Math.floor(Math.random() * (quotes.length));
     document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
(function(){

  var linkElement = document.getElementById( "tweet-this-post" ),
      getPostTitle = document.getElementById( "blog-post-title" ).innerHTML,
      getPostLink = window.location.href,
      cleanLink = getPostLink.replace( /[^/]*$/g, "" );
  
  linkElement.setAttribute( "href", cleanLink );

  $( linkElement ).on( "click", function( event ){

    event.preventDefault();

    var tweetedLink = this.getAttribute( "href" );

    window.open( "http://twitter.com/intent/tweet?url=" + quotes + "twitterwindow", "height=450, width=550, toolbar=0, location=0, menubar=0, directories=0, scrollbars=0" );

  });

})


