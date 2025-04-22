import { useEffect } from 'react';

const BootstrapLoader = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Prevent duplicate loading
    if (window.bootstrap) {
      console.log('✅ Bootstrap already loaded');
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js';
    script.async = true;
    script.crossOrigin = 'anonymous';

    script.onload = () => {
      console.log('✅ Bootstrap JS loaded successfully');
    };

    script.onerror = (err) => {
      console.error('❌ Failed to load Bootstrap JS', err);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default BootstrapLoader;
