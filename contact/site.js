// Write your Javascript code.
(function () {
    angular
		.module("TextAngular", ['textAngular'])
		.controller("RichTextController", ['$scope', 'textAngularManager', RichTextController]);

    function RichTextController($scope, textAngularManager) {

    };
})
();

$('.pull-down').each(function () {
    var $this = $(this);
    $this.css('margin-top', $this.parent().height() - $this.height())
});
