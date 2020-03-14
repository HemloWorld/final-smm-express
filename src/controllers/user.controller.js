const getAll = async (req, res, service) => {
    try {
        const result = await service.fetchAll();
        
        res.status(200);
        res.json(result);
    } catch (e) {
        //add logger
    }
}

const getById = async (req, res, service) => {
    try {
        const uid = req.params.id;
        const result = await service.fetchById(uid);

        res.status(200);
        res.json(result);
    } catch (e) {
        //add logger
    }
}

const getByNfcId = async (req, res, service) => {
    try {
        const uid = req.params.id;
        const result = await service.fetchByNfcId(uid);

        res.status(200);
        res.json(result);
    } catch (e) {
        //add logger
    }
}
module.exports = {getAll, getById, getByNfcId};