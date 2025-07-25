import { parse } from "parse5";
import type { DomEffect } from "@/core/drivers/dom.ts";
import type { NiCatApp, NiCatEffect, NiCatMessage } from "@/core/types.ts";
import { template } from "./templates/message.nicat";

const root = parse(template.data).childNodes[0] as any;
const document = root.childNodes[1].childNodes;

console.log(document);

const app: NiCatApp = (message: NiCatMessage): NiCatEffect[] => {
  if (message.id === "init") {
    const helloHtml = `
    <nav class="bg-white border-gray-200 dark:bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between p-4 ml-10">
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a href="#" id="home" class="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
            </li>
            <li>
              <a href="#" id="about" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Pricing</a>
            </li>
            <li>
              <a href="#" class="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

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

    return [
      {
        driver: "dom",
        payload: {
          type: "mount",
          data: {
            targetQuerySelector: "#app",
            htmlString: helloHtml,
          },
        },
      },
    ] as DomEffect[];
  }

  return [];
};

export default app;
