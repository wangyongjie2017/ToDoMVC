$(document).ready(function(){
	var TODOS_STORAGE = 'aToDoList'
	var todoStorage = {
		// 		取东西
		fetch: function () {
			var todos = JSON.parse(localStorage.getItem(TODOS_STORAGE))
			return todos
		},
		// 		存东西
		save: function (todos) {
			localStorage.setItem(TODOS_STORAGE, JSON.stringify(todos))
		}
	}
	var todos = todoStorage.fetch() || [{
			"name": "eat what???"
		},
		{
			"name": "docis"
		},
		{
			"name": "MacDonaold"
		}
	]
	for (var i = 0; i < todos.length; i++) {
		$(".wrapper").prepend('<li class="list animated wobble">' + todos[i].name + '</li>')
	}

	function update() {
		$(".list").on("click", function () {
			var length = $(this).prevAll().length
			$(this).remove();
			todos.splice(length, 1)
			todoStorage.save(todos)
		});
	}
	$(".input").on("keydown", function (e) {
		if (e.keyCode === 13) {
			var $val = $(this).val();
			todos.unshift({
				"name": $val
			})
			todoStorage.save(todos)
			$(".wrapper").prepend('<li class="list animated wobble">' + $val + "</li>");
			$(this).val("")
		}
		update()
	});
	update()
});




// 你可以先为对象加一个动画，等动画结束后再 移除对象，例如
// $(this).closest(".portlet").fadeOut("fast", function (){
//     $(this).remove();
// });