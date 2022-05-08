import type { Component } from 'solid-js';
import { Route, Routes } from 'solid-app-router';
import { Top } from '@pages/Top';

export const App: Component = () => {
  return (
    <div class="h-screen pt-16">
      <Routes>
        <Route path="/" element={<Top />} />
      </Routes>
    </div>
  );
};
