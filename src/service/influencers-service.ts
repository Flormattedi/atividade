import { ObjectId } from "mongodb";
import Influencer from "../model/influencer";

export default class InfluencersService {

    public static validadeId(id: string): ObjectId {
        try {
            return new ObjectId(id);
        } catch (error) {
            throw new Error("O id é inválido!");
        }
    }

    public static validade(influencer: Influencer) {
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

        const redesSociais= ["TikTok", "Instagram", "Twitter", "Kawai", "Youtube"];

        if (!redesSociais.includes(influencer.principalRedeSocial)) {
            throw new Error("Rede Social deve ser válida!");
        }
    }

}