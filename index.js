var bill_list = [];
var start;
let current_bill;

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
