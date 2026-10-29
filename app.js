/* Ali Moner Diop — Dark / Motion Portfolio. No frameworks, API keys, or build step required. */
'use strict';
document.documentElement.classList.add('js');

// Instagram URLs are supplied by the portfolio owner. No project content is invented.
const POSTS = [
  'DMGMiZfu-V2', 'DTMIxfrDo3G', 'DQy3zR7Dg4J',
  'DcX5xuqOPgQ', 'DacvmKjOLpH', 'DU0q5Rxjvs7'
];
const COPY = {
  en: {
    skip:'Skip to content', navWork:'Work',navAbout:'About',navContact:'Contact',letsTalk:"LET'S TALK",
    heroKicker:'INDEPENDENT VIDEO EDITOR & MOTION DESIGNER',introLine:"HI, I'M",
    heroDescription:'Five years of turning raw footage into compelling visual stories. Clean edits, intentional motion, and details that make people watch.',
    viewWork:'EXPLORE MY WORK',contactMe:'Get in touch <span aria-hidden="true">↗</span>',photoMeta:'CREATIVE / 2026',
    basedOn:'AVAILABLE FOR REMOTE PROJECTS',scrollDown:'SCROLL TO EXPLORE', selectedLabel:'THE COLLECTION',selectedFirst:'Selected',selectedSecond:'work.',
    workIntro:'A selection of my edits and motion projects. Every frame shaped with purpose.',projectsCount:'PROJECTS',
    allWork:'ALL WORK <sup>06</sup>',groupOne:'01 — 03',groupTwo:'04 — 06',clickToWatch:'SELECT A PROJECT TO VIEW ↗',
    projectType:'INSTAGRAM PROJECT',workFineprint:'Video previews load from Instagram where available. Select any project to view the original.',
    aboutLabel:'ABOUT THE CREATIVE',aboutHeading:'Good editing<br/>is <em>felt.</em>',
    aboutText:"I'm Ali Moner Diop, a video editor and motion graphics designer with five years of experience. I craft social content, promotional videos and engaging motion using Adobe Premiere Pro, After Effects, Photoshop and Illustrator.",
    myTools:'MY DAILY TOOLKIT',contactLabel:"LET'S CONNECT",contactHeading:'Have a project<br/><em>in mind?</em>',
    contactDescription:"Let's turn your next idea into something worth watching. I'm one message away.",emailLabel:'EMAIL',
    footerQuote:'CRAFTED FRAME BY FRAME.',backToTop:'BACK TO TOP ↑',dialogKicker:'SELECTED WORK',
    dialogHint:"If Instagram doesn't load the video here, open it directly.",openInstagram:'OPEN ON INSTAGRAM ↗',
    project:'Project',projectAction:'Open project',dialogClose:'Close project',switchTo:'Switch to Arabic',filterLabel:'Filter projects'
  },
  ar: {
    skip:'تجاوز إلى المحتوى',navWork:'الأعمال',navAbout:'نبذة عني',navContact:'التواصل',letsTalk:'تواصل معي',
    heroKicker:'مونتير فيديو ومصمم موشن غرافيك مستقل',introLine:'مرحباً، أنا',
    heroDescription:'خمس سنوات من تحويل اللقطات الخام إلى قصص بصرية جذابة. مونتاج متقن وحركة مدروسة وتفاصيل تصنع فرقاً في كل مشهد.',
    viewWork:'اكتشف أعمالي',contactMe:'تواصل معي <span aria-hidden="true">↗</span>',photoMeta:'إبداع / 2026',
    basedOn:'متاح للعمل على المشاريع عن بُعد',scrollDown:'مرر لاكتشاف المزيد',selectedLabel:'مجموعة الأعمال',selectedFirst:'مختارات من',selectedSecond:'أعمالي.',
    workIntro:'مجموعة مختارة من أعمال المونتاج والموشن غرافيك، صُمّم كل إطار فيها بعناية.',projectsCount:'أعمال',
    allWork:'جميع الأعمال <sup>06</sup>',groupOne:'01 — 03',groupTwo:'04 — 06',clickToWatch:'اختر عملاً للمشاهدة ↗',
    projectType:'عمل منشور على إنستغرام',workFineprint:'تُحمَّل معاينات الأعمال من إنستغرام عند توفرها. اضغط على أي عمل لمشاهدة الأصل.',
    aboutLabel:'نبذة عني',aboutHeading:'المونتاج الجيد<br/><em>يُشعَر به.</em>',
    aboutText:'أنا علي منير ديوب، مونتير فيديو ومصمم موشن غرافيك بخبرة خمس سنوات. أعمل على محتوى التواصل الاجتماعي والفيديوهات الترويجية والموشن غرافيك باستخدام Adobe Premiere Pro وAfter Effects وPhotoshop وIllustrator.',
    myTools:'البرامج التي أستخدمها',contactLabel:'لنتواصل',contactHeading:'هل لديك مشروع<br/><em>في ذهنك؟</em>',
    contactDescription:'لنحوّل فكرتك القادمة إلى محتوى يستحق المشاهدة. يمكنك التواصل معي مباشرة.',emailLabel:'البريد الإلكتروني',
    footerQuote:'صُنع بعناية، إطاراً بعد إطار.',backToTop:'العودة إلى الأعلى ↑',dialogKicker:'عمل مختار',
    dialogHint:'إذا لم يظهر الفيديو هنا بسبب قيود إنستغرام، افتحه مباشرة من الرابط.',openInstagram:'مشاهدة على إنستغرام ↗',
    project:'العمل',projectAction:'فتح العمل',dialogClose:'إغلاق المشروع',switchTo:'Switch to English',filterLabel:'تصفية الأعمال'
  }
};

const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hoverMotion=window.matchMedia('(hover:hover) and (pointer:fine)').matches && !reducedMotion;
const $=selector=>document.querySelector(selector);
const $$=selector=>[...document.querySelectorAll(selector)];
let currentLanguage='en';
try { if(localStorage.getItem('ali-portfolio-language')==='ar') currentLanguage='ar'; } catch (_) { /* private browsing fallback */ }

function applyLanguage(language){
  currentLanguage=language;
  const dict=COPY[language];
  document.documentElement.lang=language;
  document.documentElement.dir=language==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(el=>{
    const phrase=dict[el.dataset.i18n];
    if(phrase!==undefined) el.innerHTML=phrase; // Only trusted constant translation strings.
  });
  const toggle=$('#lang-toggle');
  toggle.innerHTML=language==='en'?'EN <span class="lang-slash">/</span> <span class="lang-alt">AR</span>':'AR <span class="lang-slash">/</span> <span class="lang-alt">EN</span>';
  toggle.setAttribute('aria-label',dict.switchTo);
  $('.work-filters').setAttribute('aria-label',dict.filterLabel);
  $('#close-dialog').setAttribute('aria-label',dict.dialogClose);
  $$('[data-project-title]').forEach((el,i)=>el.textContent=`${dict.project} ${String(i+1).padStart(2,'0')}`);
  $$('[data-project]').forEach((el,i)=>el.setAttribute('aria-label',`${dict.projectAction} ${String(i+1).padStart(2,'0')}`));
  const dialog=$('#project-dialog');
  if(dialog.open){
    const index=Number(dialog.dataset.project||0);
    $('#dialog-title').textContent=`${dict.project} ${String(index+1).padStart(2,'0')}`;
  }
  try { localStorage.setItem('ali-portfolio-language',language); } catch (_) { /* non-fatal */ }
}
$('#lang-toggle').addEventListener('click',()=>applyLanguage(currentLanguage==='en'?'ar':'en'));
applyLanguage(currentLanguage);

// Scroll-triggered reveal: content remains accessible with JS disabled and reduced motion.
const revealElements=$$('.reveal');
if('IntersectionObserver' in window && !reducedMotion){
  const revealObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){entry.target.classList.add('is-visible');observer.unobserve(entry.target);}
    });
  },{threshold:.07,rootMargin:'0px 0px -35px 0px'});
  revealElements.forEach(el=>revealObserver.observe(el));
} else revealElements.forEach(el=>el.classList.add('is-visible'));
// Kick off animation in the next paint, after CSS is ready.
requestAnimationFrame(()=>document.body.classList.add('page-loaded'));

// Filters intentionally group projects by range: no unverified video categories.
$$('.filter').forEach(button=>button.addEventListener('click',()=>{
  const group=button.dataset.filter;
  $$('.filter').forEach(b=>{
    const active=b===button;
    b.classList.toggle('active',active);
    b.setAttribute('aria-pressed',String(active));
  });
  $$('.project-card').forEach(card=>{
    const visible=group==='all'||card.dataset.group===group;
    card.hidden=!visible;
  });
}));


// Project thumbnail strategy:
// 1. Prefer a real, owner-provided still at assets/thumbs/project-01.webp ... project-06.webp.
// 2. Try Instagram's public media URL (not guaranteed; policies differ by post/browser).
// 3. Otherwise display the source Instagram embed cropped inside the project card.
//    A fallback label and direct Instagram link remain if previews are blocked.
// No AI/generated/synthetic stills are used as project thumbnails.
function loadProjectPreview(stage) {
  if (stage.dataset.started) return;
  stage.dataset.started = '1';
  const i = Number(stage.dataset.preview);
  const shortcode = POSTS[i];
  if (!shortcode) return;
  const localPath = `assets/thumbs/project-${String(i+1).padStart(2,'0')}.webp`;
  const publicMediaURL = `https://www.instagram.com/p/${encodeURIComponent(shortcode)}/media/?size=l`;
  const attemptImage = (url,success,failed) => {
    const img = new Image();
    img.className='preview-image';
    img.alt='';
    img.decoding='async';
    img.onload=()=>{
      // Tiny tracking pixels / invalid results should not count as a thumbnail.
      if(img.naturalWidth<120||img.naturalHeight<120){failed();return;}
      stage.append(img);
      stage.classList.add('has-image');
      success();
    };
    img.onerror=failed;
    img.src=url;
  };
  const useEmbed=()=>{
    const frame=document.createElement('iframe');
    frame.className='preview-embed';
    frame.title=`Instagram preview ${i+1}`;
    frame.loading='lazy';
    frame.tabIndex=-1;
    frame.setAttribute('aria-hidden','true');
    frame.setAttribute('referrerpolicy','strict-origin-when-cross-origin');
    frame.src=`https://www.instagram.com/p/${encodeURIComponent(shortcode)}/embed/`;
    frame.addEventListener('load',()=>stage.classList.add('has-embed'),{once:true});
    stage.append(frame);
    stage.classList.add('embed-attempted');
  };
  attemptImage(localPath,()=>{},()=>attemptImage(publicMediaURL,()=>{},useEmbed));
}
const previewStages=$$('.project-preview');
if('IntersectionObserver' in window){
  const previewObserver=new IntersectionObserver((entries,observer)=>{
    entries.forEach(entry=>{if(entry.isIntersecting){loadProjectPreview(entry.target);observer.unobserve(entry.target);}});
  },{rootMargin:'500px 0px'});
  previewStages.forEach(el=>previewObserver.observe(el));
}else previewStages.forEach(loadProjectPreview);

// Instagram embeds can be blocked by third-party privacy policies: always include direct link.
const projectDialog=$('#project-dialog');
const projectFrame=$('#project-iframe');
function showProject(index){
  if(!Number.isInteger(index)||!POSTS[index]) return;
  const url=`https://www.instagram.com/p/${POSTS[index]}/`;
  const embedUrl=`https://www.instagram.com/p/${POSTS[index]}/embed/`;
  projectDialog.dataset.project=String(index);
  $('#dialog-title').textContent=`${COPY[currentLanguage].project} ${String(index+1).padStart(2,'0')}`;
  $('#dialog-external').href=url;
  projectFrame.title=`Instagram ${COPY[currentLanguage].project.toLowerCase()} ${index+1}`;
  projectFrame.src=embedUrl;
  document.body.classList.add('modal-open');
  if(typeof projectDialog.showModal==='function') projectDialog.showModal();
  else window.open(url,'_blank','noopener,noreferrer');
}
$$('[data-project]').forEach(button=>button.addEventListener('click',()=>showProject(Number(button.dataset.project))));
$('#close-dialog').addEventListener('click',()=>projectDialog.close());
projectDialog.addEventListener('click',event=>{
  const rect=projectDialog.getBoundingClientRect();
  if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom) projectDialog.close();
});
projectDialog.addEventListener('close',()=>{
  projectFrame.removeAttribute('src');
  document.body.classList.remove('modal-open');
});

// Visual-only interaction. Never prevents normal links, keyboard access or scrolling.
if(hoverMotion){
  $$('.project-visual').forEach(card=>{
    card.addEventListener('pointermove',event=>{
      const r=card.getBoundingClientRect();
      const x=event.clientX-r.left,y=event.clientY-r.top;
      card.style.setProperty('--mouse-x',`${x}px`);
      card.style.setProperty('--mouse-y',`${y}px`);
      card.style.setProperty('--rotate-x',`${((.5-y/r.height)*3).toFixed(2)}deg`);
      card.style.setProperty('--rotate-y',`${((x/r.width-.5)*3).toFixed(2)}deg`);
    });
    card.addEventListener('pointerleave',()=>{
      card.style.setProperty('--rotate-x','0deg');card.style.setProperty('--rotate-y','0deg');
    });
  });
  $$('.magnetic').forEach(button=>{
    button.addEventListener('pointermove',event=>{
      const r=button.getBoundingClientRect();
      const x=(event.clientX-r.left-r.width/2)*.1;
      const y=(event.clientY-r.top-r.height/2)*.13;
      button.style.setProperty('--mag-x',`${x.toFixed(1)}px`);
      button.style.setProperty('--mag-y',`${y.toFixed(1)}px`);
    });
    button.addEventListener('pointerleave',()=>{
      button.style.setProperty('--mag-x','0px');button.style.setProperty('--mag-y','0px');
    });
  });
  const heroPhoto=$('#hero-media');
  heroPhoto.addEventListener('pointermove',e=>{
    const r=heroPhoto.getBoundingClientRect();
    const x=(e.clientX-r.left-r.width/2)/r.width*9;
    const y=(e.clientY-r.top-r.height/2)/r.height*9;
    heroPhoto.style.setProperty('--photo-x',`${x.toFixed(2)}px`);
    heroPhoto.style.setProperty('--photo-y',`${y.toFixed(2)}px`);
  });
  heroPhoto.addEventListener('pointerleave',()=>{
    heroPhoto.style.setProperty('--photo-x','0px');heroPhoto.style.setProperty('--photo-y','0px');
  });
}

// Passive progress indicator.
let scrollQueued=false;
function updateProgress(){
  const total=document.documentElement.scrollHeight-window.innerHeight;
  $('#scroll-progress').style.width=`${total>0?Math.min(100,Math.max(0,window.scrollY/total*100)):0}%`;
  scrollQueued=false;
}
window.addEventListener('scroll',()=>{
  if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateProgress);}
},{passive:true});
window.addEventListener('resize',updateProgress,{passive:true});
updateProgress();
$('#copyright-year').textContent=String(new Date().getFullYear());
