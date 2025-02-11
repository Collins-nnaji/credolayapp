import React from 'react';

const AIJobSearch = () => {
  const copilotUrl = "https://copilotstudio.microsoft.com/environments/Default-a1bbe8af-2736-4afa-b45e-385e122031a2/bots/cr0d9_credolay/canvas?__version__=2&enableFileAttachment=true";

  return (
    <div className="relative min-h-screen">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/credolay2.mp4" type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen bg-black bg-opacity-40 pt-16">
        <div className="w-full max-w-7xl h-[calc(100vh-4rem)] bg-white rounded-xl shadow-2xl overflow-hidden">
          <div className="h-full w-full">
            <iframe
              src={copilotUrl}
              title="Microsoft Copilot"
              className="w-full h-full border-0"
              allow="microphone; camera"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIJobSearch;