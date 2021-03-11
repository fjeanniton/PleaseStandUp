class PleaseStandUp {

    /*
    Have the function howOld(birthday) take the birthday parameter being passed and 
    return the age of a person with the date as their birthday.
    (ie. if birthday = June 22, 1996 then the output should be 24)
    */
    // Create a form 
    // create a an input box with the type for date
    // label it with the "EnterHow old are you?"
    // create a submit buttom with the label "Submit"
    // write a funstion that when enter date 
    // write a convert with current date
    // parse
    // writhe result to display "You are " equal age  "years old."



   howOld(birthday){
        return -1;
    }

    /*
    Have the function timeConvert(numOfMins) take the numOfMins parameter being passed and 
    return the number of hours, minutes, and seconds the parameter converts to 
    (ie. if num = 63.5 then the output should be 1:3:30). Separate the number of hours,
    minutes, and seconds with colons.
    */
    
    // create form that will convert time  
    // create a form with the input label type 
    // calculate hours
    // cgiytalculate remainder of minutes
    //


    timeConvert(numOfMins){
       let hours = Math.floor(numOfMins / 60);
       let minutes = numOfMins % 60; 
       let seconds = minutes % 60;

        return (hours + ":" + minutes +":" + seconds);
 
    }
}
module.exports = PleaseStandUp;