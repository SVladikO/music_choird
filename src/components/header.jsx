import {Wrapper, Item, Logo} from './header.style.js';

import {ReactComponent as ChevronDown} from '../icon/chevron_donw.svg';


export default function Header({page_urls}) {
    return (
        <Wrapper>
            <Logo>Music Room</Logo>
            <Item href={page_urls.chords}> Chords <ChevronDown/></Item>
            <Item href={page_urls.notes}>Notes</Item>
            <Item href={page_urls.about}>About</Item>
        </Wrapper>
    )
}