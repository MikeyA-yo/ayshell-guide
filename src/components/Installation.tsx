import { useState } from "react";
import Toast from "./Toast";



export default function Installation() {
  const [toastMessage, setToastMessage] = useState("");

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setToastMessage("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Installation Guide
          </h1>
          <p className="text-lg text-gray-600">
            Get Aysh Shell up and running on your system in just a few steps.
          </p>
        </div>

        <div className="space-y-8">
          {/* Step 1 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-blue-500">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-900">
                Install via Go (Recommended)
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              If you have Go installed on your system, use this command to install Aysh Shell:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
              <code className="text-green-400 font-mono text-sm">
                go install github.com/MikeyA-yo/ayshell@latest
              </code>
              <button
                onClick={() => copyToClipboard("go install github.com/MikeyA-yo/ayshell@latest")}
                className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This will download, compile, and install the latest version.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-green-500">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-900">
                Download Binary (Alternative)
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              If you don't have Go installed, download the pre-compiled binary for your operating system:
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/bin/ayshell"
                download="ayshell"
                className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Download for Linux/macOS
              </a>
              <a
                href="/bin/ayshell.exe"
                download="ayshell.exe"
                className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Download for Windows
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              After downloading, make sure to place the binary in a directory that's in your PATH.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-purple-500">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-900">
                Add to PATH
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              To use Aysh Shell from anywhere in your terminal, add it to your system's PATH:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Linux/macOS</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Move the binary to <code className="bg-gray-100 px-1 rounded">/usr/local/bin/</code> or add its directory to PATH.
                </p>
                <a
                  href="https://medium.com/codex/adding-executable-program-commands-to-the-path-variable-5e45f1bdf6ce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Detailed guide →
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Windows</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Add the directory containing ayshell.exe to your PATH environment variable.
                </p>
                <a
                  href="https://medium.com/@kevinmarkvi/how-to-add-executables-to-your-path-in-windows-5ffa4ce61a53"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline"
                >
                  Detailed guide →
                </a>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="bg-white rounded-xl shadow-md p-8 border-l-4 border-orange-500">
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                4
              </div>
              <h2 className="ml-4 text-2xl font-semibold text-gray-900">
                Verify Installation
              </h2>
            </div>
            <p className="text-gray-600 mb-4">
              Open your terminal and run the following command to start Aysh Shell:
            </p>
            <div className="bg-gray-900 rounded-lg p-4 flex items-center justify-between">
              <code className="text-green-400 font-mono text-sm">
                ayshell
              </code>
              <button
                onClick={() => copyToClipboard("ayshell")}
                className="ml-4 bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-sm transition-colors"
              >
                Copy
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              This should open the Aysh Shell interactive prompt if the installation was successful.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need help? Check out the <a href="/usage" className="text-blue-600 hover:text-blue-800 underline">built-in commands</a> or return to <a href="/" className="text-blue-600 hover:text-blue-800 underline">home</a>.
          </p>
        </div>
      </div>
      <Toast message={toastMessage} />
    </div>
  );
}
