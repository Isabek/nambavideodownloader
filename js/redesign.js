var app_id = chrome.i18n.getMessage("@@extension_id");
var body = $('body');
var userpanel;
var username;
var jsonUrl;
var content;

beginCreateAuchUserPanel();


function beginCreateAuchUserPanel()
{
	$.ajax({
	  url: 'chrome-extension://'+app_id+'/html/panel.html',
	  success: createNotAuchUserPanel
	});
}

function createNotAuchUserPanel(content)
{
	body.prepend(content);
	createControlsBar();
	getJsonUrl();
}

function getJsonUrl(){
	var url = $('param[name=flashvars]').val();
	jsonUrl = url.substring(url.indexOf('http'));

	$.ajax({
		dataType: 'json',
		url: jsonUrl,
		success: insertDownloadControl 
	});
}

function insertDownloadControl(content){
	var url = content.logo.linkUrl;

	$.ajax({
		dataType: 'html',
		url: url,
		success: test
	});
}

function test(content){
	// content = $(content);
	console.log(content);
	// console.log(content.filter(".video-action a[href*='http']").html());
	// console.log($(".video-action a[href*='http']", content).html());
}

function createControlsBar(){
	var title = $('.panel-title').html();

	if(title){
		$('#namba_download_video_title').html(title);
	}
}
