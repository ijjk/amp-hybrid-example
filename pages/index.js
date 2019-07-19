import { useAmp } from 'next/amp'
import AmpPage from '../components/amp'
import NonAmpPage from '../components/non-amp'

export const config = { amp: 'hybrid' }

export default () => (
  useAmp() ? <AmpPage /> : <NonAmpPage />
)
