function createShape(shape) {
	let N = document.getElementById("innum").value;
	for (let i=0; i< N; i++) {
		let figure = document.createElement('div');
		figure.id = shape;
	
		let size = Math.random() * 100 + 'px';
		if (figure.id == 'triangle') {
			figure.style.borderLeftWidth = size;
			figure.style.borderRightWidth = size;
			figure.style.borderBottomWidth = size;
		}
		else {
			figure.style.width = size;
			figure.style.height = size;
		}
		figure.style.left = Math.random() * 500 + 'px';
		figure.style.top = Math.random() * 500 + 'px';
	
		figure.addEventListener('dblclick', function() {this.remove();});
		figure.addEventListener('click', function() {
			this.style.borderBottomColor = 'rgba(255,255,0,0.9)';
			if (this.id != 'triangle') this.style.backgroundColor = 'rgba(255,255,0,0.9)';
		});
		objectarea.appendChild(figure);
	}
}

objectarea = document.getElementById("objectarea");