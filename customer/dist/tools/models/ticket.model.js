"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketSchema = void 0;
const mongoose = require("mongoose");
exports.TicketSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Ticket Name must be unique'],
        required: [true, 'Ticket Name is required'],
    },
    description: {
        type: String,
        required: [true, 'Ticket description is required'],
    },
    audit: { type: Object },
    type: { type: Object, required: [true, 'Ticket Type is required'] },
    responsible: {
        type: Object,
        required: [true, 'Ticket responsible user is required'],
    },
    activities: { type: Array },
    inventories: { type: Array },
});
//# sourceMappingURL=ticket.model.js.map