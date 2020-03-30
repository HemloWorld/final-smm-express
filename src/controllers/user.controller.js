const getAll = async (req, res, service) => {
    try {
        const result = await service.fetchAll();

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({ errorCode: e.message });
    }
}

const getById = async (req, res, service) => {
    try {
        const type = req.params.type;
        const id = req.params.id;

        let result;
        switch (type) {
            case 'nfc':
                result = await service.fetchByNfcId(id);
                break;

            case 'qr':
                result = await service.fetchByQrId(id);
                break;

            case 'name':
                result = await service.fetchByName(id);
                break;

            default:
                result = await service.fetchById(id);
                break;
        }

        if (result) {
            res.status(200);
            res.json(result);
        } else {
            res.status(404);
            res.json([]);
        }
    } catch (e) {
        res.status(500);
        res.json({ errorCode: e.message });
    }
}

module.exports = { getAll, getById };