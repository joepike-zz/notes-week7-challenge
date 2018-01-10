
function testAppInnerHtmlContent() {

  var notelist = new NoteList;
  var notecontroller = new NoteController(notelist);

  function NoteListViewDouble() {};

  NoteListViewDouble.prototype = {
    createHtmlString: function() {
      return "It worked";
    }
  }

  notelist.createNote("Language", "My favourite language is Javascript");
  notelist.createNote("Football", "My favourite team is Chelsea");

  var notelistviewdouble = new NoteListViewDouble

  notecontroller.insertHtml(notelistviewdouble);

  assert.isTrue(document.getElementById("notelist").innerHTML == "It worked")

}

testAppInnerHtmlContent();
