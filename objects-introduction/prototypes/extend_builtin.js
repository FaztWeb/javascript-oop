// We can extend built-in object functionality using prototypes
String.prototype.padLeft = function (width, char = " ") {
  let result = this;

  if (this.length < width) {
    result = new Array(width - this.length + 1).join(char) + this;
  }

  return result;
};

"hello".padLeft(12, "x"); //?

// but in javasrcipt you can use padstart and padEnd
"hello".padEnd(12, "x"); //?
"hello".padStart(12, "x"); //?
