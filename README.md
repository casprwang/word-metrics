# word-count
show the word count of an article/paragraph

## Install

```
npm i word-count
```

## Usage
```js
const wordCount = require('word-count')

const simplifiedWords = wordCount.simplify('Hello! My name is Song Wang 1 2 3, I am creeeeeazy #@$@!% n\n\n\t\t\t')
simplifiedWords
//=> 'hello my name is song wang 1 2 3 i am creeeeeazy n'

wordCount.createMetrics(simplifiedWords)
//=> 
  {
    totalLetters: 50,
    totalWords: 13,
    uniqueWords: 13,
    longWords: 1,
    averageWordLength: 2.923076923076923,
    wordOccurrences:
     { '1': 1,
       '2': 1,
       '3': 1,
       hello: 1,
       my: 1,
       name: 1,
       is: 1,
       song: 1,
       wang: 1,
       i: 1,
       am: 1,
       creeeeeazy: 1,
       n: 1 } 
   }

```
## API
### wordCount.simplify(text: string): string
### wordCount.metrics(text: string): object
