import { VFC } from 'react'
import { Layout } from '../components/Layout'
import { LocalStateB } from '../components/LocalStateB'

export const LocalStatePageB: VFC = () => {
  return (
    <Layout title="Local State B">
      <LocalStateB />
    </Layout>
  )
}
