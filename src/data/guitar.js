const guitarData = [
    {
        name: 'A', chords: [
            {name: 'A', notes: [[], [2, 3, 4], [], [],]},
            {name: 'Am', notes: [[2], [3, 4], [], [],]},
            {name: 'A6', notes: [[], [1, 2, 3, 4], [], [],]},
            {name: 'A7', notes: [[], [2, 3, 4], [1], [],]},
            {name: 'A9', notes: [[], [2, 4], [1], [3],]},
            {name: 'Am6', notes: [[2], [1, 3, 4], [], [],]},
            {name: 'Am7', notes: [[2], [3, 4], [1], [],]},
            {name: 'Amaj7', notes: [[3], [2, 4], [], [],]},
            {name: 'A+', notes: [[1], [2, 3], [4], [],]},
            {name: 'Asus', notes: [[], [3, 4], [2], [],]},
            {name: 'Aadd9', notes: [[], [2,4], [], [3],]},
        ]
    },
    {
        name: 'B', chords: [
            {name: 'B', notes: [[], [1, 5], [2, 3, 4], [],]},
            {name: 'Bm', notes: [[], [1, 5], [2], [3, 4],]},
            {name: 'B6', notes: [[], [5, 6], [], [1, 2, 3, 4]]},
            {name: 'B7', notes: [[4], [1, 3, 5], [], [],]},
            {name: 'B9', notes: [[4], [1, 2, 3, 5], [], [],]},
            {name: 'Bm6', notes: [[], [], [2], [1, 3, 4],]},
            {name: 'Bm7', notes: [[1, 3, 5], [2], [4], [],]},
            {name: 'Bmaj7', notes: [[], [5], [3], [2, 4],]},
            {name: 'B+', notes: [[1], [2, 3], [4], [],]},
            {name: 'Bsus', notes: [[1], [3, 4], [2], [],]},
        ]
    },
    {
        name: 'C', chords: [
            {name: 'C', notes: [[2], [4], [5, 6], [],]},
            {name: 'Cm', notes: [[1, 5], [2], [3, 4], []], ladNumber: 3},
            {name: 'C6', notes: [[2], [3, 4], [1], [],]},
            {name: 'C7', notes: [[2], [4], [3, 5], [],]},
            {name: 'C9', notes: [[], [4], [1, 2, 3, 5], [],]},
            {name: 'Cm6', notes: [[2, 4], [3], [1], [],]},
            {name: 'Cm7', notes: [[2, 4], [], [1, 3], [],]},
            {name: 'Cmaj7', notes: [[], [4], [5], [],]},
            {name: 'C+', notes: [[2, 3], [4], [], [],]},
            {name: 'Csus', notes: [[2], [], [1, 4], [],]},
        ]
    },
    {
        name: 'D', chords: [
            {name: 'D', notes: [[], [1, 3], [2], [],]},
            {name: 'Dm', notes: [[1], [3], [2], [],]},
            {name: 'D6', notes: [[], [1, 3], [], [],]},
            {name: 'D7', notes: [[2], [1, 3], [], [],]},
            {name: 'D9', notes: [[2], [3, 6], [], [],]},
            {name: 'Dm6', notes: [[1], [3], [], [],]},
            {name: 'Dm7', notes: [[1, 2], [3], [], [],]},
            {name: 'Dmaj7', notes: [[], [1, 2, 3], [], [],]},
            {name: 'D+', notes: [[], [1], [2, 3], [],]},
            {name: 'Dsus', notes: [[], [3], [1, 2], [],]},
        ]
    },
    {
        name: 'E', chords: [
            {name: 'E', notes: [[3], [4, 5], [], [],]},
            {name: 'Em', notes: [[], [4, 5], [], [],]},
            {name: 'E5', notes: [[], [4, 5], [], [3],]},
            {name: 'E6', notes: [[3], [2, 4, 5], [], [],]},
            {name: 'E7', notes: [[3], [4, 5], [2], [],]},
            {name: 'E9', notes: [[3], [1, 5], [], [],]},
            {name: 'Em6', notes: [[], [2, 4, 5], [], [],]},
            {name: 'Em7', notes: [[], [5], [], [],]},
            {name: 'Emaj7', notes: [[3, 4], [5], [], [],]},
            {name: 'E+', notes: [[2, 3], [4], [], [],]},
            {name: 'Esus', notes: [[], [3, 4, 5], [], [],]},
        ]
    },
    {
        name: 'F', chords: [
            {name: 'F', notes: [[1, 2, 6], [3], [4, 5], [],]},
            {name: 'Fm', notes: [[1, 2, 3, 6], [], [4, 5], [],]},
            {name: 'F6', notes: [[1, 2], [3], [], [],]},
            {name: 'F7', notes: [[1, 2, 4, 6], [3], [5], [],]},
            {name: 'F9', notes: [[], [3], [1, 4], [2],]},
            {name: 'Fm6', notes: [[1, 2, 3], [], [], [],]},
            {name: 'Fm7', notes: [[1, 2, 3, 4, 6], [5], [], [],]},
            {name: 'Fmaj7', notes: [[2], [3], [4], [],]},
            {name: 'F+', notes: [[1], [2, 3], [4], [],]},
            {name: 'Fsus', notes: [[1, 2], [], [3, 4], [],]},
        ]
    },
    {
        name: 'G', chords: [
            {name: 'G', notes: [[], [5], [1, 6], [],]},
            {name: 'Gm', notes: [[1, 2, 3, 6], [], [4, 5], []], ladNumber: 3},
            {name: 'G6', notes: [[], [5], [6], [],]},
            {name: 'G7', notes: [[1], [5], [6], [],]},
            {name: 'G9', notes: [[1], [3], [6], [],]},
            {name: 'Gm6', notes: [[], [4], [1, 2, 3], [],]},
            {name: 'Gm7', notes: [[1, 2, 3, 4, 6], [], [5], [],]},
            {name: 'Gmaj7', notes: [[1], [2], [3], [4],]},
            {name: 'G+', notes: [[4], [], [1], [],]},
            {name: 'Gsus', notes: [[2], [], [1], [],]},
        ]
    },
];

export default guitarData;