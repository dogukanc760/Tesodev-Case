"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductTypeSchema = void 0;
const mongoose = require("mongoose");
exports.ProductTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Product Type Name must be unique'],
        required: [true, 'Product Type Name is required'],
    },
    audit: { type: Object },
});
//# sourceMappingURL=product-type.model.js.map