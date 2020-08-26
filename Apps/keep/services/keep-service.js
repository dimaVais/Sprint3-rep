
export const KeepService = {
    query,
    getNoteById,
    addNote,
    removeNote

}


function query() {
    return Promise.resolve(notes);
}

function getNoteById(noteId) {
    const note = notes.find(note => note.id === noteId);
    return Promise.resolve(note);
}

function removeNote(noteId) {
    notes = notes.filter(note => note.id !== noteId)
    console.log('inservice',notes);
    return Promise.resolve(notes);
}

function addNote(txt) {
    const note = {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        info: {
            txt
        }
    }
    notes.push(note);
    return Promise.resolve(notes);
}


var notes = [{
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Fullstack Me Baby!"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Buy eggs for dinner to make eggs salad"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Talk to mom"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Buy Amazon stock when it drops to $1500"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Tax refund! (important)"
        }
    },
    {
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Make a list for the trip"
        }
    },{
        id: makeId(),
        type: "NoteText",
        isPinned: true,
        backgroundColor: '#3b5998',
        info: {
            txt: "Call the babysitter"
        }
    },
    // {
    //     id: makeId(),
    //     type: "NoteImg",
    //     info: {
    //         url: "http://some-img/me",
    //         title: "Me playing Mi"
    //     },
    //      backgroundColor: '#3b5998',
    //     style: {
    //         backgroundColor: "#00d"
    //     }
    // },
    // {
    //     id: makeId(),
    //     type: "NoteTodos",
    //     info: {
    //         label: "How was it:",
    //         todos: [{
    //                 txt: "Do that",
    //                 doneAt: null
    //             },
    //          backgroundColor: '#3b5998',
    //             {
    //                 txt: "Do this",
    //                 doneAt: 187111111
    //             }
    //         ]
    //     }
    // }
];

function makeId(length = 5) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
  }