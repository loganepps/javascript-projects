function processor(transmission) {
  if (transmission.indexOf("::") < 0) {
    return -1;
  }
  let parts = transmission.split("::");
  let rawData = parts[1];
  if (rawData[0] !== "<" || rawData.length - 1 !== ">") {
    rawData = -1;
  }
  return {
    id: Number(parts[0]),
    rawData: rawData,
  };
}

console.log(processor("9701::<489584872710>"));

module.exports = processor;
