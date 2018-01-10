
(function(exports) {
  function SingleNoteView(note) {
    this.note = note;
  }

  SingleNoteView.prototype.createSingleNoteHTML = function() {
    return "<p>" + this.note.getNoteText() + "</p>";
  }

  exports.SingleNoteView = SingleNoteView;

})(this);
