var test = require('./testing');

          //expected, actual value, message
test.assert(6, add(2,4), "assert that add function works with positive integers")

function add(a, b) {
  return a + b
}

test.assert([1,2,3,4], [1,2,3,4], "Arrays can match")
test.assert([2,3,4], [1,2,3,4], "Arrays that are different DONT match")
test.assert(
  {
    "a": "A",
    "b": "B"
  },
  {
    "a": "A",
    "b": "B"
  }, "Objects can match")
test.assert(
{
  "a": "A",
  "b": "B"
},
{
  "a": "A",
  "b": "B:"
}, "Objects with different value DONT match")
test.assert(
  {
    "a": "A",
    "b": "B"
  },
  {
    "a": "A",
    "c": "B"
  }, "Objects with different keys DONT match")
