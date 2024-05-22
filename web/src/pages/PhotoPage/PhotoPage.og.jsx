import { photo as getPhoto } from 'src/services/photos'

import { DEFAULT_ADJUSTMENTS } from './PhotoCell/PhotoSuccess'

export const data = async ({ id }) => {
  const photo = await getPhoto(id)
  const params = new URLSearchParams(location.hash.slice(1))
  const adjustments = { ...DEFAULT_ADJUSTMENTS, ...Object.fromEntries(params) }

  return { photo, adjustments }
}

export const output = (data) => {
  return (
    <>
      <h1>Cambium og:image</h1>
      <p>{JSON.stringify(data)}</p>
    </>
  )
}
