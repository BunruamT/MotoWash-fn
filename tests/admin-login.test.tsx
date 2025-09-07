import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import AdminLogin from '@/app/admin/login/page';

describe('AdminLogin', () => {
  it('renders login form', () => {
    render(<AdminLogin />);
    expect(screen.getByText('Admin Login')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });
});
