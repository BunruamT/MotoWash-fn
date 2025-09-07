import liff from '@line/liff';
import api from '@/lib/api/client';
import { User } from '@/types';
import { endpoints } from '@/lib/api/client';

const liffId = process.env.NEXT_PUBLIC_LIFF_ID!;

export const initializeLiff = async (): Promise<{
  token: string;
  user: User;
} | null> => {
  try {
    await liff.init({ liffId });
    
    if (!liff.isLoggedIn()) {
      liff.login();
      return null;
    }

    const idToken = liff.getIDToken();
    if (!idToken) throw new Error('Failed to get ID token');

    const profile = await liff.getProfile();
    
    // Verify with backend
    const { data } = await api.post(endpoints.liffVerify, {
      idToken,
      profile,
    });

    return {
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    console.error('LIFF initialization failed:', error);
    return null;
  }
};
