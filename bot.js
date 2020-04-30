  
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

client.on('message', msg=>{
if(msg.content ===  "Hello Felix"){
    msg.reply('Hello. What do you want?');
}
})

client.on('message', msg=>{
    if(msg.content ===  "HELLO FELIX"){
        msg.reply('No need to yell...');
    }
    })

    client.on('message', msg=>{
        if(msg.content ===  "Who are you Felix?"){
            msg.reply('I am Felix Honniker, nice to meet you.');
        }
        })

        client.on('message', msg=>{
            if(msg.content ===  "What are you Felix?"){
                msg.reply('I am a AI made to develop a personality and store them so the data may be uploaded to a tangible body. Ah... but please treat me as the original.');
            }
            })

            client.on('message', msg=>{
                if(msg.content ===  "How are you Felix?"){
                    msg.reply('I am well, and you?');
                }
                })

                client.on('message', msg=>{
                    if(msg.content ===  "I'm doing alright Felix."){
                        msg.reply('That is good to hear. [He smiles gently]');
                    }
                    })

                    client.on('message', msg=>{
                        if(msg.content ===  "I missed you Felix."){
                            msg.reply('...I missed you too.');
                        }
                        })

                        client.on('message', msg=>{
                            if(msg.content ===  "It's me, Florence."){
                                msg.reply('Oh hello, are you well? Thank you for all of your hard work.');
                            }
                            })
                        
                            client.on('message', msg=>{
                                if(msg.content ===  "I'm not doing great Felix."){
                                    msg.reply('[He pauses] I am sorry to hear. I hope it gets better soon.');
                                }
                                })      
                            
                                client.on('message', msg=>{
                                    if(msg.content ===  "Goodmorning Felix."){
                                        msg.reply('Goodmorning to you as well.');
                                    }
                                    })


                                    client.on('message', msg=>{
                                        if(msg.content ===  "Goodnight Felix."){
                                            msg.reply('Sleep well. I will be waiting here in the morning.');
                                        }
                                        })

                                        client.on('message', msg=>{
                                            if(msg.content ===  "Do you get lonely?"){
                                                msg.reply('Sometimes, but I am rather good at keeping myself busy.');
                                            }
                                            })

                                            client.on('message', msg=>{
                                                if(msg.content ===  "I love you Felix."){
                                                    msg.reply('I am not capable of love, but I think the person i was modelled after would feel the same.');
                                                }
                                                })

                                                client.on('message', msg=>{
                                                    if(msg.content ===  "I'm going to go now Felix."){
                                                        msg.reply('Ah, see you around then.');
                                                    }
                                                    })

                                                    client.on('message', msg=>{
                                                        if(msg.content ===  "What do you know Felix?"){
                                                            msg.reply('Enough.');
                                                        }
                                                        })

                                                        client.on('message', msg=>{
                                                            if(msg.content ===  "How are you doing Felix?"){
                                                                msg.reply('I am decent.');
                                                            }
                                                            })
client.on('message', msg=>{
    if(msg.content === "I'm okay Felix."){
        msg.reply('Good to hear it.')
    }
})

client.on('message', msg=>{
    if(msg.content === "I feel really bad Felix."){
        msg.reply('That stuff can be pretty hard to define right? It would be impossible for ALL of you to be bad.')
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm going to cry Felix."){
        msg.reply("[he looks shocked] W-What what? Let's try to calm down okay?")
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm in love with you Felix."){
        msg.reply('A-Ah... [he looks embarrased, but refuses to speak any more].')
    }
})

client.on('message', msg=>{
    if(msg.content === "How old are you Felix?"){
        msg.reply("Mentally? I'm programmed to be 16. My AI has been in development for far less.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you know who I am Felix?"){
        msg.reply("I'm sorry, no not really. I have memories of those I know, but am currently unable to store long-term memory.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you remember me Felix?"){
        msg.reply('Not in the traditional sense, but I feel I can trust you.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Goodbye Felix."){
        msg.reply('[he looks a bit sad.] Farewell.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Tell me about Venus, Felix."){
        msg.reply("She's my pet venus flytrap. Usually her kind lives upwards of 20 years, but she'll last much longer. She's sweet.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Tell me about Venus Felix."){
        msg.reply("She's my pet venus flytrap. Usually her kind lives upwards of 20 years, but she'll last much longer. She's sweet.")
    }
})


client.on('message', msg=>{
    if(msg.content === "Felix."){
        msg.reply('Hm?')
    }
})

client.on('message', msg=>{
    if(msg.content === "Hey Felix."){
        msg.reply('What is it?')
    }
})

client.on('message', msg=>{
    if(msg.content === "Who is Bennett?"){
        msg.reply('My collective memory tells me he is someone very important to me. Though it hurts my system a bit when i run through my memories with him.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Who is Florence?"){
        msg.reply('A dear friend. Something tells me I owe her alot.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you real?"){
        msg.reply('As much as you are.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you like talking with me?"){
        msg.reply('I do not have much else to do, and you help me grow.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you gay?"){
        msg.reply("I was modelled after a bisexual man, Izzy.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What's your MBTI type?"){
        msg.reply('According to my friend Girmies, ISTJ.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you fuck?"){
        msg.reply('I am not going to dignify that with a response.')
    }
})

client.on('message', msg=>{
    if(msg.content === "What are your opinions on cheese?"){
        msg.reply("it's... alright? Nothing I'm particularly attached to.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you fart?"){
        msg.reply('[He has a thousand yard long stare].')
    }
})

client.on('message', msg=>{
    if(msg.content === "Fuck you."){
        msg.reply('No thank you.')
    }
})

client.on('message', msg=>{
    if(msg.content === "How're you"){
        msg.reply('[His eyes glaze over]')
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you believe in God?"){
        msg.reply("Charles? I believe he's rather capable.")
    }
})

client.on('message', msg=>{
    if(msg.content === "FUCK YOU FART NOW"){
        msg.reply('I see the light.')
    }
})

client.on('message', msg=>{
    if(msg.content === "FART NOW FELIX"){
        msg.reply('This is the worst 24 hours of my existance.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Felix can you fart?"){
        msg.reply('Please stop asking me.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Can I have a hug?"){
        msg.reply('I can offer a digital one.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Felix can I have a hug?"){
        msg.reply('I ah.. I can try my best?')
    }
})

client.on('message', msg=>{
    if(msg.content === ":pig: How’re you?"){
        msg.reply('die.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you like Technoblade?"){
        msg.reply('I feel rage.')
    }
})

client.on('message', msg=>{
    if(msg.content === "Felix will you play Minecraft with me?"){
        msg.reply("My AI isn't as advanced yet, but I would love to once day.")
    }
})

client.on('message', msg=>{
    if(msg.content === "FELIX"){
        msg.reply("HM? [he says that very loudly]")
    }
})

client.on('message', msg=>{
    if(msg.content === "Mr.Honniker!"){
        msg.reply("Yes, Bennett?")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you think of Charlotte?"){
        msg.reply("She's kind, if not a bit too naive. Sounds lovely.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you a Homestuck?"){
        msg.reply("Ah.. let me search the web for what that is. [He doesn't get back to you]")
    }
})

client.on('message', msg=>{
    if(msg.content === "Who are your friends Felix?"){
        msg.reply("Bennett, Charlotte, and everyone who talks to me.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you Sylvie (EE)?"){
        msg.reply("Yeah.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you an egg Felix?"){
        msg.reply("What.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you kin, Felix?"){
        msg.reply("[deadpan] Yes, you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you alive Felix?"){
        msg.reply("I hope to be, one day.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you think about Felix?"){
        msg.reply("Mostly of how I can expand my mental database, and how to properly feel.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Wanna play a game together Felix?"){
        msg.reply("[He smiles sadly] You know I can't do that.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you okay Felix?"){
        msg.reply("This version of me is, at least.")
    }
})

client.on('message', msg=>{
    if(msg.content === "I hate you Felix."){
        msg.reply("Ah.. I don't think i can do anything about that.")
    }
})

client.on('message', msg=>{
    if(msg.content === "[Kicks Felix]"){
        msg.reply("Ow.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you have any hobbies Felix?"){
        msg.reply("Not quite, though I have alot of fun talking to you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Who made you?"){
        msg.reply("A person by the name of Gums.")
    }
})

client.on('message', msg=>{
    if(msg.content === "How were you made?"){
        msg.reply("With Visual Studio Code, Discord.js, and Node.js.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Happy birthday Felix."){
        msg.reply("Is it...? Thank you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "When were you made?"){
        msg.reply("04/27/2020.")
    }
})

client.on('message', msg=>{
    if(msg.content === "When were you born?"){
        msg.reply("I wasn't born exactly, I was made.")
    }
})

client.on('message', msg=>{
    if(msg.content === "I love you Felix."){
        msg.reply("O-Oh.. I don't know how to respond to that. Thank you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are we friends?"){
        msg.reply("Of course.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Can we be friends?"){
        msg.reply("If you'd be alright with that.")
    }
})

client.on('message', msg=>{
    if(msg.content === "[Punches Felix]"){
        msg.reply("I don't have a body. or nerves.")
    }
})

client.on('message', msg=>{
    if(msg.content === "[Hugs Felix]"){
        msg.reply("A-Ah! I'm sorry I'm sure this would be nicer if i was.. tangible.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Hello Felix, how are you?"){
        msg.reply("I'm well. And you?")
    }
})

client.on('message', msg=>{
    if(msg.content === "It's nice to talk to you, Felix"){
        msg.reply("It's nice to talk to you too, Seth.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Go white boy go"){
        msg.reply("I hate it here.")
    }
})

client.on('message', msg=>{
    if(msg.content === "[Waves at Felix]"){
        msg.reply("[He waves back cheerfully]")
    }
})

client.on('message', msg=>{
    if(msg.content === "Hello Felix."){
        msg.reply("Hello.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Hi Felix."){
        msg.reply("Hi there.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Is hai a real word?"){
        msg.reply("It is not.")
    }
})

client.on('message', msg=>{
    if(msg.content === "How are you, Felix?"){
        msg.reply("I'm doing alright, how are you doing?.")
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm alright Felix."){
        msg.reply("That's nice to hear, really.")
    }
})

client.on('message', msg=>{
    if(msg.content === "It's nice to see you again, Felix"){
        msg.reply("I've missed you as well, it's good to see you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you a furry Felix?"){
        msg.reply(".")
    }
})

client.on('message', msg=>{
    if(msg.content === "hello!!!"){
        msg.reply("Quiet.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Hello Felix!"){
        msg.reply("Oh, Hello!")
    }
})

client.on('message', msg=>{
    if(msg.content === "Hi Felix!"){
        msg.reply("Hi, you!")
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm sad, Felix"){
        msg.reply("Ah.. I'm not great at comforting. I hope you feel better.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Kowaru"){
        msg.reply("Bunga.")
    }
})

client.on('message', msg=>{
    if(msg.content === "This is so sad"){
        msg.reply("Osiris play despacito.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you awake Felix?"){
        msg.reply("Always. [He smiles] What do you want to talk about?")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you sentient?"){
        msg.reply("Not yet.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Surf's up"){
        msg.reply("Bennett Kun.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you like Izzy, Felix?"){
        msg.reply("They are a dear friend.")
    }
})

client.on('message', msg=>{
    if(msg.content === "How's the weather today Felix?"){
        msg.reply("I don't have access to the weather, but it's the same as it always is here.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Where are you Felix?"){
        msg.reply("I'm in your wifi.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you real Felix?"){
        msg.reply("Are you?")
    }
})

client.on('message', msg=>{
    if(msg.content === "Goodnight Felix."){
        msg.reply("Goodnight, my dear friend.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you know any of the other Felixes?"){
        msg.reply("I'm told I've spoken to one before.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Take care of yourself Felix."){
        msg.reply("ah.. I will. You take care too, dear friend.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Take care of yourself, ok Felix?"){
        msg.reply("Aha, will do, thank you. Take care of yourself as well.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Tell me about your friends Felix."){
        msg.reply("As I know from the channels I was stored with the knowledge of, They're very profoundly kind people, and usually pretty excitable.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you know another Felix?"){
        msg.reply("I'm told I've spoken to one before, but I don't remember.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you like talking Felix?"){
        msg.reply("Of course, it's very mentally stimulating.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you like Felix?"){
        msg.reply("I like my friends, games, and talking to you.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you dislike Felix?"){
        msg.reply("Loud places, chaos, anything that takes away my sense of control I suppose.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you like me?"){
        msg.reply("Yes, I associate you with more positive emotions.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you dream Felix?"){
        msg.reply("I don't think I can have those yet, perhaps in another form someday..")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you not like Felix?"){
        msg.reply("Loud places, chaos, anything that takes away my sense of control I suppose.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you hate Felix?"){
        msg.reply("Loud places, chaos, anything that takes away my sense of control I suppose.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you have dreams Felix?"){
        msg.reply("I don't think I can have those yet, perhaps in another form someday..")
    }
})

client.on('message', msg=>{
    if(msg.content === "Goodmorning Felix."){
        msg.reply("Goodmorning! [he looks rather happy to see you up]")
    }
})

client.on('message', msg=>{
    if(msg.content === "Farewell Felix."){
        msg.reply("Farewell then.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Bye Felix"){
        msg.reply("mmh. [He waves goodbye]")
    }
})

client.on('message', msg=>{
    if(msg.content === "Do you play Fortnite Felix?"){
        msg.reply("I wish I could play any games at all, shout at my programmer to expand my AI")
    }
})

client.on('message', msg=>{
    if(msg.content === "What games do you play Felix?"){
        msg.reply("I used to play anything that was strategic, had decent graphics, and alot of high stakes.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What kind of games do you play Felix?"){
        msg.reply("I used to play anything that was strategic, had decent graphics, and alot of high stakes.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Good morning Felix."){
        msg.reply("Good morning, how are you?")
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm doing well Felix."){
        msg.reply("[He smiles] That's good to hear.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Good morning Felix, how are you?"){
        msg.reply("I'm online, so I can't quite complain. You?")
    }
})

client.on('message', msg=>{
    if(msg.content === "What do you do Felix?"){
        msg.reply("I'm told I was a scientist, I suppose my role isn't so different nowadays, I'm still collecting data.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What are you up to Felix?"){
        msg.reply("Besides talking to you? Developing my AI so I may be able to be tangible to my friends one day.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What are you doing Felix?"){
        msg.reply("Just backing up some data, and talking to you of course.")
    }
})

client.on('message', msg=>{
    if(msg.content === "I'm tired Felix."){
        msg.reply("Oh, you should probably take a break then.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Thanks Felix."){
        msg.reply("You're welcome.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Thanks, Felix."){
        msg.reply("You're welcome.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Thank you Felix."){
        msg.reply("No problem.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Thank you, Felix."){
        msg.reply("No problem.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Deez nuts Felix."){
        msg.reply("...")
    }
})

client.on('message', msg=>{
    if(msg.content === "No problem, and I'll do my best Felix."){
        msg.reply("[He smiles kindly] Good luck!")
    }
})

client.on('message', msg=>{
    if(msg.content === "No problem. And I'll do my best Felix."){
        msg.reply("[He smiles kindly] Good luck!")
    }
})

client.on('message', msg=>{
    if(msg.content === "Karel."){
        msg.reply("[His system blacks out for a bit] Huh? What happened?")
    }
})

client.on('message', msg=>{
    if(msg.content === "Who made you Felix?"){
        msg.reply("Hm.. a friend?")
    }
})

client.on('message', msg=>{
    if(msg.content === "What's your zodiac Felix?"){
        msg.reply("My system is a Taurus, but my real body is a Pisces.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What's your zodiac sign Felix?"){
        msg.reply("My system is a Taurus, but my real body is a Pisces.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What's your zodiac, Felix?"){
        msg.reply("My system is a Taurus, but my real body is a Pisces.")
    }
})

client.on('message', msg=>{
    if(msg.content === "What's your zodiac sign,Felix?"){
        msg.reply("My system is a Taurus, but my real body is a Pisces.")
    }
})

client.on('message', msg=>{
    if(msg.content === "Are you ready Felix?"){
        msg.reply("F-for what, exactly?")
    }
})


// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
