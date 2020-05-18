/*
 * AlphaPicker v0.1
 * (c) 2014 uco
 * http://utsutsunogare.com/
 *
 * Released under the MIT license
 * http://opensource.org/licenses/mit-license.php
 */

(function(window, undefined) {
	"use strict";
	
	function AlphaPicker(img) {
		if (!(this instanceof AlphaPicker)) {
			return new AlphaPicker(img);
		} else {
			var canvas = document.createElement("canvas");
			if (!canvas.getContext) throw new Error("HTML5 Canvas is not supported");
			
			this.image = img;
			this.style = getComputedStyle(img, "");
			this.context = canvas.getContext("2d");
			this.events = {};
			
			this.init();
		}
	}
	
	AlphaPicker.prototype = {
		constructor: AlphaPicker.constructor,
		
		init: function() {
			this.width = parseInt(this.style.width, 10);
			this.height = parseInt(this.style.height, 10);
			
			this.context.canvas.width = this.width;
			this.context.canvas.height = this.height;
			
			this.context.drawImage(this.image, 0, 0, this.width, this.height);
			this.imageData = this.context.getImageData(0, 0, this.width, this.height);
		},
		
		load: function(fn) {
			return this.addEventListener("load", fn);
		},
		
		click: function(fn) {
			return this.addEventListener("click", fn);
		},
		
		mousedown: function(fn) {
			return this.addEventListener("mousedown", fn);
		},
		
		mouseup: function(fn) {
			return this.addEventListener("mouseup", fn);
		},
		
		mousemove: function(fn) {
			return this.addEventListener("mousemove", fn);
		},
		
		mouseout: function(fn) {
			return this.addEventListener("mouseout", fn);
		},
		
		addEventListener: function(type, fn, useCapture) {
			if(undefined === useCapture) useCapture = false;
			if(!this.events[type]) this.events[type] = {origin: [], listener: []};
			if(this.hasEventListener(type, fn) !== -1) return;
			var self = this,
				listener = function(e) {
					var coords = getMouseCoords(e),
						alpha = self.imageData.data[(coords.x + coords.y * self.width) * 4 + 3],
						newEvent = new AlphaPickerEvent(e, self, alpha, coords);
					fn.call(this, newEvent);
				};
			this.events[type].origin.push(fn);
			this.events[type].listener.push(listener);
			this.image.addEventListener(type, listener, useCapture);
			return this;
		},
		
		removeEventListener: function(type, fn, useCapture) {
			if(undefined === useCapture) useCapture = false;
			var index = this.hasEventListener(type, fn),
				listener;
			if(index === -1) {
				listener = fn;
			} else {
				this.events[type].origin.splice(index, 1);
				listener = this.events[type].listener.splice(index, 1)[0];
			}
			this.image.removeEventListener(type, listener, useCapture);
			return this;
		},
		
		hasEventListener: function(type, fn) {
			return this.events[type].origin.indexOf(fn);
		},
		
		reset: function() {
			this.init();
			return this;
		}
	};
	
	function AlphaPickerEvent(e, ap, alpha, c) {
		this.originalEvent = e;
		this.type = e.type;
		this.alphaPicker = ap;
		this.alpha = alpha;
		this.offsetX = c.x;
		this.offsetY = c.y;
	}
	
	function getMouseCoords(event) {
		var rect = event.target.getBoundingClientRect(), c = {};
		c.x = parseInt(event.clientX - rect.left, 10);
		c.y = parseInt(event.clientY - rect.top, 10);
		return c;
	}
	
	window.AlphaPicker = AlphaPicker;
})(this);