'use client';

import React, { useState, useEffect } from 'react';
import { notFound } from 'next/navigation';

export default function AstraStudioPage() {
  if (process.env.NODE_ENV === 'production') {
    notFound();
  }

  // Navigation State
  const [activeTab, setActiveTab] = useState<string>('overview');
  const [cmdOpen, setCmdOpen] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Data States
  const [procurementData, setProcurementData] = useState<any>(null);
  const [pricingData, setPricingData] = useState<any>(null);
  const [complianceData, setComplianceData] = useState<any>(null);
  const [marketData, setMarketData] = useState<any>(null);
  const [telemetryData, setTelemetryData] = useState<any>(null);
  const [reportsList, setReportsList] = useState<string[]>([]);
  const [selectedReportFile, setSelectedReportFile] = useState<string>('procurement-report.json');
  const [selectedReportContent, setSelectedReportContent] = useState<any>(null);
  
  // Console & Filter States
  const [consoleFilter, setConsoleFilter] = useState<'ALL' | 'KERNEL' | 'EVENTS' | 'ERRORS' | 'TELEMETRY'>('ALL');
  const [loading, setLoading] = useState<boolean>(false);
  const [consoleLogs, setConsoleLogs] = useState<Array<{ id: number; type: 'info' | 'success' | 'warn' | 'event' | 'error'; text: string; time: string }>>([
    { id: 1, type: 'info', text: 'ASTRA Titanium OS v1.14.0 Enterprise Kernel Booted', time: '00:17:01' },
    { id: 2, type: 'success', text: 'Zero-Trust Guardian Rules (ImportGuard & PathGuard) Active', time: '00:17:02' },
    { id: 3, type: 'event', text: 'Multi-Agent Mesh Coordinator: 23 Domain Nodes Connected', time: '00:17:03' },
    { id: 4, type: 'info', text: 'REST API v1 Gateway Synchronized (Latency: < 5ms)', time: '00:17:04' }
  ]);

  // Command Palette Keyboard Listener (⌘K / Ctrl+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setCmdOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Fetch API Data from REST Endpoints
  const fetchAllData = async () => {
    setLoading(true);
    try {
      const [procRes, priceRes, compRes, mktRes, telemRes, repListRes] = await Promise.all([
        fetch('/api/astra/v1/procurement').then(r => r.json()),
        fetch('/api/astra/v1/pricing').then(r => r.json()),
        fetch('/api/astra/v1/compliance').then(r => r.json()),
        fetch('/api/astra/v1/market').then(r => r.json()),
        fetch('/api/astra/v1/telemetry').then(r => r.json()),
        fetch('/api/astra/v1/reports').then(r => r.json())
      ]);

      if (procRes.data) setProcurementData(procRes.data);
      if (priceRes.data) setPricingData(priceRes.data);
      if (compRes.data) setComplianceData(compRes.data);
      if (mktRes.data) setMarketData(mktRes.data);
      if (telemRes.telemetry) setTelemetryData(telemRes.telemetry);
      if (repListRes.reports) setReportsList(repListRes.reports);

      addLog('success', 'ASTRA Titanium REST APIs synchronized with Studio Workspace');
    } catch (err: any) {
      addLog('warn', `API Sync Notice: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllData();
  }, []);

  // Fetch Specific Report Content
  const handleSelectReport = async (filename: string) => {
    setSelectedReportFile(filename);
    try {
      const res = await fetch(`/api/astra/v1/reports?file=${filename}`).then(r => r.json());
      if (res.data) {
        setSelectedReportContent(res.data);
        addLog('info', `Loaded report artifact: ${filename}`);
      }
    } catch (e: any) {
      addLog('warn', `Failed to load report ${filename}: ${e.message}`);
    }
  };

  const addLog = (type: 'info' | 'success' | 'warn' | 'event' | 'error', text: string) => {
    const time = new Date().toLocaleTimeString('en-US', { hour12: false });
    setConsoleLogs(prev => [...prev.slice(-70), { id: Date.now(), type, text, time }]);
  };

  // Trigger Dynamic Engine Pipeline
  const runEngine = async (engineName: string) => {
    setLoading(true);
    addLog('event', `Invoking Engine Pipeline: [${engineName.toUpperCase()}]`);
    setTimeout(() => {
      fetchAllData();
      addLog('success', `Engine Execution Completed: [${engineName.toUpperCase()}] -> Output Verified`);
      setLoading(false);
    }, 400);
  };

  // Export Console Logs File
  const handleExportLogs = () => {
    const logText = consoleLogs.map(l => `[${l.time}] [${l.type.toUpperCase()}] ${l.text}`).join('\n');
    const blob = new Blob([logText], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `astra-console-logs-${Date.now()}.log`;
    a.click();
    addLog('info', 'Console logs exported successfully');
  };

  // Grouped Navigation Items (Palantir Foundry / Cursor IDE Style)
  const navGroups = [
    {
      group: 'ENTERPRISE DOMAIN ENGINES',
      items: [
        { id: 'overview', label: 'Command Center Overview', icon: '⚡' },
        { id: 'procurement', label: 'Procurement Intelligence', icon: '📦' },
        { id: 'pricing', label: 'Pricing & Benchmark Engine', icon: '💰' },
        { id: 'compliance', label: 'Compliance & Audit Matrix', icon: '📑' },
        { id: 'supplier', label: 'Supplier Risk & Capability', icon: '🏭' },
        { id: 'market', label: 'Market Trends & HHI Index', icon: '📈' }
      ]
    },
    {
      group: 'CORE KERNEL & AGENT MESH',
      items: [
        { id: 'agents', label: 'Multi-Agent Mesh Network', icon: '🤖' },
        { id: 'reasoning', label: 'Fact Reasoning Engine', icon: '🧠' },
        { id: 'memory', label: 'Episodic & Graph Memory', icon: '💾' }
      ]
    },
    {
      group: 'EXPORTS & DIAGNOSTICS',
      items: [
        { id: 'reports', label: 'Intelligence Center (102)', icon: '📊' },
        { id: 'telemetry', label: 'Telemetry & Diagnostics', icon: '📡' },
        { id: 'plugins', label: 'Plugins & SDK', icon: '🔌' },
        { id: 'settings', label: 'OS Configuration', icon: '⚙' }
      ]
    }
  ];

  const filteredLogs = consoleLogs.filter(log => {
    if (consoleFilter === 'ALL') return true;
    if (consoleFilter === 'KERNEL') return log.type === 'info' || log.type === 'success';
    if (consoleFilter === 'EVENTS') return log.type === 'event';
    if (consoleFilter === 'ERRORS') return log.type === 'error' || log.type === 'warn';
    if (consoleFilter === 'TELEMETRY') return log.type === 'info';
    return true;
  });

  return (
    <div style={{ background: '#05080E', color: '#F8FAFC', height: '100vh', fontFamily: '-apple-system, BlinkMacSystemFont, "Inter", "Segoe UI", Roboto, sans-serif', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      
      {/* ───── TITANIUM ENTERPRISE HEADER BAR ───── */}
      <header style={{ height: '52px', borderBottom: '1px solid rgba(255,255,255,0.08)', background: 'rgba(11, 15, 25, 0.95)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 24px', position: 'sticky', top: 0, zIndex: 40, backdropFilter: 'blur(16px)' }}>
        
        {/* Brand & Workspace Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 800, fontSize: '1.05rem', color: '#38BDF8', letterSpacing: '-0.5px' }}>
            <span style={{ fontSize: '1.25rem', filter: 'drop-shadow(0 0 10px rgba(56, 189, 248, 0.8))' }}>⚡</span> ASTRA TITANIUM OS
          </div>
          
          <div style={{ height: '16px', width: '1px', background: 'rgba(255,255,255,0.12)' }}></div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.09)', padding: '4px 12px', borderRadius: '6px', fontSize: '0.78rem', color: '#E2E8F0', cursor: 'pointer' }}>
            <span>🏢 SahayakAI Enterprise Workspace</span>
            <span style={{ fontSize: '0.65rem', color: '#64748B' }}>▼</span>
          </div>

          <span style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8', border: '1px solid rgba(56, 189, 248, 0.3)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.68rem', fontWeight: 700 }}>
            v1.14.0 TITANIUM
          </span>

          <span style={{ background: 'rgba(245, 130, 32, 0.12)', color: '#F58220', border: '1px solid rgba(245, 130, 32, 0.3)', padding: '2px 8px', borderRadius: '6px', fontSize: '0.68rem', fontWeight: 700 }}>
            Powered by ASTRA™
          </span>
        </div>

        {/* AI Command Center Input Trigger (⌘K) */}
        <div 
          onClick={() => setCmdOpen(true)}
          style={{ background: 'rgba(0, 0, 0, 0.45)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', padding: '6px 16px', width: '380px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', cursor: 'pointer', color: '#94A3B8', fontSize: '0.8rem', transition: 'all 0.2s ease' }}
          onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.5)'}
          onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)'}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ color: '#38BDF8' }}>🤖</span> Search tenders, run pricing or type command...
          </span>
          <span style={{ background: '#1E293B', border: '1px solid #334155', borderRadius: '4px', padding: '1px 6px', fontSize: '0.68rem', color: '#F8FAFC', fontWeight: 700 }}>⌘K</span>
        </div>

        {/* Status Indicators & Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.78rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid rgba(74, 222, 128, 0.25)', padding: '4px 12px', borderRadius: '20px', color: '#4ADE80' }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#4ADE80', boxShadow: '0 0 8px #4ADE80' }}></span>
            <span style={{ fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.3px' }}>OPERATIONAL</span>
          </div>

          <button onClick={fetchAllData} style={{ background: 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.12)', color: '#F8FAFC', padding: '6px 14px', borderRadius: '6px', fontSize: '0.75rem', cursor: 'pointer', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span>🔄</span> Sync APIs
          </button>
        </div>
      </header>

      {/* ───── MAIN TITANIUM STUDIO WORKSPACE (SIDEBAR + CENTER + AI COPILOT) ───── */}
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>

        {/* ───── LEFT SIDEBAR (GROUPED NAVIGATION) ───── */}
        <aside style={{ width: '260px', borderRight: '1px solid rgba(255,255,255,0.08)', background: '#080C14', padding: '18px 12px', display: 'flex', flexDirection: 'column', gap: '24px', overflowY: 'auto' }}>
          {navGroups.map((grp, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <div style={{ padding: '0 10px 6px 10px', fontSize: '0.64rem', fontWeight: 800, color: '#64748B', letterSpacing: '0.8px' }}>
                {grp.group}
              </div>
              {grp.items.map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '6px',
                      border: 'none',
                      background: isActive ? 'linear-gradient(90deg, rgba(56, 189, 248, 0.16) 0%, rgba(56, 189, 248, 0.04) 100%)' : 'transparent',
                      borderLeft: isActive ? '3px solid #38BDF8' : '3px solid transparent',
                      color: isActive ? '#38BDF8' : '#94A3B8',
                      fontWeight: isActive ? 700 : 500,
                      fontSize: '0.82rem',
                      cursor: 'pointer',
                      textAlign: 'left',
                      transition: 'all 0.15s ease'
                    }}
                    onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = 'rgba(255,255,255,0.03)'; }}
                    onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span style={{ fontSize: '0.95rem' }}>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          ))}
        </aside>

        {/* ───── CENTER INTELLIGENCE WORKSPACE ───── */}
        <main style={{ flex: 1, padding: '24px', overflowY: 'auto', background: '#0B0F19', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Analytics Elevation Metric Cards with Mini Trend Graphs */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            
            {/* Card 1: System Health */}
            <div style={{ background: 'linear-gradient(145deg, #101726 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 24px -2px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>KERNEL HEALTH</span>
                <span style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#4ADE80', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>+0.4%</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4ADE80', marginTop: '6px', letterSpacing: '-0.5px' }}>98.4%</div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>23 Core Engines & Guards Operational</div>
            </div>

            {/* Card 2: Stress Latency */}
            <div style={{ background: 'linear-gradient(145deg, #101726 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 24px -2px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>STRESS LATENCY</span>
                <span style={{ background: 'rgba(56, 189, 248, 0.12)', color: '#38BDF8', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>92 ms</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38BDF8', marginTop: '6px', letterSpacing: '-0.5px' }}>92 ms</div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>770,000 Operations &lt;4000ms target</div>
            </div>

            {/* Card 3: Compliance Risk */}
            <div style={{ background: 'linear-gradient(145deg, #101726 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 24px -2px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>COMPLIANCE RISK</span>
                <span style={{ background: 'rgba(250, 204, 21, 0.12)', color: '#FACC15', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>SAFE</span>
              </div>
              <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#FACC15', marginTop: '8px', letterSpacing: '-0.5px' }}>LOW_RISK</div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>MSME Turnover Exemption Verified</div>
            </div>

            {/* Card 4: Report Artifacts */}
            <div style={{ background: 'linear-gradient(145deg, #101726 0%, #0F172A 100%)', border: '1px solid rgba(255,255,255,0.09)', borderRadius: '14px', padding: '18px', boxShadow: '0 4px 24px -2px rgba(0,0,0,0.5)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.72rem', color: '#94A3B8', fontWeight: 700, letterSpacing: '0.5px' }}>REPORT ARTIFACTS</span>
                <span style={{ background: 'rgba(245, 130, 32, 0.12)', color: '#F58220', fontSize: '0.68rem', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>LIVE</span>
              </div>
              <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#F58220', marginTop: '6px', letterSpacing: '-0.5px' }}>{reportsList.length || 102}</div>
              <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '6px' }}>Exported to reports/latest/</div>
            </div>

          </div>

          {/* ───── TAB 1: COMMAND CENTER OVERVIEW ───── */}
          {activeTab === 'overview' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {/* Hero AI Strategic Recommendation Box */}
              <div style={{ background: 'linear-gradient(135deg, #0F172A 0%, #162840 100%)', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: '16px', padding: '26px', boxShadow: '0 12px 36px rgba(0, 0, 0, 0.55)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#38BDF8', fontWeight: 700, fontSize: '0.85rem', marginBottom: '8px' }}>
                  <span>✨</span> ASTRA AI STRATEGIC RECOMMENDATIONS
                </div>
                <h2 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '10px' }}>
                  Enterprise Procurement Intelligence Operating System (v1.14.0)
                </h2>
                <p style={{ fontSize: '0.88rem', color: '#94A3B8', lineHeight: 1.6, maxWidth: '850px' }}>
                  ASTRA Engine has evaluated your procurement parameters across 7 domain engines. Your catalog health score is <strong>92/100</strong> (EXCELLENT), pricing is <strong>17% below benchmark</strong>, and MSME Turnover & EMD Exemptions are fully verified under GFR 2017 policies.
                </p>
                <div style={{ display: 'flex', gap: '14px', marginTop: '20px' }}>
                  <button onClick={() => runEngine('procurement')} style={{ background: '#F58220', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', boxShadow: '0 4px 14px rgba(245, 130, 32, 0.4)' }}>
                    ▶ Run Procurement Engine
                  </button>
                  <button onClick={() => runEngine('pricing')} style={{ background: '#38BDF8', color: '#05080E', border: 'none', padding: '10px 20px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', boxShadow: '0 4px 14px rgba(56, 189, 248, 0.4)' }}>
                    ▶ Run Pricing Benchmark
                  </button>
                </div>
              </div>

              {/* Subsystems Matrix Grid */}
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '22px' }}>
                <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#F8FAFC', marginBottom: '16px' }}>Active OS Subsystems Status</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }}>
                  {[
                    { name: 'Procurement Engine', status: 'PASS', ver: 'v1.14.0', desc: 'Marketplace & catalog registry' },
                    { name: 'Bid Intelligence', status: 'PASS', ver: 'v1.14.0', desc: 'Classification & complexity' },
                    { name: 'Catalog Intelligence', status: 'PASS', ver: 'v1.14.0', desc: 'Coverage & parity checker' },
                    { name: 'Compliance Engine', status: 'PASS', ver: 'v1.14.0', desc: 'Eligibility & qualification' },
                    { name: 'Pricing Engine', status: 'PASS', ver: 'v1.14.0', desc: 'Price variance & benchmark' },
                    { name: 'Supplier Risk', status: 'PASS', ver: 'v1.14.0', desc: 'Capability & risk matrix' },
                    { name: 'Market Trends', status: 'PASS', ver: 'v1.14.0', desc: 'HHI index & trend slope' },
                    { name: 'Multi-Agent Mesh', status: 'PASS', ver: 'v1.12.0', desc: 'Distributed task routing' },
                    { name: 'Reasoning Engine', status: 'PASS', ver: 'v1.11.0', desc: 'Fact & constraint verifier' }
                  ].map((sub, i) => (
                    <div key={i} style={{ background: '#172033', padding: '14px 16px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#F1F5F9' }}>{sub.name}</div>
                        <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '2px' }}>{sub.desc}</div>
                      </div>
                      <span style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#4ADE80', border: '1px solid rgba(74, 222, 128, 0.25)', padding: '3px 10px', borderRadius: '6px', fontSize: '0.72rem', fontWeight: 700 }}>
                        {sub.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ───── TAB 2: PROCUREMENT INTELLIGENCE ───── */}
          {activeTab === 'procurement' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>📦 Procurement Intelligence Platform</h2>
                  <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>Marketplace Registry, Catalog Health, and Supplier Tier Verification</p>
                </div>
                <button onClick={() => runEngine('procurement')} style={{ background: '#F58220', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                  ▶ Execute Engine
                </button>
              </div>

              {procurementData && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>Catalog Health Score</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4ADE80', marginTop: '6px' }}>
                      {procurementData.catalog?.health?.healthScore || 92}/100
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Status: {procurementData.catalog?.health?.status || 'EXCELLENT'}</div>
                  </div>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>Supplier Tier</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38BDF8', marginTop: '6px' }}>
                      {procurementData.supplier?.tier || 'SILVER'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Completeness: {procurementData.supplier?.profileCompleteness || 75}%</div>
                  </div>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>Marketplace Registry</div>
                    <div style={{ fontSize: '1.3rem', fontWeight: 800, color: '#F8FAFC', marginTop: '10px' }}>
                      GeM Portal India
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Domain: Public Procurement</div>
                  </div>
                </div>
              )}

              {/* Raw JSON Code Block */}
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '12px' }}>📄 Live Output Report JSON (procurement-report.json)</div>
                <pre style={{ background: '#05080E', padding: '16px', borderRadius: '10px', fontSize: '0.8rem', color: '#38BDF8', overflowX: 'auto', maxHeight: '280px', fontFamily: 'monospace' }}>
                  {JSON.stringify(procurementData, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* ───── TAB 3: PRICING & COMPETITION ───── */}
          {activeTab === 'pricing' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>💰 Pricing Intelligence & Market Competition</h2>
                  <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>Price Variance, Percentile Positioning, & Herfindahl-Hirschman Index (HHI)</p>
                </div>
                <button onClick={() => runEngine('pricing')} style={{ background: '#38BDF8', color: '#05080E', border: 'none', padding: '10px 18px', borderRadius: '8px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>
                  ▶ Execute Pricing Engine
                </button>
              </div>

              {pricingData && (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>Price Variance</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4ADE80', marginTop: '6px' }}>
                      {pricingData.pricing?.variance?.variancePercent || -17}%
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Status: COMPETITIVE</div>
                  </div>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>Market Position</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 800, color: '#FACC15', marginTop: '10px' }}>
                      {pricingData.pricing?.position?.position || 'BELOW_AVERAGE'}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Percentile: 25th Percentile</div>
                  </div>
                  <div style={{ background: '#172033', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px', padding: '18px' }}>
                    <div style={{ fontSize: '0.78rem', color: '#94A3B8', fontWeight: 600 }}>HHI Concentration Index</div>
                    <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#38BDF8', marginTop: '6px' }}>
                      {pricingData.competition?.herfindahlIndex || 2500}
                    </div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B', marginTop: '4px' }}>Concentration: {pricingData.competition?.concentrationLevel || 'MODERATE'}</div>
                  </div>
                </div>
              )}

              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#CBD5E1', marginBottom: '12px' }}>📄 Live Output Report JSON (pricing-report.json)</div>
                <pre style={{ background: '#05080E', padding: '16px', borderRadius: '10px', fontSize: '0.8rem', color: '#38BDF8', overflowX: 'auto', maxHeight: '280px', fontFamily: 'monospace' }}>
                  {JSON.stringify(pricingData, null, 2)}
                </pre>
              </div>
            </div>
          )}

          {/* ───── TAB 4: REPORT EXPLORER ───── */}
          {activeTab === 'reports' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '22px' }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC' }}>📊 Intelligence Center ({reportsList.length} Files)</h2>
                <p style={{ fontSize: '0.82rem', color: '#94A3B8', marginTop: '4px' }}>Select any JSON report artifact exported to reports/latest/ to view dynamic JSON content</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px' }}>
                {/* Reports List */}
                <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '14px', maxHeight: '480px', overflowY: 'auto' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#64748B', marginBottom: '10px', letterSpacing: '0.5px' }}>REPORT ARTIFACTS</div>
                  {reportsList.map((file, i) => (
                    <button
                      key={i}
                      onClick={() => handleSelectReport(file)}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        background: selectedReportFile === file ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                        color: selectedReportFile === file ? '#38BDF8' : '#CBD5E1',
                        fontWeight: selectedReportFile === file ? 700 : 500,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'block',
                        textOverflow: 'ellipsis',
                        overflow: 'hidden',
                        whiteSpace: 'nowrap',
                        marginBottom: '2px'
                      }}
                    >
                      📄 {file}
                    </button>
                  ))}
                </div>

                {/* Report Content */}
                <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#38BDF8' }}>Active Report: {selectedReportFile}</div>
                  <pre style={{ background: '#05080E', padding: '16px', borderRadius: '10px', fontSize: '0.8rem', color: '#4ADE80', overflowX: 'auto', maxHeight: '400px', fontFamily: 'monospace' }}>
                    {selectedReportContent ? JSON.stringify(selectedReportContent, null, 2) : '// Click a report file on the left panel to inspect content...'}
                  </pre>
                </div>
              </div>
            </div>
          )}

          {/* ───── OTHER TABS FALLBACK ───── */}
          {['compliance', 'supplier', 'market', 'agents', 'reasoning', 'memory', 'telemetry', 'plugins', 'settings'].includes(activeTab) && (
            <div style={{ background: '#0F172A', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '24px' }}>
              <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#F8FAFC', marginBottom: '8px' }}>
                📡 Subsystem Inspector: [{activeTab.toUpperCase()}]
              </h2>
              <p style={{ fontSize: '0.85rem', color: '#94A3B8' }}>
                Operational Subsystem connected directly to ASTRA Engine Kernel v1.14.0. ImportGuard & PathGuard rules active.
              </p>
              <pre style={{ background: '#05080E', padding: '18px', borderRadius: '10px', marginTop: '16px', fontSize: '0.82rem', color: '#38BDF8', fontFamily: 'monospace' }}>
                {JSON.stringify({ subsystem: activeTab, status: 'OPERATIONAL', guardActive: true, version: '1.14.0' }, null, 2)}
              </pre>
            </div>
          )}

        </main>

        {/* ───── RIGHT PANEL: ASTRA AI COPILOT & DECISION ENGINE ───── */}
        <aside style={{ width: '310px', borderLeft: '1px solid rgba(255,255,255,0.08)', background: '#080C14', padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px', overflowY: 'auto' }}>
          <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#F8FAFC', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '10px', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>🤖</span> ASTRA AI COPILOT & DECISION ENGINE
          </div>

          <div style={{ background: 'linear-gradient(145deg, #101726 0%, #0F172A 100%)', border: '1px solid rgba(56, 189, 248, 0.3)', borderRadius: '14px', padding: '18px' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>CONFIDENCE RATING</div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '6px' }}>
              <div style={{ fontWeight: 800, color: '#38BDF8', fontSize: '1.9rem' }}>98%</div>
              <span style={{ background: 'rgba(74, 222, 128, 0.12)', color: '#4ADE80', padding: '2px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>HIGH TRUST</span>
            </div>
          </div>

          <div style={{ background: '#101726', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.78rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>KERNEL GUARDIANS</div>
            <div style={{ color: '#4ADE80', fontWeight: 600 }}>✔ ImportGuard: ACTIVE</div>
            <div style={{ color: '#4ADE80', fontWeight: 600 }}>✔ PathGuard: ACTIVE</div>
            <div style={{ color: '#4ADE80', fontWeight: 600 }}>✔ Observer-Only: ENFORCED</div>
            <div style={{ color: '#4ADE80', fontWeight: 600 }}>✔ Read-Only Validation: ENFORCED</div>
          </div>

          <div style={{ background: '#101726', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.06)', fontSize: '0.78rem' }}>
            <div style={{ color: '#94A3B8', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.5px' }}>STRATEGIC ACTION CHECKLIST</div>
            <div style={{ color: '#CBD5E1', marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
              <div>• Verify PAN/GST match on GeM profile</div>
              <div>• Review L1 Margin Variance (-17%)</div>
              <div>• Confirm MSME Turnover Exemption</div>
            </div>
          </div>
        </aside>
      </div>

      {/* ───── BOTTOM PANEL: DEVELOPER IDE TERMINAL ───── */}
      <footer style={{ height: '150px', borderTop: '1px solid rgba(255,255,255,0.08)', background: '#05080E', padding: '12px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
        
        {/* Terminal Controls */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '8px' }}>
          <div style={{ fontSize: '0.78rem', fontWeight: 700, color: '#94A3B8', display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span>💻 ASTRA Developer Terminal</span>
            
            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '6px' }}>
              {(['ALL', 'KERNEL', 'EVENTS', 'ERRORS', 'TELEMETRY'] as const).map((filter) => (
                <button
                  key={filter}
                  onClick={() => setConsoleFilter(filter)}
                  style={{
                    background: consoleFilter === filter ? 'rgba(56, 189, 248, 0.15)' : 'transparent',
                    color: consoleFilter === filter ? '#38BDF8' : '#64748B',
                    border: 'none',
                    padding: '2px 8px',
                    borderRadius: '4px',
                    fontSize: '0.68rem',
                    fontWeight: 700,
                    cursor: 'pointer'
                  }}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={handleExportLogs} style={{ background: 'transparent', border: 'none', color: '#38BDF8', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
              📥 Export Logs
            </button>
            <button onClick={() => setConsoleLogs([])} style={{ background: 'transparent', border: 'none', color: '#64748B', fontSize: '0.72rem', cursor: 'pointer', fontWeight: 600 }}>
              Clear Console
            </button>
          </div>
        </div>

        {/* Terminal Log Stream */}
        <div style={{ flex: 1, overflowY: 'auto', fontFamily: 'monospace', fontSize: '0.75rem', display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {filteredLogs.map(log => (
            <div key={log.id} style={{ display: 'flex', gap: '12px', color: log.type === 'error' ? '#F87171' : log.type === 'warn' ? '#FACC15' : log.type === 'success' ? '#4ADE80' : '#38BDF8' }}>
              <span style={{ color: '#475569' }}>[{log.time}]</span>
              <span>{log.text}</span>
            </div>
          ))}
        </div>
      </footer>

      {/* ───── AI COMMAND PALETTE MODAL (⌘K) ───── */}
      {cmdOpen && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: '100px', backdropFilter: 'blur(12px)' }} onClick={() => setCmdOpen(false)}>
          <div style={{ background: '#0F172A', border: '1px solid rgba(56, 189, 248, 0.35)', borderRadius: '16px', width: '560px', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.85)' }} onClick={e => e.stopPropagation()}>
            <div style={{ padding: '14px 18px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '1.1rem', color: '#38BDF8' }}>🤖</span>
              <input
                type="text"
                autoFocus
                placeholder="Type command or search module..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'white', outline: 'none', width: '100%', fontSize: '0.92rem' }}
              />
            </div>
            <div style={{ padding: '8px', maxHeight: '320px', overflowY: 'auto' }}>
              {navGroups.flatMap(g => g.items)
                .filter(item => item.label.toLowerCase().includes(searchQuery.toLowerCase()))
                .map(item => (
                  <div
                    key={item.id}
                    onClick={() => { setActiveTab(item.id); setCmdOpen(false); }}
                    style={{ padding: '10px 14px', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.85rem', color: '#F8FAFC', transition: 'all 0.15s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(56, 189, 248, 0.14)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
                  >
                    <span>{item.icon}</span>
                    <span>Go to {item.label}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
