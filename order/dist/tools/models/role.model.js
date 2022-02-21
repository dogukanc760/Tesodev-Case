"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoleSchema = void 0;
const mongoose = require("mongoose");
exports.RoleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Role Name must be unique'],
        required: [true, 'Role Name is required'],
    },
    audit: { type: Object },
});
//# sourceMappingURL=role.model.js.map