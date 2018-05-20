const RecordStore = function(name){
  this.name = name;
  this.funds = 0;
  this.stock = [];
}

RecordStore.prototype.addFunds = function (funds) {
  this.funds += funds;
};

RecordStore.prototype.removeFunds = function (funds) {
  this.funds -= funds;
};

RecordStore.prototype.getStockCount = function () {
  return this.stock.length;
};

RecordStore.prototype.addRecord = function (record) {
  this.stock.push(record);
};

RecordStore.prototype.removeRecord = function (recordToRemove) {
  const recordsToKeep = this.stock.filter(record =>
  record !== recordToRemove);
  this.stock = recordsToKeep;
};

module.exports = RecordStore;
