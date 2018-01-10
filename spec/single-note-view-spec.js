
function testSingleNoteView() {

  note = new Note("Hello");

  singlenoteview = new SingleNoteView(note);

  assert.isTrue(singlenoteview.createSingleNoteHTML() === "<p>Hello</p>");

};

testSingleNoteView();
