$(document).ready(function(){
	
	//set score and previous score(needed to be stored in case user wants to go back in the test) to initial values of 0
	var score = {ILE: 0, LII: 0, ESE: 0, SEI: 0, SLE: 0, LSI: 0, EIE: 0, IEI: 0, LIE: 0, ILI: 0, SEE: 0, ESI: 0, LSE: 0, SLI: 0, IEE: 0, EII: 0};
	var prevScore = {ILE: 0, LII: 0, ESE: 0, SEI: 0, SLE: 0, LSI: 0, EIE: 0, IEI: 0, LIE: 0, ILI: 0, SEE: 0, ESI: 0, LSE: 0, SLI: 0, IEE: 0, EII: 0};
	//set initial value to question index
	var questionIndex = 0;
	var questionDiv = $('#questionDiv');
	var progressText = $('#progress');
	//set initial skipped answers to 0, and limit of skipped answers to 10
	var skippedAnswers = 0;
	var maxSkippedAnswers = 10;
	
	/**
	 * object that stores all 8 symbols for the 'logo'
	 * get method returns one random url
	 */
	var RandomFunctionUrl = function() {
		this.functions = {
			0: "url('img/ne.png')",
			1: "url('img/ni.png')",
			2: "url('img/se.png')",
			3: "url('img/si.png')",
			4: "url('img/te.png')",
			5: "url('img/ti.png')",
			6: "url('img/fe.png')",
			7: "url('img/fi.png')"
		};
		this.get = function(){
			var rand = Math.floor(Math.random() * 8);
			return this.functions[rand];
		}	
	};
	
	//store references to logo squares
	var l1 = $('#el1');
	var l2 = $('#el2');
	var l3 = $('#el3');
	var l4 = $('#el4');
	var l5 = $('#el5');
	var l6 = $('#el6');
	var l7 = $('#el7');	
	var l8 = $('#el8');	
	/**
	 * Function sets the urls for the model based on the calculated result of the test
	 */
	function setModelA(type){
		$('.logo').css({
			backgroundColor: "#fff",
		});
		switch(type){
			case "ILE":
				l1.css({backgroundImage: "url('img/ne.png')"});
				l2.css({backgroundImage: "url('img/ti.png')"});
				l3.css({backgroundImage: "url('img/fi.png')"});
				l4.css({backgroundImage: "url('img/se.png')"});
				l5.css({backgroundImage: "url('img/fe.png')"});
				l6.css({backgroundImage: "url('img/si.png')"});
				l7.css({backgroundImage: "url('img/ni.png')"});
				l8.css({backgroundImage: "url('img/te.png')"});	
				break;
			case "LII":
				l1.css({backgroundImage: "url('img/ti.png')"});
				l2.css({backgroundImage: "url('img/ne.png')"});
				l3.css({backgroundImage: "url('img/se.png')"});
				l4.css({backgroundImage: "url('img/fi.png')"});
				l5.css({backgroundImage: "url('img/si.png')"});
				l6.css({backgroundImage: "url('img/fe.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/ni.png')"});	
				break;
			case "ESE":
				l1.css({backgroundImage: "url('img/fe.png')"});
				l2.css({backgroundImage: "url('img/si.png')"});
				l3.css({backgroundImage: "url('img/ni.png')"});
				l4.css({backgroundImage: "url('img/te.png')"});
				l5.css({backgroundImage: "url('img/ne.png')"});
				l6.css({backgroundImage: "url('img/ti.png')"});
				l7.css({backgroundImage: "url('img/fi.png')"});
				l8.css({backgroundImage: "url('img/se.png')"});	
				break;
			case "SEI":
				l1.css({backgroundImage: "url('img/si.png')"});
				l2.css({backgroundImage: "url('img/fe.png')"});
				l3.css({backgroundImage: "url('img/te.png')"});
				l4.css({backgroundImage: "url('img/ni.png')"});
				l5.css({backgroundImage: "url('img/ti.png')"});
				l6.css({backgroundImage: "url('img/ne.png')"});
				l7.css({backgroundImage: "url('img/se.png')"});
				l8.css({backgroundImage: "url('img/fi.png')"});	
				break;
			case "SLE":
				l1.css({backgroundImage: "url('img/se.png')"});
				l2.css({backgroundImage: "url('img/ti.png')"});
				l3.css({backgroundImage: "url('img/fi.png')"});
				l4.css({backgroundImage: "url('img/ne.png')"});
				l5.css({backgroundImage: "url('img/fe.png')"});
				l6.css({backgroundImage: "url('img/ni.png')"});
				l7.css({backgroundImage: "url('img/si.png')"});
				l8.css({backgroundImage: "url('img/te.png')"});
				break;
			case "LSI":
				l1.css({backgroundImage: "url('img/ti.png')"});
				l2.css({backgroundImage: "url('img/se.png')"});
				l3.css({backgroundImage: "url('img/ne.png')"});
				l4.css({backgroundImage: "url('img/fi.png')"});
				l5.css({backgroundImage: "url('img/ni.png')"});
				l6.css({backgroundImage: "url('img/fe.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/si.png')"});	
				break;
			case "EIE":
				l1.css({backgroundImage: "url('img/fe.png')"});
				l2.css({backgroundImage: "url('img/ni.png')"});
				l3.css({backgroundImage: "url('img/si.png')"});
				l4.css({backgroundImage: "url('img/te.png')"});
				l5.css({backgroundImage: "url('img/se.png')"});
				l6.css({backgroundImage: "url('img/ti.png')"});
				l7.css({backgroundImage: "url('img/fi.png')"});
				l8.css({backgroundImage: "url('img/ne.png')"});	
				break;
			case "IEI":
				l1.css({backgroundImage: "url('img/ni.png')"});
				l2.css({backgroundImage: "url('img/fe.png')"});
				l3.css({backgroundImage: "url('img/te.png')"});
				l4.css({backgroundImage: "url('img/si.png')"});
				l5.css({backgroundImage: "url('img/ti.png')"});
				l6.css({backgroundImage: "url('img/se.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/fi.png')"});	
				break;
			case "LIE":
				l1.css({backgroundImage: "url('img/te.png')"});
				l2.css({backgroundImage: "url('img/ni.png')"});
				l3.css({backgroundImage: "url('img/si.png')"});
				l4.css({backgroundImage: "url('img/fe.png')"});
				l5.css({backgroundImage: "url('img/se.png')"});
				l6.css({backgroundImage: "url('img/fi.png')"});
				l7.css({backgroundImage: "url('img/ti.png')"});
				l8.css({backgroundImage: "url('img/ne.png')"});	
				break;
			case "ILI":
				l1.css({backgroundImage: "url('img/ni.png')"});
				l2.css({backgroundImage: "url('img/te.png')"});
				l3.css({backgroundImage: "url('img/fe.png')"});
				l4.css({backgroundImage: "url('img/si.png')"});
				l5.css({backgroundImage: "url('img/fi.png')"});
				l6.css({backgroundImage: "url('img/se.png')"});
				l7.css({backgroundImage: "url('img/te.png')"});
				l8.css({backgroundImage: "url('img/ti.png')"});	
				break;
			case "SEE":
				l1.css({backgroundImage: "url('img/se.png')"});
				l2.css({backgroundImage: "url('img/fi.png')"});
				l3.css({backgroundImage: "url('img/ti.png')"});
				l4.css({backgroundImage: "url('img/ne.png')"});
				l5.css({backgroundImage: "url('img/te.png')"});
				l6.css({backgroundImage: "url('img/ni.png')"});
				l7.css({backgroundImage: "url('img/si.png')"});
				l8.css({backgroundImage: "url('img/fe.png')"});
				break;
			case "ESI":
				l1.css({backgroundImage: "url('img/fi.png')"});
				l2.css({backgroundImage: "url('img/se.png')"});
				l3.css({backgroundImage: "url('img/ne.png')"});
				l4.css({backgroundImage: "url('img/ti.png')"});
				l5.css({backgroundImage: "url('img/ni.png')"});
				l6.css({backgroundImage: "url('img/te.png')"});
				l7.css({backgroundImage: "url('img/fe.png')"});
				l8.css({backgroundImage: "url('img/si.png')"});	
				break;
			case "LSE":
				l1.css({backgroundImage: "url('img/te.png')"});
				l2.css({backgroundImage: "url('img/si.png')"});
				l3.css({backgroundImage: "url('img/ni.png')"});
				l4.css({backgroundImage: "url('img/fe.png')"});
				l5.css({backgroundImage: "url('img/ne.png')"});
				l6.css({backgroundImage: "url('img/fi.png')"});
				l7.css({backgroundImage: "url('img/ti.png')"});
				l8.css({backgroundImage: "url('img/se.png')"});	
				break;
			case "SLI":
				l1.css({backgroundImage: "url('img/si.png')"});
				l2.css({backgroundImage: "url('img/te.png')"});
				l3.css({backgroundImage: "url('img/fe.png')"});
				l4.css({backgroundImage: "url('img/ni.png')"});
				l5.css({backgroundImage: "url('img/fi.png')"});
				l6.css({backgroundImage: "url('img/ne.png')"});
				l7.css({backgroundImage: "url('img/se.png')"});
				l8.css({backgroundImage: "url('img/ti.png')"});	
				break;
			case "IEE":
				l1.css({backgroundImage: "url('img/ne.png')"});
				l2.css({backgroundImage: "url('img/fi.png')"});
				l3.css({backgroundImage: "url('img/ti.png')"});
				l4.css({backgroundImage: "url('img/se.png')"});
				l5.css({backgroundImage: "url('img/te.png')"});
				l6.css({backgroundImage: "url('img/si.png')"});
				l7.css({backgroundImage: "url('img/ni.png')"});
				l8.css({backgroundImage: "url('img/fe.png')"});	
				break;
			case "EII":
				l1.css({backgroundImage: "url('img/fi.png')"});
				l2.css({backgroundImage: "url('img/ne.png')"});
				l3.css({backgroundImage: "url('img/se.png')"});
				l4.css({backgroundImage: "url('img/ti.png')"});
				l5.css({backgroundImage: "url('img/si.png')"});
				l6.css({backgroundImage: "url('img/te.png')"});
				l7.css({backgroundImage: "url('img/fe.png')"});
				l8.css({backgroundImage: "url('img/ni.png')"});
		}
	}

	/**
	 * Function animates 8 square blocks right after the page loads, and then sets an interval after which every block changes it's symbol
	 */
	function logoAnimation(){
		var randomFunctionUrl = new RandomFunctionUrl();
		l1.animate({right: "0px"},1500, "easeInOutCirc");
		var restOfDivs = $('.logo').not(l1);
		restOfDivs.hide();
		l2.delay(1450).slideDown();
		l3.delay(1650).slideDown();		
		l4.delay(1850).slideDown();		
		l5.delay(2050).slideDown();		
		l6.delay(2250).slideDown();		
		l7.delay(2450).slideDown();	
		l8.delay(2650).slideDown(function(){
			$('.logo').fadeOut(function(){
				$(this).css({
					backgroundImage: randomFunctionUrl.get(),
					"background-size": "75%",
					"background-repeat": "no-repeat",
					"background-position": "center"			
				});
			});		
			$('.logo').fadeIn();
		});
		var colorDivsInterval = setInterval(function(){
			$('.logo').fadeOut(function(){
				$(this).css({
					backgroundImage: randomFunctionUrl.get()
				});
			});
			$('.logo').fadeIn();
		}, 10000);
		return colorDivsInterval;
	}
	
	//set header divs interval after which they change content
	var colorDivsInterval = logoAnimation();
	
	/**
	 * Function counts and updates the score for the user, it also checks if the question was answered before, if so it skips it
	 */
	function countScore(){
		var radioCheckedVal = $(".radio:checked").val();
		//checks if the question was answered before, if so it skips counting
		if(questions[questionIndex-1].checked == radioCheckedVal){
			return;
		}
		
		if(questions[questionIndex-1].checked != radioCheckedVal && questions[questionIndex-1].checked != -1){
			for(val in score){
				score[val] -= prevScore[val];
				prevScore[val] = 0;
			}
		}
		questions[questionIndex-1].checked = radioCheckedVal;
		var valueQuestion = questions[questionIndex-1].score;
		var questionScoreLength = Object.keys(questions[questionIndex-1].score).length;
		for(val in prevScore){
			prevScore[val] = 0;
		}
		for(val in questions[questionIndex-1].score){
			switch(val){
				case "ILE":
					if(valueQuestion[val] == radioCheckedVal){
						score.ILE++;
						prevScore.ILE++;
					}
					break;
				case "LII":
					if(valueQuestion[val] == radioCheckedVal){
						score.LII++;
						prevScore.LII++;
					}
					break;
				case "ESE":
					if(valueQuestion[val] == radioCheckedVal){
						score.ESE++;
						prevScore.ESE++;
					}
					break;
				case "SEI":
					if(valueQuestion[val] == radioCheckedVal){
						score.SEI++;
						prevScore.SEI++;
					}
					break;
				case "SLE":
					if(valueQuestion[val] == radioCheckedVal){
						score.SLE++;
						prevScore.SLE++;
					}
					break;
				case "LSI":
					if(valueQuestion[val] == radioCheckedVal){
						score.LSI++;
						prevScore.LSI++
					}
					break;
				case "EIE":
					if(valueQuestion[val] == radioCheckedVal){
						score.EIE++;
						prevScore.EIE++;
					}
					break;
				case "IEI":
					if(valueQuestion[val] == radioCheckedVal){
						score.IEI++;
						prevScore.IEI++;
					}
					break;
				case "LIE":
					if(valueQuestion[val] == radioCheckedVal){
						score.LIE++;
						prevScore.LIE++;
					}
					break;
				case "ILI":
					if(valueQuestion[val] == radioCheckedVal){
						score.ILI++;
						prevScore.ILI++;
					}
					break;
				case "SEE":
					if(valueQuestion[val] == radioCheckedVal){
						score.SEE++;
						prevScore.SEE++;
					}
					break;
				case "ESI":
					if(valueQuestion[val] == radioCheckedVal){
						score.ESI++;
						prevScore.ESI++;
					}
					break;
				case "LSE":
					if(valueQuestion[val] == radioCheckedVal){
						score.LSE++;
						prevScore.LSE++;
					}
					break;
				case "SLI":
					if(valueQuestion[val] == radioCheckedVal){
						score.SLI++;
						prevScore.SLI++;
					}
					break;
				case "IEE":
					if(valueQuestion[val] == radioCheckedVal){
						score.IEE++;
						prevScore.IEE++;
					}
					break;
				case "EII":
					if(valueQuestion[val] == radioCheckedVal){
						score.EII++;
						prevScore.EII++;
					}
					break;
			}
		}
	}
	
	/**
	 * Function controls the progress of the test as its being done question by question and updates it
	 * it also checks when the test is over and sets the result
	 */
	function progressBar(){
		var progressVal = questionIndex + 1;
		var next = $('#next');
		var prev = $('#prev');
		var skippedAnswersRemaining = maxSkippedAnswers - skippedAnswers;
		
		/**
		 * Function calculates 3 most plausible types and displays them on the page  
		 */
		function viewScore(){
				$('#progressDiv').animate({opacity: "0"}, function(){
					$(this).empty();
				});
			$('#header>h1').animate({opacity: "0"}, function(){
				$('#header').empty();
				$('#sectionDiv').empty();
				//
				var max1 = 0;
				var max2 = 0;
				var max3 = 0;
				var type1 = "";
				var type2 = "";
				var type3 = "";
				for(val in score){
					if(score[val] > max1){
						max1 = score[val];
						type1 = val;	
					}
				}
				for(val in score){
					if(val == type1){
						continue;
					}
					if(score[val] > max2){
						max2 = score[val];
						type2 = val;	
					}
				}
				for(val in score){
					if(val == type1 || val == type2){
						continue;
					}
					if(score[val] > max3){
						max3 = score[val];
						type3 = val;	
					}
				}
				var $span1 = $("<span></span>").attr("id", "type1").text(type1);
				var $span2 = $("<span></span>").attr("id", "type2").text(type2);
				var $span3 = $("<span></span>").attr("id", "type3").text(type3);
				var $spanI = $("<span></span>").text(" i ");
				var $type1 = $("<h1></h1>").addClass("score").text("Najbardziej prawdopodobny dla Ciebie typ to ").append($span1);
				var $type2 = $("<h1></h2>").addClass("score").text("Pozostałe typy do rozważenia to ").append($span2).append($spanI).append($span3);
				animateScoreLogo($type1, $type2, colorDivsInterval);
			});
			return true;
		};
		
		if(progressVal > questions.length) {
			viewScore();
			return true;
		}
		if(skippedAnswersRemaining > 0){
			var pyta = "";
			switch(skippedAnswersRemaining){
				case 4:
				case 3:
				case 2:
					pyta = " pytania.";
					break;
				case 1:
					pyta = " pytanie.";
					break;
				default:
					pyta = " pytań.";
			}
			progressText.text("Pytanie " + progressVal + " z " + questions.length + ". Możesz jeszcze opuścić " + skippedAnswersRemaining + pyta);
		} else {
			progressText.text("Pytanie " + progressVal + " z " + questions.length + ".");	
		}
		if(progressVal >= questions.length){
			next.text("Sprawdź wynik");
		} else {
			next.text("Następne pytanie");
		}
		if(progressVal <= 1){
			prev.addClass('disabled').prop('disabled', true);
		} else {
			prev.removeClass('disabled').prop('disabled', false);
		}
		return false;
	}
	
	//reference to html div that contains skipped questions
	var skippedDiv = $('#skippedDiv');
	
	function animateHeader(){

		var logos = [l1,l2,l3,l4,l5,l6,l7,l8];
		for(var i = 0; i < logos.length; i++){
			logos[i].delay(i*100).animate({'border-width': "25px"}, function(){
				$(this).css('background-image', "none");
			});
		}
		
		$('#nav').animate({left: "-25%"}, 1500, "easeInOutExpo");
		l3.animate({top: "3.5rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-7em"}, 1500, "easeOutBounce");
		});
		l4.animate({top: "3.5rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-7rem"}, 2000, "easeOutBounce");
		});
		l5.animate({top: "7rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-14rem"}, 2500, "easeOutBounce");
		});
		l6.animate({top: "7rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-14em"}, 2500, "easeOutBounce");
		});
		l7.animate({top: "10.5rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-21rem"}, 2500, "easeOutBounce");
		});
		l8.animate({top: "10.5rem"}, 1500, "easeInBounce", function(){
			$(this).animate({left: "-21rem"}, 2500, "easeOutBounce");
		});
	}
	
	function animateResult($type1, $type2){
		if($(window).width() > 500){
			$('#header').animate({height: "10rem"}, 1500, "easeInOutExpo");
		} else {
			$('#header').animate({height: "15rem"}, 1500, "easeInOutExpo");
		}
		$('#nav').animate({top: "10em"}, 1500, "easeInOutExpo");
		$type1.animate({opacity: "1"}, 400);
		$type2.animate({opacity: "1"}, 400);
		$('#nav>h1').text("");
		var $anchor = $("<a></a>").attr({
			href: "http://socjonika.pl/#Budowa_psychiki",
			target: "_blank",
			title: "Budowa psychiki wytłumaczona na podstawie Modelu A"
		}).text("Model A");
		$('#nav>h1').append($anchor);
		$('#nav>h1').animate({opacity: "1"}, 400);
		var $descriptionDiv = $("<div></div>").attr("id", "descriptionDiv");
		$('#sectionDiv').append($descriptionDiv);
		var description;
		if($type1.text().indexOf('ILE') > -1){
				description = descriptions.ILE;
				setModelA("ILE");
		} else if($type1.text().indexOf('LII') > -1){
				description = descriptions.LII;
				setModelA("LII");						
		} else if($type1.text().indexOf('ESE') > -1){
				description = descriptions.ESE;
				setModelA("ESE");
		} else if($type1.text().indexOf('SEI') > -1){
				description = descriptions.SEI;
				setModelA("SEI");
		} else if($type1.text().indexOf('SLE') > -1){
				description = descriptions.SLE;
				setModelA("SLE");
		} else if($type1.text().indexOf('LSI') > -1){
				description = descriptions.LSI;
				setModelA("LSI");
		} else if($type1.text().indexOf('EIE') > -1){
				description = descriptions.EIE;
				setModelA("EIE");
		} else if($type1.text().indexOf('IEI') > -1){
				description = descriptions.IEI;
				setModelA("IEI");
		} else if($type1.text().indexOf('LIE') > -1){
				description = descriptions.LIE;
				setModelA("LIE");
		} else if($type1.text().indexOf('ILI') > -1){
				description = descriptions.ILI;
				setModelA("ILI");
		} else if($type1.text().indexOf('SEE') > -1){
				description = descriptions.SEE;
				setModelA("SEE");
		} else if($type1.text().indexOf('ESI') > -1){
				description = descriptions.ESI;
				setModelA("ESI");
		} else if($type1.text().indexOf('LSE') > -1){
				description = descriptions.LSE;
				setModelA("LSE");
		} else if($type1.text().indexOf('SLI') > -1){
				description = descriptions.SLI;
				setModelA("SLI");
		} else if($type1.text().indexOf('IEE') > -1){
				description = descriptions.IEE;
				setModelA("IEE");
		} else if($type1.text().indexOf('EII') > -1){
				description = descriptions.EII;
				setModelA("EII");
		}  
		$('#header').append($type1);
		$('#header').append($type2);
		$('.logo').animate({'border-width': "2px"});
		$('#descriptionDiv').append(description).animate({opacity: "1"}, 400);
		$('#type1, #type2, #type3').click(function(){
			var type = $(this).text();
			$('.logo').animate({'border-width': "25px"}, 200);
			$('#descriptionDiv').fadeOut(200, function(){
				description = descriptions[type];
				$('#descriptionDiv').empty();
				$('#descriptionDiv').append(description);
				setModelA(type);
			});
			$('#descriptionDiv').fadeIn(200);
			$('.logo').animate({'border-width': "2px"}, 200);
		});
	}

	/**
	 * Function displays the results after the test is done
	 */
	function animateScoreLogo($type1, $type2, colorDivsInterval){
		clearInterval(colorDivsInterval);
		
		if ($(window).width() > 860) {
			var start = new Date().getTime();
			animateHeader();
			setTimeout(function(){
				animateResult($type1, $type2);
			}, 5100);
		} else {
			animateHeader();
			animateResult($type1, $type2);
		}
		
			
}
	/**
	 * Function goes to the next question
	 */
	function nextQuestion(){
		countScore();
		if(questionIndex < questions.length && questions[questionIndex-1].skipped == true){
			
			var id = questionIndex;
			var skippedId = "skipped" + id;
			$("#"+skippedId).slideUp();
			skippedAnswers--;
			if(skippedAnswers == 0){
				$('#pSkippedQuesitons').slideUp(400, function(){
						skippedDiv.empty();
				});
			}
			if(skippedAnswers <= maxSkippedAnswers-1 && questions[questionIndex].skipped == false){
				$('#skip').removeClass('disabled').prop('disabled', false);
			}
		}
		var questionIndexTemp = questionIndex-1;
		while(questions[questionIndexTemp] && questions[questionIndexTemp].checked != -1){
			questionIndexTemp++;
			questionIndex = questionIndexTemp;
		}
		questionDiv.animate({
			opacity: "0"
		}, 'fast', askQuestion);
	}

	/**
	 * Function goes to the previous question
	 */
	function prevQuestion(){
		questionIndex -= 2;
		questionDiv.animate({
			opacity: "0"
		}, 'fast', askQuestion);
		questionDiv.animate({
			opacity: "1"
		}, 'fast');
	}
	
	/**
	 * 
	 */
	function askQuestion(){
		$('.radio').attr("checked", "");
		$('#questionList div').removeClass('questionChecked');
		$('.radio').first().prop({
			checked: "true"
		});
		$('#firstDiv').addClass('questionChecked');
		var end = progressBar();
		if(end){
			questionIndex++;
			return;
		}
		if(questions[questionIndex].skipped == true){
			$('#skip').addClass('disabled').prop('disabled', true);
		}
		$('#questionHeading').text(questions[questionIndex].question);
		$('.question').hide();
		$('label').each(function(index){
			if(index <= questions[questionIndex].choices.length){
				$(this).text(questions[questionIndex].choices[index]);
			}
		});
		$('.question').each(function(index){
			if(index < questions[questionIndex].choices.length){
				$(this).show();
			}
		});
		questionIndex++;
		questionDiv.animate({opacity: "1"}, 'fast');
	}

	$('#wrapper').fadeOut();
	askQuestion();
	$('input:checked').parent().addClass('questionChecked');
	$('input:not(:checked)').parent().removeClass('questionChecked');
	$('.question').click(function(){
		$(this).addClass('questionChecked');
		$('.question').not(this).removeClass('questionChecked');
		$(this).children().prop("checked", true);
	})
	//next button pressed
	$('#next').click(nextQuestion);
	//previous button pressed
	$('#prev').click(prevQuestion);
	//skipped button pressed
	$('#skip').click(function(){
		skippedAnswers++;
		if(skippedAnswers > maxSkippedAnswers-1){
			$('#skip').addClass('disabled').prop('disabled', true);
		}
		questionDiv.animate({opacity: "0"}, 'fast', askQuestion);

		questions[questionIndex-1].skipped = true;
		if(skippedDiv.is(':empty')){
			var $pSkippedQuesitons = $("<p></p>").addClass('skippedQuestion').text("Pominięte pytania").hide();
			skippedDiv.append($pSkippedQuesitons);
			$pSkippedQuesitons.slideDown();
		}
		if($('#skipped'+questionIndex)){
			var $p = $("<p id=\"skipped"+ questionIndex + "\" class='skippedQuestion'>" + questionIndex + ": " + questions[questionIndex-1].question + "</p>").hide();
			skippedDiv.append($p);

			$p.slideDown();
		}
		
		$p.click(function(){	
			var skippedNumber = parseInt($(this).text());
			questionDiv.animate({opacity: "0"}, 'fast', function(){
				questionIndex = skippedNumber-1;
				if(questions[questionIndex].skipped == true){
					$('#skip').addClass('disabled').prop('disabled', true);
				} else {
					$('#skip').removeClass('disabled').prop('disabled', false);
				}	
				progressBar();
				$('h2').text(questions[skippedNumber-1].question);
				var label = $('label');
				label.first().text(questions[skippedNumber-1].choices[0]);
				label.last().text(questions[skippedNumber-1].choices[1]);
				questionIndex++;
			});
			questionDiv.animate({opacity: "1"}, 'fast');
		});
	});
});