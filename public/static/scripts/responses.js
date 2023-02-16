function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } 

    if(input == "Tell me about this website"){
        return "This website will connect you to alumni and will let you know about the current status of your alumni's";
    }else if(input="what is this website about"){
        return "This website will connect you to alumni and will let you know about the current status of your alumni's";
    }else{
        return "Try asking something else!"
    }
    
}