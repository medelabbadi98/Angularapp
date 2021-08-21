"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const model_1 = require("./model");
exports.router = express_1.Router();
exports.router.post('/product', function (req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const repository = yield model_1.getProductRepository();
            const product = new model_1.Product();
            product.name = req.body.name;
            product.number = req.body.number;
            product.emailAdress = req.body.emailAdress;
            product.socialStatus = req.body.socialStatus;
            product.formations = req.body.formations;
            const result = yield repository.save(product);
            res.send(result);
        }
        catch (err) {
            return next(err);
        }
    });
});
