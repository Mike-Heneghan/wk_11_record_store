const Transaction = function(buyer, seller){
  this.buyer = buyer;
  this.seller = seller;
}

Transaction.prototype.sell = function (record) {
  if (this.buyer.funds >= record.price && this.seller.hasRecordBoolean(record)){
    this.sellerSells(record);
    this.buyerBuys(record);
  }
};

Transaction.prototype.sellerSells = function (record) {
  this.seller.removeRecord(record)
  this.seller.addFunds(record.price);
};

Transaction.prototype.buyerBuys = function (record) {
  this.buyer.addRecord(record);
  this.buyer.removeFunds(record.price);
};

module.exports = Transaction;
