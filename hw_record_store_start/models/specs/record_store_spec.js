const Record = require('../record');
const RecordStore = require('../record_store');
const assert = require('assert');

describe('Record Store', function(){
  let record1;
  let record2;
  let record3;
  let record4;
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
    record3 = new Record({
      title: 'I See You',
      artist: 'The xx',
      genre: 'indie rock',
      price: 1750
    });
    record4 = new Record({
      title: 'The Suburbs',
      artist: 'Arcade Fire',
      genre: 'indie rock',
      price: 1000
    })
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

  it('should be able to find all records which match a given genre', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    const actual1 = recordStore.findByProperty({genre: 'indie rock'});
    const actual2 = recordStore.findByProperty({genre: 'indie rock', artist: 'Arcade Fire'});
    const actual3 = recordStore.findByProperty({genre: 'indie rock', artist: 'Arcade Fire', price: 1000});
    assert.deepStrictEqual(actual1, [record2, record3, record4]);
    assert.deepStrictEqual(actual2, [record2, record4]);
    assert.deepStrictEqual(actual3, [record4]);
  });

  it('should be able to find all records which match a given title', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    const actual = recordStore.findByProperty({title: 'Neon Bible'});
    assert.deepStrictEqual(actual, [record2]);
  });

  it('should be able to find all records which match a given artist', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    const actual = recordStore.findByProperty({artist: 'Arcade Fire'});
    assert.deepStrictEqual(actual, [record2, record4]);
  });

  it('should be able to find all records which match on multiple attributes', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordStore.addRecord(record3);
    recordStore.addRecord(record4);
    const actual = recordStore.findByProperty({genre: 'indie rock', artist: 'Arcade Fire', price: 1500});
    assert.deepStrictEqual(actual, [record2]);
  });

});
