import Button from './';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({});

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };