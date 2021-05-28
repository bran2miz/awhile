function getuserName(){
    let userName = prompt('Enter Your Name Here!');
    console.log(userName);
    document.write('<h2>' + userName + '</h2>');
    return userName;
    
    }
    
    
    function getuSerAnswer(){
    
    let userName1= getuserName();
    
    let userAnswer = prompt('Is world traveling something that you are interested in?')
    console.log(userAnswer);
    
    if (userAnswer.toLowerCase() =='yes') {
        document.write('<h3> Welcome Traveler ' + userName1 +' </h3>');
    } else {
        document.write('<h3> Well ' + userName1 +', hope you still enjoy my site! </h3>');
    }
    }
    
    function getlikepizza(){
    let likepizza =prompt('Do you enjoy eating at restaurants?')
    
    if (likepizza.toLowerCase() === 'yes') {
        document.write ('<h4>RIGHT? Trying new restaurants is my favorite thing to do!</h4>');
        document.write ('<h4><a href="https://www.theworlds50best.com/">Click Here!</a></h4>')
    }
    }



