"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitySchema = void 0;
const mongoose = require("mongoose");
exports.ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Activity Name must be unique'],
        required: [true, 'Activity Name is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Activity Type is required'] },
});
//# sourceMappingURL=activity.model.js.map