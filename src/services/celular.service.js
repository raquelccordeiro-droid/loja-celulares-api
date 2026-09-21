class celularService {
    async getAll() {
        const res = await pool.query("SELECT *");
        return res.rows;
}
    async creats(dados) {
        const res = await pool.query("INSERT INTO... returning, [dados]*");
        return res.rows(0);
    }
}