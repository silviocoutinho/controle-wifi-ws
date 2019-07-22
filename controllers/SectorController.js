function SectorController() {}

SectorController.prototype.getAll = function (req, res, next) {
  res.send('Get All Sectors');
};
SectorController.prototype.getById = function (req, res, next) {
  res.send('Get a specific Sector');
};
SectorController.prototype.create = function (req, res, next) {
  res.send('Create a new Sector');
};
SectorController.prototype.update = function (req, res, next) {
  res.send('Update a Sector');
};
SectorController.prototype.remove = function (req, res, next) {
  res.send('Remove a Sector');
};

module.exports = new SectorController();
