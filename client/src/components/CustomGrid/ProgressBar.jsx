import { Progress } from '@mantine/core';
//progress bar that shows similarity score
export default function ProgressBar({value}) {
  return (
    <div style={{ width: '75%', margin: 'auto' }}>
      <Progress value={value} mt="lg" size="lg" radius="lg" transitionDuration={200} />
    </div>
  );
}
