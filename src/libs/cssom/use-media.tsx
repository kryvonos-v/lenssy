import { useEffect, useState } from 'react';

export function useMedia(query: string): boolean {
  let [matches, setMatches] = useState(
    window.matchMedia(query).matches
  );

  useEffect(() => {
    const media = window.matchMedia(query);
    const udpateMatches = () => setMatches(media.matches);

    udpateMatches();
    media.addEventListener('change', udpateMatches);

    return () => media.removeEventListener('change', udpateMatches);
  }, [query]);

  return matches;
}
