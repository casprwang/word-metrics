import mod from '.'

test(`simplify test`, ()=> {
  expect(mod.simplify('..,\n\t')).toBe('')
  expect(mod.simplify('a b c 1,2,3')).toBe('a b c 123')
  expect(mod.simplify('abc a,b,c')).toBe('abc abc')
  expect(mod.simplify('Helllo, my -! This is a great day to say helllo.\n\n\tHelllo! 2 3 4 23')).toBe('helllo my this is a great day to say helllo helllo 2 3 4 23')
})

test(`metrics test`, ()=> {
  expect(mod.createMetrics('a b c').averageWordLength).toBe(1)
  expect(mod.createMetrics('a b c').totalWords).toBe(3)
})
