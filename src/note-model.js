(function(exports) {
function Note(string, id) {
  this.text = string;
  this.id = id;
};

Note.prototype.getNoteText = function() {
  return this.text;
};

  exports.Note = Note;

})(this);
