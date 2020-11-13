import { useRouter } from 'next/router'

function User() {

  const router = useRouter()
  const {id} = router.query

  return (
    <div>Stock: {id}</div>
  )

}

export default User