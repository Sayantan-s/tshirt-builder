import React from 'react';
import { createRoot } from 'react-dom/client';
import Application from './Application';

const app = <Application />;

createRoot(document.getElementById('app')).render(app);
