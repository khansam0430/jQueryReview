console.log('yoyoyo');
//testing if script is correctly linked to html.

$( document ).ready( onReady );
//jquery has been listed above so we can use it in our script.

function onReady (){
    $('#callBack').text('Mix of them all!');
 //creating function that will test to see if jQuery works on DOM when DOM loads.
    $('#favoritesList').append(
        ' <li class="listItem">Music</li>'
        );
    //added another item to my favoritesList
    $('#submit').on('click',onSubmit);
    //creating action on a function (when you hit submit button, things should submit) by targeting #submit id.

    $('#newList').on('click',leastFav);
    $('#leastFavorites').on('click', '.clickMe',clickMe);

}

function onSubmit(){
    console.log('hello from onSubmit');
    //see if submit button works by console log.
    $('body').toggleClass('teal');
    //toggle body between color for body in css and teal
}

const leastFavorites = ['Olives', 'Spiders', 'Scary Movies'];

function leastFav(){
    for (let i = 0; i < leastFavorites.length; i++) {
        console.log(leastFavorites[i]);
        $('#leastFavorites').append(`<li> ${leastFavorites[i]}<button class="clickMe">Click Me</button></li>`);
        
    }
    
} //added event listener for '#newList' button. console logging to check.
//adding for loop through least favorites and appending each time in an <li> to the #leastFavorite ul.
//bling next to least favorite in append <li> IS NOT a JQUERY BLING! its a string interpolation:
//allows us to enter variables into strings.

function clickMe (){
    console.log("I've been Clicked!!!");
    
}