// Java: Exception
// JavaScript: Error
// const array = new Array(100000000000000000000000000000000);

// Error(Exception) Handling: try -> catch -> finally

function readFile(fileName: string): string {
  if (fileName === 'not exist!') {
    throw new Error(`file not exist! ${fileName}`);
  }
  return 'file contents';
}

function closeFile(fileName: string) {
  //
}

// const fileName = 'not exist!';
const fileName = 'file name';

// try와 관련되어 어떤일을 수행해야한다면 finally안에서 수행하도록 코드를 작성한다
try {
  console.log(readFile(fileName));
} catch (error) {
  console.log(`catched!!`);
} finally {
  closeFile(fileName);
  console.log(`finally`);
}
console.log(`!!`);
