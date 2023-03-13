import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Footer from '..';

const WrappedSideBar = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};

describe('When load component', () => {
  test('should be render component', () => {
    render(<WrappedSideBar />);
    const youtube = screen.getByTestId('youtube');
    expect(youtube).toBeInTheDocument();
  });

  test('display none icons in mobile size', async () => {
    render(<WrappedSideBar />);
    global.innerHeight = 406;
    global.innerWidth = 375;
    await waitFor(() => global.dispatchEvent(new Event('resize')));

    const instagram = screen.getByTestId('instagram');
    const twitter = screen.getByTestId('twitter');
    const youtube = screen.getByTestId('youtube');

    expect(instagram).toHaveClass('hide');
    expect(twitter).toHaveClass('hide');
    expect(youtube).toBeInTheDocument();
  });
});
