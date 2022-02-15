import { useState } from 'react'
import { useQuery } from 'react-query'

import { getAlbumUrl } from 'shared/api/config'
import { baseClient } from 'shared/api/baseClient'

import { Pagination } from 'components/pagination'
import { Modal } from 'components/modal'
import { ImageList } from 'components/image-list'
import { Select } from 'components/select'

import Container from '@mui/material/Container'

const Main = () => {
  const [page, setPage] = useState(1)
  const [modalOpen, setModalOpen] = useState(false)
  const [currentItem, setCurrentItem] = useState({
    url: '',
    title: '',
  })

  const handleModalOpen = () => setModalOpen(true)
  const handleModalClose = () => setModalOpen(false)

  const { data, isFetching } = useQuery(
    ['photo-album', page],
    () => baseClient(getAlbumUrl(page)),
    {
      keepPreviousData: true,
    },
  )

  return (
    <Container maxWidth="md">
      <Select page={page} setPage={setPage} />
      <ImageList
        data={data}
        handleModalOpen={handleModalOpen}
        setCurrentItem={setCurrentItem}
        isFetching={isFetching}
      />
      <Pagination count={100} setPage={setPage} page={page} />
      <Modal
        open={modalOpen}
        handleClose={handleModalClose}
        item={currentItem}
      />
    </Container>
  )
}

export default Main
