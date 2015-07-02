var page = require('webpage').create();
page.open('http://new.digi.com.my/', function() {
  page.render('image.png');
  phantom.exit();
});