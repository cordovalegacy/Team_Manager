const SportController = require('../controllers/sportsController')

module.exports = (app) => {
    app.post('/api/sports', SportController.createSport)
    app.get('/api/sports', SportController.getAllSports)
    app.get('/api/sports/:id', SportController.getOneSport)
    app.put('/api/sports/:id', SportController.updateSport)
    app.delete('/api/sports/:id', SportController.deleteSport)
}