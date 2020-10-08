import mongoose from "mongoose";
import encryption from "../helper/encryption";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: { type: String },
    lastName: { type: String },
    businessCode: { type: String },
    locationCode: { type: String },
    phone: { type: String },
    roles: {
      type: String,
      enum: ["Registered", "Member", "Operator", "Manager", "Owner", "Admin"],
      default: "Member"
    },
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
  },
  {
    timestamps: true
  }
);

//Pre-save of user to database, hash password if password is modified or new
//this no longer works
UserSchema.pre("save", function(next) {
  const user = this;

  if (!user.isModified("password")) return next();

  user.password = encryption.encrypt(user.password);
  user.resetPasswordToken = null;
  user.resetPasswordExpires = null;
  next();
});

// Method to compare password for login
UserSchema.methods.comparePassword = function(candidatePassword, cb) {
  const isMatch = encryption.compare(candidatePassword,this.password);
  cb(null, isMatch);
};

export default mongoose.model("User", UserSchema);
