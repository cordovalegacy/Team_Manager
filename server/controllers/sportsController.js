const Sport = require('../models/sportsModel')

module.exports = {

    getAllSports: (req, res) => {
        Sport.find({})
            .then((allSports) => {
                res.status(200).json(allSports)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    createSport: (req, res) => {
        Sport.create(req.body)
            .then((newSport) => {
                res.status(201).json(newSport)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    getOneSport: (req, res) => {
        Sport.findOne({_id: req.params.id})
            .then((oneSport) => {
                res.status(200).json(oneSport)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    updateSport: (req, res) => {
        Sport.findOneAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then((updatedSport) => {
            res.status(201).json(updatedSport)
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    },

    deleteSport: (req, res) => {
        Sport.deleteOne({_id: req.params.id})
            .then(() => {
                res.status(204).send()
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    }

}