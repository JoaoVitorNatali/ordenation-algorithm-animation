function requestInsert(){
	parseInt(vetRecorteImagem);
	let vel = 10;

	let i = 0;
	setTimeout(insertSort, vel);

	function insertSort(){
		
		if(i >= vetRecorteImagem.length){
			console.log("Acabou");
			console.log("i: "+i);
			console.log("vetRecorteImagem: "+vetRecorteImagem.length);
			return;
		}
		else{
			let key = vetRecorteImagem[i];
			let j = i-1;

			ctx.fillStyle = "red";
			ctx.fillRect(i*pixelWidth, 0, pixelWidth, imagem.height);

			setTimeout(midInsert, vel);

			function midInsert(){
				if (j >= 0 && vetRecorteImagem[j] > key){

					// ctx.clearRect(widthPixel*(j+1), 0, widthPixel, imagem.height);
					
					vetRecorteImagem[j+1] = vetRecorteImagem[j];
					ctx.drawImage(imagem, vetRecorteImagem[j+1], 0, pixelWidth, imagem.height, pixelWidth*(j+1), 0, pixelWidth, ALTURA);
					j--;
					setTimeout(midInsert, vel);
				}
				else {
					vetRecorteImagem[j+1] = key;
					ctx.drawImage(imagem, vetRecorteImagem[j+1], 0, pixelWidth, imagem.height, pixelWidth*(j+1), 0, pixelWidth, ALTURA);
					i++;
					setTimeout(insertSort, vel);

				}

			}
			
		}
	}
}