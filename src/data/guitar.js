const guitarData = [
    {
        name: 'A', chords: [/** */
            {name: 'A', notes: [[], [2, 3, 4], [], [],], headerNotes: []},
            {name: 'Am', notes: [[2], [3, 4], [], [],], headerNotes: []},
            {name: 'A6', notes: [[], [1, 2, 3, 4], [], [],], headerNotes: []},
            {name: 'A7', notes: [[], [2, 3, 4], [1], [],], headerNotes: []},
            {name: 'A9', notes: [[], [2, 4], [1], [3],], headerNotes: []},
            {name: 'Am6', notes: [[2], [1, 3, 4], [], [],], headerNotes: []},
            {name: 'Am7', notes: [[2], [3, 4], [1], [],], headerNotes: []},
            {name: 'Amaj7', notes: [[3], [2, 4], [], [],], headerNotes: []},
            {name: 'A+', notes: [[1], [2, 3], [4], [],], headerNotes: []},
            {name: 'Asus4', notes: [[], [3, 4], [2], [],], headerNotes: []},
            {name: 'Aadd9', notes: [[], [2,4], [], [3],], headerNotes: []},
        ]
    },
    {
        name: 'B', chords: [
            {name: 'B', notes: [[], [1, 5], [2, 3, 4], [],], headerNotes: []},
            {name: 'Bm', notes: [[], [1, 5], [2], [3, 4],], headerNotes: []},
            {name: 'B6', notes: [[], [5, 6], [], [1, 2, 3, 4]], headerNotes: []},
            {name: 'B7', notes: [[4], [1, 3, 5], [], [],], headerNotes: []},
            {name: 'B9', notes: [[4], [1, 2, 3, 5], [], [],], headerNotes: []},
            {name: 'Bm6', notes: [[], [], [2], [1, 3, 4],], headerNotes: []},
            {name: 'Bm7', notes: [[1, 3, 5], [2], [4], [],], headerNotes: []},
            {name: 'Bmaj7', notes: [[], [5], [3], [2, 4],], headerNotes: []},
            {name: 'B+', notes: [[1], [2, 3], [4], [],], headerNotes: []},
            {name: 'Bsus4', notes: [[5], [], [3, 4], [],], headerNotes: []},
        ]
    },
    {
        name: 'C', chords: [
            {name: 'C', notes: [[2], [4], [5, 6], [],], headerNotes: []},
            {name: 'Cm', notes: [[1, 5], [2], [3, 4], []], ladNumber: 3, headerNotes: []},
            {name: 'C6', notes: [[2], [3, 4], [1], [],], headerNotes: []},
            {name: 'C7', notes: [[2], [4], [3, 5], [],], headerNotes: []},
            {name: 'C9', notes: [[], [4], [1, 2, 3, 5], [],], headerNotes: []},
            {name: 'Cm6', notes: [[2, 4], [3], [1], [],], headerNotes: []},
            {name: 'Cm7', notes: [[2, 4], [], [1, 3], [],], headerNotes: []},
            {name: 'Cmaj7', notes: [[], [4], [5], [],], headerNotes: []},
            {name: 'C+', notes: [[2, 3], [4], [], [],], headerNotes: []},
            {name: 'Csus4', notes: [[2], [], [4, 5], [],], headerNotes: []},
        ]
    },
    {
        name: 'D', chords: [
            {name: 'D', notes: [[], [1, 3], [2], [],], headerNotes: []},
            {name: 'Dm', notes: [[1], [3], [2], [],], headerNotes: []},
            {name: 'D6', notes: [[], [1, 3], [], [],], headerNotes: []},
            {name: 'D7', notes: [[2], [1, 3], [], [],], headerNotes: []},
            {name: 'D9', notes: [[2], [3, 6], [], [],], headerNotes: []},
            {name: 'Dm6', notes: [[1], [3], [], [],], headerNotes: []},
            {name: 'Dm7', notes: [[1, 2], [3], [], [],], headerNotes: []},
            {name: 'Dmaj7', notes: [[], [1, 2, 3], [], [],], headerNotes: []},
            {name: 'D+', notes: [[], [1], [2, 3], [],], headerNotes: []},
            {name: 'Dsus4', notes: [[], [3], [1, 2], [],], headerNotes: [9, 11, 8]},
        ]
    },
    {
        name: 'E', chords: [
            {name: 'E', notes: [[3], [4, 5], [], [],], headerNotes: []},
            {name: 'Em', notes: [[], [4, 5], [], [],], headerNotes: []},
            {name: 'E5', notes: [[], [4, 5], [], [3],], headerNotes: []},
            {name: 'E6', notes: [[3], [2, 4, 5], [], [],], headerNotes: []},
            {name: 'E7', notes: [[3], [4, 5], [2], [],], headerNotes: []},
            {name: 'E9', notes: [[3], [1, 5], [], [],], headerNotes: []},
            {name: 'Em6', notes: [[], [2, 4, 5], [], [],], headerNotes: []},
            {name: 'Em7', notes: [[], [5], [], [],], headerNotes: []},
            {name: 'Emaj7', notes: [[3, 4], [5], [], [],], headerNotes: []},
            {name: 'E+', notes: [[2, 3], [4], [], [],], headerNotes: []},
            {name: 'Esus4', notes: [[], [3, 4, 5], [], [],], headerNotes: [2, 4, 12]},
        ]
    },
    {
        name: 'F', chords: [
            {name: 'F', notes: [[1, 2, 6], [3], [4, 5], [],], headerNotes: []},
            {name: 'Fm', notes: [[1, 2, 3, 6], [], [4, 5], [],], headerNotes: []},
            {name: 'F6', notes: [[1, 2], [3], [], [],], headerNotes: []},
            {name: 'F7', notes: [[1, 2, 4, 6], [3], [5], [],], headerNotes: []},
            {name: 'F9', notes: [[], [3], [1, 4], [2],], headerNotes: []},
            {name: 'Fm6', notes: [[1, 2, 3], [], [], [],], headerNotes: []},
            {name: 'Fm7', notes: [[1, 2, 3, 4, 6], [5], [], [],], headerNotes: []},
            {name: 'Fmaj7', notes: [[2], [3], [4], [],], headerNotes: []},
            {name: 'F+', notes: [[1], [2, 3], [4], [],], headerNotes: []},
            {name: 'Fsus4', notes: [[1, 2], [], [3, 4], []], headerNotes: [9, 11]},
        ]
    },
    {
        name: 'G', chords: [
            {name: 'G', notes: [[], [5], [1, 6], [],], headerNotes: []},
            {name: 'Gm', notes: [[1, 2, 3, 6], [], [4, 5], []], ladNumber: 3, headerNotes: []},
            {name: 'G6', notes: [[], [5], [6], [],], headerNotes: []},
            {name: 'G7', notes: [[1], [5], [6], [],], headerNotes: []},
            {name: 'G9', notes: [[1], [3], [6], [],], headerNotes: []},
            {name: 'Gm6', notes: [[], [4], [1, 2, 3], [],], headerNotes: []},
            {name: 'Gm7', notes: [[1, 2, 3, 4, 6], [], [5], [],], headerNotes: []},
            {name: 'Gmaj7', notes: [[1], [2], [3], [4],], headerNotes: []},
            {name: 'G+', notes: [[4], [], [1], [],], headerNotes: []},
            {name: 'Gsus4', notes: [[2], [], [1, 6], [],], headerNotes: [6, 8, 9]},
        ]
    },
];

export default guitarData;