"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketTypeSchema = void 0;
const mongoose = require("mongoose");
exports.TicketTypeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Ticket Type Name must be unique'],
        required: [true, 'Ticket Type Name is required'],
    },
    audit: { type: Object },
});
//# sourceMappingURL=ticket-type.model.js.map