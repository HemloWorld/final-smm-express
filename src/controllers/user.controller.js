const getAll = async (req, res, service) => {
    try {
        const result = await service.fetchAllUser();

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({errorCode: e});
    }
}

const getById = async (req, res, service) => {
    try {
        const type = req.params.type;
        const id = req.params.id;

        let result;
        switch (type) {
            case 'nfc':
                result = await service.fetchUserByNfcId(id);
                break;

            case 'qr':
                result = await service.fetchUserByQrId(id);
                break;

            default:
                result = await service.fetchUserById(id);
                break;
        }

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({errorCode: e});
    }
}

const getByDate = async (req, res, service) => {
    try {
        const date = req.params.date;
        const result = await service.fetchAbsence(date);

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({errorCode: e});
    }
}

const newAbsence = async (req, res, service) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await service.postAbsence(body, id);

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({errorCode: e});
    }
}

module.exports = { getAll, getById, getByDate, newAbsence};