/******************************************
*****************************************/

/*** 
 * `quotes` array 
***/

var ExpirementArray = [{"quote":"The purpose of our lives is to be happy","source":"Dalai Lama","citation":"https://parade.com/937586/parade/life-quotes/","year":"2004"},
{"quote":"Life is what happens when you’re busy making other plans.","source":"John Lennon","citation":"https://parade.com/937586/parade/life-quotes/","year":"2009"},
{"quote":"Get busy living or get busy dying.","source":"Stephen King","citation":"https://parade.com/937586/parade/life-quotes/","year":"2007"},
{"quote":"You only live once, but if you do it right, once is enough.","source":"Mae West","citation":"https://parade.com/937586/parade/life-quotes/","year":"2017"},
{"quote":"Many of life’s failures are people who did not realize how close they were to success when they gave up.","source":"Thomas A. Edison","citation":"https://parade.com/937586/parade/life-quotes/","year":"2015"}

]


/***
 * `getRandomQuote` function
***/

var ToCheck=-1;
function getquote(){
 
   
    var anyRandomnumber=Math.floor(Math.random()*ExpirementArray.length);
    while(anyRandomnumber==ToCheck){
        anyRandomnumber=Math.floor(Math.random()*ExpirementArray.length);

    }
    ToCheck=anyRandomnumber;
    var singleQuote=ExpirementArray[anyRandomnumber];
    return singleQuote;

}


/***
 * `printQuote` function
***/
function printIt(){

var Singlequote=getquote();
var quoteOfhtml=document.querySelector(".quote-box");


    quoteOfhtml.innerHTML=(Singlequote.quote!=null)?`<p class="quote">${Singlequote.quote}</p>`:"";


    quoteOfhtml.innerHTML+=(Singlequote.source!=null)?`<p class="source">${Singlequote.source}`:"";


    quoteOfhtml.innerHTML+=(Singlequote.citation!=null)?`<span class="citation">${Singlequote.citation}</span>`:"";


    quoteOfhtml.innerHTML+=(Singlequote.year!=null)?`<span class="year">${Singlequote.year}</span></p>`:"";



}

printIt();

/***
 * click event listener for the print quote button
 * The code will look like the following. You need to complete it.

***/
document.getElementById("load-quote").addEventListener('click',function(){
    printIt();
})

