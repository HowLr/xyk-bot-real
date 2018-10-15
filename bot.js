var Discord = require('discord.io');
var logger = require('winston');
//var auth = require('./auth.json');
//must be this way for some reason
//client.login(process.env.BOT_TOKEN);
//logger
//winston.add(winston.transports.File, { filename: '/var/log/my-test-logs.log' });
logger.remove(logger.transports.Console);
logger.add(new logger.transports.Console, {
  colorize: true
});
logger.level = 'debug';
//initialize
var bot = new Discord.Client({
  //token: auth.token,
  autorun: true
});
//messages
bot.on('ready', function (evt) {
  logger.info('Connected');
  logger.info('Logged in as: ');
  logger.info(bot.username + ' - (' + bot.id + ')');
});
//message detection

bot.on('message', function (user, userID, channelID, message, evt, content, author, guild){

//message author detection
/*var authorDetection = message.author
console.log(authorDetection);*/

var messageSplit = message.split(" ");
console.log(messageSplit);

//greetings
  if(message === 'hi') {

    bot.sendMessage({
      to: channelID,
      message: 'heyo'
    });
}

  if(message === 'help') {

    bot.sendMessage({
      to: channelID,
      message: `no`
    });
}

  if(message === "e") {

    bot.sendMessage({
      to: channelID,
      message: 'yep'
    });
}

var wrongName = message.includes("zack");
  if(wrongName === true) {

    bot.sendMessage({
      to: channelID,
      message: '*Zach'
    });
}

  //bot needs to know to execute command
  //listens to ! messages
  if (message.substring(0, 1) == '!') {
    var args = message.substring(1).split(' ');
    var cmd = args[0];

    args = args.splice(1);
}
  //cmd template
  /*

  if (cmd === 'copypasta') {
  if (!args.length) {

     });
  }

  */
  /*

  //bot message template

  bot.sendMessage({
    to: channelID,
    message: ''
  });

  combined template

  if (args[0] === '') {
    bot.sendMessage({
      to: channelID,
      message: ""
 });

  */
  if (cmd === 'clearchat') {
    bot.sendMessage({
      to: channelID,
      message: "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
 });
}


//roles stuff testing

/*  var role = Guild.Roles.FirstOrDefault(x => x.Name == "Admin");

       if (User.Roles.Contains(role))
       {
           console.log("user has admin role");
       }
// get role by ID
//let myRoleID = message.guild.roles.get("264410914592129025");

// get role by name
let myRoleName = message.guild.roles.find("name", "Admin");
// assuming role.id is an actual ID of a valid role:
if(message.member.roles.has(role)) {
  console.log(`Yay, the author of the message has the Admin role!`);
} else {
  console.log(`Nope, noppers, nadda.`);
}

// assuming role.id is an actual ID of a valid role:
if(message.member.roles.has(myRoleName)) {
  console.log(`Yay, the author of the message has the Admin role!`);
} else {
  console.log(`Nope, noppers, nadda.`);
}

let adminRoleID = "@&419684680032321537";
let membersWithAdminRole = message.guild.roles.get(adminRoleID).members;
console.log(`Got ${membersWithRole.size} members with that role.`);*/

  //user test
  console.log(user);
  //copypasta
  if (cmd === 'leopardbot') {
  console.log('command executed: !leopardbot ');
      bot.sendMessage({
        to: channelID,
        message: `**Hello. I am Leopard Bot. ~~I was a failed abortion~~. Here are the things I can do**
   **!clearchat** clears the chat.
   **!copypasta** will list a number of copypastas that you can have me print.
   **!owo [message]** will translate the message you put after the command into OwO speak.
   **!communism** will flood the chat with communist propoganda.
   **!reminder [time]** will @ you after the length of time in minutes you input.
   **!pings** will return "Pong!". \n
   **!leopardbot** will show this menu. \n
   This bot was created by Monster12#2374. *Created on August 29, 2018*`
      });
    }
    //ideas
    //make a copypasta add

//communism
    if (cmd === 'communism') {
    console.log('command executed: !communism');
        bot.sendMessage({
          to: channelID,
          message: ``
        });

      }

      if (cmd === 'reminder') {
        if (!args.length) {
          bot.sendMessage({
            to: channelID,
            message: 'Proper usage of the reminder command includes a time in minutes after *!remind*, like this: *!reminder 20*'
          })
        }
        else {
      console.log('command executed: !reminder');
      var reminder = message
      var reminderUser = user
        var reminderRemind = /reminder/gi
      var newReminder = reminder.replace(reminderRemind, '').replace(owoExP, '')
      var remind = args[0]
      var reminderTime = remind * 60000;
      var loggedReminder = reminderTime / 60000;
          bot.sendMessage({
            to: channelID,
            message: `Okay, ` + '<@' + userID + '> ' + `you will be reminded in` + ' ' + loggedReminder + ' ' + 'minutes'
          });
            setTimeout(function(){
                  bot.sendMessage({
                    to: channelID,
                    message: 'The reminder set by ' + '<@' + userID + '> ' + 'for' + ' ' + loggedReminder + ' ' + 'minutes is now over.'
                  });
            }, reminderTime);
          }

          if (args[0] === 'cancel') {

          }

        }

  if (cmd === 'copypasta') {
 if (!args.length) {
     bot.sendMessage({
       to: channelID,
       message: `**Here is our selection:**
navyseal
ea
benshapiro
pyro250k`
     });
 }

if (args[0] === 'add') {
  var cpToAdd = message

}


 if (args[0] === 'navyseal') {
   bot.sendMessage({
     to: channelID,
     message: "What the fuck did you just fucking say about me, you little bitch? I\’ll have you know I graduated top of my class in the Navy Seals, and I\’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn\’t, you didn\’t, and now you\’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You\’re fucking dead, kiddo."
});

 }

 if (args[0] === 'ea') {
   bot.sendMessage({
     to: channelID,
     message: "The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes\. As for cost, we selected initial values based upon data from the Open Beta and other adjustments made to milestone rewards before launch. Among other things, we're looking at average per-player credit earn rates on a daily basis, and we'll be making constant adjustments to ensure that players have challenges that are compelling, rewarding, and of course attainable via gameplay. We appreciate the candid feedback, and the passion the community has put forth around the current topics here on Reddit, our forums and across numerous social media outlets. Our team will continue to make changes and monitor community feedback and update everyone as soon and as often as we can."
});

}

if (args[0] === 'benshapiro') {
  bot.sendMessage({
    to: channelID,
    message: "\:bangbang\:️\:rotating_light\:ATTENTION LIBTARDS\:rotating_light\:\:bangbang\:️\:smiling_imp\: I hope y'all are ready to get \:ambulance\:\:fire\:BURNED\:fire\:\:ambulance\: by 🧐 Ben Shapiro \:star_of_david\:️\:star_of_david\:️ and anally \:right_facing_fist\:\:pray\: DESTROY \:flag_black\:‍\:skull_crossbones:️ your views 🤭1️⃣FIRST1️⃣ he will throw you on the \:bullettrain_front\:TRAIN OF LOGIC \:bullettrain_front\: to \:ok_hand\: destroy \:joy\:\:joy\: your dumb views \:scream\:\:scream\:2️⃣NEXT2️⃣ he'll \:cloud_tornado\:️\:boom\: EXPLODE\:boom\: \:comet:️ your precious \:earth_africa\:CNN\:earth_africa\: (which is \:boom\:\:rotating_light\:FAKE NEWS\:rotating_light\:\:boom\: ) with \:book\:FACTS\:sunglasses\:\:thinking\:\:thinking\:I hope you're \:scream\: not afraid 🤯 of being wrong. Because at the \:octagonal_sign\: END \:octagonal_sign\: of the train ride \:bullettrain_front\:\:bullettrain_front\:"
});

}

if (args[0] === 'pyro250k') {

var delayInMilliseconds = 1000; //1 second
var delayInMilliseconds2 = 2000;
var delayInMilliseconds3 = 3000;
var delayInMilliseconds4 = 4000;
  setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "so guys we did it we reached a quater of a million subscribers, 250,000 subscribers and still growing the fact that we reached this number in such a short amount of time is just phenomenal i-im just amazed, thank you all so much for supporting this channel and helping it grow I-I love you guys, you guys are just awesome. so as you can probably tell this isnt really a montage parody, this is really more like a kind thank you \/ update video so in this video im quickly gonna go over two things: firstly advertisements, and more importantly : the future of this channel and what kind of direction its headed. okay so firstly, the advertisements. believe it or not but montage parodies are actually a copy right minefield new content is getting claimed every day. we could use something from.. lets say.. 5 years ago, and tommorow a huge company could come along and claim that video as theres and we have no control over that. and any video we use that product in could either get copy right stiked or lose monetizeation, meaning that all the money made from that video would get sent to the company, "
});
}, delayInMilliseconds);

setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "and not us. the only real way to counter this is to get advertisements placed on my channel, i mean its a win-win for everyone involved you know i get a safety net generated for myself and the company gets exposure and you guys, my sub subcribers, sit through a two second ad that will be as short and painless as possible, so next im gonna talk about the future of this channel, this doesnt mean in anyway that im actually quitting montage parodies, its basically why you subscribed to my channel and i enjoy making them and theres no reason to quit because im in full time education i have less time to make and upload videos it use to be weekly uploads and now its pretty much once a month but in my opinion uploading once a month isnt enough id like to upload more than that, i mean, as much as possible but montage parodies take a long time to make, collecting the resources, coming up with an original idea ya know, all this stuff takes time and planning and that combined with me being in education means that they take a while to make, a good video that goes into detail about this is rubber rosses video future of independant animation on youtube it is a different theme'd video because I dont do independant animation, but you can still kind of relate because uploads become more infrequent; channel traffic slows down this is why i want to make videos that are related to montage parodies, "
  });
}, delayInMilliseconds2);

setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "but arent exactly meta montage parodies, like I said before: im not quitting montage parodies, its basically seen as either you wait for me to upload one video a month or i upload one video a month with a bunch of you know, funny gameplay stuff in between. A great example of this would be counter strike global offensive but at the end of the day, its all down to you guys, you guys are my subscribers and id love to hear your feed back on what youd like me to do next, leave a comment below: your thoughts and ideas. Im gonna try to respond to as many comments as I can to this video. I would love to hear your feedback on what kind of videos youd want to see, any future ideas for the channel. I feel that because your subscribed to an extent, you're inclined to, you know, share your thoughts and ideas, and have a say on what i should do next, and its really appeciated guys. and lastly i want to thank you guys, thank you guys for helping this channel grow so quickly, in such a short amount of time I mean I started doing videos like these just over a year ago and i would have never expected my channel to grow so quickly in such a short amount of time just from montage parodies its amazing, you know ive been reading the comments and some of them have just been genuinly amazing ive been told people have depression and they find these videos you know therapeutic and have enjoyed them, and lifted their spirits and stuff and its just amazing how my videos can do that to people and that really motivates me to do more of these videos, and just thank you all so much for giving me this opportunity, "
  });
}, delayInMilliseconds3);

setTimeout(function() {
bot.sendMessage({
  to: channelID,
  message: "it really-it really means a lot guys you have no idea, and lastly i want to give a shout out to all the people who helped make this video whether thats voice overs, animations, stuff like that. firstly we got Harvey Rothman he designed my youtube profile picture, and has also designed a what the fast intro for my channel, and its just amazing. i love his animation style he is just a really nice guy to talk to, be sure to subscribe to his channel, hes got an upcoming animation for five nights at freddys foxy gets hooked, he does music production, hes all around a really good guy, next we got Hitlerspimp hes just so talent with SFM, he designed the intro for me, its unbelivable how talented he his, be sure to check out his videos, hes just amazing. and lastly check out creamforce for his sexy voice over he did in the video honestly he does a lot of montage parody esc videos, definintely check him out his videos are just amazing and he just has a great personality all around. and thats it guys thats all i wanted to explain, thank you all for sitting through this video and taking all the information in, dont forget to comment down below your thoughts and feelings, id love to hear your feelings on where to take this channel montage parodies are still coming, ive got at least 2 videos in the works right now and will be up very soon. thank you all again for a quarter of a million subscribers im just still amazed that we reached this number in just a short amount of time, thanks guys. "
});
}, delayInMilliseconds4);
}
}

/*if (cmd === 'cp') {
if (!args.length) {
   bot.sendMessage({
     to: channelID,
     message: `**Here is our selection:**
navyseal
ea
benshapiro
pyro250k`
   });
}


if (args[0] === 'navyseal') {
 bot.sendMessage({
   to: channelID,
   message: "What the fuck did you just fucking say about me, you little bitch? I\’ll have you know I graduated top of my class in the Navy Seals, and I\’ve been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I\’m the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You\’re fucking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that\’s just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking tongue. But you couldn\’t, you didn\’t, and now you\’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You\’re fucking dead, kiddo."
});

}

if (args[0] === 'ea') {
 bot.sendMessage({
   to: channelID,
   message: "The intent is to provide players with a sense of pride and accomplishment for unlocking different heroes\. As for cost, we selected initial values based upon data from the Open Beta and other adjustments made to milestone rewards before launch. Among other things, we're looking at average per-player credit earn rates on a daily basis, and we'll be making constant adjustments to ensure that players have challenges that are compelling, rewarding, and of course attainable via gameplay. We appreciate the candid feedback, and the passion the community has put forth around the current topics here on Reddit, our forums and across numerous social media outlets. Our team will continue to make changes and monitor community feedback and update everyone as soon and as often as we can."
});

}

if (args[0] === 'benshapiro') {
bot.sendMessage({
  to: channelID,
  message: "\:bangbang\:️\:rotating_light\:ATTENTION LIBTARDS\:rotating_light\:\:bangbang\:️\:smiling_imp\: I hope y'all are ready to get \:ambulance\:\:fire\:BURNED\:fire\:\:ambulance\: by 🧐 Ben Shapiro \:star_of_david\:️\:star_of_david\:️ and anally \:right_facing_fist\:\:pray\: DESTROY \:flag_black\:‍\:skull_crossbones:️ your views 🤭1️⃣FIRST1️⃣ he will throw you on the \:bullettrain_front\:TRAIN OF LOGIC \:bullettrain_front\: to \:ok_hand\: destroy \:joy\:\:joy\: your dumb views \:scream\:\:scream\:2️⃣NEXT2️⃣ he'll \:cloud_tornado\:️\:boom\: EXPLODE\:boom\: \:comet:️ your precious \:earth_africa\:CNN\:earth_africa\: (which is \:boom\:\:rotating_light\:FAKE NEWS\:rotating_light\:\:boom\: ) with \:book\:FACTS\:sunglasses\:\:thinking\:\:thinking\:I hope you're \:scream\: not afraid 🤯 of being wrong. Because at the \:octagonal_sign\: END \:octagonal_sign\: of the train ride \:bullettrain_front\:\:bullettrain_front\:"
});

}

if (args[0] === 'pyro250k') {

var delayInMilliseconds = 1000; //1 second
var delayInMilliseconds2 = 2000;
var delayInMilliseconds3 = 3000;
var delayInMilliseconds4 = 4000;
  setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "so guys we did it we reached a quater of a million subscribers, 250,000 subscribers and still growing the fact that we reached this number in such a short amount of time is just phenomenal i-im just amazed, thank you all so much for supporting this channel and helping it grow I-I love you guys, you guys are just awesome. so as you can probably tell this isnt really a montage parody, this is really more like a kind thank you \/ update video so in this video im quickly gonna go over two things: firstly advertisements, and more importantly : the future of this channel and what kind of direction its headed. okay so firstly, the advertisements. believe it or not but montage parodies are actually a copy right minefield new content is getting claimed every day. we could use something from.. lets say.. 5 years ago, and tommorow a huge company could come along and claim that video as theres and we have no control over that. and any video we use that product in could either get copy right stiked or lose monetizeation, meaning that all the money made from that video would get sent to the company, "
});
}, delayInMilliseconds);

setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "and not us. the only real way to counter this is to get advertisements placed on my channel, i mean its a win-win for everyone involved you know i get a safety net generated for myself and the company gets exposure and you guys, my sub subcribers, sit through a two second ad that will be as short and painless as possible, so next im gonna talk about the future of this channel, this doesnt mean in anyway that im actually quitting montage parodies, its basically why you subscribed to my channel and i enjoy making them and theres no reason to quit because im in full time education i have less time to make and upload videos it use to be weekly uploads and now its pretty much once a month but in my opinion uploading once a month isnt enough id like to upload more than that, i mean, as much as possible but montage parodies take a long time to make, collecting the resources, coming up with an original idea ya know, all this stuff takes time and planning and that combined with me being in education means that they take a while to make, a good video that goes into detail about this is rubber rosses video future of independant animation on youtube it is a different theme'd video because I dont do independant animation, but you can still kind of relate because uploads become more infrequent; channel traffic slows down this is why i want to make videos that are related to montage parodies, "
  });
}, delayInMilliseconds2);

setTimeout(function() {
  bot.sendMessage({
    to: channelID,
    message: "but arent exactly meta montage parodies, like I said before: im not quitting montage parodies, its basically seen as either you wait for me to upload one video a month or i upload one video a month with a bunch of you know, funny gameplay stuff in between. A great example of this would be counter strike global offensive but at the end of the day, its all down to you guys, you guys are my subscribers and id love to hear your feed back on what youd like me to do next, leave a comment below: your thoughts and ideas. Im gonna try to respond to as many comments as I can to this video. I would love to hear your feedback on what kind of videos youd want to see, any future ideas for the channel. I feel that because your subscribed to an extent, you're inclined to, you know, share your thoughts and ideas, and have a say on what i should do next, and its really appeciated guys. and lastly i want to thank you guys, thank you guys for helping this channel grow so quickly, in such a short amount of time I mean I started doing videos like these just over a year ago and i would have never expected my channel to grow so quickly in such a short amount of time just from montage parodies its amazing, you know ive been reading the comments and some of them have just been genuinly amazing ive been told people have depression and they find these videos you know therapeutic and have enjoyed them, and lifted their spirits and stuff and its just amazing how my videos can do that to people and that really motivates me to do more of these videos, and just thank you all so much for giving me this opportunity, "
  });
}, delayInMilliseconds3);

setTimeout(function() {
bot.sendMessage({
  to: channelID,
  message: "it really-it really means a lot guys you have no idea, and lastly i want to give a shout out to all the people who helped make this video whether thats voice overs, animations, stuff like that. firstly we got Harvey Rothman he designed my youtube profile picture, and has also designed a what the fast intro for my channel, and its just amazing. i love his animation style he is just a really nice guy to talk to, be sure to subscribe to his channel, hes got an upcoming animation for five nights at freddys foxy gets hooked, he does music production, hes all around a really good guy, next we got Hitlerspimp hes just so talent with SFM, he designed the intro for me, its unbelivable how talented he his, be sure to check out his videos, hes just amazing. and lastly check out creamforce for his sexy voice over he did in the video honestly he does a lot of montage parody esc videos, definintely check him out his videos are just amazing and he just has a great personality all around. and thats it guys thats all i wanted to explain, thank you all for sitting through this video and taking all the information in, dont forget to comment down below your thoughts and feelings, id love to hear your feelings on where to take this channel montage parodies are still coming, ive got at least 2 videos in the works right now and will be up very soon. thank you all again for a quarter of a million subscribers im just still amazed that we reached this number in just a short amount of time, thanks guys. "
});
}, delayInMilliseconds4);
}

}*/
    switch(cmd) {
      // user argument test


      // !OwO
      case 'owo':

      console.log('command executed: !owo');
        var owo = message

        var owoR = /r/gi;
        var owoL = /l/gi;
        var owoExP = /!/gi
        var owoOwo = /owo/gi
        //var owoComma = /,/gi;

        console.log(owo.replace(owoR, 'w').replace(owoL, 'w').replace(owoExP, '').replace(owoOwo, ''));
        var newOwo = (owo.replace(owoR, 'w').replace(owoL, 'w').replace(owoExP, '').replace(owoOwo, ''));
          bot.sendMessage({
            to: channelID,
            message: newOwo + ' ' + '(^ w ^)'
          });
      break;

      // !pings
      case 'pings':
      console.log('command executed: !pings ');
          bot.sendMessage({
            to: channelID,
            message: 'Pong!'
          });
        break;

      // !leopardBot
      /*case 'leopardbot':
      console.log('command executed: !leopardbot ');
          bot.sendMessage({
            to: channelID,
            message: 'Hello. I am Leopard Bot. ~~I was a failed abortion~~. Here are the things I can do\
          **!copypasta** will list a number of copypastas that you can have me print.\
          **!owo [message]** will translate the message you put after the command into OwO speak.\
          **!pings** will return "Pong!".\
          **!leopardbot** will show this menu.\
          _This bot was created by `@Monster12#2374`. *Created on August 29, 2018*_'
          });
        break;*/

    }




});
