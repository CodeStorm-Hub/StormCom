import type { Meta, StoryObj } from '@storybook/react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../dialog';

const meta: Meta<typeof Dialog> = {
  title: 'UI/Dialog',
  component: Dialog,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Dialog open={true}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
          <DialogDescription>
            This is a dialog description
          </DialogDescription>
        </DialogHeader>
        <div>Dialog content goes here</div>
        <DialogFooter>
          Footer actions
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
};
