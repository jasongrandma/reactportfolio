import { Pressable } from 'react-native';
import { Link } from 'expo-router';
import sc from 'styled-components/native';

import { portfolioTheme } from '@/styles/portfolioTheme';

type PortfolioFooterProps = {
    onBackToTop?: () => void;
};

const FooterShell = sc.View`
  background-color: ${portfolioTheme.colors.brand};
  min-height: 320px;
  padding: ${portfolioTheme.spacing.xl}px ${portfolioTheme.spacing.lg}px 72px;
  align-items: center;
  justify-content: center;
  gap: 26px;
`;

const FooterText = sc.Text`
  color: ${portfolioTheme.colors.textOnBrand};
  font-size: 48px;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-family: ${portfolioTheme.fonts.heading};
`;

const FooterLinks = sc.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 18px;
`;

const FooterLinkText = sc.Text`
  color: #dbe0ff;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${portfolioTheme.fonts.body};
`;

const TopText = sc.Text`
  color: ${portfolioTheme.colors.textOnBrand};
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: ${portfolioTheme.fonts.body};
`;

export function PortfolioFooter({ onBackToTop }: PortfolioFooterProps) {
    return (
        <FooterShell>
            <FooterText>More to come</FooterText>
            <FooterLinks>
                <Link href="/" asChild>
                    <Pressable>
                        <FooterLinkText>Home</FooterLinkText>
                    </Pressable>
                </Link>
                <Link href="/about" asChild>
                    <Pressable>
                        <FooterLinkText>About</FooterLinkText>
                    </Pressable>
                </Link>
                <Link href="/projects" asChild>
                    <Pressable>
                        <FooterLinkText>Projects</FooterLinkText>
                    </Pressable>
                </Link>
                <Link href="/contact" asChild>
                    <Pressable>
                        <FooterLinkText>Contact</FooterLinkText>
                    </Pressable>
                </Link>
            </FooterLinks>
            {onBackToTop ? (
                <Pressable onPress={onBackToTop}>
                    <TopText>Top</TopText>
                </Pressable>
            ) : (
                <Link href="/" asChild>
                    <Pressable>
                        <TopText>Top</TopText>
                    </Pressable>
                </Link>
            )}
        </FooterShell>
    );
}