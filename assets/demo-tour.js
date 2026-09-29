/* Freight130 — animated product tour for the demo section.
   Rebuilt as live DOM from the master Figma file; no video, no dependencies.
   Renders inside a shadow root, so none of the landing's CSS reaches it (or vice versa).
   The icon sprite is inlined below: a shadow root cannot reference IDs in the host document.
   Needs Inter loaded by the host page; falls back to the system sans otherwise.
   Usage:  <freight-tour></freight-tour>   */
(() => {
'use strict';
const SCRIPT_URL = (document.currentScript && document.currentScript.src) || location.href;
const LOGO = new URL('f130-logo.png', SCRIPT_URL).href;

const CSS = ":host{\n  display:block; position:relative; width:100%; height:100%;\n  overflow:hidden; border-radius:inherit; contain:paint;\n  --ui:\"Inter\",system-ui,-apple-system,\"Segoe UI\",Roboto,sans-serif;\n  /* Freight130 product palette \u2014 sampled from the master Figma file */\n  --f-ink:#1d2126;\n  --f-surface:#ffffff;\n  --f-surface-2:#f9fafb;\n  --f-canvas:#fffcf9;\n  --f-line:#e5e7eb;\n  --f-line-2:#d1d5dc;\n  --f-brand:#d9822b;\n  --f-brand-deep:#b96526;\n  --f-brand-tint:#fffbf6;\n  --f-slate:#364153;\n  --f-muted:#6a7282;\n  --f-dim:#6d6d6d;\n  --f-grad:linear-gradient(180deg,#d9822b 0%,#b96526 100%);\n}\n*{box-sizing:border-box}\n.frame{position:absolute;top:0;left:0;width:1440px;height:862px;transform-origin:top left;\n  transform:scale(var(--k,1));font-family:var(--ui);color:var(--f-ink)}\n\n  .ic{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;\n      width:20px;height:20px;display:block}\n  .ic.s16{width:16px;height:16px}.ic.s18{width:18px;height:18px}.ic.s22{width:22px;height:22px}\n  .ic.s14{width:14px;height:14px;stroke-width:2.2}\n\n/* ---- browser chrome ---- */\n.chrome{height:78px;background:#f0f1f3;border-bottom:1px solid #dcdee1;\n  display:flex;flex-direction:column;justify-content:flex-end}\n.chrome-tabs{display:flex;align-items:flex-end;gap:8px;padding:0 12px;height:42px}\n.dots{display:flex;gap:8px;align-items:center;padding-bottom:12px;margin-right:6px}\n.dots i{width:12px;height:12px;border-radius:50%;display:block}\n.dots i:nth-child(1){background:#ff5f57}.dots i:nth-child(2){background:#febc2e}.dots i:nth-child(3){background:#28c840}\n.tab{display:flex;align-items:center;gap:8px;height:32px;padding:0 12px;background:#fff;\n  border-radius:8px 8px 0 0;font-size:13px;color:#3c4043;min-width:150px}\n.tab .fav{width:15px;height:15px;border-radius:3px;background:var(--f-grad);flex:none}\n.tab .x{margin-left:auto;color:#5f6368;font-size:15px;line-height:1}\n.newtab{color:#5f6368;font-size:19px;padding-bottom:8px}\n.chrome-url{display:flex;align-items:center;gap:14px;height:36px;padding:0 14px;background:#fff}\n.chrome-url svg{flex:none;color:#3c4043}\n.urlbar{flex:1;display:flex;align-items:center;gap:9px;height:26px;padding:0 11px;\n  background:#f1f3f4;border-radius:13px;font-size:13px;color:#3c4043}\n.urlbar .lock{color:#1d2126}\n.avatar-sm{width:22px;height:22px;border-radius:50%;background:linear-gradient(135deg,#7a8fa6,#4a6076);flex:none}\n\n/* ---- app shell ---- */\n.app{display:flex;height:784px;background:var(--f-canvas)}\n\n/* ---- sidebar ---- */\n.side{width:256px;flex:none;background:var(--f-ink);display:flex;flex-direction:column;\n  color:#fff;position:relative;z-index:3}\n.side-logo{padding:26px 22px 22px;display:flex;flex-direction:column;gap:5px}\n.side-logo img{width:204px;height:auto;display:block}\n.side-logo span{font-size:8px;letter-spacing:.03em;color:#cfd3d8;padding-left:40px;margin-top:-4px}\n.side-sep{height:1px;background:rgba(255,255,255,.09);margin:0 0 18px}\n.side-group{padding:0 16px}\n.side-label{font-size:11px;font-weight:600;letter-spacing:.09em;text-transform:uppercase;\n  color:var(--f-muted);padding:0 10px;margin:0 0 12px}\n.nav{display:flex;flex-direction:column;gap:10px;margin:0 0 30px}\n.nav a{display:flex;align-items:center;gap:13px;height:40px;padding:0 14px;border-radius:12px;\n  font-size:15px;color:#e7e9eb;text-decoration:none;position:relative}\n.nav a svg{flex:none;opacity:.92}\n.nav a .count{margin-left:auto;font-size:13px;font-weight:700}\n.nav a.on{background:#fff;color:var(--f-ink);font-weight:600}\n.nav a.on svg{opacity:1}\n.side-foot{margin-top:auto;border-top:1px solid rgba(255,255,255,.09);padding:20px 22px 24px;\n  display:flex;flex-direction:column;gap:22px}\n.who{display:flex;align-items:center;gap:12px}\n.who .av{width:38px;height:38px;border-radius:50%;background:#333a42;display:grid;place-items:center;\n  font-size:13px;font-weight:600;color:#fff;flex:none}\n.who b{display:block;font-size:14px;font-weight:600}\n.who small{display:block;font-size:12px;color:#9aa1a9;margin-top:1px}\n.logout{display:flex;align-items:center;gap:13px;font-size:15px;color:#e7e9eb;text-decoration:none}\n\n/* ---- main column ---- */\n.main{flex:1;min-width:0;display:flex;flex-direction:column;position:relative;overflow:hidden}\n.topbar{height:58px;flex:none;background:var(--f-surface-2);border-bottom:1px solid var(--f-line);\n  display:flex;align-items:center;padding:0 32px;gap:10px;position:relative;z-index:2}\n.crumb{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--f-dim)}\n.crumb .sep{color:#b3b7bd}\n.crumb .now{color:var(--f-ink);font-weight:500}\n.crumb .tail{display:inline-flex;align-items:center;gap:10px;overflow:hidden;white-space:nowrap}\n.top-right{margin-left:auto;display:flex;align-items:center;gap:22px;color:var(--f-dim);font-size:14px}\n.top-right .today{display:flex;align-items:center;gap:7px}\n.bell{position:relative}\n.bell::after{content:\"\";position:absolute;top:0;right:1px;width:7px;height:7px;border-radius:50%;\n  background:var(--f-brand);border:1.5px solid var(--f-surface-2)}\n\n/* ---- screens ---- */\n.screens{flex:1;min-height:0;position:relative}\n.screen{position:absolute;inset:0;overflow:hidden;background:var(--f-canvas);\n  display:flex;flex-direction:column;will-change:transform,opacity}\n\n/* ---- screen: All Shipments ---- */\n.list-head{flex:none;background:var(--f-surface);padding:28px 32px 26px;border-bottom:1px solid var(--f-line)}\n.head-row{display:flex;align-items:flex-start;gap:24px}\n.head-row h2{font-size:30px;font-weight:700;letter-spacing:-.015em;margin:0 0 6px;color:var(--f-ink)}\n.head-row p{font-size:15px;color:var(--f-dim);margin:0;max-width:24ch;line-height:1.45}\n.head-tools{margin-left:auto;display:flex;align-items:center;gap:16px;flex:none}\n.search{display:flex;align-items:center;gap:11px;width:318px;height:42px;padding:0 16px;\n  background:var(--f-surface);border:1px solid var(--f-line-2);border-radius:21px;\n  font-size:15px;color:#939393}\n.search svg{flex:none;color:#939393}\n.search .val{color:var(--f-ink)}\n.btn-primary{display:flex;align-items:center;gap:8px;height:42px;padding:0 20px;border-radius:21px;\n  background:var(--f-grad);color:#fff;font-size:15px;font-weight:600;border:0;\n  font-family:inherit;white-space:nowrap;position:relative;overflow:hidden}\n\n.stats{display:flex;flex-wrap:wrap;gap:16px;margin-top:26px}\n.stat{display:flex;align-items:center;gap:16px;width:266px;height:70px;padding:0 18px;\n  background:var(--f-surface-2);border:1px solid var(--f-line);border-radius:12px;position:relative}\n.stat .box{width:36px;height:36px;border-radius:10px;display:grid;place-items:center;flex:none;\n  background:var(--f-surface);border:1px solid var(--f-line);color:var(--f-slate)}\n.stat small{display:block;font-size:13px;color:var(--f-dim);margin-bottom:3px}\n.stat b{display:block;font-size:22px;font-weight:700;color:var(--f-ink);font-variant-numeric:tabular-nums}\n.stat.accent{background:var(--f-brand-tint);border-color:#f3dcc4}\n.stat.accent .box{background:var(--f-grad);border-color:transparent;color:#fff}\n.stat.accent b{color:var(--f-brand)}\n.stat.sel{border-color:var(--f-brand);box-shadow:0 0 0 1px var(--f-brand)}\n.stat .dot{width:11px;height:11px;border-radius:50%;background:#22c55e}\n\n.arch{display:flex;justify-content:flex-end;gap:26px;margin-top:22px;\n  font-size:15px;font-weight:600;color:var(--f-brand)}\n\n.list-body{flex:1;min-height:0;padding:30px 32px 0;overflow:hidden}\n.sec-row{display:flex;align-items:center;gap:16px;margin-bottom:24px}\n.sec-row h3{font-size:20px;font-weight:700;margin:0;color:var(--f-ink)}\n.sec-tools{margin-left:auto;display:flex;gap:12px}\n.pill{display:flex;align-items:center;gap:8px;height:38px;padding:0 17px;border-radius:19px;\n  border:1px solid var(--f-line-2);background:var(--f-surface);font-size:14px;color:var(--f-slate)}\n.cards{display:grid;grid-template-columns:1fr 1fr;gap:26px}\n.card{background:var(--f-surface);border:1px solid var(--f-line);border-radius:14px;padding:22px 24px 18px}\n.card-top{display:flex;align-items:center;margin-bottom:18px}\n.card-top .id{font-size:14px;color:var(--f-dim)}\n.card-top .id b{color:var(--f-ink);font-weight:600}\n.card-acts{margin-left:auto;display:flex;gap:16px;color:var(--f-slate)}\n.card-acts .pen{color:var(--f-brand)}\n.card h4{font-size:17px;font-weight:700;margin:0 0 14px;color:var(--f-ink)}\n.kv{display:grid;grid-template-columns:104px 1fr;row-gap:9px;font-size:14px;margin-bottom:18px}\n.kv dt{color:var(--f-dim)}\n.kv dd{margin:0;color:var(--f-ink)}\n.card-foot{display:flex;align-items:center;gap:12px;border-top:1px solid var(--f-line);padding-top:16px}\n.chip{height:28px;padding:0 13px;border-radius:14px;background:#f3f4f6;color:var(--f-slate);\n  font-size:12px;display:grid;place-items:center}\n.card-foot .btns{margin-left:auto;display:flex;gap:12px}\n.btn-ghost{height:38px;padding:0 22px;border-radius:19px;border:1px solid var(--f-brand);\n  background:var(--f-surface);color:var(--f-brand);font-size:14px;font-family:inherit}\n.btn-solid{height:38px;padding:0 22px;border-radius:19px;border:0;background:var(--f-grad);\n  color:#fff;font-size:14px;font-family:inherit}\n\n/* ---- screen: Add New Shipment ---- */\n.form-head{flex:none;background:var(--f-surface);padding:26px 32px 24px;border-bottom:1px solid var(--f-line);\n  display:flex;align-items:flex-start;gap:20px}\n.back{width:26px;height:26px;display:grid;place-items:center;color:var(--f-ink);margin-top:6px;flex:none}\n.form-head h2{font-size:28px;font-weight:700;letter-spacing:-.015em;margin:0 0 5px;color:var(--f-ink)}\n.form-head p{font-size:14px;color:var(--f-dim);margin:0}\n.form-body{flex:1;min-height:0;padding:28px 32px 0;overflow:hidden;\n  display:flex;flex-direction:column;gap:22px}\n.panel{background:var(--f-surface);border:1px solid var(--f-line);border-radius:14px;padding:24px 26px 26px}\n.panel h3{font-size:18px;font-weight:700;margin:0 0 20px;color:var(--f-ink)}\n.grid2{display:grid;grid-template-columns:1fr 1fr;gap:26px 48px}\n.field label{display:block;font-size:14px;color:var(--f-slate);margin-bottom:9px}\n.field label .req{color:var(--f-brand)}\n.inp{display:flex;align-items:center;gap:11px;height:44px;padding:0 16px;border-radius:22px;\n  border:1px solid var(--f-line-2);background:var(--f-surface);font-size:15px;color:#9aa0a6}\n.inp svg{flex:none;color:#9aa0a6}\n.inp.muted{background:var(--f-surface-2)}\n.inp .val{color:var(--f-ink)}\n.col-head{display:flex;align-items:center;margin-bottom:20px}\n.col-head h3{margin:0}\n.toggle-row{margin-left:auto;display:flex;align-items:center;gap:11px;font-size:14px;color:var(--f-slate)}\n.tgl{width:42px;height:23px;border-radius:12px;background:var(--f-line-2);position:relative;flex:none;\n  transition:background .3s cubic-bezier(.4,0,.2,1)}\n.tgl i{position:absolute;top:2.5px;left:2.5px;width:18px;height:18px;border-radius:50%;background:#fff;\n  box-shadow:0 1px 3px rgba(0,0,0,.25);transition:transform .34s cubic-bezier(.34,1.4,.5,1)}\n.tgl.on{background:var(--f-brand)}\n.tgl.on i{transform:translateX(19px)}\n.cols{display:grid;grid-template-columns:1fr 1fr;gap:0 46px}\n.cols>div:first-child{padding-right:46px;border-right:1px solid var(--f-line)}\n.stack{display:flex;flex-direction:column;gap:18px}\n\n/* ---- screen: Shipment Details ---- */\n.det-head{flex:none;background:var(--f-surface);border-bottom:1px solid var(--f-line);\n  padding:26px 32px 22px;display:flex;align-items:flex-start;gap:20px}\n.det-head .back{margin-top:4px}\n.det-title{min-width:0}\n.det-title .row{display:flex;align-items:center;gap:14px;margin-bottom:8px}\n.det-title h2{font-size:27px;font-weight:700;letter-spacing:-.015em;margin:0;color:var(--f-ink)}\n.stat-chip{height:28px;padding:0 15px;border-radius:14px;background:#fff7ed;border:1px solid var(--f-brand);\n  color:var(--f-brand);font-size:14px;display:grid;place-items:center}\n.det-title p{font-size:14px;color:var(--f-dim);margin:0 0 3px}\n.det-title .hist{display:inline-block;margin-top:8px;font-size:14px;font-weight:600;color:var(--f-brand)}\n.det-acts{margin-left:auto;display:flex;align-items:center;gap:20px;color:var(--f-slate);flex:none}\n.det-acts .pen{color:var(--f-brand)}\n.btn-arch{display:flex;align-items:center;gap:8px;height:38px;padding:0 17px;border-radius:19px;\n  border:1px solid #ffa2a2;background:var(--f-surface);color:#e7000b;font-size:14px;font-family:inherit}\n\n.det-body{flex:1;min-height:0;overflow:hidden}\n.det-scroll{padding:24px 32px 32px;will-change:transform}\n.det-cols{display:grid;grid-template-columns:1fr 378px;gap:28px;align-items:start}\n.det-main,.det-side{display:flex;flex-direction:column;gap:22px;min-width:0}\n.card2{background:var(--f-surface);border:1px solid var(--f-line);border-radius:14px;padding:22px 24px}\n.card2 h5{font-size:13px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;\n  color:var(--f-slate);margin:0 0 18px}\n.select{display:flex;align-items:center;height:48px;padding:0 20px;border-radius:24px;\n  border:1px solid var(--f-brand);background:#fff7ed;color:var(--f-brand);font-size:16px;font-weight:600}\n.select svg{margin-left:auto}\n.prog{display:flex;gap:6px;margin:22px 0 10px}\n.prog i{height:7px;border-radius:4px;background:var(--f-line);flex:1;position:relative;overflow:hidden}\n.prog i::after{content:\"\";position:absolute;inset:0;background:var(--f-brand);\n  transform-origin:left center;transform:scaleX(var(--f,0))}\n.prog-lbl{display:flex;font-size:13px;color:var(--f-dim)}\n.prog-lbl span{flex:1}\n.prog-lbl span:nth-child(2){text-align:center}\n.prog-lbl span:last-child{text-align:right}\n\n.leg{display:flex;flex-direction:column}\n.leg-row{display:flex;gap:16px}\n.leg-dot{width:30px;height:30px;border-radius:50%;background:#ffedd4;display:grid;place-items:center;\n  color:var(--f-brand);flex:none}\n.leg-tx small{display:block;font-size:12px;font-weight:600;letter-spacing:.07em;text-transform:uppercase;\n  color:var(--f-dim);margin-bottom:5px}\n.leg-tx b{display:block;font-size:16px;font-weight:600;color:var(--f-ink);margin-bottom:7px}\n.leg-meta{display:flex;gap:18px;font-size:13px;color:var(--f-dim)}\n.leg-meta span{display:flex;align-items:center;gap:6px}\n.leg-line{width:2px;height:34px;background:var(--f-line-2);margin:6px 0 6px 14px}\n\n.rows{display:flex;flex-direction:column;gap:14px;margin:0;font-size:14px}\n.rows div{display:flex;align-items:baseline;gap:16px}\n.rows dt{color:var(--f-dim);margin:0}\n.rows dd{margin:0 0 0 auto;color:var(--f-ink);font-weight:600;text-align:right}\n\n.map{height:330px;border-radius:14px;background:#edeef1;border:1px solid var(--f-line);\n  display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;position:relative}\n.map b{font-size:15px;font-weight:600;color:var(--f-slate)}\n.map small{font-size:13px;color:#9aa0a6}\n.map .pin{color:var(--f-brand);margin-bottom:4px}\n.map svg.route{position:absolute;inset:0;width:100%;height:100%}\n.kpi{display:flex;align-items:center;gap:15px;background:var(--f-surface);border:1px solid var(--f-line);\n  border-radius:14px;padding:16px 20px}\n.kpi .disc{width:38px;height:38px;border-radius:50%;background:#ffedd4;display:grid;place-items:center;\n  color:var(--f-brand);flex:none}\n.kpi small{display:block;font-size:13px;color:var(--f-dim);margin-bottom:3px}\n.kpi b{display:block;font-size:18px;font-weight:700;color:var(--f-ink)}\n\n.btn-dl{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;height:46px;\n  border-radius:23px;border:0;background:var(--f-grad);color:#fff;font-size:15px;font-weight:600;\n  font-family:inherit;margin-bottom:14px}\n.doc{display:flex;align-items:center;gap:12px;height:48px;padding:0 16px;border-radius:12px;\n  background:var(--f-surface-2);font-size:14px;color:var(--f-ink);margin-bottom:10px}\n.doc .dl{margin-left:auto;color:var(--f-slate)}\n.doc .ico{color:var(--f-slate)}\n\n.chat{padding:0;overflow:hidden}\n.chat-tabs{display:flex;border-bottom:1px solid var(--f-line)}\n.chat-tabs span{flex:1;display:flex;align-items:center;justify-content:center;gap:8px;height:52px;\n  font-size:14px;color:var(--f-dim)}\n.chat-tabs span.on{color:var(--f-brand);font-weight:600;background:#fffaf5;\n  box-shadow:inset 0 -2px 0 var(--f-brand)}\n.chat-note{background:#fffaf5;padding:14px 18px;border-bottom:1px solid var(--f-line)}\n.chat-note b{display:inline-flex;align-items:center;gap:7px;height:26px;padding:0 12px;border-radius:13px;\n  background:#ffedd4;color:var(--f-brand);font-size:12.5px;font-weight:600}\n.chat-note small{display:flex;align-items:center;gap:6px;font-size:12.5px;color:var(--f-brand);margin-top:8px}\n.msgs{display:flex;flex-direction:column;gap:12px;padding:18px}\n.msg{max-width:86%;border:1px solid var(--f-line);border-radius:12px;padding:12px 14px;font-size:14px;\n  line-height:1.45;color:var(--f-ink);background:var(--f-surface)}\n.msg b{display:block;font-size:13px;font-weight:600;color:var(--f-slate);margin-bottom:5px}\n.msg time{display:block;font-size:12px;color:var(--f-dim);margin-top:6px}\n.msg.mine{margin-left:auto;background:var(--f-grad);border-color:transparent;color:#fff}\n.msg.mine time{color:rgba(255,255,255,.82)}\n.chat-in{display:flex;align-items:center;gap:12px;padding:0 18px 18px}\n.chat-in .box{flex:1;min-width:0;height:44px;border-radius:22px;border:1px solid var(--f-line-2);\n  display:flex;align-items:center;padding:0 16px;font-size:14px;color:#9aa0a6}\n.chat-in .send{width:44px;height:44px;border-radius:50%;background:var(--f-grad);color:#fff;\n  display:grid;place-items:center;flex:none}\n\n/* ---- screen: My Companies ---- */\n.co-head{flex:none;background:var(--f-surface);border-bottom:1px solid var(--f-line);padding:28px 32px 26px;\n  display:flex;align-items:flex-start;gap:22px}\n.co-head h2{font-size:30px;font-weight:700;letter-spacing:-.015em;margin:0 0 6px;color:var(--f-ink)}\n.co-head p{font-size:15px;color:var(--f-dim);margin:0}\n.co-tools{margin-left:auto;display:flex;align-items:center;gap:14px;flex:none}\n.co-sort{display:flex;align-items:center;gap:10px;height:42px;padding:0 18px;border-radius:21px;\n  border:1px solid var(--f-line-2);background:var(--f-surface);font-size:15px;color:var(--f-slate)}\n.btn-out{display:flex;align-items:center;gap:9px;height:42px;padding:0 19px;border-radius:21px;\n  border:1px solid var(--f-brand);background:var(--f-surface);color:var(--f-brand);\n  font-size:15px;font-weight:600;font-family:inherit}\n\n.co-body{flex:1;min-height:0;padding:26px 32px 0;overflow:hidden}\n.co-table{background:var(--f-surface);border:1px solid var(--f-line);border-radius:14px;overflow:hidden}\n.co-row{display:grid;grid-template-columns:1.06fr .86fr 1.24fr .98fr .66fr 172px;align-items:center;\n  gap:18px;padding:0 24px;height:56px}\n.co-row+.co-row{border-top:1px solid var(--f-line)}\n.co-head-row{height:50px;font-size:12.5px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;\n  color:var(--f-dim);border-bottom:1px solid var(--f-line)}\n.co-row .nm{display:flex;align-items:center;gap:9px;font-size:15px;font-weight:600;color:var(--f-ink)}\n.co-row .nm svg{color:var(--f-brand);flex:none}\n.co-row .cell{font-size:14.5px;color:var(--f-dim);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n.co-row .cell.link{color:var(--f-brand);font-weight:500}\n.pillst{height:26px;padding:0 13px;border-radius:13px;font-size:13px;display:inline-grid;place-items:center;\n  justify-self:start}\n.pillst.on{background:#f0fcf4;border:1px solid #bbe8cc;color:#1a7f45}\n.pillst.off{background:#f3f4f6;border:1px solid var(--f-line-2);color:var(--f-slate)}\n.co-acts{display:flex;align-items:center;gap:10px;justify-self:end}\n.btn-view{height:34px;padding:0 19px;border-radius:17px;border:0;background:var(--f-grad);color:#fff;\n  font-size:14px;font-weight:600;font-family:inherit}\n.iconbtn{width:34px;height:34px;border-radius:50%;border:1px solid #f0d5bf;background:var(--f-surface);\n  color:var(--f-brand);display:grid;place-items:center;flex:none}\n.co-page{display:flex;align-items:center;justify-content:center;gap:10px;padding:22px 0 0;\n  font-size:14px;color:var(--f-slate)}\n.co-page i{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;color:var(--f-dim)}\n.co-page b{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;\n  background:var(--f-grad);color:#fff;font-weight:600}\n.co-page s{width:32px;height:32px;border-radius:50%;display:grid;place-items:center;text-decoration:none}\n\n/* ---- synthetic cursor + click feedback ---- */\n.cursor{position:absolute;top:0;left:0;width:22px;height:22px;margin:-.92px 0 0 -.92px;z-index:60;pointer-events:none;\n  will-change:transform,opacity;filter:drop-shadow(0 2px 4px rgba(0,0,0,.28))}\n.ripple{position:absolute;width:12px;height:12px;margin:-6px 0 0 -6px;border-radius:50%;\n  border:1.5px solid var(--f-brand);box-sizing:border-box;z-index:59;pointer-events:none;opacity:0}\n.caret{display:inline-block;width:1.5px;height:1.05em;background:var(--f-brand);\n  vertical-align:-.16em;margin-left:1px;opacity:0}\n.caret.blink{animation:bl .9s steps(1,end) infinite}\n@keyframes bl{0%,50%{opacity:1}50.01%,100%{opacity:0}}\n.flash{position:relative;overflow:hidden}\n.flash::after{content:\"\";position:absolute;inset:0;border-radius:inherit;pointer-events:none;\n  background:linear-gradient(105deg,transparent 38%,rgba(217,130,43,.26) 50%,transparent 62%);\n  transform:translateX(-110%)}\n.flash.go::after{animation:sh .85s ease-out}\n@keyframes sh{to{transform:translateX(110%)}}\n";
const MARKUP = "<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><defs>\n<g id=\"i-package\"><path d=\"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z\"/><path d=\"M12 22V12\"/><path d=\"M3.29 7 12 12l8.71-5\"/><path d=\"m7.5 4.27 9 5\"/></g>\n<g id=\"i-truck\"><path d=\"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2\"/><path d=\"M15 18H9\"/><path d=\"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14\"/><circle cx=\"17\" cy=\"18\" r=\"2\"/><circle cx=\"7\" cy=\"18\" r=\"2\"/></g>\n<g id=\"i-users\"><path d=\"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2\"/><circle cx=\"9\" cy=\"7\" r=\"4\"/><path d=\"M22 21v-2a4 4 0 0 0-3-3.87\"/><path d=\"M16 3.13a4 4 0 0 1 0 7.75\"/></g>\n<g id=\"i-star\"><path d=\"M11.53 3.47a.5.5 0 0 1 .94 0l2.17 4.77 5.22.6a.5.5 0 0 1 .29.86l-3.88 3.54 1.04 5.15a.5.5 0 0 1-.74.53L12 16.3l-4.57 2.62a.5.5 0 0 1-.74-.53l1.04-5.15-3.88-3.54a.5.5 0 0 1 .29-.86l5.22-.6z\"/></g>\n<g id=\"i-file\"><path d=\"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z\"/><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M16 13H8\"/><path d=\"M16 17H8\"/><path d=\"M10 9H8\"/></g>\n<g id=\"i-chart\"><path d=\"M3 3v16a2 2 0 0 0 2 2h16\"/><path d=\"M7 16v-4\"/><path d=\"M12 16V9\"/><path d=\"M17 16v-7\"/></g>\n<g id=\"i-gear\"><path d=\"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>\n<g id=\"i-logout\"><path d=\"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/><path d=\"m16 17 5-5-5-5\"/><path d=\"M21 12H9\"/></g>\n<g id=\"i-search\"><circle cx=\"11\" cy=\"11\" r=\"8\"/><path d=\"m21 21-4.3-4.3\"/></g>\n<g id=\"i-bell\"><path d=\"M10.268 21a2 2 0 0 0 3.464 0\"/><path d=\"M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326\"/></g>\n<g id=\"i-cal\"><path d=\"M8 2v4\"/><path d=\"M16 2v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/></g>\n<g id=\"i-pin\"><path d=\"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0\"/><circle cx=\"12\" cy=\"10\" r=\"3\"/></g>\n<g id=\"i-clock\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 6v6l4 2\"/></g>\n<g id=\"i-funnel\"><path d=\"M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z\"/></g>\n<g id=\"i-sort\"><path d=\"m21 16-4 4-4-4\"/><path d=\"M17 20V4\"/><path d=\"m3 8 4-4 4 4\"/><path d=\"M7 4v16\"/></g>\n<g id=\"i-pen\"><path d=\"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7\"/><path d=\"M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z\"/></g>\n<g id=\"i-plus\"><path d=\"M5 12h14\"/><path d=\"M12 5v14\"/></g>\n<g id=\"i-back\"><path d=\"m12 19-7-7 7-7\"/><path d=\"M19 12H5\"/></g>\n<g id=\"i-lock\"><rect width=\"14\" height=\"10\" x=\"5\" y=\"11\" rx=\"2\"/><path d=\"M8 11V7a4 4 0 0 1 8 0v4\"/></g>\n<g id=\"i-reload\"><path d=\"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5\"/><path d=\"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/></g>\n<g id=\"i-home\"><path d=\"M3 10.5 12 3l9 7.5\"/><path d=\"M5 9.5V20a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9.5\"/></g>\n<g id=\"i-play\"><path d=\"m7 4 13 8-13 8z\" fill=\"currentColor\" stroke=\"none\"/></g>\n<g id=\"i-pause\"><path d=\"M7 4h4v16H7zM13 4h4v16h-4z\" fill=\"currentColor\" stroke=\"none\"/></g>\n<g id=\"i-copy\"><rect width=\"14\" height=\"14\" x=\"8\" y=\"8\" rx=\"2\"/><path d=\"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2\"/></g>\n<g id=\"i-archive\"><rect width=\"20\" height=\"5\" x=\"2\" y=\"4\" rx=\"2\"/><path d=\"M4 9v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9\"/><path d=\"M10 13h4\"/></g>\n<g id=\"i-chev-d\"><path d=\"m6 9 6 6 6-6\"/></g>\n<g id=\"i-download\"><path d=\"M12 15V3\"/><path d=\"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4\"/><path d=\"m7 10 5 5 5-5\"/></g>\n<g id=\"i-nav\"><path d=\"m3 11 19-9-9 19-2-8z\"/></g>\n<g id=\"i-send\"><path d=\"M14.54 4.54 20 10l-5.46 5.46\"/><path d=\"m22 2-11 11\"/><path d=\"M22 2 15 22l-4-9-9-4z\"/></g>\n<g id=\"i-globe\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20\"/><path d=\"M2 12h20\"/></g>\n<g id=\"i-eye\"><path d=\"M2.06 12.35a1 1 0 0 1 0-.7 10.75 10.75 0 0 1 19.88 0 1 1 0 0 1 0 .7 10.75 10.75 0 0 1-19.88 0\"/><circle cx=\"12\" cy=\"12\" r=\"3\"/></g>\n<g id=\"i-receipt\"><path d=\"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z\"/><path d=\"M8 8h8\"/><path d=\"M8 12h6\"/></g>\n<g id=\"i-clip\"><rect width=\"8\" height=\"4\" x=\"8\" y=\"2\" rx=\"1\"/><path d=\"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2\"/></g>\n<g id=\"i-trash\"><path d=\"M3 6h18\"/><path d=\"M8 6V4a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2\"/><path d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6\"/><path d=\"M10 11v6\"/><path d=\"M14 11v6\"/></g>\n<g id=\"i-chev-r\"><path d=\"m9 18 6-6-6-6\"/></g>\n<g id=\"i-house\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></g>\n<g id=\"i-restart\"><path d=\"M3 12a9 9 0 1 0 3-6.7L3 8\"/><path d=\"M3 3v5h5\"/></g>\n</defs></svg><div class=\"frame\" id=\"frame\">\n\n        <div class=\"chrome\">\n          <div class=\"chrome-tabs\">\n            <span class=\"dots\"><i></i><i></i><i></i></span>\n            <span class=\"tab\"><span class=\"fav\"></span>Freight130<span class=\"x\">&times;</span></span>\n            <span class=\"newtab\">+</span>\n          </div>\n          <div class=\"chrome-url\">\n            <svg class=\"ic s18\" style=\"opacity:.45\"><use href=\"#i-back\"/></svg>\n            <svg class=\"ic s18\" style=\"opacity:.28;transform:scaleX(-1)\"><use href=\"#i-back\"/></svg>\n            <svg class=\"ic s18\" style=\"opacity:.45\"><use href=\"#i-reload\"/></svg>\n            <svg class=\"ic s18\" style=\"opacity:.45\"><use href=\"#i-home\"/></svg>\n            <span class=\"urlbar\"><svg class=\"ic s14 lock\"><use href=\"#i-lock\"/></svg>freight130.com/shipments</span>\n            <span class=\"avatar-sm\"></span>\n          </div>\n        </div>\n\n        <div class=\"app\">\n          <aside class=\"side\" id=\"side\">\n            <div class=\"side-logo\">\n              <img src=\"__LOGO__\" alt=\"Freight130\">\n              <span>Cloud-Based Freight Management</span>\n            </div>\n            <div class=\"side-sep\"></div>\n            <div class=\"side-group\">\n              <p class=\"side-label\">Main menu</p>\n              <nav class=\"nav\" id=\"nav1\">\n                <a href=\"#\" class=\"on\"><svg class=\"ic\"><use href=\"#i-package\"/></svg>Shipments<span class=\"count\">24</span></a>\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-truck\"/></svg>Carriers</a>\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-users\"/></svg>Companies</a>\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-star\"/></svg>Favorites</a>\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-file\"/></svg>Quotes</a>\n              </nav>\n              <p class=\"side-label\">Tools</p>\n              <nav class=\"nav\" id=\"nav2\">\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-chart\"/></svg>Analytics</a>\n                <a href=\"#\"><svg class=\"ic\"><use href=\"#i-gear\"/></svg>Settings</a>\n              </nav>\n            </div>\n            <div class=\"side-foot\">\n              <div class=\"who\"><span class=\"av\">JD</span><span><b>John Doe</b><small>Admin</small></span></div>\n              <a href=\"#\" class=\"logout\"><svg class=\"ic\"><use href=\"#i-logout\"/></svg>Logout</a>\n            </div>\n          </aside>\n\n          <div class=\"main\">\n            <div class=\"topbar\">\n              <div class=\"crumb\">\n                <span>Home</span><span class=\"sep\">&rsaquo;</span>\n                <span class=\"now\" id=\"crumbA\">Shipments</span>\n                <span class=\"tail\" id=\"crumbB\" style=\"width:0\"><span class=\"sep\">&rsaquo;</span><span class=\"now\" id=\"crumbTxt\">Shipment Details</span></span>\n              </div>\n              <div class=\"top-right\">\n                <span class=\"today\" id=\"today\"><svg class=\"ic s18\"><use href=\"#i-cal\"/></svg>Today</span>\n                <span class=\"bell\"><svg class=\"ic s22\"><use href=\"#i-bell\"/></svg></span>\n              </div>\n            </div>\n            <div class=\"screens\" id=\"screens\">\n\n<section class=\"screen\" id=\"scList\">\n  <div class=\"list-head\">\n    <div class=\"head-row\">\n      <div id=\"lh\">\n        <h2>All Shipments</h2>\n        <p>Manage and track your shipments in real-time</p>\n      </div>\n      <div class=\"head-tools\">\n        <span class=\"search\" id=\"search\"><svg class=\"ic s18\"><use href=\"#i-search\"/></svg><span class=\"ph\" id=\"searchPh\">Search shipments&hellip;</span><span class=\"val\" id=\"searchVal\"></span><i class=\"caret\" id=\"searchCaret\"></i></span>\n        <button class=\"btn-primary\" id=\"btnNew\"><svg class=\"ic s18\"><use href=\"#i-plus\"/></svg>New Shipment</button>\n      </div>\n    </div>\n    <div class=\"stats\" id=\"stats\">\n        <div class=\"stat accent\"><span class=\"box\"><svg class=\"ic s18\"><use href=\"#i-package\"/></svg></span><span><small>Active</small><b data-to=\"24\">0</b></span></div>\n        <div class=\"stat\"><span class=\"box\"><svg class=\"ic s18\"><use href=\"#i-cal\"/></svg></span><span><small>Unscheduled</small><b data-to=\"12\">0</b></span></div>\n        <div class=\"stat\"><span class=\"box\"><svg class=\"ic s18\"><use href=\"#i-cal\"/></svg></span><span><small>Scheduled</small><b data-to=\"12\">0</b></span></div>\n        <div class=\"stat\"><span class=\"box\"><svg class=\"ic s18\"><use href=\"#i-truck\"/></svg></span><span><small>In Transit</small><b data-to=\"18\">0</b></span></div>\n        <div class=\"stat\"><span class=\"box\"><span class=\"dot\"></span></span><span><small>Completed</small><b data-to=\"156\">0</b></span></div>\n      </div>\n    <div class=\"arch\" id=\"arch\"><span>Archived</span><span>Deleted</span></div>\n  </div>\n  <div class=\"list-body\">\n    <div class=\"sec-row\" id=\"secRow\">\n      <h3 id=\"secTitle\">Unscheduled</h3>\n      <div class=\"sec-tools\">\n        <span class=\"pill\"><svg class=\"ic s16\"><use href=\"#i-funnel\"/></svg>Filters</span>\n        <span class=\"pill\"><svg class=\"ic s16\"><use href=\"#i-sort\"/></svg>Sort by</span>\n      </div>\n    </div>\n    <div class=\"cards\" id=\"cards\">\n      <article class=\"card\">\n        <div class=\"card-top\"><span class=\"id\">ID: <b>00987</b></span>\n          <span class=\"card-acts\"><svg class=\"ic s18\"><use href=\"#i-cal\"/></svg><svg class=\"ic s18 pen\"><use href=\"#i-pen\"/></svg></span></div>\n        <h4>Colorado Bikers Shipment</h4>\n        <dl class=\"kv\"><dt>Origin:</dt><dd>St Louis, MO, 63115</dd>\n          <dt>Destination:</dt><dd>Lancaster, NY, 14086</dd>\n          <dt>Ship Date:</dt><dd>5/24/2022</dd>\n          <dt>Exp. Delivery:</dt><dd>5/25/2022</dd></dl>\n        <div class=\"card-foot\"><span class=\"chip\">Unscheduled</span>\n          <span class=\"btns\"><button class=\"btn-ghost\">Cancel</button><button class=\"btn-solid\">Details</button></span></div>\n      </article>\n      <article class=\"card\">\n        <div class=\"card-top\"><span class=\"id\">ID: <b>00988</b></span>\n          <span class=\"card-acts\"><svg class=\"ic s18\"><use href=\"#i-cal\"/></svg><svg class=\"ic s18 pen\"><use href=\"#i-pen\"/></svg></span></div>\n        <h4>Midwest Pallet Run</h4>\n        <dl class=\"kv\"><dt>Origin:</dt><dd>Kansas City, MO, 64108</dd>\n          <dt>Destination:</dt><dd>Columbus, OH, 43215</dd>\n          <dt>Ship Date:</dt><dd>5/26/2022</dd>\n          <dt>Exp. Delivery:</dt><dd>5/28/2022</dd></dl>\n        <div class=\"card-foot\"><span class=\"chip\">Unscheduled</span>\n          <span class=\"btns\"><button class=\"btn-ghost\">Cancel</button><button class=\"btn-solid\">Details</button></span></div>\n      </article>\n    </div>\n  </div>\n</section>\n\n<section class=\"screen\" id=\"scDetail\">\n  <div class=\"det-head\">\n    <span class=\"back\"><svg class=\"ic s22\"><use href=\"#i-back\"/></svg></span>\n    <div class=\"det-title\">\n      <div class=\"row\"><h2>Shipment ID 00987</h2><span class=\"stat-chip\">In Transit</span></div>\n      <p>Created by John Davis on Feb 20, 2026</p>\n      <p>Last updated: Feb 24, 2026 at 10:30&nbsp;AM</p>\n      <a class=\"hist\" href=\"#\">View History</a>\n    </div>\n    <div class=\"det-acts\">\n      <svg class=\"ic s18\"><use href=\"#i-copy\"/></svg>\n      <svg class=\"ic s18\"><use href=\"#i-star\"/></svg>\n      <svg class=\"ic s18 pen\"><use href=\"#i-pen\"/></svg>\n      <button class=\"btn-arch\"><svg class=\"ic s16\"><use href=\"#i-archive\"/></svg>Archive</button>\n    </div>\n  </div>\n\n  <div class=\"det-body\">\n    <div class=\"det-scroll\" id=\"detScroll\">\n      <div class=\"det-cols\">\n        <div class=\"det-main\">\n\n          <div class=\"card2\" id=\"dStatus\">\n            <h5>Shipment status</h5>\n            <div class=\"select\">In Transit<svg class=\"ic s18\"><use href=\"#i-chev-d\"/></svg></div>\n            <div class=\"prog\"><i id=\"p1\"></i><i id=\"p2\"></i><i id=\"p3\"></i></div>\n            <div class=\"prog-lbl\"><span>Scheduled</span><span>In Transit</span><span>Delivered</span></div>\n          </div>\n\n          <div class=\"card2\" id=\"dRoute\">\n            <h5>Route overview</h5>\n            <div class=\"leg\">\n              <div class=\"leg-row\">\n                <span class=\"leg-dot\"><svg class=\"ic s16\"><use href=\"#i-pin\"/></svg></span>\n                <span class=\"leg-tx\"><small>Origin</small><b>St Louis, MO 63115</b>\n                  <span class=\"leg-meta\">\n                    <span><svg class=\"ic s14\"><use href=\"#i-cal\"/></svg>5/24/2022</span>\n                    <span><svg class=\"ic s14\"><use href=\"#i-clock\"/></svg>8:00 AM</span></span></span>\n              </div>\n              <div class=\"leg-line\"></div>\n              <div class=\"leg-row\">\n                <span class=\"leg-dot\"><svg class=\"ic s16\"><use href=\"#i-pin\"/></svg></span>\n                <span class=\"leg-tx\"><small>Destination</small><b>Lancaster, NY 14086</b>\n                  <span class=\"leg-meta\">\n                    <span><svg class=\"ic s14\"><use href=\"#i-cal\"/></svg>5/25/2022</span>\n                    <span><svg class=\"ic s14\"><use href=\"#i-clock\"/></svg>3:00 PM</span></span></span>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"card2\" id=\"dDetails\">\n            <h5>Shipment details</h5>\n            <dl class=\"rows\">\n              <div><dt>Carrier</dt><dd>ABC Freight Lines</dd></div>\n              <div><dt>Rate</dt><dd>$1,250.00</dd></div>\n              <div><dt>Description</dt><dd>Colorado Bikers Shipment &mdash; Motorcycle Parts</dd></div>\n              <div><dt>Distance</dt><dd>842 miles</dd></div>\n              <div><dt>Service Level</dt><dd>Standard Ground</dd></div>\n            </dl>\n          </div>\n\n          <div class=\"card2\" id=\"dLoad\">\n            <h5>Load specifications</h5>\n            <dl class=\"rows\">\n              <div><dt>Hazardous</dt><dd>No</dd></div>\n              <div><dt>Weight</dt><dd>2,500 lbs</dd></div>\n              <div><dt>Shipment Type</dt><dd>LTL (Less Than Truckload)</dd></div>\n            </dl>\n          </div>\n\n          <div class=\"card2\" id=\"dCosts\">\n            <h5>Additional costs</h5>\n            <dl class=\"rows\">\n              <div><dt>Fuel Surcharge</dt><dd>$125.00</dd></div>\n              <div><dt>Other Fees</dt><dd>$45.00</dd></div>\n            </dl>\n          </div>\n        </div>\n\n        <div class=\"det-side\">\n          <div class=\"map\" id=\"dMap\">\n            <svg class=\"route\" viewBox=\"0 0 378 330\" aria-hidden=\"true\">\n              <line x1=\"115\" y1=\"120\" x2=\"228\" y2=\"155\" stroke=\"#d9822b\" stroke-width=\"2\"/>\n              <circle cx=\"115\" cy=\"120\" r=\"6\" fill=\"#d9822b\"/>\n              <circle cx=\"228\" cy=\"155\" r=\"6\" fill=\"#d9822b\"/>\n            </svg>\n            <span class=\"pin\"><svg class=\"ic s22\"><use href=\"#i-pin\"/></svg></span>\n            <b>Route Map</b>\n            <small>St Louis, MO &rarr; Lancaster, NY</small>\n          </div>\n\n          <div class=\"kpi\" id=\"dDist\">\n            <span class=\"disc\"><svg class=\"ic s18\"><use href=\"#i-nav\"/></svg></span>\n            <span><small>Total Distance</small><b>842 miles</b></span>\n          </div>\n          <div class=\"kpi\" id=\"dEta\">\n            <span class=\"disc\"><svg class=\"ic s18\"><use href=\"#i-pin\"/></svg></span>\n            <span><small>ETA</small><b>Tomorrow, 3:00 PM</b></span>\n          </div>\n\n          <div class=\"card2\" id=\"dDocs\">\n            <h5>Documents</h5>\n            <button class=\"btn-dl\"><svg class=\"ic s18\"><use href=\"#i-download\"/></svg>Download Freight Confirmation</button>\n            <div class=\"doc\"><svg class=\"ic s18 ico\"><use href=\"#i-receipt\"/></svg>Invoice<svg class=\"ic s18 dl\"><use href=\"#i-download\"/></svg></div>\n            <div class=\"doc\"><svg class=\"ic s18 ico\"><use href=\"#i-clip\"/></svg>Bill of Lading (BOL)<svg class=\"ic s18 dl\"><use href=\"#i-download\"/></svg></div>\n            <div class=\"doc\"><svg class=\"ic s18 ico\"><use href=\"#i-file\"/></svg>Proof of Delivery (POD)<svg class=\"ic s18 dl\"><use href=\"#i-download\"/></svg></div>\n          </div>\n\n          <div class=\"card2 chat\" id=\"dChat\">\n            <div class=\"chat-tabs\">\n              <span class=\"on\"><svg class=\"ic s16\"><use href=\"#i-users\"/></svg>Team &amp; Carrier</span>\n              <span><svg class=\"ic s16\"><use href=\"#i-lock\"/></svg>Internal Team Only</span>\n            </div>\n            <div class=\"chat-note\">\n              <b><svg class=\"ic s14\"><use href=\"#i-globe\"/></svg>Visible to Team &amp; Carrier</b>\n              <small><svg class=\"ic s14\"><use href=\"#i-eye\"/></svg>Carrier can read this message</small>\n            </div>\n            <div class=\"msgs\">\n              <div class=\"msg\" id=\"m1\"><b>Sarah Johnson</b>The shipment has been picked up and is on schedule.<time>10:30 AM</time></div>\n              <div class=\"msg mine\" id=\"m2\">Great! Please keep me updated on the progress.<time>10:45 AM</time></div>\n              <div class=\"msg\" id=\"m3\"><b>Carrier (ABC Logistics)</b>Delivery is expected by 3:00 PM tomorrow.<time>11:02 AM</time></div>\n              <div class=\"msg mine\" id=\"m4\">Thanks &mdash; please confirm the POD at delivery.<time>11:04 AM</time></div>\n            </div>\n            <div class=\"chat-in\">\n              <span class=\"box\" id=\"chatIn\"><span class=\"ph\">Message team and carrier&hellip;</span><span class=\"val\"></span><i class=\"caret\"></i></span>\n              <span class=\"send\"><svg class=\"ic s18\"><use href=\"#i-send\"/></svg></span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"screen\" id=\"scCo\">\n  <div class=\"co-head\">\n    <div id=\"coTitle\">\n      <h2>My Companies</h2>\n      <p>Manage and view your registered companies</p>\n    </div>\n    <div class=\"co-tools\" id=\"coTools\">\n      <span class=\"search\" style=\"width:304px\"><svg class=\"ic s18\"><use href=\"#i-search\"/></svg><span class=\"ph\">Search companies&hellip;</span></span>\n      <span class=\"co-sort\">Sort by<svg class=\"ic s18\"><use href=\"#i-chev-d\"/></svg></span>\n      <button class=\"btn-out\"><svg class=\"ic s18\"><use href=\"#i-download\"/></svg>CSV Template</button>\n      <button class=\"btn-primary\"><svg class=\"ic s18\"><use href=\"#i-plus\"/></svg>Add Company</button>\n    </div>\n  </div>\n  <div class=\"co-body\">\n    <div class=\"co-table\" id=\"coTable\">\n      <div class=\"co-row co-head-row\">\n        <span>Company name</span><span>Location</span><span>Email</span>\n        <span>Phone</span><span>Status</span><span style=\"justify-self:end\">Actions</span>\n      </div>\n        <div class=\"co-row\" id=\"cr1\">\n          <span class=\"nm\">ABC Logistics Inc.<svg class=\"ic s16\"><use href=\"#i-house\"/></svg></span>\n          <span class=\"cell\">Location A</span>\n          <span class=\"cell\">contact@abclogistics.com</span>\n          <span class=\"cell\">+1 456.000.1114</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr2\">\n          <span class=\"nm\">Mountain Freight</span>\n          <span class=\"cell\">Location B</span>\n          <span class=\"cell\">info@mountainfreight.com</span>\n          <span class=\"cell\">+1 456.000.2225</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr3\">\n          <span class=\"nm\">Coastal Shipping Co.</span>\n          <span class=\"cell link\">2 Locations</span>\n          <span class=\"cell\">sales@coastalship.com</span>\n          <span class=\"cell\">+1 456.000.2225</span>\n          <span class=\"pillst off\">Inactive</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr4\">\n          <span class=\"nm\">Rapid Transport LLC</span>\n          <span class=\"cell\">Location Name</span>\n          <span class=\"cell\">contact@rapidtransport.com</span>\n          <span class=\"cell\">+1 456.000.2225</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr5\">\n          <span class=\"nm\">Global Trade Partners</span>\n          <span class=\"cell\">Location Name</span>\n          <span class=\"cell\">hello@globaltrade.com</span>\n          <span class=\"cell\">+1 456.000.5558</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr6\">\n          <span class=\"nm\">Nordic Freight Group</span>\n          <span class=\"cell\">Location Name</span>\n          <span class=\"cell\">ops@nordicfreight.com</span>\n          <span class=\"cell\">+1 456.000.5558</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n        <div class=\"co-row\" id=\"cr7\">\n          <span class=\"nm\">Harbor Point Logistics</span>\n          <span class=\"cell\">Location Name</span>\n          <span class=\"cell\">team@harborpoint.com</span>\n          <span class=\"cell\">+1 456.000.5558</span>\n          <span class=\"pillst on\">Active</span>\n          <span class=\"co-acts\"><button class=\"btn-view\">View</button>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-pen\"/></svg></span>\n            <span class=\"iconbtn\"><svg class=\"ic s16\"><use href=\"#i-trash\"/></svg></span></span>\n        </div>\n    </div>\n    <div class=\"co-page\" id=\"coPage\">\n      <i><svg class=\"ic s18\" style=\"transform:scaleX(-1)\"><use href=\"#i-chev-r\"/></svg></i>\n      <b>1</b><s>2</s><s>&hellip;</s><s>10</s>\n      <i><svg class=\"ic s18\"><use href=\"#i-chev-r\"/></svg></i>\n    </div>\n  </div>\n</section>\n\n\n            </div><!-- /screens -->\n          </div><!-- /main -->\n        </div><!-- /app -->\n\n        <svg class=\"cursor\" id=\"cursor\" viewBox=\"0 0 24 24\" aria-hidden=\"true\">\n          <path d=\"M1 1 14.5 10.1l-5.9.7-2.7 5.4z\" fill=\"#fff\" stroke=\"#1d2126\" stroke-width=\"1.4\" stroke-linejoin=\"round\"/>\n        </svg>\n        <span class=\"ripple\" id=\"ripple\"></span>\n</div>";

class FreightTour extends HTMLElement {
  connectedCallback() {
    if (this._booted) return;
    this._booted = true;
    const root = this.attachShadow({ mode: 'open' });
    root.innerHTML = '<style>' + CSS + '</style>' + MARKUP.replace('__LOGO__', LOGO);
    boot(root, this);
  }
}
customElements.define('freight-tour', FreightTour);

function boot(root, host) {
const $  = s => root.querySelector(s);
const $$ = s => [...root.querySelectorAll(s)];
const frame = $('#frame'), cursor = $('#cursor'), ripple = $('#ripple');

let k = 1;
const fit = () => { k = host.clientWidth / 1440; frame.style.setProperty('--k', k); };
fit();

/* ---------- easings ---------- */
const E = {
  lin: t => t,
  out: t => 1 - Math.pow(1 - t, 3),
  out5: t => 1 - Math.pow(1 - t, 5),
  io:  t => t < .5 ? 4*t*t*t : 1 - Math.pow(-2*t + 2, 3)/2,
  back:t => 1 + 2.7*Math.pow(t-1,3) + 1.7*Math.pow(t-1,2),
};

/* ---------- measure every cursor target once, at rest ---------- */
const fr = () => frame.getBoundingClientRect();
function pt(sel, ox = 0, oy = 0) {
  const r = $(sel).getBoundingClientRect(), f = fr();
  return { x: (r.left - f.left)/k + r.width/(2*k) + ox, y: (r.top - f.top)/k + r.height/(2*k) + oy };
}
const P = { off: { x: 1290, y: 940 } };
function measure() {
  /* only the detail panel scrolls; the board and the directory stay put */
  P.detMax  = Math.max(0, $('#detScroll').offsetHeight - $('.det-body').clientHeight);
  /* each point sits off the control's centre so the arrow body clears its label —
     which is also where a person's pointer actually lands */
  P.details = pt('#cards .card:first-child .btn-solid', 16, 3);
  P.navCo   = pt('#nav1 a:nth-child(3)', -72, 7);
  /* the composer is inside the scrolling panel, and the cursor only touches it while the
     panel is parked at -detMax, so shift both targets up by exactly that much */
  P.chatIn   = pt('#chatIn', -78, 7);   P.chatIn.y   -= P.detMax;
  P.chatSend = pt('#dChat .send', 9, 8); P.chatSend.y -= P.detMax;
}
measure();

/* ---------- timeline ---------- */
const T = 20.4;
const SCENES = [
  { t: 0,    name: 'Loading the board' },
  { t: 3.4,  name: 'Opening a shipment' },
  { t: 9.2,  name: 'Replying to the carrier' },
  { t: 15.0, name: 'Switching to Companies' },
];

const BASE = { x: 0, y: 0, s: 1, o: 1 };
const tracks = [];
const track = (el, clips) => { if (el) tracks.push({ el, clips }); };
const c = (a, b, from, to, e = E.out) => ({ a, b, from: { ...BASE, ...from }, to: { ...BASE, ...to }, e });

function stateAt(clips, t) {
  let last = clips[0].from;
  for (const cl of clips) {
    if (t < cl.a) return last;
    if (t < cl.b) {
      const p = cl.e((t - cl.a) / (cl.b - cl.a)), o = {};
      for (const key in cl.from) o[key] = cl.from[key] + (cl.to[key] - cl.from[key]) * p;
      return o;
    }
    last = cl.to;
  }
  return last;
}

/* ===== Scene 1 — the board loads (0 – 3.4) ===== */
track($('.side'),      [c(.25, .95, { x: -256 }, { x: 0 }, E.out5)]);
track($('.side-logo'), [c(.55, 1.05, { o: 0, y: 12 }, { o: 1, y: 0 })]);
[...$$('#nav1 a'), ...$$('#nav2 a')].forEach((el, i) =>
  track(el, [c(.72 + i*.065, 1.12 + i*.065, { o: 0, x: -14 }, { o: 1, x: 0 })]));
track($('.side-foot'), [c(1.18, 1.62, { o: 0, y: 14 }, { o: 1, y: 0 })]);
track($('.topbar'),    [c(1.05, 1.5, { o: 0, y: -12 }, { o: 1, y: 0 })]);
track($('#lh'),        [c(1.28, 1.78, { o: 0, y: 18 }, { o: 1, y: 0 })]);
track($('#search'),    [c(1.48, 1.94, { o: 0, y: 12 }, { o: 1, y: 0 })]);
track($('#btnNew'),    [c(1.58, 2.04, { o: 0, y: 12 }, { o: 1, y: 0 })]);
$$('#stats .stat').forEach((el, i) => {
  const t0 = 1.78 + i*.095;
  track(el, [c(t0, t0 + .46, { o: 0, y: 16, s: .94 }, { o: 1, y: 0, s: 1 }, E.back)]);
});
track($('#arch'),   [c(2.34, 2.7, { o: 0, y: 8 }, { o: 1, y: 0 })]);
track($('#secRow'), [c(2.5, 2.9, { o: 0, y: 12 }, { o: 1, y: 0 })]);
$$('#cards .card').forEach((el, i) =>
  track(el, [c(2.64 + i*.13, 3.16 + i*.13, { o: 0, y: 26 }, { o: 1, y: 0 })]));

/* ===== Scene 2 — open shipment 00987 (3.4 – 8.6) ===== */
track($('#cards .card:first-child .btn-solid'), [
  c(4.18, 4.34, { y: 0, s: 1 }, { y: -2, s: 1.04 }),
  c(4.34, 4.44, { y: -2, s: 1.04 }, { y: 0, s: .95 }, E.io),
  c(4.44, 4.62, { y: 0, s: .95 }, { y: 0, s: 1 }, E.back)]);

track($('.det-head'), [c(5.50, 5.95, { o: 0, y: 16 }, { o: 1, y: 0 })]);
track($('#dStatus'),  [c(5.78, 6.30, { o: 0, y: 20, s: .98 }, { o: 1, y: 0, s: 1 }, E.out5)]);
track($('#dRoute'),   [c(6.22, 6.74, { o: 0, y: 20, s: .98 }, { o: 1, y: 0, s: 1 }, E.out5)]);
track($('#dMap'),     [c(6.32, 6.86, { o: 0, y: 20, s: .98 }, { o: 1, y: 0, s: 1 }, E.out5)]);
track($('#dDist'),    [c(6.52, 7.02, { o: 0, x: 18 }, { o: 1, x: 0 })]);
track($('#dEta'),     [c(6.66, 7.16, { o: 0, x: 18 }, { o: 1, x: 0 })]);
/* below the fold of the frame, but they still belong to the page */
track($('#dDetails'), [c(6.75, 7.25, { o: 0, y: 20 }, { o: 1, y: 0 })]);
track($('#dLoad'),    [c(6.90, 7.40, { o: 0, y: 20 }, { o: 1, y: 0 })]);
track($('#dCosts'),   [c(7.05, 7.55, { o: 0, y: 20 }, { o: 1, y: 0 })]);
track($('#dDocs'),    [c(6.82, 7.32, { o: 0, y: 20 }, { o: 1, y: 0 })]);
track($('#dChat'),    [c(6.98, 7.48, { o: 0, y: 20 }, { o: 1, y: 0 })]);
['#m1', '#m2', '#m3'].forEach((id, i) =>
  track($(id), [c(7.30 + i*.12, 7.66 + i*.12, { o: 0, y: 10 }, { o: 1, y: 0 })]));

/* ===== Scene 3 — reply to the carrier (9.0 – 14.8) ===== */
track($('#dChat .send'), [
  c(12.66, 12.78, { s: 1 }, { s: .88 }, E.io),
  c(12.78, 12.98, { s: .88 }, { s: 1 }, E.back)]);
track($('#m4'), [c(12.82, 13.28, { o: 0, y: 14, s: .96 }, { o: 1, y: 0, s: 1 }, E.back)]);

/* ===== Scene 4 — switch to Companies (14.8 – 19.8) ===== */
track($('#nav1 a:nth-child(3)'), [
  c(.85, 1.25, { o: 0, x: -14 }, { o: 1, x: 0 }),
  c(15.80, 15.94, { x: 0, s: 1 }, { x: 0, s: .97 }, E.io),
  c(15.94, 16.14, { x: 0, s: .97 }, { x: 0, s: 1 }, E.back)]);
track($('.co-head'), [c(16.96, 17.42, { o: 0, y: 16 }, { o: 1, y: 0 })]);
track($('#coTools'), [c(17.16, 17.62, { o: 0, y: 12 }, { o: 1, y: 0 })]);
track($('#coTable'), [c(17.38, 17.90, { o: 0, y: 22, s: .985 }, { o: 1, y: 0, s: 1 }, E.out5)]);
for (let i = 1; i <= 7; i++)
  track($('#cr' + i), [c(17.66 + i*.075, 18.06 + i*.075, { o: 0, x: 20 }, { o: 1, x: 0 })]);
track($('#coPage'), [c(18.46, 18.92, { o: 0, y: 10 }, { o: 1, y: 0 })]);

/* ===== screen swaps ===== */
/* every swap starts only after the click's ripple is done and the cursor has left */
track($('#scList'),   [c(4.82, 5.52, { x: 0, o: 1 }, { x: -96, o: 0 }, E.io)]);
track($('#scDetail'), [
  c(4.82, 5.57, { x: 128, o: 0 }, { x: 0, o: 1 }, E.out5),
  c(16.26, 16.96, { x: 0, o: 1 }, { x: -96, o: 0 }, E.io)]);
track($('#scCo'),     [c(16.26, 17.01, { x: 128, o: 0 }, { x: 0, o: 1 }, E.out5)]);
track($('#today'),    [c(4.88, 5.16, { o: 1 }, { o: 0 }, E.io)]);

/* ---------- cursor waypoints ---------- */
/* The cursor is never parked on a target while the panel is moving under it: it leaves at
   5.84 before the scroll starts, and again at 13.54 before the scroll returns. */
let CUR = [], CLICKS = [];
function buildPaths() {
CUR = [
  { t: 3.50, ...P.off,      o: 0 }, { t: 3.64, ...P.off,      o: 1 },
  /* stays put through its own ripple, then fades out ON the button — never drifts
     across the screen that is swapping in behind it */
  { t: 4.18, ...P.details,  o: 1 }, { t: 4.66, ...P.details,  o: 1 },
  { t: 4.80, ...P.details,  o: 0 },
  { t: 9.70, ...P.off,      o: 0 }, { t: 9.84, ...P.off,      o: 1 },
  { t: 10.34, ...P.chatIn,  o: 1 }, { t: 12.20, ...P.chatIn,  o: 1 },
  { t: 12.62, ...P.chatSend, o: 1 }, { t: 13.60, ...P.chatSend, o: 1 },
  { t: 13.74, ...P.chatSend, o: 0 },
  { t: 15.12, ...P.off,     o: 0 }, { t: 15.26, ...P.off,     o: 1 },
  { t: 15.76, ...P.navCo,   o: 1 }, { t: 16.12, ...P.navCo,   o: 1 },
  { t: 16.26, ...P.navCo,   o: 0 },
];
CLICKS = [
  { t: 4.34, ...P.details }, { t: 10.40, ...P.chatIn },
  { t: 12.70, ...P.chatSend }, { t: 15.90, ...P.navCo },
];
}
buildPaths();

/* ---------- discrete state: typing, counters, toggles ---------- */
function setVal(el, txt, show) {
  const v = el.querySelector('.val'), p = el.querySelector('.ph');
  if (v.textContent !== txt) v.textContent = txt;
  if (p) p.hidden = show;
}
function typeAt(t, sel, text, t0, dur, cOn, cOff) {
  const el = $(sel), n = t <= t0 ? 0 : Math.round(Math.min(1, (t - t0)/dur) * text.length);
  setVal(el, text.slice(0, n), n > 0);
  const car = el.querySelector('.caret');
  if (car) {
    const on = t >= cOn && t < cOff;
    car.style.opacity = on ? '' : '0';
    car.classList.toggle('blink', on && t >= t0 + dur);
    if (on && t < t0 + dur) car.style.opacity = '1';
  }
}
function revealAt(t, sel, text, t0) {
  const el = $(sel), on = t >= t0;
  setVal(el, on ? text : '', on);
  el.querySelector('.val').style.opacity = on ? Math.min(1, (t - t0)/.26) : 0;
}
const COUNTS = $$('#stats b');
const crumbB = $('#crumbB'), crumbTxt = $('#crumbTxt'), crumbA = $('#crumbA');
const navShip = $('#nav1 a:nth-child(1)'), navComp = $('#nav1 a:nth-child(3)');
const REPLY = 'Thanks \u2014 please confirm the POD at delivery.';
const detScroll = $('#detScroll');
const setFill = (el, t, t0, dur) =>
  el.style.setProperty('--f', t <= t0 ? 0 : E.out(Math.min(1, (t - t0)/dur)).toFixed(3));

function render(t) {
  for (const tr of tracks) {
    const s = stateAt(tr.clips, t);
    tr.el.style.opacity = s.o;
    tr.el.style.transform = 'translate3d(' + s.x.toFixed(2) + 'px,' + s.y.toFixed(2) + 'px,0) scale(' + s.s.toFixed(4) + ')';
  }
  COUNTS.forEach((b, i) => {
    const t0 = 1.92 + i*.095, p = t <= t0 ? 0 : E.out(Math.min(1, (t - t0)/.86));
    b.textContent = Math.round(p * +b.dataset.to);
  });
  /* the reply is typed, then sent — after which the box is empty again */
  if (t >= 12.74) { setVal($('#chatIn'), '', false); $('#chatIn').querySelector('.caret').style.opacity = '0'; }
  else typeAt(t, '#chatIn', REPLY, 10.56, 1.55, 10.46, 12.74);

  /* the status bar fills in as the detail screen settles */
  setFill($('#p1'), t, 6.15, .50);
  setFill($('#p2'), t, 6.45, .55);

  /* only this panel scrolls: down to the thread, held while the reply is written and
     sent, then back — and the cursor is off screen for both moves */
  let sy = 0;
  if (t >= 7.80 && t < 9.60)        sy = -P.detMax * E.io((t - 7.80)/1.80);
  else if (t >= 9.60 && t < 13.90)  sy = -P.detMax;
  else if (t >= 13.90 && t < 14.90) sy = -P.detMax * (1 - E.io((t - 13.90)/1.00));
  detScroll.style.transform = 'translate3d(0,' + sy.toFixed(1) + 'px,0)';

  /* the sidebar's active pill follows the click */
  const onCo = t >= 16.18;
  navShip.classList.toggle('on', !onCo);
  navComp.classList.toggle('on', onCo);

  /* breadcrumb tracks whichever screen is open */
  let tw = 0;
  if (t >= 5.00 && t < 16.22) {
    crumbTxt.textContent = 'Shipment Details';
    tw = 176 * E.out(Math.min(1, (t - 5.00)/.50));
  } else if (t >= 16.22 && t < 16.64) {
    tw = 176 * (1 - E.io((t - 16.22)/.42));
  }
  crumbB.style.width = tw.toFixed(1) + 'px';
  const crumbNow = onCo ? 'Companies' : 'Shipments';
  if (crumbA.textContent !== crumbNow) crumbA.textContent = crumbNow;

  /* cursor along its arc */
  let a = CUR[0], b = CUR[0];
  for (let i = 0; i < CUR.length - 1; i++) if (t >= CUR[i].t) { a = CUR[i]; b = CUR[i+1]; }
  let cx = a.x, cy = a.y, co = a.o;
  if (t > a.t && b.t > a.t) {
    const raw = Math.min(1, (t - a.t)/(b.t - a.t)), p = E.io(raw);
    cx = a.x + (b.x - a.x)*p; cy = a.y + (b.y - a.y)*p; co = a.o + (b.o - a.o)*raw;
    const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
    if (d > 40) { const bow = Math.sin(p*Math.PI)*d*.09; cx += -(dy/d)*bow; cy += (dx/d)*bow; }
  } else if (t >= CUR[CUR.length-1].t) { const z = CUR[CUR.length-1]; cx = z.x; cy = z.y; co = z.o; }
  cursor.style.transform = 'translate3d(' + cx.toFixed(1) + 'px,' + cy.toFixed(1) + 'px,0)';
  cursor.style.opacity = co;

  /* click pulse */
  let shown = false;
  for (const cl of CLICKS) {
    const d = t - cl.t;
    if (d >= 0 && d < .42) {
      const p = d/.42, size = 12 + E.out(p)*38;
      ripple.style.left = cl.x + 'px'; ripple.style.top = cl.y + 'px';
      ripple.style.width = size.toFixed(1) + 'px';
      ripple.style.height = size.toFixed(1) + 'px';
      ripple.style.margin = (-size/2).toFixed(1) + 'px 0 0 ' + (-size/2).toFixed(1) + 'px';
      ripple.style.opacity = ((1 - p)*.7).toFixed(3); shown = true; break;
    }
  }
  if (!shown) ripple.style.opacity = '0';

  if (!shown) ripple.style.opacity = '0';
}

/* ---------- runtime: autoplay, loop, pause when off screen ---------- */
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let time = 3.3, playing = false, lastT = 0, onScreen = false, firstRun = true, busy = false;

/* transforms have to come off before we can read the resting layout */
function remeasure() {
  if (busy) return;
  busy = true;
  for (const tr of tracks) { tr.el.style.transform = ''; tr.el.style.opacity = ''; }
  crumbB.style.width = ''; detScroll.style.transform = '';
  fit(); measure(); buildPaths(); render(time);
  busy = false;
}
function play(on) {
  if (on === playing) return;
  playing = on;
  if (on) { lastT = performance.now(); requestAnimationFrame(tick); }
}
function tick(now) {
  if (!playing) return;
  const dt = Math.min(.05, (now - lastT) / 1000);
  lastT = now;
  time += dt; if (time >= T) time -= T;
  render(time);
  requestAnimationFrame(tick);
}

/* small public API on the element: el.seek(4.2); el.pause(); el.play(); el.currentTime */
function seek(t) { time = Math.max(0, Math.min(T, t)); render(time); }
host.seek = seek;
host.play = () => play(true);
host.pause = () => play(false);
Object.defineProperty(host, 'duration', { get: () => T });
Object.defineProperty(host, 'currentTime', { get: () => time, set: seek });

render(time);
if (document.fonts && document.fonts.ready) document.fonts.ready.then(remeasure);
if ('ResizeObserver' in window) new ResizeObserver(remeasure).observe(host);
else addEventListener('resize', remeasure);

if (reduce.matches) {
  render(19.2);
} else if ('IntersectionObserver' in window) {
  new IntersectionObserver(([en]) => {
    onScreen = en.isIntersecting;
    if (onScreen && firstRun) { firstRun = false; time = 0; }
    play(onScreen);
  }, { threshold: .2 }).observe(host);
} else {
  time = 0; onScreen = true; play(true);
}

document.addEventListener('visibilitychange', () => {
  if (document.hidden) play(false);
  else if (onScreen && !reduce.matches) play(true);
});
}
})();
