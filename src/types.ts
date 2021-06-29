import { ImageSourcePropType } from 'react-native';
import React from 'react';

export type SlidePropType = {
  source: ImageSourcePropType;
  renderBottomBar?: () => React.ReactElement;
};
export type Slides = Array<SlidePropType>;

export type CollectionPropType = {
  id: string;
  slides: Slides;
  startIndex?: number;
};
export type Collections = Array<CollectionPropType>;

export type OnboardingProps = {
  duration?: number;
};
