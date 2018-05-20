const RecordCollector = function(){
  this.funds = 0;
  this.collection = [];
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
