$(document).on("click", "#GamR", function () {
    $('#main').empty();
    const newDiv = $('<div>');
    const newHref = $('<div>Project Link: <a href = "https://kevinroymcgregor.github.io/DirtySwellsProject1/" target="blank">GamR Project</a></div>')
    const newP = $('<p>This was a group project where we made an app to store and share ' +
        'meetings for board game players.  The application takes in information entered by users ' +
        'and stores it in FireBase.  When the page loads, or a new entry is made, a map pin is generated ' + 
        'using the MapBox API, and an event is added to the list.  Within the event list is the data ' +
        'entered, and a button that loads a modal with information about the type of game being played. ' +
        'The modal is populated by data from the Board Game Atlas API.  The site is formatted using ' + 
        'Materialize and custom CSS. </p>')
    newDiv.append(newHref);
    newDiv.append(newP);
    $('#main').append(newDiv);
});

$(document).on("click", "#crystal", function () {
    $('#main').empty();
    const newDiv = $('<div>');
    const newHref = $('<div>Project Link: <a href = "https://kevinroymcgregor.github.io/unit-4-game/" target="blank">Crystal Collector</a></div>')
    const newP = $('<p>This project highlights JavaScript math functions, including random number generation, ' +
        'and JavaScript functions.  A random value target is generated, and each crystal is assigned a random value as well. ' +
        'The values assigned to the crystals are added together as they are clicked, with the goal being to reach  ' + 
        'the target value without going over.  The program keeps a running total of wins and losses. ' +
        'The site uses JavaScript alerts to display information.  The page is styled primarily using BootStrap.</p>')
    newDiv.append(newHref);
    newDiv.append(newP);
    $('#main').append(newDiv);
});