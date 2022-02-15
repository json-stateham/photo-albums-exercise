import { FC } from 'react'
import MuiModal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'max-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

interface IModal {
  open: boolean
  handleClose: () => void
  item: {
    url: string
    title: string
  }
}

export const Modal: FC<IModal> = ({ open, handleClose, item }) => {
  return (
    <div>
      <MuiModal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {item.title}
          </Typography>
          <img src={item.url} alt={item.title} />
        </Box>
      </MuiModal>
    </div>
  )
}
