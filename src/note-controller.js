
  (function(exports) {
  function NoteController(noteList = new NoteList()) {
    this.noteList = noteList;
    this.noteList.createNote("Favourite drink: seltzer")
    this.view = new NoteListView(this.noteList);
  };

  NoteController.prototype.insertHtml = function(noteListView = this.view) {
    document.getElementById('notelist').innerHTML = noteListView.createHtmlString();
    // html = this.view.createHtmlString();
  };

  exports.NoteController = NoteController;
  })(this);



// we want NoteController.NoteListView to return
