function requestShell(){
	//pixelWidth variável com a largura do pixel
	let vel = 1;
	parseInt(vetRecorteImagem);
	let i, j, value;

	let h = 1;
	while(h < vetRecorteImagem.length){
		h = Math.floor((3*h)+ 1);
	}

	setTimeout(shellSort, vel);

	function shellSort(){
		if(h > 0){
			//laço for
			i = h;
			setTimeout(shell2, vel);
			function shell2(){
				if(i < vetRecorteImagem.length){
					value = vetRecorteImagem[i];
					ctx.fillStyle = "red";
					ctx.fillRect(i*pixelWidth, 0, pixelWidth, imagem.height);
					j = i;
					//faz outro laço
					setTimeout(shell3, vel);
					function shell3(){
						if( (j>h-1) && (value <= vetRecorteImagem[j-h]) ){
							vetRecorteImagem[j] = vetRecorteImagem[j-h];
							ctx.drawImage(imagem, vetRecorteImagem[j], 0, pixelWidth, imagem.height, pixelWidth*j, 0, pixelWidth, ALTURA);
							j = j-h;
							setTimeout(shell3, vel);
						}
						else{
							vetRecorteImagem[j] = value;
							ctx.drawImage(imagem, vetRecorteImagem[j], 0, pixelWidth, imagem.height, pixelWidth*j, 0, pixelWidth, ALTURA);
							i++;
							setTimeout(shell2, vel);
						}
					}
				}
				else{//shell2 acabou
					h = ((h-1)/3);		
					setTimeout(shellSort, vel);
				}
			}
		}
		else{//acaba tudo
			console.log("Acabou");
			return;
		}
	}
}