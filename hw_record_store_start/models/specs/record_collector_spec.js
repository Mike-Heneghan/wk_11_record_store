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

it('should start with no funds', function(){
  const actual = recordCollector.getFunds();
  assert.strictEqual(actual, 0)
});

it('should be able to add funds', function(){
  recordCollector.addFunds(5000);
  const actual = recordCollector.getFunds();
  assert.strictEqual(actual, 5000);
});

it('should be able to remove funds', function(){
  recordCollector.addFunds(5000);
  recordCollector.removeFunds(500);
  const actual = recordCollector.getFunds();
  assert.strictEqual(actual, 4500);
});

it('should start with an empty collection of records', function(){
  const actual = recordCollector.getCollectionSize();
  assert.strictEqual(actual, 0);
})

it('should be able to add a record to it\'s collection', function(){
  recordCollector.addRecord(record1);
  const actual = recordCollector.collection;
  const testCase = [record1];
  assert.deepStrictEqual(actual, testCase);
});

it('should be able to find a record by title', function(){
  recordCollector.addRecord(record1);
  recordCollector.addRecord(record2);
  const actual1 = recordCollector.findRecordByTitle('Neon Bible');
  const actual2 = recordCollector.findRecordByTitle('Their Greatest Hits 1971 - 1975');
  assert.deepStrictEqual(actual1, [record2]);
  assert.deepStrictEqual(actual2, [record1]);
});

it('should be able to remove a record from it\'s collection', function(){
  recordCollector.addRecord(record1);
  recordCollector.addRecord(record2);
  recordCollector.removeRecord(record1);
  const actual = recordCollector.collection;
  assert.deepStrictEqual(actual, [record2]);
});

it('should be able to return true if record is in collection', function(){
  recordCollector.addRecord(record1);
  recordCollector.addRecord(record2);
  const actual = recordCollector.hasRecordBoolean(record2);
  assert.strictEqual(actual, true);
});

it('should be able to return false if record is not in collection', function(){
  recordCollector.addRecord(record2);
  const actual = recordCollector.hasRecordBoolean(record1);
  assert.strictEqual(actual, false);
})

xit('should be able to buy a record if there is sufficient funds');

xit('should be able to sell a record if it has the record');
});
