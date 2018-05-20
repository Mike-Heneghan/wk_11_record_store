const RecordStore = function(name){
  this.name = name;
  this.funds = 0;
  this.stock = [];
}

RecordStore.prototype.addFunds = function (funds) {
  this.funds += funds;
};

RecordStore.prototype.getStockCount = function () {
  return this.stock.length;
};

RecordStore.prototype.addRecord = function (record) {
  this.stock.push(record);
};

module.exports = RecordStore;
