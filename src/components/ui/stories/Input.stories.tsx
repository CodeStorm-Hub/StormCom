import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../input';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
};

export const WithValue: Story = {
  args: {
    value: 'Sample input value',
    readOnly: true,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'user@example.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
  },
};
