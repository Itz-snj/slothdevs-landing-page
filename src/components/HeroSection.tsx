import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

interface Command {
  input: string;
  output: React.ReactNode;
}

const COMMANDS: Record<string, React.ReactNode> = {
  help: (
    <div className="text-muted-foreground">
      <p>Available commands:</p>
      <p className="mt-1">sloth init --project &lt;name&gt; - Initialize a new project</p>
      <p>sloth forge &lt;prompt&gt; - Generate code from prompt</p>
      <p>sloth ops deploy --env &lt;env&gt; - Deploy to environment</p>
      <p>sloth status - Show system status</p>
      <p>sloth ticket create &lt;title&gt; - Create a ticket</p>
      <p>clear - Clear terminal</p>
      <p>help - Show this message</p>
    </div>
  ),
  "sloth status": (
    <div className="text-muted-foreground">
      <p>System: Operational</p>
      <p>SlothForge: v0.1.0 (beta)</p>
      <p>SlothOps: v0.1.0 (beta)</p>
      <p>Active PRs: 3</p>
      <p>Deployed instances: 2</p>
    </div>
  ),
  "sloth init --project acme-api": (
    <div className="text-muted-foreground">
      <p>→ scaffolding project...</p>
      <p>→ installing deps (47 packages)</p>
      <p>→ configuring pipeline</p>
      <p>→ project ready: /workspace/acme-api</p>
    </div>
  ),
  "sloth ops deploy --env staging": (
    <div className="text-muted-foreground">
      <p>→ building container done 1.2s</p>
      <p>→ security scan pass 0.8s</p>
      <p>→ deploying to edge done 3.1s</p>
      <p>→ health check pass</p>
      <p>→ deployed to https://acme-api.staging.slothdevs.dev</p>
    </div>
  ),
  "sloth ops deploy --env production": (
    <div className="text-muted-foreground">
      <p>→ building container done 1.4s</p>
      <p>→ security scan pass 0.9s</p>
      <p>→ deploying to edge done 2.8s</p>
      <p>→ health check pass</p>
      <p>→ ⚠️ warning: ticket #123 not linked to this deployment</p>
      <p>→ deployed to https://acme-api.slothdevs.dev</p>
    </div>
  ),
  "sloth ticket create fix auth bug": (
    <div className="text-muted-foreground">
      <p>→ creating ticket...</p>
      <p>→ ticket #124 created: fix auth bug</p>
      <p>→ assigned to: @dev-team</p>
      <p>→ status: triaged</p>
    </div>
  ),
  "sloth forge create user API": (
    <div className="text-muted-foreground">
      <p>→ analyzing prompt...</p>
      <p>→ generating code...</p>
      <p>→ created src/routes/user.ts</p>
      <p>→ created src/lib/user-service.ts</p>
      <p>→ created tests/user.test.ts</p>
      <p>→ code review: 2 suggestions</p>
    </div>
  ),
};

function parseCommand(input: string): React.ReactNode {
  const cmd = input.trim().toLowerCase();

  if (cmd === "clear") return null;
  if (cmd === "help") return COMMANDS.help;
  if (COMMANDS[cmd]) return COMMANDS[cmd];

  if (cmd.startsWith("sloth init")) {
    return (
      <div className="text-muted-foreground">
        <p>→ scaffolding project...</p>
        <p>→ installing deps (47 packages)</p>
        <p>→ configuring pipeline</p>
        <p>→ project ready: /workspace/project</p>
      </div>
    );
  }

  if (cmd.startsWith("sloth ops deploy")) {
    const env = cmd.includes("--env") ? cmd.match(/--env\s+(\w+)/)?.[1] : "staging";
    return (
      <div className="text-muted-foreground">
        <p>→ building container done 1.2s</p>
        <p>→ security scan pass 0.8s</p>
        <p>→ deploying to edge done 3.1s</p>
        <p>→ health check pass</p>
        <p>→ deployed to https://project.{env}.slothdevs.dev</p>
      </div>
    );
  }

  if (cmd.startsWith("sloth ticket")) {
    return (
      <div className="text-muted-foreground">
        <p>→ creating ticket...</p>
        <p>→ ticket #{Math.floor(Math.random() * 900) + 100} created</p>
        <p>→ assigned to: @dev-team</p>
        <p>→ status: triaged</p>
      </div>
    );
  }

  if (cmd.startsWith("sloth forge")) {
    return (
      <div className="text-muted-foreground">
        <p>→ analyzing prompt...</p>
        <p>→ generating code...</p>
        <p>→ created src/generated/api.ts</p>
        <p>→ code review: passed</p>
      </div>
    );
  }

  if (cmd.startsWith("sloth")) {
    return (
      <p className="text-red-400">Unknown command. Type &apos;help&apos; for available commands.</p>
    );
  }

  return (
    <p className="text-red-400">
      Command not found: {input}. Type &apos;help&apos; for available commands.
    </p>
  );
}

export default function HeroSection() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<Command[]>([
    {
      input: "sloth init --project acme-api",
      output: (
        <div className="text-muted-foreground">
          <p>→ scaffolding project...</p>
          <p>→ installing deps (47 packages)</p>
          <p>→ configuring pipeline</p>
          <p>→ project ready: /workspace/acme-api</p>
        </div>
      ),
    },
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    if (input.trim().toLowerCase() === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = parseCommand(input);
    setHistory([...history, { input, output }]);
    setInput("");
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <section className="border-b border-border px-6 py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2">
        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="font-mono text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            We are building tools that don't suck.
          </h1>

          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            Currently building SlothForge — the first tool that reads both your ticket system and
            version control. Hop on a call with the engineers and tell us what you actually need.
          </p>

          <a
            href="#book"
            className="mt-8 inline-block border border-border bg-primary text-primary-foreground px-6 py-3 font-mono text-sm font-medium transition-colors hover:bg-foreground"
          >
            Schedule a Developer Chat →
          </a>
        </motion.div>

        {/* Interactive Terminal */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="border border-border bg-card"
          onClick={handleTerminalClick}
        >
          <div className="flex items-center border-b border-border px-4 py-2">
            <span className="font-mono text-[10px] text-muted-foreground">
              ~/slothdevs — bash — 80×24
            </span>
          </div>
          <div
            ref={terminalRef}
            className="p-5 font-mono text-xs leading-relaxed text-muted-foreground max-h-[320px] overflow-y-auto"
          >
            {history.map((cmd, i) => (
              <div key={i} className="mb-2">
                <p>
                  <span className="text-foreground">$</span> {cmd.input}
                </p>
                <div className="ml-4">{cmd.output}</div>
              </div>
            ))}
            <form onSubmit={handleSubmit} className="flex">
              <span className="text-foreground">$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 ml-2 bg-transparent text-foreground outline-none caret-foreground"
                autoFocus
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
