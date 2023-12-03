import mongoose from "mongoose";

const adminsSchema = new mongoose.Schema({
  username: {
    type: String,
    // don't need default because it's required on signup
    // default: "Unknown User",
    required: true,
  },
  password: {
    type: String,
    required: true,
  },

  employeeID: {
    type: String,
    required: true,
  },

  nickname: {
    type: String,
    default: "Unknown User",
  },
  profilePicture: {
    type: Buffer,
    default: Buffer.from("gf1UcxdHTJ2HQ/EGQrO7mQ==", 'base64'),
  },
  personalBio: {
    type: String,
    default: "Tell us more about you!",
  },
  likedPosts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
  posts: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "posts",
    },
  ],
  following: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
    },
  ],
  followingCount: {
    type: Number,
    default: 0,
  },
  followersCount: {
    type: Number,
    default: 0,
  },
  role: {
    type: String,
    enum: ["ADMIN"],
    default: "ADMIN",
    required: true,
  },
}, {collection:"admins"});

export default adminsSchema;
