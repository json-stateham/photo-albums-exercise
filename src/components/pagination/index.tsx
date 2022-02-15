import { FC } from 'react'
import MuiPagination from '@mui/material/Pagination'

interface IPagination {
  count: number
  page: number
  setPage: (page: number) => void
}

export const Pagination: FC<IPagination> = ({ count, page, setPage }) => {
  const hadlePageChange = (event: React.ChangeEvent<unknown>, page: number) =>
    setPage(page)

  return (
    <MuiPagination
      count={count}
      page={page}
      onChange={hadlePageChange}
      sx={{ display: 'flex', justifyContent: 'center', padding: '20px' }}
    />
  )
}
