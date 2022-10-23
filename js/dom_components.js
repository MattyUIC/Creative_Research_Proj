export {intro, bill_q_page};

function intro(){
    let start_page_content = createElement('div').class('intro').id('start_page_content');
    let title = createElement('h1', "Who's side is it anyway?").parent(start_page_content);
    let sub_t = createElement('h2', "A simple game to see who's side you are really on.").parent(start_page_content);
    let start_button = createButton("Start").parent(start_page_content);
    start_button.mousePressed(start_game);
  }

function bill_q_page(){
    //Container for all content on page
    let page_content = createElement('div').class('page_content');
  
    //Container for Bill Title content
    let bill_title_content = createElement('div').parent(page_content);
    let title = createElement('h1', "Bill Name").parent(bill_title_content);
  
    //Container for bill description content
    let bill_description_content = createElement('div').parent(page_content);
    let sub_t = createElement('p', "Bill breakdown").parent(bill_description_content);// TODO: This will be populated with data from an array contained within a 'bill' obj listed above. Needs to have a <ul> element generated with forloop
  
    //Container for voting buttons, TODO: Spacer included so each button within can be 33% large
    let bill_button_content = createElement('div').parent(page_content);
    let yay = createElement('button', "yay").parent(bill_button_content);
    let bill_button_spacer_div = createElement('div').parent(bill_button_content);
    let nay = createElement('button', "nay").parent(bill_button_content);
  }

