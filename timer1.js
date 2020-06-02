process.argv.splice(0,2);

process.argv.forEach(number => {

  let time = number * 1000;

  if (number > 0 ) {
    setTimeout(() => {
      process.stdout.write(`\rWake Up!\n`)}, time);

  } else {
      process.stdout.write('\rTry Again\n');
  }

});

