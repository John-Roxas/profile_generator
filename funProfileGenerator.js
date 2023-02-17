const readline = require('readline');

const r1  = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let _ = {
  name: '',
  activity: '',
  listen: '',
  meal: '',
  food: '',
  sport: '',
  power: '',

};

r1.question('What\'s your name? Nicknames are also acceptable ', (answer) => {
  console.log(`Thank you for providing your name: ${answer}`);
  _.name = answer;
  r1.question('What\'s an activity you like doing? ', (answer) => {
    console.log(`Thank you for listing an activity: ${answer}`);
    _.activity = answer;
    r1.question('What do you listen to while doing that? ', (answer) => {
      console.log(`Thank you for telling me what you like listening to: ${answer}`);
      _.listen = answer;
      r1.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        console.log(`Thank you for telling me your favourite meal!: ${answer}`);
        _.meal = answer;
        r1.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          console.log(`Thank you for stating your favourite food: ${answer}`);
          _.food = answer;
          r1.question('Which sport is your absolute favourite? ', (answer) => {
            console.log(`Thank you for sharing your favourite sport: ${answer}`);
            _.sport = answer;
            r1.question('What is your superpower? In a few words, tell me what you are amazing at! ', (answer) => {
              console.log(`Thanks for telling me your superpower: ${answer}`);
              _.power = answer;
              let result = (`${_.name} loves listening to ${_.listen} while ${_.activity}, devouring ${_.food} for ${_.meal}, prefers ${_.sport} over any other sport, and is amazing at ${_.power}.`);
              console.log(result);
              r1.close();
            });
          });
        });
      });
    });
  });
});

