import {Wrapper, Tab} from "./tabs.style";

export default function Tabs({selectedTab, tabs, onTabClick}) {
    return (
        <Wrapper>
            {tabs.map(tabType => (
                <Tab
                    key={tabType}
                    onClick={() => onTabClick(tabType)}
                    isSelected={selectedTab === tabType}
                >
                    {tabType}
                </Tab>
            ))
            }
        </Wrapper>
    )
}