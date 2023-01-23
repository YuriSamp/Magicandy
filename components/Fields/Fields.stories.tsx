import { ComponentStory, ComponentMeta } from '@storybook/react';
import Fields from './Fields';

export default {
  title: 'Components/Fields',
  component: Fields,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Fields>;

const Template: ComponentStory<typeof Fields> = (args) => <Fields {...args} />;

export const Primary = Template.bind({})

// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };