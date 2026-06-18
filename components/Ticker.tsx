const items = [
  'ROOFING CLIENT — 14 BOOKED JOBS IN 60 DAYS',
  'HVAC COMPANY — $47,000 IN NEW REVENUE',
  'PLUMBER — DOUBLED INBOUND CALLS IN 30 DAYS',
  'SOLAR INSTALLER — 3 CLOSED DEALS IN FIRST MONTH',
  'PRESSURE WASHING — FULLY BOOKED 6 WEEKS OUT',
  'HAULING COMPANY — $8,400 IN NEW MONTHLY REVENUE',
  'ROOFER — RANKED #1 IN GOOGLE MAPS IN 45 DAYS',
  'HVAC — MISSED-CALL TEXT BACK CLOSED $9,200 JOB',
]

export default function Ticker() {
  const doubled = [...items, ...items]

  return (
    <div className="bg-ink text-paper border-b-2 border-ink overflow-hidden py-2.5">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="font-mono text-xs uppercase tracking-widest whitespace-nowrap px-8">
            {item}
            <span className="text-blue mx-6">|</span>
          </span>
        ))}
      </div>
    </div>
  )
}
