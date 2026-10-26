const fs = require('fs');

// Helper to generate the exact organic corner blobs from the template
function getCornerBlobs() {
  return `
    <!-- Top-Left Organic Blob -->
    <svg class="absolute -top-12 -left-12 w-48 h-48 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M0,0 L140,0 C120,60 140,110 90,140 C40,170 0,140 0,140 Z"/>
    </svg>
    <!-- Bottom-Left Organic Blob -->
    <svg class="absolute -bottom-12 -left-12 w-48 h-48 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M0,200 L0,80 C60,90 90,50 130,90 C170,130 140,200 140,200 Z"/>
    </svg>
    <!-- Bottom-Right Organic Blob -->
    <svg class="absolute -bottom-16 -right-16 w-64 h-64 text-[#DDE1E6] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M200,200 L60,200 C80,140 50,90 100,50 C150,10 200,60 200,60 Z"/>
    </svg>
    <!-- Top-Right Organic Blob (subtle) -->
    <svg class="absolute -top-16 -right-16 w-56 h-56 text-[#E4E7EB] pointer-events-none -z-0" viewBox="0 0 200 200" fill="currentColor">
      <path d="M200,0 L80,0 C90,50 60,100 100,130 C140,160 200,120 200,120 Z"/>
    </svg>
  `;
}

// Helper to generate the exact top-right floating browser card with 3 traffic-light dots & database/gear icons
function getBrowserGadget() {
  return `
    <div class="absolute top-6 right-8 w-20 h-16 rounded-xl bg-[#D9DDE3] shadow-md border border-[#CBD0D8] p-2 flex flex-col justify-between hidden sm:flex">
      <div class="flex justify-end space-x-1">
        <span class="w-1.5 h-1.5 rounded-full bg-[#BA0034]"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-[#F8B85E]"></span>
        <span class="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span>
      </div>
      <div class="flex items-center justify-between px-1">
        <!-- Gear -->
        <svg class="w-5 h-5 text-[#6F7082]" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"/>
        </svg>
        <!-- Database discs -->
        <div class="flex flex-col space-y-0.5">
          <span class="w-6 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-6 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
          <span class="w-6 h-1.5 rounded-full bg-white border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

// Helper to generate the exact cloud + database gadget
function getCloudGadget() {
  return `
    <div class="absolute top-6 right-8 hidden sm:flex items-center justify-center">
      <div class="relative">
        <!-- Dark Cloud Shape -->
        <svg class="w-24 h-14 text-[#35363B]" fill="currentColor" viewBox="0 0 100 60">
          <path d="M30 48 h48 a16 16 0 0 0 0 -32 a20 20 0 0 0 -38 -6 a14 14 0 0 0 -22 18 a12 12 0 0 0 12 20 z"/>
        </svg>
        <!-- White Database inside cloud -->
        <div class="absolute inset-0 flex flex-col items-center justify-center pt-2">
          <span class="w-6 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5"></span>
          <span class="w-6 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8] mb-0.5"></span>
          <span class="w-6 h-2 rounded-full bg-[#E5E7EB] border border-[#CBD0D8]"></span>
        </div>
      </div>
    </div>
  `;
}

// Helper to generate the bottom-left folder / book stack gadget
function getFolderGadget() {
  return `
    <div class="absolute bottom-6 left-6 hidden sm:flex items-end space-x-1">
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
  `;
}

console.log('Helpers prepared.');
