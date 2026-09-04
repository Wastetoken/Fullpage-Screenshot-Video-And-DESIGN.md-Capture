var it=Object.defineProperty;var nt=(M,x,t)=>x in M?it(M,x,{enumerable:!0,configurable:!0,writable:!0,value:t}):M[x]=t;var _=(M,x,t)=>nt(M,typeof x!="symbol"?x+"":x,t);import{g as Z}from"./userBehavior-bB2m7De_.js";const st=`
:root {
    --rs-primary-500: #8B5CF6; /* 主色 - 紫色 */
    --rs-primary-600: #7C3AED; /* 主色深色 - 紫色 */
    --rs-primary-100: #F5F3FF; /* 主色浅色背景 - 紫色 */
    --rs-gray-900: #111827;    /* 深灰，近黑 */
    --rs-gray-700: #374151;    /* 中深灰 */
    --rs-gray-500: #6b7280;    /* 中灰 */
    --rs-gray-300: #d1d5db;    /* 浅灰 */
    --rs-gray-100: #f3f4f6;    /* 非常浅的灰 */
    --rs-white: #ffffff;
    --rs-blue-500: #3b82f6;    /* 辅助蓝色 */
    --rs-red-500: #ef4444;     /* 辅助红色 */
    --rs-green-500: #22c55e;   /* 辅助绿色 */
  }
  
  #cocoshot-screenshot-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3); /* 半透明黑色遮罩 */
    z-index: 2147483640; /* 确保在顶层，但低于选区和工具栏 */
    cursor: crosshair;
  }
  
  #cocoshot-screenshot-selection {
    position: fixed;
    border: 2px solid var(--rs-primary-500);
    background-color: rgba(139, 92, 246, 0.1); /* 主色调的浅透明背景 */
    box-shadow: 0 0 0 1px var(--rs-white), 0 0 10px rgba(0,0,0,0.3); /* 白色细边框 + 阴影 */
    z-index: 2147483641;
    pointer-events: auto;
    box-sizing: border-box;
  }
  
  #cocoshot-screenshot-info {
    position: absolute;
    left: 0;
    bottom: -28px; /* 调整位置 */
    background-color: var(--rs-gray-900);
    color: var(--rs-white);
    padding: 4px 8px;
    border-radius: 4px; /* 圆角 */
    font-size: 12px; /* 字体稍大 */
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace;
    white-space: nowrap;
    z-index: 2147483643;
    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
    pointer-events: none;
    opacity: 0.9;
  }
  
  .cocoshot-screenshot-shortcut-info {
    /* 这个可以考虑移除或整合到新的通知系统 */
    display: none; 
  }
  
  .cocoshot-screenshot-selection-saved {
    position: absolute;
    border: 2px dashed var(--rs-blue-500); /* 使用辅助蓝色 */
    background-color: rgba(59, 130, 246, 0.05); /* 辅助蓝色的浅透明背景 */
    z-index: 2147483639; /* 在遮罩之上，但在当前选区之下 */
    pointer-events: none;
    border-radius: 2px;
  }
  
  #cocoshot-screenshot-toolbar {
    position: fixed;
    top: 15px; /* 改为顶部定位 */
    bottom: auto; /* 移除底部定位 */
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(255, 255, 255, 0.85); /* 轻微透明背景，配合毛玻璃 */
    border-radius: 10px; /* 稍大圆角 */
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0,0,0,0.07); /* 更现代的阴影 */
    padding: 8px; /* 调整内边距 */
    display: flex;
    flex-direction: row; 
    gap: 6px; /* 行间距 */
    z-index: 2147483642;
    max-width: calc(100% - 30px); /* 调整最大宽度 */
    backdrop-filter: blur(10px); /* 毛玻璃效果 */
    -webkit-backdrop-filter: blur(10px); /* Safari 兼容 */
    border: 1px solid rgba(200, 200, 200, 0.3); /* 细边框，配合毛玻璃 */
    height: auto; /* 确保高度自适应 */
  }

  .cocoshot-screenshot-notification {
    position: fixed;
    top: 80px; /* 使用固定值，确保在工具栏下方 */
    left: 50%;
    transform: translateX(-50%) translateY(20px); /* 初始位置偏下，用于动画 */
    background-color: var(--rs-gray-900); 
    color: var(--rs-white);
    padding: 10px 16px;
    border-radius: 6px; 
    z-index: 2147483644; 
    font-size: 13px;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    transition: opacity 0.3s ease, transform 0.3s ease;
    max-width: 80%;
    text-align: center;
    opacity: 0; 
    pointer-events: none; 
  }

  .cocoshot-screenshot-notification.show {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
    pointer-events: auto;
  }
  
  .cocoshot-screenshot-toolbar-row {
    display: flex;
    align-items: center;
    padding: 6px;
    gap: 8px;
    background: rgba(255, 255, 255, 0.95);
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(8px);
  }
  
  .cocoshot-screenshot-button-group {
    display: flex;
    align-items: center;
    gap: 6px;
    position: relative;
  }
  
  .cocoshot-screenshot-button-group.primary-group {
    gap: 12px;
  }
  
  .cocoshot-screenshot-button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 12px;
    border: none;
    border-radius: 4px;
    font-size: 13px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease;
    background: #f5f5f5;
    color: #333;
    height: 32px;
  }
  
  .cocoshot-screenshot-button.primary {
    background: #2196f3;
    color: white;
  }
  
  .cocoshot-screenshot-button.primary:hover {
    background: #1976d2;
  }
  
  .cocoshot-screenshot-button.secondary {
    background: #e0e0e0;
    color: #333;
  }
  
  .cocoshot-screenshot-button.secondary:hover {
    background: #d0d0d0;
  }
  
  .cocoshot-screenshot-button.more {
    padding: 6px;
    background: transparent;
    min-width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .cocoshot-screenshot-button.more svg {
    width: 20px;
    height: 20px;
    margin: 0;
    color: #666;
  }
  
  .cocoshot-screenshot-button.more:hover {
    background: #f0f0f0;
  }
  
  .cocoshot-screenshot-button.more:hover svg {
    color: #333;
  }
  
  .cocoshot-screenshot-button.more.active {
    background: #e0e0e0;
  }
  
  .cocoshot-screenshot-button.more.active svg {
    color: #333;
  }
  
  .cocoshot-screenshot-button.feature {
    background: #f5f5f5;
    color: #333;
    padding: 8px 12px;
  }
  
  .cocoshot-screenshot-button.feature:hover {
    background: #e0e0e0;
  }
  
  .cocoshot-screenshot-button.toggle {
    background: #f5f5f5;
    color: #666;
    padding: 6px 12px;
    border: 1px solid #ddd;
  }
  
  .cocoshot-screenshot-button.toggle.active {
    background: #e3f2fd;
    color: #1976d2;
    border-color: #2196f3;
  }
  
  .cocoshot-screenshot-button.large {
    padding: 10px 20px;
    font-size: 15px;
  }
  
  .cocoshot-screenshot-divider {
    height: 1px;
    background: #e0e0e0;
    margin: 4px 0;
  }
  
  .cocoshot-screenshot-divider.vertical {
    margin: 0 4px;
  }
  
  .cocoshot-screenshot-select {
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: white;
    font-size: 13px;
    color: #333;
    cursor: pointer;
    width: 100%;
  }
  
  .cocoshot-screenshot-select:hover {
    border-color: #2196f3;
  }
  
  .cocoshot-screenshot-select:focus {
    outline: none;
    border-color: #2196f3;
    box-shadow: 0 0 0 2px rgba(33, 150, 243, 0.1);
  }
  
  .cocoshot-screenshot-toolbar-row.basic-row {
    padding: 12px;
  }
  
  .cocoshot-screenshot-toolbar-row.primary-row {
    padding: 10px;
  }
  
  .cocoshot-screenshot-toolbar-row.config-row {
    padding: 8px;
    background: rgba(245, 245, 245, 0.95);
  }
  
  .cocoshot-screenshot-button svg {
    width: 16px;
    height: 16px;
    margin-right: 6px;
  }
  
  .cocoshot-screenshot-button.large svg {
    width: 20px;
    height: 20px;
  }
  
  .cocoshot-screenshot-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .cocoshot-screenshot-button:active {
    transform: translateY(0);
    box-shadow: none;
  }
  
  .cocoshot-screenshot-button-icon {
    width: 18px; /* 图标尺寸 */
    height: 18px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: currentColor; 
  }
  
  select.cocoshot-screenshot-button {
    padding-right: 28px; /* 为下拉箭头留出空间 */
    appearance: none;
    -webkit-appearance: none; /* Safari and Chrome */
    -moz-appearance: none; /* Firefox */
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%236B7280'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.23 8.29a.75.75 0 01.02-1.06z' clip-rule='evenodd' /%3E%3C/svg%3E");
    background-repeat: no-repeat;
    background-position: right 6px center; /* 调整箭头位置 */
    background-size: 14px 14px; /* 图标大小 */
  }
  
  .cocoshot-screenshot-selection-info {
    /* 这个可以考虑移除或整合到 #cocoshot-screenshot-info */
    display: none;
  }
  
  .cocoshot-screenshot-element-highlight {
    position: absolute;
    border: 1px solid var(--rs-blue-500);
    background-color: rgba(59, 130, 246, 0.1);
    pointer-events: none;
    z-index: 2147483638; 
    opacity: 0; 
    border-radius: 2px;
  }
  
  .cocoshot-screenshot-resize-handle {
    position: absolute;
    width: 10px; 
    height: 10px;
    background-color: var(--rs-white);
    border: 2px solid var(--rs-primary-500);
    border-radius: 50%; 
    z-index: 2147483642; 
    box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  }
  
  .cocoshot-screenshot-resize-handle.top-left { top: -6px; left: -6px; cursor: nwse-resize; }
  .cocoshot-screenshot-resize-handle.top-right { top: -6px; right: -6px; cursor: nesw-resize; }
  .cocoshot-screenshot-resize-handle.bottom-left { bottom: -6px; left: -6px; cursor: nesw-resize; }
  .cocoshot-screenshot-resize-handle.bottom-right { bottom: -6px; right: -6px; cursor: nwse-resize; }
  .cocoshot-screenshot-resize-handle.top { top: -6px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
  .cocoshot-screenshot-resize-handle.right { top: 50%; right: -6px; transform: translateY(-50%); cursor: ew-resize; }
  .cocoshot-screenshot-resize-handle.bottom { bottom: -6px; left: 50%; transform: translateX(-50%); cursor: ns-resize; }
  .cocoshot-screenshot-resize-handle.left { top: 50%; left: -6px; transform: translateY(-50%); cursor: ew-resize; }
  
  .cocoshot-screenshot-move-hint {
    display: none;
  }

  /* 徽章样式 (示例) */
  .cocoshot-screenshot-button .badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color: var(--rs-red-500);
    color: white;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    font-size: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    box-shadow: 0 0 0 2px var(--rs-white);
  }

  .cocoshot-screenshot-dropdown {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 4px;
    background: white;
    border-radius: 6px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.15);
    min-width: 160px;
    z-index: 1000;
    padding: 4px;
  }

  .dropdown-item {
    display: block;
    width: 100%;
    text-align: left;
    padding: 8px 12px;
    border-radius: 4px;
    margin: 2px 0;
  }

  .dropdown-item:hover {
    background: #f5f5f5;
  }

  .dropdown-item svg {
    width: 14px;
    height: 14px;
    margin-right: 8px;
  }
`,y={saveAllButton:'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="none" viewBox="0 0 48 48"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24V4h40v20"/><path fill="#8e2428" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0"/><path fill="#8e2428" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12"/></svg>',saveButton:'<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" fill="none" viewBox="0 0 48 48"><path fill="#fff" fill-opacity=".01" d="M0 0h48v48H0z"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 24V4h40v20"/><path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M10 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 12C20.39 33.266 15.805 40.68 14.243 42.243a6 6 0 0 1-8.486 0"/><path fill="#2F88FF" fill-rule="evenodd" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 44a6 6 0 1 0 0-12 6 6 0 0 0 0 12" clip-rule="evenodd"/><path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M42.243 42.243a6 6 0 0 1-8.486 0C32.195 40.68 27.61 33.266 12 12"/></svg>',copyButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M11 1H3c-.5 0-1 .5-1 1v10h2V3h7V1zm2 3H6c-.5 0-1 .5-1 1v10c0 .5.5 1 1 1h7c.5 0 1-.5 1-1V5c0-.5-.5-1-1-1zm-1 10H7V6h5v8z"/></svg>',removeBackgroundButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C4.1 1 1 4.1 1 8s3.1 7 7 7 7-3.1 7-7-3.1-7-7-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"/></svg>',dialogButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8 1C4.1 1 1 3.6 1 7c0 1.7.8 3.3 2 4.4V15l4-2c.3 0 .7.1 1 .1 3.9 0 7-2.6 7-6s-3.1-6-7-6zm2 9H6V8h4v2zm0-4H6V4h4v2z"/></svg>',qrButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M3 3h6v6H3V3m2 2v2h2V5H5m8-2h6v6h-6V3m2 2v2h2V5h-2M3 13h6v6H3v-6m2 2v2h2v-2H5m13-2h3v2h-3v-2m0 4h3v2h-3v-2m-9-4h3v6h-3v-6m2 2v2h2v-2h-2m4-2h3v6h-3v-6"/></svg>',keepButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M8.5 2v5.5H14v1H8.5V14h-1V8.5H2v-1h5.5V2z"/></svg>',lockSizeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill="currentColor" d="M12 7V5c0-2.2-1.8-4-4-4S4 2.8 4 5v2c-.6 0-1 .4-1 1v6c0 .6.4 1 1 1h8c.6 0 1-.4 1-1V8c0-.6-.4-1-1-1zM6 5c0-1.1.9-2 2-2s2 .9 2 2v2H6V5zm4 7H8.5V9.5h-1V12H6V9h4v3z"/></svg>'};function rt(M,x){const t=[...M],e={"zh-CN":["16:9（视频/屏幕）","4:3（传统屏幕）","1:1（正方形/Instagram）","9:16（手机竖屏/故事）","3:4（小红书/iPad）","2:1（小红书/Twitter横图）","1:2（Pinterest）","4:5（Instagram竖图）","3:2（SNS封面）","21:9（超宽屏）"],"zh-TW":["16:9（影片／螢幕）","4:3（傳統螢幕）","1:1（正方形／Instagram）","9:16（直式／TikTok）","3:4（Pinterest）","2:1（Twitter 橫向）","1:2（Pinterest）","4:5（Instagram 直式）","3:2（Facebook 封面）","21:9（超寬螢幕）"],en:["16:9 (Video/Screen)","4:3 (Traditional Screen)","1:1 (Square/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter Landscape)","1:2 (Pinterest)","4:5 (Instagram Vertical)","3:2 (Facebook Cover)","21:9 (Ultra-Wide)"],es:["16:9 (Vídeo/Pantalla)","4:3 (Pantalla Tradicional)","1:1 (Cuadrado/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter Horizontal)","1:2 (Pinterest)","4:5 (Instagram Vertical)","3:2 (Portada de Facebook)","21:9 (Ultraancho)"],"es-419":["16:9 (Video/Pantalla)","4:3 (Pantalla Tradicional)","1:1 (Cuadrado/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter Horizontal)","1:2 (Pinterest)","4:5 (Instagram Vertical)","3:2 (Portada de Facebook)","21:9 (Ultraancho)"],de:["16:9 (Video/Bildschirm)","4:3 (Klassischer Bildschirm)","1:1 (Quadrat/Instagram)","9:16 (Hochformat/TikTok)","3:4 (Pinterest)","2:1 (Twitter Querformat)","1:2 (Pinterest)","4:5 (Instagram Hochformat)","3:2 (Facebook Titelbild)","21:9 (Ultrawide)"],fr:["16:9 (Vidéo/Écran)","4:3 (Écran classique)","1:1 (Carré/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter paysage)","1:2 (Pinterest)","4:5 (Instagram vertical)","3:2 (Couverture Facebook)","21:9 (Ultra-large)"],no:["16:9 (Video/Skjerm)","4:3 (Klassisk skjerm)","1:1 (Kvadrat/Instagram)","9:16 (Vertikal/TikTok)","3:4 (Pinterest)","2:1 (Twitter liggende)","1:2 (Pinterest)","4:5 (Instagram vertikal)","3:2 (Facebook omslagsbilde)","21:9 (Ultrabred)"],it:["16:9 (Video/Schermo)","4:3 (Schermo classico)","1:1 (Quadrato/Instagram)","9:16 (Verticale/TikTok)","3:4 (Pinterest)","2:1 (Twitter orizzontale)","1:2 (Pinterest)","4:5 (Instagram verticale)","3:2 (Copertina Facebook)","21:9 (Ultra-wide)"],"pt-BR":["16:9 (Vídeo/Tela)","4:3 (Tela clássica)","1:1 (Quadrado/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter horizontal)","1:2 (Pinterest)","4:5 (Instagram vertical)","3:2 (Capa do Facebook)","21:9 (Ultra-amplo)"],"pt-PT":["16:9 (Vídeo/Ecrã)","4:3 (Ecrã clássico)","1:1 (Quadrado/Instagram)","9:16 (Vertical/TikTok)","3:4 (Pinterest)","2:1 (Twitter horizontal)","1:2 (Pinterest)","4:5 (Instagram vertical)","3:2 (Capa do Facebook)","21:9 (Ultra-amplo)"],ru:["16:9 (Видео/Экран)","4:3 (Классический экран)","1:1 (Квадрат/Instagram)","9:16 (Вертикальное/TikTok)","3:4 (Pinterest)","2:1 (Twitter горизонтальный)","1:2 (Pinterest)","4:5 (Instagram вертикальный)","3:2 (Обложка Facebook)","21:9 (Ультраширокий)"],hi:["16:9 (वीडियो/स्क्रीन)","4:3 (पारंपरिक स्क्रीन)","1:1 (वर्ग/Instagram)","9:16 (वर्टिकल/TikTok)","3:4 (Pinterest)","2:1 (Twitter क्षैतिज)","1:2 (Pinterest)","4:5 (Instagram वर्टिकल)","3:2 (Facebook कवर)","21:9 (अल्ट्रा-वाइड)"],ar:["16:9 (فيديو/شاشة)","4:3 (شاشة تقليدية)","1:1 (مربع/Instagram)","9:16 (عمودي/TikTok)","3:4 (Pinterest)","2:1 (Twitter أفقي)","1:2 (Pinterest)","4:5 (Instagram عمودي)","3:2 (غلاف Facebook)","21:9 (فائق العرض)"],ja:["16:9（ビデオ／スクリーン）","4:3（クラシック画面）","1:1（正方形／Instagram）","9:16（縦向き／TikTok）","3:4（Pinterest）","2:1（Twitter 横向き）","1:2（Pinterest）","4:5（Instagram 縦向き）","3:2（Facebook カバー）","21:9（ウルトラワイド）"],ko:["16:9 (비디오/화면)","4:3 (클래식 화면)","1:1 (정사각형/Instagram)","9:16 (세로/TikTok)","3:4 (Pinterest)","2:1 (Twitter 가로)","1:2 (Pinterest)","4:5 (Instagram 세로)","3:2 (Facebook 커버)","21:9 (울트라 와이드)"]},i=e[x]||e.en;for(let o=0;o<t.length&&o<i.length;o++)t[o].text=i[o];return{options:t,lang:x}}var q=window.ratioScreenshotInstance||null;if(window._ratioScreenshotLoaded){if(q)try{q.cleanupExistingElements()}catch{}}else{window._ratioScreenshotLoaded=!0;var l={getToolbarText:function(x,t){return chrome.i18n.getMessage(x,t)},getCurrentLanguage:function(){return chrome.i18n.getUILanguage()},getNotificationText:function(x,t){return chrome.i18n.getMessage(x,t)}};class M{constructor(t=!1){_(this,"handleScroll",t=>{if(!this.isSelecting||!this.selection)return;const e=window.scrollX,i=window.scrollY;this.scrollX=e,this.scrollY=i,this.updateSelectionSize()});this.isPro=t,this.isInspecting=!1,this.highlightElement=null,this.currentElement=null,this.ratio="free",this.saveFormat="png",this.imageQuality=1,this.isActive=!1,this.isSelecting=!1,this.isContinuousMode=!1,this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.scrollX=0,this.scrollY=0,this.isLockSize=!1,this.lockedWidth=0,this.lockedHeight=0,this.overlay=null,this.selection=null,this.infoPanel=null,this.toolbar=null,this.selections=[],this.handleMouseDown=this.handleMouseDown.bind(this),this.handleMouseMove=this.handleMouseMove.bind(this),this.handleMouseUp=this.handleMouseUp.bind(this),this.handleKeyDown=this.handleKeyDown.bind(this),this.handleScroll=this.handleScroll.bind(this),this.initMessageListener(),this.injectStyles()}logger(t,e="green"){}initMessageListener(){chrome.runtime.onMessage.addListener((t,e,i)=>{try{if(t.action==="initiateScreenshot"){this.cleanupExistingElements();try{this.start(t.options||{}),i({success:!0})}catch(o){i({success:!1,error:o.message}),this.end()}}else t.action==="screenshotConfirm"?this.selection&&this.isActive?(this.captureAndSave(),i({success:!0})):i({success:!1,error:"Screenshot mode not active"}):t.action==="screenshotCancel"&&(this.isActive?(this.isInspecting&&this.disableInspection(),this.end(),i({success:!0})):i({success:!1,error:"Screenshot mode not active"}));return!0}catch(o){return i({success:!1,error:o.message}),!0}})}injectStyles(){const t=document.createElement("style");t.textContent=st,document.head.appendChild(t)}start(t){if(chrome.runtime.sendMessage({data:"setExtensionIcon",icon:!1}),this.isActive&&this.cleanupExistingElements(),this.ratio=t.ratio||"free",this.saveFormat=t.saveFormat||"png",this.imageQuality=t.imageQuality||1,t.isInspectMode!==void 0&&(this.isInspectMode=!!t.isInspectMode),t.isInspectMode){this.enableInspection();return}this.isActive=!0,this.createOverlay(),this.addEventListeners(),this.createToolbar()}cleanupExistingElements(){["cocoshot-screenshot-overlay","cocoshot-screenshot-selection","cocoshot-screenshot-toolbar","cocoshot-screenshot-notification"].forEach(e=>{const i=document.getElementById(e);i&&i.remove()}),document.querySelectorAll(".cocoshot-screenshot-element-highlight").forEach(e=>e.remove()),document.querySelectorAll(".cocoshot-screenshot-resize-handle").forEach(e=>e.remove()),document.querySelectorAll(".cocoshot-screenshot-selection-saved").forEach(e=>e.remove())}autoCreateSelection(t,e){}createOverlay(){this.overlay=document.createElement("div"),this.overlay.id="cocoshot-screenshot-overlay",document.body.appendChild(this.overlay)}createSelection(t,e){this.isContinuousMode&&this.selection?this.saveCurrentSelectionAsPreview():this.isContinuousMode||this.clearCurrentSelection(),this.selection=document.createElement("div"),this.selection.id="cocoshot-screenshot-selection",this.selection.style.left=`${t}px`,this.selection.style.top=`${e}px`,this.selection.style.width="10px",this.selection.style.height="10px",this.infoPanel=document.createElement("div"),this.infoPanel.id="cocoshot-screenshot-info",this.selection.appendChild(this.infoPanel),document.body.appendChild(this.selection),this.isSelecting=!0}saveCurrentSelectionAsPreview(){if(!this.selection)return;const t=document.createElement("div");t.className="cocoshot-screenshot-selection-saved",this.selection.getBoundingClientRect();const e=window.pageXOffset||document.documentElement.scrollLeft,i=window.pageYOffset||document.documentElement.scrollTop;t.style.left=`${this.startX}px`,t.style.top=`${this.startY}px`,t.style.width=`${this.endX-this.startX}px`,t.style.height=`${this.endY-this.startY}px`,document.body.appendChild(t),this.selections.push({element:t,rect:{left:this.startX,top:this.startY,width:this.endX-this.startX,height:this.endY-this.startY,ratio:this.ratio,scrollX:e,scrollY:i}});const o=this.isInspectMode;this.clearCurrentSelection(),this.toolbar&&(this.toolbar.remove(),this.toolbar=null),o&&(this.isInspectMode=!0,this.enableInspection())}clearCurrentSelection(){this.selection&&(this.selection.remove(),this.selection=null),this.toolbar&&(this.toolbar.remove(),this.toolbar=null),document.querySelectorAll(".cocoshot-screenshot-resize-handle").forEach(t=>{t.remove()}),this.isSelecting=!1}createToolbar(){this.toolbar&&(this.toolbar.remove(),this.toolbar=null),this.toolbar=document.createElement("div"),this.toolbar.id="cocoshot-screenshot-toolbar",this.toolbar.style.cssText=`
        position: fixed;
        cursor: move;
        user-select: none;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
      `;const t=document.createElement("button");t.className="cocoshot-screenshot-close-button",t.innerHTML="×",t.title="Esc",t.style.cssText=`
        width: 24px;
        height: 24px;
        border: none;
        background: transparent;
        color: #666;
        font-size: 20px;
        line-height: 1;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
      `,t.addEventListener("mouseover",()=>{t.style.backgroundColor="rgba(0, 0, 0, 0.1)"}),t.addEventListener("mouseout",()=>{t.style.backgroundColor="transparent"}),t.addEventListener("click",()=>this.end());const e=this.createMainButtonRow();this.toolbar.appendChild(e),this.toolbar.appendChild(t),document.body.appendChild(this.toolbar);let i=!1,o,s,r,a;const n=d=>{if(d.target===t||d.target.closest("button"))return;const g=this.toolbar.getBoundingClientRect();r=d.clientX-g.left,a=d.clientY-g.top,i=!0,this.toolbar&&(this.toolbar.style.opacity="0.8",this.toolbar.style.transition="none")},c=()=>{r=o,a=s,i=!1,this.toolbar&&(this.toolbar.style.opacity="1",this.toolbar.style.transition="opacity 0.2s")},h=d=>{if(i&&this.toolbar){d.preventDefault(),o=d.clientX-r,s=d.clientY-a;const g=this.toolbar.getBoundingClientRect(),m=window.innerWidth-g.width,b=window.innerHeight-g.height;o=Math.min(Math.max(0,o),m),s=Math.min(Math.max(0,s),b),this.toolbar.style.left=`${o}px`,this.toolbar.style.top=`${s}px`,this.toolbar.style.transform="none"}};this.toolbar.addEventListener("mousedown",n),document.addEventListener("mousemove",h),document.addEventListener("mouseup",c),this.cleanupToolbarDrag=()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",c)}}createMainButtonRow(){const t=document.createElement("div");t.className="cocoshot-screenshot-toolbar-row main-row";const e=document.createElement("div");e.className="cocoshot-screenshot-button-group main-group";const i=document.createElement("button");if(i.className="cocoshot-screenshot-button primary",this.addButtonContent(i,l.getToolbarText("saveArea"),y.saveButton),i.title=l.getToolbarText("saveAreaTooltip")||"Save current area",i.title+="(Enter)",i.addEventListener("click",()=>this.captureAndSave()),e.appendChild(i),this.isContinuousMode&&this.selections.length>0){const r=document.createElement("button");r.className="cocoshot-screenshot-button primary",this.addButtonContent(r,l.getToolbarText("saveAllAreas"),y.saveAllButton),r.title=l.getToolbarText("saveAllAreasTooltip")||"Save all selected areas",r.addEventListener("click",()=>this.captureAndSaveAll()),e.appendChild(r)}const o=document.createElement("button");o.className="cocoshot-screenshot-button secondary",this.addButtonContent(o,l.getToolbarText("copyToClipboard"),y.copyButton),o.title=l.getToolbarText("copyToClipboardTooltip")||"Copy screenshot to clipboard",o.title+="(Ctrl+c)",o.addEventListener("click",()=>this.copyToClipboard()),e.appendChild(o);const s=this._createKeepAndContinueButton();if(s&&(s.className="cocoshot-screenshot-button secondary",e.appendChild(s)),this.isPro){const r=document.createElement("button");r.className="cocoshot-screenshot-button more",r.innerHTML='<svg viewBox="0 0 24 24" width="20" height="20"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/></svg>',r.title=l.getToolbarText("moreOptions")||"More options";const a=document.createElement("div");a.className="cocoshot-screenshot-dropdown",a.style.display="none";const n=this._createRatioSelect();n.className="cocoshot-screenshot-select dropdown-item",a.appendChild(n),a.appendChild(this._createDivider());const c=this._createRemoveBackgroundButton();c.className="cocoshot-screenshot-button feature dropdown-item",a.appendChild(c);const h=this._createAIDialogButton();h.className="cocoshot-screenshot-button feature dropdown-item",a.appendChild(h);const d=this._createQRCodeButton();if(d.className="cocoshot-screenshot-button feature dropdown-item",a.appendChild(d),this.isContinuousMode){a.appendChild(this._createDivider());const g=this._createLockSizeButton();g&&(g.className="cocoshot-screenshot-button toggle dropdown-item",a.appendChild(g))}r.addEventListener("click",g=>{g.stopPropagation();const m=a.style.display==="block";a.style.display=m?"none":"block",r.classList.toggle("active",!m)}),document.addEventListener("click",g=>{!a.contains(g.target)&&g.target!==r&&(a.style.display="none",r.classList.remove("active"))}),e.appendChild(r),e.appendChild(a)}return t.appendChild(e),t}createBasicButtonRow(){const t=document.createElement("div");t.className="cocoshot-screenshot-toolbar-row basic-row";const e=document.createElement("div");e.className="cocoshot-screenshot-button-group primary-group";const i=document.createElement("button");if(i.className="cocoshot-screenshot-button primary large",this.addButtonContent(i,l.getToolbarText("saveArea"),y.saveButton),i.title=l.getToolbarText("saveAreaTooltip")||"Save current area",i.addEventListener("click",()=>this.captureAndSave()),e.appendChild(i),this.isContinuousMode&&this.selections.length>0){const r=document.createElement("button");r.className="cocoshot-screenshot-button primary large",this.addButtonContent(r,l.getToolbarText("saveAllAreas"),y.saveAllButton),r.title=l.getToolbarText("saveAllAreasTooltip")||"Save all selected areas",r.addEventListener("click",()=>this.captureAndSaveAll()),e.appendChild(r)}const o=document.createElement("button");o.className="cocoshot-screenshot-button",this.addButtonContent(o,l.getToolbarText("copyToClipboard"),y.copyButton),o.title=l.getToolbarText("copyToClipboardTooltip")||"Copy screenshot to clipboard",o.addEventListener("click",()=>this.copyToClipboard()),e.appendChild(o);const s=this._createKeepAndContinueButton();return s&&e.appendChild(s),t.appendChild(e),t}createPrimaryButtonRow(){const t=document.createElement("div");t.className="cocoshot-screenshot-toolbar-row";const e=document.createElement("div");e.className="cocoshot-screenshot-button-group",t.appendChild(e);const i=document.createElement("div");i.className="cocoshot-screenshot-divider",t.appendChild(i);const o=document.createElement("div");o.className="cocoshot-screenshot-button-group";const s=document.createElement("button");s.className="cocoshot-screenshot-button",this.addButtonContent(s,l.getToolbarText("removeBackground"),y.removeBackgroundButton),s.title=l.getToolbarText("removeBgTooltip")||"Remove background and copy to clipboard",s.addEventListener("click",()=>this.removeBackground()),o.appendChild(s);const r=document.createElement("button");r.className="cocoshot-screenshot-button",this.addButtonContent(r,l.getToolbarText("aiDialog"),y.dialogButton),r.title=this.getAIDialogTitle(),r.addEventListener("click",()=>this.openAIDialog()),o.appendChild(r);const a=document.createElement("button");return a.className="cocoshot-screenshot-button",this.addButtonContent(a,l.getToolbarText("qrDecode"),y.qrButton),a.title=this.getQRDecodeTitle(),a.addEventListener("click",()=>this.decodeQRCode()),o.appendChild(a),t.appendChild(o),t}createConfigRow(){const t=document.createElement("div");t.className="cocoshot-screenshot-toolbar-row";const e=document.createElement("div");if(e.className="cocoshot-screenshot-button-group",this.isContinuousMode){const i=document.createElement("div");i.className="cocoshot-screenshot-divider",t.appendChild(i);const o=document.createElement("button");o.className=this.isLockSize?"cocoshot-screenshot-button primary":"cocoshot-screenshot-button",this.addButtonContent(o,this.isLockSize?l.getToolbarText("lockSizeActive"):l.getToolbarText("lockSize"),y.lockSizeButton),o.title=this.getLockSizeTitle(),o.addEventListener("click",()=>{this.isLockSize=!this.isLockSize,o.className=this.isLockSize?"cocoshot-screenshot-button primary":"cocoshot-screenshot-button",this.addButtonContent(o,this.isLockSize?l.getToolbarText("lockSizeActive"):l.getToolbarText("lockSize"),y.lockSizeButton),this.isLockSize?(this.lockedWidth=Math.abs(this.endX-this.startX),this.lockedHeight=Math.abs(this.endY-this.startY)):(this.lockedWidth=0,this.lockedHeight=0)}),e.appendChild(o)}return t.appendChild(e),t}_createKeepAndContinueButton(){const t=document.createElement("button");return t.className="cocoshot-screenshot-button",this.addButtonContent(t,l.getToolbarText("keepAndContinue"),y.keepButton),t.title=l.getToolbarText("keepAndContinueTooltip")||"Keep current selection and continue",t.addEventListener("click",()=>{this.isContinuousMode=!0;const e=Math.abs(this.endX-this.startX),i=Math.abs(this.endY-this.startY);this.saveCurrentSelectionAsPreview(),this.toolbar&&(this.toolbar.style.display="none"),this.isLockSize&&this.lockedWidth===0&&this.lockedHeight===0&&e>0&&i>0&&(this.lockedWidth=e,this.lockedHeight=i)}),t}addButtonContent(t,e,i){if(t.innerHTML="",i){const o=document.createElement("span");o.className="cocoshot-screenshot-button-icon",o.innerHTML=i,t.appendChild(o)}if(e){const o=document.createElement("span");o.textContent=e,t.appendChild(o)}}getLocalizedRatioOptions(t){const e=l.getCurrentLanguage();return rt(t,e)}updateSelectionSizeDisplay(){if(this.toolbar&&this.toolbar.querySelector("h3")){const t=this.toolbar.querySelector("h3"),e=Math.abs(this.endX-this.startX),i=Math.abs(this.endY-this.startY),o=l.getCurrentLanguage();t.textContent=`${Math.round(e)} × ${Math.round(i)} ${o==="zh"||o==="es"?"px":o==="ar"?"dp":"px"} (${this.ratio})`}}calculateEstimatedFileSize(){let t="";if(this.selection){const e=Math.abs(this.endX-this.startX),i=Math.abs(this.endY-this.startY),o=e*i;let s;this.saveFormat==="png"?s=.2*o/1024*this.imageQuality:s=.08*o/1024*this.imageQuality,s>1024?t=l.formatFileSizeEstimate((s/1024).toFixed(1),"MB"):t=l.formatFileSizeEstimate(Math.round(s),"KB")}return t}getAIDialogTitle(){return chrome.i18n.getMessage("aiDialogTitle")||"Have an intelligent conversation about the screenshot content"}getQRDecodeTitle(){return chrome.i18n.getMessage("qrDecodeTitle")||"Decode QR code in the screenshot"}getLockSizeTitle(){return chrome.i18n.getMessage("lockSizeTitle")||"Lock current size for continuous capture"}getLocalizedMoveHint(){return chrome.i18n.getMessage("moveHint")||"Drag selection area (Space + drag)"}addEventListeners(){this.overlay.addEventListener("mousedown",this.handleMouseDown),this.boundHandleKeyDown=this.boundHandleKeyDown||this.handleKeyDown.bind(this),document.addEventListener("keydown",this.boundHandleKeyDown)}removeEventListeners(){this.overlay&&this.overlay.removeEventListener("mousedown",this.handleMouseDown),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.boundHandleKeyDown&&document.removeEventListener("keydown",this.boundHandleKeyDown)}handleMouseDown(t){t.preventDefault(),t.stopPropagation(),this.toolbar&&(this.toolbar.remove(),this.toolbar=null),this.isSelecting=!0;const e=t.pageX,i=t.pageY;this.scrollX=window.scrollX,this.scrollY=window.scrollY,this.startX=e,this.startY=i,this.createSelection(t.clientX,t.clientY),document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mouseup",this.handleMouseUp),window.addEventListener("scroll",this.handleScroll)}handleMouseMove(t){if(!this.isSelecting)return;t.preventDefault(),t.stopPropagation();const e=t.pageX,i=t.pageY;if(this.isLockSize&&this.lockedWidth>0&&this.lockedHeight>0){const o=e>=this.startX?1:-1,s=i>=this.startY?1:-1;this.endX=this.startX+o*this.lockedWidth,this.endY=this.startY+s*this.lockedHeight}else{let o=e,s=i;if(this.ratio!=="free"){this.logger("Applying ratio constraint");try{const[r,a]=this.ratio.split(":").map(Number);if(r>0&&a>0){const c=(o-this.startX)*(a/r);s=this.startY+c}}catch{}}this.endX=o,this.endY=s}this.updateSelectionSize()}handleMouseUp(t){if(this.isSelecting){if(t&&(t.preventDefault(),t.stopPropagation()),this.isSelecting=!1,window.removeEventListener("scroll",this.handleScroll),this.selection){const e=this.selection.getBoundingClientRect();if(e.width<10||e.height<10){this.clearCurrentSelection();return}}this.addResizeHandles(),this.createToolbar(),this.toolbar&&(this.toolbar.style.display="flex"),document.removeEventListener("mousemove",this.handleMouseMove),document.removeEventListener("mouseup",this.handleMouseUp),this.makeSelectionMovable()}}makeSelectionMovable(){if(!this.selection)return;const t=Math.abs(this.endX-this.startX),e=Math.abs(this.endY-this.startY);this.selection.style.cursor="move";let i=!1,o=0,s=0,r=0,a=0;const n=d=>{if(d.stopPropagation(),d.button!==0)return;i=!0,o=d.clientX,s=d.clientY;const g=this.selection.getBoundingClientRect();r=g.left,a=g.top,document.addEventListener("mousemove",c),document.addEventListener("mouseup",h),d.preventDefault()},c=d=>{if(!i)return;const g=d.clientX-o,m=d.clientY-s,b=r+g,E=a+m;this.selection.style.left=`${b}px`,this.selection.style.top=`${E}px`,this.startX=b+window.scrollX,this.startY=E+window.scrollY,this.endX=this.startX+t,this.endY=this.startY+e,d.preventDefault()},h=d=>{if(i=!1,document.removeEventListener("mousemove",c),document.removeEventListener("mouseup",h),this.infoPanel){let g=`${Math.round(t)}×${Math.round(e)}`;this.ratio&&this.ratio!=="free"&&(g+=` (${this.ratio})`),this.infoPanel.textContent=g}};this.selection.addEventListener("mousedown",n),this.selectionMoveHandler=n,this.addResizeHandles()}addResizeHandles(){if(!this.selection)return;["top-left","top-right","bottom-left","bottom-right","top","right","bottom","left"].forEach(e=>{const i=document.createElement("div");i.className=`cocoshot-screenshot-resize-handle ${e}`,this.selection.appendChild(i),i.addEventListener("mousedown",o=>{o.stopPropagation();const s=o.clientX,r=o.clientY;Math.abs(this.endX-this.startX),Math.abs(this.endY-this.startY);const a=this.startX,n=this.startY,c=this.endX,h=this.endY,d=m=>{m.preventDefault();const b=m.clientX-s,E=m.clientY-r;if(e.indexOf("left")>-1?this.startX=a+b:e.indexOf("right")>-1&&(this.endX=c+b),e.indexOf("top")>-1?this.startY=n+E:e.indexOf("bottom")>-1&&(this.endY=h+E),this.ratio!=="free")try{const[k,I]=this.ratio.split(":").map(Number);if(k>0&&I>0)if(e.indexOf("top")>-1||e.indexOf("bottom")>-1){const L=Math.abs(this.endY-this.startY)*(k/I);e.indexOf("left")>-1?this.startX=this.endX-L*Math.sign(this.endX-a):this.endX=this.startX+L*Math.sign(c-this.startX)}else{const L=Math.abs(this.endX-this.startX)*(I/k);e.indexOf("top")>-1?this.startY=this.endY-L*Math.sign(this.endY-n):this.endY=this.startY+L*Math.sign(h-this.startY)}}catch{}this.updateSelectionSize()},g=()=>{document.removeEventListener("mousemove",d),document.removeEventListener("mouseup",g);const m=Math.abs(this.endX-this.startX),b=Math.abs(this.endY-this.startY);(m<10||b<10)&&(this.startX=a,this.startY=n,this.endX=c,this.endY=h,this.updateSelectionSize())};document.addEventListener("mousemove",d),document.addEventListener("mouseup",g)})})}handleKeyDown(t){if(t.key==="Escape"){this.end(),t.preventDefault(),t.stopPropagation();return}if(t.ctrlKey||t.shiftKey||t.altKey,t.ctrlKey,t.shiftKey,t.altKey,t.key==="Escape"||t.key==="Enter"||(t.key==="ArrowUp"||t.key==="ArrowDown"||t.key==="ArrowLeft"||t.key==="ArrowRight"?t.key:t.key.length===1?t.key.toUpperCase():t.key),this.isInspecting){if(t.key==="Enter"&&this.currentElement){this.handleInspectorClick({target:this.currentElement,preventDefault:()=>{},stopPropagation:()=>{}}),t.preventDefault(),t.stopPropagation();return}return}if(!this.selection)return;if(t.key==="Enter"){this.captureAndSave(),t.preventDefault(),t.stopPropagation();return}if(t.key==="c"&&(t.ctrlKey||t.metaKey)){t.preventDefault(),t.stopPropagation(),this.copyToClipboard();return}const e=t.shiftKey?10:1;let i=!1;switch(t.key){case"ArrowUp":this.startY-=e,this.endY-=e,i=!0;break;case"ArrowDown":this.startY+=e,this.endY+=e,i=!0;break;case"ArrowLeft":this.startX-=e,this.endX-=e,i=!0;break;case"ArrowRight":this.startX+=e,this.endX+=e,i=!0;break}i&&(t.preventDefault(),t.stopPropagation(),this.updateSelectionSize(this.startX,this.startY,this.endX,this.endY))}updateSelectionSize(t,e,i,o){if(!this.selection)return;const s=t!==void 0?t:this.startX,r=e!==void 0?e:this.startY,a=i!==void 0?i:this.endX,n=o!==void 0?o:this.endY,c=Math.min(s,a),h=Math.min(r,n),d=Math.abs(a-s),g=Math.abs(n-r),m=c-window.scrollX,b=h-window.scrollY;if(this.selection.style.left=`${m}px`,this.selection.style.top=`${b}px`,this.selection.style.width=`${d}px`,this.selection.style.height=`${g}px`,this.infoPanel){let E=`${Math.round(d)}×${Math.round(g)}`;this.ratio&&this.ratio!=="free"&&(E+=` (${this.ratio})`),this.infoPanel.textContent=E;const k=b,I=window.innerHeight-(b+g),H=m;if(this.infoPanel.style.top="",this.infoPanel.style.bottom="",this.infoPanel.style.left="",this.infoPanel.style.right="",I>=30)this.infoPanel.style.bottom="-25px";else if(k>=30)this.infoPanel.style.top="-25px";else{this.infoPanel.style.bottom="5px",this.infoPanel.style.right="5px",this.infoPanel.style.backgroundColor="rgba(24, 24, 27, 0.85)";return}H+d/2>=this.infoPanel.offsetWidth/2?(this.infoPanel.style.left="0",d<this.infoPanel.offsetWidth&&(this.infoPanel.style.left=`-${(this.infoPanel.offsetWidth-d)/2}px`)):this.infoPanel.style.right="0"}}captureAndSave(){if(!this.selection){this.showNotification(l.getNotificationText("selectionBoxNotFound"));return}const t={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)};this.captureArea(t)}captureArea(t){const e=this.showNotification(l.getNotificationText("processingScreenshot")),i=window.scrollX,o=window.scrollY,s=window.innerWidth,r=window.innerHeight,a={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)},n=a.left>=i&&a.top>=o&&a.left+a.width<=i+s&&a.top+a.height<=o+r;this.hideUIElementsForCapture(),setTimeout(()=>{this.toolbar&&(this.toolbar.style.display="none",this.toolbar.style.visibility="hidden",this.toolbar.style.opacity="0"),n?chrome.runtime.sendMessage({action:"captureScreen",debug:{scrollX:i,scrollY:o,viewportWidth:s,viewportHeight:r}},c=>{this.processScreenshotResponse(c,a,e)}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:a,debug:{scrollX:i,scrollY:o,viewportWidth:s,viewportHeight:r}},c=>{this.processScreenshotResponse(c,a,e,!0)})},100)}processScreenshotResponse(t,e,i,o=!1){if(this.restoreUIElementsAfterCapture(),i&&i.remove(),t&&t.success&&t.dataUrl){const s=new Image;s.onload=()=>{const r=o?t.viewportInfo:{scrollX:window.scrollX,scrollY:window.scrollY,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,dpr:window.devicePixelRatio||1},a={left:e.left-r.scrollX,top:e.top-r.scrollY,width:e.width,height:e.height},n=s.width/r.viewportWidth,c=s.height/r.viewportHeight,h={left:Math.round(a.left*n),top:Math.round(a.top*c),width:Math.round(a.width*n),height:Math.round(a.height*c)};h.left>=0&&h.top>=0&&h.left+h.width<=s.width&&h.top+h.height<=s.height?this.processAndSaveImage(s,h):this.processPartialVisibleImage(s,h),this.showNotification(l.getNotificationText("screenshotSaved"),2e3),this.isContinuousMode?this.clearCurrentSelection():this.end()},s.onerror=r=>{this.showNotification(l.getNotificationText("screenshotLoadFailed"),3e3),this.end()},s.src=t.dataUrl}else this.showNotification(l.getNotificationText("screenshotLoadFailed"),3e3),this.end()}captureAndSaveAll(){if(!this.selection)return;const t=this.showNotification(l.getNotificationText("processingAllAreas")),e={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY),ratio:this.ratio,scrollX:window.pageXOffset||document.documentElement.scrollLeft,scrollY:window.pageYOffset||document.documentElement.scrollTop},i=[...this.selections.map(o=>o.rect),e];this.hideUIElementsForCapture(),this.processAreasSequentially(i,0,t)}processAreasSequentially(t,e,i){if(e>=t.length){this.restoreUIElementsAfterCapture(),i.remove(),this.showNotification(l.getNotificationText("allAreasSaved",t.length),3e3),this.end();return}const o=t[e];i.textContent=`Processing area ${e+1}/${t.length}...`;const s=this.ratio;o.ratio&&(this.ratio=o.ratio);const r=o.scrollX||window.scrollX,a=o.scrollY||window.scrollY,n=window.innerWidth,c=window.innerHeight,h=o.left>=r&&o.top>=a&&o.left+o.width<=r+n&&o.top+o.height<=a+c;this.toolbar&&(this.toolbar.style.display="none",this.toolbar.style.visibility="hidden",this.toolbar.style.opacity="0",this.toolbar.style.position="absolute",this.toolbar.style.left="-9999px"),setTimeout(()=>{h?chrome.runtime.sendMessage({action:"captureScreen",debug:{scrollX:r,scrollY:a,viewportWidth:n,viewportHeight:c}},d=>{d&&d.success&&d.dataUrl?this.processAreaScreenshot(d,o,e,t,i,!1,s):(this.ratio=s,this.processAreasSequentially(t,e+1,i))}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:o,debug:{scrollX:r,scrollY:a,viewportWidth:n,viewportHeight:c}},d=>{d&&d.success&&d.dataUrl?this.processAreaScreenshot(d,o,e,t,i,!0,s):(this.ratio=s,this.processAreasSequentially(t,e+1,i))})},50)}processAreaScreenshot(t,e,i,o,s,r=!1,a){const n=new Image;n.onload=()=>{const c=r?t.viewportInfo:{scrollX:window.scrollX,scrollY:window.scrollY,viewportWidth:window.innerWidth,viewportHeight:window.innerHeight,dpr:window.devicePixelRatio||1};let h;r?h={left:e.left-t.viewportInfo.scrollX,top:e.top-t.viewportInfo.scrollY,width:e.width,height:e.height}:h={left:e.left-c.scrollX,top:e.top-c.scrollY,width:e.width,height:e.height};const d=n.width/c.viewportWidth,g=n.height/c.viewportHeight,m={left:Math.round(h.left*d),top:Math.round(h.top*g),width:Math.round(h.width*d),height:Math.round(h.height*g)},b=m.left>=0&&m.top>=0&&m.left+m.width<=n.width&&m.top+m.height<=n.height;try{b||(m.left=Math.max(0,Math.min(m.left,n.width-1)),m.top=Math.max(0,Math.min(m.top,n.height-1)),m.width=Math.min(m.width,n.width-m.left),m.height=Math.min(m.height,n.height-m.top)),this.processAndSaveImage(n,m,i,o)}catch{}a&&(this.ratio=a),setTimeout(()=>{this.processAreasSequentially(o,i+1,s)},300)},n.onerror=c=>{a&&(this.ratio=a),this.processAreasSequentially(o,i+1,s)},n.src=t.dataUrl}processPartialVisibleImage(t,e){try{const i=document.createElement("canvas");i.width=e.width,i.height=e.height;const o=i.getContext("2d",{alpha:!1});if(!o)return;o.fillStyle="#FFFFFF",o.fillRect(0,0,i.width,i.height);const s={left:Math.max(0,e.left),top:Math.max(0,e.top),right:Math.min(t.width,e.left+e.width),bottom:Math.min(t.height,e.top+e.height)},r=s.right-s.left,a=s.bottom-s.top;if(r<10||a<10){this.showNotification(l.getNotificationText("areaNotVisible"),3e3);return}const n=s.left-e.left,c=s.top-e.top;o.drawImage(t,s.left,s.top,r,a,n,c,r,a);const h=i.toDataURL(this.saveFormat==="jpg"?"image/jpeg":"image/png",this.imageQuality);this.saveImageToFile(h,this.saveFormat),this.showNotification(l.getNotificationText("partiallyVisible"),3e3),this.isContinuousMode?this.clearCurrentSelection():this.end()}catch(i){this.showNotification(l.getNotificationText("processingError",i.message),3e3),this.end()}}async processAndSaveImage(t,e,i=0,o=[]){const s=performance.now(),r=document.createElement("canvas");r.width=e.width,r.height=e.height,r.getContext("2d").drawImage(t,e.left,e.top,e.width,e.height,0,0,e.width,e.height);let n=1,c,h=this.saveFormat||"png";h==="jpg"||h==="jpeg"?(c="image/jpeg",n=.95):c="image/png";try{const d=r.toDataURL(c,n),g=Math.round(performance.now()-s),m=await Z(),b=m?m.isNewUser:!0;b&&this.showNotification("Processing screenshot...",2e3);const E=o.length<1||i===o.length-1;return chrome.runtime.sendMessage({action:"saveScreenshot",dataUrl:d,pageTitle:document.title,pageUrl:window.location.href,activeTab:E,isNewUser:b},k=>{if(k&&k.success)this.showNotification("Screenshot saved",3e3);else{const I=k?k.error:"Unknown error";this.showNotification(`Screenshot failed: ${I}`,5e3)}}),!0}catch(d){return this.showNotification(`Screenshot failed: ${d.message||"Unknown error"}`,5e3),!1}}saveImageToFile(t,e,i=0){const o=this.selections.length>0?`-${i+1}`:"",s=Z(),r=s?s.isNewUser:!0;r&&this.showNotification("Processing image...",2e3),chrome.runtime.sendMessage({action:"saveScreenshot",dataUrl:t,format:e,suffix:o,isNewUser:r},a=>{a&&a.success||this.showNotification(l.getNotificationText("saveFailed",(a==null?void 0:a.error)||"Unknown error"),3e3)})}startNewSelection(){if(this.isLockSize&&this.lockedWidth>0&&this.lockedHeight>0){const t=document.createElement("div");t.className="cocoshot-screenshot-notification",t.textContent=`Locked size: ${this.lockedWidth} × ${this.lockedHeight}, click to confirm selection position`,document.body.appendChild(t),setTimeout(()=>{t.style.opacity="0",t.style.transition="opacity 0.5s",setTimeout(()=>t.remove(),500)},3e3)}}findNearestElementEdges(t,e){const i={horizontal:[],vertical:[]},s=this.getElementsNearPoint(t,e,50);for(const r of s){const a=r.getBoundingClientRect(),n={left:a.left+window.scrollX,top:a.top+window.scrollY,right:a.right+window.scrollX,bottom:a.bottom+window.scrollY,width:a.width,height:a.height};if(n.width<10||n.height<10)continue;i.horizontal.push({x:n.left,top:n.top,bottom:n.bottom,element:r,type:"left"}),i.horizontal.push({x:n.right,top:n.top,bottom:n.bottom,element:r,type:"right"});const c=n.left+n.width/2;i.horizontal.push({x:c,top:n.top,bottom:n.bottom,element:r,type:"centerX"}),i.vertical.push({y:n.top,left:n.left,right:n.right,element:r,type:"top"}),i.vertical.push({y:n.bottom,left:n.left,right:n.right,element:r,type:"bottom"});const h=n.top+n.height/2;i.vertical.push({y:h,left:n.left,right:n.right,element:r,type:"centerY"})}i.horizontal.sort((r,a)=>Math.abs(t-r.x)-Math.abs(t-a.x)),i.vertical.sort((r,a)=>Math.abs(e-r.y)-Math.abs(e-a.y))}getElementsNearPoint(t,e,i){const o=[],s=t,r=e,a=document.querySelectorAll("*");for(const n of a){if(n.id==="cocoshot-screenshot-overlay"||n.id==="cocoshot-screenshot-selection"||n.id==="cocoshot-screenshot-toolbar"||n.classList.contains("cocoshot-screenshot-selection-saved")||n.classList.contains("cocoshot-screenshot-element-highlight"))continue;const c=window.getComputedStyle(n);if(c.display==="none"||c.visibility==="hidden"||c.opacity==="0")continue;const h=n.getBoundingClientRect(),d={left:h.left+window.scrollX,top:h.top+window.scrollY,right:h.right+window.scrollX,bottom:h.bottom+window.scrollY,width:h.width,height:h.height};d.left<=s+i&&d.right>=s-i&&d.top<=r+i&&d.bottom>=r-i&&o.push(n)}return o}end(){this.isInspecting&&this.disableInspection(),this.removeEventListeners(),this.cleanupToolbarDrag&&this.cleanupToolbarDrag(),this.clearCurrentSelection(),this.selections.forEach(t=>{t.element&&t.element.remove()}),this.isActive=!1,this.isSelecting=!1,this.startX=0,this.startY=0,this.endX=0,this.endY=0,this.isLockSize=!1,this.lockedWidth=0,this.lockedHeight=0;try{this.safeRemove("cocoshot-screenshot-overlay"),this.safeRemove("cocoshot-screenshot-selection"),this.safeRemove("cocoshot-screenshot-toolbar"),this.safeRemove("cocoshot-screenshot-inspect-cancel"),this.safeRemoveAll(".cocoshot-screenshot-element-highlight"),this.safeRemoveAll(".cocoshot-screenshot-resize-handle"),this.safeRemoveAll(".cocoshot-screenshot-selection-saved"),this.safeRemoveAll(".cocoshot-screenshot-notification"),this.overlay=null,this.selection=null,this.infoPanel=null,this.toolbar=null,this.selections=[]}catch{this.cleanupExistingElements()}chrome.runtime.sendMessage({data:"setExtensionIcon",icon:!0})}safeRemove(t){try{const e=document.getElementById(t);e&&e.remove()}catch{}}safeRemoveAll(t){try{document.querySelectorAll(t).forEach(e=>{e.remove()})}catch{}}adjustSelectionToRatio(){if(!(!this.selection||this.ratio==="free"))try{const[t,e]=this.ratio.split(":").map(Number);if(t>0&&e>0){const i=(this.startX+this.endX)/2,o=(this.startY+this.endY)/2,s=Math.abs(this.endX-this.startX),r=Math.abs(this.endY-this.startY);let a,n;s/r>t/e?(a=s,n=s*(e/t)):(n=r,a=r*(t/e));const c=a/2,h=n/2,d=this.endX>=this.startX?1:-1,g=this.endY>=this.startY?1:-1;this.startX=i-c*d,this.startY=o-h*g,this.endX=i+c*d,this.endY=o+h*g,this.updateSelectionSize(),this.infoPanel&&(this.infoPanel.textContent=`${Math.round(a)} × ${Math.round(n)} (${this.ratio})`)}}catch{}}hideUIElementsForCapture(){if(this.originalOverlayVisibility=this.overlay?this.overlay.style.visibility:null,this.originalSelectionVisibility=this.selection?this.selection.style.visibility:null,this.originalToolbarVisibility=this.toolbar?this.toolbar.style.visibility:null,this.originalEventBlockerVisibility=this.eventBlocker?this.eventBlocker.style.visibility:null,this.overlay&&(this.overlay.style.visibility="hidden",this.overlay.style.display="none",this.overlay.style.opacity="0"),this.eventBlocker&&(this.eventBlocker.style.visibility="hidden",this.eventBlocker.style.display="none",this.eventBlocker.style.opacity="0"),this.toolbar&&(this.originalToolbarDisplay=this.toolbar.style.display,this.originalToolbarOpacity=this.toolbar.style.opacity,this.originalToolbarPosition=this.toolbar.style.position,this.toolbar.style.visibility="hidden",this.toolbar.style.display="none",this.toolbar.style.opacity="0",this.toolbar.style.position="absolute",this.toolbar.style.left="-9999px",this.toolbar.style.top="-9999px"),this.selection){this.originalSelectionStyles={border:this.selection.style.border,outline:this.selection.style.outline,boxShadow:this.selection.style.boxShadow,backgroundColor:this.selection.style.backgroundColor,opacity:this.selection.style.opacity,pointerEvents:this.selection.style.pointerEvents,display:this.selection.style.display},this.selection.style.border="none",this.selection.style.outline="none",this.selection.style.boxShadow="none",this.selection.style.backgroundColor="transparent",this.selection.style.opacity="0",this.selection.style.pointerEvents="none",this.selection.style.display="block";const o=document.createElement("style");o.id="cocoshot-screenshot-temp-style",o.textContent=`
          #${this.selection.id}, 
          #${this.selection.id}::before, 
          #${this.selection.id}::after,
          #${this.selection.id} * {
            display: block !important;
            opacity: 0 !important;
            visibility: hidden !important;
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            background-color: transparent !important;
            pointer-events: none !important;
          }
          
          .cocoshot-screenshot-selection-saved,
          .cocoshot-screenshot-selection-saved::before,
          .cocoshot-screenshot-selection-saved::after {
            border: none !important;
            outline: none !important;
            box-shadow: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          
          .cocoshot-screenshot-resize-handle,
          .cocoshot-screenshot-element-highlight {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
          
          #cocoshot-screenshot-toolbar,
          #cocoshot-screenshot-toolbar * {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
            position: absolute !important;
            left: -9999px !important;
            top: -9999px !important;
            pointer-events: none !important;
            z-index: -9999 !important;
          }
          
          .cocoshot-screenshot-button,
          .cocoshot-screenshot-button-group,
          .cocoshot-screenshot-toolbar-row {
            display: none !important;
            opacity: 0 !important;
            visibility: hidden !important;
          }
        `,document.head.appendChild(o),this.tempStyleElement=o}const t=document.querySelectorAll(".cocoshot-screenshot-resize-handle");this.hiddenResizeHandles=[],t.forEach(o=>{this.hiddenResizeHandles.push({element:o,originalVisibility:o.style.visibility,originalOpacity:o.style.opacity,originalDisplay:o.style.display}),o.style.visibility="hidden",o.style.opacity="0",o.style.display="none"});const e=document.querySelectorAll(".cocoshot-screenshot-notification");this.hiddenNotifications=[],e.forEach(o=>{this.hiddenNotifications.push({element:o,originalVisibility:o.style.visibility,originalOpacity:o.style.opacity,originalDisplay:o.style.display}),o.style.visibility="hidden",o.style.opacity="0",o.style.display="none"}),this.selections.forEach(o=>{o.element&&(o.originalStyles={visibility:o.element.style.visibility,opacity:o.element.style.opacity,border:o.element.style.border,outline:o.element.style.outline,boxShadow:o.element.style.boxShadow,backgroundColor:o.element.style.backgroundColor},o.element.style.visibility="hidden",o.element.style.opacity="0",o.element.style.border="none",o.element.style.outline="none",o.element.style.boxShadow="none",o.element.style.backgroundColor="transparent")}),document.querySelectorAll(".cocoshot-screenshot-element-highlight").forEach(o=>{o.style.display="none",o.style.opacity="0",o.style.visibility="hidden"})}restoreUIElementsAfterCapture(){this.overlay&&this.originalOverlayVisibility!==null&&(this.overlay.style.visibility=this.originalOverlayVisibility,this.overlay.style.display="",this.overlay.style.opacity=""),this.eventBlocker&&this.originalEventBlockerVisibility!==null&&(this.eventBlocker.style.visibility=this.originalEventBlockerVisibility,this.eventBlocker.style.display="",this.eventBlocker.style.opacity=""),this.toolbar&&(this.toolbar.style.visibility=this.originalToolbarVisibility||"",this.toolbar.style.display=this.originalToolbarDisplay||"",this.toolbar.style.opacity=this.originalToolbarOpacity||"",this.toolbar.style.position=this.originalToolbarPosition||"",this.toolbar.style.left="",this.toolbar.style.top=""),this.selection&&(this.originalSelectionVisibility!==null&&(this.selection.style.visibility=this.originalSelectionVisibility),this.originalSelectionStyles&&Object.entries(this.originalSelectionStyles).forEach(([t,e])=>{e!==void 0&&(this.selection.style[t]=e)}),this.tempStyleElement&&(this.tempStyleElement.remove(),this.tempStyleElement=null)),this.hiddenResizeHandles&&this.hiddenResizeHandles.length>0&&(this.hiddenResizeHandles.forEach(t=>{t.element&&(t.element.style.visibility=t.originalVisibility,t.element.style.opacity=t.originalOpacity,t.element.style.display=t.originalDisplay)}),this.hiddenResizeHandles=[]),this.hiddenNotifications&&this.hiddenNotifications.length>0&&(this.hiddenNotifications.forEach(t=>{t.element&&(t.element.style.visibility=t.originalVisibility,t.element.style.opacity=t.originalOpacity,t.element.style.display=t.originalDisplay)}),this.hiddenNotifications=[]),this.selections.forEach(t=>{t.element&&t.originalStyles&&Object.entries(t.originalStyles).forEach(([e,i])=>{i!==void 0&&(t.element.style[e]=i)})})}showNotification(t,e=3e3){document.querySelectorAll(".cocoshot-screenshot-notification").forEach(s=>s.remove());const o=document.createElement("div");return o.className="cocoshot-screenshot-notification",o.textContent=t,document.body.appendChild(o),o.offsetHeight,o.classList.add("show"),setTimeout(()=>{o.classList.remove("show"),setTimeout(()=>o.remove(),300)},e),o}enableInspection(){this.isInspecting=!0,this.isActive=!0,this.eventBlocker=document.createElement("div"),this.eventBlocker.id="cocoshot-screenshot-event-blocker",this.eventBlocker.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: transparent;
        z-index: 9998;
        cursor: crosshair;
        pointer-events: all;
      `,document.body.appendChild(this.eventBlocker),this.highlightElement=document.createElement("div"),this.highlightElement.style.cssText=`
        position: absolute;
        pointer-events: none;
        z-index: 10000;
        background: rgba(130, 180, 230, 0.2);
        border: 2px solid #5166d6;
        box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.5);
        display: none;
        transition: all 0.2s ease;
        border-radius: 3px;
      `;const t=document.createElement("div");t.style.cssText=`
        position: absolute;
        top: -25px;
        left: 50%;
        transform: translateX(-50%);
        background: #5166d6;
        color: white;
        padding: 2px 8px;
        border-radius: 3px;
        font-size: 12px;
        pointer-events: none;
        white-space: nowrap;
        opacity: 0;
        transition: opacity 0.2s ease;
      `,this.highlightElement.appendChild(t),this.sizeIndicator=t,document.body.appendChild(this.highlightElement);const e=document.createElement("div");e.id="cocoshot-screenshot-inspect-cancel",e.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        background: #fff;
        color: #333;
        border: 1px solid #ddd;
        border-radius: 4px;
        padding: 8px 16px;
        font-size: 14px;
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        z-index: 10001;
        user-select: none;
        transition: all 0.2s ease;
      `,e.textContent=l.getNotificationText("escape"),e.addEventListener("mouseover",()=>{e.style.background="#f5f5f5"}),e.addEventListener("mouseout",()=>{e.style.background="#fff"}),e.addEventListener("click",i=>{i.preventDefault(),i.stopPropagation(),this.disableInspection(),this.end()}),document.body.appendChild(e),this.cancelButton=e,document.body.style.cursor="crosshair",this.eventBlocker.addEventListener("mousemove",this.handleInspectorMouseMove.bind(this)),this.eventBlocker.addEventListener("click",this.handleInspectorClick.bind(this)),this.eventBlocker.addEventListener("wheel",i=>{i.stopPropagation()},{passive:!0}),window.addEventListener("scroll",this.handleInspectorScroll.bind(this)),this.boundHandleKeyDown=this.handleKeyDown.bind(this),document.addEventListener("keydown",this.boundHandleKeyDown),this.showNotification(l.getNotificationText("smartModeEnabled"),2e3)}handleInspectorMouseMove(t){if(!this.isInspecting)return;this.eventBlocker&&(this.eventBlocker.style.pointerEvents="none");const e=document.elementFromPoint(t.clientX,t.clientY);this.eventBlocker&&(this.eventBlocker.style.pointerEvents="all"),e&&(this.updateHighlight(e),this.currentElement=e)}updateHighlight(t){if(!t||!this.highlightElement)return;const e=t.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;this.highlightElement.style.display="block",this.highlightElement.style.top=`${e.top+o}px`,this.highlightElement.style.left=`${e.left+i}px`,this.highlightElement.style.width=`${e.width}px`,this.highlightElement.style.height=`${e.height}px`,this.sizeIndicator&&(this.sizeIndicator.textContent=`${Math.round(e.width)} × ${Math.round(e.height)}`,this.sizeIndicator.style.opacity="1",e.top<40?(this.sizeIndicator.style.top="auto",this.sizeIndicator.style.bottom="-25px"):(this.sizeIndicator.style.top="-25px",this.sizeIndicator.style.bottom="auto")),this.highlightElement.style.transform="scale(1.02)",setTimeout(()=>{this.highlightElement.style.transform="scale(1)"},100)}handleInspectorScroll(){this.isInspecting&&this.currentElement&&this.updateHighlight(this.currentElement)}handleInspectorClick(t){if(!this.isInspecting||(t.preventDefault(),t.stopPropagation(),!this.currentElement))return;const e=this.currentElement.getBoundingClientRect(),i=window.pageXOffset||document.documentElement.scrollLeft,o=window.pageYOffset||document.documentElement.scrollTop;this.disableInspection(),this.ratio="free",this.isInspectMode=!0,this.isActive=!0,this.selection=document.createElement("div"),this.selection.id="cocoshot-screenshot-selection";const s=e.left+i,r=e.top+o,a=e.width,n=e.height;this.startX=s,this.startY=r,this.endX=s+a,this.endY=r+n,this.infoPanel=document.createElement("div"),this.infoPanel.id="cocoshot-screenshot-info",this.selection.appendChild(this.infoPanel),document.body.appendChild(this.selection),this.updateSelectionSize(),this.addResizeHandles(),this.createToolbar(),this.makeSelectionMovable(),this.boundHandleKeyDown=this.boundHandleKeyDown||this.handleKeyDown.bind(this),document.addEventListener("keydown",this.boundHandleKeyDown)}disableInspection(){this.isInspecting=!1,this.selection||(this.isActive=!1),document.body.style.cursor="",this.eventBlocker&&(this.eventBlocker.remove(),this.eventBlocker=null),window.removeEventListener("scroll",this.handleInspectorScroll.bind(this)),this.boundHandleKeyDown&&document.removeEventListener("keydown",this.boundHandleKeyDown),this.highlightElement&&(this.highlightElement.style.opacity="0",setTimeout(()=>{this.highlightElement&&(this.highlightElement.remove(),this.highlightElement=null)},200)),this.cancelButton&&(this.cancelButton.remove(),this.cancelButton=null),this.currentElement=null}copyToClipboard(){if(!this.selection)return;const t={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)},e=window.scrollX,i=window.scrollY,o=window.innerWidth,s=window.innerHeight,r=t.left>=e&&t.top>=i&&t.left+t.width<=e+o&&t.top+t.height<=i+s,a=this.showNotification(l.getNotificationText("processing"));this.hideUIElementsForCapture(),setTimeout(()=>{r?chrome.runtime.sendMessage({action:"captureScreen"},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{const h=window.devicePixelRatio||1,d={left:Math.round((t.left-e)*h),top:Math.round((t.top-i)*h),width:Math.round(t.width*h),height:Math.round(t.height*h)};this.processImageForClipboard(c,d,a)},c.onerror=()=>{a.textContent=l.getNotificationText("copyFailed"),setTimeout(()=>a.remove(),2e3)},c.src=n.dataUrl}else a.textContent=l.getNotificationText("copyFailed",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>a.remove(),2e3)}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:t},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{this.processImageForClipboard(c,{left:0,top:0,width:c.width,height:c.height},a)},c.onerror=()=>{a.textContent=l.getNotificationText("copyFailed"),setTimeout(()=>a.remove(),2e3)},c.src=n.dataUrl}else a.textContent=l.getNotificationText("copyFailed",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>a.remove(),2e3)})},30)}processImageForClipboard(t,e,i){try{const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const s=o.getContext("2d");if(!s){i.textContent=l.getNotificationText("canvasContextError"),setTimeout(()=>i.remove(),2e3);return}e.left>=0&&e.top>=0&&e.left+e.width<=t.width&&e.top+e.height<=t.height?(s.drawImage(t,e.left,e.top,e.width,e.height,0,0,e.width,e.height),o.toBlob(r=>{if(r)try{const a=new ClipboardItem({"image/png":r});navigator.clipboard.write([a]).then(()=>{i.textContent=l.getNotificationText("copied"),setTimeout(()=>i.remove(),2e3)}).catch(n=>{i.textContent=l.getNotificationText("clipboardAccessDenied",n.message||""),setTimeout(()=>i.remove(),2e3)})}catch(a){i.textContent=l.getNotificationText("copyFailed",a.message||"Clipboard API not supported"),setTimeout(()=>i.remove(),2e3),this.copyImageFallback(o,i)}else i.textContent=l.getNotificationText("copyFailed"),setTimeout(()=>i.remove(),2e3)},"image/png")):(i.textContent=l.getNotificationText("copyAreaOutOfView"),setTimeout(()=>i.remove(),2e3))}catch(o){i.textContent=l.getNotificationText("copyFailed",o.message||"Error processing image"),setTimeout(()=>i.remove(),2e3)}}copyImageFallback(t,e){try{const i=t.toDataURL("image/png"),o=document.createElement("div");o.style.cssText=`
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: #fff;
          padding: 20px;
          border: 2px solid #333;
          box-shadow: 0 0 20px rgba(0,0,0,0.5);
          z-index: 99999;
          text-align: center;
          max-width: 80vw;
          max-height: 80vh;
          overflow: auto;
        `;const s=document.createElement("button");s.textContent="Close",s.style.cssText=`
          padding: 5px 10px;
          margin-top: 10px;
          cursor: pointer;
        `,s.onclick=()=>o.remove();const r=document.createElement("p");r.textContent='Copy image directly in modern browsers by right-clicking and selecting "Copy Image"',r.style.marginBottom="10px";const a=document.createElement("img");a.src=i,a.style.maxWidth="100%",a.style.maxHeight="60vh",a.style.border="1px solid #ccc",o.appendChild(r),o.appendChild(a),o.appendChild(document.createElement("br")),o.appendChild(s),document.body.appendChild(o),e.textContent=l.getNotificationText("imagePreviewShown"),setTimeout(()=>e.remove(),2e3)}catch(i){e.textContent=l.getNotificationText("copyFailed",i.message),setTimeout(()=>e.remove(),2e3)}}openAIDialog(){if(!this.selection)return;const t=this.showNotification(l.getNotificationText("processing")),e={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)};this.hideUIElementsForCapture(),setTimeout(()=>{const i=window.scrollX,o=window.scrollY,s=window.innerWidth,r=window.innerHeight;e.left>=i&&e.top>=o&&e.left+e.width<=i+s&&e.top+e.height<=o+r?chrome.runtime.sendMessage({action:"captureScreen"},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{const h=window.devicePixelRatio||1,d={left:Math.round((e.left-i)*h),top:Math.round((e.top-o)*h),width:Math.round(e.width*h),height:Math.round(e.height*h)};this.processImageForDialog(c,d,t)},c.onerror=()=>{t.textContent=l.getToolbarText("imageProcessingFailed"),setTimeout(()=>t.remove(),2e3)},c.src=n.dataUrl}else t.textContent=l.getToolbarText("screenshotFailed",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),2e3)}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:e},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{this.processImageForDialog(c,{left:0,top:0,width:c.width,height:c.height},t)},c.onerror=()=>{t.textContent=l.getToolbarText("screenshotFailed","Image processing failed"),setTimeout(()=>t.remove(),2e3)},c.src=n.dataUrl}else t.textContent=l.getToolbarText("screenshotFailed",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),2e3)})},30)}processImageForDialog(t,e,i){try{const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const s=o.getContext("2d");if(!s){i.textContent=l.getToolbarText("canvasContextError"),setTimeout(()=>i.remove(),2e3);return}if(e.left>=0&&e.top>=0&&e.left+e.width<=t.width&&e.top+e.height<=t.height){s.drawImage(t,e.left,e.top,e.width,e.height,0,0,e.width,e.height);let r=o.toDataURL("image/jpeg",.85).split(",")[1];Math.floor(.75*r.length)>5*1024*1024?this.resizeImageForDialog(o,n=>{const c=n.split(",")[1];this.launchDialogWithImage(c,i)}):this.launchDialogWithImage(r,i)}else i.textContent=l.getToolbarText("selectedAreaOutOfView"),setTimeout(()=>i.remove(),2e3)}catch(o){i.textContent=l.getToolbarText("errorProcessingImage",o.message||""),setTimeout(()=>i.remove(),2e3)}}resizeImageForDialog(t,e){try{let o=t.width,s=t.height;(o>1600||s>1600)&&(o>s?(s=Math.floor(s*(1600/o)),o=1600):(o=Math.floor(o*(1600/s)),s=1600));const r=document.createElement("canvas");r.width=o,r.height=s,r.getContext("2d").drawImage(t,0,0,o,s);const n=r.toDataURL("image/jpeg",.7),c=Math.floor(.75*n.split(",")[1].length);e(n)}catch{e(t.toDataURL("image/jpeg",.5))}}launchDialogWithImage(t,e){e&&e.remove(),this.end();const i=chrome.runtime.getURL("ai_dialog/dialog.html")+`?image=${encodeURIComponent(t)}`,o=900,s=700,r=Math.max(0,(window.screen.width-o)/2),a=Math.max(0,(window.screen.height-s)/2);chrome.runtime.sendMessage({action:"openAIDialog",url:i,options:{width:o,height:s,left:r,top:a,type:"popup"}})}decodeQRCode(){if(!this.selection)return;const t=this.showNotification(l.getNotificationText("qrDecoding")),e={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)};this.hideUIElementsForCapture(),setTimeout(()=>{const i=window.scrollX,o=window.scrollY,s=window.innerWidth,r=window.innerHeight;e.left>=i&&e.top>=o&&e.left+e.width<=i+s&&e.top+e.height<=o+r?chrome.runtime.sendMessage({action:"captureScreen"},n=>{this.restoreUIElementsAfterCapture(),n&&n.success?this.processQRCodeImage(n.dataUrl,e,i,o,t):(t.textContent=l.getNotificationText("qrError",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),3e3))}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:e},n=>{this.restoreUIElementsAfterCapture(),n&&n.success?this.processQRCodeImage(n.dataUrl,e,0,0,t):(t.textContent=l.getNotificationText("qrError",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),3e3))})},30)}processQRCodeImage(t,e,i,o,s){if(typeof jsQR!="function"){s.textContent=l.getToolbarText("qrLibraryNotLoaded"),setTimeout(()=>s.remove(),3e3);return}const r=new Image;r.onload=()=>{try{const a=document.createElement("canvas"),n=window.devicePixelRatio||1,c={left:Math.round((e.left-i)*n),top:Math.round((e.top-o)*n),width:Math.round(e.width*n),height:Math.round(e.height*n)};a.width=c.width,a.height=c.height;const h=a.getContext("2d",{willReadFrequently:!0});if(!h)throw new Error("Cannot get Canvas context");h.drawImage(r,c.left,c.top,c.width,c.height,0,0,c.width,c.height);const d=h.getImageData(0,0,a.width,a.height);try{const g=jsQR(d.data,d.width,d.height,{inversionAttempts:"dontInvert"});g&&g.data?navigator.clipboard.writeText(g.data).then(()=>{s.textContent=l.getToolbarText("qrSuccess"),setTimeout(()=>s.remove(),3e3)}).catch(m=>{this.copyQRCodeFallback(g.data,s)}):(s.textContent=l.getToolbarText("qrNoQRFound"),setTimeout(()=>s.remove(),3e3))}catch{s.textContent=l.getToolbarText("qrError","QR code decoding failed"),setTimeout(()=>s.remove(),3e3)}}catch(a){s.textContent=l.getToolbarText("qrError",a.message),setTimeout(()=>s.remove(),3e3)}},r.onerror=()=>{s.textContent=l.getToolbarText("qrError","Image loading failed"),setTimeout(()=>s.remove(),3e3)},r.src=t}copyQRCodeFallback(t,e){try{const i=document.createElement("textarea");i.value=t,i.style.position="fixed",i.style.opacity="0",document.body.appendChild(i),i.select(),document.execCommand("copy"),document.body.removeChild(i),e.textContent=l.getToolbarText("qrSuccess"),setTimeout(()=>e.remove(),3e3)}catch{e.textContent=l.getToolbarText("qrError","Copy failed"),setTimeout(()=>e.remove(),3e3)}}removeBackground(){if(!this.selection)return;const t=this.showNotification(l.getToolbarText("processingBackgroundRemoval")),e={left:Math.min(this.startX,this.endX),top:Math.min(this.startY,this.endY),width:Math.abs(this.endX-this.startX),height:Math.abs(this.endY-this.startY)},i=window.scrollX,o=window.scrollY,s=window.innerWidth,r=window.innerHeight,a=e.left>=i&&e.top>=o&&e.left+e.width<=i+s&&e.top+e.height<=o+r;this.hideUIElementsForCapture(),setTimeout(()=>{a?chrome.runtime.sendMessage({action:"captureScreen"},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{const h=window.devicePixelRatio||1,d={left:Math.round((e.left-i)*h),top:Math.round((e.top-o)*h),width:Math.round(e.width*h),height:Math.round(e.height*h)};this.processImageForRemoveBackground(c,d,t)},c.onerror=()=>{t.textContent=l.getToolbarText("backgroundRemovalFailedImage"),setTimeout(()=>t.remove(),2e3)},c.src=n.dataUrl}else t.textContent=l.getToolbarText("backgroundRemovalFailedContext",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),2e3)}):chrome.runtime.sendMessage({action:"captureFullPage",targetArea:e},n=>{if(this.restoreUIElementsAfterCapture(),n&&n.success){const c=new Image;c.onload=()=>{this.processImageForRemoveBackground(c,{left:0,top:0,width:c.width,height:c.height},t)},c.onerror=()=>{t.textContent=l.getToolbarText("backgroundRemovalFailedImage"),setTimeout(()=>t.remove(),2e3)},c.src=n.dataUrl}else t.textContent=l.getToolbarText("backgroundRemovalFailedContext",(n==null?void 0:n.error)||"Unknown error"),setTimeout(()=>t.remove(),2e3)})},30)}processImageForRemoveBackground(t,e,i){try{const o=document.createElement("canvas");o.width=e.width,o.height=e.height;const s=o.getContext("2d",{willReadFrequently:!0});if(!s){i.textContent=l.getToolbarText("backgroundRemovalFailed","Cannot get canvas context"),setTimeout(()=>i.remove(),2e3);return}if(e.left>=0&&e.top>=0&&e.left+e.width<=t.width&&e.top+e.height<=t.height){s.clearRect(0,0,e.width,e.height),s.drawImage(t,e.left,e.top,e.width,e.height,0,0,e.width,e.height);const r=s.getImageData(0,0,e.width,e.height),a=r.data;this.simpleBackgroundRemoval(r),s.putImageData(r,0,0),o.toBlob(n=>{if(n)try{const c=new ClipboardItem({"image/png":n});navigator.clipboard.write([c]).then(()=>{i.textContent=l.getToolbarText("backgroundRemovedAndCopied"),setTimeout(()=>i.remove(),2e3)}).catch(h=>{i.textContent=l.getToolbarText("clipboardAccessDenied",h.message||""),setTimeout(()=>i.remove(),2e3)})}catch(c){i.textContent=l.getToolbarText("backgroundRemovalFailed",c.message||"Clipboard API not supported"),setTimeout(()=>i.remove(),2e3),this.copyImageFallback(o,i)}else i.textContent=l.getToolbarText("backgroundRemovalFailedBlob"),setTimeout(()=>i.remove(),2e3)},"image/png")}else i.textContent=l.getToolbarText("selectedAreaOutOfView"),setTimeout(()=>i.remove(),2e3)}catch(o){i.textContent=l.getToolbarText("backgroundRemovalFailed",o.message||"Image processing error"),setTimeout(()=>i.remove(),2e3)}}simpleBackgroundRemoval(t){try{let k=function(p,u){return Math.sqrt(p.reduce((f,v)=>f+Math.pow(v-u,2),0)/p.length)};const e=t.data,i=t.width,o=t.height,s=10,r=[],a=[{x:0,y:0},{x:i-s,y:0},{x:0,y:o-s},{x:i-s,y:o-s}];for(const p of a)for(let u=0;u<s;u++)for(let f=0;f<s;f++){const T=4*((p.y+u)*i+(p.x+f));r.push({r:e[T],g:e[T+1],b:e[T+2]})}const n=5,c=Math.floor(i/(n+1));for(let p=c;p<i;p+=c)for(let u=0;u<s;u++){const v=4*(u*i+p);r.push({r:e[v],g:e[v+1],b:e[v+2]})}for(let p=c;p<i;p+=c)for(let u=0;u<s;u++){const v=4*((o-1-u)*i+p);r.push({r:e[v],g:e[v+1],b:e[v+2]})}const h=Math.floor(o/(n+1));for(let p=h;p<o;p+=h)for(let u=0;u<s;u++){const v=4*(p*i+u);r.push({r:e[v],g:e[v+1],b:e[v+2]})}for(let p=h;p<o;p+=h)for(let u=0;u<s;u++){const v=4*(p*i+(i-1-u));r.push({r:e[v],g:e[v+1],b:e[v+2]})}const d=r.map(p=>p.r).sort((p,u)=>p-u),g=r.map(p=>p.g).sort((p,u)=>p-u),m=r.map(p=>p.b).sort((p,u)=>p-u),b=p=>{const u=Math.floor(p.length/2);return p.length%2===0?(p[u-1]+p[u])/2:p[u]},E={r:Math.round(b(d)),g:Math.round(b(g)),b:Math.round(b(m))},I=d.reduce((p,u)=>p+u,0)/d.length,H=g.reduce((p,u)=>p+u,0)/g.length,L=m.reduce((p,u)=>p+u,0)/m.length,G=k(d,I),J=k(g,H),tt=k(m,L),et=(G+J+tt)/3,$=Math.max(25,Math.min(1.5*et,50)),ot=(p,u)=>Math.sqrt(.299*Math.pow(p.r-u.r,2)+.587*Math.pow(p.g-u.g,2)+.114*Math.pow(p.b-u.b,2)),Y=new Uint8ClampedArray(i*o);for(let p=0;p<i*o;p++){const u=4*p,f={r:e[u],g:e[u+1],b:e[u+2]},v=ot(f,E);if(v<$)Y[p]=0;else if(v<2*$){const T=(v-$)/$,A=3*T*T-2*T*T*T;Y[p]=Math.round(255*A)}else Y[p]=255}const R=20,W=Math.ceil(i/R),K=Math.ceil(o/R),j=Array(K).fill().map(()=>Array(W).fill().map(()=>[]));for(let p=0;p<o;p++)for(let u=0;u<i;u++){const f=p*i+u;if(Y[f]===255){const v=4*f,T=Math.floor(u/R),A=Math.floor(p/R);j[A][T].push({r:e[v],g:e[v+1],b:e[v+2],x:u,y:p})}}const B=new Uint8ClampedArray(i*o);B.set(Y);const Q=(p,u,f)=>{const v=f/3,T=2*v*v,A=2*Math.ceil(f)+1,S=Math.floor(A/2),N=[];let D=0;for(let w=-S;w<=S;w++)for(let C=-S;C<=S;C++){const z=C*C+w*w,X=Math.exp(-z/T);N.push({x:C,y:w,weight:X}),D+=X}for(let w=0;w<N.length;w++)N[w].weight/=D;for(let w=0;w<o;w++)for(let C=0;C<i;C++){const z=w*i+C;if(p[z]>0&&p[z]<255){let X=0;for(const P of N){const U=C+P.x,F=w+P.y;if(U>=0&&U<i&&F>=0&&F<o){const V=F*i+U;X+=p[V]*P.weight}}u[z]=Math.round(X)}}};Q(Y,B,2),Y.set(B),Q(Y,B,1);for(let p=0;p<o;p++)for(let u=0;u<i;u++){const f=p*i+u,v=4*f;if(B[f]>0&&B[f]<255){const T=Math.floor(u/R),A=Math.floor(p/R);let S=null,N=1/0,D=!1;for(let w=-1;w<=1&&!D;w++)for(let C=-1;C<=1&&!D;C++){const z=T+C,X=A+w;if(z>=0&&z<W&&X>=0&&X<K){const P=j[X][z];if(P.length>0){const U=Math.min(20,P.length);for(let F=0;F<U;F++){const V=P[F],O=Math.sqrt(Math.pow(u-V.x,2)+Math.pow(p-V.y,2));if(O<N&&(N=O,S=V,O<5)){D=!0;break}}}}}S&&(e[v]=S.r,e[v+1]=S.g,e[v+2]=S.b),e[v+3]=B[f]}else B[f]===0?e[v+3]=0:e[v+3]=255}}catch{}}_createRatioSelect(){const t=document.createElement("select");t.className="cocoshot-screenshot-select",t.title=l.getToolbarText("ratioLabelTooltip")||l.getToolbarText("ratioLabel");const e=[{value:"16:9",text:"16:9 (Video/Screen)"},{value:"4:3",text:"4:3 (Traditional Screen)"},{value:"1:1",text:"1:1 (Square/Instagram)"},{value:"9:16",text:"9:16 (Mobile Portrait/Stories)"},{value:"3:4",text:"3:4 (Instagram/iPad)"},{value:"2:1",text:"2:1 (Twitter Landscape)"},{value:"1:2",text:"1:2 (Pinterest)"},{value:"4:5",text:"4:5 (Instagram Portrait)"},{value:"3:2",text:"3:2 (Social Cover)"},{value:"21:9",text:"21:9 (Ultrawide)"}],{options:i}=this.getLocalizedRatioOptions(e);return i.unshift({value:"free",text:l.getToolbarText("freeRatio")}),i.forEach(o=>{const s=document.createElement("option");s.value=o.value,s.textContent=o.text,o.value===this.ratio&&(s.selected=!0),t.appendChild(s)}),t.addEventListener("change",()=>{this.ratio=t.value,this.selection&&(this.adjustSelectionToRatio(),this.updateSelectionSizeDisplay())}),t}_createDivider(){const t=document.createElement("div");return t.className="cocoshot-screenshot-divider",t}_createRemoveBackgroundButton(){const t=document.createElement("button");return t.className="cocoshot-screenshot-button",this.addButtonContent(t,l.getToolbarText("removeBackground"),y.removeBackgroundButton),t.title=l.getToolbarText("removeBgTooltip")||"Remove background and copy to clipboard",t.addEventListener("click",()=>this.removeBackground()),t}_createAIDialogButton(){const t=document.createElement("button");return t.className="cocoshot-screenshot-button",this.addButtonContent(t,l.getToolbarText("aiDialog"),y.dialogButton),t.title=this.getAIDialogTitle(),t.addEventListener("click",()=>this.openAIDialog()),t}_createQRCodeButton(){const t=document.createElement("button");return t.className="cocoshot-screenshot-button",this.addButtonContent(t,l.getToolbarText("qrDecode"),y.qrButton),t.title=this.getQRDecodeTitle(),t.addEventListener("click",()=>this.decodeQRCode()),t}_createLockSizeButton(){const t=document.createElement("button");return t.className=this.isLockSize?"cocoshot-screenshot-button toggle active":"cocoshot-screenshot-button toggle",this.addButtonContent(t,this.isLockSize?l.getToolbarText("lockSizeActive"):l.getToolbarText("lockSize"),y.lockSizeButton),t.title=this.getLockSizeTitle(),t.addEventListener("click",()=>{this.isLockSize=!this.isLockSize,t.className=this.isLockSize?"cocoshot-screenshot-button toggle active":"cocoshot-screenshot-button toggle",this.addButtonContent(t,this.isLockSize?l.getToolbarText("lockSizeActive"):l.getToolbarText("lockSize"),y.lockSizeButton),this.isLockSize?(this.lockedWidth=Math.abs(this.endX-this.startX),this.lockedHeight=Math.abs(this.endY-this.startY)):(this.lockedWidth=0,this.lockedHeight=0)}),t}}q=new M(!1)}window.ratioScreenshot=q;
