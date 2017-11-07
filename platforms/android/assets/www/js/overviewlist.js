
/* 點選更換 */

function changeOne(id) {
	
	var budget = queryData['budget'];
	var data =  {'change_id':id, 'all_id':recipeList, 'budget':budget};
	console.log('all before change');
	console.log(recipeList);
	recipeList.splice(recipeList.indexOf(String(id)), 1 );
	var url = 'http://vesta.csie.io:8080/applocal/james/vesta-server/index.php/Recipe/changeOne';
    
	
	$.post(url, data, function(rtn) {
		if(rtn['find'] == false) {
			recipeList.push(id);
			alert('目前的條件下找不到更好的選擇，請更換別道菜或是修改條件');
		}
		else{
			var new_recipe = rtn['new_recipe'];
			recipeList.push(new_recipe['id']);
			console.log('all after change');
			console.log(recipeList);
			$('.nowTotalCost').text(parseInt($('.nowTotalCost').text()) - parseInt($("#"+id+" .recipeCost").text()) + parseInt(new_recipe['price']));
			
			$("#"+id).replaceWith(
				"<ons-row id='"+new_recipe['id']+"'>"+
					 '<ons-col class="image" width="95px">'+
						'<img width="70%" height="70%" src="http://vesta.csie.io:8080/applocal/james/vesta-server/picture/'+new_recipe['id']+'.jpg">'+
					 '</ons-col>'+
					 '<ons-col>'+
						 '<div class="name">'+
							new_recipe['name'] +
						 '</div>'+
						 '<div class="location">'+
							 '<i class="fa fa-usd"></i><span class="recipeCost">'+new_recipe['price']+'</span>元'+
						 '</div>'+
						'<div class="deletmsg">'+
							 '此筆資料已經刪除'+
						 '</div>'+
					 '</ons-col>'+
					 '<ons-col style="text-align: center;">'+
						"<ons-button class='right delet' onClick='delet("+new_recipe['id']+")'>刪除</ons-button>"+
						"<ons-button class='right change' onClick='changeOne("+new_recipe['id']+")'>更換</ons-button>"+
					 '</ons-col>'+
				'</ons-row>'
			);
			
		}
	});
}

function delet(id) {
	if($('#'+id+' .delet').text() == '刪除') {
		recipeList.splice(recipeList.indexOf(String(id)), 1 );
		console.log(recipeList);
		$('#'+id+' img').hide();
		$('#'+id+' .name').hide();
		$('#'+id+' .location').hide();
		$('#'+id+' .deletmsg').show();
		$('#'+id+' .change').hide();
		$('#'+id+' .delet').text('復原');
		
		$('.nowTotalCost').text(parseInt($('.nowTotalCost').text()) - parseInt($('#'+id+' .recipeCost').text()));
		
	}
	else if ($('#'+id+' .delet').text() == '復原') {
		recipeList.push(String(id));
		console.log(recipeList);
		$('#'+id+' img').show();
		$('#'+id+' .name').show();
		$('#'+id+' .location').show();
		$('#'+id+' .deletmsg').hide();
		$('#'+id+' .change').show();
		$('#'+id+' .delet').text('刪除');
		
		$('.nowTotalCost').text(parseInt($('.nowTotalCost').text()) + parseInt($('#'+id+' .recipeCost').text()));
	}
}

function finalCheck() {
	sessionStorage.setItem('recipeList', JSON.stringify(recipeList));
	location.href = './finalRecipeList.html';
}
