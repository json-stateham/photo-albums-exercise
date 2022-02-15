import { FC } from 'react'
import MuiImageList from '@mui/material/ImageList'
import { ImageCard } from 'components/image-card'

import type { IAlbumPhotos, ImageCardProps } from 'types/album-photos'

interface IProps {
  data: IAlbumPhotos[]
}

export const ImageList: FC<IProps & ImageCardProps> = ({
  data,
  setCurrentItem,
  handleModalOpen,
  isFetching,
}) => {
  return (
    <MuiImageList cols={5} gap={8}>
      {data.map((item: IAlbumPhotos) => (
        <ImageCard
          item={item}
          setCurrentItem={setCurrentItem}
          handleModalOpen={handleModalOpen}
          isFetching={isFetching}
        />
      ))}
    </MuiImageList>
  )
}
