import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Accordion from './index';

export default {
  title: 'Brand/Accordion',
  component: Accordion,
} as ComponentMeta<typeof Accordion>;

export const Template: ComponentStory<typeof Accordion> = (args) => {
  return (
    <Accordion {...args}>
      <div style={{ padding: "1rem" }}>
        <p>Hei der!</p>
        <p>Jeg er innholdet!</p>
      </div>
    </Accordion>
  )
}

export const Standard = Template.bind({});

export const Expanded = Template.bind({});

Standard.args = {
  text: "Klikk på meg",
}

Expanded.args = {
  text: "Klikk på meg",
  defaultExpanded: true,
}
