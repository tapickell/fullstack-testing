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
    if (expected === actual) {
      console.log('👍  ' + message)
    } else {
      diff = util.inspect(expected) + "\n   " + util.inspect(actual);
      console.log('💩  ' + message + "\n   Assertion failed no match\n   " + diff);
    }
  },
  assert_true: function(actual, message) {
    assert(true, actual, message)
  },
  assert_false: function(actual, message) {
    assert(false, actual, message)
  }
};
