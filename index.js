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

var start; //Initialized to true in setup()
let current_bill; //Initialized to 0 in setup()

function generate_bill(number_to_gen){
  let filled_bList = [];

  for(var i=0;i<number_to_gen;i++){
    filled_bList.push(bill_list[random(bill_list.length-1)]);
  }
  
  return filled_bList;
}

function placeholder(){
  let start_page_content = createElement('div').class('intro');
  let title = createElement('h1', "Bill Name").parent(start_page_content);
  let sub_t = createElement('p', "Bill breakdown").parent(start_page_content);
  let yay = createElement('button', "yay").parent(start_page_content);
  let nay = createElement('button', "nay").parent(start_page_content);
}

function bill_q_page(){
  //Container for all content on page
  let page_content = createElement('div').class('page_content');

  //Container for Bill Title content
  let bill_title_content = createElement('div').class('page_content').parent(page_content);
  let title = createElement('h1', "Bill Name").parent(bill_title_content);

  //Container for bill description content
  let bill_description_content = createElement('div').class('page_content').parent(page_content);
  let sub_t = createElement('p', "Bill breakdown").parent(bill_description_content);// TODO: This will be populated with data from an array contained within a 'bill' obj listed above. Needs to have a <ul> element generated with forloop

  //Container for voting buttons, TODO: Spacer included so each button within can be 33% large
  let bill_button_content = createElement('div').class('page_content').parent(page_content);
  let yay = createElement('button', "yay").parent(bill_button_content);
  let bill_button_spacer_div = createElement('div').parent(bill_button_content);
  let nay = createElement('button', "nay").parent(bill_button_content);
}

function start_game(){
  document.getElementById('start_page_content').style.display = 'none';
  start = false;
  draw();
}

function intro(){
  let start_page_content = createElement('div').class('intro').id('start_page_content');
  let title = createElement('h1', "Who's side is it anyway?").parent(start_page_content);
  let sub_t = createElement('h2', "A simple game to see who's side you are really on.").parent(start_page_content);
  let start_button = createButton("Start").parent(start_page_content);
  start_button.mousePressed(start_game);
}

function setup() {
  start = true;
  current_bill = 0;
  createCanvas(windowWidth, windowHeight);
  noLoop();
 // intro();

}

function draw() {
  background(0);
  if(start){
    intro();
  } else {
    placeholder();
  }
}
