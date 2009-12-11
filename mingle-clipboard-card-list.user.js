// ==UserScript==
// @name           Mingle Cut & Paste: Card List Page
// @namespace      http://karnowski.github.com/greasemonkey
// @description    Adds a button to quickly copy the selected Mingle cards' numbers & titles to your clipboard, one per line.
// @include        https://mingle.*.tld/projects/*/cards/list*
// @require        http://code.jquery.com/jquery-latest.min.js
// ==/UserScript==


(function($){
  $(function(){
    // var cardNumber = $("#card-index").text().trim();
    // var cardName = $("#card-short-description").text().trim().split("&nbsp;")[0];
    // var text = cardNumber + ": " + cardName;

    // var html = '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="110" height="14" id="clippy">\
    //   <param name="movie" value="http://github.com/mojombo/clippy/raw/7329b72360100b9484bc6cc9f097ea35f08421ad/build/clippy.swf"/>\
    //   <param name="allowScriptAccess" value="always"/>\
    //   <param name="quality" value="high"/>\
    //   <param name="scale" value="noscale"/>\
    //   <param NAME="FlashVars" value="text=' + text +  '">\
    //   <param name="bgcolor" value="#FFF2E5">\
    //   <embed src="http://github.com/mojombo/clippy/raw/7329b72360100b9484bc6cc9f097ea35f08421ad/build/clippy.swf" width="110" height="14" name="clippy" quality="high" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" bgcolor="#FFF2E5"\
    //        FlashVars="text=' + text + '"\
    //    />\
    // </object>';

    // $(html).appendTo("#card-short-description");
    $("<div> Hey, I'm doing something!</div>").appendTo(".for-selected-actions");
  });
})(jQuery);