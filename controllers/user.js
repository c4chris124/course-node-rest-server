const { response, request } = require('express')

const usersGet = (req = request , res) => {
    const {q, name = 'no name', apikey, page = 1, limit} = req.query
    res.json({
        msg: 'get API - controller',
        q,
        name,
        apikey,
        page,
        limit
    })
}

const userPost = (req, res) => {
    const {name, age} = req.body;
    res.json({
        msg: 'post API - controller',
        name,
        age
    })
}

const userPut = (req, res) => {
    const {id} = req.params
    res.json({
        msg: 'put API - controller',
        id
    })
}

const userPatch = (req, res) => {
    res.json({
        msg: 'patch API - controller'
    })
}

const userDelete = (req, res) => {
    res.json({
        msg: 'delete API - controller'
    })
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userPatch,
    userDelete
}