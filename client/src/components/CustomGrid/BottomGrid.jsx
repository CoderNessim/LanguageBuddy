import { Grid } from '@mantine/core';

export default function BottomGrid({ content }) {
  return (
    <Grid.Col span={6}>
      <div className="bottom-grid-container">{content}</div>
    </Grid.Col>
  );
}
