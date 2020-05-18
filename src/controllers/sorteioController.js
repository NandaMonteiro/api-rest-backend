const DrawService = require('../services/sorteioService');

const sorteio = async (req, res) => {
    try {
        const result = await DrawService.draw();
        return res.status(202).json();
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

module.exports = { sorteio: sorteio }