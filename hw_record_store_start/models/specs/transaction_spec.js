const Record = require('../record');
const RecordStore = require('../record_store');
const RecordCollector = require('../record_collector');
const Transaction =require('../transaction');
const assert = require('assert');

describe('Transaction', function(){
  let recordCollector;
  let recordStore;
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
    recordStore = new RecordStore('Tower Records');
  });

  it('should have a buyer', function(){
    transaction = new Transaction(recordCollector, recordStore);
    const actual = transaction.buyer;
    assert.strictEqual(actual, recordCollector);
  })

  it('should have a seller', function(){
    transaction = new Transaction(recordCollector, recordStore);
    const actual = transaction.seller
    assert.strictEqual(actual, recordStore);
  })

  it('seller should be able to sell', function(){
    transaction = new Transaction(recordStore, recordCollector);
    recordCollector.addRecord(record1);
    recordCollector.addRecord(record2);
    transaction.sellerSells(record2);
    const recordNoLongerInCollection = recordCollector.collection;
    const fundsIncreasedByRecordPrice = recordCollector.funds;
    assert.deepStrictEqual(recordNoLongerInCollection, [record1]);
    assert.strictEqual(fundsIncreasedByRecordPrice, 1500);
  })

  it('should be able to hand the exchange of a record when the seller has the record and the buyer has enough funds.', function(){
    recordStore.addRecord(record1);
    recordStore.addRecord(record2);
    recordCollector.addFunds(5000);
    transaction = new Transaction(recordCollector, recordStore);
    transaction.sell(record1);
    const collectorCharged = recordCollector.funds;
    const storePaid = recordStore.funds;
    const collectorHasRecord = recordCollector.collection;
    const storeNoLongerHasRecord = recordStore.stock;
    assert.strictEqual(collectorCharged, 4000);
    assert.strictEqual(storePaid, 1000);
    assert.deepStrictEqual(collectorHasRecord, [record1]);
    assert.deepStrictEqual(storeNoLongerHasRecord, [record2]);
  });

});


// should have a buyer
// should have a seller
// should be able handle an exchange of a record when the seller has the record and the buyer has enough funds
