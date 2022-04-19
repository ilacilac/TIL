let count = 0;

function increase() {
  count++;
}
function getCount() {
  return count;
}

module.exports.increase = increase;
module.exports.getCount = getCount;
