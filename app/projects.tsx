import { useTrail, animated } from '@react-spring/native';
import { Image } from 'expo-image';
import { ScrollView, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import sc from 'styled-components/native';

import { PortfolioFooter } from '@/components/layout/portfolio-footer';
import { SiteNav } from '@/components/layout/site-nav';
import { projectItems } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

const AnimatedView = animated(sc.View``);

const Page = sc.View`
  background-color: #d7d8e4;
`;

const TitleStrip = sc.View`
  background-color: ${portfolioTheme.colors.brand};
  padding: 26px 16px;
`;

const Title = sc.Text`
  color: #ffffff;
  text-transform: uppercase;
  text-align: center;
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 56px;
`;

const ProjectSection = sc.View`
  padding: 48px 20px 56px;
`;

const ProjectBlock = sc.View`
  max-width: 860px;
  width: 100%;
  align-self: center;
  margin-bottom: 44px;
`;

const ProjectTitle = sc.Text`
  color: ${portfolioTheme.colors.brand};
  font-size: 38px;
  line-height: 44px;
  text-align: center;
  font-family: ${portfolioTheme.fonts.heading};
`;

const ProjectSubtitle = sc.Text`
  color: ${portfolioTheme.colors.brand};
  text-align: center;
  margin-top: 6px;
  font-family: ${portfolioTheme.fonts.body};
  font-size: 13px;
`;

const Body = sc.Text`
  color: #1f1f24;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
  margin-top: 12px;
  font-family: ${portfolioTheme.fonts.body};
`;

const GalleryRow = sc.View<{ compact: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 12px;
`;

export default function ProjectsScreen() {
    const { width } = useWindowDimensions();
    const compact = width < 760;

    const projectTrail = useTrail(projectItems.length, {
        from: { opacity: 0, y: 14 },
        to: { opacity: 1, y: 0 },
        config: { tension: 180, friction: 24 },
    });

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#d7d8e4' }}>
            <SiteNav />
            <ScrollView style={{ flex: 1 }}>
                <Page>
                    <TitleStrip>
                        <Title>Projects</Title>
                    </TitleStrip>

                    <ProjectSection>
                        {projectTrail.map((anim, index) => {
                            const item = projectItems[index];
                            const detailImages = item.gallery.filter((asset) => asset !== item.heroImage);
                            return (
                                <AnimatedView
                                    key={item.id}
                                    style={{
                                        opacity: anim.opacity,
                                        transform: [{ translateY: anim.y }],
                                    }}>
                                    <ProjectBlock>
                                        <ProjectTitle>{item.title}</ProjectTitle>
                                        <ProjectSubtitle>{item.subtitle}</ProjectSubtitle>
                                        <Image
                                            source={item.heroImage}
                                            contentFit="contain"
                                            style={{
                                                width: '100%',
                                                height: compact ? 240 : item.id === 'spotify' ? 360 : item.id === 'digital-zoo' ? 420 : 320,
                                                marginTop: 18,
                                            }}
                                        />
                                        {detailImages.length > 0 ? (
                                            <GalleryRow compact={compact}>
                                                {detailImages.map((asset, imageIndex) => (
                                                    <Image
                                                        key={`${item.id}-detail-${imageIndex}`}
                                                        source={asset}
                                                        contentFit="contain"
                                                        style={{
                                                            width: compact ? '100%' : item.id === 'digital-zoo' ? '48%' : '32%',
                                                            height: compact ? 180 : 170,
                                                        }}
                                                    />
                                                ))}
                                            </GalleryRow>
                                        ) : null}
                                        <Body>{item.description}</Body>
                                    </ProjectBlock>
                                </AnimatedView>
                            );
                        })}
                    </ProjectSection>

                    <PortfolioFooter />
                </Page>
            </ScrollView>
        </SafeAreaView>
    );
}
