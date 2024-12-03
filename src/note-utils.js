export const BASS_NOTE_1 = {
    C1: 'C1',
    D1: 'D1',
    E1: 'E1',
    F1: 'F1',
    G1: 'G1',
    A1: 'A1',
    B1: 'B1',
};

export const BASS_NOTE_2 = {
    C2: 'C2',
    D2: 'D2',
    E2: 'E2',
    F2: 'F2',
    G2: 'G2',
    A2: 'A2',
    B2: 'B2',
}

export const TREBLE_NOTE_3 = {
    C3: 'C3',
    D3: 'D3',
    E3: 'E3',
    F3: 'F3',
    G3: 'G3',
    A3: 'A3',
    B3: 'B3',
}
export const TREBLE_NOTE_4 = {
    C4: 'C4',
    D4: 'D4',
    E4: 'E4',
    F4: 'F4',
    G4: 'G4',
    A4: 'A4',
    B4: 'B4',
}


export const BASS_NOTE = {
    ...BASS_NOTE_1,
    ...BASS_NOTE_2,
}

export const TREBLE_NOTE = {
    ...TREBLE_NOTE_3,
    ...TREBLE_NOTE_4,
}

export const ALL_NOTES = {
    ...BASS_NOTE,
    ...TREBLE_NOTE,
}

export function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
}


export function prepareNotes(notes) {
    return notes.map(note => (
        {
            name: note,
            guessAttempts: 0,
            wasPassed: false
        }
    ))
}

export function clearNotesHistory(notes) {
    return notes.map(note => (
        {
            name: note.name,
            guessAttempts: 0,
            wasPassed: false
        }
    ))
}

export function mixArray(array) {
    const randomNumbers = []
    array.forEach(() => randomNumbers.push(randomIntFromInterval(0, 100000)))

    const mapRandomNumberIndex = {}

    randomNumbers.forEach((num, i) => mapRandomNumberIndex[num] = i)
    randomNumbers.sort((a, b) => a - b);

    const resultArray = [];

    randomNumbers.forEach(num => {
        const index = mapRandomNumberIndex[num];

        resultArray.push(array[index])
    })

    console.log({array, resultArray, randomNumbers})

    return resultArray;
}