const firstTouch = () => 2


const simplify = text => text
  .toLowerCase()
  .replace(/[^a-z\s\dA-Z]/g, '')
  .replace(/\s+|\\t|\\n/g, ' ')
  .trim()


const createMetrics = text => ({
  totalLetters: text
    .length,
  totalWords: text
    .split(' ').length,
  uniqueWords: Object.keys(text.split(' ')
    .reduce((acc,e)=>{
      acc[e] = ~~acc[e]++
      return acc
    },{})).length,
  longWords: text
    .split(' ')
    .filter(e=>e.length>5)
    .length,
  averageWordLength: text
    .split(' ')
    .reduce((acc,e, _, arr)=>{
      acc += e.length/arr.length
      return acc
    },0),
  wordOccurrences: text
    .split(' ')
    .reduce((acc,e)=>{
      acc[e] = ~~acc[e]+1
      return acc
    },{})
})

module.exports = {
  simplify,
  createMetrics
}
