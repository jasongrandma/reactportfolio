import { useSpring, animated } from '@react-spring/native';
import { Image } from 'expo-image';
import { useRef } from 'react';
import { Pressable, ScrollView } from 'react-native';
import { Link } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import sc from 'styled-components/native';

import { PortfolioFooter } from '@/components/layout/portfolio-footer';
import { SiteNav } from '@/components/layout/site-nav';
import { portfolioIdentity } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

const AnimatedView = animated(sc.View``);

const Screen = sc.View`
  background-color: #d2d2da;
`;

const Hero = sc.View`
  background-color: ${portfolioTheme.colors.brand};
  min-height: 760px;
  align-items: center;
  justify-content: center;
  padding: 90px 24px 70px;
  position: relative;
  overflow: hidden;
`;

const HeroBackdrop = sc(Image)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.28;
`;

const HeroContent = sc.View`
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Name = sc.Text`
  color: #ffffff;
  font-size: 90px;
  line-height: 98px;
  font-family: ${portfolioTheme.fonts.heading};
  text-align: center;
`;

const Role = sc.Text`
  color: #ffffff;
  font-size: 46px;
  font-family: ${portfolioTheme.fonts.heading};
  margin-top: 8px;
  text-align: center;
`;

const Intro = sc.Text`
  margin-top: 38px;
  max-width: 620px;
  color: #f1f1ff;
  font-size: 13px;
  line-height: 18px;
  text-align: center;
  font-family: ${portfolioTheme.fonts.body};
`;

const Curiosity = sc.Text`
  margin-top: 42px;
  color: #ffffff;
  font-size: 13px;
  font-family: ${portfolioTheme.fonts.body};
`;

const SectionLabel = sc.Text`
  color: #ffffff;
  font-family: ${portfolioTheme.fonts.heading};
  text-transform: uppercase;
  text-align: center;
  font-size: 56px;
`;

const ProjectStrip = sc.View`
  background-color: ${portfolioTheme.colors.brand};
  padding: 24px 16px;
`;

const HomeBody = sc.View`
  padding: 52px 22px 64px;
  background-color: #d7d8e4;
`;

const HomeBodyInner = sc.View`
  max-width: 980px;
  width: 100%;
  margin: 0 auto;
  align-items: center;
`;

const BodyTitle = sc.Text`
  color: ${portfolioTheme.colors.brand};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 42px;
  text-align: center;
`;

const BodySubtitle = sc.Text`
  color: ${portfolioTheme.colors.textPrimary};
  text-align: center;
  margin-top: 10px;
  font-family: ${portfolioTheme.fonts.body};
  font-size: 16px;
`;

const Body = sc.Text`
  color: #1f1f24;
  font-size: 16px;
  line-height: 28px;
  text-align: center;
  margin-top: 18px;
  font-family: ${portfolioTheme.fonts.body};
  max-width: 760px;
`;

const PrimaryLink = sc.Text`
  color: #ffffff;
  background-color: ${portfolioTheme.colors.brand};
  padding: 12px 18px;
  border-radius: 999px;
  text-align: center;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  margin-top: 26px;
  font-family: ${portfolioTheme.fonts.body};
`;

const Spacer = sc.View`
  height: 84px;
  background-color: #d2d2da;
`;

export default function HomeScreen() {
    const scrollRef = useRef<ScrollView>(null);

    const heroAnim = useSpring({
        from: { opacity: 0, y: 20 },
        to: { opacity: 1, y: 0 },
        config: { tension: 180, friction: 22 },
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#d2d2da' }}>
            <SiteNav />
            <ScrollView ref={scrollRef} style={{ flex: 1 }}>
                <Screen>
                    <Hero>
                    <HeroBackdrop
                      source={require('@/assets/images/darkbluestormcloudswallpaper.jpg')}
                      contentFit="cover"
                    />
                    <HeroContent>
                      <AnimatedView style={{ opacity: heroAnim.opacity, transform: [{ translateY: heroAnim.y }] }}>
                        <Name>Jason Granias</Name>
                        <Role>Digital Designer</Role>
                        <Intro>
                          Creating is the source of my creativity and passion. I am interested in design to
                          consider every perspective in a work through emotional resonance.
                        </Intro>
                        <Pressable onPress={() => scrollRef.current?.scrollTo({ y: 760, animated: true })}>
                          <Curiosity>See where my curiosity has brought me.</Curiosity>
                        </Pressable>
                      </AnimatedView>
                    </HeroContent>
                    </Hero>

                    <ProjectStrip>
                        <SectionLabel>Projects</SectionLabel>
                    </ProjectStrip>

                    <HomeBody>
                        <HomeBodyInner>
                            <BodyTitle>{portfolioIdentity.name}</BodyTitle>
                            <BodySubtitle>Digital Designer and UX-focused visual storyteller</BodySubtitle>
                            <Body>
                                Explore a full collection of murals, app prototypes, redesign concepts, and information
                                architecture work. Each project page includes visuals, context, and direct links.
                            </Body>
                            <Link href="/projects" asChild>
                                <Pressable>
                                    <PrimaryLink>View All Projects</PrimaryLink>
                                </Pressable>
                            </Link>
                        </HomeBodyInner>
                    </HomeBody>

                    <Spacer />
                    <PortfolioFooter onBackToTop={() => scrollRef.current?.scrollTo({ y: 0, animated: true })} />
                </Screen>
            </ScrollView>
        </SafeAreaView>
    );
}
