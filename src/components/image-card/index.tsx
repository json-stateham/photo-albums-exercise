import { FC, useState } from 'react'
import { useQueryClient, useMutation } from 'react-query'

import { deletePhoto } from 'shared/api/config'
import { baseClient } from 'shared/api/baseClient'

import Skeleton from '@mui/material/Skeleton'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { CardActionArea, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

import type { IAlbumPhotos, ImageCardProps } from 'types/album-photos'

interface IProps {
  item: IAlbumPhotos
}

export const ImageCard: FC<IProps & ImageCardProps> = ({
  item,
  setCurrentItem,
  handleModalOpen,
  isFetching,
}) => {
  const [showActionBar, setShowActionBar] = useState(false)

  const queryClient = useQueryClient()

  const mutation = useMutation((photoId: number) => {
    return baseClient(deletePhoto(photoId), {
      method: 'DELETE',
    })
  })

  return (
    <>
      {isFetching ? (
        <Skeleton animation="wave" height={164} />
      ) : (
        <Box
          sx={{ position: 'relative' }}
          onMouseEnter={() => setShowActionBar(true)}
          onMouseLeave={() => setShowActionBar(false)}
        >
          <>
            {showActionBar && (
              <ImageListItemBar
                sx={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                    'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                  zIndex: 10,
                }}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: 'white' }}
                    aria-label={`star ${item.title}`}
                    onClick={() =>
                      mutation.mutate(item.id, {
                        onSuccess: () =>
                          queryClient.invalidateQueries(['photo-album', 1]),
                      })
                    }
                  >
                    <DeleteOutlinedIcon />
                  </IconButton>
                }
                actionPosition="right"
              />
            )}
            <CardActionArea>
              <ImageListItem
                key={item.id}
                onClick={() => {
                  setCurrentItem({
                    url: item.url,
                    title: item.title,
                  })
                  handleModalOpen()
                }}
              >
                <img src={item.thumbnailUrl} alt={item.title} loading="lazy" />
                <ImageListItemBar
                  title={item.title}
                  sx={{
                    '.MuiImageListItemBar-title': {
                      fontSize: '0.9rem',
                    },
                    '.MuiImageListItemBar-titleWrap': {
                      padding: '4px 12px',
                      background: 'rgba(0, 0, 0, 0.1)',
                    },
                  }}
                />
              </ImageListItem>
            </CardActionArea>
          </>
        </Box>
      )}
    </>
  )
}
