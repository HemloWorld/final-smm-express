const newAbsence = async (req, res, service) => {
    try {
        const body = req.body;
        const id = req.params.id;
        const result = await service.postAbsence(body, id);

        res.status(200);
        res.json(result);
    } catch (e) {
        res.status(500);
        res.json({ errorCode: e.message });
    }
}

const getAttendance = async (req, res, next, service) => {
    try {
        const limit = 10;
        let page = req.query.page;
        const type = req.params.type;

        let result;
        if (page == null) page = 0;
        switch (type) {
            case 'id':
                const id = req.query.id;
                if (id) result = await service.fetchById(id, page, limit);
                else next();
                break;

            case 'date':
                const date = req.query.date;
                if (date) result = await service.fetchByDate(date, page, limit);
                else next();
                break;

            default:
                next();
                break;
        }

        if (result) {
            res.status(200);
            res.json(result);
        } else {
            res.status(404);
            res.json(result);
        }
    } catch (e) {
        res.status(500);
        res.json({ errorCode: e.message });
    }
}

module.exports = { newAbsence, getAttendance };