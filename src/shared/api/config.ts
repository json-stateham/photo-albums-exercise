const CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  PATHS: {
    ALBUMS: 'albums',
    PHOTOS: 'photos',
  },
}

const getAlbumUrl = (page: number = 1) =>
  `${CONFIG.BASE_URL}/${CONFIG.PATHS.ALBUMS}/${page}/${CONFIG.PATHS.PHOTOS}`

const deletePhoto = (id: number) =>
  `${CONFIG.BASE_URL}/${CONFIG.PATHS.PHOTOS}/${id}`

export { getAlbumUrl, deletePhoto }
