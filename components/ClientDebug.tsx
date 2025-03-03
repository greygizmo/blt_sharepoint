"use client";

import { useState, useEffect } from 'react';
import { useClientAssetPath } from '../hooks/useClientAssetPath';

interface DebugInfo {
  windowExists: boolean;
  baseElement: string | null;
  basePath: string;
  samplePath: string;
  resolvedPath: string;
  userAgent: string;
}

export default function ClientDebug() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo | null>(null);
  const [visible, setVisible] = useState(false);
  const getAssetPath = useClientAssetPath();
  
  useEffect(() => {
    // Only run in the browser
    if (typeof window === 'undefined') return;
    
    const baseElement = document.querySelector('base');
    const basePath = baseElement ? baseElement.getAttribute('href') || '' : '';
    const samplePath = "/images/test-image.png";
    
    setDebugInfo({
      windowExists: typeof window !== 'undefined',
      baseElement: baseElement ? baseElement.outerHTML : null,
      basePath: basePath,
      samplePath: samplePath,
      resolvedPath: getAssetPath(samplePath),
      userAgent: navigator.userAgent
    });
  }, [getAssetPath]);
  
  if (!debugInfo) return null;
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button 
        onClick={() => setVisible(!visible)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        aria-label="Toggle debug info"
      >
        {visible ? 'Hide Debug Info' : 'Show Debug Info'}
      </button>
      
      {visible && (
        <div className="mt-2 p-4 bg-white text-black rounded shadow-lg max-w-md">
          <h3 className="text-lg font-bold mb-2">Client-Side Debug Info</h3>
          <dl className="grid grid-cols-[auto_1fr] gap-1">
            <dt className="font-semibold">Window object:</dt>
            <dd>{debugInfo.windowExists ? 'Available' : 'Not available'}</dd>
            
            <dt className="font-semibold">Base element:</dt>
            <dd className="break-all">{debugInfo.baseElement || 'Not found'}</dd>
            
            <dt className="font-semibold">Base path:</dt>
            <dd className="break-all">{debugInfo.basePath || '(empty)'}</dd>
            
            <dt className="font-semibold">Sample path:</dt>
            <dd className="break-all">{debugInfo.samplePath}</dd>
            
            <dt className="font-semibold">Resolved path:</dt>
            <dd className="break-all">{debugInfo.resolvedPath}</dd>
            
            <dt className="font-semibold">User agent:</dt>
            <dd className="break-all">{debugInfo.userAgent}</dd>
          </dl>
        </div>
      )}
    </div>
  );
} 