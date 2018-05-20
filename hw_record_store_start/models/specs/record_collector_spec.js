const assert = require('assert');
const Record = require('../record');
const RecordCollector = require('../record_collector');

describe('RecordCollector', function(){

  let recordCollector;
  let record1;
  let record2;

  beforeEach(function(){
    record1 = new Record({
      title: 'Their Greatest Hits 1971 - 1975',
      artist: 'Eagles',
      genre: 'rock',
      price: 1000
    });
    record2 = new Record({
      title: 'Neon Bible',
      artist: 'Arcade Fire',
      genre: 'indie rock',
      price: 1500
    });
    recordCollector = new RecordCollector();
  });



});











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
