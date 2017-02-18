/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
    {
        "What data structure can access its elements in constant time?": [ // 1 arrays
            "array",
            "linked list",
            "heap",
            "tree"
        ]
    },
    {
        "Which of these is true about arrays?": [ // 2
            "Arrays can remove elements in linear time",
            "Arrays can insert elements in constant time",
            "Arrays can access an element in linear time",
            "Arrays have a fixed size"
        ]
    },
    {
        "If an array has n elements, what is the index of the last element?": [ // 3
            "n minus one",
            "n",
            "n plus one",
            "zero"
        ]
    },
    {
        "What is the index of the first element of an array of size n?": [ // 4
            "zero",
            "one",
            "n",
            "negative one"
        ]
    },
    {
        "Why does it take linear time to remove an element from an array?": [ // 5
            "The subsequent elements must be shifted down",
            "Removing an element from an array does not take linear time",
            "The array must make a copy of itself before it removes the element",
            "The array copies its other elements onto another array"
        ]
    },
    {
        "What is the difference between an array and a array list?": [ // 6 array lists
            "Array lists can grow their size automatically",
            "Each Array list element require more space than an array element",
            "Arrays and array lists are interchangeable",
            "Arrays can hold more elements than array lists"
        ]
    },
    {
        "An array list increases its capacity when:": [ // 7
            "it tries to add an element when its capacity is full",
            "the user tells it to",
            "the array list has filled up half of its capacity",
            "the array list feels like it"
        ]
    },
    {
        "When might someone use an array list over an array?": [ // 8
            "Unknown amount to space needed",
            "To save time when searching for an element",
            "For faster insertion and deletion operations",
            "To be able to access elements faster"
        ]
    },
    {
        "What is one advantage of using array lists over linked lists?": [ // 9     ----------------------
            "Faster access to elements",
            "Faster insertion and deletion operations",
            "Able to add as many elements as needed",
            "Uses only as much space as necessary"
        ]
    },
    {
        "Which of these is considered an disadvantage of using linked lists?": [ // 10 
            "nodes cost more space as they contain a pointer",
            "linked lists have immediate access to head node",
            "linked lists do not have a set size",
            "insertion of a node does not require shifting of nodes"
        ]
    },
    {
        "What is another name for the first node of a linked list?": [ // 11 linked list
            "head",
            "top",
            "tail",
            "base"
        ]
    },
    {
        "What is another name for the last node of a linked list?": [ // 12
            "tail",
            "bottom",
            "foot",
            "root"
        ]
    },
    {
        "Which of these is not usually found inside a doubly linked list node?": [ // 13
            "pointer to head",
            "pointer to next node",
            "data value",
            "pointer to previous node"
        ]
    },
    {
        "What is the name of a linked list whose last node points to the first node?": [ // 14
            "circular linked list",
            "round linked list",
            "infinite linked list",
            "annular linked list"
        ]
    },
    {
        "What data structure consists of a sequence of nodes where each node has a pointer to the next node?": [ // 15
            "linked list",
            "array list",
            "stack",
            "hash map"
        ]
    },
    {
        "In a binary tree, how many children can a node have up to?": [ // 16 tree
            "two",
            "zero",
            "one",
            "three"
        ]
    },
    {
        "What is the height of a binary tree?": [ // 17
            "the number of edges between the tree's root and its furthest leaf",
            "the number of nodes from the root node to the deepest leaf",
            "the number of nodes contained in the tree",
            "the number of edges contained in the tree"
        ]
    },
    {
        "In a binary tree, what type of traversal checks the current node before checking its children?": [ // 18
            "pre order traversal",
            "in order traversal",
            "post order traversal",
            "None of these"
        ]
    },
    {
        "In a binary tree, what type of traversal checks the current node after checking its children?": [ // 19
            "post order traversal",
            "pre order traversal",
            "in order traversal",
            "None of these"
        ]
    },
    {
        "In a binary tree, what type of traversal can print out the nodes in increasing order?": [ // 19
            "in order traversal",
            "post order traversal",
            "pre order traversal",
            "None of these"
        ]
    },
    {
        "Which of the following is true about binary trees?": [ // 20
            "Every binary tree is either complete or full",
            "Every complete binary tree is also a full binary tree",
            "No binary tree is both complete and full",
            "None of the above"
        ]
    },
    {
        "What is the best approach to find the shortest distance between two vertices on a graph?": [ // 21 graphs
            "breadth first search",
            "depth first search",
            "topological sorting ",
            "prim's algorithm"
        ]
    },
    {
        "Which of these is not an algorithm for finding shortest paths?": [ // 22
            "kruskal's algorithm",
            "bellman ford algorithm",
            "floyd warshall algorithm",
            "dijkstra’s algorithm"
        ]
    },
    {
        "A graph is connected if: ": [ // 23
            "there is a path between every pair of vertices.",
            "there is an equal number of edges and vertices",
            "each vertex has two edges",
            "there is twice as many vertices as edges"
        ]
    },
    {
        "How many edges are in a complete graph with four vertices?": [ // 24
            "Four",
            "Five",
            "Six",
            "Eight"
        ]
    },
    {
        "What is the name of a graph that contains at least one cycle?": [ // 25
            "cyclic graph",
            "round graph",
            "undirected graph",
            "directed graph"
        ]
    },
    {
        "Which of these is a first in last out data structures?": [ // 26 stack
            "stack",
            "heap",
            "array",
            "graph"
        ]
    },
    {
        "Which of these data structures would be most appropriate for implementing a stack?": [ // 27
            "linked list",
            "graph",
            "hash map",
            "set"
        ]
    },
    {
        "In which of the following scenarios would someone use a stack?": [ // 28
            "undoing the last move in a game",
            "keeping track of stock prices",
            "finding the shortest route to some destination",
            "checking if two items are made of the same material"
        ]
    },
    {
        "Which of the following is not done in constant time?": [ // 29
            "accessing the middle of the stack",
            "pushing an element to top of stack",
            "removing the top of the stack",
            "accessing the top of the stack"
        ]
    },
    {
        "What is one advantage of using a stack over an array list?": [ // 30
            "able to remove the last element in constant time without wasting space",
            "able to access the last element in constant time",
            "keeping the order of the how the elements were added",
            "able to use additional space as needed"
        ]
    },
    {
        "What data structure allows searching for values using keys in constant time?": [ // 31 hash map
            "hash map",
            "array",
            "linked list",
            "heap"
        ]
    },
    {
        "What can happen if the hash map has an imperfect hash function?": [ // 32
            "hash collisions",
            "program can crash",
            "nothing",
            "program grabs incorrect data"
        ]
    },
    {
        "Which of these is not a method to handle hashing collisions in a hash map?": [ // 33
            "sorting",
            "double hashing",
            "chaining",
            "open addressing"
        ]
    },
    {
        "On average cases, how fast can hash maps search, insert, and delete key value pairs?": [ // 34
            "constant time",
            "linear time",
            "quadratic time",
            "logarithmic time"
        ]
    },
    {
        "When a hashing collision occurs in a hash map, what is the actual time complexity of searching an element?": [ // 35
            "linear time",
            "constant time",
            "quadratic time",
            "logarithmic time"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

    if (event.session.application.applicationId !== "amzn1.ask.skill.0a7ea6c1-7101-4cda-9730-644a1133f0fc") {
        context.fail("Invalid Application ID");
     }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Quiz Time"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Welcome to data structures trivia. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            if (currentScore == GAME_LENGTH) {
                speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Congratulations! Goodbye.";
            } else {
                speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                    + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            }
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.
    
    // Ensure that session.attributes has been initialized
    if (!session.attributes) {
        session.attributes = {};
    }

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
