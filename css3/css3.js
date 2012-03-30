$(function() {
	$('a:not(#menu-styler)').on('click', function() {
		$('#container').load($(this).attr('href'));	return false;
	});

	$('div').on('click', 'div.example-container div', function() {
		var $this = $(this);
		$this.toggleClass($this.attr('id'));
	});

	$('a#menu-styler').on('click', function(e) {
		$('a').toggleClass('styled'); return false;
	});
});