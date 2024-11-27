import {Wrapper, Item, Logo} from './header.style.js';

import {ReactComponent as ChevronDown} from '../../icon/chevron_donw.svg';

export default function Header() {
    return (
        <Wrapper>
            <Logo>Music Room</Logo>
            <Item>Chords <ChevronDown /></Item>
            <Item>Notes</Item>
            <Item>About</Item>
        </Wrapper>
    )
}