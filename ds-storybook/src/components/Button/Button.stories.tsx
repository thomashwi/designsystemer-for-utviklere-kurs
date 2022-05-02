import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './index';

export default {
  title: 'Brand/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Template: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args} onClick={() => window.alert("Du trykket på knappen!")}>
      Klikk her
    </Button>
  );
};

export const Small = Template.bind({});

export const Medium = Template.bind({});

export const Large = Template.bind({});

export const Ridiculous = Template.bind({});

Small.args = {
  size: "small",
}

Medium.args = {
  size: "medium",
}

Large.args = {
  size: "large",
}

Ridiculous.args = {
  size: "ridiculous",
}
