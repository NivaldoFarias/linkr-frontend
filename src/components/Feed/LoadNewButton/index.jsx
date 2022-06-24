import { useContext } from 'react';
import FeedContext from '../../../hooks/FeedContext';
import { Button } from './styles';

export function LoadNewButton() {
  const {
    checkShares: {
      afterNewest: { shares: num },
    },
    hooks: {
      data: { pushFeed },
    },
  } = useContext(FeedContext);

  return (
    <Button onClick={pushFeed}>
      {num} New post{Number(num) === 1 ? '' : 's'}!
    </Button>
  );
}
