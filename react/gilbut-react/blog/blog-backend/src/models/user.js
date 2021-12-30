import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UserSchema = new Schema({
  username: String,
  hashedPassword: String,
});

UserSchema.methods.setPassword = async function (password) {
  // this : document instance
  const hash = await bcrypt.hash(password, 10);
  this.hashedPassword = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  // this : document instance
  // ?? 로그인 시도하는 시점에서 this(인스턴스객체)를 참조할 수 있나?
  // 여기서 this.hashedPassword는 mongodb에 저장되어있는 데이터!
  const reseult = await bcrypt.compare(password, this.hashedPassword);
  return reseult;
};

UserSchema.methods.serialize = function () {
  //  hashedPassword 필드가 응답되지 않도록 데이터를 JSON으로 변환한 후 delete를 통해 해당 필드를 지워주기
  const data = this.toJSON();
  delete data.hashedPassword;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this.id,
      username: this.username,
    },
    // eslint-disable-next-line no-undef
    process.env.JWT_SECRET,
    {
      expiresIn: '7d',
    },
  );
  return token;
};

UserSchema.statics.findByUsername = function (username) {
  // this : model
  return this.findOne({ username });
};

const User = mongoose.model('User', UserSchema);
export default User;
