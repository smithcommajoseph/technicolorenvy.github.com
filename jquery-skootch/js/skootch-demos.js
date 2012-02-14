var skootchDemos = skootchDemos || {};

(function($){
	var self = this;
	
	self.main = (function(){
		var pub = {};
		
		pub.init = function(){
			_buildTOC();			
			$('#skootch-trigger').skootch('invaderClickRetreat', false);
		};
		
		function _buildTOC(){
			var TOCArr = [];

			$.each($('h2'), function(){
				var contLink = '#'+$(this).attr('id'),
					contHtml = $(this).html();

				TOCArr.push('<li><a href="'+contLink+'">'+contHtml+'</a></li>');
			});

			$('#skootch-invader ul').append(TOCArr.join(''));
		}
		
		return pub;
	})();
	
	self.Construct = (function() {
		$(document).ready(function(){
			skootchDemos.main.init();
		});
	})();
	
}).call(skootchDemos, jQuery);