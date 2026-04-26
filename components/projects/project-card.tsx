import { Image } from 'expo-image';
import * as Linking from 'expo-linking';
import { Pressable, useWindowDimensions } from 'react-native';
import sc from 'styled-components/native';

import { ProjectItem } from '@/data/portfolioData';
import { portfolioTheme } from '@/styles/portfolioTheme';

type ProjectCardProps = {
    project: ProjectItem;
};

const Card = sc.View`
  background-color: ${portfolioTheme.colors.card};
  border-width: 1px;
  border-color: ${portfolioTheme.colors.border};
  border-radius: ${portfolioTheme.radius.lg}px;
  padding: ${portfolioTheme.spacing.lg}px;
  gap: ${portfolioTheme.spacing.md}px;
`;

const ProjectTitle = sc.Text`
  color: ${portfolioTheme.colors.brand};
  font-family: ${portfolioTheme.fonts.heading};
  font-size: 32px;
  line-height: 40px;
  text-align: center;
`;

const ProjectSubtitle = sc.Text`
  color: ${portfolioTheme.colors.textPrimary};
  font-family: ${portfolioTheme.fonts.body};
  font-size: 16px;
  text-align: center;
`;

const Description = sc.Text`
  color: ${portfolioTheme.colors.textPrimary};
  font-family: ${portfolioTheme.fonts.body};
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

const GalleryGrid = sc.View<{ compact: boolean }>`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: ${portfolioTheme.spacing.md}px;
  align-items: center;
`;

const LinkText = sc.Text`
  text-align: center;
  color: ${portfolioTheme.colors.brand};
  font-size: 15px;
  font-family: ${portfolioTheme.fonts.body};
  text-decoration-line: underline;
`;

export function ProjectCard({ project }: ProjectCardProps) {
    const { width } = useWindowDimensions();
    const compact = width < 780;
    const imageWidth = compact ? Math.min(width - 90, 330) : 320;

    return (
        <Card>
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
            <Image
                source={project.heroImage}
                style={{
                    width: imageWidth,
                    height: imageWidth * 0.72,
                    alignSelf: 'center',
                    borderRadius: 10,
                }}
                contentFit="cover"
            />
            <GalleryGrid compact={compact}>
                {project.gallery.map((asset, index) => (
                    <Image
                        key={`${project.id}-${index}`}
                        source={asset}
                        style={{
                            width: compact ? Math.min(width - 90, 300) : 230,
                            height: compact ? 170 : 140,
                            borderRadius: 10,
                        }}
                        contentFit="cover"
                    />
                ))}
            </GalleryGrid>
            <Description>{project.description}</Description>
            <Pressable onPress={() => Linking.openURL(project.link)}>
                <LinkText>View project details</LinkText>
            </Pressable>
        </Card>
    );
}