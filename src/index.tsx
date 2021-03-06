import * as React from 'react';
import Onboarding from './components/onboarding';

export type OnboardingRefProps = React.ElementRef<typeof Onboarding>;
export * from './components/onboarding/types';
export default Onboarding;
