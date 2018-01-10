function testCreateHtmlString() {
  var note = new Note('Pesto rules');
  var note2 = new Note('Only with pasta');
  var noteList = new NoteList();
  var noteListView = new NoteListView(noteList);

  noteList.addNote(note)
  noteList.addNote(note2)

  assert.isTrue(noteListView.createHtmlString() === "<ul><li>Pesto rules</li><li>Only with pasta</li></ul>");
};
testCreateHtmlString();

function test20CharLimit() {

  notelist = new NoteList;

  notelist.createNote("When do I go over 20 charachters. Is it now or am I over now, or now")

  notelistview = new NoteListView(notelist);

  assert.isTrue(notelistview.createHtmlString() === "<ul><li>When do I go over 20</li></ul>")

}

test20CharLimit();
