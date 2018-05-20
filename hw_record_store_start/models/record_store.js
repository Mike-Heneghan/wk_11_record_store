const RecordStore = function(name){
  this.name = name;
  this.funds = 0;
  this.stock = [];
}

RecordStore.prototype.addFunds = function (funds) {
  this.funds += funds;
};

module.exports = RecordStore;
