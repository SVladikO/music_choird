import {Wrapper} from './chord-name.style';

export default function ChordName({name, addChord}) {
    return (
        <Wrapper key={name} onClick={() => addChord(name)}>
            {name}
        </Wrapper>
    )
}