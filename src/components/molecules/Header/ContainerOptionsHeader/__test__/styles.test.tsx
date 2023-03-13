import { render, screen } from '@testing-library/react';
import { ChangeEnterprise } from '../styles';

describe('ChangeEnterprise styles', () => {
  test('should render with marquee', () => {
    render(
      <ChangeEnterprise marquee showChangeCompany>
        <div data-testid="div">Test</div>
      </ChangeEnterprise>
    );
    const div = screen.getByTestId('div');
    expect(div).toHaveStyle('text-overflow:ellipsis');
  });
});
