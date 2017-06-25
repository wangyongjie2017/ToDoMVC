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
			"name": "大后天是与女朋友认识10年的日子记得送礼物哦！！！"
		},
		{
			"name": "后天情人节记得给女朋友送礼物哦！！！"
		},
		{
			"name": "明天女朋友生日记得送礼物哦！！！"
		}
	]
	for (var i = 0; i < todos.length; i++) {
		$(".wrapper").prepend('<li class="list animated shake">' + todos[i].name + '</li>')
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
			$(".wrapper").prepend('<li class="list animated shake">' + $val + "</li>");
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