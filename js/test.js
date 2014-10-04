Parse.initialize("2HkrpyAX34c0Im8JD4Ngl9HCgdxCZrDASAAXfOjG", "qmkrsyiTS7omI1i9Xg29JlUyckSdfbgfjuI4YNRS");
    




var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
      testObject.save({foo: "bar"}, {
      success: function(object) {
        $(".success").show();
      },
      error: function(model, error) {
        $(".error").show();
      }
});

var TestObject = Parse.Object.extend("TestObject");
var testObject = new TestObject();
testObject.save({foo: "bar"}).then(function(object) {
  alert("yay! it worked");
});