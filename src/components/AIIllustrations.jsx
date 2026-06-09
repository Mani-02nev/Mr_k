/* Neural network node illustration */
export function NeuralNetSVG({ size = 320 }) {
  const nodes = [
    // input layer
    { id: 'i1', cx: 60, cy: 80 }, { id: 'i2', cx: 60, cy: 160 }, { id: 'i3', cx: 60, cy: 240 },
    // hidden layer 1
    { id: 'h1', cx: 160, cy: 60 }, { id: 'h2', cx: 160, cy: 130 }, { id: 'h3', cx: 160, cy: 200 }, { id: 'h4', cx: 160, cy: 260 },
    // hidden layer 2
    { id: 'h5', cx: 260, cy: 80 }, { id: 'h6', cx: 260, cy: 160 }, { id: 'h7', cx: 260, cy: 240 },
    // output
    { id: 'o1', cx: 360, cy: 120 }, { id: 'o2', cx: 360, cy: 200 },
  ]
  const edges = [
    ['i1','h1'],['i1','h2'],['i1','h3'],['i1','h4'],
    ['i2','h1'],['i2','h2'],['i2','h3'],['i2','h4'],
    ['i3','h1'],['i3','h2'],['i3','h3'],['i3','h4'],
    ['h1','h5'],['h1','h6'],['h1','h7'],
    ['h2','h5'],['h2','h6'],['h2','h7'],
    ['h3','h5'],['h3','h6'],['h3','h7'],
    ['h4','h5'],['h4','h6'],['h4','h7'],
    ['h5','o1'],['h5','o2'],['h6','o1'],['h6','o2'],['h7','o1'],['h7','o2'],
  ]
  const nodeMap = Object.fromEntries(nodes.map(n => [n.id, n]))

  return (
    <svg viewBox="0 0 420 320" width={size} height={size * 320/420} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* edges */}
      {edges.map(([a, b], i) => {
        const A = nodeMap[a], B = nodeMap[b]
        return <line key={i} x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy} stroke="#E4E4E7" strokeWidth="1" />
      })}
      {/* active edges highlight */}
      {[['i2','h2'],['h2','h6'],['h6','o1']].map(([a,b],i) => {
        const A = nodeMap[a], B = nodeMap[b]
        return <line key={'a'+i} x1={A.cx} y1={A.cy} x2={B.cx} y2={B.cy} stroke="#F0B429" strokeWidth="2" strokeDasharray="4 2" opacity="0.7" />
      })}
      {/* nodes */}
      {nodes.map(n => (
        <g key={n.id}>
          <circle cx={n.cx} cy={n.cy} r="10" fill="white" stroke="#E4E4E7" strokeWidth="1.5" />
          <circle cx={n.cx} cy={n.cy} r="5"
            fill={['i2','h2','h6','o1'].includes(n.id) ? '#F0B429' : '#F2F2F7'}
          />
        </g>
      ))}
      {/* layer labels */}
      {[['Input',60],['Hidden',160],['Hidden',260],['Output',360]].map(([l,x]) => (
        <text key={x} x={x} y={298} textAnchor="middle" fontSize="10" fill="#AEAEB2" fontFamily="Inter,sans-serif" fontWeight="500">{l}</text>
      ))}
    </svg>
  )
}

/* Data flow / pipeline illustration */
export function DataFlowSVG({ size = 280 }) {
  const steps = [
    { x: 30, label: 'Data', icon: '⬆' },
    { x: 110, label: 'Parse', icon: '⚙' },
    { x: 190, label: 'Model', icon: '🧠' },
    { x: 270, label: 'Output', icon: '✦' },
  ]
  return (
    <svg viewBox="0 0 320 120" width={size} height={size*120/320} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* connecting lines */}
      {steps.slice(0,-1).map((s,i) => (
        <g key={i}>
          <line x1={s.x+28} y1={50} x2={steps[i+1].x-28} y2={50} stroke="#E4E4E7" strokeWidth="2" strokeDasharray="4 3" />
          <polygon points={`${steps[i+1].x-28},46 ${steps[i+1].x-20},50 ${steps[i+1].x-28},54`} fill="#AEAEB2" />
        </g>
      ))}
      {/* nodes */}
      {steps.map((s, i) => (
        <g key={s.label}>
          <circle cx={s.x} cy={50} r="24"
            fill={i === 2 ? '#FFFBEE' : 'white'}
            stroke={i === 2 ? '#F0B429' : '#E4E4E7'}
            strokeWidth={i === 2 ? '2' : '1.5'}
          />
          <text x={s.x} y={55} textAnchor="middle" fontSize="16" fontFamily="sans-serif">{s.icon}</text>
          <text x={s.x} y={92} textAnchor="middle" fontSize="10" fill="#6C6C70" fontFamily="Inter,sans-serif" fontWeight="500">{s.label}</text>
        </g>
      ))}
    </svg>
  )
}

/* Analytics bars illustration */
export function AnalyticsSVG({ size = 260 }) {
  const bars = [
    { x: 20, h: 60, highlight: false },
    { x: 55, h: 90, highlight: false },
    { x: 90, h: 45, highlight: false },
    { x: 125, h: 110, highlight: true },
    { x: 160, h: 75, highlight: false },
    { x: 195, h: 130, highlight: true },
    { x: 230, h: 85, highlight: false },
  ]
  const baseY = 150
  return (
    <svg viewBox="0 0 280 170" width={size} height={size*170/280} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* grid lines */}
      {[40,80,120].map(y => (
        <line key={y} x1={10} y1={baseY-y} x2={270} y2={baseY-y} stroke="#F2F2F7" strokeWidth="1" />
      ))}
      {/* trend line */}
      <polyline
        points={bars.map(b => `${b.x+12},${baseY-b.h}`).join(' ')}
        stroke="#F0B429" strokeWidth="2" fill="none" strokeLinejoin="round" opacity="0.6"
      />
      {/* bars */}
      {bars.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={baseY-b.h} width={24} height={b.h}
            rx="4"
            fill={b.highlight ? '#F0B429' : '#F2F2F7'}
            stroke={b.highlight ? '#E8AD25' : '#E4E4E7'}
            strokeWidth="1"
          />
          {b.highlight && <circle cx={b.x+12} cy={baseY-b.h-6} r="4" fill="#F0B429" />}
        </g>
      ))}
      {/* baseline */}
      <line x1={10} y1={baseY} x2={270} y2={baseY} stroke="#E4E4E7" strokeWidth="1.5" />
    </svg>
  )
}

/* Abstract AI brain / nodes */
export function AIBrainSVG({ size = 240 }) {
  const orbits = [
    { r: 80, nodes: 6, offset: 0 },
    { r: 50, nodes: 4, offset: 30 },
    { r: 24, nodes: 0, offset: 0 },
  ]
  const cx = 120, cy = 120
  const points = orbits.flatMap(o =>
    Array.from({ length: o.nodes }, (_, i) => {
      const angle = (360 / o.nodes) * i + o.offset
      const rad = (angle * Math.PI) / 180
      return { x: cx + o.r * Math.cos(rad), y: cy + o.r * Math.sin(rad), r: o.r }
    })
  )

  return (
    <svg viewBox="0 0 240 240" width={size} height={size} fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      {/* orbit rings */}
      <circle cx={cx} cy={cy} r={80} stroke="#F2F2F7" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx={cx} cy={cy} r={50} stroke="#F2F2F7" strokeWidth="1" strokeDasharray="3 4" />
      {/* connection lines */}
      {points.map((p, i) =>
        points.slice(i + 1).filter(q => q.r !== p.r).map((q, j) => (
          <line key={`${i}-${j}`} x1={p.x} y1={p.y} x2={q.x} y2={q.y}
            stroke="#E4E4E7" strokeWidth="0.8" opacity="0.6" />
        ))
      )}
      {/* outer nodes */}
      {points.map((p, i) => (
        <circle key={i} cx={p.x} cy={p.y} r={p.r === 80 ? 7 : 5}
          fill={i % 3 === 0 ? '#FFFBEE' : 'white'}
          stroke={i % 3 === 0 ? '#F0B429' : '#E4E4E7'}
          strokeWidth="1.5"
        />
      ))}
      {/* center core */}
      <circle cx={cx} cy={cy} r={24} fill="#FFFBEE" stroke="#F0B429" strokeWidth="2" />
      <circle cx={cx} cy={cy} r={14} fill="#F0B429" opacity="0.25" />
      <circle cx={cx} cy={cy} r={7} fill="#F0B429" />
    </svg>
  )
}
