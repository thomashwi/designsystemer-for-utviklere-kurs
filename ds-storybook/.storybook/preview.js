import { MINIMAL_VIEWPORTS} from '@storybook/addon-viewport';

// På denne måten kan vi legge til flere ulike viewports.
const customViewports = {
  fourKScreen: {
    name: '4K Screen',
    styles: {
      width: "3840px",
      height: "2160px",
    },
  },
  smartWatch: {
    name: 'Smartwatch watchface',
    styles: {
      width: "512px",
      height: "512px",
    },
  },
  ridiculousDisplay: {
    name: "Ridiculous display",
    styles: {
      width: "900px",
      height: "300px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      ...MINIMAL_VIEWPORTS,
      ...customViewports,
    },
  },
}