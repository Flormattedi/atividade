"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
class InfluencersService {
    static validadeId(id) {
        try {
            return new mongodb_1.ObjectId(id);
        }
        catch (error) {
            throw new Error("O id é inválido!");
        }
    }
    static validade(influencer) {
        if (!influencer.nome) {
            throw new Error("Nome não pode ser nulo ou em branco!");
        }
        if (!influencer.numeroSeguidores) {
            throw new Error("Os seguidores não podem ser nulo ou em branco!");
        }
        if (!influencer.principalRedeSocial) {
            throw new Error("A Rede Social não pode ser nula ou em branco!");
        }
        if (typeof influencer.nome !== "string") {
            throw new Error("Nome deve ser um texto!");
        }
        if (typeof influencer.numeroSeguidores !== "number") {
            throw new Error("Seguidores devem ser um número!");
        }
        if (typeof influencer.principalRedeSocial !== "string") {
            throw new Error("Rede Social deve ser um texto!");
        }
        if (influencer.numeroSeguidores < 0) {
            throw new Error("Valor deve ser zero ou positivo!");
        }
        const redesSociais = ["TikTok", "Instagram", "Twitter", "Kawai", "Youtube"];
        if (!redesSociais.includes(influencer.principalRedeSocial)) {
            throw new Error("Rede Social deve ser válida!");
        }
    }
}
exports.default = InfluencersService;
