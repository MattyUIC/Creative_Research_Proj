/*
This file contains all the data and functions.
*/


//BILL SPEC//
/*
  {    
  "name": ,
  "date": ,
  "description":[] ,
  "senate?" : ,
  "yea":{
    "Dem":,
    "Rep":
  } ,
  "nay": {
    "Dem":,
    "Rep":
  },
  "not-voting": {
    "Dem":,
    "Rep":
  }
  },
 */

  var bills = [
    {
     "name": "H.R.1808 - Assault Weapons Ban of 2022",
     "date": "Jul 29, 2022, 06:25 PM | 117th Congress, 2nd Session",
     "description": ["This bill makes it a crime to knowingly import, sell, manufacture, transfer,\n or possess a semiautomatic assault weapon (SAW) or large capacity ammunition feeding device (LCAFD).",
                    ],
     "senate?" : false,
     "yea": {
            "Dem":217,
            "Rep":0
          },
     "nay": {
            "Dem":0,
            "Rep":213
          },
     "not-voting":{
            "Dem": 0,
            "Rep": 1
          }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    },
 ]


function generate_game_bill(number_to_gen){
  let filled_bList = [];

  for(var i=0;i<number_to_gen;i++){
    filled_bList.push(bill_list[random(bill_list.length-1)]);
  }
  
  return filled_bList;
}

export {bills, generate_game_bills };