import { Pressable, useWindowDimensions } from 'react-native';
import sc from 'styled-components/native';

import { sectionOrder, SectionKey } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

type PortfolioNavbarProps = {
    activeSection: SectionKey;
    onNavigate: (key: SectionKey) => void;
};

const Bar = sc.View`
  width: 100%;
  background-color: ${portfolioTheme.colors.brand};
  border-bottom-width: 1px;
  border-bottom-color: rgba(255, 255, 255, 0.2);
`;

const NavInner = sc.View<{ compact: boolean }>`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  flex-direction: row;
  justify-content: ${(props) => (props.compact ? 'center' : 'space-between')};
  flex-wrap: ${(props) => (props.compact ? 'wrap' : 'nowrap')};
  gap: ${portfolioTheme.spacing.sm}px;
  padding: ${portfolioTheme.spacing.md}px ${portfolioTheme.spacing.lg}px;
`;

const NavText = sc.Text<{ active: boolean }>`
  color: ${(props) => (props.active ? '#ffffff' : '#cbd1ff')};
  font-size: 28px;
  letter-spacing: 1px;
  font-family: ${portfolioTheme.fonts.body};
  text-transform: uppercase;
`;

export function PortfolioNavbar({ activeSection, onNavigate }: PortfolioNavbarProps) {
    const { width } = useWindowDimensions();
    const compact = width < 640;

    return (
        <Bar>
            <NavInner compact={compact}>
                {sectionOrder.map((section) => (
                    <Pressable key={section.key} onPress={() => onNavigate(section.key)}>
                        <NavText active={activeSection === section.key}>{section.label}</NavText>
                    </Pressable>
                ))}
            </NavInner>
        </Bar>
    );
}