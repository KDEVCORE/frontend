import { Button, Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Notice(code) {
  return (
    <Container
      sx={{
        textAlign: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant={'h1'}>
        ERROR CODE: {code}
      </Typography>
      <Typography variant={'h1'}>
        ERROR NAME: {(code) => {
          switch(code) {
            case 404:
              return "Page not found"
            case 403:
              return "No permission"
            case 500:
              return "Internal Server Error"
            default:
              return "Unknown error"
          }
        }}
      </Typography>
      <Button component={Link} to="/" size="large" variant="contained">
        Go to Home
      </Button>
    </Container>
  );
}