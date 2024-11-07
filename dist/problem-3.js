"use strict";
{
    //Problem-3
    // Problem Title: Write a TypeScript function countWordOccurrences that takes a sentence (string) and a word (string). It should return the number of times the word appears in the sentence, case-insensitively.
    const countWordOccurrences = (sentence, word) => {
        //Convert lowecase and remove whitespace from sentence and word
        // trim() used for remove whitespace from sentence and word varibale
        const lowerCaseSentence = sentence.toLowerCase().trim();
        const lowerWord = word.toLowerCase().trim();
        const wordCount = lowerCaseSentence.split(lowerWord).length - 1;
        return wordCount;
    };
    const reult1 = countWordOccurrences("I love typescript", "typescript");
    const result2 = countWordOccurrences("Successful", "success");
    console.log(reult1); //Output:1
    console.log(result2); //Output:1
    //
}
