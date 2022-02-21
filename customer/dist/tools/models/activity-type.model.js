"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityTypeSchema = void 0;
const mongoose = require("mongoose");
exports.ActivityTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Activity Type Name must be unique'],
        required: [true, 'ActivityType Name is required'],
    },
    audit: { type: Object },
});
//# sourceMappingURL=activity-type.model.js.map