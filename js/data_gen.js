/*
This file contains all the data generating functions.
*/

//BILL SPEC//
/*
  {    
  "name": ,
  "date": ,
  "description": ,
  "senate?" : ,
  "yea": ,
  "nay": ,
  "not-voting": 
  },
 */

var bills = [
   {
    "name": "H.R.1808 - Assault Weapons Ban of 2022",
    "date": "Jul 29, 2022, 06:25 PM | 117th Congress, 2nd Session",
    "description": "This bill makes it a crime to knowingly import, sell, manufacture, transfer,\n or possess a semiautomatic assault weapon (SAW) or large capacity ammunition feeding device (LCAFD).",
    "senate?" : false,
    "yea": 217,
    "nay": 213,
    "not-voting": 1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
   },
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
  