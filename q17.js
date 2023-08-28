var rows = 5;

for (var i = 1; i <= rows; i++) {
  for (var j = 1; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log();
}
