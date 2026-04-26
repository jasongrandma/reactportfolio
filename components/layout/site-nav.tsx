import { Link, usePathname } from 'expo-router';
import { Pressable, useWindowDimensions } from 'react-native';
import sc from 'styled-components/native';

import { portfolioTheme } from '@/styles/portfolioTheme';

const Bar = sc.View`
  width: 100%;
  background-color: ${portfolioTheme.colors.brand};
`;

const Inner = sc.View<{ compact: boolean }>`
  width: 100%;
  max-width: 1320px;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => (props.compact ? 12 : 18)}px ${(props) => (props.compact ? 20 : 50)}px;
`;

const NavLabel = sc.Text<{ active: boolean }>`
  font-family: ${portfolioTheme.fonts.body};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 22px;
  color: ${(props) => (props.active ? '#ffffff' : '#ced4ff')};
`;

const NavRow = sc.View<{ compact: boolean }>`
  flex-direction: row;
  flex-wrap: ${(props) => (props.compact ? 'wrap' : 'nowrap')};
  justify-content: flex-end;
  gap: ${(props) => (props.compact ? 16 : 26)}px;
`;

const Brand = sc.Text`
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 24px;
  color: #ffffff;
`;

export function SiteNav() {
    const pathname = usePathname();
    const { width } = useWindowDimensions();
    const compact = width < 900;

    return (
        <Bar>
            <Inner compact={compact}>
                <Brand>Jason Granias</Brand>
                <NavRow compact={compact}>
                    <Link href="/" asChild>
                        <Pressable>
                            <NavLabel active={pathname === '/'}>Home</NavLabel>
                        </Pressable>
                    </Link>
                    <Link href="/about" asChild>
                        <Pressable>
                            <NavLabel active={pathname === '/about'}>About</NavLabel>
                        </Pressable>
                    </Link>
                    <Link href="/projects" asChild>
                        <Pressable>
                            <NavLabel active={pathname === '/projects'}>Projects</NavLabel>
                        </Pressable>
                    </Link>
                    <Link href="/contact" asChild>
                        <Pressable>
                            <NavLabel active={pathname === '/contact'}>Contact</NavLabel>
                        </Pressable>
                    </Link>
                </NavRow>
            </Inner>
        </Bar>
    );
}