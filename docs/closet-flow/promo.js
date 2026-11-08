'use strict';

const promoScenes = [
  {
    image: 'categories.webp',
    title: 'See what you already own.',
    caption: 'A visual closet for clothing, shoes, and accessories.',
    label: 'YOUR WARDROBE, IN VIEW'
  },
  {
    image: 'your-look.webp',
    title: 'Less guessing. More great looks.',
    caption: 'Build a look from your pieces. Make it your own.',
    label: 'OUTFIT PLANNING'
  },
  {
    image: 'favorites.webp',
    title: 'Your favorites, within reach.',
    caption: 'Outfits. Items. Brands. Categories. Favorites stay free.',
    label: 'KEEP WHAT YOU LOVE CLOSE'
  },
  {
    image: 'saved-outfits.webp',
    title: 'Wear it. Save it. Love it again.',
    caption: 'Log outfit wears and rediscover forgotten combinations.',
    label: 'MORE FROM YOUR CLOSET'
  },
  {
    image: 'reminders.webp',
    title: 'A little nudge. An easier morning.',
    caption: 'Daily or weekly free. Morning and evening with Pro.',
    label: 'REMINDERS AT YOUR OWN TIMES'
  },
  {
    image: 'categories.webp',
    title: 'Your closet. More possibilities.',
    caption: 'Start free: 50 active items and 5 saved outfits.\nOptional Pro: unlimited space and weather tools.',
    label: 'EXPLORE CLOSET FLOW'
  }
];

const promoCanvas = document.getElementById('promotion');
if (!(promoCanvas instanceof HTMLCanvasElement)) {
  throw new TypeError('The promotional canvas is missing.');
}
const promoContext = promoCanvas.getContext('2d');
if (!promoContext) {
  throw new Error('This browser cannot render the promotional canvas.');
}

const promoImages = new Map();
let promoVertical = false;

async function preparePromotion(format) {
  if (format !== 'vertical' && format !== 'landscape') {
    throw new Error('Choose vertical or landscape.');
  }
  promoVertical = format === 'vertical';
  promoCanvas.width = promoVertical ? 1080 : 1920;
  promoCanvas.height = promoVertical ? 1920 : 1080;
  await Promise.all([...new Set(promoScenes.map(scene => scene.image))].map(async name => {
    const image = new Image();
    image.src = `/img/portfolio/closet-flow/current/${name}`;
    await image.decode();
    promoImages.set(name, image);
  }));
  drawPromotion(1);
}

function drawWrappedText(text, x, y, width, lineHeight) {
  let currentY = y;
  for (const paragraph of text.split('\n')) {
    let line = '';
    for (const word of paragraph.split(' ')) {
      const candidate = line ? `${line} ${word}` : word;
      if (line && promoContext.measureText(candidate).width > width) {
        promoContext.fillText(line, x, currentY);
        currentY += lineHeight;
        line = word;
      } else {
        line = candidate;
      }
    }
    promoContext.fillText(line, x, currentY);
    currentY += lineHeight;
  }
  return currentY;
}

function drawPhone(image, time) {
  const screenWidth = promoVertical ? 460 : 370;
  const screenHeight = screenWidth * image.height / image.width;
  const x = promoVertical ? (1080 - screenWidth) / 2 : 1350;
  const y = promoVertical ? 700 : 135;
  const lift = Math.sin(time * Math.PI) * 8;
  promoContext.save();
  promoContext.shadowColor = '#253d3633';
  promoContext.shadowBlur = 36;
  promoContext.shadowOffsetY = 16;
  promoContext.fillStyle = '#253d36';
  promoContext.beginPath();
  promoContext.roundRect(x - 12, y - 12 - lift, screenWidth + 24, screenHeight + 24, 44);
  promoContext.fill();
  promoContext.shadowColor = 'transparent';
  promoContext.beginPath();
  promoContext.roundRect(x, y - lift, screenWidth, screenHeight, 32);
  promoContext.clip();
  promoContext.drawImage(image, x, y - lift, screenWidth, screenHeight);
  promoContext.restore();
}

function drawScene(scene, localTime, finalScene) {
  promoContext.save();
  const fadeOut = finalScene ? 1 : (5 - localTime) / 0.35;
  promoContext.globalAlpha = Math.min(1, localTime / 0.35, fadeOut);
  const x = promoVertical ? 80 : 120;
  const textWidth = promoVertical ? 920 : 1060;
  promoContext.fillStyle = '#57368a';
  promoContext.font = 'bold 26px Arial';
  promoContext.fillText(scene.label, x, promoVertical ? 230 : 290);
  promoContext.fillStyle = '#253d36';
  promoContext.font = `bold ${promoVertical ? 74 : 88}px Arial`;
  const nextY = drawWrappedText(scene.title, x, promoVertical ? 340 : 410, textWidth, promoVertical ? 88 : 104);
  promoContext.fillStyle = '#52655e';
  promoContext.font = `${promoVertical ? 36 : 40}px Arial`;
  drawWrappedText(scene.caption, x, nextY + 22, textWidth, 50);
  const image = promoImages.get(scene.image);
  if (!image) {
    throw new Error(`Promotional image was not loaded: ${scene.image}`);
  }
  drawPhone(image, localTime / 5);
  promoContext.restore();
}

function drawFooter(index) {
  const width = promoCanvas.width;
  const height = promoCanvas.height;
  promoContext.fillStyle = '#57368a';
  promoContext.font = `bold ${promoVertical ? 38 : 34}px Arial`;
  promoContext.fillText('mellowmintapp.com', promoVertical ? 80 : 120, height - 125);
  promoContext.fillStyle = '#52655e';
  promoContext.font = `${promoVertical ? 25 : 24}px Arial`;
  promoContext.fillText('Free essentials. Optional Pro. Some screens show Pro collections.', promoVertical ? 80 : 120, height - 70);
  for (let dot = 0; dot < promoScenes.length; dot++) {
    promoContext.fillStyle = dot === index ? '#57368a' : '#c7d9ce';
    promoContext.beginPath();
    promoContext.arc(width - 220 + dot * 25, height - 130, 6, 0, Math.PI * 2);
    promoContext.fill();
  }
}

function drawPromotion(seconds) {
  const bounded = Math.max(0, Math.min(seconds, 29.999));
  const index = Math.floor(bounded / 5);
  const width = promoCanvas.width;
  const height = promoCanvas.height;
  const gradient = promoContext.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#faf8f2');
  gradient.addColorStop(0.65, '#dcefe5');
  gradient.addColorStop(1, '#eee8f5');
  promoContext.fillStyle = gradient;
  promoContext.fillRect(0, 0, width, height);
  promoContext.textAlign = 'left';
  promoContext.fillStyle = '#57368a';
  promoContext.font = 'bold 34px Arial';
  promoContext.fillText('MellowMint / Closet Flow', promoVertical ? 80 : 120, promoVertical ? 110 : 100);
  drawScene(promoScenes[index], bounded % 5, index === promoScenes.length - 1);
  drawFooter(index);
}

async function validatePromotionVideo(blob) {
  const video = document.createElement('video');
  const url = URL.createObjectURL(blob);
  try {
    const loaded = new Promise((resolve, reject) => {
      video.onloadedmetadata = resolve;
      video.onerror = () => reject(new Error('The exported promotional video cannot be decoded.'));
    });
    video.src = url;
    await loaded;
    if (Math.abs(video.duration - 30) > 0.75 || video.videoWidth !== promoCanvas.width || video.videoHeight !== promoCanvas.height) {
      throw new Error(`Incorrect video export: ${video.duration}s, ${video.videoWidth}x${video.videoHeight}.`);
    }
  } finally {
    video.removeAttribute('src');
    video.load();
    URL.revokeObjectURL(url);
  }
}

async function savePromotionExport(name, body, upload) {
  if (upload) {
    const response = await fetch(`/__promo-export/${name}`, { method: 'POST', body });
    if (!response.ok) throw new Error(`Could not save ${name}: HTTP ${response.status}`);
    return;
  }
  const url = URL.createObjectURL(body);
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

async function recordPromotion(format, upload = false) {
  await preparePromotion(format);
  const mimeType = 'video/mp4;codecs=avc3.420028';
  if (!MediaRecorder.isTypeSupported(mimeType)) {
    throw new Error('H.264 MP4 recording is not supported by this browser.');
  }
  const stream = promoCanvas.captureStream(30);
  const recorder = new MediaRecorder(stream, { mimeType, videoBitsPerSecond: 5000000 });
  const chunks = [];
  const completed = new Promise((resolve, reject) => {
    recorder.ondataavailable = event => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    recorder.onerror = event => reject(new Error(`Video recording failed: ${event.type}`));
    recorder.onstop = () => resolve(new Blob(chunks, { type: 'video/mp4' }));
  });
  let animationId = 0;
  try {
    drawPromotion(1);
    const poster = await new Promise((resolve, reject) => {
      promoCanvas.toBlob(blob => {
        if (blob) resolve(blob);
        else reject(new Error('Could not create a promotional video poster.'));
      }, 'image/webp', 0.9);
    });
    drawPromotion(0.35);
    recorder.start();
    const startedAt = performance.now();
    const animate = now => {
      const seconds = (now - startedAt) / 1000;
      drawPromotion(seconds);
      if (seconds < 30) animationId = requestAnimationFrame(animate);
      else recorder.stop();
    };
    animationId = requestAnimationFrame(animate);
    const video = await completed;
    await validatePromotionVideo(video);
    await Promise.all([[`closet-flow-${format}.mp4`, video], [`closet-flow-${format}.webp`, poster]].map(([name, body]) => savePromotionExport(name, body, upload)));
    return { format, width: promoCanvas.width, height: promoCanvas.height, bytes: video.size, mimeType };
  } finally {
    cancelAnimationFrame(animationId);
    if (recorder.state !== 'inactive') recorder.stop();
    stream.getTracks().forEach(track => track.stop());
  }
}
