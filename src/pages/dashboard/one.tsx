import { Helmet } from 'react-helmet-async';
// sections
import OneView from 'src/sections/one/view';

// ----------------------------------------------------------------------

export default function Page() {
  return (
    <>
      <Helmet>
        <title>Phoenix</title>
      </Helmet>

      <OneView />
    </>
  );
}
