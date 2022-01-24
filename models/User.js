const { Schema, model } = require('mongoose');
const { Thought } = require('.');

// Schema to create User model
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        match: function (v) {
          // Regex solution extracted from previous homework assignment as pertaining to email match
          return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
        },
        message: "Please enter a valid email"
      },
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought',
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user',
      }
    ],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
  }
);

// Create a virtual property `friendCount`
userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  });
//

const User = model('user', userSchema);

module.exports = User;
