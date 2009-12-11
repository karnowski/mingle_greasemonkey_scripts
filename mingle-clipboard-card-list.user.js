// ==UserScript==
// @name           Mingle Cut & Paste: Card List Page
// @namespace      http://karnowski.github.com/greasemonkey
// @description    Adds a button to quickly copy the selected Mingle cards' numbers & titles to your clipboard, one per line.
// @include        https://mingle.*.tld/projects/*/cards/list*
// @require        http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==


(function($){
  $(function(){
    $('<a href="#" id="copy-selected-cards-to-clipboard-link">Copy</a>').appendTo(".for-selected-actions");
    
    $("#copy-selected-cards-to-clipboard-link").click(function(event){
      event.preventDefault();
      
      var text = "";
      
      $("tr.card-row").each(function(){
        var checked = $(this).find("input[type=checkbox]:checked").length;

        if(checked > 0) {
          var cardNumber = $(this).find("td.number").text();
          var cardName = $(this).find("td.card-name").text();
          text += "#" + cardNumber + ": " + cardName + "\n";
        }
      });
      
      alert(text);
    });
    
  });
})(jQuery);