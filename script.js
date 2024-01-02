const quotearray = [
	{
		id: "1",
		author: "- Steve Jobs" ,
		content: "The only way to do great work is to love what you do." ,
	},
	{
		id: "2",
		author: " - Robert Frost",
		content: "In three words I can sum up everything I've learned about life: it goes on." ,
	},
	{
		id: "3",
		author: "- Eleanor Roosevelt" ,
		content:"The future belongs to those who believe in the beauty of their dreams." ,
	},
	{
		id: "4" ,
		author: "- Franklin D. Roosevelt" ,
		content:"The only limit to our realization of tomorrow will be our doubts of today." ,
	},
	{
		id: "5" ,
		author: "- Nelson Mandela" ,
		content:"The greatest glory in living lies not in never falling, but in rising every time we fall."  ,
	},
	{
		id: "6",
		author: "- Steve Jobs" ,
		content: "Your time is limited, don't waste it living someone else's life." ,
	},
	{
		id: "7",
		author: "-Franklin D. Roosevelt",
		content:"The only thing we have to fear is fear itself."  ,
	},
	{
		id: "8",
		author: "- Winston Churchill" ,
		content:"Success is not final, failure is not fatal: It is the courage to continue that counts."  ,
	},
	{
		id: "9",
		author: "- Peter Drucker",
		content: "The best way to predict the future is to create it." ,
	},
	{
		id: "10",
		author: "- Tony Robbins",
		content: "The only impossible journey is the one you never begin." ,
	},
]
document.addEventListener("DOMContentLoaded", function firstRender() {
const index=Math.floor(Math.random() * quotearray.length);
 /*console.log(index);*/ document.getElementById('text').innerHTML=quotearray[index].content;
document.getElementById('author').innerHTML=quotearray[index].author;
});

function newQuote () {
  const index=Math.floor(Math.random() * quotearray.length);
 console.log(index); document.getElementById('text').innerHTML=quotearray[index].content;
document.getElementById('author').innerHTML=quotearray[index].author;
};
