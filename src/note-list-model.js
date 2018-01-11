(function(exports) {
function NoteList() {
  this.notes = [];
  this.id = 0;
}

NoteList.prototype.addNote = function(note) {
  this.notes.push(note);
};

NoteList.prototype.getNotes = function() {
  return this.notes;
};

NoteList.prototype.createNote = function(string) {
  var note = new Note(string, this.id);
  this.id += 1;
  this.addNote(note);
};

exports.NoteList = NoteList;
})(this);
