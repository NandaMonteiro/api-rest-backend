const PessoaRepository = require('../repositories/pessoaRepository');

const create = async (req, res) => {
    const { name, email } = req.body;
    try {
        const pessoa = await PessoaRepository.create({
            name,
            email
        });
        return res.status(201).json(pessoa);
    } catch (err) {
        return res.status(500).json({
            message: err.message
        })
    }
}

const update = async (req, res) => {
    const { name, email } = req.body;
    const { id } = req.params;
    try {
        const pessoa = await PessoaRepository.updateById(id, {
            name,
            email
        })
        if (!pessoa) {
            return res.status(404).json({
                message: 'Pessoa nao encontrada'
            });
        }
        return res.status(202).json();
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const remove = async (req, res) => {
    const { id } = req.params;
    try {
        const pessoa = await PessoaRepository.removeById(id);
        if (!pessoa) {
            return res.status(404).json({
                message: 'Pessoa nao encontrada'
            });
        }
        return res.status(204).json();
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

const read = async (req, res) => {
    try {
        const pessoa = await PessoaRepository.getAllWithoutFriends();
        return res.status(200).json(pessoa);
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { create, read, update, remove }