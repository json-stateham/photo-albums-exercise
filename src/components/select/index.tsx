import { FC } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import MuiSelect, { SelectChangeEvent } from '@mui/material/Select'

interface IProps {
  setPage: (page: number) => void
  page: number
}

export const Select: FC<IProps> = ({ setPage, page }) => {
  const handleChange = (event: SelectChangeEvent) => {
    setPage(Number(event.target.value))
  }

  const MAX_ALBUMS_COUNT = 100

  return (
    <Box sx={{ minWidth: 120, maxWidth: 200, padding: '20px' }}>
      <FormControl fullWidth>
        <InputLabel id="album-id">Album Id</InputLabel>
        <MuiSelect
          labelId="album-id"
          id="demo-simple-select"
          value={`${page}`}
          label="Album Id"
          onChange={handleChange}
        >
          {Array(MAX_ALBUMS_COUNT)
            .fill(0)
            .map((_, i) => i + 1)
            .map(id => (
              <MenuItem key={id} value={id}>
                {id}
              </MenuItem>
            ))}
        </MuiSelect>
      </FormControl>
    </Box>
  )
}
