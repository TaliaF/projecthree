/*global $ */

// https://talaikis.com/random_quotes_api/
// https://dev.twitter.com/web/tweet-button/web-intent
// https://fonts.google.com/
// http://fontawesome.io/icons/

var qGenerator = {
    quote: "",
    author: "-Trump",
    getQuote: function(){
        var that = this;
        $.ajax({
            method:"GET", 
            url:"https://api.whatdoestrumpthink.com/api/v1/quotes/random",
            dataType:"json",
            success: function(data){
                console.log(data)
         that.quote = data.message;
        //  that.author = data.author;
         that.displayQuote();
            }
        }) 
    },
    displayQuote: function(){
        document.getElementById("insertQuote").innerHTML = qGenerator.quote;
        document.getElementById("insertAuthor").innerHTML= qGenerator.author;
     
    }
}

document.getElementById("newQuote").onclick = function(){
//   qGenerator.getQuote();
 qGenerator.getQuote();
        // qGenerator.displayQuote();
}
document.getElementById("postTwitter").onclick = function(){
    window.open('https://twitter.com/intent/tweet?text='+ '"'+ qGenerator.quote + '"' + '-' + "Trump");
}
qGenerator.getQuote();