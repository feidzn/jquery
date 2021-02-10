// JavaScript Document

//	Fei Yang
//	ArtGr 578 Project 2
//	Iowa State University
//	feiyang@iastate.edu
 

$(document).ready(function() {
    	
		
var timer_start = 700;
var timer_interval = 400;
var flag_setInterval = false;
var flag_show_car  = false;
var divnumber = 801;

//-----------------------------------Define four car parts------------------------------------------------

var front_num=['23',24,25,26,27,28,'71',72,73,119,120,121,122,167,168,169,'211',212,213,214,215,216,217,257,'257',258,259,260,261,262,263,264,265,266,267,268,269,270,'305',306,307,308,309,310,311,312,313,314,315,316,317,318,319,'354',355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,'403',404,405,406,407,408,'413',414,415,416,417,418,419,420,421,422,423,'453',454,455,456,457,'464',465,466,467,468,469,470,471,472,473,474,475,476,477,478,'503',504,505,506,'515',516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,'553',554,555,556,457,'565',566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,'604',605,606,'615',616,617,618,619,620,621,622,623,624,625,626,627,628,629,'655',656,'665',666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,];

var cabin_num=['29',30,31,32,33,34,35,36,37,'74',75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,'123',124,125,126,127,128,129,130,131,132,133,134,135,136,'170',171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,'218',219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,'271',272,273,274,275,276,277,278,279,280,281,282,283,284,'320',321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,'376',377,378,379,380,381,382,383,'424',425,426,427,428,429,430];

var wheels_num=['459',460,461,462,'508',509,510,511,512,513,'558',559,560,561,562,563,'608',609,610,611,612,613,'658',659,660,661,662,663,'709',710,711,712,'488',489,490,491,'537',538,539,540,541,542,'587',588,589,590,591,592,'637',638,639,640,641,642,'687',688,689,690,691,692,'738',739,740,741,];

var rear_num=['137',138,139,140,141,'186',187,188,189,190,191,192,193,'238',239,240,241,242,243,244,245,246,247,'285',286,287,288,289,290,291,292,293,294,295,296,297,298,'337',338,339,340,341,342,343,344,345,346,347,348,'384',385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,'431',432,433,434,435,436,437,442,443,444,445,446,447,448,449,'479',480,481,482,483,484,485,486,'493',494,495,496,497,498,499,'531',532,533,534,535,'544',545,546,547,548,549,'582',583,584,585,'594',595,596,597,598,'630',631,632,633,634,635,'644',645,646,647,'684',685,];

var car_num=[
'23',24,25,26,27,28,'71',72,73,119,120,121,122,167,168,'211',212,213,214,215,216,217,257,'257',258,259,260,261,262,263,264,265,266,267,268,269,270,'305',306,307,308,309,310,311,312,313,314,315,316,317,318,319,'354',355,356,357,358,359,360,361,362,363,364,365,366,367,368,369,370,371,372,373,374,375,'403',404,405,406,407,408,'413',414,415,416,417,418,419,420,421,422,423,'453',454,455,456,457,'464',465,466,467,468,469,470,471,472,473,474,475,476,477,478,'503',504,505,506,'515',516,517,518,519,520,521,522,523,524,525,526,527,528,529,530,'553',554,555,556,457,'565',566,567,568,569,570,571,572,573,574,575,576,577,578,579,580,581,'604',605,606,'615',616,617,618,619,620,621,622,623,624,625,626,627,628,629,'655',656,'665',666,667,668,669,670,671,672,673,674,675,676,677,678,679,680,681,682,683,

'29',30,31,32,33,34,35,36,37,'74',75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,'123',124,125,126,127,128,129,130,131,132,133,134,135,136,'169',170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,'218',219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,'271',272,273,274,275,276,277,278,279,280,281,282,283,284,'320',321,322,323,324,325,326,327,328,329,330,331,332,333,334,335,336,'376',377,378,379,380,381,382,383,'424',425,426,427,428,429,430,

'459',460,461,462,'508',509,510,511,512,513,'558',559,560,561,562,563,'608',609,610,611,612,613,'658',659,660,661,662,663,'709',710,711,712,'488',489,490,491,'537',538,539,540,541,542,'587',588,589,590,591,592,'637',638,639,640,641,642,'687',688,689,690,691,692,'738',739,740,741,

'137',138,139,140,141,'186',187,188,189,190,191,192,193,'238',239,240,241,242,243,244,245,246,247,'285',286,287,288,289,290,291,292,293,294,295,296,297,298,'337',338,339,340,341,342,343,344,345,346,347,348,'384',385,386,387,388,389,390,391,392,393,394,395,396,397,398,399,'431',432,433,434,435,436,437,442,443,444,445,446,447,448,449,'479',480,481,482,483,484,485,486,'493',494,495,496,497,498,499,'531',532,533,534,535,'544',545,546,547,548,549,'582',583,584,585,'594',595,596,597,598,'630',631,632,633,634,635,'644',645,646,647,'684',685,
];


// old colors  :: "#117483","#5d7c1b","#936800","#9b5638",
// new colors  :: front - 0fadb3  cabin - 7fb210  rear - c9961c  wheels -  ea7f50
// new colors  :: front - rgb(15, 173, 179)  cabin - rgb(127, 178, 16)  rear - rgb(201, 150, 28)  wheels -  rgb(234, 127, 80)


//-----------------------------------Define texts of four group------------------------------------------------

var popup_length = [16,36,56,76];
var noise_number = 0;
var front_label = ["Bad Turbo","Clutch Screech","Engine Knock","Dieseling","Loose Belt","Misfire",];
var front_noise = ["booOOOOOooo","screek SCREEK","tucka THUCK","blubBLUBblub","YEEeeEEeeEEe","puhVRooPuhHoo",];
var cabin_label = ["Bad Pump","Flapping","Water Trapped","Squeak",];
var cabin_noise = ["nnYinn nyongg","fluuuh fluuuh","bllblblblblblbl","uRR UrrrrrRR",];
var wheels_label = ["Bad Joint","Bad Tire","Grinding Brakes","Warped Rotors",];
var wheels_noise = ["eehonkeeehonk","floovb vwomp"," geerogherrr"," vwahp vwup",];
var rear_label = ["Back Fire","Bad Axle","Exhaust Leak","Gas Cap","Loose Shield",];
var rear_noise = ["BOOM","glugluglugluglu"," boorrrththth","ffffffffah","rrrINGArring",];
var msgbox_details = [
"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
"Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
"Nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur. Omnis voluptas assumenda est, omnis dolor repellendus.",
"Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.",
"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",];

var bar_width = 0;

// ----------------------------------------- create divs ------------------------------------------------

for(var k=1;k<divnumber;k++){
	
	$("#car").append("<div id='divbg"+k+"'>" + "</div>");
//	$("#divbg"+k+"").append("<div class='cardiv' id='div"+k+"'>" + k + "</div>"); //with number
	$("#divbg"+k+"").append("<div class='cardiv' id='div"+k+"'>" + "</div>"); //without number
	
	list_all_divbg(); 	
	list_all_divs();
}//---------------

function list_all_divbg() {
			$("#divbg"+k+"").css({"width":"16px", "height":"16px" });
			$("#divbg"+k+"").css( "border", "0px solid #333" );
			$("#divbg"+k+"").css( "margin", "2px" );
			$("#divbg"+k+"").css( "float", "left" );
			$("#divbg"+k+"").css( "z-index", "1" );
//			$("#divbg"+k+"").css( "visibility", "hidden" );
}
		
function list_all_divs() {
			$("#div"+k+"").css( "background-color", "#777" );
			$("#div"+k+"").css({"width":"1px", "height":"16px" });
			$("#div"+k+"").css( "border", "0px solid #333" );
			$("#div"+k+"").css( "border-radius", "3px" );
			$("#div"+k+"").css({"margin-left":"auto", "margin-right":"auto" });
			$("#div"+k+"").css( "z-index", "2" );
			$("#div"+k+"").css( "visibility", "hidden" );
}// 

//----------------------------------------- top ---------------------------------------

for(var k=1;k<5;k++){ // ------ four lines on the top bar  -----------
	
	$(".bar").append("<div class='barbg"+k+"'>" + "</div>");
	$(".title_bar").append("<div class='barbg"+k+"'>" + "</div>");

	var four_colors = ["","#117483","#5d7c1b","#936800","#9b5638",];

	$(".barbg"+k+"").css({"width":"100%", "height":"2px", "left": 0, });
	$(".barbg"+k+"").css( "border-bottom", "1px solid #555" );
}//----

$(".barbg1").css( "border-bottom", "1px solid #117483" );
$(".barbg2").css( "border-bottom", "1px solid #5d7c1b" );
$(".barbg3").css( "border-bottom", "1px solid #936800" );
$(".barbg4").css( "border-bottom", "1px solid #9b5638" );

// ------ end of four lines on the top bar  -----------


bar_width = ($(window).width()-1000)/2;
$(".bar").css("width",bar_width);
$("#title_bar_left").css("width","42");
$("#title_bar_right").css("width",1000-290-42);


$( window ).resize(function() {

  	bar_width = ($(window).width()-1000)/2;
	$(".bar").css("width",bar_width);
	
});

//$(window).resizable(function() {
//	minWidth: 1020;
//
//});

// ------ mouse of menu items  -----------

var moving_speed = 100;

$("#menu_front").mouseover(function() {
	hide_car();
	
	$("#msgbox").animate({left: 0, opacity: 0,}, 400 ); // make msgbox disappear
	$("#focus").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css( "background-color", ""); // make focus disappear
	$("#focus").text(""); // make focus disappear

	$("#focus_line").css({"border-top": "0px solid #0fadb3", "opacity": 0, }); // make focus_line disappear
	$("#focus_line").animate({"width": "0px", left: 0, height: 0,},300); // make focus_line disappear

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#menu_front").css({"color": "#0fadb3", "text-shadow": "0px 1px 0px #555",  });

	$("#front_line").css({"border-top": "2px solid #0fadb3", "opacity": 1, });
	$("#front_line").animate({"width": "125px", left: 0, height: 0,},moving_speed*3);
	$("#front_line").delay(50).animate({width: 1, left: 125,},moving_speed);
	$("#front_line").css({"border-right": "2px solid #0fadb3", width: 0, });
	$("#front_line").animate({height: 100, top: 0, width: 0,},moving_speed).animate({height: 0, top: 100,},moving_speed);
	$("#front_line").animate({"width": "510px", left: -380, height: 0,},moving_speed*2);
	$("#front_line").delay(500).animate({opacity: 0,},moving_speed*2);
	
	setTimeout(function(){highlight_front();}, 800);
	flag_setInterval = false;

});

$("#menu_front").mouseout(function() {

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#front_line").css({"width": "1px","height": "1px","top": "0px","left": "0px", "border": "0px dotted #0fadb3", });
	show_car();
	flag_setInterval = true;

});

$("#menu_cabin").mouseover(function() {
	hide_car();
	
	$("#msgbox").animate({left: 0, opacity: 0,}, 400 ); // make msgbox disappear
	$("#focus").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css( "background-color", ""); // make focus disappear
	$("#focus").text(""); // make focus disappear

	$("#focus_line").css({"border-top": "0px solid #0fadb3", "opacity": 0, }); // make focus_line disappear
	$("#focus_line").animate({"width": "0px", left: 0, height: 0,},300); // make focus_line disappear

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#menu_cabin").css({"color": "#7fb210", "text-shadow": "0px 1px 0px #555",  });
		
	$("#cabin_line").css({"border-top": "2px solid #7fb210", "opacity": 1, });
	$("#cabin_line").animate({"width": "125px", left: 125, height: 0,},moving_speed*4);
	$("#cabin_line").delay(50).animate({width: 1, left: 250,},moving_speed);
	$("#cabin_line").css({"border-right": "2px solid #7fb210", width: 0, });
	$("#cabin_line").animate({height: 100, top: 0, width: 0,},moving_speed).animate({height: 0, top: 100,},moving_speed);
	$("#cabin_line").animate({"width": "160px", left: 145, height: 0,},moving_speed);
	$("#cabin_line").delay(500).animate({opacity: 0,},moving_speed*2);
	
	setTimeout(function(){highlight_cabin();}, 900);
	flag_setInterval = false;

});

$("#menu_cabin").mouseout(function() {

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#cabin_line").css({"width": "1px","height": "1px","top": "0px","left": "0px", "border": "0px dotted #0fadb3", });
	show_car();
	flag_setInterval = true;
});
  

$("#menu_rear").mouseover(function() {
	hide_car();

	$("#msgbox").animate({left: 0, opacity: 0,}, 400 ); // make msgbox disappear
//	$("#focus_holder").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css( "background-color", ""); // make focus disappear
	$("#focus").text(""); // make focus disappear

	$("#focus_line").css({"border-top": "0px solid #0fadb3", "opacity": 0, }); // make focus_line disappear
	$("#focus_line").animate({"width": "0px", left: 0, height: 0,},300); // make focus_line disappear

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_rear").css({"color": "#c9961c", "text-shadow": "0px 1px 0px #555",  });
		
	$("#rear_line").css({"border-top": "2px solid #c9961c", "opacity": 1, });
	$("#rear_line").animate({"width": "320px", left: 250, height: 0,},moving_speed*4);
	$("#rear_line").delay(50).animate({width: 1, left: 570,},moving_speed);
	$("#rear_line").css({"border-right": "2px solid #c9961c", width: 0, });
	$("#rear_line").animate({height: 220, top: 170, width: 0,},moving_speed*4);
	$("#rear_line").delay(500).animate({opacity: 0,},moving_speed*2);
	
	setTimeout(function(){highlight_rear();}, 900);
	flag_setInterval = false;

});

$("#menu_rear").mouseout(function() {
	
	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#rear_line").css({"width": "1px","height": "1px","top": "0px","left": "0px", "border": "0px dotted #0fadb3", });
	show_car();
	flag_setInterval = true;
});


$("#menu_wheels").mouseover(function() {
	hide_car();
	
	$("#msgbox").animate({left: 0, opacity: 0,}, 400 ); // make msgbox disappear
//	$("#focus_holder").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css({"width":"16px", "height":"16px", }); // make focus disappear
	$("#focus").css( "background-color", ""); // make focus disappear
	$("#focus").text(""); // make focus disappear

	$("#focus_line").css({"border-top": "0px solid #0fadb3", "opacity": 0, }); // make focus_line disappear
	$("#focus_line").animate({"width": "0px", left: 0, height: 0,},300); // make focus_line disappear

	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_wheels").css({"color": "#ea7f50", "text-shadow": "0px 1px 0px #555",  });
				
	$("#wheels_line").css({"border-top": "2px solid #ea7f50", "opacity": 1, });
	$("#wheels_line").animate({"width": "125px", left: 375, height: 0,},moving_speed*4).delay(50).animate({width: 1, left: 499,},moving_speed);

	setTimeout(function(){
		
		$("#wheels_line").css({"left": "-284px","width": "0px","top": "440px", "border-top": "2px solid #ea7f50", "opacity": 1, });
		$("#wheels_line").animate({"width": "118px", left: -284, height: 0,},moving_speed*2).delay(50).animate({"width": "0px", left: -166,},moving_speed);
		$("#wheels_line").animate({left: 300,},moving_speed).animate({"width": "118px", },moving_speed*2).delay(50).animate({"width": "0px", left: 418,},moving_speed);
		highlight_wheels();
	
	}, 800);
	flag_setInterval = false;
});

$("#menu_wheels").mouseout(function() {
	
	$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
	$("#wheels_line").css({"width": "1px","height": "1px","top": "0px","left": "0px", "border": "0px dotted #0fadb3", });
	show_car();
	flag_setInterval = true;
});
		
//----------------------------------------- show car animation ---------------------------------------

$("#msgbox").hide();

setTimeout(function(){

	show_front();
	show_cabin();
	show_rear();	
	show_wheels();

	
	flag_setInterval = true; // start to play random animation

	random_animate();
	
}, 500);


//----------------------------------------- animate logo -----------------------------------------------

setTimeout(function(){

	$("#logo_holder").animate({top: "0px",}, 600 );
	$("#menu").delay(400).animate({top: "60px", opacity : 1,}, 600 );
	
}, 2700);

//----------------------------------------- mouse over car ---------------------------------------
  
$(".cardiv").mouseover(function() {

	if (!flag_show_car)	{
		show_car();
	}
	
	$(this).delay(50).animate({"height":"16px","width":"1px"},timer_interval);
	$(this).delay(50).animate({"height":"16px","width":"16px"},timer_interval);

	var i=Math.floor((Math.random()*2)+2);
	var focus_width = popup_length[i];
//	alert (i + " : " + focus_width);
	var i=Math.floor((Math.random()*4)+0);
	var focus_height = popup_length[i];
//	alert (i + " : " + focus_height);

	if (focus_height > focus_width)
	{
		var temp = focus_height;
		focus_height = focus_width;
		focus_width =temp;
//		alert (" after compare : " + focus_height);
	}

	$("#focus").css( "background-color", $(this).css('background-color'));
	$("#focus").css({"width":focus_width, "height":focus_height });
				
//				$("#focus").text( $("#focus").css('background-color'));

	var div_left = $(this).position().left + bar_width;
	var div_top = $(this).position().top + 0;
	$("#focus_holder").css({"width":focus_width, "height":focus_height });
	$("#focus_holder").css({"top": div_top, "left":div_left});

	if($("#focus").css('background-color') === 'rgb(15, 173, 179)'){// blue front
		noise_number = Math.floor((Math.random()*front_label.length)+0);
		$("#focus").text( front_label[noise_number]);

		$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_front").css({"color": "#0fadb3", "text-shadow": "0px 1px 0px #555",  });
		
		if ($("#focus_line").css('left') != "0px" ){
//			alert ($("#focus_line").css('left') );
			$("#focus_line").css({"border-top": "2px solid #0fadb3", "opacity": 1, });
			$("#focus_line").animate({"width": "120px", left: 0, height: 0,},200);
		}
	}//
	
	if($("#focus").css('background-color') === 'rgb(127, 178, 16)'){// green cabin
		noise_number = Math.floor((Math.random()*cabin_label.length)+0);
		$("#focus").html(cabin_label[noise_number]);

		$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_cabin").css({"color": "#7fb210", "text-shadow": "0px 1px 0px #555",  });
		
		if ($("#focus_line").css('left') != "125px" ){
			
			$("#focus_line").css({"border-top": "2px solid #7fb210", "opacity": 1, });
			$("#focus_line").animate({"width": "120px", left: 125, height: 0,},200);
		}
	}//
	if($("#focus").css('background-color') === 'rgb(201, 150, 28)'){// orange rear
		noise_number = Math.floor((Math.random()*rear_label.length)+0);
		$("#focus").html(rear_label[noise_number]);
		
		$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_rear").css({"color": "#c9961c", "text-shadow": "0px 1px 0px #555",  });
		
		if ($("#focus_line").css('left') != "250px" ){
			$("#focus_line").css({"border-top": "2px solid #c9961c", "opacity": 1, });
			$("#focus_line").animate({"width": "120px", left: 250, height: 0,},300);
		}
	}//
	if($("#focus").css('background-color') === 'rgb(234, 127, 80)'){// red wheels
		noise_number = Math.floor((Math.random()*wheels_label.length)+0);
		$("#focus").html(wheels_label[noise_number]);
		
		$(".menu").css({"color": "#666", "text-shadow": "0px 0px 0px #fff",  });
		$("#menu_wheels").css({"color": "#ea7f50", "text-shadow": "0px 1px 0px #555",  });

		if ($("#focus_line").css('left') != "375px" ){
			$("#focus_line").css({"border-top": "2px solid #ea7f50", "opacity": 1, });
			$("#focus_line").animate({"width": "120px", left: 375, height: 0,},300);
		}
	}//


});	



$(".cardiv").mouseout(function() {

	mouse_stay = false;
//	random_animate();
});
  

$("#focus").click(function(){

	$("#msgbox").show();

	if ($("#focus_holder").position().left < 600)
	{	
		var temp = $("#focus_holder").width() + 24;
		var msgbox_left = $("#focus_holder").position().left + temp;
	}else
	{
		var msgbox_left = $("#focus_holder").position().left - 220;
	}
//	var msgbox_top = $("#focus_holder").position().top - 500;
	var msgbox_top = $("#focus_holder").position().top + 40;
	$("#msgbox").animate({top: msgbox_top,left: msgbox_left, opacity: 1,}, 400 );


//	$("#msgbox").animate({top: -300,}, 1000 );
	$("#msgbox").css({"background-color": "#585858",});
	$("#msgbox").css({"background-color": $("#focus").css('background-color') ,});

	if($("#focus").css('background-color') === 'rgb(15, 173, 179)'){// blue front
	
		$("#msgbox_title").html(front_label[noise_number]);
		$("#msgbox_noise").html("<span>NOISE : </span>" +  front_noise[noise_number]);
	}//
	if($("#focus").css('background-color') === 'rgb(127, 178, 16)'){// green cabin
	
		$("#msgbox_title").html(cabin_label[noise_number]);
		$("#msgbox_noise").html("<span>NOISE : </span>" +  cabin_noise[noise_number]);
	}//
	if($("#focus").css('background-color') === 'rgb(201, 150, 28)'){// orange rear
	
		$("#msgbox_title").html(rear_label[noise_number]);
		$("#msgbox_noise").html("<span>NOISE : </span>" +  rear_noise[noise_number]);
	}//
	if($("#focus").css('background-color') === 'rgb(234, 127, 80)'){// red wheels
	
		$("#msgbox_title").html(wheels_label[noise_number]);
		$("#msgbox_noise").html("<span>NOISE : </span>" +  wheels_noise[noise_number]);
	}//

		$("#msgbox_details").html("<span>DETAILS : </span>" + "</br>" + msgbox_details[noise_number]);
	
	var temp = $("#msgbox").css('top');
	//			alert (temp);

	if (msgbox_top < 138){// -----------if the msgbox is too high move it down  -------------
		$("#msgbox").animate({top: 138, opacity: 1,}, 400 );

	}
	if (msgbox_top > 238){// -----------if the msgbox is too low move it up  -------------
		$("#msgbox").animate({top: 258, opacity: 1,}, 400 );
	}

});

$("#middle").mouseout(function() {

//	$("#focus_holder").css({"width":"16", "height":"16" });

});

$("#msgbox_close").mouseover(function() {
	$("#msgbox_close").css({"border": "1px solid rgba(255,255,255,0.5)",}); // background color
	$("#msgbox_close").css({"background-color": "rgba(0,0,0,0.2)",}); // background color
	$("#msgbox_close").css({"color": "rgba(255,255,255,1)",}); // text
});

$("#msgbox_close").mouseout(function() {
	$("#msgbox_close").css({"border": "1px solid rgba(0,0,0,0.1)",}); // background color
	$("#msgbox_close").css({"background-color": "",}); // background color
	$("#msgbox_close").css({"color": "rgba(0,0,0,0.3)",}); // text
});

$("#msgbox_close").click(function(){
	
	$("#msgbox").animate({left: 0, opacity: 0,}, 400 );
//	$("#msgbox").hide();

});
//------------------------------------------------------------------------
//------------------------------------------------------------------------


function show_front() {

	for (i = 0; i < 60; i++) {
	//		$("#div"+front_num[i]+"").css( "visibility", "visible" );
		$("#div"+front_num[i]+"").css( "visibility", "visible" );
		$("#div"+front_num[i]+"").css( "background-color", "#0fadb3" );
		$("#div"+front_num[i]+"").delay(i*5).animate({"height":"16px","width":"16px"},timer_start);

	}
	for (i = 60; i < 120; i++) {
		$("#div"+front_num[i]+"").css( "visibility", "visible" );
		$("#div"+front_num[i]+"").css( "background-color", "#0fadb3" );
		$("#div"+front_num[i]+"").delay(i*5).animate({"height":"16px","width":"16px"},timer_start);

	}
	for (i = 120; i < front_num.length; i++) {
		$("#div"+front_num[i]+"").css( "visibility", "visible" );
		$("#div"+front_num[i]+"").css( "background-color", "#0fadb3" );
		$("#div"+front_num[i]+"").delay(i*5).animate({"height":"16px","width":"16px"},timer_start);

	}
}// end of "show_front()"

function show_cabin() {
	for (i = 0; i < cabin_num.length; i++) {
		$("#div"+cabin_num[i]+"").css( "visibility", "visible" );
		$("#div"+cabin_num[i]+"").css( "background-color", "#7fb210" );
		$("#div"+cabin_num[i]+"").css({"margin-left":"auto", "margin-right":"auto" });
		$("#div"+cabin_num[i]+"").delay(i*4).animate({"height":"16px","width":"16px"},timer_start);
	}
}

function show_rear() {
	for (i = 0; i < rear_num.length; i++) {
		$("#div"+rear_num[i]+"").css( "visibility", "visible" );
		$("#div"+rear_num[i]+"").css( "background-color", "#c9961c" );
		$("#div"+rear_num[i]+"").delay(i*7).animate({"height":"16px","width":"16px"},timer_start);
	}
}

function show_wheels() {
	for (i = 0; i < wheels_num.length; i++) {
		$("#div"+wheels_num[i]+"").css( "visibility", "visible" );
		$("#div"+wheels_num[i]+"").css( "background-color", "#ea7f50" );
		$("#div"+wheels_num[i]+"").delay(i*23).animate({"height":"16px","width":"16px"},timer_start);
	}
}


function show_car() {
	flag_show_car  = true;
	for (i = 0; i < car_num.length; i++) {
		$("#div"+car_num[i]+"").css( {"visibility": "visible", "width": "16px",});
	}
}

function hide_car() {
	flag_show_car  = false;
	for (i = 0; i < car_num.length; i++) {
		$("#div"+car_num[i]+"").css( "width", "1px" );
	}
}


//------------------------------------------------------------------------------------------------------


function highlight_front() {

	//for (i = 0; i < front_num.length; i++) {
//		$("#div"+front_num[i]+"").css({"height":"16px","width":"16px"});
//
//	}
	
	for (i = 0; i < 60; i++) {
		$("#div"+front_num[i]+"").delay(i*3).animate({"height":"16px","width":"16px"},timer_start);

	}
	for (i = 60; i < 120; i++) {
		$("#div"+front_num[i]+"").delay(i*3).animate({"height":"16px","width":"16px"},timer_start);

	}
	for (i = 120; i < front_num.length; i++) {
		$("#div"+front_num[i]+"").delay(i*3).animate({"height":"16px","width":"16px"},timer_start);
	}
}// 

function highlight_wheels() {
	for (i = 0; i < wheels_num.length; i++) {
		$("#div"+wheels_num[i]+"").delay(i*4).animate({"height":"16px","width":"16px"},timer_start);
//		$("#div"+wheels_num[i]+"").css({"height":"16px","width":"16px"});
	}
}

function highlight_cabin() {
	for (i = 0; i < cabin_num.length; i++) {
		$("#div"+cabin_num[i]+"").delay(i*2).animate({"height":"16px","width":"16px"},timer_start);
//		$("#div"+cabin_num[i]+"").css({"height":"16px","width":"16px"});
	}
}

function highlight_rear() {
	for (i = 0; i < rear_num.length; i++) {
		$("#div"+rear_num[i]+"").delay(i*2).animate({"height":"16px","width":"16px"},timer_start);
//		$("#div"+rear_num[i]+"").css({"height":"16px","width":"16px"});
	}
}


//------------------------------------------------------------------------------------------------------


//function random_animate() {

setInterval(function() {
	if(flag_setInterval) {
	var j=Math.floor((Math.random()*80)+1);
	
	$("#div"+rear_num[j]+"").delay(500).animate({"height":"16px","width":"1px"},timer_interval);
	$("#div"+rear_num[j]+"").delay(500).animate({"height":"16px","width":"16px"},timer_interval);
//		$("#div"+wheels_num[i]+"").css( "opacity", "-10%" );
	$("#div"+cabin_num[j]+"").animate({"height":"16px","width":"1px"},timer_interval * 2);
	$("#div"+cabin_num[j]+"").animate({"height":"16px","width":"16px"},timer_interval * 2);
	
	$("#div"+wheels_num[j]+"").delay(j*5).animate({"height":"16px","width":"1px"},timer_interval);
	$("#div"+wheels_num[j]+"").delay(j*5).animate({"height":"16px","width":"16px"},timer_interval);
//		$("#div"+wheels_num[i]+"").css( "opacity", "-10%" );
	$("#div"+front_num[j]+"").animate({"height":"16px","width":"1px"},timer_interval * 2);
	$("#div"+front_num[j]+"").animate({"height":"16px","width":"16px"},timer_interval * 2);
	
	var j=Math.floor((Math.random()*front_num.length)+80);
	$("#div"+front_num[j]+"").delay(j/2).animate({"height":"16px","width":"1px"},timer_interval * 2);
	$("#div"+front_num[j]+"").delay(j/2).animate({"height":"16px","width":"16px"},timer_interval * 2);
	}
}, 800);

setInterval(function() {
	if(flag_setInterval) {
	var j=Math.floor((Math.random()*front_num.length)+80);
	$("#div"+front_num[j]+"").animate({"height":"16px","width":"1px"},timer_interval * 2);
	$("#div"+front_num[j]+"").animate({"height":"16px","width":"16px"},timer_interval * 2);
	
	$("#div"+rear_num[j]+"").animate({"height":"16px","width":"1px"},timer_interval);
	$("#div"+rear_num[j]+"").animate({"height":"16px","width":"16px"},timer_interval);
//		$("#div"+wheels_num[i]+"").css( "opacity", "-10%" );
	$("#div"+cabin_num[j]+"").animate({"height":"16px","width":"1px"},timer_interval * 2);
	$("#div"+cabin_num[j]+"").animate({"height":"16px","width":"16px"},timer_interval * 2);
	}
}, 900);

//------------ show the random popup box every 3 seconds------------------------
//
//setInterval(function() {
//
//	var j=Math.floor((Math.random()*car_num.length)+1);
//	random_div = $("#divbg"+car_num[j]+"");
////	random_div.css('background-color')
//
//	var i=Math.floor((Math.random()*4)+1);
//	var popup_width = popup_length[i];
//	var i=Math.floor((Math.random()*4)+0);
//	var popup_height = popup_length[i];
//
//	if (popup_height > popup_width)
//	{
//		var temp = popup_height;
//		popup_height = popup_width;
//		popup_width = temp;
//	}
//
//	$("#popup").css( "background-color", random_div.css('background-color'));
//	$("#popup").css({"width":popup_width, "height":popup_height });
////	random_div.css( "background-color", "#555");
//
//	var popup_left = random_div.position().left + bar_width;
//	var popup_top = random_div.position().top + 86;
//	
////	alert (	"div_left : " + div_left +" div_top : "+div_top );
// 
//	
//	$("#popup_holder").css({"width":popup_width, "height":popup_height });
//	$("#popup_holder").css({"top": popup_top, "left":popup_left});
//
////	alert ($("#popup_holder").css('left'));
//
//
////	$("#popup").delay(1000).animate({"height":"1px","width":"1px"},timer_interval * 2);
////	$("#popup").animate({"height":"56px","width":"56px"},timer_interval * 2);
//
//}, 2000);
//

//}
//---------------------- end of random_animate() --------------------------

//-----------------------------------------------------

});
