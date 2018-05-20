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

  it('should start with no funds', function(){
    const actual = recordStore.funds;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add funds', function(){
    recordStore.addFunds(10000);
    const actual = recordStore.funds;
    assert.strictEqual(actual, 10000);
  });

  it('should be able to reduce funds', function(){
    recordStore.addFunds(10000);
    recordStore.removeFunds(5000);
    const actual = recordStore.funds;
    assert.strictEqual(actual, 5000);
  })

   it('should start with an empty collection of records', function(){
    const actual = recordStore.getStockCount();
    assert.strictEqual(actual, 0);
  });

  it('shoul be able to add a record to it\'s stock', function(){
    recordStore.addRecord(record1);
    const actual = recordStore.stock;
    assert.deepStrictEqual(actual, [record1]);
  });

  it('should be able to remove a collection from it\'s stock', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.removeRecord(record1);
    const actual = recordStore.stock;
    assert.deepStrictEqual(actual, [record2]);
  });

  it('should be able to return true if record is in collection', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    const actual = recordStore.hasRecordBoolean(record1);
    assert.strictEqual(actual, true);
  });

  it('should be able to return false if record is not in collection', function(){
    recordStore.addRecord(record2);
    const actual = recordStore.hasRecordBoolean(record1);
    assert.strictEqual(actual, false);
  })

  xit('should be able to sell a record if it has it in it\'s colleciton')

  xit('should be able to sell a record if it has the record')
});
