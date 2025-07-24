export const showStart = () => {
  document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
    <div class="space-y-3 p-10">
      <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-stack-toggle-label">
        <div class="flex p-4">
         
          <div class="ms-4">
            <h3 id="hs-toast-stack-toggle-label" class="text-gray-800 font-semibold dark:text-white">
              NiCat framework
            </h3>
            <div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
              Fast and simple flow for application logic
            </div>
          </div>
        </div>
      </div>
  `;
};
