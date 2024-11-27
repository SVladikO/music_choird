import {Text, Wrapper} from "./donate-info.style";

const DonateInfo = () => {
    return (
        <Wrapper>
            <Text>If you like this project you may support it.</Text>
            <form action="https://www.paypal.com/donate" method="post" target="_top">
                <input type="hidden" name="hosted_button_id" value="WX97P2BZV5UAU"/>
                <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0"
                       name="submit" title="PayPal - The safer, easier way to pay online!"
                       alt="Donate with PayPal button"/>
                <img alt="" border="0" src="https://www.paypal.com/en_UA/i/scr/pixel.gif" width="1" height="1"/>
            </form>
        </Wrapper>
    )
}

export default DonateInfo;