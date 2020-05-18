const PessoaModel = require('../models/pessoaModel');

const create = async data => {
    let pessoa = new PessoaModel(data);
    return await pessoa.save();
}

const updateById = async (id, data) => {
    return await PessoaModel.findByIdAndUpdate(id, {
        $set: { ...data }
    })
}

const getAllWithoutFriends = async () => {
    return await PessoaModel.find({}, 'name email')
}

const getAll = async () => {
    return await PessoaModel.find({});
}

const getAllWithFriendName =  async () => {
    return await PessoaModel.find({})
        .populate('friend', 'name')
}

const removeById = async id => {
    return await PessoaModel.findByIdAndDelete(id);
}

module.exports = { create, getAll, getAllWithoutFriends, getAllWithFriendName, updateById, removeById }