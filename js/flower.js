(function(){
	
	var canvasFlowerCtx = document.getElementById('canvasFlower').getContext('2d');

	function _drawFlower(ctx){
		var lightGreen = '#67623e',
			darkGreen = '#3e4534',
			lightRed = '#a21c23',
			darkRed = '#961a23',
			purple = '#4f2d36',
			yellow = '#c3a47b',
			blue = '#8598ae',
			orange = '#84392d',
			brown = '#2d241b',
			bDots = [
				[306,364, 2],
				[315,352, 3],
				[325,341, 3],
				[338,328, 3],
				[350,317, 3],
				[362,309, 3],
				[372,300, 2],
				[384,291, 2],
				[391,279, 2],
				[398,267, 2],
				[283,353, 2],
				[284,338, 2],
				[287,325, 3],
				[290,313, 3],
				[296,301, 3],
				[305,288, 3],
				[317,278, 2],
				[332,270, 2],
				[347,265, 2],
				[360,262, 2],
				[266,345, 2],
				[263,330, 2],
				[262,315, 3],
				[261,297, 3],
				[266,278, 3],
				[277,261, 3],
				[291,249, 3],
				[308,242, 2],
				[328,238, 2],
				[328,238, 2],
				[348,238, 2],
				[327,384, 2],
				[344,376, 2],
				[359,368, 3],
				[372,357, 3],
				[384,343, 3],
				[395,326, 3],
				[403,309, 2],
				[409,293, 2],
				[336,400, 2],
				[350,400, 2],
				[366,397, 2],
				[383,390, 3],
				[397,377, 3],
				[408,363, 3],
				[417,347, 2],
				[420,330, 2]
			],
			dotCnt = bDots.length;
			
		/*
		 * Stem
		 */ 
		ctx.beginPath();
		ctx.fillStyle = lightGreen;
		ctx.moveTo(11,700);
		ctx.bezierCurveTo(34,663,30,558,146,480);
		ctx.lineTo(188,511);
		ctx.bezierCurveTo(74,568,64,663,43,700);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = orange;
		ctx.arc(30,685,2,0, Math.PI*2,true);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(17,688);
		ctx.bezierCurveTo(27,670,30,640,35,632);
		ctx.lineTo(35,669);
		ctx.bezierCurveTo(32,676,24,675,17,688);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(63,568);
		ctx.bezierCurveTo(79,538,93,522,114,506);
		ctx.bezierCurveTo(125,512,101,526,98,531);
		ctx.bezierCurveTo(104,540,92,546,86,550);
		ctx.bezierCurveTo(91,554,91,565,83,569);
		ctx.lineTo(63,568);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = brown;
		ctx.moveTo(188,511);
		ctx.bezierCurveTo(74,568,64,663,43,700);
		ctx.lineTo(33,700);
		ctx.bezierCurveTo(50,676,48,655,48,638);
		ctx.bezierCurveTo(51,613,51,613,65,608);
		ctx.bezierCurveTo(71,605,64,587,84,586);
		ctx.bezierCurveTo(96,581,96,562,106,560);
		ctx.bezierCurveTo(106,550,110,542,115,543);
		ctx.bezierCurveTo(119,527,123,542,134,524);
		ctx.bezierCurveTo(144,500,160,486,168,497);
		ctx.lineTo(188,511);
		ctx.fill();
		
		/*
		 * Leaves
		 */
		ctx.beginPath();
		ctx.fillStyle = lightGreen;
		ctx.moveTo(101,368);
		ctx.bezierCurveTo(98,379,101,394,113,410);
		ctx.bezierCurveTo(17,361,17,473,119,470);
		ctx.bezierCurveTo(99,503,115,529,184,480);
		ctx.bezierCurveTo(127,540,191,573,209,546);
		ctx.bezierCurveTo(204,593,260,595,259,567);
		ctx.bezierCurveTo(265,582,302,579,297,558);
		ctx.lineTo(269,404);
		ctx.lineTo(107,368);
		ctx.fill();
		
		ctx.beginPath();
		ctx.strokeStyle = darkGreen;
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';
		ctx.moveTo(107,368);
		ctx.bezierCurveTo(102,380,107,394,127,421);
		ctx.bezierCurveTo(20,361,18,471,129,465);
		ctx.bezierCurveTo(84,532,167,501,253,417);
		ctx.lineTo(185,478);
		ctx.moveTo(253,417);
		ctx.lineTo(187,482);
		ctx.moveTo(253,417);
		ctx.lineTo(190,482);		
		ctx.bezierCurveTo(133,533,194,578,215,529);
		ctx.bezierCurveTo(199,591,270,595,254,547);
		ctx.stroke();
		
		
		ctx.beginPath();
		ctx.strokeStyle = brown;
		ctx.lineWidth = 7;
		ctx.lineCap = 'round';
		ctx.moveTo(101,365);
		ctx.bezierCurveTo(98,379,101,394,113,410);
		ctx.bezierCurveTo(17,361,17,473,119,470);
		ctx.bezierCurveTo(99,503,115,529,184,480);
		ctx.bezierCurveTo(127,540,191,573,209,546);
		ctx.bezierCurveTo(204,593,260,595,259,567);
		ctx.bezierCurveTo(265,582,302,579,297,558);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.fillStyle = brown;
		ctx.lineWidth = 1;
		ctx.moveTo(166,408);
		ctx.bezierCurveTo(178,435,149,410,136,406);
		ctx.lineTo(167,430);
		ctx.bezierCurveTo(175,442,132,445,77,428);
		ctx.bezierCurveTo(109,447,151,447,171,441);
		ctx.bezierCurveTo(182,436,172,456,146,473);
		ctx.bezierCurveTo(174,460,196,436,204,417);
		ctx.fill();
		
		ctx.beginPath();
		ctx.lineWidth = 5;
		ctx.moveTo(256,447);
		ctx.bezierCurveTo(253,479,251,524,279,546);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth = 1;
		ctx.moveTo(256,447);
		ctx.bezierCurveTo(245,486,199,483,189,517);
		ctx.bezierCurveTo(200,502,246,474,242,482);
		ctx.lineTo(222,518);
		ctx.lineTo(240,493);
		ctx.bezierCurveTo(246,497,243,517,242,549);
		ctx.lineTo(245,538);
		ctx.bezierCurveTo(250,522,248,511,251,494);
		ctx.fill();
		
		/*
		 * Petals
		 */
		ctx.beginPath();
		ctx.fillStyle = lightRed;
		ctx.lineWidth = 1;
		ctx.moveTo(265,413);
		ctx.bezierCurveTo(190,465,90,366,56,305);
		ctx.bezierCurveTo(136,312,113,258,238,288);
		ctx.bezierCurveTo(185,244,148,312,65,166);
		ctx.bezierCurveTo(131,195,118,120,245,176);
		ctx.bezierCurveTo(180,75,242,70,223,17);
		ctx.bezierCurveTo(264,45,298,83,325,119);
		ctx.bezierCurveTo(317,70,358,40,333,20);
		ctx.bezierCurveTo(409,36,403,108,394,235);
		ctx.lineTo(428,262);
		ctx.bezierCurveTo(511,223,600,215,639,275);
		ctx.bezierCurveTo(604,267,555,296,541,307);
		ctx.bezierCurveTo(601,322,638,357,668,422);
		ctx.bezierCurveTo(560,390,569,430,480,402);
		ctx.bezierCurveTo(526,453,512,484,587,537);
		ctx.bezierCurveTo(433,567,392,451,380,425);
		ctx.lineTo(378,427);
		ctx.bezierCurveTo(432,539,343,529,377,636);
		ctx.bezierCurveTo(267,558,259,475,265,413);
		ctx.fill();
		
		ctx.beginPath();
		ctx.fillStyle = blue;
		ctx.moveTo(248,348);
		ctx.bezierCurveTo(244,352,158,359,136,344);
		ctx.bezierCurveTo(158,371,244,364,252,360);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(251,248);
		ctx.bezierCurveTo(190,190,193,252,125,208);
		ctx.bezierCurveTo(193,240,190,178,258,236);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(299,217);
		ctx.bezierCurveTo(298,182,278,135,262,112);
		ctx.bezierCurveTo(289,135,309,182,310,217);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(354,220);
		ctx.bezierCurveTo(365,201,365,133,363,103);
		ctx.bezierCurveTo(376,133,376,201,365,220);
		ctx.fill();
		
		/*
		 * Stamen
		 */
		ctx.beginPath();
		ctx.strokeStyle = lightGreen;
		ctx.lineWidth = 6;
		ctx.moveTo(400,242);
		ctx.bezierCurveTo(427,200,426,139, 427,117);
		ctx.moveTo(408,249);
		ctx.bezierCurveTo(433,220,449,171,454,134);
		ctx.moveTo(418,257);
		ctx.bezierCurveTo(443,221,478,191,506,170);
		ctx.moveTo(423,262);
		ctx.bezierCurveTo(447,234,498,202,523,203);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.fillStyle = blue;
		ctx.lineWidth = 1;
		ctx.arc(427,106,14,0, Math.PI*2,true);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(444,119);
		ctx.bezierCurveTo(453,106,474,113,468,131);
		ctx.bezierCurveTo(462,143,441,136,444,119);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(504,151);
		ctx.bezierCurveTo(512,142,534,153,527,169);
		ctx.bezierCurveTo(522,187,495,177,504,151);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(520,197);
		ctx.bezierCurveTo(535,188,552,209,539,218);
		ctx.bezierCurveTo(531,225,512,213,520,197);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(430,284);
		ctx.bezierCurveTo(459,272,505,257,556,261);
		ctx.bezierCurveTo(459,282,505,267,430,294);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(445,342);
		ctx.bezierCurveTo(494,335,548,346,578,365);
		ctx.bezierCurveTo(548,356,494,345,442,352);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(420,393);
		ctx.bezierCurveTo(444,449,479,490,503,502);
		ctx.bezierCurveTo(469,490,434,449,410,393);
		ctx.fill();
		
		ctx.beginPath();
		ctx.moveTo(341,420);
		ctx.bezierCurveTo(326,435,324,492,334,532);
		ctx.bezierCurveTo(313,492,315,435,330,420);
		ctx.fill();
		
		/*
		 * Center
		 */
		ctx.beginPath();
		ctx.fillStyle = yellow
		ctx.lineWidth = 1;
		ctx.moveTo(270,369);
		ctx.bezierCurveTo(216,302,257,240,286,230);
		ctx.bezierCurveTo(376,194,392,278,430,232);
		ctx.bezierCurveTo(398,308,462,310,410,382);
		ctx.bezierCurveTo(380,426,334,410,313,404);
		ctx.bezierCurveTo(302,401,269,370,270,369);
		ctx.fill();
		
		ctx.beginPath();
		ctx.strokeStyle = purple
		ctx.lineWidth = 8;
		ctx.moveTo(270,369);
		ctx.bezierCurveTo(216,302,257,240,286,230);
		ctx.bezierCurveTo(376,194,392,278,430,232);
		ctx.bezierCurveTo(398,308,464,318,415,382);
		ctx.bezierCurveTo(380,426,334,410,313,404);
		ctx.bezierCurveTo(302,401,269,370,270,369);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.lineWidth = 6;
		ctx.moveTo(276,377);
		ctx.bezierCurveTo(260,249,302,249,396,246);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(285,381);
		ctx.bezierCurveTo(310,251,381,282,405,248);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(292,386);
		ctx.bezierCurveTo(340,381,400,317,418,245);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(300, 393);
		ctx.bezierCurveTo(378,401,430,349,418,245);
		ctx.stroke();
		
		ctx.beginPath();
		ctx.strokeStyle = darkRed;
		ctx.lineWidth = 7;
		ctx.moveTo(262,369);
		ctx.bezierCurveTo(209,302,250,239,276,227);
		ctx.bezierCurveTo(369,181,385,270,434,226);
		ctx.bezierCurveTo(405,308,472,312,423,382);
		ctx.bezierCurveTo(396,422,339,423,313,411);
		ctx.stroke();
		
		//draw our tiny dots
		ctx.fillStyle = blue;
		for(var i=0; i<dotCnt; i++){
			ctx.beginPath();
			ctx.arc(bDots[i][0],bDots[i][1], bDots[i][2], 0, Math.PI*2,true);
			ctx.fill();
		}

	}
		
	_drawFlower(canvasFlowerCtx);
	
})();