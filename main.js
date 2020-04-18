window.onload = init;

var canvas, ctx, ALTURA, LARGURA, imagem;
var vetRecorteImagem = [];

var pixelWidth;

function init(){
	imagem = document.createElement('img');
	imagem.src = "imagem.jpg";

	imagem.onload = function(){
		//criando canvas
		canvas = document.getElementById("cnv");
		ALTURA = imagem.height;
		LARGURA = imagem.width;
		canvas.width = LARGURA;
		canvas.height = ALTURA;
		canvas.style.border = "solid 1px #000";
		ctx = canvas.getContext("2d");
		ctx.drawImage(imagem,0,0,LARGURA, ALTURA);

		createButtons();

	}
}

function embaralhar(){
	let auxVet = [];
	parseInt(vetRecorteImagem);
	for(let i = 0; vetRecorteImagem.length > 0; i++){
		let index = Math.floor(Math.random()*(vetRecorteImagem.length));
		auxVet[i] = vetRecorteImagem[index];
		vetRecorteImagem.splice(index, 1);
	}
	vetRecorteImagem = auxVet;
	printaImagem();
}

function recortarImagem(){
	vetRecorteImagem = [];
	let xImg;
	let quantPixels = LARGURA/pixelWidth;
	for(let i = 0; i < quantPixels; i++){
		xImg = i*pixelWidth;
		vetRecorteImagem[i] = xImg;
	}
}

function createButtons(){
	var botPixel = document.querySelector(".container #inputs select");
	var selected = botPixel.selectedIndex;
	atribuiWidthPixel();
	botPixel.addEventListener("change", atribuiWidthPixel);
	var botEmbaralha = document.getElementById("botaoEmbaralha");
	botEmbaralha.addEventListener("click", embaralhar,false);
	var botOrdena = document.getElementById("botaoSorts");
	botOrdena.addEventListener("click", ()=>{
		var blocoCollapse = document.getElementById("sorts");
		if(blocoCollapse.style.display == "block"){
			blocoCollapse.style.display = "none";
		}
		else{
			blocoCollapse.style.display = "block";
		}
	});

	function atribuiWidthPixel(){
		selected = botPixel.selectedIndex;
		if(selected == 0)pixelWidth = 1; //largura de cada pixel
		else if(selected == 1) pixelWidth = 3;
		else if(selected == 2) pixelWidth = 5;
		recortarImagem();
	}

	var botInsert = document.getElementById("botaoInsert");
	var botShell = document.getElementById("botaoShell");
	var botBubble = document.getElementById("botaoBubble");
	var botQuick = document.getElementById("botaoQuick");
	botInsert.addEventListener("click", requestInsert);
	botShell.addEventListener("click", requestShell);
	botBubble.addEventListener("click", requestBubble);
	botQuick.addEventListener("click", requestQuick);
}



function printaImagem(){
	ctx.clearRect(0,0, ALTURA, LARGURA);
	let auxX = 0;
	for(let i = 0; i < vetRecorteImagem.length; i++){
		ctx.drawImage(imagem, vetRecorteImagem[i], 0, pixelWidth, imagem.height, auxX, 0, pixelWidth, ALTURA);
		auxX += pixelWidth;
	}
}









