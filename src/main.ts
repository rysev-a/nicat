import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="space-y-3 p-10">
    <!-- Toast -->
    <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-stack-toggle-label">
      <div class="flex p-4">
        <div class="shrink-0">
          <svg class="size-5 text-gray-600 mt-1 dark:text-neutral-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
            <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          </svg>
        </div>
        <div class="ms-4">
          <h3 id="hs-toast-stack-toggle-label" class="text-gray-800 font-semibold dark:text-white">
            App notifications
          </h3>
          <div class="mt-1 text-sm text-gray-600 dark:text-neutral-400">
            Notifications may include alerts, sounds and icon badges.
          </div>
          <div class="mt-4">
            <div class="flex gap-x-3">
              <button type="button" class="text-blue-600 decoration-2 hover:underline font-medium text-sm focus:outline-hidden focus:underline dark:text-blue-500">
                Don't allow
              </button>
              <button type="button" class="text-blue-600 decoration-2 hover:underline font-medium text-sm focus:outline-hidden focus:underline dark:text-blue-500">
                Allow
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Toast -->

    <!-- Toast -->
    <div class="max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-stack-toggle-update-label">
      <div class="flex p-4">
        <div class="shrink-0">
          <svg class="shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
          </svg>
        </div>
        <div class="ms-3">
          <p id="hs-toast-stack-toggle-update-label" class="text-sm text-gray-700 dark:text-neutral-400">
            Your app preferences has been successfully updated.
          </p>
        </div>
      </div>
    </div>
    <!-- End Toast -->
  </div>

  <div class="preview flex min-h-[350px] w-full justify-center p-10 items-center">
  <div class="card w-full">
    <header>
      <h2>Login to your account</h2>
      <p>Enter your details below to login to your account</p>
    </header>
    <section>
      <form class="form grid gap-6">
        <div class="grid gap-2">
          <label for="demo-card-form-email">Email</label>
          <input type="email" id="demo-card-form-email">
        </div>
        <div class="grid gap-2">
          <div class="flex items-center gap-2">
            <label for="demo-card-form-password">Password</label>
            <a href="#" class="ml-auto inline-block text-sm underline-offset-4 hover:underline">Forgot your password?</a>
          </div>
          <input type="password" id="demo-card-form-password">
        </div>
      </form>
    </section>
    <footer class="flex flex-col items-center gap-2">
      <button type="button" class="btn w-full">Login</button>
      <button type="button" class="btn-outline w-full">Login with Google</button>
      <p class="mt-4 text-center text-sm">Don't have an account? <a href="#" class="underline-offset-4 hover:underline">Sign up</a></p>
    </footer>
  </div>
  </div>
  <button class="btn" id="show-toaster">show</button>
  <div id="toast-container" class="toaster"></div>

`

document.querySelector('#show-toaster').addEventListener('click', (event) => {
  const toastID = new Date().getTime().toString();

  document.querySelector('#toast-container')?.insertAdjacentHTML('beforeend', `
    <div id="toaster_${toastID}">
      <div class="toast" role="status" aria-atomic="true" aria-hidden="false" data-category="success">
        <div class="toast-content">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
          </svg>

          <section>
            <h2>Success</h2>
            <p>A success toast called from the front-end.</p>
          </section>

          <footer>
            <button type="button" class="btn" data-toast-action>Cool! ${toastID}</button>
          </footer>
        </div>
      </div>
    </div>
    `);

  const toast = document.querySelector(`#toaster_${toastID}`);
  toast?.querySelector('button')?.addEventListener('click', () => {
    toast?.remove();
  })



})
