/*
This file contains all the data generating functions.
*/

var bill_txt = [
    ""
]

//unsure if we even need this...
class bills {
    constructor(bill_name, bill_text, rVotes, dVotes) {
      this.bill_name = bill_name;
      this.bill_text = bill_txt;
      this.rVotes = rVotes;
      this.dVotes = dVotes;
    }
  }
//Returns a list of randomly selected 'bills'
function generate_bills(){
    var bill_list = [];
    
    return bill_list;
}

class movement_element {
    constructor(element, x, y) {
      element.position(x, y);
      this.element = element;
      this.x = x;
      this.y = y;
    }
  
    move(x,y) {
      this.x = x;
      this.y = y;
      this.element.position(this.x, this.y);
    }
  }
  