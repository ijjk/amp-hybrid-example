import { withAmp, useAmp } from 'next/amp'
import AmpPage from '../components/amp'
import NonAmpPage from '../components/non-amp'

export default withAmp(() => (
  useAmp() ? <AmpPage /> : <NonAmpPage />
), { hybrid: true })
