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

  RecordStore.prototype.hasRecordBoolean = function (record) {
    return this.stock.includes(record);
  };

  RecordStore.prototype.findByProperty = function (queryObject) {
    const searchTerms = Object.entries(queryObject);
    const foundRecords = this.stock.filter(record =>
    record[`${searchTerms[0][0]}`] === searchTerms[0][1])
    console.log(searchTerms[0][0]);
    console.log(searchTerms[0][1]);
    return foundRecords;
  };

  module.exports = RecordStore;
