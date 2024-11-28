import {Wrapper, Item, Logo} from './header.style.js';
import {page_urls} from '../../config'

import {ReactComponent as ChevronDown} from '../../icon/chevron_donw.svg';


export default function Header() {
    return (
        <Wrapper>
                <Logo>Music Room</Logo>
            <a href={page_urls.chords}>
                <Item isSelected> Chords <ChevronDown/></Item>
            </a>
            <a href={page_urls.notes}>
                <Item>Notes</Item>
            </a>
            <a href={page_urls.about}>
                <Item>About</Item>
            </a>
        </Wrapper>
    )
}