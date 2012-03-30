$(function() {
	$('a').on('click', function() {
		$('#container').load($(this).attr('href'));	return false;
	});

	$('div').on('click', 'div.example-container div', function() {
		var $this = $(this);
		$this.toggleClass($this.attr('id'));
	});
});