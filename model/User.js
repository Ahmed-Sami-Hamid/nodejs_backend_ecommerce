import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
    wishLists: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "WishList",
      },
    ],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    hasShippingAddress: {
      type: Boolean,
      default: false,
    },
    shippingAddress: {
      firstName: {
        type: String,
      },
      lastName: {
        type: String,
      },
      address: {
        type: String,
      },
      city: {
        type: String,
      },
      postCode: {
        type: String,
      },
      province: {
        type: String,
      },
      country: {
        type: String,
      },
      phone: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  }
);

// Compile the Schema to model
const User = mongoose.model("User", UserSchema);

export default User;
