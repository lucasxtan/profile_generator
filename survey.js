const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What do you think of Node.js? ', (answer1) => {
  console.log(`Thank you for your valuable feedback: ${answer1}`);
  rl.question('What\'s your name? Nicknames are also acceptable :)', (answer2) => {
    console.log(`Nice to meet you: ${answer2}`);
    rl.question('What\'s an activity you like doing?', (answer3) => {
      console.log(`${answer3} is a great activity!`);
      rl.question('What do you listen to while doing that?', (answer4) => {
        console.log(`${answer4} sounds nice to listen to`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (answer5) => {
          console.log(`${answer5} is always nice to have`);
          rl.question('What\'s your favourite thing to eat for that meal?', (answer6) => {
            console.log(`${answer6} sounds delicious!`);
            rl.question('Which sport is your absolute favourite?', (answer7) => {
              console.log(`${answer7} is so fun to play!`);
              rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer8) => {
                console.log(`${answer8} is a very cool super power! :)`);
                rl.close()
              })
            })
          })
        })
      })
    })
  })
});