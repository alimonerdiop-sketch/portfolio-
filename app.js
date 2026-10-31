/* Ali Moner Diop — Dark / Motion Portfolio. No frameworks, API keys, or build step required. */
'use strict';
document.documentElement.classList.add('js');

// Videos provided by the portfolio owner; thumbnails are loaded from YouTube.
const VIDEOS = ['u3aHSAtZgAo', 'beQJ7x53AN8', 'g1jD1QM3xI0', 'tC60OSAFGOk', 'am3RivPRmYA', 'f8CqDLjOGss'];
const COPY = {
  en: {
    navServices:'Services', sharePortfolio:'SHARE PORTFOLIO ↗',craftEyebrow:'THE DETAILS MATTER',craftTitle:'The craft<br><em>behind the cut.</em>',craftIntro:'From cleaning raw footage to polishing every transition, each edit is shaped for clarity, pace and impact.',craftOne:'Precision Editing',craftOneText:'Removing pauses and mistakes, then building a clear, engaging rhythm.',craftTwo:'Animated Typography',craftTwoText:'Purposeful captions and kinetic text that guide the viewer.',craftThree:'Motion & Visuals',craftThreeText:'Clean animations, icons and visual accents that support the story.',craftFour:'Finishing Touches',craftFourText:'Color refinement, sound effects and music for a cohesive finish.',startBrief:'START A PROJECT BRIEF ↗',stickyLabel:'Have a project in mind?',stickyAction:"LET'S TALK ↗",briefEyebrow:'PROJECT INQUIRY / 01',briefTitle:"Let's create<br><em>something great.</em>",briefIntro:"Tell me a little about your project. I'll prepare the message and open WhatsApp so you can send it yourself.",briefServiceLabel:'What do you need?',briefOptionReels:'Reels / Shorts Editing',briefOptionPromo:'Promotional Video',briefOptionMotion:'Motion Graphics',briefOptionOther:'Other Video Project',briefVolumeLabel:'Number of videos',briefDeadlineLabel:'Preferred timeline',briefTimelineFlexible:'Flexible',briefTimelineWeek:'This week',briefTimelineTwo:'Within two weeks',briefTimelineMonth:'This month',briefDetailsLabel:'Tell me about the footage or the idea',briefDetailsPlaceholder:'Format, duration, style, reference links...',briefSend:'CONTINUE TO WHATSAPP ↗',briefEmail:'OR SEND BY EMAIL',briefPrivacy:'This form does not send or store your information. You choose when to send the message via WhatsApp or email.',briefClose:'Close project inquiry',shareDone:'Portfolio link copied!',
    processOverline:"THE WORKFLOW",
    processTitle:"From raw footage<br>to ready to publish.",
    processIntro:"A focused post-production process for brands, agencies and creators, wherever they are based.",
    processStep1Title:"Send the footage",
    processStep1Text:"Share your recordings, reference style and publishing format.",
    processStep2Title:"Edit & animate",
    processStep2Text:"I refine pacing, captions, motion, color and audio to suit the brief.",
    processStep3Title:"Review & deliver",
    processStep3Text:"Review the edit and finalize the agreed deliverables.",
    faqOverline:"GOOD TO KNOW",
    faqTitle:"Frequently asked questions.",
    faq1Q:"Do you work remotely with clients in the GCC?",
    faq1A:"Yes. I take on remote video editing and motion graphics projects for clients in the UAE, Saudi Arabia, Kuwait and other Arab countries.",
    faq2Q:"Do I need to send already-filmed footage?",
    faq2A:"Yes. My role is post-production: I edit footage you provide and add visual and audio finishing based on your brief.",
    faq3Q:"Which types of videos can you edit?",
    faq3A:"Social media reels, short-form videos and promotional edits. Contact me with your project scope to discuss the right approach.",
    faq4Q:"How can I get a project quote?",
    faq4A:"Send your footage details, desired duration, examples and deadline via WhatsApp or email for a tailored discussion.",
    requestQuote:"DISCUSS A PROJECT ON WHATSAPP ↗",
    
    servicesOverline:'SERVICES FOR BRANDS & CREATORS',servicesTitle:'How I can help.',servicesIntro:'Remote video editing and motion graphics for brands, agencies and creators in the UAE, Saudi Arabia, Kuwait and across the Arab world.',serviceVideo:'Video Editing',serviceMotion:'Motion Graphics',skip:'Skip to content', navWork:'Work',navAbout:'About',navContact:'Contact',letsTalk:"LET'S TALK",
    experienceLabel:'YEARS OF CREATIVE EDITING', heroKicker:'INDEPENDENT VIDEO EDITOR & MOTION DESIGNER',introLine:"HI, I'M",
    heroDescription:'Five years of turning raw footage into compelling visual stories. Clean edits, intentional motion, and details that make people watch.',
    viewWork:'EXPLORE MY WORK',contactMe:'Get in touch <span aria-hidden="true">↗</span>',photoMeta:'CREATIVE / 2026',
    basedOn:'AVAILABLE FOR REMOTE PROJECTS',scrollDown:'SCROLL TO EXPLORE', selectedLabel:'THE COLLECTION',selectedFirst:'Selected',selectedSecond:'work.',
    workIntro:'A selection of my edits and motion projects. Every frame shaped with purpose.',projectsCount:'PROJECTS',
    allWork:'ALL WORK <sup>06</sup>',groupOne:'01 — 03',groupTwo:'04 — 06',clickToWatch:'SELECT A PROJECT TO VIEW ↗',
    projectType:'YOUTUBE SHORT',workFineprint:'Click any thumbnail to play the video here, without leaving this website.',
    aboutLabel:'ABOUT THE CREATIVE',aboutHeading:'Good editing<br/>is <em>felt.</em>',
    aboutText:"I'm Ali Moner Diop, a video editor and motion graphics designer with five years of experience. I craft social content, promotional videos and engaging motion using Adobe Premiere Pro, After Effects, Photoshop and Illustrator.",
    myTools:'MY DAILY TOOLKIT',contactLabel:"LET'S CONNECT",contactHeading:'Have a project<br/><em>in mind?</em>',
    contactDescription:"Let's turn your next idea into something worth watching. I'm one message away.",emailLabel:'EMAIL',
    footerQuote:'CRAFTED FRAME BY FRAME.',backToTop:'BACK TO TOP ↑',dialogKicker:'SELECTED WORK',
    dialogHint:"If the video cannot play here, open it on YouTube.",openInstagram:'WATCH ON YOUTUBE ↗',
    project:'Project',projectAction:'Open project',dialogClose:'Close project',switchTo:'Switch to Arabic',filterLabel:'Filter projects'
  },
  ar: {
    navServices:'الخدمات', sharePortfolio:'مشاركة الموقع ↗',craftEyebrow:'التفاصيل تصنع الفرق',craftTitle:'الحِرفة<br><em>وراء كل لقطة.</em>',craftIntro:'من تنظيف اللقطات الخام إلى صقل الانتقالات، أصنع مونتاجاً واضحاً ومتقناً يناسب الرسالة والجمهور.',craftOne:'مونتاج دقيق',craftOneText:'حذف السكتات والأخطاء وصناعة إيقاع ممتع وواضح.',craftTwo:'كتابة متحركة',craftTwoText:'نصوص وكابشنات متحركة ترشد عين المشاهد.',craftThree:'موشن وعناصر بصرية',craftThreeText:'تحريك أنيق وأيقونات وعناصر تخدم الفكرة.',craftFour:'اللمسات النهائية',craftFourText:'تحسين الألوان ومؤثرات صوتية وموسيقى مناسبة.',startBrief:'ابدأ تفاصيل مشروعك ↗',stickyLabel:'عندك مشروع؟',stickyAction:'تواصل معي ↗',briefEyebrow:'تفاصيل المشروع / 01',briefTitle:'لنصنع عملاً<br><em>يستحق المشاهدة.</em>',briefIntro:'أدخل تفاصيل مشروعك وسأجهز رسالة تفتح في واتساب لتراجعها وترسلها بنفسك.',briefServiceLabel:'ما الخدمة المطلوبة؟',briefOptionReels:'مونتاج ريلز / شورتس',briefOptionPromo:'فيديو ترويجي',briefOptionMotion:'موشن غرافيك',briefOptionOther:'مشروع فيديو آخر',briefVolumeLabel:'عدد الفيديوهات',briefDeadlineLabel:'المدة المطلوبة',briefTimelineFlexible:'مرنة',briefTimelineWeek:'خلال هذا الأسبوع',briefTimelineTwo:'خلال أسبوعين',briefTimelineMonth:'خلال هذا الشهر',briefDetailsLabel:'صف المواد المصورة أو فكرة مشروعك',briefDetailsPlaceholder:'القياس، المدة، الأسلوب، روابط مرجعية...',briefSend:'المتابعة عبر واتساب ↗',briefEmail:'أو الإرسال بالبريد',briefPrivacy:'لا يحفظ الموقع أو يرسل معلوماتك تلقائياً؛ أنت تختار إرسال الرسالة عبر واتساب أو البريد.',briefClose:'إغلاق نموذج الاستفسار',shareDone:'تم نسخ رابط الموقع!',
    processOverline:"مراحل العمل",
    processTitle:"من لقطات خام<br>إلى فيديو جاهز للنشر.",
    processIntro:"عملية مونتاج ومعالجة نهائية للعلامات التجارية والوكالات وصنّاع المحتوى عن بُعد.",
    processStep1Title:"إرسال المواد",
    processStep1Text:"أرسل اللقطات وأمثلة للأسلوب المطلوب ومقاس النشر.",
    processStep2Title:"المونتاج والتحريك",
    processStep2Text:"أعمل على الإيقاع والكتابة المتحركة والعناصر البصرية والألوان والصوت وفق متطلبات المشروع.",
    processStep3Title:"المراجعة والتسليم",
    processStep3Text:"مراجعة النسخة ثم تسليم الملفات المتفق عليها.",
    faqOverline:"أسئلة شائعة",
    faqTitle:"قبل أن نبدأ.",
    faq1Q:"هل تعمل عن بُعد مع عملاء الخليج؟",
    faq1A:"نعم، أعمل عن بُعد على مشاريع المونتاج والموشن غرافيك لعملاء الإمارات والسعودية والكويت وبقية الدول العربية.",
    faq2Q:"هل أرسل لك فيديوهات مصوّرة مسبقاً؟",
    faq2A:"نعم، اختصاصي مرحلة ما بعد التصوير: أمنتج اللقطات المقدمة من العميل وأضيف المعالجة البصرية والصوتية وفق المطلوب.",
    faq3Q:"ما أنواع الفيديوهات التي تعمل عليها؟",
    faq3A:"ريلز السوشال ميديا والفيديوهات القصيرة والإعلانات الترويجية. تواصل معي لبحث تفاصيل مشروعك.",
    faq4Q:"كيف أحصل على عرض سعر؟",
    faq4A:"أرسل تفاصيل اللقطات والمدة المطلوبة والأمثلة والموعد النهائي عبر واتساب أو البريد الإلكتروني.",
    requestQuote:"ناقش مشروعك عبر واتساب ↗",
    
    servicesOverline:'خدمات للشركات وصنّاع المحتوى',servicesTitle:'كيف يمكنني مساعدتك؟',servicesIntro:'مونتاج فيديو وموشن غرافيك عن بُعد للشركات والوكالات وصنّاع المحتوى في الإمارات والسعودية والكويت وبقية الدول العربية.',serviceVideo:'مونتاج الفيديو',serviceMotion:'الموشن غرافيك',skip:'تجاوز إلى المحتوى',navWork:'الأعمال',navAbout:'نبذة عني',navContact:'التواصل',letsTalk:'تواصل معي',
    experienceLabel:'سنوات من المونتاج الإبداعي', heroKicker:'مونتير فيديو ومصمم موشن غرافيك مستقل',introLine:'مرحباً، أنا',
    heroDescription:'خمس سنوات من تحويل اللقطات الخام إلى قصص بصرية جذابة. مونتاج متقن وحركة مدروسة وتفاصيل تصنع فرقاً في كل مشهد.',
    viewWork:'اكتشف أعمالي',contactMe:'تواصل معي <span aria-hidden="true">↗</span>',photoMeta:'إبداع / 2026',
    basedOn:'متاح للعمل على المشاريع عن بُعد',scrollDown:'مرر لاكتشاف المزيد',selectedLabel:'مجموعة الأعمال',selectedFirst:'مختارات من',selectedSecond:'أعمالي.',
    workIntro:'مجموعة مختارة من أعمال المونتاج والموشن غرافيك، صُمّم كل إطار فيها بعناية.',projectsCount:'أعمال',
    allWork:'جميع الأعمال <sup>06</sup>',groupOne:'01 — 03',groupTwo:'04 — 06',clickToWatch:'اختر عملاً للمشاهدة ↗',
    projectType:'فيديو من أعمالي',workFineprint:'اضغط على أي صورة مصغّرة لتشغيل الفيديو داخل الموقع.',
    aboutLabel:'نبذة عني',aboutHeading:'المونتاج الجيد<br/><em>يُشعَر به.</em>',
    aboutText:'أنا علي منير ديوب، مونتير فيديو ومصمم موشن غرافيك بخبرة خمس سنوات. أعمل على محتوى التواصل الاجتماعي والفيديوهات الترويجية والموشن غرافيك باستخدام Adobe Premiere Pro وAfter Effects وPhotoshop وIllustrator.',
    myTools:'البرامج التي أستخدمها',contactLabel:'لنتواصل',contactHeading:'هل لديك مشروع<br/><em>في ذهنك؟</em>',
    contactDescription:'لنحوّل فكرتك القادمة إلى محتوى يستحق المشاهدة. يمكنك التواصل معي مباشرة.',emailLabel:'البريد الإلكتروني',
    footerQuote:'صُنع بعناية، إطاراً بعد إطار.',backToTop:'العودة إلى الأعلى ↑',dialogKicker:'عمل مختار',
    dialogHint:'إذا تعذّر تشغيل الفيديو هنا، يمكنك فتحه في يوتيوب.',openInstagram:'مشاهدة على يوتيوب ↗',
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
  document.querySelector('#service-video').href=`services/video-editing/${language}/`;
  document.querySelector('#service-motion').href=`services/motion-graphics/${language}/`;
  document.documentElement.lang=language;
  document.documentElement.dir=language==='ar'?'rtl':'ltr';
  $$('[data-i18n]').forEach(el=>{
    const phrase=dict[el.dataset.i18n];
    if(phrase!==undefined) el.innerHTML=phrase; // Only trusted constant translation strings.
  });
  $$('[data-case]').forEach(link=>{link.href=`projects/${link.dataset.case}/${language}/`;link.textContent=language==='ar'?'تفاصيل المشروع ↗':'VIEW PROJECT DETAILS ↗';});
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


// Each card uses the actual public YouTube thumbnail for the owner's video.
// Display a clean local fallback when YouTube has no available thumbnail.
const previewStages=$$('.project-preview');
previewStages.forEach(stage=>{
  const index=Number(stage.dataset.preview);
  const id=VIDEOS[index];
  if(!id)return;
  const image=new Image();
  image.className='preview-image';
  image.alt='';
  image.loading='lazy';
  image.decoding='async';
  image.onload=()=>{
    // The default YouTube placeholder is 120px wide.
    if(image.naturalWidth<=120) {
      if(!image.src.includes('hqdefault.jpg')) image.src=`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
      else stage.classList.add('thumbnail-unavailable');
      return;
    }
    stage.classList.add('has-image');
  };
  image.onerror=()=>{
    if(!image.src.includes('hqdefault')) image.src=`https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
  };
  image.src=`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`;
  stage.appendChild(image);
});

const projectDialog=$('#project-dialog');
const projectFrame=$('#project-iframe');
function showProject(index){
  if(!Number.isInteger(index)||!VIDEOS[index])return;
  const id=VIDEOS[index];
  const url=`https://www.youtube.com/shorts/${id}`;
  projectDialog.dataset.project=String(index);
  $('#dialog-title').textContent=`${COPY[currentLanguage].project} ${String(index+1).padStart(2,'0')}`;
  $('#dialog-external').href=url;
  projectFrame.title=`YouTube ${COPY[currentLanguage].project} ${index+1}`;
  document.body.classList.add('modal-open');
  if(typeof projectDialog.showModal==='function'){
    projectDialog.showModal();
    projectFrame.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
  } else { document.body.classList.remove('modal-open'); window.open(url,'_blank','noopener,noreferrer'); }
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
  $('#floating-top').classList.toggle('is-visible', window.scrollY > 650);
  $('#scroll-progress').style.width=`${total>0?Math.min(100,Math.max(0,window.scrollY/total*100)):0}%`;
  scrollQueued=false;
}
window.addEventListener('scroll',()=>{
  if(!scrollQueued){scrollQueued=true;requestAnimationFrame(updateProgress);}
},{passive:true});
window.addEventListener('resize',updateProgress,{passive:true});
updateProgress();
$('#copyright-year').textContent=String(new Date().getFullYear());
