const notes = [
  { id: '1', title: 'Note 1', content: 'Content 1'},
  { id: '2', title: 'Note 2', content: 'Content 2'}
];

class NoteService {
  getNotes(call, callback) {
    callback(null, { notes: [...notes] })
  }
}

module.exports = new NoteService()