var sectionsToHide=['generalSection','radio0MeshSection','radio0ClientSection','lanSection','internetSection','overviewSection'];

$(document).ready(function() {
$.each(sectionsToHide, function(index, element) {
$('#'+element).hide();
});
});

function nextSection(currentId, nextId) {
if (validateFields(currentId)) {
styleNavi(nextId,true);
$('#'+nextId).show();
$('#'+currentId).hide();
}
}

function skipSection(currentId, nextId) {
resetFields(currentId);
styleNavi(nextId, false);
$('#'+nextId).show();
$('#'+currentId).hide();
}


function prevSection(currentId, prevId) {
styleNavi(prevId);
$('#'+prevId).show();
$('#'+currentId).hide();
}

function styleNavi(id, fieldsFilled) {
if (fieldsFilled) {
$('#configNavi li.selected').addClass('validated');
} else {
$('#configNavi li.selected').removeClass('validated');
}
$('#configNavi li.selected').removeClass('selected');
$('#navi_'+id).addClass('selected');
}

function validateFields(sectionId) {
//TODO
return true;
}

function resetFields(sectionId) {
//TODO
}
