function requestBubble(){
	parseInt(vetRecorteImagem);
	let tam = vetRecorteImagem.length;
	let vel = 1;
	let i, aux;
	let troca = 1;
	setTimeout(bubbleSort, vel);
	function bubbleSort(){
		if(troca == 1){
			troca = 0;
			i = 0;
			setTimeout(bubble2, vel);
			function bubble2(){
				if(i < tam){
					if(vetRecorteImagem[i] > vetRecorteImagem[i+1] && tam >= i+1){
						ctx.fillStyle = "red";
						ctx.fillRect(i*pixelWidth, 0, pixelWidth, imagem.height);
						aux = vetRecorteImagem[i];
						vetRecorteImagem[i] = vetRecorteImagem[i+1];
						ctx.drawImage(imagem, vetRecorteImagem[i], 0, pixelWidth, imagem.height, pixelWidth*i, 0, pixelWidth, ALTURA);
						vetRecorteImagem[i+1] = aux;
						ctx.drawImage(imagem, vetRecorteImagem[i+1], 0, pixelWidth, imagem.height, pixelWidth*(i+1), 0, pixelWidth, ALTURA);
						troca = 1;
					}
					i++;
					setTimeout(bubble2, vel);
				}
				else{
					tam--;
					setTimeout(bubbleSort, vel);
				}
			}
		}
		else{
			console.log("Acabou");
			return;
		}
	}
}