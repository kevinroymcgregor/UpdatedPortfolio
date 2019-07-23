$(document).on("click", "#GamR", function () {
    const newDiv = $('<div>');
    const newHref = $('<div>Project Link: <a href = "https://kevinroymcgregor.github.io/DirtySwellsProject1/" target="blank">GamR Project</a></div>')
    const newP = $('<p>This was a group project where we made an app to store and share ' +
        'meetings for board game players.  The application takes in information entered by users ' +
        'and stores it in FireBase.  When the page loads, or a new entry is made, a map pin is generated ' + 
        'using the MapBox API, and an event is added to the list.  Within the event list is the data ' +
        'entered, and a button that loads a modal with information about the type of game being played. ' +
        'The modal is populated by data from the Board Game Atlas API.  The site is formatted using Materialize. </p>')
    newDiv.append(newHref);
    newDiv.append(newP);
    $('#main').append(newDiv);
});