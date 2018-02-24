function isObject(value) {
  return typeof value === "object" && value != null
}

function convertObjectToJSON(value) {
  if (isObject(value)) return JSON.stringify(value)
  return value
}

function deepEqual(value1, value2) {
  return convertObjectToJSON(value1) === convertObjectToJSON(value2)
}

module.exports = {
  assert: function(expected, actual, message = "Test") {
    if (deepEqual(expected, actual)) {
      console.log('👍  ' + message)
    } else {
      console.log('💩  ' + message + "\n   Assertion failed no match\n   " + util.inspect(expected) + "\n   " + util.inspect(actual));
    }
  },
  assert_true: function(actual, message) {
    assert(true, actual, message)
  },
  assert_false: function(actual, message) {
    assert(false, actual, message)
  }
};
