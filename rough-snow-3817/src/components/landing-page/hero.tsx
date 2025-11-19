"use client";

import { ArrowRight, Sparkles, Zap, Shield, Rocket, Check } from "lucide-react";
import { useEffect, useState, useRef } from "react";

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <>
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .gradient-text {
          background: linear-gradient(90deg, #00eaff, #009dff, #00eaff);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-shift 6s ease infinite;
        }

        .feature-card {
          backdrop-filter: blur(16px) saturate(180%);
          animation: fade-in-up 0.8s ease-out forwards, float 6s ease-in-out infinite;
          opacity: 0;
          transition: all 0.4s ease;
        }

        .feature-card:nth-child(1) { animation-delay: 0.2s; }
        .feature-card:nth-child(2) { animation-delay: 0.4s; }
        .feature-card:nth-child(3) { animation-delay: 0.6s; }

        .feature-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 15px 30px -10px rgba(0, 255, 255, 0.25);
          border-color: rgba(0, 255, 255, 0.5) !important;
        }
      `}</style>

      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      >
        {/* Grid Background */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 200, 255, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 200, 255, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Blue/Cyan Ambient Lights */}
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[450px] bg-cyan-500/20 rounded-full blur-[160px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[450px] h-[450px] bg-blue-500/20 rounded-full blur-[160px]" />

        {/* Mouse Spotlight */}
        <div
          className="pointer-events-none fixed inset-0 z-10 opacity-40 transition-opacity duration-500"
          style={{
            background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(0,200,255,0.12), transparent 50%)`,
          }}
        />

        {/* CONTENT */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 py-20">
          {/* Badge */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                <span className="text-xs text-zinc-400 uppercase tracking-wide">
                  Live & Production Ready
                </span>
              </div>
              <div className="w-px h-4 bg-white/10" />
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1]">
                  <span className="text-white block">Build the</span>
                  <span className="gradient-text block font-black mt-2">
                    Future Today
                  </span>
                </h1>
              </div>

              <p className="text-lg md:text-xl text-zinc-400 max-w-xl leading-relaxed">
                The ultimate productivity suite with{" "}
                <span className="text-white font-semibold">50+ powerful tools</span>{" "}
                designed for modern teams.
              </p>

              {/* Pills */}
              <div className="flex flex-wrap gap-3">
                {["Zero Ads", "Open Source", "Privacy First"].map((item, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded bg-white/[0.03] border border-white/[0.08]"
                  >
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="px-8 py-4 bg-cyan-700 hover:bg-cyan-800 rounded-2xl text-white font-semibold transition-all duration-300 flex items-center gap-2">
                  Get Started Free <Rocket className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 bg-white/[0.03] border border-white/[0.1] rounded-2xl text-white flex items-center gap-2 hover:bg-white/[0.06] transition-all duration-300">
                  View Demo <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* RIGHT SIDE — FEATURE CARDS */}
            <div className="relative lg:pl-8">
              <div className="space-y-4">
                {[
                  { icon: Zap, title: "Lightning Fast", desc: "Sub-100ms performance" },
                  { icon: Shield, title: "Enterprise Security", desc: "Bank-level protection" },
                  { icon: Sparkles, title: "AI Powered", desc: "Learns your workflow" },
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="
                      feature-card p-6 rounded-2xl
                      bg-white/[0.02] border border-cyan-300/10
                      hover:border-cyan-300/40 hover:bg-cyan-300/[0.04]
                      cursor-pointer shadow-[0_0_0px_0px_rgba(0,255,255,0)]
                    "
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-cyan-400/10">
                        <feature.icon className="w-6 h-6 text-cyan-300" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <h3 className="text-lg font-semibold text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-zinc-500">{feature.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Glow */}
              <div className="absolute -inset-4 bg-cyan-500/10 rounded-3xl blur-3xl -z-10" />
            </div>

          </div>
          {/* Stats */}
<div className="mt-20">
  <div
    className="
      grid grid-cols-3 gap-4 p-8 rounded-2xl
      bg-cyan-300/[0.03] border border-cyan-300/10 backdrop-blur-xl
      shadow-[0_0_0px_0px_rgba(0,255,255,0)]
      hover:shadow-[0_20px_40px_-5px_rgba(0,255,255,0.08)]
      transition-all duration-700
      animate-[float_8s_ease-in-out_infinite]
    "
  >
    {[
      { num: "50+", label: "Tools" },
      { num: "250K+", label: "Users" },
      { num: "99.9%", label: "Uptime" },
    ].map((stat, i) => (
      <div
        key={i}
        className="
          text-center
          transition-all duration-500
          hover:scale-[1.05]
        "
      >
        <div className="text-3xl md:text-4xl font-bold text-cyan-300 mb-1 drop-shadow-[0_0_6px_rgba(0,255,255,0.4)]">
          {stat.num}
        </div>
        <div className="text-sm text-zinc-400 font-medium">
          {stat.label}
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
        

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>
    </>
  );
}
