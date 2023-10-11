class CashRegister {
  constructor(cid) {
    this.cid = cid;
    this.cidMap = new Map(this.cid);
    this.denomination = this.getDenomination();
  }
  lookupValue = new Map([
    ['PENNY', 0.01],
    ['NICKEL', 0.05],
    ['DIME', 0.10],
    ['QUARTER', 0.25],
    ['ONE', 1.00],
    ['FIVE', 5.00],
    ['TEN', 10.00],
    ['TWENTY', 20.00],
    ['ONE HUNDRED', 100.00]
  ]);
  lookupName = new Map([
    [0.01, 'PENNY'],
    [0.05, 'NICKEL'],
    [0.10, 'DIME'],
    [0.25, 'QUARTER'],
    [1.00, 'ONE'],
    [5.00, 'FIVE'],
    [10.00, 'TEN'],
    [20.00, 'TWENTY'],
    [100.00, 'ONE HUNDRED']
  ]);

  getCIDValue() {
    return this.cid.reduce((acc, curr) => {
        acc = acc + curr[1];
        acc = Number.parseFloat(acc.toFixed(2));
        return acc;
      }, 0);
  }

  getDenomination() {
    return this.cid
      .filter( (item) => item[1]!= 0)
      .map( (item) => this.lookupValue.get(item[0]))
      .sort((a,b) => (b-a));
  }

  getChange(changeDue) {
    //console.log(this.denomination);
    let withdraw = [];
    while(changeDue > 0) {
    for(let i=0; i< this.denomination.length; i++){
      // start withdrawing with largest denomination
      if(changeDue - this.denomination[i] >=0 ){
        // look name for denomination
        const denominationName = this.lookupName.get(this.denomination[i]);
        // check how much we have in cash drawer
        let dn_amount_CD = this.cidMap.get(denominationName);
        const dn_change_needed = Math.floor(changeDue / this.denomination[i]);
        const ratio = Math.floor(dn_amount_CD / changeDue);

        // Now update cash withdrawn into result
        if(ratio > 0){
          withdraw.push([denominationName, dn_change_needed * this.denomination[i]]);
          changeDue = Number(changeDue - (dn_change_needed * this.denomination[i])).toFixed(2);
        } else if(ratio == 0){
          withdraw.push([denominationName, dn_amount_CD]);
          changeDue = Number(changeDue - dn_amount_CD).toFixed(2);
        }
      }
    }
    // don't have exact change
    if(changeDue > 0){
      changeDue = -1;
      return {
        status: "INSUFFICIENT_FUNDS",
        change: []
      }
    }
  }
    return {
      status: "OPEN",
      change: withdraw
    };
  }
}

function checkCashRegister(price, cash, cid) {
  let register = new CashRegister(cid);
  let totalCash = register.getCIDValue();
  let changeDue = Number(cash - price).toFixed(2);

  if(changeDue == totalCash){
    return {
      status: "CLOSED",
      change: cid
    }
  } else if(changeDue > totalCash){
    return {
      status: "INSUFFICIENT_FUNDS",
      change: []
    }
  } else {
    return register.getChange(changeDue);
  }
}

//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
//checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
