"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderSchema = void 0;
const mongoose = require("mongoose");
exports.OrderSchema = new mongoose.Schema({
    customerId: {
        type: String,
        unique: [true, 'Product Name must be unique'],
        required: [true, 'Product Name is required'],
    },
    product: { type: Array },
    quantity: { type: Number, default: 1 },
    price: { type: Number, default: 1 },
    status: { type: String, default: 'Pending...' },
    address: { type: String, required: [true, 'Product Name is required'], }
}, { timestamps: true });
//# sourceMappingURL=order.model.js.map