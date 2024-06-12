import * as React from 'react';
import Stack from '@mui/material/Stack';
import SvgIcon from '@mui/material/SvgIcon';
import { pink } from '@mui/material/colors';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default function SvgIconsSize() {
  return (
    <Stack direction="row" spacing={3} alignItems='end'>
      <HomeIcon color="green" sx={{ fontSize: 40 }}  />
    </Stack>
  );
}