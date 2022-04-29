import { Paper, Typography } from '@mui/material';
import React from 'react';
import { NavBar } from '../components/common/NavBar';

export function StartPage() {
  return (
    <Paper>
      <NavBar />
      <Typography variant="h1">Hello World!</Typography>

    </Paper>
  );
}
