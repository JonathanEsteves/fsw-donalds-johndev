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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
var client_1 = require("@prisma/client");
require("dotenv").config();
var prismaClient = new client_1.PrismaClient();
var main = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prismaClient.$transaction(function (tx) { return __awaiter(void 0, void 0, void 0, function () {
                    var restaurant, combosCategory, hamburguersCategory, frenchFriesCategory, drinksCategory, desertsCategory;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, tx.restaurant.deleteMany()];
                            case 1:
                                _a.sent();
                                return [4 /*yield*/, tx.restaurant.create({
                                        data: {
                                            name: "Grill Master Donalds",
                                            slug: "grill-master-donalds",
                                            description: "O melhor fast food do mundo",
                                            avatarImageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQvcNP9rHlEJu1vCY5kLqzjf29HKaeN78Z6pRy",
                                            coverImageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQac8bHYlkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
                                        },
                                    })];
                            case 2:
                                restaurant = _a.sent();
                                return [4 /*yield*/, tx.menuCategory.create({
                                        data: {
                                            name: "Combos",
                                            restaurantId: restaurant.id,
                                        },
                                    })];
                            case 3:
                                combosCategory = _a.sent();
                                return [4 /*yield*/, tx.product.createMany({
                                        data: [
                                            {
                                                name: "McOferta Média Big Mac Duplo",
                                                description: "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.",
                                                price: 39.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQaHB8tslkBUjlHSKiuseLm2hIFzVY0OtxEPnw",
                                                menuCategoryId: combosCategory.id,
                                                restaurantId: restaurant.id,
                                                ingredients: [
                                                    "Pão com gergilim",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Alface americana",
                                                    "Queijo fatiado sabor cheddar",
                                                    "Molho especial",
                                                    "Cebola",
                                                    "Picles",
                                                ],
                                            },
                                            {
                                                name: "Novo Brabo Melt Onion Rings",
                                                description: "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
                                                price: 41.5,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQeGQofnEPyQaHEV2WL8rGUs41oMICtYfNkphl",
                                                menuCategoryId: combosCategory.id,
                                                restaurantId: restaurant.id,
                                                ingredients: [
                                                    "Pão tipo brioche",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Méquinese",
                                                    "Maionese especial com sabor de carne defumada",
                                                    "Onion rings",
                                                    "Fatias de bacon",
                                                    "Queijo processado sabor cheddar",
                                                    "Molho lácteo com queijo tipo cheddar",
                                                ],
                                            },
                                            {
                                                name: "McCrispy Chicken Elite",
                                                description: "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
                                                price: 39.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQr12aTqPo3SsGjBJCaM7yhxnbDlXeL5N9dckv",
                                                menuCategoryId: combosCategory.id,
                                                restaurantId: restaurant.id,
                                                ingredients: [
                                                    "Pão tipo brioche",
                                                    "Batata",
                                                    "Molho Honey&Fire",
                                                    "Bacon em fatias",
                                                    "Alface",
                                                    "Tomate",
                                                    "Queijo sabor cheddar",
                                                    "Carne 100% de peito de frango",
                                                ],
                                            },
                                            {
                                                name: "Duplo Cheddar McMelt",
                                                description: "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
                                                price: 36.2,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQWdq0w8niS9XCLQu7Nb4jvBYZze16goaOqsKR",
                                                menuCategoryId: combosCategory.id,
                                                restaurantId: restaurant.id,
                                                ingredients: [
                                                    "Pão escuro com gergelim",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Molho lácteo com queijo tipo cheddar",
                                                    "Cebola ao molho shoyu",
                                                ],
                                            },
                                        ],
                                    })];
                            case 4:
                                _a.sent();
                                return [4 /*yield*/, tx.menuCategory.create({
                                        data: {
                                            name: "Lanches",
                                            restaurantId: restaurant.id,
                                        },
                                    })];
                            case 5:
                                hamburguersCategory = _a.sent();
                                return [4 /*yield*/, tx.product.createMany({
                                        data: [
                                            {
                                                name: "Big Mac",
                                                description: "Quatro hambúrgueres (100% carne bovina), alface americana, queijo fatiado sabor cheddar, molho especial, cebola, picles e pão com gergilim, acompanhamento e bebida.",
                                                price: 39.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQKfI6fivqActTvBGLXfQe4a8CJ6d3HiR7USPK",
                                                menuCategoryId: hamburguersCategory.id,
                                                restaurantId: restaurant.id,
                                                ingredients: [
                                                    "Pão com gergelim",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Alface americana",
                                                    "Queijo fatiado sabor cheddar",
                                                    "Molho especial",
                                                    "Cebola",
                                                    "Picles",
                                                ],
                                            },
                                            {
                                                name: "Duplo Quarterão",
                                                description: "Dois hambúrgueres de carne 100% bovina, méquinese, a exclusiva maionese especial com sabor de carne defumada, onion rings, fatias de bacon, queijo processado sabor cheddar, o delicioso molho lácteo com queijo tipo cheddar tudo isso no pão tipo brioche trazendo uma explosão de sabores pros seus dias de glória! Acompanhamento e Bebida.",
                                                ingredients: [
                                                    "Pão tipo brioche",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Méquinese",
                                                    "Maionese especial com sabor de carne defumada",
                                                    "Onion rings",
                                                    "Fatias de bacon",
                                                    "Queijo processado sabor cheddar",
                                                    "Molho lácteo com queijo tipo cheddar",
                                                ],
                                                price: 41.5,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ99rtECuYaDgmA4VujBU0wKn2ThXJvF3LHfyc",
                                                menuCategoryId: hamburguersCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "McMelt",
                                                description: "Composto por pão tipo brioche com batata, molho Honey&Fire, bacon em fatias, alface, tomate, queijo sabor cheddar e carne 100% de peito de frango, temperada e empanada, acompanhamento e bebida.",
                                                ingredients: [
                                                    "Pão tipo brioche",
                                                    "Batata",
                                                    "Molho Honey&Fire",
                                                    "Bacon em fatias",
                                                    "Alface",
                                                    "Tomate",
                                                    "Queijo sabor cheddar",
                                                    "Carne 100% de peito de frango",
                                                ],
                                                price: 39.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQUY0VlDTmvPeJLoyOjzNsMqFdxUI423nBl6br",
                                                menuCategoryId: hamburguersCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "McNífico Bacon",
                                                description: "Dois hambúrgueres (100% carne bovina), molho lácteo com queijo tipo cheddar, cebola ao molho shoyu e pão escuro com gergelim, acompanhamento e bebida.",
                                                ingredients: [
                                                    "Pão escuro com gergelim",
                                                    "Hambúrguer de carne 100% bovina",
                                                    "Molho lácteo com queijo tipo cheddar",
                                                    "Cebola ao molho shoyu",
                                                ],
                                                price: 36.2,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBBmifbjzEVXRoycAtrP9vH45bZ6WDl3QF0a1",
                                                menuCategoryId: hamburguersCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                        ],
                                    })];
                            case 6:
                                _a.sent();
                                return [4 /*yield*/, tx.menuCategory.create({
                                        data: {
                                            name: "Fritas",
                                            restaurantId: restaurant.id,
                                        },
                                    })];
                            case 7:
                                frenchFriesCategory = _a.sent();
                                return [4 /*yield*/, tx.product.createMany({
                                        data: [
                                            {
                                                name: "Fritas Grande",
                                                description: "Batatas fritas crocantes e sequinhas. Vem bastante!",
                                                ingredients: [],
                                                price: 10.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQNd3jSNrcJroaszwjUAlM6iSO5ZTx2HV70t31",
                                                menuCategoryId: frenchFriesCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Fritas Média",
                                                description: "Batatas fritas crocantes e sequinhas. Vem uma média quantidade!",
                                                ingredients: [],
                                                price: 9.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7Y6lv9tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
                                                menuCategoryId: frenchFriesCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Fritas Pequena",
                                                description: "Batatas fritas crocantes e sequinhas. Vem pouquinho (é bom pra sua dieta)!",
                                                ingredients: [],
                                                price: 5.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ5toOZxYa1oARJCUGh4EY3x8NjXHtvZ7lnVfw",
                                                menuCategoryId: frenchFriesCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                        ],
                                    })];
                            case 8:
                                _a.sent();
                                return [4 /*yield*/, tx.menuCategory.create({
                                        data: {
                                            name: "Bebidas",
                                            restaurantId: restaurant.id,
                                        },
                                    })];
                            case 9:
                                drinksCategory = _a.sent();
                                return [4 /*yield*/, tx.product.createMany({
                                        data: [
                                            {
                                                name: "Coca-cola",
                                                description: "Coca-cola gelada para acompanhar seu lanche.",
                                                ingredients: [],
                                                price: 5.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQJS1b33q29eEsh0CVmOywrqx1UPnJpRGcHN5v",
                                                menuCategoryId: drinksCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Fanta Laranja",
                                                description: "Fanta Laranja gelada para acompanhar seu lanche.",
                                                ingredients: [],
                                                price: 5.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQW7Kxm9gniS9XCLQu7Nb4jvBYZze16goaOqsK",
                                                menuCategoryId: drinksCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Água Mineral",
                                                description: "A bebida favorita do Cristiano Ronaldo.",
                                                ingredients: [],
                                                price: 2.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ7i05S5tkc0L9oMIXZsFJtwnBh2KCz3y6uSW1",
                                                menuCategoryId: drinksCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                        ],
                                    })];
                            case 10:
                                _a.sent();
                                return [4 /*yield*/, tx.menuCategory.create({
                                        data: {
                                            name: "Sobremesas",
                                            restaurantId: restaurant.id,
                                        },
                                    })];
                            case 11:
                                desertsCategory = _a.sent();
                                return [4 /*yield*/, tx.product.createMany({
                                        data: [
                                            {
                                                name: "Casquinha de Baunilha",
                                                description: "Casquinha de sorvete sabor baunilha.",
                                                ingredients: [],
                                                price: 3.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQtfuQrAKkI75oJfPT0crZxvX82ui9qV3hLFdY",
                                                menuCategoryId: desertsCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Casquinha de Chocolate",
                                                description: "Casquinha de sorvete sabor chocolate.",
                                                ingredients: [],
                                                price: 3.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQBH21ijzEVXRoycAtrP9vH45bZ6WDl3QF0a1M",
                                                menuCategoryId: desertsCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                            {
                                                name: "Casquinha de Mista",
                                                description: "Casquinha de sorvete sabor baunilha e chocolate.",
                                                ingredients: [],
                                                price: 2.9,
                                                imageUrl: "https://u9a6wmr3as.ufs.sh/f/jppBrbk0cChQ4rBrtULypXmR6JiWuhzS8ALjVkrF3yfatC7E",
                                                menuCategoryId: desertsCategory.id,
                                                restaurantId: restaurant.id,
                                            },
                                        ],
                                    })];
                            case 12:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
main()
    .catch(function (e) {
    throw e;
})
    .finally(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prismaClient.$disconnect()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
