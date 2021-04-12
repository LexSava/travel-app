import express = require('express');
import wrap = require('../../common/errors/async-error-wrapper');
import model = require('./user.model');
import types = require('./user.types');
import userService = require('./user.service');

const router = express.Router();

router.post('/registration', wrap(async (req, res): Promise<void> => {
    const result = await userService.regUser(req.body);
    if (result) {
        res.status(201).json(result);
        return;
    }
    res.status(409).json({
        message: [
            'this user is already registered',
            'Указанный пользователь зарегистрирован',
            'Ўказаны карыстальнік зарэгістраваны',
            ]
        });
}));

router.post('/login', wrap(async (req, res): Promise<void> => {
    const result = await userService.loginUser(req.body);
    if (result) {
        res.json(result);
        return;
    }
    res.status(401).json({
        message: [
            'this user is no registered',
            'Указанный пользователь не зарегистрирован',
            'Ўказаны карыстальнік не зарэгістраваны',
        ]
    });
}));

router.put('/lang', wrap(async (req, res): Promise<void> => {
    const result = await userService.changeLang(req.body);
    res.json(result);
}));

export = router;