require('../http-auth-interceptor');

module.exports = angular.module('ppManageCustomer', [
		'http-auth-interceptor',
		require('../app-constants').name,
		require('./authorizationStatus/authorizationStatus-module').name,
		require('./organization/organization-module').name,
		require('./study/study-module').name,
		require('./authorization/authorization-module').name
	])

	.factory('Responsive', [
		function() {
			var switched = false;
			
			this.updateTables = function() {
				if (($(window).width() < 991) && !switched ){
					console.log("hmm");
					
					$("table.responsive").each(function(i, element) {
						unsplitTable($(element));
					});
					
					setTimeout(function() {
						$("table.responsive").each(function(i, element) {
							splitTable($(element));
						});
					}, 500);

				return true;
				}
			};

			function splitTable(original) {
				original.wrap("<div class='table-wrapper' />");
				var copy = original.clone();
				copy.find("td:not(:first-child), th:not(:first-child)").css("display", "none");
				copy.removeClass("responsive");

				original.closest(".table-wrapper").append(copy);
				copy.wrap("<div class='pinned' />");
				original.wrap("<div class='scrollable' />");

				setCellHeights(original, copy);
			}

			function unsplitTable(original) {
				original.closest(".table-wrapper").find(".pinned").remove();
				original.unwrap();
				original.unwrap();
			}

			function setCellHeights(original, copy) {
				var tr = original.find('tr'),
				tr_copy = copy.find('tr'),
				heights = [];

				tr.each(function (index) {
					var self = $(this),
					tx = self.find('th, td');

					tx.each(function () {
						var height = $(this).outerHeight(true);
						heights[index] = heights[index] || 0;
						if (height > heights[index]) heights[index] = height;
					});

				});

				tr_copy.each(function (index) {
					$(this).height(heights[index]);
				});
			}

			return this;
		}
	])

	.controller('ManageCustomerController', function ($scope) {
	})

	.run(function() {
	});