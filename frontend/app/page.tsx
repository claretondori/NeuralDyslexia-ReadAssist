import React from 'react';
import Reader from '../components/Reader';

export const metadata = {
  title: 'NeuralDyslexia ReadAssist',
  description: 'AI-Powered Dyslexia Assistive Portfolio Pipeline',
};

export default function Home() {
  return (
    <main className="max-w-4xl" style={{ minHeight: '100vh', padding: '3rem 1rem' }}>
      <header>
        <h1>
          NeuralDyslexia <span>ReadAssist</span>
        </h1>
        <p>
          Enterprise portfolio pipeline optimizing visual processing and linguistic density.
        </p>
      </header>
      <Reader />
    </main>
  );
}