'use client'
import { trades, useTrade } from './TradeContext'

export default function TradeSelector() {
  const { selected, setSelected } = useTrade()

  return (
    <div className="border-b-2 border-ink bg-paper">
      <div className="max-w-7xl mx-auto px-8 py-4 flex items-center gap-4 overflow-x-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-concrete shrink-0">Your Trade:</span>
        <div className="flex gap-2 flex-nowrap">
          {trades.map((t) => (
            <button
              key={t.name}
              onClick={() => setSelected(t)}
              className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border-2 transition-colors whitespace-nowrap ${
                selected.name === t.name
                  ? 'bg-ink text-paper border-ink'
                  : 'bg-transparent text-ink border-ink hover:bg-ink hover:text-paper'
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
