'use client'
import { createContext, useContext, useState } from 'react'

export type Trade = 'Roofing' | 'HVAC' | 'Solar' | 'Plumbing' | 'Pressure Washing' | 'Hauling'

export interface TradeData {
  name: Trade
  headline: string
  sub: string
  stat: { value: string; label: string }
  avgJob: string
  breakeven: string
  pain: string
}

export const trades: TradeData[] = [
  {
    name: 'Roofing',
    headline: 'The Best Roofer In Town Shouldn\'t Be Losing Bids To A Worse One',
    sub: 'One ranked website, one storm season, one extra job — it pays for years.',
    stat: { value: '$18k', label: 'average roofing job value' },
    avgJob: '$12k – $25k',
    breakeven: '1 job / year',
    pain: 'Storm leads go to whoever shows up first on Google. Make sure that\'s you.',
  },
  {
    name: 'HVAC',
    headline: 'Peak Season Is Coming. Will Your Phone Ring Or Theirs?',
    sub: 'Missed calls in July cost you $6,000+ jobs. Our system texts back in under 60 seconds.',
    stat: { value: '78%', label: 'of HVAC leads hire the first responder' },
    avgJob: '$3k – $12k',
    breakeven: '2–3 jobs / year',
    pain: 'Speed wins in HVAC. If you\'re not first to respond, you\'re last to get paid.',
  },
  {
    name: 'Solar',
    headline: 'One Closed Solar Deal Pays For A Full Year Of Marketing',
    sub: 'High-ticket buyers research before they call. Your site needs to earn that trust.',
    stat: { value: '$25k', label: 'average solar installation value' },
    avgJob: '$15k – $35k',
    breakeven: '1 job / year',
    pain: 'Solar buyers spend weeks comparing. Rank higher, look more credible, close more.',
  },
  {
    name: 'Plumbing',
    headline: 'Emergency Calls Go To Whoever Answers First. That Should Be You.',
    sub: 'Plumbing is speed and trust. We build both — fast sites, automated follow-up, stacked reviews.',
    stat: { value: '60s', label: 'our system texts back missed calls' },
    avgJob: '$500 – $5k',
    breakeven: '3–5 jobs / year',
    pain: 'People in a plumbing emergency don\'t scroll past the first result. Get there.',
  },
  {
    name: 'Pressure Washing',
    headline: 'A Full Schedule Doesn\'t Happen By Word Of Mouth Alone',
    sub: 'Volume is the game. A ranked site + review system keeps your calendar full year-round.',
    stat: { value: '8–12', label: 'jobs to break even on our service' },
    avgJob: '$250 – $800',
    breakeven: '8–12 jobs / year',
    pain: 'Most pressure washing leads go to whoever has the most reviews. Start stacking them.',
  },
  {
    name: 'Hauling',
    headline: 'Repeat Business And Referrals Don\'t Build Themselves',
    sub: 'A CRM, review system, and local SEO keeps you top of mind when they need you next.',
    stat: { value: '10–15', label: 'jobs to break even — then it\'s pure profit' },
    avgJob: '$200 – $600',
    breakeven: '10–15 jobs / year',
    pain: 'Hauling is a repeat business game. A system that follows up is worth more than ads.',
  },
]

interface TradeContextType {
  selected: TradeData
  setSelected: (t: TradeData) => void
}

const TradeContext = createContext<TradeContextType>({
  selected: trades[0],
  setSelected: () => {},
})

export function TradeProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState<TradeData>(trades[0])
  return <TradeContext.Provider value={{ selected, setSelected }}>{children}</TradeContext.Provider>
}

export function useTrade() {
  return useContext(TradeContext)
}
