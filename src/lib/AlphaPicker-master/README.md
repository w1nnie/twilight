#AlphaPicker

画像のアルファ値を調べるJavascriptです。

Javascript to get a pixel's alpha value of an image.

http://utsutsunogare.com/alphapicker/

##Usage

JSファイルを読み込みます。

Include the Javascript file on your page.

```html
<script src="alphapicker.js"></script>
```

###Example

クリック箇所のアルファ値をアラートするサンプル。

Alert the alpha value of the coordinates of click on the image.

```html
<img src="image.png" alt="" id="alpha" />

<script src="alphapicker.js"></script>
<script>
(function() {
	var img = document.getElementById("alpha"),
		alpha;
	
	try {
		alpha = AlphaPicker(img);
	} catch(e) {
		console.log(e.name + ":" + e.message);
		return;
	}
	
	alpha.click(function(e) {
		alert(e.alpha);
	});
})();
</script>
```

##Demos

On CodePen.

* [With Anchor](http://codepen.io/escapism/pen/lByDn)
* [Color Change](http://codepen.io/escapism/pen/upADB)

##Browser

HTML5 Canvasをサポートしたブラウザで動きます。  
ローカルでは動きません。

For HTML5 Canvas supported browsers.  
It doesn't work in local.

##License

[MIT license](http://www.opensource.org/licenses/mit-license.php)
