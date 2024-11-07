{
  //Problem-3
  // Problem Title: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.

  const countWordOccurrences = (sentence: string, word: string): number => {
    //Convert lowecase and remove whitespace from sentence and word
    // trim() used for remove whitespace from sentence and word varibale
    const lowerCaseSentence: string = sentence.toLowerCase().trim();
    const lowerWord: string = word.toLowerCase().trim();

    const wordCount: number = lowerCaseSentence.split(lowerWord).length - 1;
    return wordCount;
  };

  const reult1: number = countWordOccurrences(
    "I love typescript",
    "typescript"
  );
  const result2: number = countWordOccurrences("Successful", "success");

  console.log(reult1); //Output:1
  console.log(result2); //Output:1

  //
}
