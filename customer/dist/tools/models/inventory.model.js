"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventorySchema = void 0;
const mongoose = require("mongoose");
exports.InventorySchema = new mongoose.Schema({
    barcode: {
        type: Number,
        unique: [true, 'Inventory barcode must be unique'],
        required: [true, 'Inventory barcode is required'],
    },
    description: {
        type: String,
        required: [true, 'Inventory description is required'],
    },
    audit: { type: Object },
    type: { type: Object },
    product: {
        type: Object,
        required: [true, 'Inventory Product is required'],
    },
});
//# sourceMappingURL=inventory.model.js.map