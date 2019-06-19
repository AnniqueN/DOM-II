let blockParent = document.querySelectorAll('.block');
blockParent.forEach((block, index) => {
	block.style.order = index;
	console.log(blockParent[index].style.order);
	block.addEventListener('click', (event)=>{
		event.target.style.transform = `translate(0, -${event.target.offsetHeight + 100} px)`;
		event.target.style.transitionDuration = '1.5s';
		block.style.order = 0;
		incrementElse(blockParent, index);
	})
});

let incrementElse = (x, index) => {
	for (let i = 0; i<x.length; i++){
		if (i !== index){
			x[i].style.order = Number(x[i].style.order) + 1;
		}
	}
}

let blockParent = document.querySelectorAll('.block');
blockParent.forEach((block, index) => {
	let increment = 0;
	block.addEventListener('mousedown', (event)=>{
		let increase = setInterval(()=>{
			increment += 10;
			block.style['margin-left'] = `${increment}px`
			if (increment > 400){
				clearInterval(increase);
			}
		}, 100)
		block.addEventListener('mouseup', ()=>{
			clearInterval(increase);
		});
	});
	block.addEventListener('mouseup', (event)=>{
		let decrease = setInterval(()=>{
			increment -= 10;
			block.style['margin-left'] = `${increment}px`
			if (increment < 20){
				clearInterval(decrease);
			}
		}, 100)
		block.addEventListener('mousedown', ()=>{
			clearInterval(decrease);
		});
	});
});
