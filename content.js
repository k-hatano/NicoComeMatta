
var eventAddedToTextarea = false;
var eventAddedToButton = false;

window.addEventListener("load", onWindowLoaded, false);

var mutationObserver = new MutationObserver(onWindowLoaded);
mutationObserver.observe(document.body, {childList: true});

function onWindowLoaded(loadedEvent) {
	if (!eventAddedToTextarea) {
		var elements = document.getElementsByClassName("CommentInput-textarea");
		if (elements.length > 0) {
			elements[0].addEventListener('keydown', e => {
				if(e.keyCode == 13){ 
					alert("　【！　警　告　！】\n\nそのコメント、送信して大丈夫ですか？\n\n大丈夫でない場合、OKボタンを押さずにタブを閉じてください。\nOKボタンを押すと入力したコメントが送信されてしまいます！\n--------------------------------\nこのアラートは、拡張機能「ニココメマッタ」で表示しています。"); 
				} 
			});
			eventAddedToTextarea = true;
		}
	}
	
	if (!eventAddedToButton) {
		var elements = document.getElementsByClassName("CommentPostButton");
		if (elements.length > 0) {
			elements[0].addEventListener('click', e => {
				alert("　【！　警　告　！】\n\nそのコメント、送信して大丈夫ですか？\n\n大丈夫でない場合、OKボタンを押さずにタブを閉じてください。\nOKボタンを押すと入力したコメントが送信されてしまいます！\n--------------------------------\nこのアラートは、拡張機能「ニココメマッタ」で表示しています。"); 
			});
			eventAddedToButton = true;
		}
	}
}
