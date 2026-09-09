import React from 'react';
import './globals.css';

export const metadata = {
  title: 'NeuralDyslexia ReadAssist',
  description: 'AI-Powered Dyslexia Assistive Portfolio Pipeline',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}