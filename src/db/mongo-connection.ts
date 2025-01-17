import { MongoClient } from "mongodb";

export default class MongoConnection {

    private static conn: MongoClient;
    private static readonly URI = "mongodb://127.0.0.1:27017/";

    public static async getInstace() {
        if (!this.conn) {
            this.conn = await this.openConnection();
        }
        return this.conn;
    }

    private static async openConnection(): Promise<MongoClient> {
        const client = new MongoClient(this.URI);
        const conn = await client.connect();
        console.log("Conexão com o banco de dados inicializada com sucesso!");

        const close = async () => {
            await this.conn.close();
            console.log("Conexão com o banco de dados encerrada com sucesso!");
            process.exit();
        }

        process.on("SIGINT", close);
        process.on("SIGTERM", close);

        return conn;
    }

}