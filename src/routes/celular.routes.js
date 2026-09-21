celularRouter.get("/", async (req, res) => {
    const celular = await celularService.getAll();
    return res.json(celular);
});

celularRouter.post("/", async (req, res) => {
    const celular = await celularService.create(req, body);
    return res.status(201).json(celular);
});