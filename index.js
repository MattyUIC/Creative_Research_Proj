
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

// bills list imported from data_gen.js 


let start; //Initialized to true in setup()
let current_bill; //Initialized to 0 in setup(), Holds current bill for reference.
let game_bills; //filled with random set from bills
let user_votes; //array of objects, containing user_vote and bill 
let bill_count; //Used to create reference ids in order to hide each bill
let game_size;

let cnv;

function setup() {
  start = true;
  current_bill = 0;
  bill_count = 0;
  game_size = 5;
  game_bills = generate_game_bills(game_size);
  user_votes = [];
  

  noLoop();
  noCanvas();

  intro();
}

// ======================
//  Transition Functions
// ======================

function start_game(){
  document.getElementById('start_page_content').remove();
  start = false;
 // game_bills = generate_game_bills(5);
  bill_q_page();
}

function nextBill(){
  document.getElementById('bill_' + bill_count).remove();

  if(bill_count == 0){
    end_page();
    return;
  }
    
  bill_q_page();

}

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
  document.getElementById('vote_button_content').style.display = 'none';
  
  //gets rid of the voting buttons once the user has submit their vote
  document.getElementById('next_button_content').style.display = 'block';
  cnv.show();

  //cnv.background(25,150,38);
  bar_graph(vote_data.bill);

  console.log(user_votes)

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
  let barBase = height*0.90;
  let barCenter = width/columns;
  let text_size = width*width_multiplyer/columns;

  cnv.fill(255);
  cnv.stroke(255)
  cnv.line(0, barBase, width, barBase)
  for(i=1;i<8; i++){
    if(i%2 != 0)
      cnv.line(barCenter*i, barBase-4, barCenter*i, barBase+4 )
  }
  

  cnv.textSize(text_size);
  cnv.text("Democrat yea votes: " + dem_yea, barCenter-6*text_size, barBase+text_size)
  cnv.text("Democrat nay votes: " + dem_nay, barCenter*3-6*text_size, barBase+text_size)
  cnv.text("Republican yea votes: " + rep_yea, barCenter*5-6*text_size, barBase+text_size)
  cnv.text("Republican nay votes: " + rep_nay, barCenter*7-6*text_size, barBase+text_size)

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

function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}

function generate_game_bills(number_to_gen){
  var shuffled_b = shuffle(bills)
  let filled_bList = [];

  for(var i=0;i<number_to_gen;i++){
    filled_bList.push(shuffled_b[i]);
  }
  return filled_bList;
}


//TODO: Pie chart function?? arc length?

// ================
//  DOM COMPONENTS
// ================

/**
 *   let vote_data = {
    "user_vote": "nay",
    "bill": current_bill
  };
 */

function end_page(){
  let end_page_content = createElement('div');
  end_page_content.class('bg end_page_content');
  console.log(user_votes)
  for(i = 0;  i<user_votes.length; i++){
    var user_vote = user_votes[i];
    // console.log("This is the user vote: " + )

    let user_vote_info_container = createElement('div');
    user_vote_info_container.class("end_page_user_vote").id("vote_" + i);
    user_vote_info_container.parent(end_page_content);

    let user_vote_bill_title = createElement('h1', user_vote.bill.name).parent(user_vote_info_container);
    let user_vote_bill_user_vote_choice = createElement('h2', user_vote.user_vote).parent(user_vote_info_container);


  }

}

function intro(){
  let start_page_content = createElement('div');
  start_page_content.id('start_page_content');
  
  let start_page_img = createElement('div');
  start_page_img.id('start_page_img').class('blur_box').parent(start_page_content);

  let intro_title_content = createElement('div');
  intro_title_content.class('intro bg').parent(start_page_content);

  let title = createElement('h1', "Who's side is it anyway?").parent(intro_title_content);
  let sub_t = createElement('h2', "A simple game to see who's side you are really on.").parent(intro_title_content);
  let start_button = createButton("Start").parent(intro_title_content);
  start_button.class("paper white");

  start_button.mousePressed(start_game);
}


function bill_q_page(){
  bill_count = game_bills.length-1;
  current_bill = game_bills.pop();
  console.log("This is current bill ",current_bill);
  let [name, date, description, senate] = [current_bill.name, 
                                          current_bill.date, 
                                          current_bill.description, 
                                          current_bill.senate]; 
  //

  let bill_page_container = createElement('div');
  let bill_q_page_img = createElement('div');
  bill_q_page_img.id('bill_q_page_img').class('blur_box').parent(bill_page_container); 

  //Container for all content on page
  let bill_page_content = createElement('div');
  bill_page_content.class('page_content').parent(bill_page_container).id('bill_' + bill_count);
  
  //Container for the top side of the content (Bill information and voting buttons)
  let bill_q_content_top = createElement('div').class('page_content_top').id('bill_q_top');
  bill_q_content_top.parent(bill_page_content);

  let top_content_shade_box = createElement('div').class('bg bg_bill_content').parent(bill_q_content_top);
  


  //Container for the bottom side content (Bill graph breakdowns and post voting graphics)
  let bill_q_content_bottom = createElement('div').class('page_content_bottom').id('bill_q_bottom');
  bill_q_content_bottom.parent(bill_page_content);

  //Container the graphics content
  let graphics_container = createElement('div').class('graphics_container').id('gc');
  graphics_container.parent(bill_q_content_bottom);
 


  //P5 elt div object initializing with height 0 and I don't know why. I use the 
  //default js functions to grab the graphics_container element's width and height
  let [gcW, gcH] = [document.getElementById('gc').clientWidth ,
                    document.getElementById('gc').clientHeight]
  // 
  cnv = createGraphics(gcW, gcH);
  cnv.parent(graphics_container);
  cnv.class('graphics_canvas bg');

  //Container for Bill Title content
  let bill_title_content = createElement('div').parent(top_content_shade_box);
  let title = createElement('h1', name).parent(bill_title_content);

  //Container for bill description content
  let bill_description_content = createElement('div').parent(top_content_shade_box);
  let bill_description_list = createElement('ul').parent(bill_description_content);
  let bill_description_element_array = [];
  for(i = 0; i<description.length; i++){  //Creates bullet list of important bill points
    bill_description_element_array.push(createElement('li', description[i]).parent(bill_description_list));
  }

  //Container for voting buttons, TODO: Spacer included so each button within can be 33% large
  let bill_button_content = createElement('div').class('vote_button_content').id('vote_button_content');
  bill_button_content.parent(bill_q_content_bottom);
  let yay = createElement('button', "yay").class("voting_yea paper pink").parent(bill_button_content);
  let nay = createElement('button', "nay").class("paper blue").parent(bill_button_content);

  let next_button_content = createElement('div').class('next_button_content').id('next_button_content');
  next_button_content.parent(bill_page_content);
  next_button_content.hide();

  let next_button = createElement('div', "Next").class("next_button")
  next_button.parent(next_button_content);

  next_button.mousePressed(nextBill);
  yay.mousePressed(yay_vote);
  nay.mousePressed(nay_vote);
}