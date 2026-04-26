import { Ionicons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import * as Linking from 'expo-linking';
import { ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import sc from 'styled-components/native';

import { PortfolioFooter } from '@/components/layout/portfolio-footer';
import { SiteNav } from '@/components/layout/site-nav';
import { portfolioIdentity, profileImage, socialLinks } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

const Page = sc.View`
  background-color: #d2d2da;
`;

const Section = sc.View<{ compact: boolean }>`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: ${(props) => (props.compact ? 38 : 56)}px ${(props) => (props.compact ? 22 : 64)}px 70px;
  flex-direction: ${(props) => (props.compact ? 'column' : 'row')};
  gap: ${(props) => (props.compact ? 24 : 46)}px;
`;

const Left = sc.View<{ compact: boolean }>`
  width: ${(props) => (props.compact ? '100%' : '60%')};
  gap: 22px;
  align-items: ${(props) => (props.compact ? 'flex-start' : 'center')};
`;

const Right = sc.View<{ compact: boolean }>`
  width: ${(props) => (props.compact ? '100%' : '40%')};
`;

const Name = sc.Text<{ compact: boolean }>`
  color: ${portfolioTheme.colors.brand};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: ${(props) => (props.compact ? 56 : 98)}px;
  line-height: ${(props) => (props.compact ? 62 : 106)}px;
`;

const Bio = sc.Text<{ compact: boolean }>`
  color: #1f1f22;
  font-family: ${portfolioTheme.fonts.body};
  font-size: ${(props) => (props.compact ? 16 : 22)}px;
  line-height: ${(props) => (props.compact ? 29 : 52)}px;
  text-align: ${(props) => (props.compact ? 'left' : 'center')};
`;

const ContactHeading = sc.Text`
  color: ${portfolioTheme.colors.brand};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 60px;
`;

const SkillsHeading = sc.Text`
  color: ${portfolioTheme.colors.brand};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 40px;
`;

const SkillsWrap = sc.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;

const SkillChip = sc.Text`
  color: #ffffff;
  background-color: ${portfolioTheme.colors.brand};
  border-radius: 999px;
  padding: 8px 14px;
  font-size: 13px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  font-family: ${portfolioTheme.fonts.body};
`;

const Email = sc.Text`
  color: #1f1f22;
  font-family: ${portfolioTheme.fonts.body};
  font-size: 42px;
`;

const Socials = sc.View`
  flex-direction: row;
  gap: 18px;
`;

export default function AboutScreen() {
    const { width } = useWindowDimensions();
    const compact = width < 980;

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#d2d2da' }}>
            <SiteNav />
            <ScrollView style={{ flex: 1 }}>
                <Page>
                    <Section compact={compact}>
                        <Left compact={compact}>
                            <Name compact={compact}>{portfolioIdentity.name}</Name>
                            <Bio compact={compact}>{portfolioIdentity.about}</Bio>
                            <SkillsHeading>Skills</SkillsHeading>
                            <SkillsWrap>
                              {portfolioIdentity.skills.map((skill) => (
                                <SkillChip key={skill}>{skill}</SkillChip>
                              ))}
                            </SkillsWrap>
                            <ContactHeading>Contact & Socials</ContactHeading>
                            <Email>{portfolioIdentity.email}</Email>
                            <Socials>
                                {socialLinks
                                    .filter((item) => item.label !== 'Email')
                                    .map((social) => (
                                        <Ionicons
                                            key={social.label}
                                            name={social.icon}
                                            size={76}
                                            color={portfolioTheme.colors.brand}
                                            onPress={() => Linking.openURL(social.url)}
                                        />
                                    ))}
                            </Socials>
                        </Left>
                        <Right compact={compact}>
                            <Image
                                source={profileImage}
                                style={{
                                    width: '100%',
                                    height: compact ? 340 : 660,
                                    borderRadius: 6,
                                    alignSelf: 'center',
                                }}
                                contentFit="cover"
                            />
                        </Right>
                    </Section>

                    <PortfolioFooter />
                </Page>
            </ScrollView>
        </SafeAreaView>
    );
}
