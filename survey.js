const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const survey = () => {
  const array = [];
  const question1 = () => {
    rl.question("What's your name? Nicknames are also acceptable :)", (userName) => {
      console.log(`Thank you for your valuable feedback: ${userName}`)
      array.push(userName);
      question2();
    })
  }

  question1();

  const question2 = () => {
    rl.question("What's an activity you like doing?", (activity) => {
      console.log(`${activity} sounds like fun!`);
      array.push(activity);
      question3();
    })
  }

  const question3 = () => {
    rl.question("What do you listen to while doing that?", (music) => {
      console.log(`You've inputted: ${music}`);
      array.push(music);
      question4();
    })
  }

  const question4 = () => {
    rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (meal) => {
      console.log(`You've inputted: ${meal}`);
      array.push(meal);
      question5();
    })
  }

  const question5 = () => {
    rl.question("What's your favourite thing to eat for that meal?", (food) => {
      console.log(`You've inputted: ${food}`);
      array.push(food);
      question6();
    })
  }

  const question6 = () => {
    rl.question("Which sport is your absolute favourite?", (sport) => {
      console.log(`You've inputted: ${sport}`);
      array.push(sport);
      question7();
    })
  }

  const question7 = () => {
    rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (superpower) => {
      console.log(`You've inputted: ${superpower}`);
      array.push(superpower);
      userBio();
    })
  }

  const userBio = () => {
    console.log(`${array[0]} likes to listen to ${array[2]} while they're ${array[1]}. They love eating ${array[4]} for ${array[3]}. They love ${array[5]}, and are amazing at ${array[6]}!`)
    rl.close();
  }
  
}

survey();


