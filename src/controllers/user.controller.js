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

            default:
                result = await service.fetchById(id);
                break;
        }

        res.status(200);
        res.json(result);
    } catch (e) {
        //add logger
    }
}

module.exports = {getAll, getById};