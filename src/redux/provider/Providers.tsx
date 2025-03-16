"use client";
import { Provider } from 'react-redux';
import store from '../store/index';

export function Providers({ children }: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return <Provider store={store}>{children}</Provider>;
}