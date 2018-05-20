const RecordCollector = function(){
  this.funds = 0;
  this.collection = [];
};

RecordCollector.prototype.getFunds = function () {
  return this.funds;
};

RecordCollector.prototype.addFunds = function (funds) {
  this.funds += funds;
};

RecordCollector.prototype.removeFunds = function (funds) {
  this.funds -= funds;
};

RecordCollector.prototype.getCollectionSize = function () {
  return this.collection.length;
};

RecordCollector.prototype.addRecord = function (record) {
  this.collection.push(record);
};

RecordCollector.prototype.findRecordByTitle = function (title) {
  const foundRecord = this.collection.filter(record =>
    record.title === title);
    return foundRecord;
  };

RecordCollector.prototype.removeRecord = function (recordToRemove) {
  const recordsToKeep = this.collection.filter(record =>
    record!== recordToRemove);
    this.collection = recordsToKeep;
  };

RecordCollector.prototype.hasRecordBoolean = function(record){
  return this.collection.includes(record);
  }

RecordCollector.prototype.sortByArtist = function (){
  this.collection.sort(compareByArtistName);
}

compareByArtistName = function(a,b){
  if(a.title.toLowerCase() < b.title.toLowerCase()){
    return -1};
  if(a.title.toLowerCase() > b.title.toLowerCase()){
    return 1
  };
  return 0;
};


    module.exports = RecordCollector;


    // MVP
    // A record collector:
    //
    // should start with no funds
    // should be able to add funds
    // should be able to remove funds
    // should start with an empty collection of records
    // should be able to add a record to it's collection
    // should be able to find a record by title
    // should be able to remove a record from it's collection
    // should be able to buy a record if it has enough funds
    // should be able to sell a record if it has the record
