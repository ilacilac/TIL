Node에서 exports는 module.exports의 참조값을 가지고 있다. 그러므로 module을 사용할 때,
export = () => {} 이런식으로 할당하지 말고
module.export = () => {} 이런식으로 할당
