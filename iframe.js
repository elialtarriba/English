<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>englishtensesV1</title>
<style>
:root{
  --bg: linear-gradient(135deg, #f4faf3, #e8f5e9);
  --card: rgba(255, 255, 255, 0.95);
  --ink: #2c4230; --mid: #5a7c61; --light: #81a486;
  --pale: #dcf0dc; --pd: #c4e1c3; --green: #689e5e; --gl: #eef7eb;
  --ok: #639c57; --okl: #e1f4dd; --bad: #bd6a64; --badl: #fae2df;
  --gold: #8ea969;
  --sh: 0 8px 32px rgba(45, 80, 45, 0.1);
  --fd: "Outfit", Georgia, serif;
  --fb: "Inter", -apple-system, BlinkMacSystemFont, Arial, sans-serif;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Outfit:wght@500;700&display=swap');
*{margin:0;padding:0;box-sizing:border-box}
body{background:var(--bg);font-family:var(--fb);color:var(--ink);min-height:100vh}
.screen{display:none;min-height:100vh}.screen.active{display:flex;flex-direction:column}

/* â”€â”€ HOME â”€â”€ */
#home{align-items:center;justify-content:flex-start;padding:1.5rem 1rem 3rem}
.hi{max-width:480px;width:100%;text-align:center}
.badge{display:inline-block;border:1.5px solid var(--pd);color:var(--mid);font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.18em;padding:.25rem .9rem;border-radius:999px;margin-bottom:1rem;background:rgba(255,255,255,.9)}
h1{font-family:var(--fd);font-size:clamp(2.4rem,9vw,3.6rem);line-height:1;margin-bottom:.4rem;font-weight:700;text-shadow: 0 4px 12px rgba(104,139,98,.15)}
h1 em{color:#548c4d;font-style:normal;display:block}
.ul{display:block;margin:.4rem auto 1rem;width:120px;height:5px;background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 5'%3E%3Cpath d='M1 4 Q25 1 50 4 Q75 7 99 2' stroke='%232d7a2d' stroke-width='3' fill='none' stroke-linecap='round'/%3E%3C/svg%3E") no-repeat center/contain}
.hsub{font-size:.9rem;color:var(--mid);margin-bottom:1.6rem;line-height:1.6;font-weight:400}
.home-grid{display:flex;flex-direction:column;gap:.9rem;width:100%}
.home-actions{display:flex;gap:.6rem;flex-wrap:wrap;margin-bottom:.4rem}
.home-actions .act{flex:1;min-width:170px;border:none;border-radius:999px;padding:.72rem 1rem;font-family:var(--fb);font-size:.78rem;font-weight:800;color:#fdfefc;background:#9fbd7a;box-shadow:0 6px 18px rgba(104,139,98,.16);cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:.42rem}
.home-actions .act.edit{background:#9bb98f}.home-actions .act:hover{transform:translateY(-1px);filter:brightness(.98)}
.flash-entry{width:100%;border:1.8px solid var(--pd);background:#fbfef9;color:var(--ink);border-radius:16px;padding:.9rem 1rem;font-family:var(--fb);font-size:.9rem;font-weight:800;cursor:pointer;box-shadow:var(--sh);margin-top:.4rem}
.flash-entry:hover{border-color:var(--green);background:var(--gl)}
.home-section-label{font-size:.65rem;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:var(--light);margin-bottom:.2rem;text-align:left;padding-left:.2rem}
/* Study card */
.hcard-study{background:var(--card);backdrop-filter:blur(10px);border-radius:20px;padding:1.4rem;box-shadow:var(--sh);cursor:pointer;transition:transform .3s,box-shadow .3s;border:2px solid rgba(255,255,255,0.6);border-top:5px solid #689e5e;text-align:left}
.hcard-study:hover{transform:translateY(-3px);box-shadow:0 12px 32px rgba(26,46,26,.18)}
.hcard-study .hr{display:flex;align-items:center;gap:1rem;margin-bottom:.9rem}
.hcard-study .hsvg{flex-shrink:0;width:40px;height:40px}
.sketch-icon,.btn-ico{display:block;flex-shrink:0}
.sketch-icon{width:44px;height:44px;margin-bottom:.15rem}
.btn-ico{width:18px;height:18px}
.sketch-line{fill:none;stroke:#6f8d73;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;opacity:.9}
.sketch-soft{fill:none;stroke:#9abc9b;stroke-width:1.3;stroke-linecap:round;stroke-linejoin:round;opacity:.78}
.sketch-fill{fill:#fbfef9;stroke:#6f8d73;stroke-width:1.7;stroke-linejoin:round}
.hcard-study .htitle{font-family:var(--fd);font-size:1.05rem;color:var(--ink);margin-bottom:.15rem}
.hcard-study .hdesc{font-size:.76rem;color:var(--mid);line-height:1.5;font-weight:300}
.htags{display:flex;gap:.3rem;flex-wrap:wrap;margin-top:.5rem}
.htag{font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;padding:.16rem .5rem;border-radius:999px;background:var(--pale);color:var(--mid)}
.htag.hl{background:var(--gl);color:var(--green)}
.btn-c{display:block;width:100%;background:#86ad7c;color:#fff;font-family:var(--fb);font-size:.86rem;font-weight:700;padding:.68rem;border-radius:10px;border:none;cursor:pointer;transition:all .2s;margin-top:.75rem}
.btn-c:hover{background:var(--green)}
/* Quiz grid 2x2 */
.quiz-grid{display:grid;grid-template-columns:1fr 1fr;gap:.8rem}
.qhcard{background:var(--card);backdrop-filter:blur(10px);border-radius:18px;padding:1.2rem 1rem;box-shadow:var(--sh);cursor:pointer;transition:all .3s cubic-bezier(0.4, 0, 0.2, 1);border:2px solid rgba(255,255,255,0.6);text-align:center;display:flex;flex-direction:column;align-items:center;gap:.5rem;position:relative;overflow:hidden}
.qhcard::before{content:'';position:absolute;inset:0;background:linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(104,158,94,0.05) 100%);opacity:0;transition:opacity .3s}
.qhcard:hover::before{opacity:1}
.qhcard:hover{transform:translateY(-4px) scale(1.02);box-shadow:0 14px 28px rgba(26,46,26,.16)}
.qhcard.q0{border-top:5px solid #8cb884}
.qhcard.q1{border-top:5px solid #a6c9a0}
.qhcard.q2{border-top:5px solid #78a86f}
.qhcard.q3{border-top:5px solid #b5d1b1}
.qhcard .qi{height:52px;display:flex;align-items:center;justify-content:center;transition:transform .3s}
.qhcard:hover .qi{transform:scale(1.1)}
.qhcard .qn{font-family:var(--fd);font-size:.95rem;font-weight:700;color:var(--ink);line-height:1.25}
.qhcard .qd{font-size:.68rem;color:var(--mid);line-height:1.4}
.qhcard .qc{font-size:.6rem;font-weight:800;color:var(--green);padding:.2rem .55rem;border-radius:999px;background:var(--gl);box-shadow:inset 0 1px 3px rgba(0,0,0,0.04)}

/* Premium 3D Button */
.btn-3d {
  background: linear-gradient(135deg, #a4c480, #88af64);
  color: #fff !important;
  border: none !important;
  padding: .4rem .9rem !important;
  border-radius: 12px !important;
  font-family: var(--fb);
  font-weight: 800;
  font-size: .85rem !important;
  box-shadow: 0 4px 0 #6e944b, 0 6px 12px rgba(45,122,45,.2) !important;
  cursor: pointer;
  transition: all .1s ease;
  text-shadow: 0 1px 2px rgba(0,0,0,.15);
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.btn-3d:active {
  transform: translateY(4px);
  box-shadow: 0 0 0 #6e944b, 0 2px 4px rgba(45,122,45,.2) !important;
}

/* â”€â”€ STUDY â”€â”€ */
#study{background:var(--bg)}
.stb{background:var(--card);padding:.75rem 1rem;display:flex;flex-direction:column;gap:.5rem;box-shadow:0 2px 8px rgba(26,46,26,.08);position:sticky;top:0;z-index:100}
.stb-row1{display:flex;align-items:center;gap:.5rem}
.sp{flex:1}.spl{font-size:.57rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--light);margin-bottom:.15rem}
.spb{height:4px;background:var(--pale);border-radius:999px;overflow:hidden}
.spf{height:100%;background:#9fbd7a;border-radius:999px;transition:width .4s}
.snb{display:flex;gap:.35rem;flex-shrink:0}
.bsn{background:var(--pale);border:none;color:var(--mid);font-size:.9rem;width:30px;height:30px;border-radius:8px;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center}
.bsn:hover{background:#9fbd7a;color:#fff}.bsn:disabled{opacity:.3;cursor:default}
.bsh{background:none;border:1.5px solid var(--pale);color:var(--mid);font-family:var(--fb);font-size:.7rem;font-weight:700;padding:.25rem .65rem;border-radius:999px;cursor:pointer;transition:all .2s;white-space:nowrap}
.bsh:hover{border-color:var(--green);color:var(--green)}
.search-row{display:flex;align-items:center;gap:.45rem}
.search-wrap{flex:1;position:relative}
.search-wrap input{width:100%;border:1.5px solid var(--pale);border-radius:9px;padding:.42rem .75rem .42rem 1.9rem;font-family:var(--fb);font-size:.8rem;color:var(--ink);background:var(--bg);outline:none;transition:border-color .2s}
.search-wrap input:focus{border-color:var(--green);background:#fff}
.si{position:absolute;left:.6rem;top:50%;transform:translateY(-50%);color:var(--light);font-size:.78rem;pointer-events:none}
.sr-list{position:absolute;top:calc(100% + 4px);left:0;right:0;background:var(--card);border:1.5px solid var(--pale);border-radius:9px;box-shadow:var(--sh);z-index:200;max-height:170px;overflow-y:auto;display:none}
.sr-list.open{display:block}
.sri{padding:.5rem .8rem;font-size:.8rem;cursor:pointer;border-bottom:1px solid var(--pale);display:flex;align-items:center;gap:.5rem;transition:background .15s}
.sri:last-child{border-bottom:none}.sri:hover{background:var(--gl)}
.srn{font-size:.62rem;font-weight:700;color:var(--light);width:20px;flex-shrink:0}
.brnd{background:#9fbd7a;border:none;color:#fff;font-family:var(--fb);font-size:.7rem;font-weight:700;padding:.42rem .75rem;border-radius:9px;cursor:pointer;transition:all .2s;white-space:nowrap}
.brnd:hover{background:#86ad7c}
.sbody{flex:1;padding:1.2rem 1rem 4rem;max-width:500px;margin:0 auto;width:100%}
.flip-hint{text-align:center;font-size:.7rem;color:var(--light);margin-bottom:.8rem;display:flex;align-items:center;justify-content:center;gap:.35rem}
.flip-nav{display:flex;align-items:center;justify-content:center;gap:.28rem;margin-bottom:.8rem;flex-wrap:wrap}
.nd{width:7px;height:7px;border-radius:50%;background:var(--pale);cursor:pointer;transition:all .2s;border:none;flex-shrink:0}
.nd.act{background:var(--green);transform:scale(1.3)}
.flip-scene{width:100%;height:390px;perspective:1200px;cursor:pointer;margin-bottom:.9rem}
.flip-card{width:100%;height:100%;position:relative;transform-style:preserve-3d;transition:transform .55s cubic-bezier(.4,0,.2,1)}
.flip-card.flipped{transform:rotateY(180deg)}
.flip-face{position:absolute;inset:0;backface-visibility:hidden;-webkit-backface-visibility:hidden;border-radius:22px;overflow:hidden}
.flip-front{background:var(--card);border:2px solid var(--pale);box-shadow:var(--sh);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:1.8rem 1.5rem;text-align:center}
.card-num{font-size:.62rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--light);margin-bottom:.7rem;align-self:flex-start;background:var(--pale);padding:.2rem .65rem;border-radius:999px}
.card-illo{margin-bottom:1rem}.card-illo svg{width:100px;height:72px}
.card-tense{font-family:var(--fd);font-size:clamp(1.3rem,5vw,1.8rem);color:var(--ink);line-height:1.15;margin-bottom:.35rem}
.card-subtitle{font-size:.76rem;color:var(--light);font-style:italic}
.tap-hint{font-size:.63rem;color:var(--light);margin-top:.9rem;display:flex;align-items:center;gap:.3rem}
.flip-back{background:var(--gl);border:2px solid var(--pd);box-shadow:var(--sh);transform:rotateY(180deg);display:flex;flex-direction:column;padding:0;overflow:hidden}
.back-hdr{background:#9fbd7a;padding:.85rem 1.2rem .7rem;flex-shrink:0}
.back-tense{font-family:var(--fd);font-size:1.1rem;color:#fff;margin-bottom:.1rem}
.back-tap-hint{font-size:.58rem;color:rgba(255,255,255,.72);letter-spacing:.03em}
.back-sections{padding:.7rem .9rem;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:.5rem}
.bsec{background:#fff;border-radius:11px;padding:.65rem .85rem;cursor:pointer;transition:all .2s;border:1.5px solid var(--pale)}
.bsec:hover{border-color:var(--green);box-shadow:0 2px 10px rgba(45,122,45,.15)}
.bsec:active{transform:scale(.98)}
.bsec-lbl{font-size:.54rem;font-weight:700;text-transform:uppercase;letter-spacing:.12em;color:var(--green);margin-bottom:.28rem}
.bsec-con{font-size:.79rem;color:var(--ink);line-height:1.5}
.flip-btns{display:flex;gap:.55rem}
.bfn{flex:1;background:var(--pale);border:none;color:var(--mid);font-family:var(--fb);font-size:.82rem;font-weight:700;padding:.62rem;border-radius:10px;cursor:pointer;transition:all .2s}
.bfn:hover{background:#9fbd7a;color:#fff}
.bfn.pr{background:#86ad7c;color:#fff}.bfn.pr:hover{background:#9fbd7a}
.editbar{display:none;gap:.45rem;margin-bottom:.75rem}
.editbar.show{display:flex}.editbar button{flex:1;border:1.5px solid var(--pd);background:#fff;color:var(--ink);font-family:var(--fb);font-size:.76rem;font-weight:800;padding:.55rem .65rem;border-radius:10px;cursor:pointer}
.editbar button.primary{background:#9fbd7a;color:#fff;border-color:#9fbd7a}

/* FLASHCARDS EDITOR */
#flashcardsScreen{background:var(--bg)}
.fce-wrap{width:min(760px,100%);margin:0 auto;padding:1rem 1rem 4rem}
.fce-top{position:sticky;top:0;z-index:80;background:rgba(244,250,243,.96);padding:.8rem 0;display:flex;gap:.55rem;align-items:center;flex-wrap:wrap}
.fce-top .app-input{margin:0;flex:1;min-width:220px}
.fce-count{font-size:.72rem;font-weight:800;color:var(--mid);letter-spacing:.06em;text-transform:uppercase;width:100%}
.fce-card{background:var(--card);border:1.5px solid var(--pd);border-radius:18px;box-shadow:var(--sh);padding:1rem;margin-top:.6rem}
.fce-card.previewing .fce-edit{display:none}
.fce-preview{display:none}
.fce-card.previewing .fce-preview{display:block}
.fce-row{display:grid;grid-template-columns:1fr 1fr;gap:.6rem}
.fce-actions{display:flex;gap:.5rem;flex-wrap:wrap;margin-top:.75rem}
.fce-actions button,.fce-top button{border:1.5px solid var(--pd);background:#fff;color:var(--ink);border-radius:999px;padding:.58rem .9rem;font-family:var(--fb);font-weight:800;cursor:pointer}
.fce-actions .primary,.fce-top .primary{background:#86ad7c;color:#fff;border-color:#86ad7c}
.fce-actions .danger{background:#fff5f5;color:#a96f6a;border-color:#efb4b4}
.fce-quiz-card{background:var(--card);border:1.5px solid var(--pd);border-radius:18px;padding:1.2rem;box-shadow:var(--sh);cursor:pointer;transition:transform .45s;transform-style:preserve-3d}
.fce-quiz-card.flipped{background:var(--gl);border-color:var(--green)}
.fce-preview-title{font-family:var(--fd);font-size:1.25rem;margin-bottom:.6rem;color:var(--ink)}
.fce-preview-question{font-family:var(--fd);font-size:1.05rem;line-height:1.8;margin-bottom:.8rem}
.fce-preview-options{display:grid;grid-template-columns:1fr 1fr;gap:.5rem}
.fce-preview-options div{background:#fff;border:1.5px solid var(--pd);border-radius:12px;padding:.65rem;text-align:center;font-weight:800}
.fce-preview-answer{display:none;border-top:1px solid var(--pd);margin-top:.8rem;padding-top:.8rem;color:var(--mid);line-height:1.5}
.fce-quiz-card.flipped .fce-preview-answer{display:block}
@media(max-width:520px){.fce-row{grid-template-columns:1fr}}

/* â”€â”€ ZOOM â”€â”€ */
#zm{display:none;position:fixed;inset:0;z-index:600;align-items:center;justify-content:center;padding:1rem}
#zm.vis{display:flex}
#zm-bg{position:absolute;inset:0;background:rgba(26,46,26,.6);border:none;cursor:pointer;-webkit-appearance:none;z-index:0}
.zm-box{background:#fff;border-radius:22px;max-width:510px;width:100%;box-shadow:0 20px 60px rgba(26,46,26,.3);animation:zmin .2s ease;max-height:88vh;overflow-y:auto;position:relative;z-index:1}
@keyframes zmin{from{opacity:0;transform:scale(.93)}to{opacity:1;transform:scale(1)}}
.zm-inner{width:100%;background:none;border:none;padding:1.6rem 1.5rem;text-align:left;cursor:pointer;font-family:var(--fb);display:block;-webkit-appearance:none}
.zm-hdr{margin-bottom:1.1rem;padding-bottom:.85rem;border-bottom:2px solid var(--gl)}
.zm-tense{font-family:var(--fd);font-size:1.25rem;color:var(--ink);margin-bottom:.2rem}
.zm-hint{font-size:.58rem;color:var(--light);letter-spacing:.04em}
.zm-lbl{font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.13em;color:var(--green);margin-bottom:.75rem}
.zm-struct{font-family:"Courier New",monospace;font-size:1.2rem;color:var(--green);background:var(--gl);padding:.9rem 1.1rem;border-radius:11px;line-height:1.75;border:1.5px solid var(--pd);word-break:break-word}
.zm-exs{display:flex;flex-direction:column;gap:.85rem}
.zm-ex{background:var(--gl);border-radius:13px;padding:1rem 1.1rem;border-left:4px solid var(--green)}
.zm-en{font-size:1.15rem;font-weight:700;color:var(--ink);line-height:1.6;margin-bottom:.32rem}
.zm-es{font-size:1rem;color:var(--mid);font-style:italic;line-height:1.5}
.zm-tip{font-size:1.05rem;color:var(--mid);line-height:1.75;padding:.85rem 1rem;background:var(--gl);border-radius:12px;border-left:4px solid var(--gold)}
.zm-tip strong{color:var(--ink)}

/* â”€â”€ QUIZ SETUP â”€â”€ */
#qsetup{align-items:center;justify-content:center;padding:2rem 1rem;background:var(--bg)}
.qsi{max-width:430px;width:100%}
.qs-back{display:flex;align-items:center;gap:.4rem;font-size:.8rem;color:var(--mid);cursor:pointer;margin-bottom:1.2rem;background:none;border:none;font-family:var(--fb);font-weight:700}
.qs-back:hover{color:var(--green)}
.qs-title{font-family:var(--fd);font-size:1.5rem;color:var(--ink);margin-bottom:.25rem}
.qs-sub{font-size:.82rem;color:var(--mid);margin-bottom:1.2rem;font-weight:300}
.scard{background:var(--card);border-radius:18px;padding:1.4rem;box-shadow:var(--sh)}
.sl{font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--light);margin-bottom:.6rem;margin-top:.85rem}
.sl:first-child{margin-top:0}
.cbtns{display:flex;gap:.45rem}
.cbt{flex:1;border:2px solid var(--pale);background:var(--card);border-radius:11px;padding:.65rem .25rem;cursor:pointer;transition:all .2s;font-family:var(--fb);text-align:center}
.cbt .n{font-family:var(--fd);font-size:1.6rem;display:block;line-height:1;color:var(--pd)}
.cbt .l{font-size:.6rem;color:var(--light);text-transform:uppercase;letter-spacing:.07em;margin-top:.1rem;display:block}
.cbt.sel{border-color:var(--green);background:var(--gl)}.cbt.sel .n{color:var(--green)}
.prow{display:flex;align-items:center;gap:.55rem;margin-bottom:.5rem}
.pdot{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.prow input{flex:1;border:1.5px solid var(--pale);border-radius:9px;padding:.48rem .72rem;font-family:var(--fb);font-size:.88rem;color:var(--ink);background:#fafafa;outline:none;transition:border-color .2s}
.prow input:focus{border-color:var(--green)}.prow.hidden{display:none}
.qcr{display:flex;align-items:center;gap:.65rem;margin-top:.5rem}
.qcr label{font-size:.8rem;color:var(--mid);white-space:nowrap}
.qcr select{flex:1;border:1.5px solid var(--pale);border-radius:9px;padding:.45rem .65rem;font-family:var(--fb);font-size:.83rem;background:#fafafa;color:var(--ink);outline:none;cursor:pointer}
.bpl{width:100%;background:#86ad7c;color:#fff;font-family:var(--fb);font-size:.92rem;font-weight:700;padding:.85rem;border-radius:11px;border:none;cursor:pointer;transition:all .2s;margin-top:1rem}
.bpl:hover{background:var(--green)}

/* â”€â”€ QUIZ â”€â”€ */
#quiz{background:var(--bg)}
.qtb{background:var(--card);padding:.68rem .9rem;display:flex;align-items:center;gap:.45rem;box-shadow:0 2px 8px rgba(26,46,26,.07);position:sticky;top:0;z-index:100;flex-wrap:wrap}
.qpw{flex:1;min-width:70px}
.qpl{font-size:.56rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--light);margin-bottom:.15rem}
.qpb{height:4px;background:var(--pale);border-radius:999px;overflow:hidden}
.qpf{height:100%;background:#9fbd7a;border-radius:999px;transition:width .4s}
.ssc{display:flex;align-items:center;gap:.28rem;font-size:.7rem;font-weight:700;background:var(--pale);padding:.2rem .6rem;border-radius:999px;white-space:nowrap}
.ssc .so{color:var(--ok)}.ssc .sb{color:var(--bad)}
.ctn{display:flex;align-items:center;gap:.32rem;font-size:.7rem;font-weight:700;padding:.2rem .6rem;border-radius:999px;background:var(--pale);white-space:nowrap}
.btq{background:none;border:1.5px solid var(--pale);color:var(--light);font-size:.78rem;padding:.2rem .5rem;border-radius:999px;cursor:pointer;transition:all .2s;line-height:1}
.btq:hover{border-color:var(--green);color:var(--green)}
.btq.ex:hover{border-color:var(--bad);color:var(--bad)}
.qbody{flex:1;display:flex;flex-direction:column;align-items:center;padding:1.2rem 1rem 5rem;max-width:560px;margin:0 auto;width:100%}
.q-cat{font-size:.58rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;padding:.18rem .75rem;border-radius:999px;margin-bottom:.7rem;align-self:flex-start;background:var(--gl);color:var(--green)}
.qnl{font-size:.7rem;color:var(--light);margin-bottom:.45rem;align-self:flex-start;width:100%}
.ptb{width:100%;border-radius:11px;padding:.55rem .85rem;margin-bottom:.7rem;display:flex;align-items:center;gap:.45rem;font-size:.82rem;font-weight:700}
.ptbd{width:9px;height:9px;border-radius:50%;flex-shrink:0}
.qsen{background:var(--card);border-radius:16px;padding:1.4rem 1.4rem;box-shadow:var(--sh);width:100%;margin-bottom:1rem;border:2px solid transparent;transition:border-color .2s}
.qsen.cs{border-color:var(--ok);background:var(--okl)}
.qsen.ws{border-color:var(--bad);background:var(--badl)}
.q-text{font-family:var(--fd);font-size:clamp(.96rem,2.6vw,1.1rem);line-height:1.85;color:var(--ink)}
.q-blank{display:inline-block;min-width:90px;border-bottom:2px solid #9fbd7a;margin:0 .35rem;text-align:center;font-weight:700;color:var(--green);font-family:var(--fb);vertical-align:middle;padding:0 .25rem .08rem;background:transparent}
.q-hint{display:block;font-size:.72rem;color:var(--light);margin-top:.55rem;font-style:italic}
.opts-grid{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;width:100%;margin-bottom:.9rem}
.opt{background:var(--card);border:2px solid var(--pale);border-radius:12px;padding:.7rem .75rem;font-family:var(--fb);font-size:.82rem;font-weight:600;color:var(--ink);cursor:pointer;transition:all .17s;text-align:center;box-shadow:0 2px 5px rgba(26,46,26,.05)}
.opt:hover{border-color:var(--green);background:var(--gl)}
.opt.correct{border-color:var(--ok);background:var(--okl);color:var(--ok);cursor:default}
.opt.wrong{border-color:var(--bad);background:var(--badl);color:var(--bad);cursor:default}
.opt:disabled{cursor:default}
.eb{background:var(--card);border-radius:11px;padding:.9rem 1rem;width:100%;margin-bottom:.8rem;border-left:4px solid var(--ok);display:none;animation:sdn .3s ease}
@keyframes sdn{from{opacity:0}to{opacity:1}}
.eb.vis{display:block}.eb.we{border-left-color:var(--bad)}
.el{font-size:.55rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--light);margin-bottom:.25rem}
.et{font-size:.8rem;color:var(--mid);line-height:1.55}
.bnx{width:100%;background:#86ad7c;color:#fff;font-family:var(--fb);font-size:.86rem;font-weight:700;padding:.62rem 1rem;border-radius:10px;border:none;cursor:pointer;transition:all .2s;display:none}
.bnx:hover{background:var(--green)}

/* â”€â”€ CONFIRM MODAL â”€â”€ */
#mo{display:none;position:fixed;inset:0;background:rgba(26,46,26,.5);z-index:300;align-items:center;justify-content:center}
#mo.vis{display:flex}
.mb{background:var(--card);border-radius:18px;padding:1.7rem 1.5rem;max-width:280px;width:90%;text-align:center;box-shadow:0 12px 40px rgba(26,46,26,.25);animation:pi .2s ease}
@keyframes pi{from{transform:scale(0);opacity:0}to{transform:scale(1);opacity:1}}
.mi{font-size:2rem;margin-bottom:.4rem}.mt2{font-family:var(--fd);font-size:1.05rem;color:var(--ink);margin-bottom:.25rem}
.mx{font-size:.8rem;color:var(--mid);line-height:1.6;margin-bottom:1.1rem}.mbs{display:flex;gap:.5rem}
.mc2{flex:1;background:var(--pale);color:var(--mid);border:none;border-radius:9px;padding:.62rem;font-family:var(--fb);font-size:.84rem;font-weight:700;cursor:pointer}
.mc2:hover{background:var(--pd)}
.mf{flex:1;background:#86ad7c;color:#fff;border:none;border-radius:9px;padding:.62rem;font-family:var(--fb);font-size:.84rem;font-weight:700;cursor:pointer}
.mf:hover{background:var(--green)}

/* PASSWORD + EDIT MODALS */
.app-modal{display:none;position:fixed;inset:0;z-index:900;align-items:center;justify-content:center;padding:1rem;background:rgba(26,46,26,.45)}
.app-modal.vis{display:flex}
.app-box{background:#fff;border:2px solid var(--pd);border-radius:22px;width:min(92vw,520px);max-height:88vh;overflow:auto;box-shadow:0 18px 60px rgba(26,46,26,.25);padding:1.2rem}
.app-title{font-family:var(--fd);font-size:1.45rem;color:var(--ink);margin-bottom:.35rem}
.app-text{font-size:.82rem;color:var(--mid);line-height:1.5;margin-bottom:.85rem}
.app-input,.app-textarea,.app-select{width:100%;border:1.5px solid var(--pd);border-radius:11px;padding:.62rem .75rem;font-family:var(--fb);font-size:.84rem;color:var(--ink);background:#fff;outline:none;margin-bottom:.65rem}
.app-textarea{min-height:78px;resize:vertical;line-height:1.45}
.app-label{font-size:.58rem;font-weight:800;text-transform:uppercase;letter-spacing:.12em;color:var(--green);margin:.3rem 0 .25rem}
.app-error{display:none;color:var(--bad);font-size:.78rem;font-weight:800;margin:.1rem 0 .7rem}.app-error.show{display:block}
.app-actions{display:flex;gap:.55rem;flex-wrap:wrap;justify-content:flex-end;margin-top:.45rem}
.app-actions button{border:1.5px solid var(--pd);border-radius:999px;padding:.62rem .9rem;font-family:var(--fb);font-weight:800;cursor:pointer;background:#fff;color:var(--ink)}
.app-actions .primary{background:#86ad7c;color:#fff;border-color:#86ad7c}.app-actions .soft{background:#e7f2e2}.app-actions .danger{background:#fff5f5;color:#a96f6a;border-color:#efb4b4}

/* â”€â”€ RESULTS â”€â”€ */
#results{align-items:center;justify-content:center;padding:2rem 1rem;background:var(--bg)}
.ri{max-width:420px;width:100%;text-align:center}
.re{font-size:2.8rem;margin-bottom:.6rem;display:block;animation:pi .5s ease}
.rt{font-family:var(--fd);font-size:1.75rem;color:var(--ink);margin-bottom:.28rem}
.rs2{font-size:.84rem;color:var(--mid);margin-bottom:1.4rem;font-weight:300}
.sr2{width:120px;height:120px;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 1.2rem}
.sri2{width:92px;height:92px;border-radius:50%;background:var(--card);display:flex;flex-direction:column;align-items:center;justify-content:center}
.srn{font-family:var(--fd);font-size:1.75rem;color:var(--ink);line-height:1}.srl{font-size:.65rem;color:var(--light)}
.pod{display:flex;align-items:flex-end;justify-content:center;gap:.55rem;margin-bottom:1.4rem;height:115px}
.pc{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;gap:.3rem}
.pb{width:60px;border-radius:8px 8px 0 0;display:flex;align-items:center;justify-content:center;font-family:var(--fd);font-size:1.3rem;color:#fff}
.pn{font-size:.68rem;font-weight:700;text-align:center;max-width:66px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.pp{font-size:.6rem;color:var(--light)}
.prc{display:flex;flex-direction:column;gap:.55rem;margin-bottom:1.4rem}
.prc2{background:var(--card);border-radius:13px;padding:.9rem 1.1rem;box-shadow:var(--sh);display:flex;align-items:center;gap:.8rem;text-align:left}
.prc2.r1{border-left:4px solid var(--green)}.prc2.r2{border-left:4px solid #aaa}.prc2.r3{border-left:4px solid #b87333}
.prk{font-family:var(--fd);font-size:1.25rem;color:#ddd;width:22px;flex-shrink:0;text-align:center}.prk.r1{color:var(--green)}
.prd{width:10px;height:10px;border-radius:50%;flex-shrink:0}.pri{flex:1}
.prn{font-weight:700;font-size:.9rem;margin-bottom:.18rem}
.prb{height:5px;background:var(--pale);border-radius:999px;overflow:hidden;margin-bottom:.28rem}
.prbf{height:100%;border-radius:999px}
.prs{display:flex;gap:.35rem;flex-wrap:wrap}
.prs2{font-size:.66rem;font-weight:700;padding:.12rem .45rem;border-radius:999px}
.prs2.ok{background:var(--okl);color:var(--ok)}.prs2.bad{background:var(--badl);color:var(--bad)}.prs2.pct{background:var(--gl);color:var(--green)}
.prtr{font-size:1.4rem;flex-shrink:0}
.rbs{display:flex;flex-direction:column;gap:.5rem;margin-top:.8rem}
.br{font-family:var(--fb);font-size:.88rem;font-weight:700;padding:.78rem;border-radius:11px;border:none;cursor:pointer;transition:all .2s;width:100%}
.br.pr{background:#86ad7c;color:#fff}.br.pr:hover{background:#9fbd7a}
.br.se{background:var(--card);color:var(--ink);border:1.5px solid var(--pale)}.br.se:hover{border-color:var(--green);color:var(--green)}
.br.er{background:var(--badl);color:var(--bad);border:2px solid var(--bad)}.br.er:hover{background:var(--bad);color:#fff}
.perfect-cup{width:150px;height:150px;margin:0 auto 1rem;display:block;animation:cupPop .85s ease both}
.perfect-cup .cup-line{fill:none;stroke:#8ead79;stroke-width:3;stroke-linecap:round;stroke-linejoin:round}
.perfect-cup .cup-soft{fill:#f7fbef;stroke:#b8d2a8;stroke-width:2;stroke-linejoin:round}
@keyframes cupPop{0%{transform:scale(.65);opacity:0}70%{transform:scale(1.08);opacity:1}100%{transform:scale(1)}}
.confetti-piece{position:fixed;top:-18px;width:8px;height:14px;border-radius:2px;z-index:999;pointer-events:none;animation:confettiFall linear infinite}
@keyframes confettiFall{0%{transform:translateY(-20px) rotate(0deg);opacity:1}100%{transform:translateY(110vh) rotate(720deg);opacity:.9}}
.perfect-msg-box{background:var(--card);border:1.5px solid var(--pd);border-radius:16px;padding:1rem;margin:0 auto 1rem;box-shadow:var(--sh);color:var(--mid);font-weight:700}

/* â”€â”€ REVIEW â”€â”€ */
#review{background:var(--bg)}
.rvtb{background:var(--card);padding:.75rem 1rem;display:flex;align-items:center;justify-content:space-between;gap:.65rem;box-shadow:0 2px 8px rgba(26,46,26,.07);position:sticky;top:0;z-index:100}
.rvti .rvt{font-family:var(--fd);font-size:.95rem;color:var(--ink)}.rvti .rvs{font-size:.68rem;color:var(--light);margin-top:.06rem}
.rvbody{padding:.9rem 1rem 4rem;max-width:560px;margin:0 auto;width:100%}
.rvps{margin-bottom:1.4rem}
.rvph{display:flex;align-items:center;gap:.45rem;margin-bottom:.6rem;padding:.38rem .7rem;border-radius:9px}
.rvpn{font-size:.84rem;font-weight:700}.rvpc{font-size:.68rem;font-weight:700;padding:.12rem .48rem;border-radius:999px;background:var(--badl);color:var(--bad)}
.wc{background:var(--card);border-radius:13px;padding:.9rem 1.1rem;box-shadow:var(--sh);margin-bottom:.65rem;border-left:4px solid var(--bad)}
.wp{font-family:var(--fd);font-size:.92rem;line-height:1.65;color:var(--ink);margin-bottom:.35rem}
.wa{display:inline-block;background:var(--okl);color:var(--ok);border-radius:6px;padding:.06rem .45rem;font-family:var(--fb);font-weight:700;font-size:.84rem}
.we2{font-size:.74rem;color:var(--light);font-style:italic;margin-bottom:.42rem}
.wexp{font-size:.76rem;color:var(--mid);line-height:1.5;padding-top:.4rem;border-top:1px solid var(--pale)}
.neo{text-align:center;padding:2.5rem 1rem}.nei{font-size:2.5rem;margin-bottom:.5rem;display:block}.net{font-family:var(--fd);font-size:1.1rem;color:var(--light)}
@media(max-width:380px){.quiz-grid{grid-template-columns:1fr}.opts-grid{grid-template-columns:1fr}}

.btn-start-3d { background: #689e5e; color: #fff; border: none; border-radius: 16px; padding: 14px 40px; font-family: var(--fb); cursor: pointer; box-shadow: 0 6px 0 #4a7541, 0 10px 15px rgba(44,66,48,.3); transition: all .1s; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 3px; line-height: 1.2; flex-shrink: 0; }
.btn-start-3d:active { transform: translateY(6px); box-shadow: 0 0 0 #4a7541, 0 2px 5px rgba(44,66,48,.3); }
.btn-start-3d strong { font-size: 18px; font-weight: 800; letter-spacing: 0.5px; }
.btn-start-3d span { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.85); text-transform: uppercase; letter-spacing: 1px; }
.btn-cancel-3d { background: #eef7eb; color: var(--mid); border: 1.5px solid #c4e1c3; border-radius: 16px; padding: 14px 28px; font-family: var(--fb); cursor: pointer; box-shadow: 0 6px 0 #c4e1c3, 0 10px 15px rgba(0,0,0,.08); transition: all .1s; display: flex; align-items: center; justify-content: center; margin-top:0; }
.btn-cancel-3d:active { transform: translateY(6px); box-shadow: 0 0 0 #c4e1c3, 0 2px 5px rgba(0,0,0,.08); }
.btn-cancel-3d strong { font-size: 14px; font-weight: 700; color: var(--mid); }
</style>
</head>
<body>

<!-- ZOOM MODAL -->
<div id="zm">
  <button id="zm-bg" onclick="closeZoom()"></button>
  <div class="zm-box">
    <button class="zm-inner" onclick="closeZoom()">
      <div class="zm-hdr">
        <div class="zm-tense" id="zm-title"></div>
        <div class="zm-hint">Toca para cerrar</div>
      </div>
      <div id="zm-body"></div>
    </button>
  </div>
</div>

<!-- CONFIRM MODAL -->
<div id="mo">
  <div class="mb">
    <div class="mi" id="mi">↻</div>
    <div class="mt2" id="mt2"></div>
    <div class="mx" id="mx"></div>
    <div class="mbs">
      <button class="mc2" onclick="cm()">Cancelar</button>
      <button class="mf" id="mf">Confirmar</button>
    </div>
  </div>
</div>

<!-- PASSWORD MODAL -->
<div id="pwModal" class="app-modal">
  <div class="app-box">
    <div class="app-title" id="pwTitle">Modo editar</div>
    <div class="app-text" id="pwText">Para entrar en modo editar escribe la contraseña:</div>
    <input class="app-input" id="pwInput" type="password" placeholder="Contraseña" autocomplete="off">
    <div class="app-error" id="pwError">Contraseña incorrecta. Puedes volver a intentarlo.</div>
    <div class="app-actions" id="pwActions"></div>
  </div>
</div>

<!-- STUDY EDITOR MODAL -->
<div id="studyEditorModal" class="app-modal">
  <div class="app-box">
    <div class="app-title" id="studyEditorTitle">Editar flashcard</div>
    <div class="app-label">Nombre del tiempo verbal</div>
    <input class="app-input" id="editTense" placeholder="Present Simple">
    <div class="app-label">Subtítulo</div>
    <input class="app-input" id="editSub" placeholder="Hábitos y verdades generales">
    <div class="app-label">Estructura</div>
    <textarea class="app-textarea" id="editStruct" placeholder="(+) S + V(s/es) | (-) ..."></textarea>
    <div class="app-label">Ejemplos (uno por línea: Inglés | Español)</div>
    <textarea class="app-textarea" id="editExamples"></textarea>
    <div class="app-label">Truco / explicación</div>
    <textarea class="app-textarea" id="editTip"></textarea>
    <div class="app-error" id="studyEditError">Rellena como mínimo el nombre, estructura y un ejemplo.</div>
    <div class="app-actions">
      <button type="button" onclick="closeStudyEditor()">Cancelar</button>
      <button type="button" class="danger" id="deleteStudyBtn" onclick="deleteStudyCard()">Eliminar card</button>
      <button type="button" class="primary" onclick="saveStudyEditor()">Guardar cambios</button>
    </div>
  </div>
</div>

<!-- QUIZ EDITOR MODAL -->
<div id="quizEditorModal" class="app-modal">
  <div class="app-box">
    <div class="app-title">Editar preguntas del Quiz</div>
    <div class="app-text">Busca o navega por las preguntas. Se guardan dentro del HTML cuando pulses descargar.<br><label style="display:inline-block;margin-top:8px;padding:6px 10px;background:#eee;border-radius:6px;cursor:pointer;font-weight:bold"><input type="checkbox" id="quizRevToggle" onchange="toggleQuizRev()"> Activar Botón de Revisión</label></div>
    <div class="app-label" style="margin-top:10px;">Categoría</div>
    <select class="app-input" id="quizFilter" onchange="filterQuizEditor()">
      <option value="all">Todas</option>
      <option value="0">Acciones Presentes</option>
      <option value="1">Acciones Pasadas</option>
      <option value="2">Acciones Futuras</option>
      <option value="3">Todo Mezclado</option>
    </select>
    <div class="app-label" style="margin-top:10px;">Buscador</div>
    <input class="app-input" id="quizSearch" placeholder="Buscar por pregunta, respuesta o español..." oninput="filterQuizEditor()">
    <div style="font-size:11px;letter-spacing:2px;text-transform:uppercase;color:var(--text3);margin-top:10px;">Pregunta <span id="quizEditorPos"></span></div>
    <textarea class="app-textarea" id="editQText"></textarea>
    <div class="app-label">Respuesta correcta</div>
    <input class="app-input" id="editQAnswer">
    <div class="app-label">Opciones (una por línea)</div>
    <textarea class="app-textarea" id="editQOptions"></textarea>
    <div class="app-label">Tiempo verbal</div>
    <input class="app-input" id="editQTense">
    <div class="app-label">Explicación</div>
    <textarea class="app-textarea" id="editQExplain"></textarea>
    <div class="app-label">Traducción al español</div>
    <textarea class="app-textarea" id="editQSpanish"></textarea>
    <div class="app-error" id="quizEditError">La pregunta, respuesta y opciones no pueden quedar vacías.</div>
    <div class="app-actions" style="flex-wrap:wrap; justify-content:center; gap:8px;">
      <button type="button" onclick="quizEditorMove(-1)">Anterior</button>
      <button type="button" onclick="quizEditorMove(1)">Siguiente</button>
      <button type="button" id="quizRevBtn" style="display:none;font-weight:bold;color:white" onclick="toggleQVerified()">Por comprobar</button>
      <button type="button" class="soft" style="background:#e0f0e0" onclick="newQuizQuestion()">+ Nueva</button>
      <button type="button" class="danger" onclick="deleteQuizQuestion()">Borrar</button>
      <button type="button" class="soft" onclick="closeQuizEditor()">Cerrar</button>
      <button type="button" class="primary" onclick="saveQuizEditor()">Guardar</button>
    </div>
  </div>
</div>

<!-- HOME -->
<div id="home" class="screen active">
  <div class="hi">
    <div class="badge">English Grammar · A2-C1</div>
    <h1>English<br><em>Tenses</em></h1>
    <span class="ul"></span>
    <p class="hsub">Aprende todos los tiempos verbales.<br><span id="homeCardCount">18</span> flashcards + 4 quiz de 250 preguntas.</p>
    <div class="home-grid">
      <div class="home-actions"></div>
      <!-- Study card -->
      <div class="hcard-study" onclick="requestStudyMode()">
        <div class="hr">
          <svg class="hsvg" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <path class="sketch-line" d="M8.5 33.5c-.4-8.1-.4-16.2.2-24.2 4.2-.9 11.1-.8 15.4.2 2.3.5 4.5 2.1 6.4 3.8-.3 6.6-.3 13.4-.1 20-5.9-1.4-14.7-1.2-21.9.2Z"/>
            <path class="sketch-soft" d="M13.5 16.2c3.6-.5 7.2-.5 10.7.1M13.4 22.1c4.1-.5 8-.5 11.8 0M13.7 27.9c2.7-.3 5.1-.4 7.8-.1"/>
          </svg>
          <div>
            <div class="htitle">Modo Estudio</div>
            <div class="hdesc"><span id="homeStudyCount">18</span> flashcards — estructura, ejemplos y trucos para cada tiempo verbal</div>
          </div>
        </div>
        <div class="htags">
          <span class="htag hl"><span id="homeTagCount">18</span> tiempos</span>
          <span class="htag">Estructura</span>
          <span class="htag">Ejemplos</span>
          <span class="htag">Trucos</span>
        </div>
        <button class="btn-c" onclick="event.stopPropagation();requestStudyMode()">Estudiar ahora</button>
      </div>

      <!-- Quiz section label -->
      <div class="home-section-label">Quiz interactivo — elige el modo</div>

      <!-- 2x2 quiz grid -->
      <div class="quiz-grid">
        <div class="qhcard q0" onclick="startQSetup(0)">
          <div class="qi"><svg class="sketch-icon" viewBox="0 0 64 64" aria-hidden="true"><path class="sketch-line" d="M10 44.5c11.7-1.5 28.8-1.3 44 .4"/><path class="sketch-soft" d="M18 40c4.4-8.5 9.2-12.2 14.1-12.1 5 .1 9.7 4.4 13.9 12.6M31.8 15.8c.2 3.4.1 5.7-.2 8.8M18.2 22.8c2.3 2 4.4 4 6.2 6.1M45.1 22.5c-2.1 2-4 4-5.7 6.3"/></svg></div>
          <div class="qn">Acciones<br>Presentes</div>
          <div class="qd">Present Simple, Continuous, Perfect...</div>
          <div class="qc">250 preguntas</div>
        </div>
        <div class="qhcard q1" onclick="startQSetup(1)">
          <div class="qi"><svg class="sketch-icon" viewBox="0 0 64 64" aria-hidden="true"><path class="sketch-line" d="M18 12.5c8.2-1.5 18.9-1.2 27 .5 1.7 10.5 1.5 26.1-.4 37.1-7.7-1.5-17.8-1.6-25.9-.1-1.4-10.8-1.3-26.1-.7-37.5Z"/><path class="sketch-soft" d="M24 23.5c5.2-.7 10.2-.7 15.4 0M24.2 31.7c4.8-.5 9.1-.5 13.9-.1M24 40c3.3-.4 6.4-.3 9.7.1"/></svg></div>
          <div class="qn">Acciones<br>Pasadas</div>
          <div class="qd">Past Simple, Continuous, Perfect...</div>
          <div class="qc">250 preguntas</div>
        </div>
        <div class="qhcard q2" onclick="startQSetup(2)">
          <div class="qi"><svg class="sketch-icon" viewBox="0 0 64 64" aria-hidden="true"><path class="sketch-line" d="M32.3 8.7c7.3 6.8 10.5 16.7 8.4 26.7-5.7 1.8-12.1 1.7-17.7-.2-1.5-9.9 1.4-19.9 9.3-26.5Z"/><path class="sketch-soft" d="M27.4 36.6c-2.4 3.8-4.8 8.4-6.3 13.3M37.1 36.5c2.5 4 4.7 8.3 6.5 13.1M29.5 49.5c1.3 2.6 1.8 4.7 2.1 7.2M35.1 49.1c-.9 2.6-1.5 4.8-1.7 7.2M29.7 20.4c1.8-.4 3.5-.4 5.2.2"/></svg></div>
          <div class="qn">Acciones<br>Futuras</div>
          <div class="qd">Will, Going to, Future Continuous...</div>
          <div class="qc">250 preguntas</div>
        </div>
        <div class="qhcard q3" onclick="startQSetup(3)">
          <div class="qi"><svg class="sketch-icon" viewBox="0 0 64 64" aria-hidden="true"><path class="sketch-line" d="M17.2 18.7c7.7-1.9 21.3-1.8 29.4.2 1.8 7.5 1.8 20.6-.2 28.1-7.9 1.8-21 1.7-28.9-.1-1.8-7.9-1.8-20.4-.3-28.2Z"/><path class="sketch-soft" d="M25 26.2h.1M39 26.2h.1M32 32.3h.1M25 39.3h.1M39 39.3h.1"/></svg></div>
          <div class="qn">Todo<br>Mezclado</div>
          <div class="qd">Todos los tiempos combinados</div>
          <div class="qc">250 preguntas</div>
        </div>
      </div>
<div style="margin-top: 10px;text-align: center; display: flex; justify-content: center; gap: 20px; flex-wrap: wrap;">
      
      
    </div>
    </div>
  </div>
</div>

<!-- FLASHCARDS / QUIZ QUESTIONS EDITOR -->
<div id="flashcardsScreen" class="screen">
  <div class="fce-wrap">
    <div class="fce-top">
      <button onclick="ss('home')">Inicio</button>
      <button onclick="flashMove(-1)">← Anterior</button>
      <button onclick="flashMove(1)">Siguiente →</button>
      <button class="primary" onclick="flashNew()">Crear card</button>
      <input class="app-input" id="flashSearch" placeholder="Buscar pregunta, respuesta, traducción..." oninput="flashFilter()">
      <div class="fce-count" id="flashCount">Card 1 de 1</div>
    </div>
    <div class="fce-card" id="flashCardBox">
      <div class="fce-edit">
        <div class="fce-row">
          <div>
            <div class="app-label">Modo</div>
            <select class="app-select" id="flashMode" onchange="flashModeChanged()">
              <option value="0">Acciones Presentes</option>
              <option value="1">Acciones Pasadas</option>
              <option value="2">Acciones Futuras</option>
              <option value="3">Todo Mezclado</option>
            </select>
          </div>
          <div>
            <div class="app-label">Respuesta correcta</div>
            <input class="app-input" id="flashAnswer">
          </div>
        </div>
        <div class="app-label">Pregunta</div>
        <textarea class="app-textarea" id="flashQuestion"></textarea>
        <div class="fce-row">
          <div>
            <div class="app-label">Respuesta incorrecta 1</div>
            <input class="app-input" id="flashWrong1">
          </div>
          <div>
            <div class="app-label">Respuesta incorrecta 2</div>
            <input class="app-input" id="flashWrong2">
          </div>
        </div>
        <div class="app-label">Respuesta incorrecta 3</div>
        <input class="app-input" id="flashWrong3">
        <div class="fce-row">
          <div>
            <div class="app-label">Tiempo verbal</div>
            <input class="app-input" id="flashTense">
          </div>
          <div>
            <div class="app-label">Traducción al español</div>
            <textarea class="app-textarea" id="flashSpanish"></textarea>
          </div>
        </div>
        <div class="app-label">Explicación</div>
        <textarea class="app-textarea" id="flashExplain"></textarea>
        <div class="app-error" id="flashError">La pregunta, respuesta y las tres incorrectas no pueden quedar vacías.</div>
        <div class="fce-actions">
          <button class="primary" onclick="flashSave()">Guardar card</button>
          <button onclick="flashPreview()">Ver cómo queda</button>
          <button onclick="flashNew()">Crear otra</button>
          <button class="danger" onclick="flashDelete()">Eliminar card</button>
          <button onclick="ss('home')">Regresar a inicio</button>
        </div>
      </div>
      <div class="fce-preview">
        <div class="fce-preview-title">Vista previa del quiz</div>
        <div class="fce-quiz-card" id="flashPreviewCard" onclick="this.classList.toggle('flipped')">
          <div class="fce-preview-question" id="flashPreviewQuestion"></div>
          <div class="fce-preview-options" id="flashPreviewOptions"></div>
          <div class="fce-preview-answer" id="flashPreviewAnswer"></div>
        </div>
        <div class="fce-actions">
          <button class="primary" onclick="flashBackToEdit()">Volver a la edición</button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- STUDY -->
<div id="study" class="screen">
  <div class="stb">
    <div class="stb-row1">
      
      <div class="sp">
        <div class="spl">Tarjeta <span id="fcn">1</span> de 18</div>
        <div class="spb"><div class="spf" id="fcf" style="width:6%"></div></div>
      </div>
      <div class="snb">
        <button class="bsn" id="fcp" onclick="fn(-1)" disabled>←</button>
        <button class="bsn" id="fcnx" onclick="fn(1)">→</button>
      </div>
    </div>
    <div class="search-row">
      <div class="search-wrap">
        <span class="si">⌕</span>
        <input type="text" id="srch" placeholder="Buscar tiempo verbal..." oninput="doSearch()" onblur="setTimeout(()=>closeSR(),200)" autocomplete="off">
        <div class="sr-list" id="sr-list"></div>
      </div>
      <button class="brnd" onclick="goRandom()">Random</button>
    </div>
  </div>
  <div class="sbody">
    <div class="editbar" id="studyEditBar">
      <button class="primary" onclick="openStudyEditor(false)">✏️ Editar esta card</button>
      <button onclick="openStudyEditor(true)">➕ Añadir card</button>
    </div>
    <div class="flip-hint"><span></span> Toca la tarjeta para girarla</div>
    <div class="flip-nav" id="dn"></div>
    <div class="flip-scene" onclick="flipCard()">
      <div class="flip-card" id="fc-card">
        <div class="flip-face flip-front" id="fc-front"></div>
        <div class="flip-face flip-back" id="fc-back"></div>
      </div>
    </div>
    <div class="flip-btns">
      <button class="bfn" id="fcp2" onclick="fn(-1)" disabled>← Anterior</button>
      <button class="bfn pr" id="fcnx2" onclick="fn(1)">Siguiente →</button>
    </div>
  </div>
</div>

<!-- QUIZ SETUP -->
<div id="qsetup" class="screen">
  <div class="qsi">
    <h2 class="qs-title" id="qset-title">Configurar Quiz</h2>
    <p class="qs-sub">Elige jugadores y número de preguntas.</p>
    <div class="scard">
      <div class="sl">¿Cuántos jugadores?</div>
      <div class="cbtns">
        <button class="cbt sel" onclick="sc(1)"><span class="n">1</span><span class="l">Solo</span></button>
        <button class="cbt" onclick="sc(2)"><span class="n">2</span><span class="l">Jugadores</span></button>
      </div>
      <div class="sl">Nombres</div>
      <div class="prow" id="pr0"><div class="pdot" style="background:#1a5c8a"></div><input type="text" id="pn0" placeholder="Jugador 1" maxlength="14"></div>
      <div class="prow hidden" id="pr1"><div class="pdot" style="background:#8a2d7a"></div><input type="text" id="pn1" placeholder="Jugador 2" maxlength="14"></div>
      <div class="qcr">
        <label>Preguntas:</label>
        <select id="qpp">
          <option value="5">5</option>
          <option value="10" selected>10</option>
          <option value="15">15</option>
        </select>
      </div>
      <div style="display:flex; gap:16px; margin-top:20px; align-items:flex-end;">
        <button class="btn-cancel-3d" onclick="ss('home')"><strong>← Cancelar</strong></button>
        <button class="btn-start-3d" onclick="sg()"><strong>Start Quiz →</strong><span>Empezar Quiz</span></button>
      </div>
    </div>
  </div>
</div>

<!-- QUIZ -->
<div id="quiz" class="screen">
  <div class="qtb">
    <div class="qpw">
      <div class="qpl">Pregunta <span id="qn">1</span>/<span id="qt">10</span></div>
      <div class="qpb"><div class="qpf" id="qf" style="width:10%"></div></div>
    </div>
    <div class="ssc" id="ssc"><span class="so" id="sso">✓ 0</span><span class="sb" id="ssb">✗ 0</span></div>
    <div class="ctn" id="ctt" style="display:none">
      <div id="ccd" style="width:8px;height:8px;border-radius:50%"></div>
      <span id="ccn" style="font-size:.7rem;font-weight:700"></span>
    </div>
    <div id="tts" style="display:none;display:flex;gap:.28rem;flex-wrap:wrap"></div>
    <button class="btq" onclick="cr()" title="Reiniciar">↻</button>
    <button class="btq ex btn-3d" onclick="ch()" title="Salir">Inicio</button>
  </div>
  <div class="qbody">
    <div class="q-cat" id="qcat"></div>
    <div class="qnl" id="qnl"></div>
    <div class="ptb" id="ptb" style="display:none"><div class="ptbd" id="ptbd"></div><span id="ptbn"></span></div>
    <div class="qsen" id="qsen"><div class="q-text" id="qtext"></div></div>
    <div class="eb" id="eb"><div class="el">Explicación</div><div class="et" id="et"></div></div>
    <div class="opts-grid" id="og"></div>
    <button class="bnx" id="bnx" onclick="nt()">Siguiente →</button>
  </div>
</div>

<!-- RESULTS -->
<div id="results" class="screen">
  <div class="ri">
    <span class="re" id="re"></span>
    <h2 class="rt" id="rtit"></h2>
    <p class="rs2" id="rs2"></p>
    <div id="rb"></div>
    <div class="rbs">
      <button class="br er" id="bre" style="display:none" onclick="svr()">Repasar solo los errores</button>
      <button class="br pr" onclick="rg()">Jugar de nuevo</button>
      <button class="br se" onclick="startQSetup(currentMode)">Cambiar ajustes</button>
      <button class="br se" onclick="ss('home')">Inicio</button>
    </div>
  </div>
</div>

<!-- REVIEW -->
<div id="review" class="screen">
  <div class="rvtb">
    <div class="rvti"><div class="rvt">Repaso de errores</div><div class="rvs" id="rvs"></div></div>
    <button class="btq" onclick="ss('results');window.scrollTo(0,0)">â† Volver</button>
  </div>
  <div class="rvbody" id="rvb"></div>
</div>

<script>
// â•â• STUDY DATA â•â•
let SD=[
{id:0,tense:'Present Simple',sub:'HÃ¡bitos y verdades generales',color:'#1a6b1a',
 struct:'(+) S + V(s/es)  |  (-) S + don\'t/doesn\'t + V  |  (?) Do/Does + S + V?',
 ex:[{en:'She works every day.',es:'Ella trabaja todos los dÃ­as.'},{en:'I don\'t drink coffee.',es:'No bebo cafÃ©.'},{en:'Does he speak French?',es:'Â¿Habla Ã©l francÃ©s?'}],
 tip:'<strong>SeÃ±ales:</strong> always, usually, often, sometimes, never, every day/week.<br><strong>Ojo:</strong> 3Âª persona â†’ +s/es. "She goes, he watches, it finishes".',
 illo:'<svg viewBox="0 0 100 72" fill="none"><circle cx="50" cy="36" r="22" stroke="#1a2e1a" stroke-width="1.6" fill="none"/><path d="M50 20v16l10 8" stroke="#1a2e1a" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="36" r="2.5" fill="#1a2e1a"/><path d="M26 58Q30 64 34 58" stroke="#4a6b4a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M66 58Q70 64 74 58" stroke="#4a6b4a" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>'},
{id:1,tense:'Present Continuous',sub:'AcciÃ³n en progreso ahora mismo',color:'#1a5c8a',
 struct:'(+) S + am/is/are + V-ing  |  (-) S + am/is/are not + V-ing  |  (?) Am/Is/Are + S + V-ing?',
 ex:[{en:'She is working right now.',es:'EstÃ¡ trabajando ahora mismo.'},{en:'We aren\'t watching TV.',es:'No estamos viendo la tele.'},{en:'Is he coming?',es:'Â¿Viene Ã©l?'}],
 tip:'<strong>SeÃ±ales:</strong> now, right now, at the moment, currently, look!, listen!<br><strong>Ojo:</strong> Verbos de estado NO van en continuous: know, love, want, need, believe.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M28 52Q26 36 34 26Q44 16 54 18Q66 20 72 32Q76 44 68 54" stroke="#1a2e1a" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="50" cy="18" r="6" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M44 36Q50 32 56 36" stroke="#4a6b4a" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M36 24Q32 16 30 12" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/><path d="M64 22Q68 14 70 10" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/></svg>'},
{id:2,tense:'Present Perfect',sub:'Pasado con resultado en el presente',color:'#5a8a2d',
 struct:'(+) S + have/has + past participle  |  (-) S + haven\'t/hasn\'t + PP  |  (?) Have/Has + S + PP?',
 ex:[{en:'I\'ve just finished.',es:'Acabo de terminar.'},{en:'She hasn\'t called yet.',es:'TodavÃ­a no ha llamado.'},{en:'Have you ever been to Japan?',es:'Â¿Has estado en JapÃ³n?'}],
 tip:'<strong>SeÃ±ales:</strong> already, yet, just, ever, never, for, since, recently, so far.<br><strong>Ojo:</strong> No se usa con fechas o tiempos pasados concretos (yesterday, last week, in 2010).',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M16 52Q16 28 32 20Q48 12 62 24Q76 36 72 52" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M16 52Q44 58 72 52" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M38 52Q38 40 48 36Q60 36 60 52" stroke="#4a6b4a" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M40 30Q50 22 60 30" stroke="#1a2e1a" stroke-width="1.7" stroke-linecap="round"/></svg>'},
{id:3,tense:'Present Perfect Continuous',sub:'DuraciÃ³n de acciÃ³n que empezÃ³ antes y sigue',color:'#2d7a5a',
 struct:'(+) S + have/has + been + V-ing  |  (-) S + haven\'t/hasn\'t + been + V-ing',
 ex:[{en:'I\'ve been studying for 3 hours.',es:'Llevo 3 horas estudiando.'},{en:'She has been working here since 2018.',es:'Lleva aquÃ­ desde 2018.'},{en:'They haven\'t been sleeping well.',es:'No han estado durmiendo bien.'}],
 tip:'<strong>SeÃ±ales:</strong> for (duraciÃ³n), since (punto de inicio), all day/morning/week.<br><strong>Clave:</strong> Ã©nfasis en la DURACIÃ“N o el proceso, no en el resultado.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M12 52Q16 28 28 20" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M28 20Q42 12 58 16Q74 20 82 36Q86 48 84 58" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="12" cy="52" r="3.5" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><circle cx="84" cy="58" r="3.5" fill="#1a2e1a"/><path d="M46 42Q52 38 58 42Q64 48 58 54Q52 56 46 52Q40 48 46 42Z" stroke="#1a2e1a" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>'},
{id:4,tense:'Past Simple',sub:'Acciones completadas en el pasado',color:'#8a5c1a',
 struct:'(+) S + V-ed/irregular  |  (-) S + didn\'t + V  |  (?) Did + S + V?',
 ex:[{en:'She visited Paris last year.',es:'VisitÃ³ ParÃ­s el aÃ±o pasado.'},{en:'I didn\'t see the email.',es:'No vi el correo.'},{en:'Did you enjoy the film?',es:'Â¿Disfrutaste la pelÃ­cula?'}],
 tip:'<strong>SeÃ±ales:</strong> yesterday, last week/year, ago, in 2010, when...<br><strong>Irregulares:</strong> goâ†’went, seeâ†’saw, takeâ†’took, haveâ†’had, doâ†’did.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M18 44Q20 26 32 20Q44 14 56 18Q68 22 74 34Q80 46 76 56" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M76 56Q56 62 18 56" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M90 36Q94 26 92 18" stroke="#4a6b4a" stroke-width="1.2" fill="none" stroke-linecap="round"/><circle cx="92" cy="16" r="3" stroke="#1a2e1a" stroke-width="1.3" fill="none"/></svg>'},
{id:5,tense:'Past Continuous',sub:'AcciÃ³n en progreso en un momento pasado',color:'#6b3d1a',
 struct:'(+) S + was/were + V-ing  |  (-) S + wasn\'t/weren\'t + V-ing  |  (?) Was/Were + S + V-ing?',
 ex:[{en:'I was watching TV when she called.',es:'Estaba viendo la tele cuando llamÃ³.'},{en:'They were working all night.',es:'Trabajaron toda la noche.'},{en:'Was he sleeping?',es:'Â¿Estaba durmiendo?'}],
 tip:'<strong>Uso 1:</strong> AcciÃ³n de fondo interrumpida: "I was cooking WHEN he arrived."<br><strong>Uso 2:</strong> Dos acciones paralelas: "While she was singing, he was dancing."',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M14 52Q18 30 32 22Q46 14 62 22Q76 32 80 52" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-dasharray="5,3"/><path d="M14 52Q47 58 80 52" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M46 42Q46 34 54 32Q62 34 62 42" stroke="#1a2e1a" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>'},
{id:6,tense:'Past Perfect',sub:'El "pasado del pasado"',color:'#5a3d8a',
 struct:'(+) S + had + past participle  |  (-) S + hadn\'t + PP  |  (?) Had + S + PP?',
 ex:[{en:'She had already eaten when I arrived.',es:'Ya habÃ­a comido cuando lleguÃ©.'},{en:'I hadn\'t seen that film.',es:'No habÃ­a visto esa pelÃ­cula.'},{en:'Had they left?',es:'Â¿Se habÃ­an ido?'}],
 tip:'<strong>SeÃ±ales:</strong> before, after, already, by the time, when.<br><strong>Clave:</strong> "When I arrived, she HAD LEFT" â€” ella se fue PRIMERO, yo lleguÃ© DESPUÃ‰S.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M14 42Q18 22 36 16Q54 10 68 22Q80 34 78 48" stroke="#4a6b4a" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-dasharray="4,3"/><path d="M14 54Q18 32 36 26Q54 20 68 32Q80 44 78 58" stroke="#1a2e1a" stroke-width="1.7" fill="none" stroke-linecap="round"/><path d="M14 54Q46 62 78 58" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><circle cx="14" cy="42" r="3" stroke="#4a6b4a" stroke-width="1.2" fill="none"/></svg>'},
{id:7,tense:'Past Perfect Continuous',sub:'DuraciÃ³n de acciÃ³n antes de otra pasada',color:'#8a1a5c',
 struct:'(+) S + had + been + V-ing  |  (-) S + hadn\'t + been + V-ing',
 ex:[{en:'He had been running for 2 hours when it rained.',es:'Llevaba 2 horas corriendo cuando lloviÃ³.'},{en:'She had been studying all night.',es:'HabÃ­a estado estudiando toda la noche.'},{en:'They hadn\'t been sleeping well.',es:'No habÃ­an estado durmiendo bien.'}],
 tip:'<strong>Clave:</strong> = Past Perfect + Continuous. AcciÃ³n continua en el pasado que ocurriÃ³ ANTES que otra.<br>Habitual con "for" y "since" referidos al pasado.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M10 56Q14 36 24 26Q36 16 50 16Q66 16 74 28Q84 42 82 58" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M10 56Q46 64 82 58" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="56" r="4" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M36 46Q50 40 64 46Q70 52 64 58Q50 62 36 58Q30 52 36 46Z" stroke="#4a6b4a" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>'},
{id:8,tense:'Future: Will',sub:'Decisiones espontÃ¡neas y predicciones',color:'#1a5c8a',
 struct:'(+) S + will + V  |  (-) S + won\'t + V  |  (?) Will + S + V?',
 ex:[{en:'I\'ll help you with that.',es:'Te ayudarÃ© con eso.'},{en:'It won\'t rain tomorrow.',es:'No lloverÃ¡ maÃ±ana.'},{en:'Will you come?',es:'Â¿VendrÃ¡s?'}],
 tip:'<strong>Usos:</strong> decisiÃ³n espontÃ¡nea, predicciÃ³n, promesa, oferta.<br><strong>SeÃ±ales:</strong> I think, I believe, probably, I\'m sure, I expect.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M28 58Q26 34 38 24Q50 16 62 22Q76 30 76 52" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M28 58Q52 64 76 58" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M52 16Q52 10 52 6" stroke="#4a6b4a" stroke-width="1.3" stroke-linecap="round"/><path d="M44 20Q40 12 38 8" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/><path d="M60 20Q64 12 66 8" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/></svg>'},
{id:9,tense:'Future: Going to',sub:'Planes e intenciones ya decididas',color:'#2d7a5a',
 struct:'(+) S + am/is/are + going to + V  |  (-) S + am/is/are not + going to + V',
 ex:[{en:'I\'m going to study medicine.',es:'Voy a estudiar medicina.'},{en:'She\'s going to have a baby.',es:'Va a tener un bebÃ©.'},{en:'Are you going to apply?',es:'Â¿Vas a solicitar?'}],
 tip:'<strong>Usos:</strong> plan previo ya decidido o evidencia presente de futuro inminente.<br><strong>Diferencia will:</strong> "going to" = ya lo decidÃ­ antes; "will" = lo decido ahora.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M18 54Q20 36 32 24Q44 14 56 18Q68 22 74 36Q80 50 76 60" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M18 54Q47 62 76 60" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M60 18Q72 10 82 8Q86 14 84 20Q82 26 74 28" stroke="#1a2e1a" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
{id:10,tense:'Future Continuous',sub:'AcciÃ³n en progreso en un momento futuro',color:'#5a8a2d',
 struct:'(+) S + will + be + V-ing  |  (-) S + won\'t + be + V-ing  |  (?) Will + S + be + V-ing?',
 ex:[{en:'This time tomorrow I\'ll be flying.',es:'MaÃ±ana a esta hora estarÃ© volando.'},{en:'She won\'t be working Friday.',es:'El viernes no estarÃ¡ trabajando.'},{en:'Will you be using the car?',es:'Â¿UsarÃ¡s el coche?'}],
 tip:'<strong>SeÃ±ales:</strong> this time tomorrow/next week, at 8pm tomorrow.<br><strong>Tip:</strong> Ãštil para preguntar planes ajenos de forma educada: "Will you be joining us?"',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M14 52Q18 32 32 22Q46 14 62 22Q76 32 82 52" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round" stroke-dasharray="5,3"/><path d="M14 52Q48 58 82 52" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M84 18Q90 14 92 20Q94 28 90 34Q86 40 80 38" stroke="#1a2e1a" stroke-width="1.4" fill="none" stroke-linecap="round"/></svg>'},
{id:11,tense:'Future Perfect',sub:'AcciÃ³n completada antes de un momento futuro',color:'#8a2d5a',
 struct:'(+) S + will + have + past participle  |  (-) S + won\'t + have + PP',
 ex:[{en:'By 2030, I\'ll have saved enough.',es:'Para 2030, habrÃ© ahorrado suficiente.'},{en:'She won\'t have finished by Monday.',es:'No habrÃ¡ terminado para el lunes.'},{en:'Will you have graduated by June?',es:'Â¿HabrÃ¡s terminado para junio?'}],
 tip:'<strong>SeÃ±ales:</strong> by + tiempo futuro (by tomorrow, by next year, by the time).<br><strong>Imagen mental:</strong> sitÃºate en el futuro y mira hacia atrÃ¡s â€” Â¿estarÃ¡ hecho?',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M14 42Q40 18 70 20Q86 22 88 36" stroke="#4a6b4a" stroke-width="1.3" fill="none" stroke-linecap="round" stroke-dasharray="4,3"/><path d="M14 54Q40 28 70 28Q86 30 88 46" stroke="#1a2e1a" stroke-width="1.8" fill="none" stroke-linecap="round"/><circle cx="88" cy="46" r="4.5" stroke="#1a2e1a" stroke-width="1.6" fill="none"/><path d="M84 42Q88 46 84 50" stroke="#1a2e1a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
{id:12,tense:'Future Perfect Continuous',sub:'DuraciÃ³n de acciÃ³n hasta un punto futuro',color:'#2d5a8a',
 struct:'(+) S + will + have + been + V-ing  |  (-) S + won\'t + have + been + V-ing',
 ex:[{en:'By next year I\'ll have been working here for 10 years.',es:'Para el aÃ±o que viene llevarÃ© 10 aÃ±os aquÃ­.'},{en:'She\'ll have been studying for 6 hours by dinner.',es:'Para la cena llevarÃ¡ 6 horas estudiando.'}],
 tip:'<strong>El mÃ¡s complejo:</strong> futuro + perfecto + duraciÃ³n.<br><strong>SeÃ±ales:</strong> by + tiempo + for + duraciÃ³n.<br>Ã‰nfasis en el tiempo acumulado hasta ese punto futuro.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M10 58Q14 38 26 28Q38 18 52 18Q68 20 76 34Q84 46 82 60" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M10 58Q46 66 82 60" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><circle cx="10" cy="58" r="3.5" stroke="#1a2e1a" stroke-width="1.4" fill="none"/><circle cx="82" cy="60" r="3.5" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M40 48Q52 42 64 48" stroke="#4a6b4a" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>'},
{id:13,tense:'1st Conditional',sub:'Situaciones reales y posibles en el futuro',color:'#1a6b1a',
 struct:'If + Present Simple, will + infinitive',
 ex:[{en:'If it rains, I\'ll take an umbrella.',es:'Si llueve, cogerÃ© un paraguas.'},{en:'She\'ll call if she finishes early.',es:'LlamarÃ¡ si termina pronto.'},{en:'If you study, you\'ll pass.',es:'Si estudias, aprobarÃ¡s.'}],
 tip:'<strong>Â¡Ojo!</strong> NUNCA "will" despuÃ©s de "if". La condiciÃ³n â†’ Present Simple.<br><strong>SinÃ³nimos de "if":</strong> unless (if not), as long as, provided that.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M14 48Q16 32 26 24Q34 18 42 22" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M42 22Q54 14 66 20Q78 28 78 46" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M14 48Q46 56 78 48" stroke="#1a2e1a" stroke-width="1.5" stroke-linecap="round"/><path d="M52 14Q58 8 66 6" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/><path d="M66 6Q72 12 68 18" stroke="#4a6b4a" stroke-width="1.1" stroke-linecap="round"/></svg>'},
{id:14,tense:'2nd Conditional',sub:'Situaciones hipotÃ©ticas o imaginarias',color:'#8a5c1a',
 struct:'If + Past Simple, would + infinitive',
 ex:[{en:'If I had more time, I\'d travel more.',es:'Si tuviera tiempo, viajarÃ­a mÃ¡s.'},{en:'She\'d be happier if she changed jobs.',es:'SerÃ­a mÃ¡s feliz si cambiara de trabajo.'},{en:'What would you do if you won the lottery?',es:'Â¿QuÃ© harÃ­as si ganaras la loterÃ­a?'}],
 tip:'<strong>Â¡Ojo!</strong> Con "to be" â†’ "If I WERE you..." (no "was").<br>"Would" NUNCA despuÃ©s de "if" en 2nd conditional.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M50 64Q48 50 50 42" stroke="#1a2e1a" stroke-width="1.9" stroke-linecap="round"/><path d="M50 42Q40 30 26 18Q20 12 16 10" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><path d="M50 42Q62 30 76 18Q82 12 86 10" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="50" cy="42" r="4" stroke="#1a2e1a" stroke-width="1.5" fill="none"/></svg>'},
{id:15,tense:'3rd Conditional',sub:'Situaciones hipotÃ©ticas en el pasado',color:'#5a3d8a',
 struct:'If + Past Perfect, would have + past participle',
 ex:[{en:'If I had studied, I would have passed.',es:'Si hubiera estudiado, habrÃ­a aprobado.'},{en:'She wouldn\'t have been late if she\'d left earlier.',es:'No habrÃ­a llegado tarde si hubiera salido antes.'}],
 tip:'<strong>Expresa:</strong> arrepentimiento o especulaciÃ³n sobre el pasado.<br><strong>ContracciÃ³n:</strong> "would\'ve" = "would have".<br>La clÃ¡usula if â†’ Past Perfect.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><circle cx="50" cy="32" r="20" stroke="#1a2e1a" stroke-width="1.6" fill="none"/><path d="M50 18v14l10 6" stroke="#1a2e1a" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/><circle cx="50" cy="32" r="2.5" fill="#1a2e1a"/><path d="M26 60Q30 52 36 50" stroke="#1a2e1a" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M74 60Q70 52 64 50" stroke="#1a2e1a" stroke-width="1.5" fill="none" stroke-linecap="round"/><path d="M36 50Q50 46 64 50" stroke="#4a6b4a" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="3,2"/></svg>'},
{id:16,tense:'Zero Conditional',sub:'Verdades generales y hechos cientÃ­ficos',color:'#2d7a5a',
 struct:'If + Present Simple, Present Simple',
 ex:[{en:'If you heat water to 100Â°C, it boils.',es:'Si calientas agua a 100Â°C, hierve.'},{en:'If it rains, the ground gets wet.',es:'Si llueve, el suelo se moja.'},{en:'If you don\'t eat, you feel hungry.',es:'Si no comes, tienes hambre.'}],
 tip:'<strong>Clave:</strong> Ambas partes en Present Simple. Se usa para hechos cientÃ­ficos, verdades universales y situaciones que siempre ocurren.<br><strong>Ojo:</strong> "If" se puede sustituir por "when" sin cambiar el significado.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><circle cx="30" cy="36" r="14" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M38 28Q42 24 42 36Q42 48 38 44" stroke="#1a2e1a" stroke-width="1.4" fill="none" stroke-linecap="round"/><path d="M46 36Q52 32 56 36" stroke="#1a2e1a" stroke-width="1.6" stroke-linecap="round"/><path d="M52 30Q58 36 52 42" stroke="#1a2e1a" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><circle cx="70" cy="36" r="14" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M64 30Q68 32 66 38" stroke="#1a2e1a" stroke-width="1.3" fill="none" stroke-linecap="round"/><path d="M72 30Q76 34 72 40" stroke="#1a2e1a" stroke-width="1.3" fill="none" stroke-linecap="round"/></svg>'},
{id:17,tense:'Mixed Conditionals',sub:'Combinar tiempo de condiciÃ³n y resultado',color:'#8a3a5a',
 struct:'If + Past Perfect, would + infinitive  Â·  If + Past Simple, would have + PP',
 ex:[{en:'If I had studied medicine, I would be a doctor now.',es:'Si hubiera estudiado medicina, serÃ­a mÃ©dico ahora.'},{en:'If she weren\'t so shy, she would have spoken to him.',es:'Si no fuera tan tÃ­mida, le habrÃ­a hablado.'}],
 tip:'<strong>Tipo 1:</strong> If + Past Perfect (pasado) â†’ would + V (presente) â€” condiciÃ³n pasada, resultado presente.<br><strong>Tipo 2:</strong> If + Past Simple (carÃ¡cter) â†’ would have + PP (pasado) â€” condiciÃ³n permanente, resultado pasado.',
 illo:'<svg viewBox="0 0 100 72" fill="none"><path d="M50 65Q48 50 50 42" stroke="#1a2e1a" stroke-width="1.9" stroke-linecap="round"/><path d="M50 42Q38 28 22 14" stroke="#4a6b4a" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-dasharray="4,3"/><path d="M50 42Q62 28 78 14" stroke="#1a2e1a" stroke-width="1.6" fill="none" stroke-linecap="round"/><circle cx="50" cy="42" r="4" stroke="#1a2e1a" stroke-width="1.5" fill="none"/><path d="M20 12Q26 14 28 20" stroke="#4a6b4a" stroke-width="1.2" stroke-linecap="round"/><path d="M80 12Q74 14 72 20" stroke="#1a2e1a" stroke-width="1.3" stroke-linecap="round"/><path d="M18 32Q14 28 12 24" stroke="#4a6b4a" stroke-width="1" stroke-linecap="round" stroke-dasharray="2,3"/></svg>'},
];
// â•â• QUIZ BANKS â€” 250 per mode â•â•
let QB=[
[// MODE 0: PRESENT
{q:"She ___ to work every day.",a:"goes",o:["goes","go","is going","went"],t:"Present Simple",e:"HÃ¡bito diario, 3Âª persona sing â†’ goes (go+s).",es:"Ella va al trabajo todos los dÃ­as."},
{q:"I ___ coffee. I prefer tea.",a:"don't drink",o:["don't drink","doesn't drink","am not drinking","didn't drink"],t:"Present Simple",e:"Negativa con I/you/we/they â†’ don't + verbo base. 'Drink' no cambia.",es:"No bebo cafÃ©."},
{q:"___ he work in London?",a:"Does",o:["Does","Do","Is","Did"],t:"Present Simple",e:"Pregunta 3Âª pers sing â†’ Does + sujeto + verbo base (sin -s).",es:"Â¿Trabaja Ã©l en Londres?"},
{q:"The sun ___ in the east.",a:"rises",o:["rises","rise","is rising","rose"],t:"Present Simple",e:"Verdad cientÃ­fica o universal â†’ siempre Present Simple, nunca Continuous.",es:"El sol sale por el este."},
{q:"They ___ football on Saturdays.",a:"play",o:["play","plays","are playing","played"],t:"Present Simple",e:"Sujeto plural they â†’ sin -s. Rutina o hÃ¡bito â†’ Present Simple.",es:"Juegan al fÃºtbol los sÃ¡bados."},
{q:"He ___ speak French well.",a:"doesn't",o:["doesn't","don't","isn't","hasn't"],t:"Present Simple",e:"Negativa 3Âª pers sing â†’ doesn't + verbo base. El -s va en 'doesn't', no en el verbo.",es:"Ã‰l no habla francÃ©s bien."},
{q:"Water ___ at 100 degrees.",a:"boils",o:["boils","boil","is boiling","boiled"],t:"Present Simple",e:"Los hechos cientÃ­ficos nunca cambian â†’ siempre Present Simple.",es:"El agua hierve a 100 grados."},
{q:"She always ___ her homework.",a:"does",o:["does","do","is doing","did"],t:"Present Simple",e:"'Always' seÃ±ala rutina. 3Âª pers sing â†’ does (do+es).",es:"Ella siempre hace los deberes."},
{q:"My parents ___ in the countryside.",a:"live",o:["live","lives","are living","lived"],t:"Present Simple",e:"My parents = they â†’ verbo sin -s. Hecho permanente â†’ Present Simple.",es:"Mis padres viven en el campo."},
{q:"The train ___ at 9:15.",a:"leaves",o:["leaves","leave","is leaving","left"],t:"Present Simple",e:"Horarios fijos (trenes, clases) â†’ Present Simple, como si fuera una regla.",es:"El tren sale a las 9:15."},
{q:"Look! She ___ over there.",a:"is waving",o:["is waving","waves","waved","has waved"],t:"Present Continuous",e:"'Look!' indica que estÃ¡s viendo algo ocurrir AHORA MISMO â†’ Present Continuous.",es:"Â¡Mira! EstÃ¡ saludando."},
{q:"We ___ dinner at the moment.",a:"are having",o:["are having","have","had","were having"],t:"Present Continuous",e:"'At the moment' â†’ proceso en curso ahora â†’ Present Continuous.",es:"Estamos cenando en este momento."},
{q:"___ you listening to me?",a:"Are",o:["Are","Do","Is","Have"],t:"Present Continuous",e:"Pregunta Present Continuous: Are/Is/Am va ANTES del sujeto.",es:"Â¿Me estÃ¡s escuchando?"},
{q:"He ___ on a new project this week.",a:"is working",o:["is working","works","worked","has worked"],t:"Present Continuous",e:"'This week' indica proceso en curso esta semana â†’ Continuous.",es:"EstÃ¡ trabajando en un proyecto nuevo."},
{q:"She ___ right now â€” the film is so sad!",a:"is crying",o:["is crying","cries","cried","has cried"],t:"Present Continuous",e:"'Right now' â†’ acciÃ³n ocurriendo en este momento exacto â†’ Present Continuous, no Present Simple.",es:"EstÃ¡ llorando porque la pelÃ­cula es triste."},
{q:"I ___ right now, can I call back?",a:"am driving",o:["am driving","drive","drove","have driven"],t:"Present Continuous",e:"'Right now' = ahora mismo â†’ Present Continuous. La acciÃ³n estÃ¡ pasando mientras hablas.",es:"Estoy conduciendo ahora."},
{q:"The children ___ in the garden.",a:"are playing",o:["are playing","play","played","have played"],t:"Present Continuous",e:"AcciÃ³n que ocurre en este momento â†’ Present Continuous (am/is/are + V-ing).",es:"Los niÃ±os estÃ¡n jugando en el jardÃ­n."},
{q:"___ she studying for her exams?",a:"Is",o:["Is","Are","Does","Has"],t:"Present Continuous",e:"Pregunta Continuous con 3Âª pers sing â†’ Is she + V-ing? (Is antes del sujeto).",es:"Â¿EstÃ¡ estudiando para sus exÃ¡menes?"},
{q:"I can't talk â€” I ___ a meeting.",a:"am having",o:["am having","have","had","am have"],t:"Present Continuous",e:"La acciÃ³n estÃ¡ sucediendo ahora mismo â†’ Present Continuous (am/is/are + V-ing).",es:"No puedo hablar â€” tengo una reuniÃ³n."},
{q:"They ___ a house at the moment.",a:"are building",o:["are building","build","built","have built"],t:"Present Continuous",e:"'At the moment' â†’ proceso en curso ahora â†’ Present Continuous.",es:"EstÃ¡n construyendo una casa."},
{q:"I ___ just finished the report.",a:"have",o:["have","had","am","did"],t:"Present Perfect",e:"'Just' = acaba de ocurrir â†’ Present Perfect. Muy reciente.",es:"Acabo de terminar el informe."},
{q:"She ___ never been to Japan.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Never' indica experiencia (o falta de ella) â†’ Present Perfect. 3Âª pers sing â†’ has.",es:"Nunca ha estado en JapÃ³n."},
{q:"___ you ever eaten sushi?",a:"Have",o:["Have","Has","Did","Do"],t:"Present Perfect",e:"'Ever' en pregunta â†’ Present Perfect. Con you/I/we/they â†’ Have, no Has.",es:"Â¿Has comido sushi alguna vez?"},
{q:"They ___ already left the office.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Already' = ya, antes de lo esperado â†’ Present Perfect (have/has + PP).",es:"Ya se han ido de la oficina."},
{q:"He ___ called me yet.",a:"hasn't",o:["hasn't","haven't","didn't","wasn't"],t:"Present Perfect",e:"'Yet' en negativa â†’ hasn't + PP.",es:"TodavÃ­a no me ha llamado."},
{q:"We ___ lived here for ten years.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'For' + duraciÃ³n â†’ Present Perfect si la acciÃ³n sigue ahora. 'For two years' = lleva dos aÃ±os.",es:"Llevamos diez aÃ±os viviendo aquÃ­."},
{q:"She ___ worked here since 2018.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Since' = desde (punto de inicio) â†’ Present Perfect. 3Âª pers sing â†’ has.",es:"Ha trabajado aquÃ­ desde 2018."},
{q:"___ he finished the project yet?",a:"Has",o:["Has","Have","Did","Is"],t:"Present Perfect",e:"'Yet' en pregunta = 'Â¿ya?' â†’ Present Perfect. 3Âª pers sing â†’ Has.",es:"Â¿Ha terminado ya el proyecto?"},
{q:"I ___ seen that film three times.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"NÃºmero de veces o experiencia acumulada â†’ Present Perfect (have/has + PP).",es:"He visto esa pelÃ­cula tres veces."},
{q:"They ___ just arrived at the hotel.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Just' = acaba de ocurrir â†’ Present Perfect. Muy reciente.",es:"Acaban de llegar al hotel."},
{q:"I ___ been waiting here for two hours.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'For + duraciÃ³n' con acciÃ³n que aÃºn continÃºa â†’ Pres. Perfect Continuous.",es:"Llevo dos horas esperando."},
{q:"She ___ been studying all morning.",a:"has been",o:["has been","have been","had been","was"],t:"Pres. Perfect Continuous",e:"3Âª persona + 'all morning' (duraciÃ³n hasta ahora) â†’ has been + V-ing. 'She is studying' = solo ahora; 'has been studying' = lleva toda la maÃ±ana.",es:"Ha estado estudiando toda la maÃ±ana."},
{q:"How long ___ you been learning English?",a:"have",o:["have","has","had","are"],t:"Pres. Perfect Continuous",e:"'How long' â†’ Present Perfect Cont.",es:"Â¿CuÃ¡nto tiempo llevas aprendiendo inglÃ©s?"},
{q:"He looks tired â€” he ___ been running.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Evidencia â†’ Present Perfect Cont.",es:"Parece cansado â€” ha estado corriendo."},
{q:"It ___ been raining since this morning.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Since' = desde (punto de inicio hasta ahora). AcciÃ³n en curso â†’ has been + V-ing.",es:"Ha estado lloviendo desde esta maÃ±ana."},
{q:"I ___ been feeling unwell this week.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'This week' + acciÃ³n aÃºn en curso â†’ Pres. Perfect Continuous.",es:"Me he sentido mal esta semana."},
{q:"She ___ been living in Madrid for five years.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For 5 years' + 3Âª pers â†’ has been.",es:"Lleva cinco aÃ±os viviendo en Madrid."},
{q:"___ they been waiting long?",a:"Have",o:["Have","Has","Had","Are"],t:"Pres. Perfect Continuous",e:"Pregunta Pres. Perf. Cont. con they â†’ Have + sujeto + been + V-ing?",es:"Â¿Llevan mucho tiempo esperando?"},
{q:"We ___ been trying to reach you all day.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'All day' + en curso.",es:"Hemos estado intentando contactarte todo el dÃ­a."},
{q:"I ___ been thinking about your proposal.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"Proceso mental reciente.",es:"He estado pensando en tu propuesta."},
{q:"Cats ___ fish.",a:"like",o:["like","likes","are liking","liked"],t:"Present Simple",e:"Verdad general. Cats (they) â†’ sin -s.",es:"A los gatos les gusta el pescado."},
{q:"He ___ the dishes after every meal.",a:"washes",o:["washes","wash","is washing","washed"],t:"Present Simple",e:"HÃ¡bito + 3Âª pers â†’ washes.",es:"Ã‰l lava los platos despuÃ©s de cada comida."},
{q:"I ___ what you mean.",a:"understand",o:["understand","am understanding","understands","understood"],t:"Present Simple",e:"'Understand' verbo estado â†’ no Continuous.",es:"Entiendo lo que quieres decir."},
{q:"She ___ a great book right now.",a:"is reading",o:["is reading","reads","read","has read"],t:"Present Continuous",e:"'Right now' = ahora mismo â†’ Present Continuous. La acciÃ³n estÃ¡ pasando mientras hablas.",es:"EstÃ¡ leyendo un libro muy bueno."},
{q:"We ___ a party next Saturday.",a:"are having",o:["are having","have","will have","had"],t:"Present Continuous",e:"Plan futuro confirmado â†’ Continuous.",es:"Damos una fiesta el prÃ³ximo sÃ¡bado."},
{q:"I ___ my keys. I can't find them.",a:"have lost",o:["have lost","lost","am losing","had lost"],t:"Present Perfect",e:"Resultado presente â†’ Present Perfect.",es:"He perdido las llaves."},
{q:"This is the best film I ___ ever seen.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"Superlativo + 'ever' â†’ Present Perfect.",es:"Esta es la mejor pelÃ­cula que he visto."},
{q:"I ___ never tried bungee jumping.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + experiencia â†’ Present Perfect.",es:"Nunca he probado el puenting."},
{q:"He ___ already sent the email.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Already' + 3Âª pers â†’ has + PP.",es:"Ya ha enviado el correo."},
{q:"How long ___ she worked here?",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'How long' + 3Âª pers â†’ has.",es:"Â¿CuÃ¡nto tiempo lleva trabajando aquÃ­?"},
{q:"I ___ a lot lately. I need a holiday.",a:"have been working",o:["have been working","worked","am working","work"],t:"Pres. Perfect Continuous",e:"'Lately' + proceso â†’ Pres. Perfect Cont.",es:"He estado trabajando mucho Ãºltimamente."},
{q:"My hands are dirty â€” I ___ the car.",a:"have been fixing",o:["have been fixing","fixed","am fixing","have fixed"],t:"Pres. Perfect Continuous",e:"Evidencia de actividad reciente.",es:"He estado arreglando el coche."},
{q:"She looks exhausted â€” she ___ all night.",a:"has been studying",o:["has been studying","studied","is studying","has studied"],t:"Pres. Perfect Continuous",e:"Evidencia de acciÃ³n prolongada.",es:"Ha estado estudiando toda la noche."},
{q:"They ___ here since 2015.",a:"have been living",o:["have been living","lived","are living","have lived"],t:"Pres. Perfect Continuous",e:"'Since 2015' + en curso.",es:"Llevan viviendo aquÃ­ desde 2015."},
{q:"He ___ been trying to lose weight for months.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For months' + 3Âª pers â†’ has been.",es:"Lleva meses intentando perder peso."},
{q:"I ___ know why she's upset.",a:"don't",o:["don't","doesn't","didn't","am not"],t:"Present Simple",e:"'Know' verbo estado â†’ Present Simple.",es:"No sÃ© por quÃ© estÃ¡ molesta."},
{q:"The meeting ___ at 3pm every Tuesday.",a:"starts",o:["starts","start","is starting","started"],t:"Present Simple",e:"Horario fijo â†’ Present Simple.",es:"La reuniÃ³n empieza a las 3pm todos los martes."},
{q:"I ___ (not) want to go out tonight.",a:"don't",o:["don't","doesn't","didn't","am not"],t:"Present Simple",e:"'Want' verbo estado â†’ Present Simple.",es:"No quiero salir esta noche."},
{q:"She ___ the piano beautifully.",a:"plays",o:["plays","play","is playing","played"],t:"Present Simple",e:"Habilidad habitual + 3Âª pers â†’ plays.",es:"Toca el piano de maravilla."},
{q:"It ___ raining outside right now.",a:"is",o:["is","has","was","does"],t:"Present Continuous",e:"'Right now' = ahora mismo â†’ Present Continuous. La acciÃ³n estÃ¡ pasando mientras hablas.",es:"EstÃ¡ lloviendo fuera ahora."},
{q:"She ___ for her lost cat everywhere.",a:"is looking",o:["is looking","looks","looked","has looked"],t:"Present Continuous",e:"BÃºsqueda activa ahora â†’ Continuous.",es:"EstÃ¡ buscando a su gato por todas partes."},
{q:"They ___ to move to a bigger house.",a:"are planning",o:["are planning","plan","planned","have planned"],t:"Present Continuous",e:"Plan en curso â†’ Continuous.",es:"EstÃ¡n planeando mudarse a una casa mÃ¡s grande."},
{q:"I ___ a headache.",a:"have",o:["have","am having","has","had"],t:"Present Simple",e:"'Have' de estado â†’ Present Simple.",es:"Tengo dolor de cabeza."},
{q:"I ___ this city since I was a child.",a:"have known",o:["have known","know","knew","am knowing"],t:"Present Perfect",e:"'Since' + verbo estado â†’ Present Perfect.",es:"Conozco esta ciudad desde niÃ±o."},
{q:"She ___ for the exam all week.",a:"has been preparing",o:["has been preparing","prepared","is preparing","has prepared"],t:"Pres. Perfect Continuous",e:"'All week' â†’ duraciÃ³n reciente.",es:"Ha estado preparando el examen toda la semana."},
{q:"I ___ to call you but you never answer.",a:"have been trying",o:["have been trying","tried","am trying","have tried"],t:"Pres. Perfect Continuous",e:"AcciÃ³n repetida â†’ Pres. Perfect Cont.",es:"He estado intentando llamarte."},
{q:"___ you finished the book I lent you?",a:"Have",o:["Have","Has","Did","Are"],t:"Present Perfect",e:"Pregunta: Have + S + PP?",es:"Â¿Has terminado el libro que te prestÃ©?"},
{q:"She ___ already done the shopping.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Already' + 3Âª pers â†’ has + PP.",es:"Ya ha hecho la compra."},
{q:"I ___ just got off the phone.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Just' â†’ acciÃ³n muy reciente.",es:"Acabo de colgar el telÃ©fono."},
{q:"They ___ been arguing since morning.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'Since morning' = desde esta maÃ±ana hasta ahora â†’ Pres. Perfect Continuous.",es:"Han estado discutiendo desde la maÃ±ana."},
{q:"She ___ received any news yet.",a:"hasn't",o:["hasn't","haven't","didn't","wasn't"],t:"Present Perfect",e:"'Yet' negativa + 3Âª pers â†’ hasn't.",es:"TodavÃ­a no ha recibido noticias."},
{q:"We ___ saved enough money for the holiday.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"Resultado presente â†’ Present Perfect.",es:"Hemos ahorrado suficiente."},
{q:"I ___ never spoken to him since the argument.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Since' + negativa â†’ Present Perfect.",es:"No le he hablado desde la discusiÃ³n."},
{q:"She ___ just got promoted!",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Just' + 3Âª pers â†’ has + PP.",es:"Â¡Acaba de ser ascendida!"},
{q:"He ___ written three books so far.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'So far' â†’ hasta ahora â†’ Present Perfect.",es:"Ha escrito tres libros hasta ahora."},
{q:"They ___ been discussing the proposal since Monday.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'Since Monday' + debate en curso.",es:"Han estado discutiendo la propuesta desde el lunes."},
{q:"The price of petrol ___ risen this month.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"Cambio reciente â†’ Present Perfect.",es:"El precio de la gasolina ha subido este mes."},
{q:"I ___ been feeling really inspired lately.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'Lately' + estado â†’ Pres. Perfect Cont.",es:"Me he sentido muy inspirado Ãºltimamente."},
{q:"They ___ released the new album today.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Today' (no terminado) â†’ Present Perfect.",es:"Han lanzado el nuevo Ã¡lbum hoy."},
{q:"I ___ not met his new girlfriend yet.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Yet' negativa â†’ Present Perfect.",es:"TodavÃ­a no he conocido a su nueva novia."},
{q:"We ___ already chosen the venue.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Already' = ya, antes de lo esperado â†’ Present Perfect (have/has + PP).",es:"Ya hemos elegido el lugar."},
{q:"She ___ been working as a nurse for fifteen years.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For 15 years' + 3Âª pers â†’ has been.",es:"Lleva quince aÃ±os trabajando como enfermera."},
{q:"I ___ spoken to the manager about the problem.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"AcciÃ³n reciente con relevancia presente.",es:"He hablado con el director."},
{q:"The company ___ been expanding quickly.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Proceso en curso â†’ Pres. Perfect Cont.",es:"La empresa ha estado expandiÃ©ndose rÃ¡pidamente."},
{q:"She ___ that film four times.",a:"has seen",o:["has seen","saw","is seeing","had seen"],t:"Present Perfect",e:"NÃºmero de veces â†’ Present Perfect.",es:"Ha visto esa pelÃ­cula cuatro veces."},
{q:"I ___ this book before â€” it's very good.",a:"have read",o:["have read","read","am reading","had read"],t:"Present Perfect",e:"Experiencia pasada â†’ Present Perfect.",es:"He leÃ­do este libro antes."},
{q:"We ___ each other since school.",a:"have known",o:["have known","know","knew","are knowing"],t:"Present Perfect",e:"'Since' + 'know' (estado) â†’ Present Perfect.",es:"Nos conocemos desde el colegio."},
{q:"He ___ been coaching the team since last year.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Since last year' + 3Âª pers â†’ has been.",es:"Ha estado entrenando al equipo desde el aÃ±o pasado."},
{q:"She ___ been learning Spanish for three years.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For 3 years' = duraciÃ³n. AcciÃ³n que empezÃ³ hace 3 aÃ±os y SIGUE â†’ Pres. Perf. Cont. 3Âª pers â†’ has been.",es:"Lleva tres aÃ±os aprendiendo espaÃ±ol."},
{q:"I ___ my best friend since primary school.",a:"have known",o:["have known","know","knew","am knowing"],t:"Present Perfect",e:"'Since' + 'know' â†’ Present Perfect.",es:"Conozco a mi mejor amigo desde primaria."},
{q:"She ___ currently living in Berlin.",a:"is",o:["is","has","does","was"],t:"Present Continuous",e:"'Currently' â†’ Continuous.",es:"Actualmente vive en BerlÃ­n."},
{q:"They ___ been arguing a lot lately.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'Lately' + en curso.",es:"Han estado discutiendo mucho Ãºltimamente."},
{q:"She ___ been taking singing lessons.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"'Has been' = Present Perfect Continuous â†’ actividad que empezÃ³ antes y continÃºa ahora. 'She IS taking' describe solo el momento; 'has been taking' enfatiza la duraciÃ³n.",es:"Ha estado tomando clases de canto."},
{q:"I ___ been studying this topic for hours.",a:"have been",o:["have been","studied","am studying","had been"],t:"Pres. Perfect Continuous",e:"'For hours' + en curso.",es:"Llevo horas estudiando este tema."},
{q:"We ___ been saving up for a new car.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Proceso de ahorro en curso.",es:"Hemos estado ahorrando para un coche nuevo."},
{q:"I ___ been going to the gym regularly.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"HÃ¡bito reciente en curso.",es:"He estado yendo al gimnasio regularmente."},
{q:"They ___ just announced the winner.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Just' + anuncio reciente.",es:"Acaban de anunciar al ganador."},
{q:"He ___ been working on that report all morning.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'All morning' + 3Âª pers â†’ has been.",es:"Ha estado trabajando en ese informe toda la maÃ±ana."},
{q:"We ___ been planning this trip for a year.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For a year' + en curso.",es:"Llevamos un aÃ±o planeando este viaje."},
{q:"She ___ not eaten since yesterday.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Since yesterday' negativa â†’ Present Perfect.",es:"No ha comido desde ayer."},
{q:"I can see you ___ been crying.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Evidencia visible â†’ Pres. Perfect Cont.",es:"Puedo ver que has estado llorando."},
{q:"She ___ the same car for 15 years.",a:"has had",o:["has had","had","is having","have had"],t:"Present Perfect",e:"'For 15 years' + 'have' posesiÃ³n â†’ Present Perfect.",es:"Ha tenido el mismo coche 15 aÃ±os."},
{q:"I ___ read this article three times.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"NÃºmero de veces â†’ Present Perfect.",es:"He leÃ­do este artÃ­culo tres veces."},
{q:"They ___ been building the bridge for two years.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For 2 years' + proceso.",es:"Llevan dos aÃ±os construyendo el puente."},
{q:"The government ___ just changed the law.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Just' + 3Âª pers â†’ has + PP.",es:"El gobierno acaba de cambiar la ley."},
{q:"She ___ been learning to play the guitar.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Aprendizaje en curso.",es:"Ha estado aprendiendo a tocar la guitarra."},
{q:"I ___ finished all my tasks for today.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"Resultado presente â†’ Present Perfect.",es:"He terminado todas mis tareas de hoy."},
{q:"The kids ___ nonstop since they arrived.",a:"have been running",o:["have been running","ran","are running","run"],t:"Pres. Perfect Continuous",e:"'Since' + actividad continua.",es:"Los niÃ±os han estado corriendo sin parar."},
{q:"I ___ always admired her dedication.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Always' + sentimiento â†’ Present Perfect.",es:"Siempre he admirado su dedicaciÃ³n."},
{q:"He ___ been eating healthily since January.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Since January' + 3Âª pers â†’ has been.",es:"Ha estado comiendo sano desde enero."},
{q:"We ___ not seen each other for years.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'For years' negativa â†’ Present Perfect.",es:"No nos hemos visto en aÃ±os."},
{q:"She ___ been traveling solo for six months.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For 6 months' + 3Âª pers.",es:"Lleva seis meses viajando sola."},
{q:"I ___ never tried surfing.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + experiencia.",es:"Nunca he probado el surf."},
{q:"She ___ been volunteering at the shelter.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Actividad regular reciente.",es:"Ha estado haciendo voluntariado en el refugio."},
{q:"I ___ bought my tickets already.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Already' = ya, antes de lo esperado â†’ Present Perfect (have/has + PP).",es:"Ya he comprado las entradas."},
{q:"We ___ been watching this series for weeks.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For weeks' + en curso.",es:"Llevamos semanas viendo esta serie."},
{q:"She ___ not been sleeping well this week.",a:"has",o:["has","have","had","is"],t:"Pres. Perfect Continuous",e:"'This week' negativa + 3Âª pers.",es:"No ha estado durmiendo bien esta semana."},
{q:"I ___ been meaning to call you.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"IntenciÃ³n en curso.",es:"He estado pensando en llamarte."},
{q:"He ___ been getting complaints from clients.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"PatrÃ³n continuo â†’ Pres. Perfect Cont.",es:"Ha estado recibiendo quejas de los clientes."},
{q:"She ___ been ignoring my messages.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Comportamiento reciente.",es:"Ha estado ignorando mis mensajes."},
{q:"They ___ been together for over twenty years.",a:"have been",o:["have been","are","had","were"],t:"Pres. Perfect Continuous",e:"'For 20 years' + amistad en curso.",es:"Llevan mÃ¡s de veinte aÃ±os juntos."},
{q:"He ___ been going to the gym for three months.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For 3 months' + 3Âª pers â†’ has been.",es:"Lleva tres meses yendo al gimnasio."},
{q:"I ___ seen three films this weekend.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'This weekend' (no terminado) â†’ Present Perfect.",es:"He visto tres pelÃ­culas este fin de semana."},
{q:"She ___ always wanted to visit Australia.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Always' + 3Âª pers â†’ has + PP.",es:"Siempre ha querido visitar Australia."},
{q:"We ___ just moved into our new flat.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Just' = acaba de ocurrir â†’ Present Perfect. Muy reciente.",es:"Acabamos de mudarnos al piso nuevo."},
{q:"I ___ been trying to reach you all morning.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'All morning' + en curso.",es:"He estado intentando contactarte toda la maÃ±ana."},
{q:"She ___ been feeling much better since the operation.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"'Since' + mejora â†’ Pres. Perfect Cont.",es:"Se ha sentido mucho mejor desde la operaciÃ³n."},
{q:"This is the first time I ___ to this restaurant.",a:"have been",o:["have been","went","am going","had been"],t:"Present Perfect",e:"'First time' + Present Perfect.",es:"Es la primera vez que vengo aquÃ­."},
{q:"I ___ never understood why she left.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + comprensiÃ³n â†’ Present Perfect.",es:"Nunca he entendido por quÃ© se fue."},
{q:"She ___ been working too hard lately.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Lately' + 3Âª pers â†’ has been.",es:"Ha estado trabajando demasiado Ãºltimamente."},
{q:"We ___ friends for over twenty years.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For 20 years' + amistad â†’ Pres. Perfect Cont.",es:"Llevamos mÃ¡s de veinte aÃ±os siendo amigos."},
{q:"He ___ in five different countries.",a:"has lived",o:["has lived","lived","is living","will live"],t:"Present Perfect",e:"Experiencias de vida â†’ Present Perfect.",es:"Ha vivido en cinco paÃ­ses distintos."},
{q:"I ___ not spoken to him for ages.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'For ages' negativa â†’ Present Perfect.",es:"Hace tiempo que no le hablo."},
{q:"She ___ been practicing piano since she was six.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Since she was 6' + 3Âª pers.",es:"Ha estado practicando piano desde los seis aÃ±os."},
{q:"They ___ been developing the app for over a year.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For over a year' + proceso.",es:"Llevan mÃ¡s de un aÃ±o desarrollando la app."},
{q:"I ___ to three different doctors this month.",a:"have been",o:["have been","went","am going","had been"],t:"Present Perfect",e:"'This month' + presente.",es:"He ido a tres mÃ©dicos este mes."},
{q:"He ___ been working overtime to finish.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Esfuerzo continuo â†’ Pres. Perfect Cont.",es:"Ha estado haciendo horas extra."},
{q:"She ___ been living abroad for years.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For years' + 3Âª pers en curso.",es:"Lleva aÃ±os viviendo en el extranjero."},
{q:"We ___ been planning this for months.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For months' + proceso en curso.",es:"Llevamos meses planeando esto."},
{q:"She ___ already visited all the museums.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Already' + 3Âª pers â†’ has + PP.",es:"Ya ha visitado todos los museos."},
{q:"I ___ been going to yoga every week.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"Rutina reciente en curso.",es:"He estado yendo a yoga cada semana."},
{q:"They ___ been running the same route daily.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Actividad diaria en curso.",es:"Han estado corriendo la misma ruta a diario."},
{q:"He ___ five cups of coffee today.",a:"has had",o:["has had","had","is having","have had"],t:"Present Perfect",e:"'Today' (no terminado) â†’ Present Perfect.",es:"Ha tomado cinco cafÃ©s hoy."},
{q:"I ___ never eaten octopus.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + experiencia.",es:"Nunca he comido pulpo."},
{q:"She ___ been running the company for a decade.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'For a decade' + 3Âª pers en curso.",es:"Lleva una dÃ©cada dirigiendo la empresa."},
{q:"I ___ been sleeping better since I stopped coffee.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'Since' + mejora â†’ Pres. Perfect Cont.",es:"He estado durmiendo mejor desde que dejÃ© el cafÃ©."},
{q:"They ___ been looking for a new office.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"BÃºsqueda en curso â†’ Pres. Perfect Cont.",es:"Han estado buscando una nueva oficina."},
{q:"She ___ four books so far this year.",a:"has written",o:["has written","wrote","is writing","writes"],t:"Present Perfect",e:"'So far this year' â†’ Present Perfect.",es:"Ha escrito cuatro libros hasta ahora este aÃ±o."},
{q:"He ___ not replied to my email.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"Negativa 3Âª pers â†’ hasn't.",es:"No ha respondido a mi correo."},
{q:"We ___ been renovating the kitchen for weeks.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For weeks' + proceso.",es:"Llevamos semanas renovando la cocina."},
{q:"I ___ always loved this city.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Always' + sentimiento â†’ Present Perfect.",es:"Siempre he amado esta ciudad."},
{q:"She ___ been learning to drive.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"Aprendizaje en curso + 3Âª pers.",es:"Ha estado aprendiendo a conducir."},
{q:"They ___ not responded yet.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Yet' negativa â†’ Present Perfect.",es:"TodavÃ­a no han respondido."},
{q:"I ___ been using this app for months.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'For months' + uso en curso.",es:"Llevo meses usando esta app."},
{q:"He ___ been speaking to clients all day.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"'All day' + 3Âª pers â†’ has been.",es:"Ha estado hablando con clientes todo el dÃ­a."},
{q:"She ___ published two articles this month.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'This month' + 3Âª pers â†’ has + PP.",es:"Ha publicado dos artÃ­culos este mes."},
{q:"We ___ been training for the marathon.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Proceso de entrenamiento en curso.",es:"Hemos estado entrenando para el maratÃ³n."},
{q:"I ___ just heard the news.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Just' â†’ acciÃ³n muy reciente.",es:"Acabo de oÃ­r la noticia."},
{q:"He ___ been working here since January.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Since January' + 3Âª pers.",es:"Lleva trabajando aquÃ­ desde enero."},
{q:"They ___ sold over a million copies.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"Resultado impresionante â†’ Present Perfect.",es:"Han vendido mÃ¡s de un millÃ³n de copias."},
{q:"She ___ been trying to contact him all week.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'All week' + 3Âª pers â†’ has been.",es:"Ha estado intentando contactarle toda la semana."},
{q:"I ___ changed my mind about the job.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"Cambio reciente â†’ Present Perfect.",es:"He cambiado de opiniÃ³n sobre el trabajo."},
{q:"We ___ been waiting here for an hour.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For an hour' + en curso.",es:"Llevamos una hora esperando aquÃ­."},
{q:"She ___ not yet confirmed the appointment.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Not yet' + 3Âª pers â†’ hasn't.",es:"TodavÃ­a no ha confirmado la cita."},
{q:"He ___ been reading a lot recently.",a:"has been",o:["has been","have been","had been","is being"],t:"Pres. Perfect Continuous",e:"'Recently' + 3Âª pers â†’ has been.",es:"Ha estado leyendo mucho Ãºltimamente."},
{q:"I ___ been thinking about changing careers.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"ReflexiÃ³n en curso â†’ Pres. Perfect Cont.",es:"He estado pensando en cambiar de carrera."},
{q:"The team ___ been performing really well.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"'The team' â†’ 3Âª pers sing â†’ has been.",es:"El equipo ha estado rindiendo muy bien."},
{q:"She ___ never missed a deadline.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Never' + 3Âª pers â†’ has + PP.",es:"Nunca ha incumplido un plazo."},
{q:"I ___ been exercising every morning this month.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"'This month' + rutina en curso.",es:"He estado haciendo ejercicio cada maÃ±ana este mes."},
{q:"They ___ been growing as a company.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Proceso de crecimiento en curso.",es:"Han estado creciendo como empresa."},
{q:"She ___ won three awards this year.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'This year' (no terminado) + 3Âª pers â†’ has.",es:"Ha ganado tres premios este aÃ±o."},
{q:"I ___ been looking forward to this holiday.",a:"have been",o:["have been","has been","had been","am"],t:"Pres. Perfect Continuous",e:"AnticipaciÃ³n en curso.",es:"Llevaba tiempo esperando estas vacaciones."},
{q:"He ___ spoken to everyone in the team.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"Resultado de acciÃ³n â†’ Present Perfect.",es:"Ha hablado con todos en el equipo."},
{q:"We ___ been collaborating on this project for months.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"'For months' + colaboraciÃ³n en curso.",es:"Llevamos meses colaborando en este proyecto."},
{q:"She ___ been offering great customer service.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"PatrÃ³n continuo â†’ Pres. Perfect Cont.",es:"Ha estado ofreciendo un gran servicio al cliente."},
{q:"I ___ just submitted my application.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Just' â†’ acciÃ³n muy reciente.",es:"Acabo de enviar mi solicitud."},
{q:"They ___ been working towards this goal.",a:"have been",o:["have been","has been","had been","are being"],t:"Pres. Perfect Continuous",e:"Esfuerzo continuo hacia un objetivo.",es:"Han estado trabajando hacia este objetivo."},
{q:"She ___ been making incredible progress.",a:"has been",o:["has been","have been","had been","is"],t:"Pres. Perfect Continuous",e:"Progreso en curso + 3Âª pers.",es:"Ha estado haciendo un progreso increÃ­ble."},
{q:"I ___ read every book in this series.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"Experiencia acumulada â†’ Present Perfect.",es:"He leÃ­do todos los libros de esta serie."},
],
[// MODE 1: PAST
{q:"She ___ to Paris last summer.",a:"went",o:["went","goes","has gone","was going"],t:"Past Simple",e:"'Last summer' = tiempo pasado y terminado â†’ Past Simple. Nunca Present Perfect.",es:"Fue a ParÃ­s el verano pasado."},
{q:"I ___ the film yesterday.",a:"watched",o:["watched","watch","was watching","have watched"],t:"Past Simple",e:"'Yesterday' es tiempo pasado especÃ­fico â†’ Past Simple. Nunca Present Perfect.",es:"Vi la pelÃ­cula ayer."},
{q:"___ you enjoy the concert?",a:"Did",o:["Did","Do","Have","Were"],t:"Past Simple",e:"Pregunta Past Simple: Did + sujeto + verbo BASE (sin -s, sin -ed).",es:"Â¿Disfrutaste el concierto?"},
{q:"He ___ finish his homework last night.",a:"didn't",o:["didn't","doesn't","wasn't","hadn't"],t:"Past Simple",e:"Negativa Past Simple: didn't + verbo BASE. No 'didn't went' â†’ 'didn't go'.",es:"No terminÃ³ los deberes anoche."},
{q:"They ___ to school by bus in those days.",a:"went",o:["went","go","were going","have gone"],t:"Past Simple",e:"Periodo pasado ya terminado â†’ Past Simple.",es:"En aquellos tiempos iban en autobÃºs."},
{q:"She ___ a doctor for twenty years.",a:"was",o:["was","were","has been","had been"],t:"Past Simple",e:"ProfesiÃ³n o situaciÃ³n que YA TERMINÃ“ â†’ Past Simple, no Present Perfect.",es:"Fue mÃ©dica durante veinte aÃ±os."},
{q:"I ___ her at the station.",a:"met",o:["met","meet","was meeting","have met"],t:"Past Simple",e:"Evento concreto que ocurriÃ³ una vez en el pasado â†’ Past Simple.",es:"La conocÃ­ en la estaciÃ³n."},
{q:"We ___ a great time at the beach.",a:"had",o:["had","have","were having","have had"],t:"Past Simple",e:"Experiencia que ya terminÃ³ â†’ Past Simple.",es:"Lo pasamos genial en la playa."},
{q:"He ___ his keys and couldn't get in.",a:"lost",o:["lost","loses","was losing","has lost"],t:"Past Simple",e:"Hecho puntual que ocurriÃ³ en el pasado â†’ Past Simple.",es:"PerdiÃ³ las llaves y no pudo entrar."},
{q:"___ she call you back?",a:"Did",o:["Did","Does","Has","Was"],t:"Past Simple",e:"Pregunta Past Simple.",es:"Â¿Te devolviÃ³ la llamada?"},
{q:"I ___ TV when the phone rang.",a:"was watching",o:["was watching","watched","have watched","had watched"],t:"Past Continuous",e:"'When + past simple' â†’ acciÃ³n de fondo â†’ Cont.",es:"Estaba viendo la tele cuando sonÃ³ el telÃ©fono."},
{q:"They ___ dinner when I arrived.",a:"were having",o:["were having","had","have had","had had"],t:"Past Continuous",e:"AcciÃ³n larga en progreso (Past Cont.) cortada por evento puntual (Past Simple).",es:"Estaban cenando cuando lleguÃ©."},
{q:"___ she working at midnight?",a:"Was",o:["Was","Were","Did","Had"],t:"Past Continuous",e:"Pregunta Past Continuous: Was/Were va ANTES del sujeto.",es:"Â¿Estaba trabajando a medianoche?"},
{q:"He fell while he ___ in the park.",a:"was running",o:["was running","ran","has run","had run"],t:"Past Continuous",e:"AcciÃ³n de fondo + evento puntual.",es:"Se cayÃ³ mientras corrÃ­a en el parque."},
{q:"The children ___ when the storm started.",a:"were playing",o:["were playing","played","have played","had played"],t:"Past Continuous",e:"AcciÃ³n en progreso cuando ocurriÃ³ otra.",es:"Los niÃ±os jugaban cuando empezÃ³ la tormenta."},
{q:"She ___ all afternoon, so she didn't hear the news.",a:"was sleeping",o:["was sleeping","slept","has slept","had slept"],t:"Past Continuous",e:"AcciÃ³n continua en el pasado.",es:"DormÃ­a toda la tarde, asÃ­ que no oyÃ³ las noticias."},
{q:"While I ___ a shower, someone knocked.",a:"was having",o:["was having","had","have had","had had"],t:"Past Continuous",e:"'While' + acciÃ³n en progreso â†’ Cont.",es:"Mientras me duchaba, llamaron a la puerta."},
{q:"It ___ raining heavily when we left.",a:"was",o:["was","were","has","had"],t:"Past Continuous",e:"Estado del tiempo en un momento pasado â†’ Past Continuous (descripciÃ³n de fondo).",es:"LlovÃ­a mucho cuando nos fuimos."},
{q:"She ___ wearing a red dress when I saw her.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"DescripciÃ³n de apariencia o situaciÃ³n en un momento del pasado â†’ Past Continuous.",es:"Llevaba un vestido rojo cuando la vi."},
{q:"What ___ you doing at 8pm last night?",a:"were",o:["were","was","did","had"],t:"Past Continuous",e:"Pregunta sobre actividad en momento especÃ­fico.",es:"Â¿QuÃ© hacÃ­as ayer a las 8pm?"},
{q:"By the time I arrived, she ___ already left.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'By the time' + acciÃ³n anterior â†’ Past Perfect.",es:"Cuando lleguÃ©, ella ya se habÃ­a ido."},
{q:"I ___ never seen anything like that before.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"'Before' indica que algo ocurriÃ³ antes de un punto pasado â†’ Past Perfect.",es:"Nunca habÃ­a visto algo asÃ­ antes."},
{q:"They ___ finished before the deadline.",a:"had",o:["had","have","did","were"],t:"Past Perfect",e:"AcciÃ³n completada antes de otra pasada.",es:"HabÃ­an terminado antes del plazo."},
{q:"She told me she ___ lost her wallet.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Reported speech: el verbo retrocede un tiempo â†’ Present Perfect â†’ Past Perfect.",es:"Me dijo que habÃ­a perdido el monedero."},
{q:"___ he eaten before the guests arrived?",a:"Had",o:["Had","Has","Did","Was"],t:"Past Perfect",e:"Pregunta Past Perfect: Had + S + PP?",es:"Â¿HabÃ­a comido antes de que llegaran?"},
{q:"When I got to the station, the train ___ left.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Evento anterior a otro pasado.",es:"Cuando lleguÃ©, el tren ya habÃ­a partido."},
{q:"She ___ not finished her studies when she got the job.",a:"hadn't",o:["hadn't","hasn't","didn't","wasn't"],t:"Past Perfect",e:"Negativa Past Perfect: hadn't + PP.",es:"No habÃ­a terminado los estudios cuando consiguiÃ³ el trabajo."},
{q:"I realised I ___ forgotten my passport.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"RealizaciÃ³n de hecho anterior.",es:"Me di cuenta de que habÃ­a olvidado el pasaporte."},
{q:"She was surprised â€” she ___ never met anyone like him.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia ocurrida ANTES de este momento pasado â†’ Past Perfect.",es:"Estaba sorprendida â€” nunca habÃ­a conocido a alguien asÃ­."},
{q:"By 2010, they ___ lived in five different countries.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'By + aÃ±o' + experiencias previas.",es:"Para 2010, habÃ­an vivido en cinco paÃ­ses."},
{q:"He ___ been studying for hours when I called.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'When I called' + acciÃ³n previa â†’ PP Cont.",es:"Llevaba horas estudiando cuando llamÃ©."},
{q:"She was tired because she ___ been working all day.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de cansancio â†’ PP Continuous.",es:"Estaba cansada porque habÃ­a estado trabajando todo el dÃ­a."},
{q:"They ___ been waiting for two hours when the doctor arrived.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n anterior a evento â†’ PP Continuous.",es:"Llevaban dos horas esperando cuando llegÃ³ el mÃ©dico."},
{q:"I could tell she ___ been crying.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia visible de actividad que estuvo ocurriendo antes de este momento â†’ Past Perf. Cont.",es:"Pude ver que habÃ­a estado llorando."},
{q:"The streets were wet because it ___ been raining.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa del estado â†’ PP Continuous.",es:"Las calles estaban mojadas porque habÃ­a estado lloviendo."},
{q:"He ___ been smoking for twenty years before he quit.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n de hÃ¡bito antes de punto pasado.",es:"HabÃ­a fumado durante veinte aÃ±os antes de dejarlo."},
{q:"By the time we found a taxi, we ___ been waiting an hour.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'By the time' + duraciÃ³n â†’ PP Continuous.",es:"Para cuando encontramos un taxi llevÃ¡bamos una hora esperando."},
{q:"I was exhausted â€” I ___ been running for miles.",a:"had been",o:["had been","have been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de agotamiento â†’ PP Continuous.",es:"Estaba agotado â€” habÃ­a estado corriendo kilÃ³metros."},
{q:"She had been ___ for hours before she fell asleep.",a:"reading",o:["reading","read","reads","to read"],t:"Past Perfect Continuous",e:"PP Continuous â†’ had been + V-ing.",es:"Llevaba horas leyendo antes de dormirse."},
{q:"He looked exhausted â€” he ___ been working all night.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia de actividad previa prolongada.",es:"ParecÃ­a agotado â€” habÃ­a estado trabajando toda la noche."},
{q:"My grandmother ___ in that house all her life.",a:"lived",o:["lived","lives","was living","had lived"],t:"Past Simple",e:"ProfesiÃ³n o situaciÃ³n que YA TERMINÃ“ â†’ Past Simple, no Present Perfect.",es:"Mi abuela viviÃ³ en esa casa toda su vida."},
{q:"He ___ to work by bike when he was younger.",a:"cycled",o:["cycled","cycles","was cycling","has cycled"],t:"Past Simple",e:"HÃ¡bito pasado â†’ Past Simple.",es:"Iba al trabajo en bici cuando era joven."},
{q:"She ___ the book in two days.",a:"finished",o:["finished","finishes","was finishing","has finished"],t:"Past Simple",e:"AcciÃ³n completamente terminada en el pasado â†’ Past Simple.",es:"TerminÃ³ el libro en dos dÃ­as."},
{q:"___ they understand the instructions?",a:"Did",o:["Did","Do","Have","Were"],t:"Past Simple",e:"Pregunta Past Simple.",es:"Â¿Entendieron las instrucciones?"},
{q:"She was cooking while he ___ the table.",a:"was setting",o:["was setting","set","has set","had set"],t:"Past Continuous",e:"Dos acciones ocurriendo simultÃ¡neamente en el pasado â†’ ambas en Past Continuous.",es:"Ella cocinaba mientras Ã©l ponÃ­a la mesa."},
{q:"I ___ a good book when the lights went out.",a:"was reading",o:["was reading","read","have read","had read"],t:"Past Continuous",e:"AcciÃ³n larga en progreso (Past Cont.) cortada por evento puntual (Past Simple).",es:"Estaba leyendo cuando se fue la luz."},
{q:"They ___ arguing when I walked in.",a:"were",o:["were","was","did","had"],t:"Past Continuous",e:"Actividad ya en marcha cuando lleguÃ© â†’ Past Continuous.",es:"Estaban discutiendo cuando entrÃ©."},
{q:"He ___ not feeling well, so he left early.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"Estado de salud en ese momento.",es:"No se sentÃ­a bien, asÃ­ que se fue pronto."},
{q:"She had already ___ her dinner when he arrived.",a:"eaten",o:["eaten","eat","ate","eating"],t:"Past Perfect",e:"Past Perfect â†’ had + past participle.",es:"Ya habÃ­a cenado cuando Ã©l llegÃ³."},
{q:"___ you ever visited Rome before last year?",a:"Had",o:["Had","Have","Did","Were"],t:"Past Perfect",e:"Experiencia antes de punto pasado.",es:"Â¿HabÃ­as visitado Roma antes del aÃ±o pasado?"},
{q:"I recognised him because we ___ met before.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Experiencia anterior que explica acciÃ³n.",es:"Lo reconocÃ­ porque nos habÃ­amos conocido antes."},
{q:"The film ___ already started when we arrived.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"La pelÃ­cula empezÃ³ ANTES de llegar nosotros â†’ Past Perfect. Orden: 1Âº PP, 2Âº PS.",es:"La pelÃ­cula ya habÃ­a empezado cuando llegamos."},
{q:"By the time she called, I ___ already left.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"'By the time' = para cuando... â†’ la acciÃ³n anterior usa Past Perfect. El orden: 1Âº Past Perf, 2Âº Past Simple.",es:"Para cuando llamÃ³, yo ya me habÃ­a ido."},
{q:"They ___ been planning the wedding when they split up.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Actividad anterior a evento â†’ PP Continuous.",es:"Llevaban meses planeando la boda cuando rompieron."},
{q:"I was out of breath because I ___ been running.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa fÃ­sica â†’ PP Continuous.",es:"Estaba sin aliento porque habÃ­a estado corriendo."},
{q:"We ___ been driving for six hours when we stopped.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n de actividad que continuÃ³ hasta un momento pasado â†’ Past Perf. Cont.",es:"LlevÃ¡bamos seis horas conduciendo cuando paramos."},
{q:"She ___ been living in London before moving to Paris.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Actividad continua anterior a otra pasada.",es:"HabÃ­a vivido en Londres antes de mudarse a ParÃ­s."},
{q:"He suddenly realised he ___ been talking to the wrong person.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"RealizaciÃ³n de error en actividad anterior.",es:"De repente se dio cuenta de que habÃ­a estado hablando con la persona equivocada."},
{q:"She couldn't concentrate â€” she ___ been sleeping badly.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa del problema â†’ PP Continuous.",es:"No podÃ­a concentrarse â€” no habÃ­a estado durmiendo bien."},
{q:"She ___ Spanish at school before moving to Argentina.",a:"studied",o:["studied","studies","was studying","had studied"],t:"Past Simple",e:"AcciÃ³n completa en el pasado.",es:"EstudiÃ³ espaÃ±ol antes de mudarse a Argentina."},
{q:"I ___ the answer immediately.",a:"knew",o:["knew","know","was knowing","have known"],t:"Past Simple",e:"Conocimiento en momento pasado.",es:"Supe la respuesta enseguida."},
{q:"She ___ her presentation very well.",a:"delivered",o:["delivered","delivers","was delivering","has delivered"],t:"Past Simple",e:"Evento completo â†’ Past Simple.",es:"PresentÃ³ muy bien su exposiciÃ³n."},
{q:"He ___ his job in 2015.",a:"lost",o:["lost","loses","was losing","has lost"],t:"Past Simple",e:"'In 2015' â†’ Past Simple.",es:"PerdiÃ³ su trabajo en 2015."},
{q:"I ___ thinking about you when you called.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"Pensamiento en progreso en ese momento â†’ Past Continuous. No pasado simple.",es:"Estaba pensando en ti cuando llamaste."},
{q:"The dog ___ barking all night.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"AcciÃ³n prolongada en el pasado.",es:"El perro estuvo ladrando toda la noche."},
{q:"She ___ not listening during the lecture.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"Negativa Past Continuous: wasn't/weren't + V-ing.",es:"No estaba escuchando durante la conferencia."},
{q:"When he opened the box, someone ___ already taken the gift.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Descubrimiento de acciÃ³n anterior.",es:"Cuando abriÃ³ la caja, alguien ya se habÃ­a llevado el regalo."},
{q:"He told us that he ___ grown up in a small village.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Reported speech: el verbo retrocede un tiempo â†’ Present Perfect â†’ Past Perfect.",es:"Nos dijo que habÃ­a crecido en un pueblo pequeÃ±o."},
{q:"I felt terrible â€” I ___ eaten too much.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"Causa que ocurriÃ³ ANTES â†’ Past Perfect. Primero comÃ­ demasiado (PP), luego me sentÃ­ mal (PS).",es:"Me sentÃ­a fatal â€” habÃ­a comido demasiado."},
{q:"She ___ just finished painting when the phone rang.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'Just' + acciÃ³n anterior reciente.",es:"Acababa de terminar de pintar cuando sonÃ³ el telÃ©fono."},
{q:"They ___ been arguing for hours before they agreed.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n anterior a acuerdo.",es:"Llevaban horas discutiendo antes de llegar a un acuerdo."},
{q:"I noticed she was nervous â€” she ___ been biting her nails.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia de actividad nerviosa.",es:"NotÃ© que estaba nerviosa â€” habÃ­a estado mordiÃ©ndose las uÃ±as."},
{q:"He had a sore throat â€” he ___ been singing too much.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de sÃ­ntoma â†’ PP Continuous.",es:"TenÃ­a la garganta irritada â€” habÃ­a cantado demasiado."},
{q:"She couldn't type â€” she ___ been working 12 hours.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de fatiga â†’ PP Continuous.",es:"Ya no podÃ­a teclear â€” llevaba 12 horas en el ordenador."},
{q:"The rain ___ when we decided to walk.",a:"had stopped",o:["had stopped","stopped","was stopping","has stopped"],t:"Past Perfect",e:"La lluvia parÃ³ ANTES de la decisiÃ³n.",es:"La lluvia habÃ­a parado cuando decidimos salir a caminar."},
{q:"She could tell that he ___ been drinking.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia visible de actividad que estuvo ocurriendo antes de este momento â†’ Past Perf. Cont.",es:"PodÃ­a notar que habÃ­a estado bebiendo."},
{q:"When the teacher entered, the students ___ quietly.",a:"were sitting",o:["were sitting","sat","have sat","had sat"],t:"Past Continuous",e:"DescripciÃ³n de escena en momento pasado.",es:"Cuando entrÃ³ la profesora, los alumnos estaban sentados en silencio."},
{q:"He ___ the business for a year before he sold it.",a:"ran",o:["ran","runs","was running","had run"],t:"Past Simple",e:"ProfesiÃ³n o situaciÃ³n que YA TERMINÃ“ â†’ Past Simple, no Present Perfect.",es:"DirigiÃ³ el negocio un aÃ±o antes de venderlo."},
{q:"They ___ the decision after careful consideration.",a:"made",o:["made","make","were making","had made"],t:"Past Simple",e:"AcciÃ³n completamente terminada en el pasado â†’ Past Simple.",es:"Tomaron la decisiÃ³n tras reflexiÃ³n detenida."},
{q:"She ___ studying hard because she had an exam.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"Motivo de la actividad continua â†’ Cont.",es:"Estaba estudiando mucho porque tenÃ­a un examen."},
{q:"He ___ not eaten since lunchtime.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de alimentaciÃ³n desde hora anterior.",es:"No habÃ­a comido desde mediodÃ­a."},
{q:"She ___ not been feeling well before the diagnosis.",a:"had",o:["had","has","was","did"],t:"Past Perfect Continuous",e:"Estado continuo anterior a diagnÃ³stico.",es:"No se habÃ­a encontrado bien antes del diagnÃ³stico."},
{q:"He looked relieved â€” he ___ been worried all week.",a:"had been",o:["had been","was","has been","were"],t:"Past Perfect Continuous",e:"Estado emocional continuo anterior.",es:"ParecÃ­a aliviado â€” habÃ­a estado preocupado toda la semana."},
{q:"She ___ been rehearsing the play for months before opening night.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n de preparaciÃ³n anterior.",es:"HabÃ­a ensayado la obra meses antes del estreno."},
{q:"We ___ just arrived when it started to snow.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'Just' + acciÃ³n anterior a otra.",es:"AcabÃ¡bamos de llegar cuando empezÃ³ a nevar."},
{q:"He ___ been going to the gym before his injury.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"HÃ¡bito anterior a lesiÃ³n.",es:"HabÃ­a estado yendo al gimnasio antes de la lesiÃ³n."},
{q:"The guests ___ already waiting when the bride arrived.",a:"were",o:["were","had","did","have"],t:"Past Continuous",e:"DescripciÃ³n de situaciÃ³n en momento clave.",es:"Los invitados ya esperaban cuando llegÃ³ la novia."},
{q:"I ___ her for years before we met in person.",a:"had spoken to",o:["had spoken to","spoke to","was speaking to","have spoken to"],t:"Past Perfect",e:"Contacto anterior a primer encuentro.",es:"HacÃ­a aÃ±os que hablaba con ella antes de conocernos."},
{q:"They ___ not been communicating well before the project failed.",a:"had",o:["had","have","were","did"],t:"Past Perfect Continuous",e:"ComunicaciÃ³n deficiente anterior al fracaso.",es:"No habÃ­an comunicado bien antes del fracaso."},
{q:"She ___ very hard at school.",a:"worked",o:["worked","works","was working","has worked"],t:"Past Simple",e:"Esfuerzo pasado â†’ Past Simple.",es:"TrabajÃ³ mucho en el colegio."},
{q:"He ___ the book three times.",a:"read",o:["read","reads","was reading","has read"],t:"Past Simple",e:"NÃºmero de veces completado â†’ Past Simple.",es:"LeyÃ³ el libro tres veces."},
{q:"What time ___ the meeting start?",a:"did",o:["did","does","was","had"],t:"Past Simple",e:"Pregunta sobre evento pasado.",es:"Â¿A quÃ© hora empezÃ³ la reuniÃ³n?"},
{q:"She ___ lost her job before she found a better one.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Evento anterior a otro.",es:"HabÃ­a perdido su trabajo antes de encontrar uno mejor."},
{q:"I felt much better â€” I ___ been sleeping properly.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de mejora â†’ PP Continuous.",es:"Me sentÃ­a mucho mejor porque habÃ­a estado durmiendo bien."},
{q:"She ___ not been taking her medication.",a:"had",o:["had","has","was","did"],t:"Past Perfect Continuous",e:"Incumplimiento continuo anterior.",es:"No habÃ­a estado tomando la medicaciÃ³n.",},
{q:"The company ___ before the recession hit.",a:"had already started declining",o:["had already started declining","already declined","was declining","declined"],t:"Past Perfect",e:"Inicio de declive anterior a recesiÃ³n.",es:"La empresa ya habÃ­a empezado a declinar antes de la recesiÃ³n."},
{q:"I didn't recognise him â€” he ___ changed a lot.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Cambio anterior al encuentro.",es:"No lo reconocÃ­ â€” habÃ­a cambiado mucho."},
{q:"She ___ been crying â€” her eyes were red.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia de llanto anterior.",es:"HabÃ­a estado llorando â€” tenÃ­a los ojos rojos."},
{q:"He ___ at the same company for twenty years.",a:"worked",o:["worked","works","was working","had worked"],t:"Past Simple",e:"ProfesiÃ³n o situaciÃ³n que YA TERMINÃ“ â†’ Past Simple, no Present Perfect.",es:"TrabajÃ³ en la misma empresa veinte aÃ±os."},
{q:"We ___ been waiting for this news for months.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Espera prolongada anterior a noticia.",es:"LlevÃ¡bamos meses esperando esta noticia."},
{q:"By the time we reached the top, we ___ climbed for six hours.",a:"had been",o:["had been","were","have been","did"],t:"Past Perfect Continuous",e:"DuraciÃ³n hasta alcanzar la cima.",es:"Cuando llegamos a la cumbre, llevÃ¡bamos seis horas subiendo."},
{q:"I ___ not realised how late it was.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"No me di cuenta â†’ estado mental sobre algo que ya habÃ­a ocurrido â†’ Past Perfect.",es:"No me habÃ­a dado cuenta de lo tarde que era."},
{q:"She ___ been practicing for years before winning.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n anterior al logro.",es:"HabÃ­a estado practicando aÃ±os antes de ganar."},
{q:"It ___ been snowing for hours before we realised.",a:"had been",o:["had been","was","has been","were"],t:"Past Perfect Continuous",e:"FenÃ³meno anterior al descubrimiento.",es:"Llevaba horas nevando antes de que nos diÃ©ramos cuenta."},
{q:"When we reached the party, most people ___ already left.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'When we arrived' + salida anterior.",es:"Cuando llegamos a la fiesta, la mayorÃ­a ya se habÃ­a ido."},
{q:"She ___ been training for the marathon for a year.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'For a year' anterior a punto pasado.",es:"Llevaba un aÃ±o entrenando para el maratÃ³n."},
{q:"He had been ___ the company for five years when the crisis hit.",a:"running",o:["running","run","ran","to run"],t:"Past Perfect Continuous",e:"PP Continuous â†’ had been + V-ing.",es:"Llevaba cinco aÃ±os dirigiendo la empresa cuando llegÃ³ la crisis."},
{q:"The coach ___ exhausted â€” the team had been training non-stop.",a:"was",o:["was","had","were","did"],t:"Past Continuous",e:"Estado en progreso en el pasado.",es:"El entrenador estaba agotado â€” el equipo habÃ­a entrenado sin parar."},
{q:"She was reading when I ___.",a:"knocked",o:["knocked","was knocking","knock","had knocked"],t:"Past Simple",e:"Evento que interrumpe acciÃ³n â†’ Past Simple.",es:"Estaba leyendo cuando llamÃ© a la puerta."},
{q:"They were exhausted because they ___ been travelling all day.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Causa del agotamiento â†’ PP Continuous.",es:"Estaban agotados porque habÃ­an viajado todo el dÃ­a."},
{q:"She ___ not met the new director before the conference.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia (o ausencia) ANTES de otro momento pasado â†’ Past Perfect.",es:"No habÃ­a conocido al nuevo director antes de la conferencia."},
{q:"He ___ been working on the problem for weeks without success.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Esfuerzo sin resultado â†’ PP Continuous.",es:"Llevaba semanas trabajando en el problema sin Ã©xito."},
{q:"I found the letter she ___ been hiding from me.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Secreto revelado â†’ PP Continuous.",es:"EncontrÃ© la carta que me habÃ­a estado ocultando."},
{q:"By midnight, they ___ been dancing for three hours.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'By midnight' + duraciÃ³n.",es:"A medianoche llevaban tres horas bailando."},
{q:"We ___ not spoken in years when we bumped into each other.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Ausencia de comunicaciÃ³n â†’ Past Perfect.",es:"LlevÃ¡bamos aÃ±os sin hablarnos cuando nos encontramos."},
{q:"He ___ been trying to contact her before she replied.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Esfuerzo continuo anterior a respuesta.",es:"HabÃ­a estado intentando contactarla antes de que respondiera."},
{q:"The students ___ already handed in essays when teacher extended deadline.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"AcciÃ³n anterior a cambio de reglas.",es:"Los estudiantes ya habÃ­an entregado las redacciones cuando el profesor ampliÃ³ el plazo."},
{q:"She ___ been living in London before she moved to Paris.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Residencia anterior â†’ PP Continuous.",es:"HabÃ­a estado viviendo en Londres antes de mudarse a ParÃ­s."},
{q:"I was just about to leave when she ___.",a:"called",o:["called","was calling","calls","had called"],t:"Past Simple",e:"Evento que interrumpe â†’ Past Simple.",es:"Estaba a punto de irme cuando llamÃ³."},
{q:"They ___ to complete the task on time.",a:"managed",o:["managed","were managing","manage","had managed"],t:"Past Simple",e:"Logro o resultado puntual en el pasado â†’ Past Simple.",es:"Consiguieron completar la tarea a tiempo."},
{q:"By the final, she ___ been competing for three years.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'By the final' + duraciÃ³n.",es:"Para la final, llevaba tres aÃ±os compitiendo."},
{q:"When I arrived at the party, she ___ already left.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'When I arrived' + salida anterior.",es:"Cuando lleguÃ© a la fiesta, ella ya se habÃ­a ido."},
{q:"He ___ been working overtime before his holiday.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Horas extra anteriores a vacaciones.",es:"HabÃ­a estado haciendo horas extra antes de sus vacaciones."},
{q:"She ___ been ignoring calls all day.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"PatrÃ³n de comportamiento anterior.",es:"HabÃ­a estado ignorando las llamadas todo el dÃ­a."},
{q:"The fire ___ been burning for hours before firefighters arrived.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n antes de llegada de bomberos.",es:"El fuego llevaba horas ardiendo antes de que llegaran los bomberos."},
{q:"I felt sick because I ___ not eaten anything.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"Causa de malestar â†’ Past Perfect.",es:"Me sentÃ­a mal porque no habÃ­a comido nada."},
{q:"He ___ been arguing with his boss before he quit.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Conflicto anterior a renuncia.",es:"HabÃ­a estado discutiendo con su jefe antes de dimitir."},
{q:"She was nervous because she ___ never given a speech before.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia (o ausencia) ANTES de otro momento pasado â†’ Past Perfect.",es:"Estaba nerviosa porque nunca habÃ­a dado un discurso."},
{q:"They ___ been planning the surprise for a month.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n de planificaciÃ³n anterior.",es:"Llevaban un mes planeando la sorpresa."},
{q:"She ___ not seen snow before moving to Canada.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'Before moving' â†’ experiencia anterior.",es:"No habÃ­a visto la nieve antes de mudarse a CanadÃ¡."},
{q:"By the time they hired someone, weeks ___ passed.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'By the time' + semanas transcurridas.",es:"Para cuando contrataron a alguien, habÃ­an pasado semanas."},
{q:"We ___ been working on the project all month.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'All month' + actividad anterior.",es:"HabÃ­amos estado trabajando en el proyecto todo el mes."},
{q:"She ___ been dating him for a year when they got engaged.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n de relaciÃ³n anterior a compromiso.",es:"Llevaba un aÃ±o saliendo con Ã©l cuando se prometieron."},
{q:"He ___ finished his report before the meeting started.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'Before the meeting' + informe completado.",es:"HabÃ­a terminado el informe antes de que empezara la reuniÃ³n."},
{q:"I ___ been working with her for years before she left.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"ColaboraciÃ³n previa a marcha.",es:"HabÃ­a trabajado con ella aÃ±os antes de que se fuera."},
{q:"The guests ___ already eaten when we arrived with food.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Comida anterior a nuestra llegada.",es:"Los invitados ya habÃ­an comido cuando llegamos con la comida."},
{q:"She ___ been growing the business slowly before the big break.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Crecimiento gradual anterior al Ã©xito.",es:"HabÃ­a estado haciendo crecer el negocio lentamente antes del gran Ã©xito."},
{q:"He ___ never flown before that business trip.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de experiencia antes de punto pasado.",es:"Nunca habÃ­a volado antes de ese viaje de negocios."},
{q:"They ___ been saving for years before buying the house.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Ahorro prolongado anterior a compra.",es:"HabÃ­an estado ahorrando aÃ±os antes de comprar la casa."},
{q:"She ___ spent all her savings before finding a job.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Gasto anterior a encontrar trabajo.",es:"HabÃ­a gastado todos sus ahorros antes de encontrar trabajo."},
{q:"He ___ been practicing his speech all week.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"PrÃ¡ctica anterior a conferencia.",es:"HabÃ­a estado practicando su discurso toda la semana."},
{q:"We ___ lived there for years before the neighbourhood changed.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Periodo anterior a cambio.",es:"HabÃ­amos vivido allÃ­ aÃ±os antes de que el barrio cambiara."},
{q:"She ___ been teaching for thirty years when she retired.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'For 30 years' + profesiÃ³n anterior a jubilaciÃ³n.",es:"Llevaba treinta aÃ±os enseÃ±ando cuando se jubilÃ³."},
{q:"The team had ___ playing for two hours before the match was cancelled.",a:"been",o:["been","be","being","played"],t:"Past Perfect Continuous",e:"PP Continuous â†’ had + been + V-ing.",es:"El equipo llevaba dos horas jugando cuando cancelaron el partido."},
{q:"By the time I woke up, everyone ___ already eaten breakfast.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'By the time I woke' + desayuno anterior.",es:"Para cuando me despertÃ©, todos ya habÃ­an desayunado."},
{q:"He realised he ___ lost his wallet.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Descubrimiento de pÃ©rdida anterior.",es:"Se dio cuenta de que habÃ­a perdido el monedero."},
{q:"I ___ been trying to reach you for hours!",a:"had been",o:["had been","have been","was being","did have"],t:"Past Perfect Continuous",e:"Esfuerzo prolongado anterior.",es:"Â¡Llevaba horas intentando localizarte!"},
{q:"By the time they fixed the leak, water ___ been dripping for days.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'By the time' + duraciÃ³n de problema.",es:"Para cuando arreglaron la fuga, llevaba dÃ­as goteando."},
{q:"She ___ not appeared on stage before that performance.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de experiencia escÃ©nica anterior.",es:"No habÃ­a actuado en escena antes de esa actuaciÃ³n."},
{q:"He ___ been cycling for four hours before taking a break.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n antes de pausa.",es:"Llevaba cuatro horas en bicicleta antes de parar."},
{q:"I ___ not even started when she submitted hers.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"ComparaciÃ³n de progreso â†’ Past Perfect.",es:"Yo todavÃ­a no habÃ­a empezado cuando ella entregÃ³ la suya."},
{q:"He ___ been waiting nervously outside all morning.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Espera continua anterior a evento.",es:"HabÃ­a estado esperando nervioso fuera toda la maÃ±ana."},
{q:"We ___ listening to the radio when the car broke down.",a:"were",o:["were","had","did","have"],t:"Past Continuous",e:"AcciÃ³n en progreso interrumpida por averÃ­a.",es:"EscuchÃ¡bamos la radio cuando el coche se averiÃ³."},
{q:"By midnight, the party ___ been going on for eight hours.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'By midnight' + duraciÃ³n de fiesta.",es:"A medianoche, la fiesta llevaba ocho horas."},
{q:"She noticed that someone ___ moved her things.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"ObservaciÃ³n de cambio anterior.",es:"Se dio cuenta de que alguien habÃ­a movido sus cosas."},
{q:"They ___ together for three years before marrying.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'For 3 years' anterior a boda.",es:"Llevaban tres aÃ±os juntos antes de casarse."},
{q:"She ___ been cooking all afternoon when we arrived.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"AcciÃ³n en curso anterior a llegada.",es:"HabÃ­a estado cocinando toda la tarde cuando llegamos."},
{q:"He ___ never tried such spicy food before that trip.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de experiencia antes de viaje.",es:"Nunca habÃ­a probado comida tan picante antes de ese viaje."},
{q:"We ___ been discussing the plan before the director joined.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Debate anterior a incorporaciÃ³n.",es:"HabÃ­amos estado discutiendo el plan antes de que se uniera el director."},
{q:"She ___ bought all the ingredients before the recipe changed.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Compra anterior a cambio de receta.",es:"HabÃ­a comprado todos los ingredientes antes de que cambiara la receta."},
{q:"He ___ been building up experience for years.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"AcumulaciÃ³n de experiencia anterior.",es:"HabÃ­a estado acumulando experiencia durante aÃ±os."},
{q:"The library ___ closed by the time I arrived.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'By the time' + cierre anterior.",es:"La biblioteca habÃ­a cerrado para cuando lleguÃ©."},
{q:"She ___ been learning Portuguese before the transfer.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Aprendizaje anterior a traslado.",es:"HabÃ­a estado aprendiendo portuguÃ©s antes del traslado."},
{q:"They ___ finished dinner by the time the guests left.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Cena completada antes de que se fueran.",es:"HabÃ­an terminado de cenar cuando los invitados se fueron."},
{q:"I ___ been feeling anxious for weeks before the interview.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Estado emocional continuo anterior.",es:"HabÃ­a estado ansioso semanas antes de la entrevista."},
{q:"He ___ not spoken publicly before that conference.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de experiencia â†’ Past Perfect.",es:"No habÃ­a hablado en pÃºblico antes de esa conferencia."},
{q:"She ___ been running the same route every morning.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Rutina matutina anterior.",es:"HabÃ­a estado corriendo la misma ruta todas las maÃ±anas."},
{q:"We ___ not expected such a warm reception.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Expectativa no cumplida â†’ Past Perfect.",es:"No habÃ­amos esperado una recepciÃ³n tan cÃ¡lida."},
{q:"By the time rescue arrived, they ___ lost for two days.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'By the time' + duraciÃ³n perdidos.",es:"Para cuando llegÃ³ el rescate, llevaban dos dÃ­as perdidos."},
{q:"She ___ been preparing for the exam all semester.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"PreparaciÃ³n durante todo el semestre.",es:"HabÃ­a estado preparando el examen todo el semestre."},
{q:"He ___ just left when you called.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'Just' + salida anterior a llamada.",es:"Acababa de irse cuando llamaste."},
{q:"The project ___ been running over budget for months.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Problema continuo antes de momento.",es:"El proyecto habÃ­a estado excediendo el presupuesto durante meses."},
{q:"We ___ never seen such a beautiful sunset.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'Never' + experiencia anterior.",es:"Nunca habÃ­amos visto una puesta de sol tan bonita."},
{q:"She ___ been working on the design for weeks.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Trabajo anterior en el diseÃ±o.",es:"HabÃ­a estado trabajando en el diseÃ±o durante semanas."},
{q:"I ___ always wanted to visit that place.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Deseo anterior â†’ Past Perfect.",es:"Siempre habÃ­a querido visitar ese lugar."},
{q:"They ___ been managing the store before the new owner took over.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"GestiÃ³n anterior a cambio de dueÃ±o.",es:"HabÃ­an estado gestionando la tienda antes del nuevo dueÃ±o."},
],
[// MODE 2: FUTURE
{q:"I think it ___ rain later.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"PredicciÃ³n sin evidencia â†’ will.",es:"Creo que lloverÃ¡ mÃ¡s tarde."},
{q:"Don't worry â€” I ___ help you.",a:"'ll",o:["'ll","going to","shall","would"],t:"Will",e:"DecisiÃ³n espontÃ¡nea tomada EN ESTE MOMENTO â†’ will. No tenÃ­as el plan antes.",es:"No te preocupes â€” te ayudarÃ©."},
{q:"She ___ be forty next year.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"Hecho futuro predecible.",es:"CumplirÃ¡ cuarenta el aÃ±o que viene."},
{q:"I ___ call you when I arrive.",a:"'ll",o:["'ll","going to","am","would"],t:"Will",e:"Promesa o acciÃ³n espontÃ¡nea.",es:"Te llamarÃ© cuando llegue."},
{q:"___ you help me move this sofa?",a:"Will",o:["Will","Are","Going to","Shall"],t:"Will",e:"PeticiÃ³n de ayuda â†’ Will + sujeto + verbo base? (mÃ¡s directo que Would).",es:"Â¿Me ayudarÃ¡s a mover el sofÃ¡?"},
{q:"She ___ probably be late.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"'Probably' + predicciÃ³n â†’ will. El orden: subject + will probably + V.",es:"Seguramente llegarÃ¡ tarde."},
{q:"I ___ not tell anyone your secret.",a:"won't",o:["won't","am not going to","don't","shall not"],t:"Will",e:"Promesa de NO hacer algo â†’ won't (will not) + verbo base.",es:"No contarÃ© tu secreto a nadie."},
{q:"He thinks technology ___ change everything.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"OpiniÃ³n o predicciÃ³n â†’ will.",es:"Cree que la tecnologÃ­a lo cambiarÃ¡ todo."},
{q:"I'm sure you ___ love this film.",a:"will",o:["will","going to","shall","are"],t:"Will",e:"Certeza o seguridad sobre el futuro â†’ will, no going to.",es:"Estoy segura de que te encantarÃ¡."},
{q:"The results ___ be announced on Friday.",a:"will",o:["will","shall","are going to","are"],t:"Will",e:"Evento programado â†’ will.",es:"Los resultados se anunciarÃ¡n el viernes."},
{q:"She ___ going to study medicine.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan previo decidido â†’ is going to.",es:"Va a estudiar medicina."},
{q:"Look at those clouds â€” it ___ rain.",a:"is going to",o:["is going to","will","shall","would"],t:"Going to",e:"Evidencia presente y visible de algo inminente â†’ going to, no will.",es:"Mira esas nubes â€” va a llover."},
{q:"We ___ visit my parents this weekend.",a:"are going to",o:["are going to","will","shall","would"],t:"Going to",e:"Plan decidido con anterioridad â†’ going to. Will = decisiÃ³n espontÃ¡nea.",es:"Vamos a visitar a mis padres."},
{q:"___ you going to apply for that job?",a:"Are",o:["Are","Will","Do","Shall"],t:"Going to",e:"Pregunta sobre plan â†’ Are + S + going to?",es:"Â¿Vas a solicitar ese trabajo?"},
{q:"He ___ going to quit his job next month.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"IntenciÃ³n decidida â†’ is going to.",es:"Va a dejar su trabajo el mes que viene."},
{q:"She's just eaten a huge meal â€” she ___ be sick.",a:"is going to",o:["is going to","will","shall","would"],t:"Going to",e:"Evidencia presente de consecuencia â†’ going to.",es:"Acaba de comer mucho â€” va a ponerse mala."},
{q:"I ___ not going to accept that offer.",a:"am",o:["am","will","have","shall"],t:"Going to",e:"DecisiÃ³n personal ya tomada â†’ am going to. No will (espontÃ¡neo).",es:"No voy a aceptar esa oferta."},
{q:"They ___ going to announce results tomorrow.",a:"are",o:["are","will","have","shall"],t:"Going to",e:"Evento planificado â†’ are going to.",es:"Van a anunciar los resultados maÃ±ana."},
{q:"Look at him! He ___ fall off that ladder!",a:"is going to",o:["is going to","will","shall","would"],t:"Going to",e:"Ves la evidencia ahora mismo â†’ going to. Will serÃ­a solo predicciÃ³n sin evidencia.",es:"Â¡MÃ­ralo! Â¡Va a caerse!"},
{q:"I ___ going to apply for the position.",a:"am",o:["am","will","have","shall"],t:"Going to",e:"DecisiÃ³n personal â†’ am going to.",es:"Voy a solicitar el puesto."},
{q:"This time tomorrow, I ___ lying on the beach.",a:"will be",o:["will be","am","shall be","am going to be"],t:"Future Continuous",e:"'This time tomorrow' = maÃ±ana a esta hora â†’ acciÃ³n en progreso â†’ Future Continuous.",es:"MaÃ±ana a esta hora estarÃ© tumbado en la playa."},
{q:"She ___ be working when you arrive.",a:"will be",o:["will be","will","is","shall be"],t:"Future Continuous",e:"AcciÃ³n que estarÃ¡ EN PROGRESO en un momento especÃ­fico del futuro â†’ Future Continuous.",es:"EstarÃ¡ trabajando cuando llegues."},
{q:"___ you be using the car this evening?",a:"Will",o:["Will","Are","Do","Shall"],t:"Future Continuous",e:"Future Continuous para preguntar planes ajenos sin presionar â†’ mÃ¡s cortÃ©s que Will.",es:"Â¿UsarÃ¡s el coche esta tarde?"},
{q:"At 8pm tonight, we ___ having dinner.",a:"will be",o:["will be","shall be","are","were"],t:"Future Continuous",e:"Momento futuro especÃ­fico (8pm, maÃ±ana a las 10) â†’ acciÃ³n en progreso â†’ Future Continuous.",es:"A las 8pm estaremos cenando."},
{q:"He ___ travelling to Japan next week.",a:"will be",o:["will be","will","is","shall"],t:"Future Continuous",e:"Durante todo ese periodo futuro â†’ acciÃ³n en progreso â†’ Future Continuous.",es:"EstarÃ¡ viajando a JapÃ³n la semana que viene."},
{q:"Don't call at 6pm â€” I ___ driving.",a:"'ll be",o:["'ll be","'ll","am","shall be"],t:"Future Continuous",e:"Actividad ocurriendo en ese momento especÃ­fico del futuro â†’ Future Continuous.",es:"No llames a las 6 â€” estarÃ© conduciendo."},
{q:"She ___ not be attending the meeting.",a:"will",o:["will","is","shall","does"],t:"Future Continuous",e:"Negativa Future Cont â†’ won't be + V-ing.",es:"No asistirÃ¡ a la reuniÃ³n."},
{q:"By the time you read this, I ___ flying over the Atlantic.",a:"will be",o:["will be","shall be","am","will have been"],t:"Future Continuous",e:"AcciÃ³n que estarÃ¡ EN PROGRESO en un momento especÃ­fico del futuro â†’ Future Continuous.",es:"Para cuando leas esto, estarÃ© volando sobre el AtlÃ¡ntico."},
{q:"They ___ moving all weekend.",a:"will be",o:["will be","will","are","shall be"],t:"Future Continuous",e:"Proceso durante periodo futuro.",es:"PasarÃ¡n todo el fin de semana mudÃ¡ndose."},
{q:"I ___ be studying at the library tomorrow.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Actividad en progreso maÃ±ana.",es:"MaÃ±ana estarÃ© estudiando en la biblioteca."},
{q:"By next June, she ___ finished her degree.",a:"will have",o:["will have","will be","shall have","is going to"],t:"Future Perfect",e:"'By + tiempo futuro' + completado â†’ Future Perfect.",es:"Para junio que viene habrÃ¡ terminado la carrera."},
{q:"I ___ have saved enough money by then.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By then' = para ese momento â†’ acciÃ³n ya completada â†’ Future Perfect.",es:"Para entonces habrÃ© ahorrado suficiente."},
{q:"___ she have finished by Monday?",a:"Will",o:["Will","Shall","Is","Does"],t:"Future Perfect",e:"Pregunta Future Perfect: Will + sujeto + have + past participle?",es:"Â¿HabrÃ¡ terminado para el lunes?"},
{q:"He ___ have left by the time you arrive.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time' + acciÃ³n completada antes.",es:"Se habrÃ¡ ido para cuando llegues."},
{q:"We ___ have been together for ten years by December.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By + fecha' + hito.",es:"Para diciembre llevaremos diez aÃ±os juntos."},
{q:"She ___ not have finished before the meeting.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"Negativa Future Perfect â†’ won't have + PP.",es:"No habrÃ¡ terminado antes de la reuniÃ³n."},
{q:"By the time we get there, the show ___ have started.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time' + inicio anterior.",es:"Para cuando lleguemos, el espectÃ¡culo habrÃ¡ empezado."},
{q:"I ___ have completed the course by year end.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By year end' = para finales de aÃ±o â†’ tarea completada â†’ Future Perfect.",es:"HabrÃ© completado el curso antes de que acabe el aÃ±o."},
{q:"They ___ have finished the stadium by 2026.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By + aÃ±o' + proyecto.",es:"HabrÃ¡n terminado el estadio para 2026."},
{q:"He ___ have recovered by the start of the season.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time' + recuperaciÃ³n.",es:"Se habrÃ¡ recuperado para el inicio de la temporada."},
{q:"By next summer, she ___ have been working here for five years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By + tiempo' + duraciÃ³n en curso â†’ FPC.",es:"Para el prÃ³ximo verano llevarÃ¡ cinco aÃ±os trabajando aquÃ­."},
{q:"By the time he retires, he ___ have been teaching for forty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By the time' + duraciÃ³n de carrera.",es:"Para cuando se jubile llevarÃ¡ cuarenta aÃ±os enseÃ±ando."},
{q:"In December, they ___ have been living together for a decade.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'In December' + 'for a decade' â†’ tiempo acumulado hasta ese punto â†’ Future Perfect Continuous.",es:"En diciembre llevarÃ¡n una dÃ©cada viviendo juntos."},
{q:"By 2030, she ___ have been running the company for twenty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By 2030' + duraciÃ³n de gestiÃ³n.",es:"Para 2030 llevarÃ¡ veinte aÃ±os dirigiendo la empresa."},
{q:"I ___ have been studying for six hours by exam time.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect Continuous",e:"'By exam time' + duraciÃ³n.",es:"Para el examen llevarÃ© seis horas estudiando."},
{q:"By next month, he ___ have been training for the marathon for a year.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By next month' + duraciÃ³n.",es:"Para el mes que viene llevarÃ¡ un aÃ±o entrenando."},
{q:"I promise I ___ be more punctual from now on.",a:"will",o:["will","shall","am going to","am"],t:"Will",e:"Promesa o compromiso personal â†’ will + verbo base.",es:"Prometo ser mÃ¡s puntual a partir de ahora."},
{q:"It looks dark outside â€” it ___ storm.",a:"is going to",o:["is going to","will","shall","would"],t:"Going to",e:"Evidencia visible de tormenta.",es:"EstÃ¡ muy oscuro â€” va a haber tormenta."},
{q:"She ___ not be attending â€” she's ill.",a:"will",o:["will","shall","is going to","would"],t:"Will",e:"Negativa â†’ won't.",es:"No asistirÃ¡ â€” estÃ¡ enferma."},
{q:"By the time we retire, technology ___ have changed dramatically.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time' + transformaciÃ³n futura.",es:"Para cuando nos jubilemos la tecnologÃ­a habrÃ¡ cambiado drÃ¡sticamente."},
{q:"I ___ be thinking about you while you're in hospital.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Estado mental en progreso durante periodo futuro.",es:"EstarÃ© pensando en ti mientras estÃ©s en el hospital."},
{q:"She told us she ___ going to move abroad.",a:"was",o:["was","is","will","shall"],t:"Going to",e:"Plan en estilo indirecto â†’ was going to.",es:"Nos dijo que iba a mudarse al extranjero."},
{q:"By next Christmas, they ___ have been married for thirty years.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By next Christmas' + duraciÃ³n de matrimonio.",es:"Para las prÃ³ximas Navidades llevarÃ¡n treinta aÃ±os casados."},
{q:"___ she be joining us for dinner?",a:"Will",o:["Will","Shall","Is","Does"],t:"Future Continuous",e:"Pregunta educada â†’ Future Continuous.",es:"Â¿Se unirÃ¡ a nosotros para cenar?"},
{q:"The train ___ arrive at 15:30.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"Hechos programados o inevitables â†’ will. Como trenes, vuelos, fechas.",es:"El tren llegarÃ¡ a las 15:30."},
{q:"We ___ going to launch the product in spring.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan corporativo â†’ are going to.",es:"Vamos a lanzar el producto en primavera."},
{q:"I ___ be working late every night this week.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Actividad repetida o continua durante un periodo futuro â†’ Future Continuous.",es:"Esta semana estarÃ© trabajando hasta tarde cada noche."},
{q:"By the end of next year, she ___ have written her novel.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the end of next year' + logro.",es:"Para finales del aÃ±o que viene habrÃ¡ escrito su novela."},
{q:"Don't call at noon â€” I ___ be having lunch.",a:"'ll",o:["'ll","am going to","am","shall"],t:"Future Continuous",e:"AcciÃ³n en momento especÃ­fico futuro.",es:"No llames a mediodÃ­a â€” estarÃ© comiendo."},
{q:"He ___ probably be promoted soon.",a:"will",o:["will","shall","is going to","would"],t:"Will",e:"'Probably' + predicciÃ³n â†’ will. El orden: subject + will probably + V.",es:"Probablemente lo ascenderÃ¡n pronto."},
{q:"They ___ going to renovate the entire building.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan de renovaciÃ³n â†’ are going to.",es:"Van a renovar todo el edificio."},
{q:"By the time guests arrive, we ___ have prepared everything.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By the time guests arrive' + preparativos.",es:"Para cuando lleguen los invitados habremos preparado todo."},
{q:"At this time next month, I ___ be relaxing in the Maldives.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"'At this time next month' â†’ Future Continuous.",es:"El mes que viene a estas horas estarÃ© en las Maldivas."},
{q:"She ___ going to present her findings at the conference.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan ya decidido ANTES de este momento â†’ going to. No will (que es espontÃ¡neo).",es:"Va a presentar sus conclusiones en la conferencia."},
{q:"He ___ not have expected such a warm welcome.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"PredicciÃ³n sobre estado â†’ Future Perfect.",es:"No habrÃ¡ esperado una acogida tan cÃ¡lida."},
{q:"By the time I get there, the food ___ all have been eaten.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time I get' + comida consumida.",es:"Para cuando llegue ya habrÃ¡n comido toda la comida."},
{q:"She ___ be living in her new flat by end of month.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"SituaciÃ³n en curso en punto futuro.",es:"Para finales de mes estarÃ¡ en su piso nuevo."},
{q:"In two weeks, we ___ have been on the road for a month.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'In two weeks' + duraciÃ³n de viaje.",es:"Dentro de dos semanas llevarÃ¡ un mes que estamos de viaje."},
{q:"By graduation, she ___ have studied for five years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By graduation' + aÃ±os de estudio.",es:"Para la graduaciÃ³n habrÃ¡ estudiado cinco aÃ±os."},
{q:"I ___ probably be working from home tomorrow.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"PredicciÃ³n sobre situaciÃ³n laboral.",es:"MaÃ±ana probablemente trabajarÃ© desde casa."},
{q:"They ___ going to implement the system in January.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan tÃ©cnico â†’ are going to.",es:"Van a implementar el sistema en enero."},
{q:"By next spring, she ___ have been training for six months.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By next spring' + duraciÃ³n.",es:"Para la prÃ³xima primavera llevarÃ¡ seis meses entrenando."},
{q:"I ___ not tolerate this behaviour any further.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"Advertencia firme â†’ will not.",es:"No voy a tolerar este comportamiento mÃ¡s."},
{q:"What time ___ the flight land?",a:"will",o:["will","shall","is going to","does"],t:"Will",e:"Hechos programados o inevitables â†’ will. Como trenes, vuelos, fechas.",es:"Â¿A quÃ© hora aterrizarÃ¡ el vuelo?"},
{q:"She ___ be working through the night to finish.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Actividad durante la noche futura.",es:"TrabajarÃ¡ toda la noche para terminar."},
{q:"By end of summer, he ___ have saved enough for a deposit.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By end of summer' + ahorro.",es:"Para finales del verano habrÃ¡ ahorrado para el depÃ³sito."},
{q:"They ___ be opening their new cafÃ© next week.",a:"will",o:["will","shall","are going to","are"],t:"Future Continuous",e:"Apertura en proceso futuro.",es:"La semana que viene estarÃ¡n abriendo su nuevo cafÃ©."},
{q:"By the time project ends, they ___ have been collaborating for three years.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time' + duraciÃ³n.",es:"Para cuando termine el proyecto llevarÃ¡n tres aÃ±os colaborando."},
{q:"I ___ be thinking of you on your big day.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Estado mental en momento futuro.",es:"EstarÃ© pensando en ti en tu gran dÃ­a."},
{q:"She ___ going to take a gap year.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan ya decidido (estudiar, tomarse un aÃ±o) â†’ going to.",es:"Va a tomarse un aÃ±o sabÃ¡tico."},
{q:"By the time they hire someone, weeks ___ have passed.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By the time' + semanas transcurridas.",es:"Para cuando contraten a alguien habrÃ¡n pasado semanas."},
{q:"He ___ be studying law in London next year.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Estudio en progreso en periodo futuro.",es:"El aÃ±o que viene estarÃ¡ estudiando derecho en Londres."},
{q:"In ten years, the company ___ have been operating for a quarter century.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In ten years' + duraciÃ³n.",es:"Dentro de diez aÃ±os la empresa llevarÃ¡ un cuarto de siglo operando."},
{q:"I promise I ___ never lie to you again.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"Promesa personal â†’ will.",es:"Te prometo que nunca mÃ¡s te mentirÃ©."},
{q:"At 10am tomorrow, she ___ be meeting the investors.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"ReuniÃ³n en progreso en momento futuro.",es:"MaÃ±ana a las 10am estarÃ¡ reuniÃ©ndose con los inversores."},
{q:"By the weekend, he ___ have finished all renovations.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the weekend' + reformas.",es:"Para el fin de semana habrÃ¡ terminado todas las reformas."},
{q:"In a year, she ___ have been teaching here for a decade.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In a year' + carrera docente.",es:"Dentro de un aÃ±o llevarÃ¡ una dÃ©cada enseÃ±ando aquÃ­."},
{q:"Don't email now â€” she ___ still be sleeping.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"'Still' â†’ continuaciÃ³n de estado futuro.",es:"No le mandes correo â€” todavÃ­a estarÃ¡ durmiendo."},
{q:"By the next meeting, she ___ have drafted a proposal.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the next meeting' + tarea.",es:"Para la prÃ³xima reuniÃ³n habrÃ¡ redactado una propuesta."},
{q:"They ___ going to spend Christmas in the mountains.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan navideÃ±o â†’ are going to.",es:"Van a pasar la Navidad en la montaÃ±a."},
{q:"By the time I finish this course, I ___ have been studying for eight years.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect Continuous",e:"'By the time I finish' + duraciÃ³n.",es:"Para cuando termine este curso llevarÃ© ocho aÃ±os estudiando."},
{q:"She ___ be presenting at next month's conference.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"PresentaciÃ³n en evento futuro.",es:"El mes que viene presentarÃ¡ en la conferencia."},
{q:"By end of next year, they ___ have launched three products.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By end of next year' + lanzamientos.",es:"Para finales del aÃ±o que viene habrÃ¡n lanzado tres productos."},
{q:"I ___ be checking my emails throughout the day.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Actividad continua durante dÃ­a futuro.",es:"EstarÃ© revisando mis correos a lo largo del dÃ­a."},
{q:"By retirement, she ___ have been working in education for forty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By retirement' + carrera docente.",es:"Para cuando se jubile llevarÃ¡ cuarenta aÃ±os en educaciÃ³n."},
{q:"He ___ going to ask her to marry him tonight.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan definitivo â†’ is going to.",es:"Esta noche le va a pedir matrimonio."},
{q:"I ___ not be able to make it to the party.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"Incapacidad o negativa â†’ won't (will not).",es:"No podrÃ© ir a la fiesta."},
{q:"By the time renovations finish, the family ___ have been with relatives for six months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time' + duraciÃ³n de convivencia temporal.",es:"Para cuando terminen las obras la familia llevarÃ¡ seis meses con familiares."},
{q:"She ___ be joining the new team from Monday.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"IncorporaciÃ³n desde punto futuro.",es:"Se incorporarÃ¡ al nuevo equipo el lunes."},
{q:"By this time next month, we ___ have completed the handover.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By this time next month' + traspaso.",es:"Para estas fechas el mes que viene habremos completado el traspaso."},
{q:"They ___ going to expand internationally.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan de expansiÃ³n â†’ are going to.",es:"Van a expandirse internacionalmente."},
{q:"In twenty years, he ___ have been running the same company for three decades.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In 20 years' + liderazgo.",es:"Dentro de veinte aÃ±os llevarÃ¡ tres dÃ©cadas dirigiendo la empresa."},
{q:"I expect she ___ have heard the news by now.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By now' â†’ ya debe haberse completado.",es:"Supongo que ya habrÃ¡ oÃ­do las noticias."},
{q:"He ___ be waiting for you at the entrance.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"AcciÃ³n que estarÃ¡ EN PROGRESO en un momento especÃ­fico del futuro â†’ Future Continuous.",es:"EstarÃ¡ esperÃ¡ndote en la entrada."},
{q:"By the time of the election, she ___ have been campaigning for two years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By the time of' + campaÃ±a.",es:"Para las elecciones llevarÃ¡ dos aÃ±os en campaÃ±a."},
{q:"I ___ be supporting you every step of the way.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Apoyo continuo durante proceso.",es:"Te apoyarÃ© en cada paso del camino."},
{q:"By the final, they ___ have trained for six months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By the final' + entrenamiento.",es:"Para la final habrÃ¡n entrenado seis meses."},
{q:"She ___ going to take on more responsibilities.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"IntenciÃ³n o decisiÃ³n previa â†’ is going to. No will.",es:"Va a asumir mÃ¡s responsabilidades."},
{q:"By tomorrow morning, he ___ have been driving for twelve hours.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By tomorrow morning' + duraciÃ³n.",es:"Para maÃ±ana por la maÃ±ana llevarÃ¡ doce horas conduciendo."},
{q:"The results ___ be announced at end of week.",a:"will",o:["will","shall","are going to","are"],t:"Will",e:"Anuncio programado â†’ will.",es:"Los resultados se anunciarÃ¡n a finales de semana."},
{q:"She ___ be applying for the scholarship.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Proceso de solicitud en progreso.",es:"EstarÃ¡ solicitando la beca."},
{q:"By the time they close the deal, negotiations ___ have been going on for months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time' + negociaciones.",es:"Para cuando cierren el trato las negociaciones llevarÃ¡n meses."},
{q:"At 11am, I ___ be in a meeting.",a:"'ll",o:["'ll","am going to","am","shall"],t:"Future Continuous",e:"Actividad en hora especÃ­fica futura.",es:"A las 11am estarÃ© en una reuniÃ³n."},
{q:"By the next summit, leaders ___ have been discussing climate change for decades.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By next summit' + debate prolongado.",es:"Para la prÃ³xima cumbre los lÃ­deres llevarÃ¡n dÃ©cadas debatiendo."},
{q:"She ___ join us if she finishes on time.",a:"will",o:["will","shall","is going to","would"],t:"Will",e:"CondiciÃ³n + resultado â†’ will.",es:"Se unirÃ¡ si termina a tiempo."},
{q:"He ___ be commuting for three hours daily.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Rutina en progreso futuro.",es:"HarÃ¡ tres horas de trayecto cada dÃ­a."},
{q:"By the time they launch the product, they ___ have spent two years developing it.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By the time' + desarrollo.",es:"Para cuando lancen el producto habrÃ¡n pasado dos aÃ±os desarrollÃ¡ndolo."},
{q:"In a decade, the city ___ have been transforming for twenty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In a decade' + transformaciÃ³n.",es:"Dentro de una dÃ©cada la ciudad llevarÃ¡ veinte aÃ±os transformÃ¡ndose."},
{q:"She ___ going to run her first marathon this spring.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan deportivo â†’ is going to.",es:"Va a correr su primer maratÃ³n esta primavera."},
{q:"By the next meeting, all reports ___ have been submitted.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"Informes entregados antes de reuniÃ³n.",es:"Para la prÃ³xima reuniÃ³n todos los informes habrÃ¡n sido entregados."},
{q:"I ___ be looking after the children tomorrow.",a:"will",o:["will","shall","am going to","am"],t:"Future Continuous",e:"Actividad en progreso maÃ±ana.",es:"MaÃ±ana estarÃ© cuidando a los niÃ±os."},
{q:"By the time she's forty, she ___ have achieved her goals.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time she's' + logros.",es:"Para cuando tenga cuarenta habrÃ¡ logrado sus metas."},
{q:"They ___ going to donate to charity this year.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"DecisiÃ³n de donaciÃ³n â†’ are going to.",es:"Van a donar a una ONG este aÃ±o."},
{q:"She ___ be interviewing candidates all morning.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Entrevistas durante la maÃ±ana.",es:"EstarÃ¡ entrevistando candidatos toda la maÃ±ana."},
{q:"By this time tomorrow, she ___ have sat her final exam.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By this time tomorrow' + examen.",es:"MaÃ±ana a estas horas ya habrÃ¡ hecho su examen final."},
{q:"He ___ be working on the same project all week.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Proceso durante toda la semana.",es:"EstarÃ¡ trabajando en el mismo proyecto toda la semana."},
{q:"By the time she completes her PhD, she ___ have been studying for eight years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By the time she completes' + duraciÃ³n.",es:"Para cuando termine el doctorado llevarÃ¡ ocho aÃ±os estudiando."},
{q:"I ___ not be attending â€” I have a prior commitment.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"No asistencia â†’ won't.",es:"No asistirÃ© â€” tengo un compromiso previo."},
{q:"She ___ going to volunteer at the shelter.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan altruista â†’ is going to.",es:"Va a hacer voluntariado en el refugio."},
{q:"By next April, they ___ have been running the cafÃ© for two years.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By next April' + duraciÃ³n.",es:"Para el prÃ³ximo abril llevarÃ¡n dos aÃ±os con el cafÃ©."},
{q:"By the time they finish the renovations, they ___ have been living with relatives for months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time' + convivencia temporal.",es:"Para cuando terminen las obras llevarÃ¡n meses con familiares."},
{q:"In six months' time, I ___ have been learning guitar for a year.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect Continuous",e:"'In six months' + duraciÃ³n.",es:"Dentro de seis meses llevarÃ© un aÃ±o aprendiendo guitarra."},
{q:"She ___ be giving a speech at 3pm.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Discurso en progreso a las 3pm.",es:"A las 3pm estarÃ¡ dando un discurso."},
{q:"By this time next year, I ___ have moved to a new city.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By this time next year' + mudanza.",es:"Para estas fechas el aÃ±o que viene me habrÃ© mudado."},
{q:"They ___ going to hire ten new employees this quarter.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan de contrataciÃ³n â†’ are going to.",es:"Van a contratar a diez personas este trimestre."},
{q:"By the time he's 30, he ___ have visited 50 countries.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time he's 30' + viajes.",es:"Para cuando cumpla 30 habrÃ¡ visitado 50 paÃ­ses."},
{q:"She ___ be having a baby any day now.",a:"will",o:["will","is going to","shall","would"],t:"Going to",e:"Evidencia fÃ­sica de inminencia â†’ going to.",es:"DarÃ¡ a luz cualquier dÃ­a de estos."},
{q:"I bet they ___ be arguing when we get there.",a:"will",o:["will","shall","are going to","would"],t:"Future Continuous",e:"PredicciÃ³n de actividad futura en progreso.",es:"Apuesto a que estarÃ¡n discutiendo cuando lleguemos."},
{q:"She ___ start her new job on Monday.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"Evento planificado prÃ³ximo â†’ will.",es:"EmpezarÃ¡ su nuevo trabajo el lunes."},
{q:"By midnight, the party ___ have been going on for eight hours.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By midnight' + duraciÃ³n de fiesta.",es:"A medianoche la fiesta llevarÃ¡ ocho horas."},
{q:"He ___ not going to make the same mistake again.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"DecisiÃ³n tomada â†’ is not going to.",es:"No va a cometer el mismo error otra vez."},
{q:"At 3am, he ___ be deep asleep.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"Estado en momento especÃ­fico nocturno.",es:"A las 3am estarÃ¡ profundamente dormido."},
{q:"In five years, she ___ have been practising law for a decade.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In five years' + carrera jurÃ­dica.",es:"Dentro de cinco aÃ±os llevarÃ¡ una dÃ©cada ejerciendo la abogacÃ­a."},
{q:"___ you have finished by lunchtime?",a:"Will",o:["Will","Shall","Are","Do"],t:"Future Perfect",e:"Pregunta Future Perfect: Will + sujeto + have + past participle?",es:"Â¿HabrÃ¡s terminado para la hora de comer?"},
{q:"By the time rescue arrives, they ___ have been stuck for 48 hours.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time rescue arrives' + duraciÃ³n.",es:"Para cuando llegue el rescate llevarÃ¡n 48 horas atrapados."},
{q:"She ___ going to tell him the truth.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"IntenciÃ³n ante circunstancias â†’ is going to.",es:"Va a decirle la verdad."},
{q:"I think she ___ be promoted.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"OpiniÃ³n o predicciÃ³n personal â†’ will. Con 'I think/expect/believe'.",es:"Creo que la ascenderÃ¡n."},
{q:"He ___ be presenting the strategy next Tuesday.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"PresentaciÃ³n en momento futuro.",es:"El prÃ³ximo martes presentarÃ¡ la nueva estrategia."},
{q:"By 2025, the company ___ have expanded into three markets.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By 2025' + expansiÃ³n.",es:"Para 2025 la empresa se habrÃ¡ expandido a tres mercados."},
{q:"I ___ have sent you the files by lunchtime.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By lunchtime' + tarea completada.",es:"Para la hora de comer te habrÃ© enviado los archivos."},
{q:"They ___ going to reduce their carbon footprint.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Compromiso medioambiental â†’ are going to.",es:"Van a reducir su huella de carbono."},
{q:"By next month, he ___ have been learning Spanish for two years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By next month' + aprendizaje.",es:"Para el mes que viene llevarÃ¡ dos aÃ±os aprendiendo espaÃ±ol."},
{q:"She ___ not be available this afternoon.",a:"will",o:["will","shall","is going to","would"],t:"Will",e:"Indisponibilidad futura â†’ won't.",es:"No estarÃ¡ disponible esta tarde."},
{q:"What ___ you be doing at 9pm?",a:"will",o:["will","shall","are going to","would"],t:"Future Continuous",e:"Pregunta sobre actividad en momento futuro.",es:"Â¿QuÃ© estarÃ¡s haciendo a las 9pm?"},
{q:"She ___ going to take the driving test again next month.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Nuevo intento planificado â†’ is going to.",es:"Va a volver a hacer el examen de conducir."},
{q:"By this time next year, we ___ have been living in our new house for six months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By this time next year' + duraciÃ³n de residencia.",es:"Para estas fechas el aÃ±o que viene llevaremos seis meses en nuestra casa nueva."},
],
[// MODE 3: MIXED
{q:"She ___ to work every day by bus.",a:"goes",o:["goes","go","is going","went"],t:"Present Simple",e:"Rutina diaria + 3Âª persona singular â†’ goes. Go â†’ goes (go+es).",es:"Va al trabajo en autobÃºs todos los dÃ­as."},
{q:"I ___ TV when the phone rang.",a:"was watching",o:["was watching","watched","have watched","had watched"],t:"Past Continuous",e:"AcciÃ³n larga de fondo (Past Cont.) interrumpida por acciÃ³n corta (Past Simple). 'When she called' = interrupciÃ³n.",es:"Estaba viendo la tele cuando sonÃ³ el telÃ©fono."},
{q:"I think it ___ rain later.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"PredicciÃ³n sobre el futuro sin evidencia clara â†’ will. Se usa con 'I think, I believe, probably'.",es:"Creo que lloverÃ¡ mÃ¡s tarde."},
{q:"By the time I arrived, she ___ already left.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'By the time' = para cuando... â†’ la acciÃ³n anterior usa Past Perfect. El orden: 1Âº Past Perf, 2Âº Past Simple.",es:"Cuando lleguÃ©, ella ya se habÃ­a ido."},
{q:"She ___ been studying all morning.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"3Âª pers + 'all morning'.",es:"Ha estado estudiando toda la maÃ±ana."},
{q:"Look at those clouds â€” it ___ rain.",a:"is going to",o:["is going to","will","shall","would"],t:"Going to",e:"Evidencia presente y visible de algo inminente â†’ going to, no will.",es:"Va a llover."},
{q:"___ you enjoy the concert last night?",a:"Did",o:["Did","Do","Have","Were"],t:"Past Simple",e:"'Last night' â†’ Past Simple.",es:"Â¿Disfrutaste el concierto anoche?"},
{q:"She ___ never been to Japan.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Never' indica experiencia (o falta de ella) â†’ Present Perfect. 3Âª pers sing â†’ has.",es:"Nunca ha estado en JapÃ³n."},
{q:"This time tomorrow, I ___ lying on the beach.",a:"will be",o:["will be","am","shall be","am going to be"],t:"Future Continuous",e:"'This time tomorrow' = maÃ±ana a esta hora â†’ acciÃ³n en progreso â†’ Future Continuous.",es:"MaÃ±ana a esta hora estarÃ© en la playa."},
{q:"He ___ been running for hours â€” he was exhausted.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa de agotamiento: acciÃ³n prolongada ANTES de otro momento pasado â†’ Past Perfect Continuous.",es:"HabÃ­a estado corriendo horas â€” estaba agotado."},
{q:"Water ___ at 100 degrees Celsius.",a:"boils",o:["boils","boil","is boiling","boiled"],t:"Present Simple",e:"Hecho cientÃ­fico.",es:"El agua hierve a 100 grados."},
{q:"She ___ going to study medicine.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan ya decidido ANTES de este momento â†’ going to. No will (que es espontÃ¡neo).",es:"Va a estudiar medicina."},
{q:"We ___ dinner when I arrived.",a:"were having",o:["were having","had","have had","had had"],t:"Past Continuous",e:"Cena en progreso (Past Cont.) cuando lleguÃ© (Past Simple). La cena ya habÃ­a empezado.",es:"EstÃ¡bamos cenando cuando lleguÃ©."},
{q:"I ___ just finished the report.",a:"have",o:["have","had","am","did"],t:"Present Perfect",e:"'Just' = acaba de ocurrir â†’ Present Perfect. Muy reciente.",es:"Acabo de terminar el informe."},
{q:"By next June, she ___ finished her degree.",a:"will have",o:["will have","will be","shall have","is going to"],t:"Future Perfect",e:"'By + tiempo futuro' = para entonces â†’ la acciÃ³n habrÃ¡ TERMINADO â†’ Future Perfect.",es:"Para junio habrÃ¡ terminado la carrera."},
{q:"She ___ Spanish at school before moving.",a:"studied",o:["studied","studies","was studying","had studied"],t:"Past Simple",e:"AcciÃ³n que empezÃ³ y terminÃ³ en el pasado â†’ Past Simple.",es:"EstudiÃ³ espaÃ±ol antes de mudarse."},
{q:"I ___ been waiting here for two hours.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"'For 2 hours' en curso.",es:"Llevo dos horas esperando."},
{q:"Don't worry â€” I ___ help you.",a:"'ll",o:["'ll","going to","shall","would"],t:"Will",e:"DecisiÃ³n espontÃ¡nea tomada EN ESTE MOMENTO â†’ will. No tenÃ­as el plan antes.",es:"Te ayudarÃ©."},
{q:"She told me she ___ lost her wallet.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Reported speech: el verbo retrocede un tiempo â†’ Present Perfect â†’ Past Perfect.",es:"Me dijo que habÃ­a perdido el monedero."},
{q:"She is on the phone â€” she ___ to a client.",a:"is talking",o:["is talking","talks","talked","has talked"],t:"Present Continuous",e:"La acciÃ³n estÃ¡ sucediendo ahora mismo â†’ Present Continuous (am/is/are + V-ing).",es:"EstÃ¡ hablando con un cliente."},
{q:"He ___ been working here since January.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"'Since January' + 3Âª pers.",es:"Lleva trabajando aquÃ­ desde enero."},
{q:"If I had more time, I ___ travel more.",a:"would",o:["would","will","should","could"],t:"2nd Conditional",e:"2nd Conditional: situaciÃ³n HIPOTÃ‰TICA â†’ If + Past Simple, would + verbo. NO es pasado real.",es:"Si tuviera tiempo, viajarÃ­a mÃ¡s."},
{q:"She ___ all afternoon so she didn't hear.",a:"was sleeping",o:["was sleeping","slept","has slept","had slept"],t:"Past Continuous",e:"AcciÃ³n prolongada (dormÃ­a) que explica por quÃ© no ocurriÃ³ otra cosa.",es:"DormÃ­a toda la tarde, asÃ­ que no oyÃ³."},
{q:"___ you have finished by lunchtime?",a:"Will",o:["Will","Shall","Are","Do"],t:"Future Perfect",e:"Pregunta Future Perfect.",es:"Â¿HabrÃ¡s terminado para mediodÃ­a?"},
{q:"They ___ together for three years before marrying.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n anterior a boda.",es:"Llevaban tres aÃ±os juntos antes de casarse."},
{q:"If it rains, I ___ take an umbrella.",a:"'ll",o:["'ll","would","should","might"],t:"1st Conditional",e:"1st Conditional: condiciÃ³n REAL posible â†’ If + Present Simple, will + verbo. NUNCA 'will' despuÃ©s de 'if'.",es:"Si llueve, cogerÃ© un paraguas."},
{q:"She ___ been living in Madrid for five years.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"'For 5 years' + acciÃ³n que sigue â†’ has been + V-ing. 'Is living' solo describe ahora, no la duraciÃ³n.",es:"Lleva cinco aÃ±os viviendo en Madrid."},
{q:"The film ___ already started when we arrived.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"La pelÃ­cula empezÃ³ ANTES de llegar nosotros â†’ Past Perfect. Orden: 1Âº PP, 2Âº PS.",es:"La pelÃ­cula ya habÃ­a empezado cuando llegamos."},
{q:"I ___ right now, can I call back?",a:"am driving",o:["am driving","drive","drove","have driven"],t:"Present Continuous",e:"'Right now' = ahora mismo â†’ Present Continuous. La acciÃ³n estÃ¡ pasando mientras hablas.",es:"Estoy conduciendo ahora."},
{q:"By 2030, she ___ have been running the company for twenty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By 2030' + duraciÃ³n â†’ total de tiempo acumulado â†’ Future Perfect Continuous.",es:"Para 2030 llevarÃ¡ veinte aÃ±os dirigiendo la empresa."},
{q:"I ___ never tried bungee jumping.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + experiencia.",es:"Nunca he probado el puenting."},
{q:"He was nervous â€” he ___ never given a speech before.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia (o ausencia) ANTES de otro momento pasado â†’ Past Perfect.",es:"Estaba nervioso â€” nunca habÃ­a dado un discurso."},
{q:"She ___ going to quit her job next month.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"IntenciÃ³n o decisiÃ³n previa â†’ is going to. No will.",es:"Va a dejar su trabajo el mes que viene."},
{q:"While I ___ a shower, someone knocked.",a:"was having",o:["was having","had","have had","had had"],t:"Past Continuous",e:"'While' seÃ±ala dos acciones simultÃ¡neas â†’ ambas en Past Continuous, o la larga en Cont. + la corta en Simple.",es:"Mientras me duchaba, llamaron a la puerta."},
{q:"I ___ been thinking about your proposal.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"Pensamiento que lleva tiempo â†’ Pres. Perf. Cont. (have been + V-ing).",es:"He estado pensando en tu propuesta."},
{q:"If I had studied, I ___ have passed.",a:"would",o:["would","will","should","could"],t:"3rd Conditional",e:"3rd Conditional: situaciÃ³n imposible en el PASADO â†’ If + Past Perfect, would have + PP.",es:"Si hubiera estudiado, habrÃ­a aprobado."},
{q:"She ___ not spoken to him since the argument.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Since' + negativa + 3Âª pers.",es:"No le ha hablado desde la discusiÃ³n."},
{q:"They ___ been waiting two hours when the doctor arrived.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Espera que empezÃ³ antes y durÃ³ hasta la llegada del mÃ©dico â†’ Past Perf. Continuous.",es:"Llevaban dos horas esperando cuando llegÃ³ el mÃ©dico."},
{q:"We ___ going to launch the product in spring.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan corporativo â†’ are going to.",es:"Vamos a lanzar el producto en primavera."},
{q:"She ___ a great book right now.",a:"is reading",o:["is reading","reads","read","has read"],t:"Present Continuous",e:"'Right now' = ahora mismo â†’ Present Continuous. La acciÃ³n estÃ¡ pasando mientras hablas.",es:"EstÃ¡ leyendo un libro muy bueno."},
{q:"He ___ his job in 2015.",a:"lost",o:["lost","loses","was losing","has lost"],t:"Past Simple",e:"'In 2015' â†’ Past Simple.",es:"PerdiÃ³ su trabajo en 2015."},
{q:"By end of year, she ___ have written her novel.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By end of year' + logro.",es:"Para finales de aÃ±o habrÃ¡ escrito su novela."},
{q:"I could tell she ___ been crying.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia visible de actividad que estuvo ocurriendo antes de este momento â†’ Past Perf. Cont.",es:"Pude ver que habÃ­a estado llorando."},
{q:"The sun ___ in the east.",a:"rises",o:["rises","rise","is rising","rose"],t:"Present Simple",e:"Verdad cientÃ­fica.",es:"El sol sale por el este."},
{q:"She ___ not be attending the meeting.",a:"will",o:["will","is","shall","does"],t:"Future Continuous",e:"Negativa Future Continuous: won't be + V-ing. No estarÃ¡ haciendo esa acciÃ³n.",es:"No asistirÃ¡ a la reuniÃ³n."},
{q:"They ___ finished before the deadline.",a:"had",o:["had","have","did","were"],t:"Past Perfect",e:"Completado antes del plazo.",es:"HabÃ­an terminado antes del plazo."},
{q:"How long ___ you been learning English?",a:"have",o:["have","has","had","are"],t:"Present Perfect Continuous",e:"'How long' pregunta la duraciÃ³n de algo que sigue â†’ Pres. Perfect Continuous.",es:"Â¿CuÃ¡nto tiempo llevas aprendiendo inglÃ©s?"},
{q:"I ___ call you when I arrive.",a:"'ll",o:["'ll","going to","am","would"],t:"Will",e:"Promesa o compromiso personal â†’ will + verbo base.",es:"Te llamarÃ© cuando llegue."},
{q:"She was surprised â€” she ___ never met anyone like him.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia ocurrida ANTES de este momento pasado â†’ Past Perfect.",es:"Estaba sorprendida â€” nunca habÃ­a conocido a alguien asÃ­."},
{q:"We ___ have been together for ten years by December.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect",e:"'By December' + hito.",es:"Para diciembre llevaremos diez aÃ±os juntos."},
{q:"I ___ TV when the doorbell rang.",a:"was watching",o:["was watching","watched","have watched","had watched"],t:"Past Continuous",e:"AcciÃ³n larga en progreso (Past Cont.) cortada por evento puntual (Past Simple).",es:"Estaba viendo la tele cuando sonÃ³ el timbre."},
{q:"She ___ always wanted to visit Australia.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Always' + 3Âª pers â†’ has.",es:"Siempre ha querido visitar Australia."},
{q:"By time he retires, he ___ have been teaching forty years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By the time he retires' â†’ duraciÃ³n total de su carrera â†’ Future Perfect Continuous.",es:"Para cuando se jubile llevarÃ¡ cuarenta aÃ±os enseÃ±ando."},
{q:"He ___ been smoking for twenty years before he quit.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"HÃ¡bito que durÃ³ mucho tiempo ANTES de un punto pasado â†’ Past Perfect Continuous.",es:"HabÃ­a fumado veinte aÃ±os antes de dejarlo."},
{q:"___ she studying for her exams?",a:"Is",o:["Is","Are","Does","Has"],t:"Present Continuous",e:"Pregunta Continuous con 3Âª pers sing â†’ Is she + V-ing? (Is antes del sujeto).",es:"Â¿EstÃ¡ estudiando para sus exÃ¡menes?"},
{q:"I ___ have saved enough money by then.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By then' = para ese momento â†’ acciÃ³n ya completada â†’ Future Perfect.",es:"Para entonces habrÃ© ahorrado suficiente."},
{q:"They ___ been arguing for hours before they agreed.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"DuraciÃ³n anterior a acuerdo.",es:"Llevaban horas discutiendo antes de llegar a un acuerdo."},
{q:"She ___ three books so far this year.",a:"has written",o:["has written","wrote","is writing","writes"],t:"Present Perfect",e:"'So far this year' â†’ Present Perfect.",es:"Ha escrito tres libros hasta ahora este aÃ±o."},
{q:"She ___ going to tell him the truth.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"IntenciÃ³n â†’ is going to.",es:"Va a decirle la verdad."},
{q:"He fell while he ___ in the park.",a:"was running",o:["was running","ran","has run","had run"],t:"Past Continuous",e:"AcciÃ³n de fondo + evento.",es:"Se cayÃ³ mientras corrÃ­a en el parque."},
{q:"I ___ been studying for hours.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"'For hours' en curso.",es:"Llevo horas estudiando."},
{q:"The train ___ arrive at 15:30.",a:"will",o:["will","is going to","shall","would"],t:"Will",e:"Hechos programados o inevitables â†’ will. Como trenes, vuelos, fechas.",es:"El tren llegarÃ¡ a las 15:30."},
{q:"She ___ just finished painting when the phone rang.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"'Just' + acciÃ³n anterior.",es:"Acababa de terminar de pintar cuando sonÃ³ el telÃ©fono."},
{q:"I ___ know what to do next.",a:"don't",o:["don't","am not knowing","doesn't","haven't"],t:"Present Simple",e:"'Know' verbo estado.",es:"No sÃ© quÃ© hacer a continuaciÃ³n."},
{q:"By the time we get there, the show ___ have started.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time we get there' = para cuando lleguemos â†’ ya habrÃ¡ empezado â†’ Future Perfect.",es:"Para cuando lleguemos el espectÃ¡culo habrÃ¡ empezado."},
{q:"We ___ friends for over twenty years.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For 20 years' + amistad.",es:"Llevamos mÃ¡s de veinte aÃ±os siendo amigos."},
{q:"He ___ the business for a year before he sold it.",a:"ran",o:["ran","runs","was running","had run"],t:"Past Simple",e:"Periodo completado.",es:"DirigiÃ³ el negocio un aÃ±o antes de venderlo."},
{q:"This time next week, she ___ be on holiday.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"'This time next week' â†’ Future Continuous.",es:"La semana que viene a esta hora estarÃ¡ de vacaciones."},
{q:"She ___ not met the new director before the conference.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Experiencia (o ausencia) ANTES de otro momento pasado â†’ Past Perfect.",es:"No habÃ­a conocido al director antes de la conferencia."},
{q:"He ___ English, Spanish and Italian.",a:"speaks",o:["speaks","speak","is speaking","spoke"],t:"Present Simple",e:"Habilidad + 3Âª pers.",es:"Habla inglÃ©s, espaÃ±ol e italiano."},
{q:"By next spring, she ___ have been training for six months.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By next spring' + duraciÃ³n.",es:"Para la prÃ³xima primavera llevarÃ¡ seis meses entrenando."},
{q:"I noticed she was nervous â€” she ___ been biting her nails.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia nerviosa anterior.",es:"NotÃ© que estaba nerviosa â€” se habÃ­a mordido las uÃ±as."},
{q:"___ you ever eaten sushi?",a:"Have",o:["Have","Has","Did","Do"],t:"Present Perfect",e:"'Ever' + experiencia.",es:"Â¿Has comido sushi alguna vez?"},
{q:"Don't email her now â€” she ___ still be sleeping.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"'Still' â†’ continuaciÃ³n de estado.",es:"TodavÃ­a estarÃ¡ durmiendo."},
{q:"She ___ been practicing piano since she was six.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"'Since age 6' + 3Âª pers.",es:"Ha practicado piano desde los seis aÃ±os."},
{q:"I ___ thinking about you when you called.",a:"was",o:["was","were","did","had"],t:"Past Continuous",e:"Pensamiento en progreso en ese momento â†’ Past Continuous. No pasado simple.",es:"Estaba pensando en ti cuando llamaste."},
{q:"I promise I ___ never lie to you again.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"Promesa o compromiso personal â†’ will + verbo base.",es:"Te prometo que nunca mÃ¡s mentirÃ©."},
{q:"The students ___ already handed in essays when teacher extended deadline.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"AcciÃ³n anterior a cambio.",es:"Los alumnos ya habÃ­an entregado cuando el profesor ampliÃ³ el plazo."},
{q:"We ___ a party next Saturday.",a:"are having",o:["are having","have","will have","had"],t:"Present Continuous",e:"Plan futuro confirmado.",es:"Damos una fiesta el prÃ³ximo sÃ¡bado."},
{q:"By the time she completes her PhD, she ___ have been studying for eight years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"DuraciÃ³n hasta el doctorado.",es:"Para cuando termine el doctorado llevarÃ¡ ocho aÃ±os estudiando."},
{q:"They ___ to complete the task on time.",a:"managed",o:["managed","were managing","manage","had managed"],t:"Past Simple",e:"Logro puntual.",es:"Consiguieron completar la tarea a tiempo."},
{q:"She ___ not received any news yet.",a:"hasn't",o:["hasn't","haven't","didn't","wasn't"],t:"Present Perfect",e:"'Yet' negativa + 3Âª pers.",es:"TodavÃ­a no ha recibido noticias."},
{q:"By the time we reached the top, we ___ climbed for six hours.",a:"had been",o:["had been","were","have been","did"],t:"Past Perfect Continuous",e:"DuraciÃ³n hasta la cima.",es:"Cuando llegamos llevÃ¡bamos seis horas subiendo."},
{q:"She ___ be working when you arrive.",a:"will be",o:["will be","will","is","shall be"],t:"Future Continuous",e:"AcciÃ³n que estarÃ¡ EN PROGRESO en un momento especÃ­fico del futuro â†’ Future Continuous.",es:"EstarÃ¡ trabajando cuando llegues."},
{q:"I ___ always admired her dedication.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Always' + sentimiento.",es:"Siempre he admirado su dedicaciÃ³n."},
{q:"He ___ been working on the problem for weeks.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Esfuerzo prolongado ANTES de un punto pasado, sin resultado â†’ Past Perf. Continuous.",es:"Llevaba semanas trabajando en el problema."},
{q:"She ___ going to take a gap year.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan educativo.",es:"Va a tomarse un aÃ±o sabÃ¡tico."},
{q:"I ___ not spoken to him for ages.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'For ages' negativa.",es:"Hace tiempo que no le hablo."},
{q:"By the time rescue arrived, they ___ lost for two days.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"'By the time rescue' + duraciÃ³n.",es:"Para cuando llegÃ³ el rescate llevaban dos dÃ­as perdidos."},
{q:"She ___ currently working on a new project.",a:"is",o:["is","has","does","was"],t:"Present Continuous",e:"'Currently' â†’ Continuous.",es:"Actualmente estÃ¡ trabajando en un proyecto nuevo."},
{q:"I ___ have completed the course by year end.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By year end' = para finales de aÃ±o â†’ tarea completada â†’ Future Perfect.",es:"HabrÃ© completado el curso antes de que acabe el aÃ±o."},
{q:"She ___ been living in London before she moved to Paris.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Residencia anterior.",es:"HabÃ­a vivido en Londres antes de mudarse a ParÃ­s."},
{q:"They ___ football on Saturdays.",a:"play",o:["play","plays","are playing","played"],t:"Present Simple",e:"They â†’ sin -s. Rutina.",es:"Juegan al fÃºtbol los sÃ¡bados."},
{q:"By the time she's forty, she ___ have achieved her goals.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time she's' + logros.",es:"Para cuando tenga cuarenta habrÃ¡ logrado sus metas."},
{q:"I was just about to leave when she ___.",a:"called",o:["called","was calling","calls","had called"],t:"Past Simple",e:"Evento que interrumpe.",es:"Estaba a punto de irme cuando llamÃ³."},
{q:"We ___ been planning this trip for a year.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For a year' en curso.",es:"Llevamos un aÃ±o planeando este viaje."},
{q:"He ___ going to ask her to marry him tonight.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan definido.",es:"Esta noche le va a pedir matrimonio."},
{q:"The streets were wet because it ___ been raining.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"La causa (lluvia prolongada) ocurriÃ³ antes del efecto â†’ Past Perf. Continuous.",es:"Las calles estaban mojadas porque habÃ­a estado lloviendo."},
{q:"I ___ just heard the news.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Just' â†’ acciÃ³n muy reciente.",es:"Acabo de oÃ­r la noticia."},
{q:"___ she be joining us for dinner?",a:"Will",o:["Will","Shall","Is","Does"],t:"Future Continuous",e:"Pregunta educada â†’ Future Continuous.",es:"Â¿Se unirÃ¡ a nosotros para cenar?"},
{q:"She ___ been working too hard lately.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"'Lately' + 3Âª pers.",es:"Ha estado trabajando demasiado Ãºltimamente."},
{q:"When the teacher entered, students ___ quietly.",a:"were sitting",o:["were sitting","sat","have sat","had sat"],t:"Past Continuous",e:"DescripciÃ³n de lo que estaba pasando en un momento del pasado â†’ Past Continuous.",es:"Cuando entrÃ³ la profesora los alumnos estaban sentados."},
{q:"By next April, they ___ have been running the cafÃ© for two years.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By next April' + duraciÃ³n.",es:"Para el prÃ³ximo abril llevarÃ¡n dos aÃ±os con el cafÃ©."},
{q:"She ___ never missed a deadline.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Never' + 3Âª pers.",es:"Nunca ha incumplido un plazo."},
{q:"I ___ not realised how late it was.",a:"had",o:["had","have","was","did"],t:"Past Perfect",e:"No me di cuenta â†’ estado mental sobre algo que ya habÃ­a ocurrido â†’ Past Perfect.",es:"No me habÃ­a dado cuenta de lo tarde que era."},
{q:"She ___ be presenting at next month's conference.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"PresentaciÃ³n en evento futuro.",es:"El mes que viene presentarÃ¡ en la conferencia."},
{q:"I ___ been using this app for months.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"'For months' en curso.",es:"Llevo meses usando esta app."},
{q:"He ___ never flown before that business trip.",a:"had",o:["had","has","was","did"],t:"Past Perfect",e:"Falta de experiencia.",es:"Nunca habÃ­a volado antes de ese viaje."},
{q:"She ___ the piano beautifully.",a:"plays",o:["plays","play","is playing","played"],t:"Present Simple",e:"Habilidad + 3Âª pers.",es:"Toca el piano de maravilla."},
{q:"I ___ not be able to make it to the party.",a:"will",o:["will","shall","am going to","would"],t:"Will",e:"Incapacidad o negativa â†’ won't (will not).",es:"No podrÃ© ir a la fiesta."},
{q:"She ___ been studying medicine for six years before she changed course.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Estudio anterior a cambio de carrera.",es:"HabÃ­a estudiado medicina seis aÃ±os antes de cambiar."},
{q:"I ___ see you at the meeting tomorrow.",a:"'ll",o:["'ll","am going to","am","shall"],t:"Will",e:"PredicciÃ³n o promesa â†’ will.",es:"Te verÃ© en la reuniÃ³n maÃ±ana."},
{q:"She ___ already done the shopping.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'Already' + 3Âª pers.",es:"Ya ha hecho la compra."},
{q:"He ___ been waiting nervously outside all morning.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Espera anterior a evento.",es:"HabÃ­a estado esperando nervioso toda la maÃ±ana."},
{q:"I ___ never eaten octopus.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Never' + experiencia.",es:"Nunca he comido pulpo."},
{q:"In a year, she ___ have been teaching here for a decade.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'In a year' + carrera docente.",es:"Dentro de un aÃ±o llevarÃ¡ una dÃ©cada enseÃ±ando aquÃ­."},
{q:"We ___ been waiting here for an hour.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For an hour' en curso.",es:"Llevamos una hora esperando aquÃ­."},
{q:"It ___ been snowing for hours before we realised.",a:"had been",o:["had been","was","has been","were"],t:"Past Perfect Continuous",e:"FenÃ³meno anterior al descubrimiento.",es:"Llevaba horas nevando antes de que nos diÃ©ramos cuenta."},
{q:"She ___ going to volunteer at the shelter.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"Plan altruista.",es:"Va a hacer voluntariado en el refugio."},
{q:"He ___ spoken to everyone in the team.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"Resultado de acciÃ³n.",es:"Ha hablado con todos en el equipo."},
{q:"By the time they close the deal, negotiations ___ have been going on for months.",a:"will",o:["will","shall","are going to","would"],t:"Future Perfect Continuous",e:"'By the time' + negociaciones.",es:"Para cuando cierren el trato las negociaciones llevarÃ¡n meses."},
{q:"She ___ been running the same route every morning.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Rutina anterior.",es:"HabÃ­a estado corriendo la misma ruta cada maÃ±ana."},
{q:"I ___ just submitted my application.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"'Just' â†’ acciÃ³n muy reciente.",es:"Acabo de enviar mi solicitud."},
{q:"The company ___ been expanding quickly.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"Proceso de expansiÃ³n en curso.",es:"La empresa ha estado expandiÃ©ndose rÃ¡pidamente."},
{q:"By midnight, the party ___ have been going on for eight hours.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect Continuous",e:"'By midnight' + duraciÃ³n.",es:"A medianoche la fiesta llevarÃ¡ ocho horas."},
{q:"She ___ been teaching for thirty years when she retired.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"'For 30 years' anterior a jubilaciÃ³n.",es:"Llevaba treinta aÃ±os enseÃ±ando cuando se jubilÃ³."},
{q:"I ___ read every book in this series.",a:"have",o:["have","has","had","am"],t:"Present Perfect",e:"Experiencia acumulada.",es:"He leÃ­do todos los libros de esta serie."},
{q:"She ___ be working when you call.",a:"will be",o:["will be","will","is","shall be"],t:"Future Continuous",e:"AcciÃ³n que estarÃ¡ EN PROGRESO en un momento especÃ­fico del futuro â†’ Future Continuous.",es:"EstarÃ¡ trabajando cuando llames."},
{q:"They ___ been planning the wedding when they split up.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Actividad anterior a ruptura.",es:"Llevaban meses planeando la boda cuando rompieron."},
{q:"He ___ been getting complaints from clients.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"PatrÃ³n continuo reciente.",es:"Ha estado recibiendo quejas de los clientes."},
{q:"By the time they launch the product, they ___ have spent two years developing it.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time' + desarrollo.",es:"Para cuando lancen el producto habrÃ¡n pasado dos aÃ±os desarrollÃ¡ndolo."},
{q:"I was out of breath because I ___ been running.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Causa fÃ­sica â†’ PP Cont.",es:"Estaba sin aliento porque habÃ­a estado corriendo."},
{q:"She ___ not be available this afternoon.",a:"will",o:["will","shall","is going to","would"],t:"Will",e:"No disponible en el futuro â†’ won't be + adjetivo/participio.",es:"No estarÃ¡ disponible esta tarde."},
{q:"We ___ lived there for years before the neighbourhood changed.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"Periodo anterior a cambio.",es:"HabÃ­amos vivido allÃ­ aÃ±os antes de que el barrio cambiara."},
{q:"I ___ been going to yoga every week.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"Rutina reciente en curso.",es:"He estado yendo a yoga cada semana."},
{q:"By the time I finish this course, I ___ have been studying for eight years.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect Continuous",e:"'By the time I finish' + duraciÃ³n.",es:"Para cuando termine este curso llevarÃ© ocho aÃ±os estudiando."},
{q:"When I arrived at the party, most people ___ already left.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'When I arrived' + salida anterior.",es:"Cuando lleguÃ© a la fiesta la mayorÃ­a ya se habÃ­a ido."},
{q:"They ___ not responded yet.",a:"have",o:["have","has","had","are"],t:"Present Perfect",e:"'Yet' negativa.",es:"TodavÃ­a no han respondido."},
{q:"She ___ going to take on more responsibilities.",a:"is",o:["is","will","has","shall"],t:"Going to",e:"DecisiÃ³n personal.",es:"Va a asumir mÃ¡s responsabilidades."},
{q:"He ___ been working overtime to finish.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"Esfuerzo continuo reciente.",es:"Ha estado haciendo horas extra para terminar."},
{q:"By the final, they ___ have trained for six months.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the final' + entrenamiento.",es:"Para la final habrÃ¡n entrenado seis meses."},
{q:"She ___ been crying â€” her eyes were red.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia de llanto anterior.",es:"HabÃ­a estado llorando â€” tenÃ­a los ojos rojos."},
{q:"I ___ my best friend since primary school.",a:"have known",o:["have known","know","knew","am knowing"],t:"Present Perfect",e:"'Since' + 'know' â†’ Present Perfect.",es:"Conozco a mi mejor amigo desde primaria."},
{q:"At 10am tomorrow, she ___ be meeting the investors.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"ReuniÃ³n en momento futuro.",es:"MaÃ±ana a las 10am estarÃ¡ con los inversores."},
{q:"They ___ been saving for years before buying the house.",a:"had been",o:["had been","have been","were being","did have"],t:"Past Perfect Continuous",e:"Ahorro anterior a compra.",es:"HabÃ­an estado ahorrando aÃ±os antes de comprar la casa."},
{q:"She ___ been learning to play the guitar.",a:"has been",o:["has been","have been","had been","is being"],t:"Present Perfect Continuous",e:"Aprendizaje en curso.",es:"Ha estado aprendiendo a tocar la guitarra."},
{q:"I ___ have sent you the files by lunchtime.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By lunchtime' + tarea.",es:"Para mediodÃ­a te habrÃ© enviado los archivos."},
{q:"He ___ never tasted Thai food before that trip.",a:"had",o:["had","have","were","did"],t:"Past Perfect",e:"'Never... before' + experiencia.",es:"Nunca habÃ­a probado la comida tailandesa antes de ese viaje."},
{q:"We ___ been collaborating on this for months.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For months' + colaboraciÃ³n.",es:"Llevamos meses colaborando en esto."},
{q:"By this time next year, I ___ have moved to a new city.",a:"will",o:["will","shall","am going to","would"],t:"Future Perfect",e:"'By this time next year' + mudanza.",es:"Para estas fechas el aÃ±o que viene me habrÃ© mudado."},
{q:"I ___ been feeling anxious for weeks before the interview.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Estado emocional continuo anterior.",es:"HabÃ­a estado ansioso semanas antes de la entrevista."},
{q:"She ___ won three awards this year.",a:"has",o:["has","have","had","is"],t:"Present Perfect",e:"'This year' + 3Âª pers.",es:"Ha ganado tres premios este aÃ±o."},
{q:"They ___ going to hire ten new people this quarter.",a:"are",o:["are","will","shall","have"],t:"Going to",e:"Plan de contrataciÃ³n.",es:"Van a contratar a diez personas este trimestre."},
{q:"The rain ___ when we decided to walk.",a:"had stopped",o:["had stopped","stopped","was stopping","has stopped"],t:"Past Perfect",e:"AcciÃ³n (parar) que ocurriÃ³ ANTES de la decisiÃ³n â†’ Past Perfect.",es:"La lluvia habÃ­a parado cuando decidimos salir."},
{q:"I ___ been looking forward to this holiday.",a:"have been",o:["have been","has been","had been","am"],t:"Present Perfect Continuous",e:"AnticipaciÃ³n en curso.",es:"Llevaba tiempo esperando estas vacaciones."},
{q:"By the time she's forty, she ___ have achieved everything she set out to do.",a:"will",o:["will","shall","is going to","would"],t:"Future Perfect",e:"'By the time she's' + logros.",es:"Para cuando tenga cuarenta habrÃ¡ logrado todo lo que se propuso."},
{q:"She could tell that he ___ been drinking.",a:"had been",o:["had been","has been","was being","did have"],t:"Past Perfect Continuous",e:"Evidencia visible de actividad que estuvo ocurriendo antes de este momento â†’ Past Perf. Cont.",es:"PodÃ­a notar que habÃ­a estado bebiendo."},
{q:"He ___ be presenting the strategy next Tuesday.",a:"will",o:["will","shall","is going to","is"],t:"Future Continuous",e:"PresentaciÃ³n en momento futuro.",es:"El prÃ³ximo martes presentarÃ¡ la nueva estrategia."},
{q:"We ___ been watching this series for weeks.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For weeks' en curso.",es:"Llevamos semanas viendo esta serie."},
{q:"They ___ been developing the app for over a year.",a:"have been",o:["have been","has been","had been","are being"],t:"Present Perfect Continuous",e:"'For over a year' + proceso.",es:"Llevan mÃ¡s de un aÃ±o desarrollando la app."},
{q:"I ___ to three different doctors this month.",a:"have been",o:["have been","went","am going","had been"],t:"Present Perfect",e:"'This month' + presente.",es:"He ido a tres mÃ©dicos este mes."},
]
]; // end QB

// â•â• STATE â•â•
let fi=0,isFlipped=false,nP=1,cPi=0,cQi=0,nQ=10,pl=[],currentMode=0;
const EDIT_PASSWORD='5eli5';
let STUDY_EDIT_MODE=false, editingNewStudy=false, quizEditorList=[], quizEditorAt=0, flashList=[], flashAt=0, flashIsNew=false;

function normalizeStudyIds(){SD.forEach((c,i)=>{c.id=i;if(!c.ex||!c.ex.length)c.ex=[{en:'Example sentence.',es:'Frase de ejemplo.'}];if(!c.illo)c.illo=defaultIllo();});}
function pastelizeSvg(svg){return (svg||'').replace(/#1a2e1a/gi,'#6f8d73').replace(/#4a6b4a/gi,'#9abc9b').replace(/fill="#6f8d73"/gi,'fill="#9abc9b"');}
function defaultIllo(){return '<svg viewBox="0 0 100 72" fill="none"><rect x="24" y="14" width="52" height="44" rx="7" stroke="#6f8d73" stroke-width="1.6" fill="none"/><path d="M34 28H66M34 38H62M34 48H56" stroke="#9abc9b" stroke-width="1.4" stroke-linecap="round"/></svg>'}
function saveAppData(){try{localStorage.setItem('englishtensesV1_SD',JSON.stringify(SD));localStorage.setItem('englishtensesV1_QB',JSON.stringify(QB));}catch(e){}}
function fixText(s){
  if(typeof s!=='string')return s;
  return s
    .replace(/ðŸ‘†/g,'').replace(/ðŸ“/g,'').replace(/ðŸ’¬/g,'').replace(/ðŸ’¡/g,'').replace(/ðŸ”„/g,'↻').replace(/ðŸ /g,'Inicio').replace(/ðŸ†/g,'')
    .replace(/Ã¡/g,'á').replace(/Ã©/g,'é').replace(/Ã­/g,'í').replace(/Ã³/g,'ó').replace(/Ãº/g,'ú').replace(/Ã±/g,'ñ')
    .replace(/Ã/g,'Á').replace(/Ã‰/g,'É').replace(/Ã/g,'Í').replace(/Ã“/g,'Ó').replace(/Ãš/g,'Ú').replace(/Ã‘/g,'Ñ')
    .replace(/Â¿/g,'¿').replace(/Â¡/g,'¡').replace(/Â·/g,'·').replace(/Â°C/g,'°C').replace(/Âº/g,'º')
    .replace(/â€”/g,'—').replace(/â€“/g,'–').replace(/â†’/g,'→').replace(/â†/g,'←').replace(/âœ“/g,'✓').replace(/âœ—/g,'✗').replace(/âœ…/g,'✓').replace(/âŒ/g,'✗')
    .replace(/Ãš/g,'Ú').replace(/Ã‰/g,'É').replace(/Ã“N/g,'ÓN').replace(/Ãº/g,'ú').replace(/Ã¼/g,'ü')
    .replace(/&nbsp;Â·&nbsp;/g,' · ');
}
function fixHtml(s){return fixText(s).replace(/ðŸ[^\s<]*/g,'').replace(/Â/g,'').replace(/Ã/g,'');}
function cleanData(x){
  if(Array.isArray(x))return x.map(cleanData);
  if(x&&typeof x==='object'){Object.keys(x).forEach(k=>x[k]=cleanData(x[k]));return x;}
  return fixText(x);
}
function cleanVisibleText(){
  document.querySelectorAll('.app-label,.app-error,.qs-sub,.sl,.el,.zm-hint,.bpl,.qs-back,.br,.btq,.bnx').forEach(el=>{el.textContent=fixText(el.textContent);});
}
function replacementOption(q,used){
  const bank=['will live','was living','had been living','will have lived','does live','has been living','would live','is going to live','did live','live'];
  for(const x of bank){if(!used.includes(x)&&x!==q.a)return x;}
  return 'will do';
}
function optionLooksAmbiguous(q,opt){
  const question=fixHtml(q.q||'').toLowerCase(), spanish=fixHtml(q.es||'').toLowerCase(), ans=(q.a||'').toLowerCase(), o=(opt||'').toLowerCase();
  if(ans==='has lived' && o==='lives' && (question.includes('five different countries')||spanish.includes('ha vivido')))return true;
  if(ans==='have lived' && o==='live' && spanish.includes('hemos vivido'))return true;
  return false;
}
function sanitizeQuizQuestion(q){
  if(!q||!q.o)return q;
  const used=[];
  const opts=[];
  q.o.forEach(opt=>{
    let value=fixText(opt);
    if(optionLooksAmbiguous(q,value))value=replacementOption(q,used.concat([q.a]));
    if(!used.includes(value)){used.push(value);opts.push(value);}
  });
  if(!opts.includes(q.a))opts.unshift(q.a);
  while(opts.length<4){const r=replacementOption(q,opts);if(!opts.includes(r))opts.push(r);else break;}
  q.o=opts.slice(0,4);
  if(!q.o.includes(q.a))q.o[0]=q.a;
  return q;
}
function sanitizeQuizBank(){QB.forEach(bank=>bank.forEach(sanitizeQuizQuestion));}
function loadAppData(){try{const sd=localStorage.getItem('englishtensesV1_SD');const qb=localStorage.getItem('englishtensesV1_QB');if(sd)SD=JSON.parse(sd);if(qb)QB=JSON.parse(qb);}catch(e){}SD=cleanData(SD);QB=cleanData(QB);sanitizeQuizBank();normalizeStudyIds();updateHomeCounts();cleanVisibleText();}
function updateHomeCounts(){const n=SD.length;['homeCardCount','homeStudyCount','homeTagCount'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=n});const spl=document.querySelector('.spl');if(spl)spl.innerHTML='Tarjeta <span id="fcn">'+(fi+1)+'</span> de '+n;}
function refreshStudyEditBar(){const bar=document.getElementById('studyEditBar');if(bar)bar.classList.toggle('show',STUDY_EDIT_MODE);}

function openPasswordDialog(kind,onOk,onNoEdit){
  const modal=document.getElementById('pwModal'), input=document.getElementById('pwInput'), err=document.getElementById('pwError'), actions=document.getElementById('pwActions');
  document.getElementById('pwTitle').textContent=kind==='study'?'Modo editar':'Contraseña';
  document.getElementById('pwText').textContent=kind==='study'?'Para entrar en modo editar escribe la contraseña:':'Escribe la contraseña para continuar:';
  input.value='';err.classList.remove('show');actions.innerHTML='';
  const cancel=document.createElement('button');cancel.textContent='Cancelar';cancel.onclick=()=>{modal.classList.remove('vis');if(kind==='study')ss('home');};
  actions.appendChild(cancel);
  if(kind==='study'){
    const no=document.createElement('button');no.textContent='Seguir sin editar';no.className='primary';no.onclick=()=>{modal.classList.remove('vis');onNoEdit&&onNoEdit();};
    actions.appendChild(no);
  }
  const ok=document.createElement('button');ok.textContent=kind==='study'?'Entrar en modo editar':'Entrar';ok.className=kind==='study'?'soft':'primary';
  ok.onclick=()=>{if(input.value===EDIT_PASSWORD){modal.classList.remove('vis');onOk&&onOk();}else{err.classList.add('show');input.focus();input.select();}};
  actions.appendChild(ok);
  input.onkeydown=e=>{if(e.key==='Enter')ok.click();if(e.key==='Escape')cancel.click();};
  modal.classList.add('vis');setTimeout(()=>input.focus(),50);
}
function requestStudyMode(){STUDY_EDIT_MODE=false;ss('study');rfc(Math.min(fi,SD.length-1));refreshStudyEditBar();}
function requestQuizEditor(){openPasswordDialog('quiz',()=>window.parent.postMessage({action:'openVerbQuizEditor'}, '*'));}
function requestDownload(){openPasswordDialog('download',()=>downloadEditedHtml());}
function requestFlashcards(){openPasswordDialog('flashcards',()=>window.parent.postMessage({action:'openVerbStudyEditor'}, '*'));}

function openStudyEditor(isNew){
  editingNewStudy=isNew;document.getElementById('studyEditError').classList.remove('show');
  const c=isNew?{tense:'',sub:'',struct:'',ex:[{en:'',es:''}],tip:'',illo:defaultIllo()}:SD[fi];
  document.getElementById('studyEditorTitle').textContent=isNew?'Añadir flashcard':'Editar flashcard';
  document.getElementById('editTense').value=c.tense||'';
  document.getElementById('editSub').value=c.sub||'';
  document.getElementById('editStruct').value=c.struct||'';
  document.getElementById('editExamples').value=(c.ex||[]).map(x=>(x.en||'')+' | '+(x.es||'')).join('\n');
  document.getElementById('editTip').value=c.tip||'';
  document.getElementById('deleteStudyBtn').style.display=isNew?'none':'';
  document.getElementById('studyEditorModal').classList.add('vis');
}
function closeStudyEditor(){document.getElementById('studyEditorModal').classList.remove('vis');}
function saveStudyEditor(){
  const tense=document.getElementById('editTense').value.trim();
  const sub=document.getElementById('editSub').value.trim();
  const struct=document.getElementById('editStruct').value.trim();
  const ex=document.getElementById('editExamples').value.split(/\n+/).map(line=>{const parts=line.split('|');return{en:(parts[0]||'').trim(),es:(parts.slice(1).join('|')||'').trim()};}).filter(x=>x.en||x.es);
  const tip=document.getElementById('editTip').value.trim();
  if(!tense||!struct||!ex.length){document.getElementById('studyEditError').classList.add('show');return;}
  const card={id:editingNewStudy?SD.length:fi,tense,sub,color:(SD[fi]&&SD[fi].color)||'#2d7a5a',struct,ex,tip,illo:(SD[fi]&&SD[fi].illo)||defaultIllo()};
  if(editingNewStudy){SD.push(card);fi=SD.length-1;}else SD[fi]=card;
  normalizeStudyIds();saveAppData();updateHomeCounts();closeStudyEditor();rfc(fi);refreshStudyEditBar();
}
function deleteStudyCard(){if(SD.length<=1)return;SD.splice(fi,1);fi=Math.max(0,fi-1);normalizeStudyIds();saveAppData();updateHomeCounts();closeStudyEditor();rfc(fi);refreshStudyEditBar();}

function buildQuizEditorList(){
  const q=(document.getElementById('quizSearch')?.value||'').toLowerCase().trim();
  const f=document.getElementById('quizFilter')?.value||'all';
  quizEditorList=[];
  if(f==='all') {
    QB.forEach((bank,mode)=>{if(bank)bank.forEach((item,index)=>{if(!item)return;const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});})});
  } else {
    const mode=parseInt(f,10);
    if(QB[mode]) QB[mode].forEach((item,index)=>{if(!item)return;const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))quizEditorList.push({mode,index,item});});
  }
  if(quizEditorAt>=quizEditorList.length)quizEditorAt=0;
}
function openQuizEditor(){
  document.getElementById('quizSearch').value='';
  quizEditorAt=0;
  buildQuizEditorList();
  loadQuizEditor();
  const m=document.getElementById('quizEditorModal');
  m.classList.add('vis');
  const b=m.querySelector('.app-box');
  if(b) setTimeout(()=>b.scrollTop=0, 50);
}
function closeQuizEditor(){document.getElementById('quizEditorModal').classList.remove('vis');}
function filterQuizEditor(){quizEditorAt=0;buildQuizEditorList();loadQuizEditor();}
function loadQuizEditor(){
  document.getElementById('quizEditError').classList.remove('show');
  if(!quizEditorList.length){document.getElementById('quizEditorPos').textContent='0/0';return;}
  const row=quizEditorList[quizEditorAt],q=row.item;
  document.getElementById('quizEditorPos').textContent=(quizEditorAt+1)+'/'+quizEditorList.length+' · '+QNAMES[row.mode];
  document.getElementById('editQText').value=q.q||'';
  document.getElementById('editQAnswer').value=q.a||'';
  document.getElementById('editQOptions').value=(q.o||[]).join('\n');
  document.getElementById('editQTense').value=q.t||'';
  document.getElementById('editQExplain').value=q.e||'';
  document.getElementById('editQSpanish').value=q.es||'';
  updateQVerifiedUI();
}
function quizEditorMove(d){if(!quizEditorList.length)return;quizEditorAt=(quizEditorAt+d+quizEditorList.length)%quizEditorList.length;loadQuizEditor();}
function toggleQuizRev(){
  const show=document.getElementById('quizRevToggle').checked;
  document.getElementById('quizRevBtn').style.display=show?'inline-block':'none';
}
function toggleQVerified(){
  if(!quizEditorList.length)return;
  const row=quizEditorList[quizEditorAt], q=row.item;
  q.v = !q.v; // Toggle verified state
  QB[row.mode][row.index].v = q.v; // Update real data
  updateQVerifiedUI();
}
function updateQVerifiedUI(){
  if(!quizEditorList.length)return;
  const q=quizEditorList[quizEditorAt].item;
  const btn=document.getElementById('quizRevBtn');
  if(q.v){
    btn.style.background='#4CAF50';
    btn.textContent='Comprobada';
  }else{
    btn.style.background='#F44336';
    btn.textContent='Por comprobar';
  }
}
function saveQuizEditor(){
  if(!quizEditorList.length)return;
  const opts=document.getElementById('editQOptions').value.split(/\n+/).map(x=>x.trim()).filter(Boolean);
  const q=document.getElementById('editQText').value.trim(),a=document.getElementById('editQAnswer').value.trim();
  if(!q||!a||opts.length<2){document.getElementById('quizEditError').classList.add('show');return;}
  if(!opts.includes(a))opts.unshift(a);
  const row=quizEditorList[quizEditorAt];
  QB[row.mode][row.index]={q,a,o:opts.slice(0,4),t:document.getElementById('editQTense').value.trim(),e:document.getElementById('editQExplain').value.trim(),es:document.getElementById('editQSpanish').value.trim()};
  saveAppData();buildQuizEditorList();loadQuizEditor();
}

function buildFlashList(){
  const q=(document.getElementById('flashSearch')?.value||'').toLowerCase().trim();
  flashList=[];
  QB.forEach((bank,mode)=>bank.forEach((item,index)=>{const text=[item.q,item.a,item.es,item.t,item.e,(item.o||[]).join(' ')].join(' ').toLowerCase();if(!q||fixText(text).includes(q))flashList.push({mode,index,item});}));
  if(flashAt>=flashList.length)flashAt=0;
}
function openFlashcardsScreen(){flashIsNew=false;flashAt=0;buildFlashList();ss('flashcardsScreen');loadFlashCard();}
function flashFilter(){flashIsNew=false;flashAt=0;buildFlashList();loadFlashCard();}
function loadFlashCard(){
  document.getElementById('flashCardBox').classList.remove('previewing');
  document.getElementById('flashError').classList.remove('show');
  if(!flashList.length&&!flashIsNew){document.getElementById('flashCount').textContent='Card 0 de 0';flashNew();return;}
  const row=flashIsNew?{mode:0,index:-1,item:{q:'',a:'',o:['','','',''],t:'',e:'',es:''}}:flashList[flashAt];
  const q=row.item;
  document.getElementById('flashCount').textContent=flashIsNew?'Nueva card':('Card '+(flashAt+1)+' de '+flashList.length+' · '+QNAMES[row.mode]);
  document.getElementById('flashMode').value=String(row.mode);
  document.getElementById('flashQuestion').value=q.q||'';
  document.getElementById('flashAnswer').value=q.a||'';
  const wrongs=(q.o||[]).filter(x=>x!==q.a);
  document.getElementById('flashWrong1').value=wrongs[0]||'';
  document.getElementById('flashWrong2').value=wrongs[1]||'';
  document.getElementById('flashWrong3').value=wrongs[2]||'';
  document.getElementById('flashTense').value=q.t||'';
  document.getElementById('flashSpanish').value=q.es||'';
  document.getElementById('flashExplain').value=q.e||'';
}
function flashMove(d){if(!flashList.length)return;flashIsNew=false;flashAt=(flashAt+d+flashList.length)%flashList.length;loadFlashCard();}
function flashNew(){flashIsNew=true;loadFlashCard();document.getElementById('flashQuestion').focus();}
function flashModeChanged(){if(flashIsNew)return;const row=flashList[flashAt];if(row)row.mode=parseInt(document.getElementById('flashMode').value,10)||0;}
function readFlashForm(){
  const wrongs=[document.getElementById('flashWrong1').value,document.getElementById('flashWrong2').value,document.getElementById('flashWrong3').value].map(x=>x.trim()).filter(Boolean);
  const q=document.getElementById('flashQuestion').value.trim(),a=document.getElementById('flashAnswer').value.trim();
  if(!q||!a||wrongs.length<3){document.getElementById('flashError').classList.add('show');return null;}
  return sanitizeQuizQuestion({q,a,o:[a].concat(wrongs.slice(0,3)),t:document.getElementById('flashTense').value.trim(),e:document.getElementById('flashExplain').value.trim(),es:document.getElementById('flashSpanish').value.trim()});
}
function flashPreview(){
  const data=readFlashForm();if(!data)return;
  const opts=shuffle(data.o.slice());
  document.getElementById('flashPreviewQuestion').innerHTML=fixHtml(data.q).replace('___','<span class="q-blank"></span>');
  document.getElementById('flashPreviewOptions').innerHTML=opts.map(o=>'<div>'+fixHtml(o)+'</div>').join('');
  document.getElementById('flashPreviewAnswer').innerHTML='<strong>Respuesta correcta:</strong> '+fixHtml(data.a)+'<br><strong>Explicación:</strong> '+fixHtml(data.e||'');
  document.getElementById('flashPreviewCard').classList.remove('flipped');
  document.getElementById('flashCardBox').classList.add('previewing');
}
function flashBackToEdit(){document.getElementById('flashCardBox').classList.remove('previewing');}
function flashSave(){
  const data=readFlashForm();if(!data)return;
  const mode=parseInt(document.getElementById('flashMode').value,10)||0;
  if(flashIsNew){QB[mode].push(data);flashIsNew=false;buildFlashList();flashAt=flashList.findIndex(x=>x.mode===mode&&x.index===QB[mode].length-1);}
  else{
    const row=flashList[flashAt];
    if(row.mode!==mode){QB[row.mode].splice(row.index,1);QB[mode].push(data);}
    else QB[row.mode][row.index]=data;
    buildFlashList();
  }
  sanitizeQuizBank();saveAppData();loadFlashCard();
}
function flashDelete(){
  if(flashIsNew||!flashList.length){flashIsNew=false;buildFlashList();loadFlashCard();return;}
  const row=flashList[flashAt];QB[row.mode].splice(row.index,1);flashAt=Math.max(0,flashAt-1);buildFlashList();saveAppData();loadFlashCard();
}
function escScriptJson(data){return JSON.stringify(data,null,0).replace(/<\//g,'<\\/');}
function downloadEditedHtml(){
  sanitizeQuizBank();
  saveAppData();
  let html='<!DOCTYPE html>\n'+document.documentElement.outerHTML;
  html=html.replace(/<title>[\s\S]*?<\/title>/,'<title>englishtensesV1</title>');
  html=html.replace(/let SD=\[[\s\S]*?\];\s*\/\/[^\n]*QUIZ BANKS/,'let SD='+escScriptJson(SD)+';\n// ══ QUIZ BANKS');
  html=html.replace(/let QB=\[[\s\S]*?\];\s*\/\/ end QB/,'let QB='+escScriptJson(QB)+';\n// end QB');
  const blob=new Blob([html],{type:'text/html;charset=utf-8'});
  const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='englishtensesV1.html';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove();},1000);
}

// â•â• UTILS â•â•
function ss(id){if(id!=='results')stopConfetti();document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));document.getElementById(id).classList.add('active');window.scrollTo(0,0);}
function shuffle(a){for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}

// â•â• CONFIRM MODAL â•â•
function showConfirm(icon,title,msg,cb){
  document.getElementById('mi').textContent=icon;
  document.getElementById('mt2').textContent=title;
  document.getElementById('mx').textContent=msg;
  document.getElementById('mf').onclick=()=>{cm();cb();};
  document.getElementById('mo').classList.add('vis');
}
function cm(){document.getElementById('mo').classList.remove('vis');}

// â•â• ZOOM â•â•
function openZoom(type,idx){
  const c=SD[idx];
  let html='';
  if(type==='struct') html=`<div class="zm-lbl">Estructura</div><div class="zm-struct">${fixHtml(c.struct)}</div>`;
  else if(type==='ex') html=`<div class="zm-lbl">Ejemplos</div><div class="zm-exs">${c.ex.map(e=>`<div class="zm-ex"><div class="zm-en">${fixHtml(e.en)}</div><div class="zm-es">→ ${fixHtml(e.es)}</div></div>`).join('')}</div>`;
  else if(type==='tip') html=`<div class="zm-lbl">Truco</div><div class="zm-tip">${fixHtml(c.tip)}</div>`;
  document.getElementById('zm-body').innerHTML=html;
  document.getElementById('zm-title').textContent=c.tense;
  const card=document.getElementById('fc-card');
  card.style.transition='none';
  card.style.transform='rotateY(180deg)';
  document.getElementById('zm').classList.add('vis');
}
function closeZoom(){
  document.getElementById('zm').classList.remove('vis');
  const card=document.getElementById('fc-card');
  card.style.transition='none';
  card.style.transform='rotateY(180deg)';
  setTimeout(()=>{card.style.transition='';card.style.transform='';card.classList.add('flipped');},50);
}

// â•â• STUDY â•â•
function goS(){STUDY_EDIT_MODE=false;ss('study');rfc(0);refreshStudyEditBar();}
function ch_study(){STUDY_EDIT_MODE=false;refreshStudyEditBar();ss('home');}
function rfc(i){
  fi=i; isFlipped=false;
  const card=document.getElementById('fc-card');
  card.classList.remove('flipped');
  card.style.transition=''; card.style.transform='';
  const c=SD[i];
  document.getElementById('fc-front').innerHTML=`
    <div class="card-num">#${i+1} · ${fixHtml(c.tense)}</div>
    <div class="card-illo">${pastelizeSvg(c.illo)}</div>
    <div class="card-tense">${fixHtml(c.tense)}</div>
    <div class="card-subtitle">${fixHtml(c.sub)}</div>
    <div class="tap-hint">Toca para ver el reverso</div>`;
  document.getElementById('fc-back').innerHTML=`
    <div class="back-hdr">
      <div class="back-tense">${fixHtml(c.tense)}</div>
      <div class="back-tap-hint">Toca cada sección para ampliar</div>
    </div>
    <div class="back-sections">
      <div class="bsec" onclick="event.stopPropagation();openZoom('struct',${i})">
        <div class="bsec-lbl">Estructura</div>
        <div class="bsec-con">${fixHtml(c.struct.split('|')[0].trim())}</div>
      </div>
      <div class="bsec" onclick="event.stopPropagation();openZoom('ex',${i})">
        <div class="bsec-lbl">Ejemplos</div>
        <div class="bsec-con">${fixHtml(c.ex[0].en)}</div>
      </div>
      <div class="bsec" onclick="event.stopPropagation();openZoom('tip',${i})">
        <div class="bsec-lbl">Truco</div>
        <div class="bsec-con">${fixHtml(c.tip.replace(/<[^>]+>/g,'').substring(0,60))}...</div>
      </div>
    </div>`;
  const pct=((i+1)/SD.length*100).toFixed(0);
  document.getElementById('fcf').style.width=pct+'%';
  updateHomeCounts();
  document.getElementById('fcn').textContent=i+1;
  document.getElementById('fcp').disabled=i===0;
  document.getElementById('fcnx').disabled=i===SD.length-1;
  document.getElementById('fcp2').disabled=i===0;
  document.getElementById('fcnx2').disabled=i===SD.length-1;
  const dn=document.getElementById('dn');
  dn.innerHTML=SD.map((_,j)=>`<button class="nd${j===i?' act':''}" onclick="rfc(${j})"></button>`).join('');
}
function flipCard(){
  if(document.getElementById('zm').classList.contains('vis'))return;
  isFlipped=!isFlipped;
  document.getElementById('fc-card').classList.toggle('flipped',isFlipped);
}
function fn(d){rfc(Math.min(Math.max(fi+d,0),SD.length-1));}
function goRandom(){rfc(Math.floor(Math.random()*SD.length));}
function doSearch(){
  const q=document.getElementById('srch').value.trim().toLowerCase();
  const list=document.getElementById('sr-list');
  if(!q){list.classList.remove('open');return;}
  const res=SD.filter(c=>c.tense.toLowerCase().includes(q)||c.sub.toLowerCase().includes(q));
  if(!res.length){list.classList.remove('open');return;}
  list.innerHTML=res.map(c=>`<div class="sri" onmousedown="rfc(${c.id});document.getElementById('srch').value='';closeSR()"><span class="srn">#${c.id+1}</span><span>${c.tense}</span></div>`).join('');
  list.classList.add('open');
}
function closeSR(){document.getElementById('sr-list').classList.remove('open');}

// â•â• QUIZ SETUP â•â•
const QNAMES=['Acciones Presentes','Acciones Pasadas','Acciones Futuras','Todo Mezclado'];
function startQSetup(mode){
  currentMode=mode;
  document.getElementById('qset-title').textContent='Quiz: '+QNAMES[mode];
  sc(1);
  ss('qsetup');
}
function sc(n){
  nP=n;
  document.querySelectorAll('.cbt').forEach((b,i)=>b.classList.toggle('sel',i===n-1));
  document.getElementById('pr1').classList.toggle('hidden',n<2);
}
function sg(){
  const names=[document.getElementById('pn0').value||'Jugador 1',document.getElementById('pn1').value||'Jugador 2'];
  nQ=parseInt(document.getElementById('qpp').value);
  pl=Array.from({length:nP},(_,i)=>({name:names[i],correct:0,wrong:0,wrongQ:[],questions:shuffle([...QB[currentMode]]).slice(0,nQ)}));
  cPi=0;cQi=0;
  setupQuizUI();ss('quiz');rq();
}
function setupQuizUI(){
  document.getElementById('ctt').style.display=nP>1?'flex':'none';
  const tts=document.getElementById('tts');
  if(nP>1){
    tts.style.display='flex';
    tts.innerHTML=pl.map((p,i)=>`<div class="tsc2"><div class="td" style="background:${i===0?'#9fbd7a':'#b8d2a8'}"></div><span class="to2" id="tso${i}">✓0</span><span class="tb2" id="tsb${i}">✗0</span></div>`).join('');
  } else {tts.style.display='none';}
}
let currentQ=null;
function rq(){
  const p=pl[cPi],q=p.questions[cQi];
  currentQ=q;
  const tot=pl.reduce((t,px)=>t+px.questions.length,0);
  const done=pl.slice(0,cPi).reduce((t,px)=>t+px.questions.length,0)+cQi;
  document.getElementById('qn').textContent=done+1;
  document.getElementById('qt').textContent=tot;
  document.getElementById('qf').style.width=((done/tot)*100)+'%';
  document.getElementById('qcat').style.display='none';
  document.getElementById('qnl').textContent=`Pregunta ${cQi+1} de ${p.questions.length}`;
  // Only the sentence with blank â€” NO translation yet
  document.getElementById('qtext').innerHTML=fixHtml(q.q).replace('___',`<span class="q-blank"></span>`);
  document.getElementById('eb').className='eb';
  document.getElementById('bnx').style.display='none';
  document.getElementById('qsen').className='qsen';
  if(nP>1){
    const ptb=document.getElementById('ptb');ptb.style.display='flex';
    ptb.style.background=cPi===0?'#e8f2fc':'#f5e8fc';
    document.getElementById('ptbd').style.background=cPi===0?'#3a7cbd':'#8a3a9a';
    document.getElementById('ptbn').textContent='Turno de '+p.name;
    document.getElementById('ccd').style.background=cPi===0?'#3a7cbd':'#8a3a9a';
    document.getElementById('ccn').textContent=p.name;
  } else {document.getElementById('ptb').style.display='none';}
  document.getElementById('sso').textContent='✓ '+p.correct;
  document.getElementById('ssb').textContent='✗ '+p.wrong;
  const opts=shuffle([...q.o]);
  document.getElementById('og').innerHTML=opts.map(o=>`<button class="opt" onclick="checkAns(this,'${o.replace(/'/g,"\\'")}')">${fixHtml(o)}</button>`).join('');
}
function checkAns(btn,chosen){
  const q=currentQ;const correct=q.a;
  const p=pl[cPi];
  document.querySelectorAll('.opt').forEach(b=>b.disabled=true);
  // Now show translation in the sentence box
  document.getElementById('qtext').innerHTML=
    `<div style="font-family:Georgia,serif;font-size:.92rem;color:#6f8d73;font-style:italic;margin-bottom:.7rem;padding-bottom:.6rem;border-bottom:1px solid #d2e8ce">→ ${fixHtml(q.es||'')}</div>`+
    fixHtml(q.q).replace('___',`<span class="q-blank" style="color:${chosen===correct?'var(--green)':'#b77d78'}">${fixHtml(chosen)}</span>`);
  if(chosen===correct){
    btn.classList.add('correct');document.getElementById('qsen').classList.add('cs');p.correct++;
    document.getElementById('eb').innerHTML=`<div class="el">✓ ¡Correcto! · <em>${fixHtml(q.t)}</em></div><div class="et">${fixHtml(q.e)}</div>`;
    document.getElementById('eb').className='eb vis';
  } else {
    btn.classList.add('wrong');document.getElementById('qsen').classList.add('ws');p.wrong++;p.wrongQ.push(q);
    document.querySelectorAll('.opt').forEach(b=>{if(b.textContent===correct)b.classList.add('correct');});
    document.getElementById('eb').innerHTML=`<div class="el">✗ Respuesta correcta · <em>${fixHtml(q.t)}</em></div><div class="et"><strong>${fixHtml(correct)}</strong> — ${fixHtml(q.e)}</div>`;
    document.getElementById('eb').className='eb vis we';
  }
  document.getElementById('sso').textContent='✓ '+p.correct;
  document.getElementById('ssb').textContent='✗ '+p.wrong;
  if(nP>1){document.getElementById('tso'+cPi).textContent='✓'+p.correct;document.getElementById('tsb'+cPi).textContent='✗'+p.wrong;}
  document.getElementById('bnx').style.display='block';
}
function nt(){
  const p=pl[cPi];
  cQi++;
  if(cQi>=p.questions.length){
    cPi++;
    if(cPi>=nP){showResults();return;}
    cQi=0;
  }
  rq();
}
function cr(){showConfirm('↻','¿Reiniciar quiz?','Se perderá el progreso actual.',()=>{cPi=0;cQi=0;pl.forEach(p=>{p.correct=0;p.wrong=0;p.wrongQ=[];p.questions=shuffle([...QB[currentMode]]).slice(0,nQ);});setupQuizUI();ss('quiz');rq();});}
function ch(){showConfirm('Inicio','¿Salir del quiz?','Se perderá el progreso actual.',()=>ss('home'));}

// â•â• RESULTS â•â•
let confettiTimer=null;
function stopConfetti(){if(confettiTimer){clearInterval(confettiTimer);confettiTimer=null;}document.querySelectorAll('.confetti-piece').forEach(x=>x.remove());}
function startConfettiLoop(){
  stopConfetti();
  const colors=['#9fbd7a','#b8d2a8','#f2dc7d','#d8edcf','#86ad7c'];
  function drop(){
    for(let i=0;i<12;i++){
      const c=document.createElement('div');
      c.className='confetti-piece';
      c.style.left=Math.random()*100+'vw';
      c.style.background=colors[Math.floor(Math.random()*colors.length)];
      c.style.animationDuration=(3+Math.random()*2.5)+'s';
      c.style.animationDelay=(Math.random()*.8)+'s';
      document.body.appendChild(c);
      setTimeout(()=>c.remove(),6500);
    }
  }
  drop();
  confettiTimer=setInterval(drop,700);
}
function cupSvg(){
  return `<svg class="perfect-cup" viewBox="0 0 120 120" aria-hidden="true">
    <path class="cup-soft" d="M38 22c14-2 30-2 44 0-1 26-7 42-22 48C45 64 39 48 38 22Z"/>
    <path class="cup-line" d="M38 25c-9-1-17 3-17 12 0 10 8 17 20 18M82 25c9-1 17 3 17 12 0 10-8 17-20 18"/>
    <path class="cup-line" d="M60 70v17M43 96c10-3 24-3 34 0M49 87h22"/>
    <path class="cup-line" d="M45 31c9-1 20-1 30 .1"/>
  </svg>`;
}
function showResults(){
  stopConfetti();
  ss('results');
  const sorted=[...pl].sort((a,b)=>b.correct-a.correct);
  const totalWrong=pl.reduce((t,p)=>t+(p.wrongQ?p.wrongQ.length:0),0);
  document.getElementById('bre').style.display=totalWrong>0?'block':'none';
  let emoji,title,sub;
  if(nP===1){
    const p=pl[0];
    const total=p.correct+p.wrong;
    const pct=total>0?Math.round(p.correct/total*100):0;
    if(pct===100){
      emoji='';title='¡Congratulations!';sub='¡Todo correcto! ¡Perfecto!';
      startConfettiLoop();
    } else if(pct>=80){
      emoji='';title='¡Excelente!';sub=`${p.correct} de ${total} correctas (${pct}%)`;
    } else if(pct>=50){
      emoji='';title='¡Bien hecho!';sub=`${p.correct} de ${total} correctas (${pct}%)`;
    } else {
      emoji='';title='¡Sigue practicando!';sub=`${p.correct} de ${total} correctas (${pct}%)`;
    }
    const scoreHTML=pct===100
      ?cupSvg()+`<div class="perfect-msg-box">Has hecho todas las preguntas bien. ¡Brillante!</div>`
      :`<div class="sr2" style="background:conic-gradient(#86ad7c ${pct*3.6}deg,#e9f5e7 0)"><div class="sri2"><div class="srn">${pct}%</div><div class="srl">${p.correct}/${total}</div></div></div>`;
    let wrongHTML='';
    if(totalWrong>0){
      wrongHTML=`<div style="background:#fff5f5;border:1.5px solid #f0b8b8;border-radius:14px;padding:.9rem 1.1rem;margin:.8rem 0;text-align:left"><div style="font-size:.6rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#b77d78;margin-bottom:.5rem">Fallaste ${totalWrong} pregunta${totalWrong>1?'s':''}</div>${p.wrongQ.map(q=>`<div style="padding:.4rem 0;border-bottom:1px solid #f5e0e0;font-size:.84rem;color:#4d6b53"><em style="color:#6f8d73">${fixHtml(q.es||'')}</em><br>→ <strong>${fixHtml(q.a)}</strong> <span style="font-size:.75rem;color:#6f8d73">(${fixHtml(q.t)})</span></div>`).join('')}</div>`;
    }
    document.getElementById('rb').innerHTML=scoreHTML+wrongHTML;
  } else {
    emoji=sorted[0].correct===sorted[1].correct?'':'';
    title=sorted[0].correct===sorted[1].correct?'¡Empate!':'¡'+sorted[0].name+' gana!';
    sub='Resultados del partido';
    const mx=Math.max(...pl.map(p=>p.correct))||1;
    document.getElementById('rb').innerHTML=`<div class="pod">${sorted.map((p,i)=>{const tot=p.correct+p.wrong;const h=Math.max(20,Math.round(p.correct/mx*100));const col=i===0?'#86ad7c':'#b8d2a8';return`<div class="pc"><div class="pb" style="height:${h}px;background:${col}">${i+1}</div><div class="pn">${p.name}</div><div class="pp">${p.correct}/${tot}</div></div>`}).join('')}</div><div class="prc">${sorted.map((p,i)=>{const tot=p.correct+p.wrong;const pct=tot>0?Math.round(p.correct/tot*100):0;return`<div class="prc2 r${i+1}"><div class="prk r${i+1}">${i+1}</div><div class="prd" style="background:${i===0?'#9fbd7a':'#b8d2a8'}"></div><div class="pri"><div class="prn">${p.name}</div><div class="prb"><div class="prbf" style="width:${pct}%;background:${i===0?'#86ad7c':'#b8d2a8'}"></div></div><div class="prs"><span class="prs2 ok">✓${p.correct}</span><span class="prs2 bad">✗${p.wrong}</span><span class="prs2 pct">${pct}%</span></div></div></div>`}).join('')}</div>`;
  }
  document.getElementById('re').textContent=emoji;
  document.getElementById('rtit').textContent=title;
  document.getElementById('rs2').textContent=sub;
}
function rg(){
  stopConfetti();
  pl.forEach(p=>{p.correct=0;p.wrong=0;p.wrongQ=[];p.questions=shuffle([...QB[currentMode]]).slice(0,nQ);});
  cPi=0;cQi=0;setupQuizUI();ss('quiz');rq();
}
function svr(){
  stopConfetti();
  // Collect all wrong questions from all players
  const allWrong=pl.flatMap(p=>p.wrongQ||[]);
  if(!allWrong.length)return;
  // Reset players keeping names but replacing questions with only the wrong ones
  pl.forEach(p=>{
    p.correct=0;p.wrong=0;
    p.questions=shuffle([...p.wrongQ]);
    p.wrongQ=[];
  });
  // Set nQ to the number of wrong questions per player (min 1)
  nQ=Math.max(...pl.map(p=>p.questions.length));
  // Trim each player's questions to their own wrong count
  pl.forEach(p=>{if(p.questions.length===0)p.questions=[allWrong[0]];});
  cPi=0;cQi=0;
  setupQuizUI();ss('quiz');rq();
}

window.onload=()=>{loadAppData();rfc(0);refreshStudyEditBar();};
</script>
    <div style="margin-top:20px; padding:10px; border-top:1px solid var(--border); display:flex; gap:10px; justify-content:center;">
    <button onclick="requestFlashcards()" style="background:none; border:none; color:var(--mid); font-family:inherit; cursor:pointer; font-size:16px;">✏️ Edición de Flashcards estudio</button>
    <button onclick="requestQuizEditor()" style="background:none; border:none; color:var(--mid); font-family:inherit; cursor:pointer; font-size:16px;">✏️ Edición de Flashcards quiz</button>
    </div>
    
    <script>
    function requestFlashcards(){openPasswordDialog('flashcards',()=>window.parent.postMessage({action:'openVerbStudyEditor'}, '*'));}
    function requestQuizEditor(){openPasswordDialog('quiz',()=>window.parent.postMessage({action:'openVerbQuizEditor'}, '*'));}
    </script>
    </body></html>

