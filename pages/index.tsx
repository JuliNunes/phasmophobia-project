import { Box, Typography, Button } from '@mui/material';
import Head from 'next/head';

export default function HomePage() {
	return (
		<>
			<Head>
				<title>Phasmophobia Game Info</title>
				<meta name='description' content='Phasmophobia Game Info' />
			</Head>
			<Box
				sx={{
					textAlign: 'center',
					marginTop: '2rem',
				}}
			>
				<Typography variant='h3'>
					Welcome to Phasmophobia Project
				</Typography>
				<Typography variant='h6'>
					Here you will learn everything you need to be a pro in
					Phasmophobia.
				</Typography>
			</Box>
		</>
	);
}
