import { useState } from "react";
import Toast from "./Toast";

export default function Installation() {
  const [toastMessage, setToastMessage] = useState("");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Installation Guide</h1>
      <div className="space-y-4">
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Step 1: Download</h2>
          <p className="text-gray-600">
            Download the latest version of Aysh Shell.
            <br />
            Run the command:{" "}
          </p>
          <div className="flex items-center gap-2">
            <p
              className="font-mono bg-gray-900 text-green-400 p-4 rounded-md"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  "go install github.com/MikeyA-yo/ayshell"
                );
                setToastMessage("Copied to clipboard!");
              }}
            >
              $ go install github.com/MikeyA-yo/ayshell
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  "go install github.com/MikeyA-yo/ayshell"
                );
                setToastMessage("Copied to clipboard!");
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
              />
            </svg>
          </div>
          <Toast message={toastMessage} />
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">
            Step 2: If you don't have go installed
          </h2>
          <p className="text-gray-600">
            <a className="text-gray-800 hover:text-gray-500" href="/bin/ayshell">Linux Download</a>
            &nbsp;
            <a href="/bin/ayshell.exe" className="text-gray-800 hover:text-gray-500">Windows Download</a>.
          </p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-2">Step 3: Configure</h2>
          <p className="text-gray-600">
            Set up your environment variables and preferences. Relevant Links:{" "}
            <a className="text-gray-800 hover:text-gray-500" href="https://medium.com/codex/adding-executable-program-commands-to-the-path-variable-5e45f1bdf6ce">Linux</a>
            &nbsp;
            <a className="text-gray-800 hover:text-gray-500" href="https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53">Windows</a>
          </p>
        </div>
      </div>
    </div>
  );
}
