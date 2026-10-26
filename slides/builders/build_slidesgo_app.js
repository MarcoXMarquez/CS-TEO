const fs = require('fs');
const path = require('path');

// Reusable SVG corner blobs identical to Diapositivas plantilla.pptx
function getCornerBlobs() {
  return `
    <!-- Top-Left Organic Blob -->
    <svg class="absolute -top-10 -left-10 w-44 h-44 text-[#DDE1E6] pointer-events-none select-none z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M0,0 L150,0 C130,70 150,120 100,150 C50,180 0,140 0,140 Z"/>
    </svg>
    <!-- Bottom-Left Organic Blob -->
    <svg class="absolute -bottom-10 -left-10 w-48 h-48 text-[#DDE1E6] pointer-events-none select-none z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M0,200 L0,70 C70,80 100,40 140,80 C180,120 150,200 150,200 Z"/>
    </svg>
    <!-- Bottom-Right Organic Blob -->
    <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none select-none z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M200,200 L50,200 C70,130 40,80 90,40 C140,0 200,50 200,50 Z"/>
    </svg>
    <!-- Top-Right Organic Blob -->
    <svg class="absolute -top-16 -right-16 w-56 h-56 text-[#E2E6EB] pointer-events-none select-none z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M200,0 L70,0 C80,60 50,110 90,140 C130,170 200,130 200,130 Z"/>
    </svg>
  `;
}

// Browser Card Gadget (matches slide-03, slide-09, slide-19, slide-21)
function getBrowserGadget() {
  return `
    <div class="absolute top-6 right-8 w-24 h-18 rounded-xl bg-[#D9DDE3] shadow-sm border border-[#CBD0D8] p-2 flex flex-col justify-between hidden md:flex z-10">
      <div class="flex justify-end space-x-1.5 mb-1">
        <span class="w-2 h-2 rounded-full bg-[#BA0034]"></span>
        <span class="w-2 h-2 rounded-full bg-[#F8B85E]"></span>
        <span class="w-2 h-2 rounded-full bg-[#10B981]"></span>
      </div>
      <div class="flex items-center justify-between px-1">
        <!-- Gear -->
        <svg class="w-6 h-6 text-[#6F7082]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
        <!-- Database cylinders -->
        <div class="flex flex-col space-y-0.5">
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-7 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

// Dark Cloud with Database Disks (matches slide-07, slide-08, slide-11, slide-14, slide-20)
function getCloudGadget() {
  return `
    <div class="absolute top-6 right-8 hidden md:flex items-center justify-center z-10">
      <div class="relative">
        <svg class="w-28 h-16 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
          <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
        </svg>
        <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span class="w-7 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5 shadow-xs relative">
            <span class="absolute right-1 top-0.5 w-1 h-1 rounded-full bg-[#55C0ED]"></span>
          </span>
          <span class="w-7 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5"></span>
          <span class="w-7 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

// Stacked Folders Gadget (matches slide-03, slide-08, slide-11)
function getFolderGadget() {
  return `
    <div class="absolute bottom-6 left-6 hidden md:flex flex-col items-center z-10">
      <!-- Floating papers -->
      <div class="w-7 h-9 rounded bg-[#D9DDE3] border border-[#CBD0D8] shadow-xs p-1 mb-1.5 flex flex-col justify-between">
        <span class="w-full h-0.5 bg-[#8E95A5] rounded-full"></span>
        <span class="w-3/4 h-0.5 bg-[#8E95A5] rounded-full"></span>
        <span class="w-full h-0.5 bg-[#8E95A5] rounded-full"></span>
        <span class="w-1/2 h-0.5 bg-[#8E95A5] rounded-full"></span>
      </div>
      <div class="w-0.5 h-3 border-l-2 border-dashed border-[#8E95A5] mb-1"></div>
      <!-- Stacked folders/books -->
      <div class="flex items-end space-x-1">
        <div class="w-3.5 h-14 rounded-t bg-[#34909D] border-t border-l border-r border-[#266D77] flex flex-col justify-between py-1 items-center">
          <span class="w-2 h-0.5 bg-white rounded-full"></span>
          <span class="w-2 h-0.5 bg-white rounded-full"></span>
        </div>
        <div class="w-3.5 h-16 rounded-t bg-[#35363B] border-t border-l border-r border-[#22242A] flex flex-col justify-between py-1 items-center">
          <span class="w-1.5 h-1.5 rounded-full bg-white"></span>
          <span class="w-2 h-0.5 bg-white rounded-full"></span>
        </div>
        <div class="w-3.5 h-12 rounded-t bg-[#6F7082] border-t border-l border-r border-[#555666] flex flex-col justify-end py-1 items-center">
          <span class="w-2 h-0.5 bg-white rounded-full mb-0.5"></span>
          <span class="w-2 h-0.5 bg-white rounded-full"></span>
        </div>
      </div>
    </div>
  `;
}

// Smartphone Gadget with Dashed line (matches slide-08, slide-11, slide-14, slide-20, slide-21)
function getPhoneGadget(position = "bottom-left") {
  const posClass = position === "bottom-left" ? "bottom-6 left-6" : "bottom-6 right-8";
  return `
    <div class="absolute ${posClass} hidden md:flex items-center space-x-2 z-10">
      <div class="w-9 h-16 rounded-lg bg-[#D9DDE3] border-2 border-[#35363B] shadow-sm flex flex-col justify-between items-center p-1">
        <div class="w-3 h-0.5 rounded-full bg-[#8E95A5]"></div>
        <div class="w-5 h-5 rounded-full bg-[#35363B] flex items-center justify-center text-[8px] text-white font-bold">
          <svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>
          </svg>
        </div>
        <div class="w-2 h-0.5 rounded-full bg-[#8E95A5]"></div>
      </div>
      <div class="w-4 border-t-2 border-dashed border-[#8E95A5]"></div>
      <div class="w-10 h-10 rounded-md bg-[#35363B] p-1 flex flex-col justify-between">
        <div class="flex justify-end space-x-0.5">
          <span class="w-1 h-1 rounded-full bg-[#BA0034]"></span>
          <span class="w-1 h-1 rounded-full bg-[#F8B85E]"></span>
        </div>
        <div class="space-y-0.5">
          <div class="w-full h-0.5 bg-white/60 rounded"></div>
          <div class="w-3/4 h-0.5 bg-white/40 rounded"></div>
        </div>
      </div>
    </div>
  `;
}

// Media box gadget (matches slide-10)
function getMediaBoxGadget() {
  return `
    <div class="absolute top-6 right-8 hidden md:flex flex-col space-y-1.5 z-10">
      <div class="w-24 h-8 rounded-md bg-[#35363B] px-2 py-1 flex items-center justify-between text-white shadow-xs">
        <span class="w-4 h-4 rounded bg-white/20"></span>
        <div class="flex flex-col space-y-0.5 w-12">
          <span class="w-full h-0.5 bg-white/80 rounded"></span>
          <span class="w-3/4 h-0.5 bg-white/50 rounded"></span>
        </div>
      </div>
      <div class="w-24 h-8 rounded-md bg-[#35363B] px-2 py-1 flex items-center justify-between text-white shadow-xs">
        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
        </svg>
        <div class="flex flex-col space-y-0.5 w-12">
          <span class="w-full h-0.5 bg-white/80 rounded"></span>
          <span class="w-1/2 h-0.5 bg-white/50 rounded"></span>
        </div>
      </div>
    </div>
  `;
}

console.log('Building full HTML presentation...');
