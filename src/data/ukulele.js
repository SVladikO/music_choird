const ukuleleData = [
    {
        name: 'A', chords: [
            {name: 'A', notes: [[3], [4], [], []], headerNotes: []},
            {name: 'Am', notes: [[], [4], [], []], headerNotes: []},
            {name: 'A5', notes: [[], [4], [], [3]], headerNotes: [2, 4]},
            {name: 'A6', notes: [[], [2, 4], [], [1, 3]], headerNotes: []},
            {name: 'A7', notes: [[3], [], [], []], headerNotes: []},
            {name: 'A9', notes: [[3], [1], [], []], headerNotes: []},
            {name: 'Am6', notes: [[], [1, 2, 3, 4], [1], [3]], headerNotes: []},
            {name: 'Am7', notes: [[], [], [1, 2], [3]], headerNotes: []},
            {name: 'Amaj7', notes: [[3, 4], [], [], []], headerNotes: []},
            {name: 'A+', notes: [[2, 3], [4], [], []], headerNotes: []},
            {name: 'Asus4', notes: [[], [3, 4], [], []], headerNotes: []},
            {name: 'Aadd9', notes: [[3], [1, 4], [], []], headerNotes: []},
        ]
    },
    {
        name: 'B', chords: [
            {name: 'B', notes: [[], [1, 2], [3], [4]], headerNotes: []},
            {name: 'Bm', notes: [[], [1, 2, 3, 4], [], [4]], headerNotes: []},
            {name: 'B5', notes: [[], [1, 2], [], []], headerNotes: [5, 7]},
            {name: 'B6', notes: [[4], [1, 2], [3], []], headerNotes: []},
            {name: 'B7', notes: [[], [1, 2, 4], [3], []], headerNotes: []},
            {name: 'B9', notes: [[], [1, 2, 3, 4], [3], [1]], headerNotes: []},
            {name: 'Bm6', notes: [[4], [1, 2, 3], [], []], headerNotes: []},
            {name: 'Bm7', notes: [[], [1, 2, 3, 4], [], []], headerNotes: []},
            {name: 'Bmaj7', notes: [[2], [3], [4], []], headerNotes: []},
            {name: 'B+', notes: [[], [1], [2, 3], []], headerNotes: []},
            {name: 'Bsus4', notes: [[], [1, 2], [], [3, 4]], headerNotes: []},
        ]
    },
    {
        name: 'C', chords: [
            {name: 'C', notes: [[], [], [1], []], headerNotes: []},
            {name: 'Cm', notes: [[], [], [1, 2, 3], []], headerNotes: []},
            {name: 'C5', notes: [[], [], [1, 2], []], headerNotes: [6, 8]},
            {name: 'C6', notes: [[], [], [], []], headerNotes: []},
            {name: 'C7', notes: [[1], [], [], []], headerNotes: []},
            {name: 'C9', notes: [[1], [3], [], []], headerNotes: []},
            {name: 'Cm6', notes: [[], [4], [1, 2, 3], []], headerNotes: []},
            {name: 'Cm7', notes: [[], [], [1, 2, 3, 4], []], headerNotes: []},
            {name: 'Cmaj7', notes: [[], [1], [], []], headerNotes: []},
            {name: 'C+', notes: [[4], [], [1], []], headerNotes: []},
            {name: 'Csus4', notes: [[2], [], [1], []], headerNotes: []},
        ]
    },
    {
        name: 'D', chords: [
            {name: 'D', notes: [[], [2, 3, 4], [], [], [1]], headerNotes: []},
            {name: 'Dm', notes: [[2], [3, 4], [], []], headerNotes: []},
            {name: 'D5', notes: [[], [1, 2, 3, 4], [], [], [1, 2]], headerNotes: []},
            {name: 'D6', notes: [[], [1, 2, 3, 4], [], []], headerNotes: []},
            {name: 'D7', notes: [[], [2, 3, 4], [1], []], headerNotes: []},
            {name: 'D9', notes: [[], [2, 4], [1], [3]], headerNotes: []},
            {name: 'Dm6', notes: [[2], [1, 3, 4], [], []], headerNotes: []},
            {name: 'Dm7', notes: [[2], [3, 4], [1], []], headerNotes: []},
            {name: 'Dmaj7', notes: [[], [1, 2, 3, 4], [], [1]], headerNotes: []},
            {name: 'D+', notes: [[1], [2, 3], [4], []], headerNotes: []},
            {name: 'Dsus4', notes: [[], [3], [2], []], headerNotes: [2, 4]},
        ]
    },
    {
        name: 'E', chords: [
            {name: 'E', notes: [[], [1], [], [2, 3, 4]], headerNotes: []},
            {name: 'Em', notes: [[], [1], [2], [3]], headerNotes: []},
            {name: 'E5', notes: [[], [1], [], [3, 4]], headerNotes: []},
            {name: 'E6', notes: [[4], [2], [], []], headerNotes: []},
            {name: 'E7', notes: [[4], [1, 3], [], []], headerNotes: []},
            {name: 'E9', notes: [[4], [1, 2, 3], [], []], headerNotes: []},
            {name: 'Em6', notes: [[3], [1], [], []], headerNotes: []},
            {name: 'Em7', notes: [[], [1, 3], [], []], headerNotes: []},
            {name: 'Emaj7', notes: [[4], [1], [3], []], headerNotes: []},
            {name: 'E+', notes: [[4], [], [1], []], headerNotes: []},
            {name: 'Esus4', notes: [[], [], [], [3, 4]], headerNotes: [2, 4]},
        ]
    },
    {
        name: 'F', chords: [
            {name: 'F', notes: [[2], [4], [], []], headerNotes: []},
            {name: 'Fm', notes: [[2, 4], [1], [], []], headerNotes: []},
            {name: 'F5', notes: [[2], [], [1], []], headerNotes: [6, 7]},
            {name: 'F6', notes: [[2], [3, 4], [1], []], headerNotes: []},
            {name: 'F7', notes: [[2], [4], [3], []], headerNotes: []},
            {name: 'F9', notes: [[], [4], [1, 2, 3], []], headerNotes: []},
            {name: 'Fm6', notes: [[2, 4], [3], [1], []], headerNotes: []},
            {name: 'Fm7', notes: [[2, 4], [], [1, 3], []], headerNotes: []},
            {name: 'Fmaj7', notes: [[2], [4], [1], [3]], headerNotes: []},
            {name: 'F+', notes: [[2, 3], [4], [], []], headerNotes: []},
            {name: 'Fsus4', notes: [[1, 2], [], [4], []], headerNotes: [6]},
        ]
    },
    {
        name: 'G', chords: [
            {name: 'G', notes: [[], [1, 3], [2], []], headerNotes: []},
            {name: 'Gm', notes: [[1], [3], [2], []], headerNotes: []},
            {name: 'G5', notes: [[], [3], [2], [], [1]], headerNotes: [7]},
            {name: 'G6', notes: [[], [1, 3], [], []], headerNotes: []},
            {name: 'G7', notes: [[], [2], [4], [1, 3]], headerNotes: []},
            {name: 'G9', notes: [[2], [1, 3, 4], [], []], headerNotes: []},
            {name: 'Gm6', notes: [[1], [3], [], []], headerNotes: []},
            {name: 'Gm7', notes: [[1, 2], [3], [], []], headerNotes: []},
            {name: 'Gmaj7', notes: [[], [1, 2, 3], [], []], headerNotes: []},
            {name: 'G+', notes: [[], [1], [2, 3], []], headerNotes: []},
            {name: 'Gsus4', notes: [[], [3], [1, 2], [], []], headerNotes: [8]},
        ]
    },
];

export default ukuleleData;