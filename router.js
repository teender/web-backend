module.exports = (app, passport) => {
  app.get('/', (req, res) => {
    res.status(200).render('messages');
  });
};