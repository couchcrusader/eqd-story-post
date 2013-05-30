$(document).ready(function(){
  $("div.story_popup_button").click(function(){
    var btn=$(this);
    var bigStory = $("div.story_popup_container",this.parentNode);
    var expand=bigStory.css('display')=='none'
      if(expand) {
        btn.text("-");
        btn.css("z-index",101);
      }
      else {
        /*btn.animate({bottom: 0, right: '-1em'}, { queue:false, duration:400 });*/
        btn.text("+");
        btn.css("z-index",99);
      }
	  bigStory.toggle(400);
  });
});