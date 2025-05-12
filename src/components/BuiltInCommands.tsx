const commands = [
  { name: 'cd', description: 'Change the current working directory.' },
  { name: 'ls', description: 'List directory contents.' },
  { name: 'mv', description: 'Move or rename files and directories.' },
  { name: 'cat', description: 'Display file contents.' },
  { name: 'mkdir', description: 'Create a new directory.' },
  { name: 'rm', description: 'Remove files or directories.' },
  { name: 'touch', description: 'Create an empty file or update timestamps.' },
  { name: 'help', description: 'Display help information about built-in commands.' },
  { name: 'exit', description: 'Terminate the AY SHELL session.' }
];

export default function BuiltInCommands() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Built-in Commands</h1>
      <p className="text-xl font-bold">NOTE: Execute any external command available in your system's PATH (i.e system commands).</p>
      <div className="space-y-4">
        {commands.map((cmd, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-2">Command: {cmd.name}</h2>
            <p className="text-gray-600">{cmd.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}