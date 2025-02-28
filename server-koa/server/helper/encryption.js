import bcrypt from 'bcryptjs';

//import bcrypt from "bcrypt-nodejs";

export const encryption = {
  encrypt: value => {
    const SALT_FACTOR = 5;
    const salt = bcrypt.genSaltSync(SALT_FACTOR);
    const ret = bcrypt.hashSync(value, salt);
    return ret;    
  },
  compare: (value, encrypted) => {
    const ret = bcrypt.compareSync(value, encrypted);
    return ret;
  }
};

export default encryption;

