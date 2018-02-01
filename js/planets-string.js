(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */


    //var planetsArray = planetsString.split("|");
    //console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

        // <ul> on the outside of the entire list
        // append <li> planet name </li> here
        // </ul> on the outside of the entire list
        // Final result: <ul><li>planet name</li></ul>

        // var planetsString = planetsArray.join("\n");
        // console.log(planetsString);
        //
        //
    var planetsArray = planetsString.split("|");
    console.log(planetsArray);

    // var planetMercury = planetsArray[0];
    //  var myString = '<li>' + planetMercury + '</li>';

    var myString = "";

    for(var i = 0; i < planetsArray.length; i++) {
        myString += '<li>' + planetsArray[i] + '</li>';
    }
    console.log(myString);

    myString = "<ul>" + myString + "</ul>"
    console.log(myString);


})();
