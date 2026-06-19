import React, { useState, useEffect, useRef } from 'react';
import { 
  Play, 
  Pause,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  CreditCard,
  TrendingUp,
  Users,
  DollarSign,
  CheckCircle,
  Music,
  Activity,
  Sparkles,
  Sliders
} from 'lucide-react';

// ============================================================================
// 1. E-COMMERCE FRONTEND SANDBOX (Product Showcase + Interactive Cart State)
// ============================================================================
interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  badge?: string;
  bgColor: string;
}

interface CartItem {
  product: Product;
  quantity: number;
}

export function EcommerceSandbox() {
  const products: Product[] = [
    { id: 'p1', name: 'AeroGlide Elite Sneakers', price: 129.99, category: 'Footwear', badge: 'Best Seller', bgColor: 'bg-rose-500/10 border-rose-500/20 text-rose-500' },
    { id: 'p2', name: 'Quantum Pro Soundpods', price: 89.50, category: 'Audio', badge: 'New Refined', bgColor: 'bg-cyan-500/10 border-cyan-500/20 text-cyan-500' },
    { id: 'p3', name: 'Apex Chrono Smartwatch', price: 159.00, category: 'Gadgets', bgColor: 'bg-amber-500/10 border-amber-500/20 text-amber-500' },
  ];

  const [cart, setCart] = useState<CartItem[]>([
    { product: products[1], quantity: 1 } // Pre-populate with one item for high visual context
  ]);
  const [checkoutLogs, setCheckoutLogs] = useState<string[]>([]);
  const [isFinishing, setIsFinishing] = useState(false);
  const [isDone, setIsDone] = useState(false);

  // Cart operations
  const addToCart = (product: Product) => {
    if (isDone) {
      // resets checkout status when adding new items
      setIsDone(false);
      setCheckoutLogs([]);
    }
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const updateQuantity = (productId: string, val: number) => {
    setCart(prev => prev.map(item => {
      if (item.product.id === productId) {
        const nextQ = item.quantity + val;
        return nextQ > 0 ? { ...item, quantity: nextQ } : item;
      }
      return item;
    }));
  };

  const removeCartItem = (productId: string) => {
    setCart(prev => prev.filter(item => item.product.id !== productId));
  };

  // Cost calculators
  const subtotal = cart.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
  const estShip = subtotal > 150 ? 0 : (subtotal > 0 ? 12.00 : 0);
  const estTax = subtotal * 0.08;
  const total = subtotal + estShip + estTax;

  // Checkout process simulator
  const handleCheckout = async () => {
    if (cart.length === 0 || isFinishing) return;
    setIsFinishing(true);
    setCheckoutLogs([
      '⚡ CONNECTING SECURE ENCRYPTION TUNNEL...',
      '📡 HANDSHAKING MERCHANT INTEGRATION ROUTERS (STATUS: AUTHENTICATED)',
      '💳 AUTHORIZING DEMO TRANSACTIONS PAYLOADS...',
    ]);

    await new Promise(r => setTimeout(r, 700));
    setCheckoutLogs(prev => [...prev, '⚙️ PROCESSING ACCESSIBILITY COMPILATION CHECKS (VIRTUAL LEDGER ACTIVE)']);
    
    await new Promise(r => setTimeout(r, 600));
    setCheckoutLogs(prev => [...prev, `💸 TRANSACTION COMPLETED SUCCESSFULLY FOR $${total.toFixed(2)}`]);
    
    await new Promise(r => setTimeout(r, 600));
    setCheckoutLogs(prev => [...prev, '📦 INITIATING LOCAL CACHE PACKING & DISPATCH ALGORITHMS']);
    
    await new Promise(r => setTimeout(r, 500));
    setIsFinishing(false);
    setIsDone(true);
    setCart([]);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full" id="ecommerce-sandbox">
      {/* Product List Panel */}
      <div className="lg:col-span-6 space-y-3.5">
        <div className="flex items-center justify-between">
          <h5 className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400 dark:text-zinc-550">
            Showcase Storefront
          </h5>
          <span className="text-[9px] font-mono text-cyan-505 dark:text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded font-bold uppercase">
            Frontend Only
          </span>
        </div>

        <div className="space-y-2.5">
          {products.map(prod => (
            <div key={prod.id} className="p-3 bg-gray-50/60 dark:bg-zinc-950/40 rounded-xl border border-gray-150 dark:border-zinc-850 flex items-center justify-between gap-4 transition-all hover:bg-gray-50 dark:hover:bg-zinc-950/70">
              <div className="space-y-1">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="text-[11px] font-semibold text-gray-800 dark:text-zinc-100">{prod.name}</span>
                  {prod.badge && (
                    <span className="text-[8px] font-mono uppercase bg-cyan-500/15 border border-cyan-500/20 text-cyan-500 dark:text-cyan-400 px-1 py-0.2 rounded font-bold">
                      {prod.badge}
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-gray-400 dark:text-zinc-500 font-mono">
                  <span>Category: {prod.category}</span>
                  <span>•</span>
                  <span className="text-cyan-600 dark:text-cyan-400 font-bold">${prod.price.toFixed(2)}</span>
                </div>
              </div>

              <button
                onClick={() => addToCart(prod)}
                disabled={isFinishing}
                className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-[10px] py-1.5 px-3 rounded-lg border border-cyan-500/10 flex items-center gap-1 tracking-wider uppercase font-mono transition-all glow-cyan-sm active:scale-95 disabled:opacity-50 cursor-pointer shrink-0"
              >
                <Plus className="w-3 h-3 stroke-[2.5]" /> Order
              </button>
            </div>
          ))}
        </div>

        {/* Status Prompt / Log screen */}
        {checkoutLogs.length > 0 && (
          <div className="bg-zinc-950 border border-zinc-850 p-3 rounded-xl space-y-1.5 font-mono text-[9px] text-cyan-400 h-[115px] overflow-y-auto scrollbar-thin select-none shadow-inner flex flex-col justify-end">
            {checkoutLogs.map((log, idx) => (
              <div key={idx} className="leading-relaxed flex items-start gap-1">
                <span className="text-zinc-705">⚡</span>
                <span className="break-all">{log}</span>
              </div>
            ))}
            {isDone && (
              <div className="text-emerald-400 font-bold mt-1.5 flex items-center gap-1 animate-pulse">
                <CheckCircle className="w-3.5 h-3.5 shrink-0" />
                <span>ROUTED_SUCCESSFUL // CLIENT PARCELS READY_TO_SHIP</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Shopping Cart Control & Balance Panel */}
      <div className="lg:col-span-6 bg-gray-50/50 dark:bg-zinc-900/40 border border-gray-150 dark:border-zinc-850 p-4 rounded-xl flex flex-col justify-between min-h-[220px]">
        <div>
          <div className="flex items-center justify-between border-b border-gray-150 dark:border-zinc-850 pb-2 mb-3">
            <h5 className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
              <ShoppingCart className="w-4 h-4 text-cyan-500 animate-pulse" />
              Dynamic Cart State ({cart.reduce((sum, i) => sum + i.quantity, 0)})
            </h5>
            <span className="text-[11px] font-mono text-cyan-600 dark:text-cyan-400 font-bold leading-none">
              Client Bundle
            </span>
          </div>

          {/* Cart item listing */}
          <div className="space-y-2 max-h-[115px] overflow-y-auto pr-1 scrollbar-thin">
            {cart.length === 0 ? (
              <div className="text-center py-6 text-gray-350 dark:text-zinc-600 text-xs italic">
                {isDone ? (
                  <div className="text-emerald-500/80 dark:text-emerald-400/80 space-y-1.5 not-italic">
                    <p className="font-semibold text-xs uppercase font-mono">🎉 Checkout Confirmed!</p>
                    <p className="text-[10px] font-sans">Payment routed. Storefront state successfully processed local resets.</p>
                  </div>
                ) : 'Your static cart payload is empty.'}
              </div>
            ) : (
              cart.map(item => (
                <div key={item.product.id} className="bg-white dark:bg-zinc-950/70 p-2.5 rounded-lg border border-gray-150 dark:border-zinc-850/80 flex items-center justify-between gap-3 text-xs shadow-sm">
                  <div className="space-y-0.5 truncate flex-1">
                    <span className="font-semibold text-gray-800 dark:text-white truncate block leading-tight">{item.product.name}</span>
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center border border-gray-200 dark:border-zinc-800 rounded bg-gray-50 dark:bg-zinc-900 leading-none">
                      <button 
                        onClick={() => updateQuantity(item.product.id, -1)}
                        className="p-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        title="Minus 1"
                      >
                        <Minus className="w-2.5 h-2.5" />
                      </button>
                      <span className="px-1.5 text-[10px] font-mono font-bold text-gray-700 dark:text-zinc-300 select-none">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.product.id, 1)}
                        className="p-1 text-gray-500 hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                        title="Plus 1"
                      >
                        <Plus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    <button 
                      onClick={() => removeCartItem(item.product.id)}
                      className="p-1.5 text-gray-400 hover:text-rose-500 transition-colors cursor-pointer"
                      title="Remove product"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Subtotals & Transmit checkout button */}
        <div className="border-t border-gray-100 dark:border-zinc-850 pt-2.5 mt-2.5 space-y-2 text-[10px] font-mono text-gray-500 dark:text-zinc-400">
          <div className="flex items-center justify-between leading-none">
            <span>Subtotal payload</span>
            <span className="text-gray-800 dark:text-zinc-200">${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between leading-none">
            <span>Estimated routing (shipping)</span>
            <span className="text-gray-850 dark:text-zinc-200">
              {estShip === 0 ? 'FREE' : `$${estShip.toFixed(2)}`}
            </span>
          </div>
          <div className="flex items-center justify-between leading-none font-bold text-xs text-gray-850 dark:text-zinc-150 border-t border-dashed border-gray-150 dark:border-zinc-800 pt-1.5 mt-1">
            <span className="uppercase text-[9px] tracking-wider">Checkout Total</span>
            <span className="text-cyan-600 dark:text-cyan-400">${total.toFixed(2)}</span>
          </div>

          <button
            onClick={handleCheckout}
            disabled={cart.length === 0 || isFinishing}
            className="w-full bg-cyan-500 hover:bg-cyan-600 disabled:opacity-50 text-black font-bold text-xs py-2 px-3 rounded-lg flex items-center justify-center gap-1.5 tracking-widest font-mono transition-all glow-cyan-sm uppercase mt-1 cursor-pointer disabled:cursor-not-allowed"
          >
            <CreditCard className="w-3.5 h-3.5 stroke-[2.5]" />
            {isFinishing ? 'Routing Transaction...' : 'Initiate Secure Checkout'}
          </button>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 2. MUSIC PLAYER FRONTEND SANDBOX (Play controller + Live Waveform visualizer)
// ============================================================================
interface Track {
  title: string;
  artist: string;
  duration: number; // in seconds
  genre: string;
}

export function MusicPlayerSandbox() {
  const tracks: Track[] = [
    { title: 'Neon Overdrive Wave', artist: 'SynthCore Lab', duration: 184, genre: 'Synthwave' },
    { title: 'Midnight Rain Echoes', artist: 'LofiVibe Space', duration: 156, genre: 'Chillhop' },
    { title: 'Quantum Flux Horizon', artist: 'CyberAura', duration: 215, genre: 'Ambient' },
  ];

  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(34); // Starting point for context
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);

  const activeTrack = tracks[currentTrackIndex];

  // Dynamic progress loop simulation when playing
  useEffect(() => {
    let timer: any = null;
    if (isPlaying) {
      timer = setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= activeTrack.duration) {
            // Loop or skip to next
            handleNext();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    }
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, currentTrackIndex]);

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex(prev => (prev + 1) % tracks.length);
    setCurrentTime(0);
  };

  const handlePrev = () => {
    setCurrentTrackIndex(prev => (prev - 1 + tracks.length) % tracks.length);
    setCurrentTime(0);
  };

  // Human-readable minutes/seconds
  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const percentProgress = (currentTime / activeTrack.duration) * 100;

  // Visualizer height arrays containing pseudo-random numbers
  const barCount = 28;
  const originalHeights = [30, 60, 45, 80, 55, 90, 75, 40, 85, 30, 50, 70, 85, 95, 60, 45, 80, 50, 65, 75, 90, 40, 60, 80, 30, 45, 70, 50];
  
  // Create animated fluctuating bars when running
  const [dynamicHeights, setDynamicHeights] = useState(originalHeights);

  useEffect(() => {
    let interval: any = null;
    if (isPlaying) {
      interval = setInterval(() => {
        setDynamicHeights(prev => prev.map(h => {
          const delta = Math.floor(Math.random() * 30) - 15;
          const nextH = Math.max(15, Math.min(100, h + delta));
          return nextH;
        }));
      }, 120);
    } else {
      // Settle back to general resting bars
      setDynamicHeights(originalHeights.map(h => Math.round(h * 0.4)));
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isPlaying]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full" id="musicplayer-sandbox">
      {/* Audio Visual Deck panel on left */}
      <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
        {/* Playback visual status */}
        <div className="bg-zinc-950 border border-zinc-850 p-4 rounded-xl flex-1 flex flex-col justify-between min-h-[145px] relative overflow-hidden shadow-inner">
          <div className="absolute top-2.5 left-3 flex items-center gap-1.5 text-[9px] font-mono text-cyan-405 font-bold uppercase select-none">
            <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-cyan-500 animate-ping' : 'bg-zinc-700'}`} />
            <span>REAL-TIME DEVKIT AUDIO OSCILLATOR</span>
          </div>

          <div className="absolute top-2.5 right-3 text-[10px] font-mono text-zinc-550">
            {activeTrack.genre.toUpperCase()} CHANNEL
          </div>

          {/* Core Animated Bar Visualizer */}
          <div className="flex-1 flex items-end justify-center gap-1 px-4 mt-6 mb-2 h-20">
            {dynamicHeights.map((ht, idx) => (
              <div 
                key={idx} 
                className={`w-1 sm:w-[5px] rounded-t-sm transition-all duration-150 ${
                  isPlaying 
                    ? 'bg-gradient-to-t from-indigo-500 via-cyan-400 to-cyan-300 shadow-md shadow-cyan-500/10' 
                    : 'bg-zinc-800'
                }`}
                style={{ height: `${ht}%` }}
              />
            ))}
          </div>

          {/* Footer timing metadata */}
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-500 dark:text-zinc-500 border-t border-zinc-900/40 pt-2">
            <span>SAMP_RATE: 44.1 KHZ</span>
            <span>FREQ_MONITOR: COMPILER_STABLE</span>
          </div>
        </div>

        {/* Small Track selector pillbox */}
        <div className="space-y-1.5">
          <h5 className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400 dark:text-zinc-550">
            Showcase Playlist Track select
          </h5>
          <div className="flex flex-col gap-1">
            {tracks.map((t, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentTrackIndex(idx);
                  setCurrentTime(0);
                }}
                className={`p-2 rounded-lg border text-left text-xs font-mono flex items-center justify-between transition-all cursor-pointer ${
                  currentTrackIndex === idx 
                    ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-600 dark:text-cyan-400 font-semibold'
                    : 'bg-white dark:bg-zinc-950/40 border-gray-150 dark:border-zinc-850 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-600 dark:text-zinc-400'
                }`}
              >
                <span className="truncate max-w-[190px] md:max-w-none flex items-center gap-1.5">
                  <Music className="w-3.5 h-3.5 shrink-0" />
                  {t.title}
                </span>
                <span className="text-[10px] text-gray-400 dark:text-zinc-500 leading-none">{formatTime(t.duration)}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Control interfaces on right */}
      <div className="lg:col-span-5 bg-gray-50/50 dark:bg-zinc-905 p-4 rounded-xl border border-gray-150 dark:border-zinc-850 flex flex-col justify-between min-h-[220px]">
        {/* Track Title banner */}
        <div className="text-center py-2 bg-white dark:bg-zinc-950/70 p-3 rounded-lg border border-gray-150 dark:border-zinc-850">
          <h4 className="font-display font-bold text-xs md:text-sm text-gray-805 dark:text-zinc-200 truncate leading-none mb-1">
            {activeTrack.title}
          </h4>
          <p className="text-[10px] font-mono text-zinc-450 dark:text-zinc-400 truncate tracking-wide">
            {activeTrack.artist}
          </p>
        </div>

        {/* Tracker Progress bar */}
        <div className="space-y-1.5 my-3">
          <div className="relative w-full h-1 bg-gray-200 dark:bg-zinc-800 rounded-full overflow-hidden select-none">
            <div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full transition-all duration-300" 
              style={{ width: `${percentProgress}%` }}
            />
          </div>
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 dark:text-zinc-500 leading-none select-none">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(activeTrack.duration)}</span>
          </div>
        </div>

        {/* Media Button layouts */}
        <div className="flex items-center justify-center gap-4 py-1.5">
          <button 
            onClick={handlePrev}
            className="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 hover:text-cyan-500 hover:border-cyan-500/20 active:scale-90 transition-all cursor-pointer shadow-sm"
            title="Previous Track"
          >
            <SkipBack className="w-4 h-4 fill-current" />
          </button>

          <button 
            onClick={handlePlayPause}
            className="p-3.5 rounded-full bg-cyan-500 hover:bg-cyan-600 border border-cyan-500/20 text-black active:scale-95 transition-all shadow glow-cyan-md cursor-pointer"
            title={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 fill-current stroke-[2.5]" />
            ) : (
              <Play className="w-5 h-5 fill-current stroke-[2.5]" />
            )}
          </button>

          <button 
            onClick={handleNext}
            className="p-2 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-gray-600 dark:text-zinc-400 hover:text-cyan-500 hover:border-cyan-500/20 active:scale-90 transition-all cursor-pointer shadow-sm"
            title="Next Track"
          >
            <SkipForward className="w-4 h-4 fill-current" />
          </button>
        </div>

        {/* Volume controls */}
        <div className="border-t border-gray-100 dark:border-zinc-850/60 pt-3 mt-3 flex items-center justify-between gap-3 text-xs">
          <button 
            onClick={() => setIsMuted(!isMuted)}
            className="text-gray-450 hover:text-cyan-500 transition-colors cursor-pointer"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="w-4 h-4 text-rose-455" />
            ) : (
              <Volume2 className="w-4 h-4" />
            )}
          </button>
          
          <input 
            type="range" 
            min="0" 
            max="100" 
            value={isMuted ? 0 : volume} 
            onChange={(e) => {
              setVolume(parseInt(e.target.value));
              if (isMuted) setIsMuted(false);
            }}
            className="flex-1 accent-cyan-500 h-1 bg-gray-200 dark:bg-zinc-800 rounded-lg cursor-pointer"
            title="Volume slider"
          />

          <span className="text-[10px] font-mono text-gray-700 dark:text-zinc-400 min-w-8 text-right font-semibold">
            {isMuted ? 'MUTE' : `${volume}%`}
          </span>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// 3. DASHBOARD FRONTEND SANDBOX (Dynamic metrics visualizer panels)
// ============================================================================
type MetricType = 'visits' | 'revenue' | 'conversion';

export function DashboardSandbox() {
  const [activeMetric, setActiveMetric] = useState<MetricType>('visits');
  const [tickerFluctuation, setTickerFluctuation] = useState(0);

  // Generate slow ticker fluctuation for visual realism
  useEffect(() => {
    const timer = setInterval(() => {
      setTickerFluctuation(Math.floor(Math.random() * 20) - 10);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Metrics definition data
  const metricsData = {
    visits: {
      total: 24850,
      prefix: '',
      suffix: ' sessions',
      rate: '+12.4%',
      label: 'Visitor Streams',
      originalPoints: [35, 45, 40, 55, 65, 80, 72, 85, 94]
    },
    revenue: {
      total: 8420.50,
      prefix: '$',
      suffix: '',
      rate: '+8.2%',
      label: 'Store Checkout Sales',
      originalPoints: [50, 40, 65, 55, 75, 70, 85, 90, 95]
    },
    conversion: {
      total: 3.42,
      prefix: '',
      suffix: '%',
      rate: '-0.3%',
      label: 'Core Funnel Conversion',
      originalPoints: [70, 75, 68, 72, 74, 80, 82, 86, 88]
    }
  };

  const metricObj = metricsData[activeMetric];
  const activeValue = activeMetric === 'conversion'
    ? (metricObj.total + (tickerFluctuation / 400)).toFixed(2)
    : activeMetric === 'revenue'
    ? (metricObj.total + tickerFluctuation).toFixed(2)
    : Math.floor(metricObj.total + tickerFluctuation);

  // Create SVG points
  const graphWidth = 460;
  const graphHeight = 110;
  const points = metricObj.originalPoints.map((val, idx) => {
    // scale x from 0 to graphWidth, y from 0 to graphHeight
    const x = (idx / (metricObj.originalPoints.length - 1)) * graphWidth;
    const y = graphHeight - (val / 100) * graphHeight;
    return `${x},${y}`;
  });

  const pathPoints = points.join(' ');
  const pathAreaPoints = `${graphWidth},${graphHeight} 0,${graphHeight} ${pathPoints}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 h-full" id="dashboard-sandbox">
      {/* Metric selection selectors */}
      <div className="lg:col-span-5 flex flex-col justify-between space-y-3.5">
        <div className="space-y-1.5">
          <h5 className="text-[10px] uppercase font-mono tracking-wider font-bold text-gray-400 dark:text-zinc-550">
            Showcase Active Metrics
          </h5>
          <div className="flex flex-col gap-2">
            {(['visits', 'revenue', 'conversion'] as MetricType[]).map(metKey => {
              const active = activeMetric === metKey;
              const met = metricsData[metKey];
              let currentValLabel = '';
              if (metKey === 'visits') currentValLabel = `${met.total.toLocaleString()} sess.`;
              else if (metKey === 'revenue') currentValLabel = `$${met.total.toFixed(0)}`;
              else currentValLabel = `${met.total.toFixed(2)}%`;

              return (
                <button
                  key={metKey}
                  onClick={() => setActiveMetric(metKey)}
                  className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                    active 
                      ? 'bg-cyan-500/10 border-cyan-500/30 text-cyan-500 shadow-sm'
                      : 'bg-white dark:bg-zinc-950/40 border-gray-150 dark:border-zinc-850 hover:bg-gray-50 dark:hover:bg-zinc-900 text-gray-500 dark:text-zinc-400'
                  }`}
                >
                  <div className="space-y-0.5 truncate flex-1">
                    <span className={`text-[10px] font-mono uppercase tracking-wider block font-bold leading-none ${active ? 'text-cyan-500' : 'text-gray-450 dark:text-zinc-550'}`}>
                      {metKey}
                    </span>
                    <span className="text-sm font-semibold text-gray-805 dark:text-zinc-200 block truncate">{met.label}</span>
                  </div>

                  <div className="text-right shrink-0">
                    <span className="text-xs font-mono font-bold text-gray-900 dark:text-zinc-100 block leading-tight">{currentValLabel}</span>
                    <span className={`text-[9px] font-mono font-bold ${met.rate.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                      {met.rate}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Small live notification widget */}
        <div className="bg-gray-50/60 dark:bg-zinc-950/30 p-2.5 rounded-lg border border-gray-150 dark:border-zinc-850 flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-cyan-500 shrink-0" />
          <p className="text-[10px] font-mono text-gray-500 dark:text-zinc-500 leading-tight">
            INTELL_ALGORITHM: Live dynamic feed simulated with 99.98% accurate mathematical variations.
          </p>
        </div>
      </div>

      {/* Metric Detailed Visual Graph */}
      <div className="lg:col-span-7 bg-white dark:bg-zinc-950 border border-gray-200 dark:border-zinc-900 rounded-xl p-4 flex flex-col justify-between shadow-inner min-h-[195px]">
        {/* Header telemetry label */}
        <div className="flex items-center justify-between border-b border-gray-100 dark:border-zinc-900 pb-2 mb-2">
          <div className="flex items-center gap-1.5 text-[9px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
            <Activity className="w-4 h-4 text-cyan-500 animate-pulse" />
            <span>Telemetry Channel: {activeMetric.toUpperCase()}_LIVE_COCKPIT</span>
          </div>

          <span className="text-[10px] font-mono text-emerald-500 font-bold select-none leading-none flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
            <span>STREAMING</span>
          </span>
        </div>

        {/* Dynamic Metric display block */}
        <div className="flex items-baseline gap-2 pt-1 mb-2">
          <span className="font-display font-bold text-2xl md:text-3xl text-gray-900 dark:text-white leading-none">
            {metricObj.prefix}{activeValue}{metricObj.suffix}
          </span>
          <span className={`text-xs font-mono font-bold ${metricObj.rate.startsWith('+') ? 'text-emerald-500' : 'text-rose-550 dark:text-rose-450'}`}>
            ({metricObj.rate} standard offset)
          </span>
        </div>

        {/* Drawing Vector Area Wave chart */}
        <div className="relative w-full flex-1 min-h-[100px] overflow-hidden">
          <svg viewBox={`0 0 ${graphWidth} ${graphHeight}`} className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="dashboardGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Background Grid lines */}
            <line x1="0" y1={graphHeight * 0.25} x2={graphWidth} y2={graphHeight * 0.25} stroke="#808080" strokeOpacity="0.06" strokeDasharray="3,3" />
            <line x1="0" y1={graphHeight * 0.5} x2={graphWidth} y2={graphHeight * 0.5} stroke="#808080" strokeOpacity="0.06" strokeDasharray="3,3" />
            <line x1="0" y1={graphHeight * 0.75} x2={graphWidth} y2={graphHeight * 0.75} stroke="#808080" strokeOpacity="0.06" strokeDasharray="3,3" />

            {/* Shaded Area */}
            <polygon points={pathAreaPoints} fill="url(#dashboardGrad)" />

            {/* Core Line path */}
            <polyline
              fill="none"
              stroke="#06b6d4"
              strokeWidth="2.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={pathPoints}
            />

            {/* Interactive moving vertex tip node */}
            {points.length > 0 && (
              <circle
                cx={graphWidth}
                cy={graphHeight - (metricObj.originalPoints[metricObj.originalPoints.length - 1] / 100) * graphHeight}
                r="4.5"
                fill="#06b6d4"
                stroke="#ffffff"
                strokeWidth="1.8"
                className="animate-pulse"
              />
            )}
          </svg>
        </div>

        {/* Timings index */}
        <div className="flex justify-between items-center text-[8px] font-mono text-gray-400 dark:text-zinc-550 mt-2 border-t border-gray-100 dark:border-zinc-900 pt-1.5 leading-none">
          <span>Q1 CONTEXT</span>
          <span>MIDPOINT_AUDIT_STABLE</span>
          <span>LIVE TELEMETRY FEED</span>
        </div>
      </div>
    </div>
  );
}
