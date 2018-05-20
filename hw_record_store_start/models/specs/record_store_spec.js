const Record = require('../record');
const RecordStore = require('../record_store');
const assert = require('assert');

describe('Record Store', function(){
  let record1;
  let record2;
  let recordStore;

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
    recordStore = new RecordStore('Tower Records');
  });

  it('should have a name', function(){
    const actual = recordStore.name;
    assert.strictEqual(actual, 'Tower Records');
  });

  xit('should start with no funds', function(){
    const actual = recordStore.funds;
    assert.strictEqual(actual, 0);
  });

  xit('should be able to add funds', function(){
    recordStore.addFunds(10000);
    const actual = recordStore.funds;
    assert.strictEqual(actual, 10000);
  });

  xit('should start with an empty collection of records', function(){
    const actual = recordStore.getCollectionSize();
    assert.strictEqual(actual, 0);
  });

  xit('shoul be able to add a record to it\'s stock', function(){
    recordStore.addRecord(record1);
    const actual = recordStore.collection;
    assert.strictEqual(actual, [record1]);
  });

  xit('should be able to remove a collection from it\'s stock', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.removeRecord(record1);
    const actual = recordStore.collection;
    assert.deepStrictEqual(actual, [record2]);
  });

  xit('should be able to sell a record if it has it in it\'s colleciton')

  xit('should be able to sell a record if it has the record')
});
