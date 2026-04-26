import { Ionicons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import sc from 'styled-components/native';

import { ContactForm } from '@/components/contact/contact-form';
import { PortfolioFooter } from '@/components/layout/portfolio-footer';
import { SiteNav } from '@/components/layout/site-nav';
import { portfolioIdentity, socialLinks } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

const Page = sc.View`
  background-color: #d7d8e4;
`;

const Hero = sc.View`
  background-color: ${portfolioTheme.colors.brand};
  padding: 48px 20px;
`;

const HeroTitle = sc.Text`
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 56px;
`;

const Shell = sc.View`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  padding: 44px 22px 60px;
  gap: 24px;
`;

const Lead = sc.Text`
  color: ${portfolioTheme.colors.textPrimary};
  text-align: center;
  font-family: ${portfolioTheme.fonts.body};
  font-size: 18px;
  line-height: 28px;
`;

const Email = sc.Text`
  color: ${portfolioTheme.colors.brand};
  text-align: center;
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 44px;
`;

const SocialRow = sc.View`
  flex-direction: row;
  justify-content: center;
  gap: 18px;
`;

export default function ContactScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#d7d8e4' }}>
            <SiteNav />
            <ScrollView style={{ flex: 1 }}>
                <Page>
                    <Hero>
                        <HeroTitle>Contact</HeroTitle>
                    </Hero>

                    <Shell>
                        <Lead>Let&apos;s connect and build something meaningful together.</Lead>
                        <Email>{portfolioIdentity.email}</Email>
                        <SocialRow>
                            {socialLinks.map((social) => (
                                <Ionicons
                                    key={social.label}
                                    name={social.icon}
                                    size={42}
                                    color={portfolioTheme.colors.brand}
                                    onPress={() => Linking.openURL(social.url)}
                                />
                            ))}
                        </SocialRow>
                        <ContactForm />
                    </Shell>

                    <PortfolioFooter />
                </Page>
            </ScrollView>
        </SafeAreaView>
    );
}
