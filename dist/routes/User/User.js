"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express")); // Tanda kutip yang benar
const controllers_1 = require("../../controllers"); // Pastikan jalur ini benar
exports.router = express_1.default.Router({
    strict: true
});
exports.router.post('/', (req, res) => {
    controllers_1.userController.create(req, res); // Memanggil metode create
});
exports.router.get('/', (req, res) => {
    controllers_1.userController.read(req, res); // Memanggil metode read
});
exports.router.patch('/', (req, res) => {
    controllers_1.userController.update(req, res); // Memanggil metode update
});
exports.router.delete('/', (req, res) => {
    controllers_1.userController.delete(req, res); // Memanggil metode delete
});
