import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularLoading() {
  return (
    <Box sx={{ display: 'flex', position:'absolute', right:"50%", top:"50%" }}>
      <CircularProgress />
    </Box>
  );
}