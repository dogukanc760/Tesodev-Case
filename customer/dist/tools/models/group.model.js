"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupSchema = void 0;
const mongoose = require("mongoose");
exports.GroupSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Group Name must be unique'],
        required: [true, 'Group Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Group description is required'],
    },
    audit: { type: Object },
    roles: { type: Array },
});
//# sourceMappingURL=group.model.js.map