var bill_list = [];

function generate_bills(bList){
  let filled_bList = [];
  return filled_bList;
}

function intro(){
  let start_page_content = createElement('div').class('intro');
  let title = createElement('h1', "Who's side is it anyway?").parent(start_page_content);
  let sub_t = createElement('h2', "A simple game to see who's side you are really on.").parent(start_page_content);
  let start_button = createElement('button', "START").parent(start_page_content);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
  intro();

}

function draw() {
  background(0);

}
