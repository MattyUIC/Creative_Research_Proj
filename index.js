//BILL SPEC//
/*
  {    
  "name": ,
  "date": ,
  "description":[] ,
  "senate" : ,
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
     "senate" : false,
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
    {
      "name": "H.R.kittyboi - test Ban of 2301",
      "date": "Jul 29, 2022, 06:25 PM | 117th Congress, 2nd Session",
      "description": ["Big kitty moby wants to sit on your lap but he has a turd hanging from his bum?",
                      "What the big kitty do?"
                     ],
      "senate" : false,
      "yea": {
             "Dem":217,
             "Rep":214
           },
      "nay": {
             "Dem":0,
             "Rep":0
           },
      "not-voting":{
             "Dem": 0,
             "Rep": 0
           }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
     },
     {
      "name": "H.R.420 - Another one",
      "date": "Jul 29, 2022, 06:25 PM | 117th Congress, 2nd Session",
      "description": ["Another one.",
                      "Another one",
                      "Another one"],
      "senate" : false,
      "yea": {
             "Dem":0,
             "Rep":214
           },
      "nay": {
             "Dem":217,
             "Rep":0
           },
      "not-voting":{
             "Dem": 0,
             "Rep": 0
           }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
     },
    
 ];


let start; //Initialized to true in setup()
let current_bill; //Initialized to 0 in setup(), Holds current bill for reference.
let game_bills; //filled with random set from bills
let user_votes; //array of objects, containing user_vote and bill 
let bill_count; //Used to create reference ids in order to hide each bill

let cnv;





function setup() {
  start = true;
  current_bill = 0;
  bill_count = 0;
  game_bills = [];
  user_votes = [];



  noLoop();
  noCanvas();
}

function draw() {
  background(0);
  if(start){
    intro();
  } else {
    bill_q_page();
  }
}

// ======================
//  Transition Functions
// ======================

function start_game(){
  document.getElementById('start_page_content').style.display = 'none';
  start = false;
  game_bills = generate_game_bills(5);
  draw();
}

/**
 * TODO:
 * 
 * - Display user vote info, give some more insight? Definitely needs a header.
 * 
 * - We need to get rid of the yea/nay buttons after we vote.
 * 
 * - A 'next' button needs to show to allow for the next bill page to
 *   be presented
 * 
 * - Once 'next' is clicked it removes the current bill page and displays the next bill. 
 */


function yay_vote(){
  let vote_data = {
    "user_vote": "yay",
    "bill": current_bill
  };
  user_votes.push(vote_data);

  bill_breakdown_transition(vote_data);
}

function nay_vote(){
  let vote_data = {
    "user_vote": "nay",
    "bill": current_bill
  };
  user_votes.push(vote_data);

  bill_breakdown_transition(vote_data);

}

function bill_breakdown_transition(vote_data){
  cnv.show();
  cnv.background(25,150,38);
  bar_graph(vote_data.bill)

}

// ================
//  Data Functions
// ================

function bar_graph(bill_data){
  let [dem_yea, dem_nay, rep_yea, rep_nay] = [bill_data.yea.Dem, 
                                              bill_data.nay.Dem, 
                                              bill_data.yea.Rep, 
                                              bill_data.nay.Rep];
//
  
  let columns = 8;
  let width_multiplyer = 0.14;

  let height = cnv.height;
  let width = cnv.width;
  let barBase = height*0.85;
  let barCenter = width/columns;
  let text_size = width*width_multiplyer/columns;

  cnv.line(0, barBase, width, barBase)
  for(i=1;i<8; i++){
    if(i%2 != 0)
      cnv.line(barCenter*i, barBase-4, barCenter*i, barBase+4 )
  }


  cnv.textSize(text_size);
  cnv.text("Democrat yea votes: " + dem_yea, barCenter-6*text_size, barBase+25)
  cnv.text("Democrat nay votes: " + dem_nay, barCenter*3-6*text_size, barBase+25)
  cnv.text("Republican yea votes: " + rep_yea, barCenter*5-6*text_size, barBase+25)
  cnv.text("Republican nay votes: " + rep_nay, barCenter*7-6*text_size, barBase+25)

  for(i = 0; i< dem_yea; i++){
    cnv.stroke(0,0,255)
    cnv.line(barCenter-30, barBase-i-1,barCenter+30, barBase-i-1)
  }
  for(i = 0; i< dem_nay; i++){
    cnv.stroke(0,0,255)
    cnv.line(barCenter*3-30, barBase-i-1,barCenter*3+30, barBase-i-1)
  }
  for(i = 0; i< rep_yea; i++){
    cnv.stroke(255,0,0)
    cnv.line(barCenter*5-30, barBase-i-1,barCenter*5+30, barBase-i-1)
  }
  for(i = 0; i< rep_nay; i++){
    cnv.stroke(255,0,0)
    cnv.line(barCenter*7-30, barBase-i-1,barCenter*7+30, barBase-i-1)
  }
}


function generate_game_bills(number_to_gen){
  let filled_bList = [];
  for(var i=0;i<number_to_gen;i++){
    filled_bList.push(random(bills));
  }
  return filled_bList;
}


//TODO: Bar graph function. Sounds relatively easy to do. 
//TODO: Pie chart function?? arc length?

// ================
//  DOM COMPONENTS
// ================

function intro(){
  let start_page_content = createElement('div');
  start_page_content.class('intro').id('start_page_content');

  let title = createElement('h1', "Who's side is it anyway?").parent(start_page_content);
  let sub_t = createElement('h2', "A simple game to see who's side you are really on.").parent(start_page_content);
  let start_button = createButton("Start").parent(start_page_content);

  start_button.mousePressed(start_game);
}


function bill_q_page(){
  bill_count = game_bills.length-1;
  current_bill = game_bills.pop();
  console.log(current_bill);
  let [name, date, description, senate] = [current_bill.name, 
                                          current_bill.date, 
                                          current_bill.description, 
                                          current_bill.senate]; 
  //

  //Container for all content on page
  let page_content = createElement('div');
  page_content.class('page_content').id('bill_' + bill_count);
  
  //Container for the right side of the content (Bill information and voting buttons)
  let bill_q_content_left = createElement('div').class('page_content_right').id('bill_q_left');
  bill_q_content_left.parent(page_content);

  //Container for the left side content (Bill graph breakdowns and post voting graphics)
  let bill_q_content_right = createElement('div').class('page_content_left').id('bill_q_right');
  bill_q_content_right.parent(page_content);

  //Container the graphics content
  let graphics_container = createElement('div').class('graphics_container').id('gc');
  graphics_container.parent(bill_q_content_right);
 
  //P5 elt div object initializing with height 0 and I don't know why. I use the 
  //default js functions to grab the graphics_container element's width and height
  let [gcW, gcH] = [document.getElementById('gc').clientWidth ,
                    document.getElementById('gc').clientHeight]
  //
  
  cnv = createGraphics(gcW, gcH);
  cnv.parent(graphics_container);
  cnv.class('graphics_canvas');

  //Container for Bill Title content
  let bill_title_content = createElement('div').parent(bill_q_content_left);
  let title = createElement('h1', name).parent(bill_title_content);

  //Container for bill description content
  let bill_description_content = createElement('div').parent(bill_q_content_left);
  let bill_description_list = createElement('ul').parent(bill_description_content);
  let bill_description_element_array = [];
  for(i = 0; i<description.length; i++){  //Creates bullet list of important bill points
    bill_description_element_array.push(createElement('li', description[i]).parent(bill_description_list));
  }

  //Container for voting buttons, TODO: Spacer included so each button within can be 33% large
  let bill_button_content = createElement('div').class('vote_button_content');
  bill_button_content.parent(bill_q_content_left);
  let yay = createElement('button', "yay").class("voting_yea").parent(bill_button_content);
  let nay = createElement('button', "nay").parent(bill_button_content);


 
  yay.mousePressed(yay_vote);
  nay.mousePressed(nay_vote);
}