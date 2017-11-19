/* people */
$("#cutpeo").click(function() {
    var tmp = $("#people").val();
    if (tmp != 1 && tmp >= 0) {
        $("#people").val(Number(tmp) - 1);
    }
});
$("#addpeo").click(function() {
    var tmp = $("#people").val();
    if (tmp >= 0) {
        $("#people").val(Number(tmp) + 1);
    }
});
$("#peopleCheck").click(function() {
    $("#totalPeople").html($("#people").val() + "人");
});
$("#totalPeopleCtl").click(function() {
    if ($(".peopleSele").is(":hidden")) {
        $(".peopleSele").show();
        $(".nowcontent").addClass('nowcontentbg');
        $("#totalPeopleCtl").addClass('haveChoose');
        $("#totalCourseCtl").addClass('haveChoose');
        $("#totalCostCtl").addClass('haveChoose');
        $("#totalCheckCtl").addClass('haveChoose');
        $("#checkmsg").hide();
          $(".peopleSele").addClass("animat");
    }
});
$('#peopleCheck').click(function() {
    $(".peopleSele").hide();
    $(".nowcontent").removeClass('nowcontentbg');
    $("#totalPeopleCtl").removeClass('haveChoose');
    $("#totalCourseCtl").removeClass('haveChoose');
    $("#totalCostCtl").removeClass('haveChoose');
    $("#totalCheckCtl").removeClass('haveChoose');
})


/*course*/
$("#cutcourse").click(function() {
    var tmp = $("#course").val();
    if (tmp != 1 && tmp >= 0) {
        $("#course").val(Number(tmp) - 1);
    }
});
$("#addcourse").click(function() {
    var tmp = $("#course").val();
    if (tmp >= 0) {
        $("#course").val(Number(tmp) + 1);
    }
});
$("#courseCheck").click(function() {
    $("#totalCourse").html($("#course").val() + "道");
});
$("#totalCourseCtl").click(function() {
    if ($(".courseSele").is(":hidden")) {
        $(".courseSele").show();
        $(".nowcontent").addClass('nowcontentbg');
        $("#totalPeopleCtl").addClass('haveChoose');
        $("#totalCourseCtl").addClass('haveChoose');
        $("#totalCostCtl").addClass('haveChoose');
        $("#totalCheckCtl").addClass('haveChoose');
        $("#checkmsg").hide();
         $(".courseSele").addClass("animat");
    }
});
$('#courseCheck').click(function() {
    $(".courseSele").hide();
    $(".nowcontent").removeClass('nowcontentbg');
    $("#totalPeopleCtl").removeClass('haveChoose');
    $("#totalCourseCtl").removeClass('haveChoose');
    $("#totalCostCtl").removeClass('haveChoose');
    $("#totalCheckCtl").removeClass('haveChoose');
})
/* cost */
$("#cutcostT").click(function() {
    var tmp = $("#costT").val();
    var tmp2 = $("#currentCost").text();
    if (tmp > 0) {
        $("#costT").val(Number(tmp) - 1000);
        $("#currentCost").text(Number(tmp2) - 1000)
    }
});
$("#addcostT").click(function() {
    var tmp = $("#costT").val();
    var tmp2 = $("#currentCost").text();
    if (tmp >= 0) {
        $("#costT").val(Number(tmp) + 1000);
        $("#currentCost").text(Number(tmp2) + 1000)
    }
});
$("#cutcostH").click(function() {
    var tmp = $("#costH").val();
    var tmp2 = $("#currentCost").text();
    if (tmp > 0) {
        $("#costH").val(Number(tmp) - 100);
        $("#currentCost").text(Number(tmp2) - 100)
    }
    if (tmp == 0) {
        $("#costH").val(Number(tmp) + 900);
        $("#currentCost").text(Number(tmp2) + 900)
    }
});
$("#addcostH").click(function() {
    var tmp = $("#costH").val();
    var tmp2 = $("#currentCost").text();
    if (tmp >= 0 && tmp < 900) {
        $("#costH").val(Number(tmp) + 100);
        $("#currentCost").text(Number(tmp2) + 100)
    }
    //歸0
    if (tmp == 900) {
        $("#costH").val(Number(tmp) - 900);
        $("#currentCost").text(Number(tmp2) - 900)
    }
});
$("#cutcostD").click(function() {
    var tmp = $("#costD").val();
    var tmp2 = $("#currentCost").text();
    if (tmp > 0) {
        $("#costD").val(Number(tmp) - 10);
        $("#currentCost").text(Number(tmp2) - 10)
    }
    if (tmp == 0) {
        $("#costD").val(Number(tmp) + 90);
        $("#currentCost").text(Number(tmp2) + 90)
    }
});
$("#addcostD").click(function() {
    var tmp = $("#costD").val();
    var tmp2 = $("#currentCost").text();
    if (tmp >= 0 && tmp < 90) {
        $("#costD").val(Number(tmp) + 10);
        $("#currentCost").text(Number(tmp2) + 10)
    }
    //歸0
    if (tmp == 90) {
        $("#costD").val(Number(tmp) - 90);
        $("#currentCost").text(Number(tmp2) - 90)
    }
});
$("#totalCostCtl").click(function() {
    if ($(".costSele").is(":hidden")) {
        $(".costSele").show();
        $(".nowcontent").addClass('nowcontentbg');
        $("#totalPeopleCtl").addClass('haveChoose');
        $("#totalCourseCtl").addClass('haveChoose');
        $("#totalCostCtl").addClass('haveChoose');
        $("#totalCheckCtl").addClass('haveChoose');
        $("#checkmsg").hide();
        $(".costSele").addClass("animat");
    }
});
$('#costCheck').click(function() {
    $("#totalCost").html($("#currentCost").text() + "元");
    if($('#totalCost').text()=="0元"){ 
        $('#costmsg').show();
        $('#costmsg').css("display:block");

    }
    else{
        $(".costSele").hide();
        $('#costmsg').hide();
        $(".nowcontent").removeClass('nowcontentbg');
        $("#totalPeopleCtl").removeClass('haveChoose');
        $("#totalCourseCtl").removeClass('haveChoose');
        $("#totalCostCtl").removeClass('haveChoose');
        $("#totalCheckCtl").removeClass('haveChoose');
    }


})


/* 確認送出檢查 */
$('#totalCheckCtl').click(function(){
	
	var totalPeople = $('#totalPeople').text();
	var totalCourse = $('#totalCourse').text();
	var totalCost = $('#totalCost').text();
	
	var main_soup = 0; // 0:none, 1:only main, 2:only soup, 3:both
	if ($('#need_main').prop('checked') == true && $('#need_soup').prop('checked') == true) {
		main_soup = 3;
	}
	else if ($('#need_main').prop('checked') == true) {
		main_soup = 1;
	}
	else {
		main_soup = 2;
	}
	
    if (totalPeople === "總人數"){
          $("#checkmsg").show();
          $("#checkmsg").html("請選擇總人數");  
    }
    else if ( totalCourse === "總菜數"){
          $("#checkmsg").show();
          $("#checkmsg").html("請選擇總菜數");  
    }
    else if( totalCost ===" 總預算"){
        $("#checkmsg").show();
        $("#checkmsg").html("請選擇總預算"); 
    }
	else {
		// send query data to overviewlist by url
		totalPeople = totalPeople.replace('人', '');
		totalCourse = totalCourse.replace('道', '');
		totalCost = totalCost.replace('元', '');
		// prepare url
		var targetUrl = '../app/overviewlist.html';
		targetUrl += '?peolpe=' + totalPeople + '&dishes=' + totalCourse +　'&budget=' + totalCost + '&main_soup=' + main_soup;
		console.log(targetUrl);
		//send
		window.location.href = targetUrl;
	}
})

