const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {

  let delay = i * 50;

  setTimeout(() => {
    process.stdout.write(sentence[i]);
  }, delay)

};

console.log();





  
