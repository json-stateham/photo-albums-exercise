export interface IAlbumPhotos {
  albumId: number
  id: number
  title: string
  url: string
  thumbnailUrl: string
}

type CurrentItem = {
  url: string
  title: string
}

export interface ImageCardProps {
  setCurrentItem: (arg: CurrentItem) => void
  handleModalOpen: () => void
  isFetching: boolean
}
