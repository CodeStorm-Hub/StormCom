import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../card';

const meta: Meta<typeof Card> = {
  title: 'UI/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description goes here</CardDescription>
      </CardHeader>
      <CardContent>
        This is the main content of the card.
      </CardContent>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card>
      <CardHeader>
        <CardTitle>Card with Footer</CardTitle>
      </CardHeader>
      <CardContent>
        Main content area with footer below.
      </CardContent>
      <CardFooter>
        Footer content
      </CardFooter>
    </Card>
  ),
};
