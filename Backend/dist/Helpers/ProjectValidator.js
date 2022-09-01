"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSchema1 = void 0;
const joi_1 = __importDefault(require("joi"));
exports.ProjectSchema1 = joi_1.default.object({
    project_name: joi_1.default.string().required(),
    user_id: joi_1.default.string().required(),
});
