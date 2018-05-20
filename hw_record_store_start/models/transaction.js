const Transaction = function(buyer, seller){
  this.buyer = buyer;
  this.seller = seller;
}

Transaction.prototype.sell = function (record) {
  if (this.buyer.funds >= record.price){
    this.seller.removeRecord(record);
    this.buyer.addRecord(record);
    this.seller.addFunds(record.price);
    this.buyer.removeFunds(record.price);
  }
};

Transaction.prototype.sellerSells = function (record) {
  this.seller.removeRecord(record)
  this.seller.addFunds(record.price);
};


module.exports = Transaction;
