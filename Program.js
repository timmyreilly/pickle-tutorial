// Welp this is our main JavaScript program. 

// first thing we better do is talk about what we're trying to build. 

// We know we want to subscribe to events from event sources. 

// We then want to create a notification when conditions suck. 

// How are we supposed to do this? 

// Welp first we need some data...

// Somewhere in the begging their was a fountain? 

// Like a water fountain? 

// There could be natural and unnatural resources coming from this fountain. But the fact that it's coming out is all that you care about. 

// Here's that thing you wanted in some structure. 

const collection = resources = {'mass': '3', 'info': 'dawn ' };

// i need you to promise me you'll have this collection? 

// okay through middleware you go.. 

myCollectionPromise = new Promise.All([myJSONPromise, mySecondJSONPromise])
    .then(
        function (one) { SendNotification('my collection promise broke ') }
    )
    .catch(
        function (one) { poopWeMissed() }
    );

// Is the rain we're experiencing in San Francisco and the bay area normal? 

// Why isn't their a single page app of this: https://www.wunderground.com/history/airport/KSFO/2018/4/6/CustomHistory.html?req_city=San Francisco&req_state=CA&reqdb.zip=94128&reqdb.magic=4&reqdb.wmo=99999 

// There probably is. Hopefully you have to pay for it. 
// Whoa: http://thevane.gawker.com/unleash-your-inner-geek-with-these-excellent-weather-ra-1628544982 

//////////////myCollectionPromise is so important we actually listen to two Promises.these should be notified if one of these functions goes off and absolutely devestated when we hit an error.
// like a real error. Like someone else screwed up. Like the ISP. 

// Continuous depency is what these applications enabled. 

// OOD is great when you don't have continuous dependency. 

// Object oriented design right? 

// Valse oubliee No.2, S. 215/2 is super silly. And hopefully it's one of those Liszt called it tramping through the forest or something? 
// Like making music sound like nature. 


// thesePeople should be notified.
function SendNotification(err){
    // In OOD you would say 
    err = err;
    if (brokenCondition) {
        sendTo(people);


    }
}

// lolzzz; 
function sendTo(people)
{
    for (var i in people) {
        sendText(people[i]);
    }
};

//

// but in functional programming you wouldn't say what you want to happen. You should say how it should happen. 

SendNotification(sentTo(['pieces of eight']))

SendNotification([sendTo(['bob', 'frank', 'steve'])]); 

// Sometimes I need to remind myself not to take JavaScript too seriously. 
// it's hard you need to pay attention. 



// the functional part gives you what you need to do to get to each part of the program. But it doesn't teach you how to go from program to program. 
// You need to architect certain connected pieces. 

