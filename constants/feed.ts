function getRandomId(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min) + 1
}

export const getImage = () => {
  const id = getRandomId(101, 999)
  return {
    url: `https://picsum.photos/id/${id}/150/150`,
    id,
  }
}

const getImageRow = () => {
  return [getImage(), getImage(), getImage()]
}

export const fetchNextBatch = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
        { image: getImage() },
      ])
    }, 300)
  })
}

export const FEED_DATA = [
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
  { image: getImage() },
]

export const FEED_DATA_2 = [
  { images: getImageRow() },
  { images: getImageRow() },
  { images: getImageRow() },
  { images: getImageRow() },
  { images: getImageRow() },
  { images: getImageRow() },
]
