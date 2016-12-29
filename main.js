// Random Quote Generator
//
// Build a random quote generator that randomly displays a quote on the page. +
//
// Use a variable of any data type you like to store 5-10 quotes. When user clicks a button, use DOM manipulation to randomly cycle through the quotes to display one on the page.
// Feel free to do this in vanilla JavaScript or jQuery, whichever you feel you need to practice.
// Bonus
//
// Add a 'click to Tweet' button that takes the current quote and opens it in a separate tab, letting the user tweet the quote (if user is logged in to Twitter).

var quotesList =
['If our early lessons of acceptance were as successful as our early lessons of anger, how much happier we would all be.', 'Real joy comes not from ease or riches or from the praise of men, but from doing something worthwhile.','Nature has invented reproduction as a mechanism for life to move forward. As a life force that passes right through us and makes us a link in the evolution of life.','If you cannot have faith in what is held up to you for faith, you must find things to believe in yourself, for a life without faith in something is too narrow a space to live.','Parents are never as bad as kids think they are.']

function randomQuote(arr) {
  var numLength = arr.length
  var pickRandom = Math.floor(Math.random()*(numLength))
  return arr[pickRandom]
}

console.log(randomQuote(quotesList));

$('#clickChange').click(function() {
  $('#qChange').text(randomQuote(quotesList))
})
