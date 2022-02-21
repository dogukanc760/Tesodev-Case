"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryTypeSchema = void 0;
const mongoose = require("mongoose");
exports.InventoryTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Inventory Type Name must be unique'],
        required: [true, 'Inventory Type Name is required'],
    },
    audit: { type: Object },
});
//# sourceMappingURL=inventory-type.model.js.map