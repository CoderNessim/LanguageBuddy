import { Grid, Textarea } from '@mantine/core';
/**
 * @summary This component holds the text input of the custom grid 
 */
export default function TopGrid({
  text,
  setText,
  translationError,
  isTranslationLoading,
  isSentenceLoading,
  errorElement
}) {
  return (
    <Grid.Col>
      <Textarea
        placeholder="Enter your translation. include commas and periods for better accuracy."
        radius="md"
        size="xl"
        rows={3}
        value={text}
        onChange={(e) => setText(e.currentTarget.value)}
      />
      {translationError &&
        !text &&
        !isSentenceLoading &&
        !isTranslationLoading && (
          <span className='error-message-topgrid' ref={errorElement}>{translationError}</span>
        )}
    </Grid.Col>
  );
}
