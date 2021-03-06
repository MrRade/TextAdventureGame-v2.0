import { Box, useTheme } from '@mui/material';
import React, { ReactNode } from 'react';

interface MainBackgroundProps {
    readonly children: ReactNode;
}

export function MainBackground(props: MainBackgroundProps) {
  const theme = useTheme();
  const bg = theme.palette.mode === 'dark' ? 'background.default' : '#EEE';
  const { children: mainBackgroundChildren } = props;
  return (
    <Box sx={{
      position: 'absolute', display: 'block', bgcolor: bg, color: 'text.primary', height: '100vh', width: '100%',
    }}
    >
      {mainBackgroundChildren}
    </Box>
  );
}
