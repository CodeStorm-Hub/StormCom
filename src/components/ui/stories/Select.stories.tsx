import type { Meta, StoryObj } from '@storybook/react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../select';

const meta: Meta<typeof Select> = {
  title: 'UI/Select',
  component: Select,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select an option..." />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
        <SelectItem value="option3">Option 3</SelectItem>
      </SelectContent>
    </Select>
  ),
};
