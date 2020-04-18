function requestQuick(){
	let vel = 100;
	let inicio, fim;
	inicio = 0;
	fim = vetRecorteImagem.length-1;
	
	quickSort(inicio, fim);
	function quickSort(inicio, fim){
		let pivo, aux, i, j, meio;
		i = inicio;
		j = fim;

		meio = Math.floor((i+j)/2);
		pivo = vetRecorteImagem[meio];
		
		ctx.fillStyle = "red";
		ctx.fillRect(meio*pixelWidth, 0, pixelWidth, imagem.height);

		setTimeout(midQuick, vel);
		function midQuick(){
			
			while(vetRecorteImagem[i] < pivo) i = i+1;
			while(vetRecorteImagem[j] > pivo) j = j-1;

			if(i <= j){
				aux = vetRecorteImagem[i];
				vetRecorteImagem[i] = vetRecorteImagem[j];
				ctx.drawImage(imagem, vetRecorteImagem[i], 0, pixelWidth, imagem.height, pixelWidth*(i), 0, pixelWidth, ALTURA);
				vetRecorteImagem[j] = aux;
				ctx.drawImage(imagem, vetRecorteImagem[j], 0, pixelWidth, imagem.height, pixelWidth*(j), 0, pixelWidth, ALTURA);
				i = i+1;
				j = j-1;
			}

			if(j > i)setTimeout(midQuick, vel);
			
			else{
				ctx.drawImage(imagem, vetRecorteImagem[pivo], 0, pixelWidth, imagem.height, pixelWidth*(pivo), 0, pixelWidth, ALTURA);
				if(inicio < j)quickSort(inicio, j);
				if(i < fim) quickSort(i, fim);
			}
		}
	}
}
