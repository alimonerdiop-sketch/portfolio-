/* Signature upgrades: no analytics, no external libraries, no backend. */
'use strict';
(() => {
  const $ = s => document.querySelector(s);
  const $$ = s => Array.from(document.querySelectorAll(s));
  const copyLinkButton = $('#share-portfolio');
  const briefDialog = $('#signature-brief-dialog');
  const briefForm = $('#signature-brief-form');
  const emailLink = $('#signature-brief-email');
  const whatsappLink = $('#signature-brief-whatsapp');
  const mobileCta = $('#signature-mobile-cta');
  const isArabic = () => document.documentElement.lang === 'ar';
  const text = (en,ar) => isArabic() ? ar : en;
  const closeBrief = $('#signature-close-brief');
  let lastTrigger = null;
  function openBrief(event) {
    if (event) event.preventDefault();
    lastTrigger = event && event.currentTarget;
    if (briefDialog && typeof briefDialog.showModal === 'function') {
      briefDialog.showModal();
      document.body.classList.add('brief-open');
      $('#brief-service').focus({preventScroll:true});
    } else { location.href = '#contact'; }
  }
  $$('[data-open-brief]').forEach(btn => btn.addEventListener('click', openBrief));
  closeBrief?.addEventListener('click', () => briefDialog.close());
  briefDialog.addEventListener('click', evt => {
    if (evt.target === briefDialog) briefDialog.close();
  });
  briefDialog.addEventListener('close', () => {
    document.body.classList.remove('brief-open');
    lastTrigger?.focus({preventScroll:true});
  });
  const serviceLabels={
    reels:['Reels / Shorts Editing','مونتاج ريلز / شورتس'],
    promotional:['Promotional Video','فيديو ترويجي'],
    motion:['Motion Graphics','موشن غرافيك'],
    other:['Other Video Project','مشروع فيديو آخر']
  };
  const deadlineLabels={
    flexible:['Flexible','مرنة'],
    'this-week':['This week','خلال هذا الأسبوع'],
    'two-weeks':['Within two weeks','خلال أسبوعين'],
    'this-month':['This month','خلال هذا الشهر']
  };
  function message(){
    const type = briefForm.elements.service.value;
    const volume = briefForm.elements.volume.value;
    const deadline = briefForm.elements.deadline.value;
    const details = briefForm.elements.details.value.trim();
    const arabic=isArabic();
    const service=(serviceLabels[type]||serviceLabels.other)[arabic?1:0];
    const when=(deadlineLabels[deadline]||deadlineLabels.flexible)[arabic?1:0];
    return arabic
      ? `مرحباً علي، شاهدت موقع أعمالك وأود الاستفسار عن مشروع.\nالخدمة: ${service}\nعدد الفيديوهات: ${volume}\nالمدة المطلوبة: ${when}${details?'\nالتفاصيل: '+details:''}\nهل يمكننا مناقشة التفاصيل؟`
      : `Hello Ali, I saw your portfolio and would like to discuss a project.\nService: ${service}\nNumber of videos: ${volume}\nPreferred timeline: ${when}${details?'\nDetails: '+details:''}\nCan we discuss the scope?`;
  }
  function updateLinks(){
    whatsappLink.href = `https://wa.me/963934704123?text=${encodeURIComponent(message())}`;
    const subject = text('Video editing project inquiry','استفسار عن مشروع مونتاج');
    emailLink.href = `mailto:alimonerdiop@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message())}`;
  }
  briefForm.addEventListener('input', updateLinks);
  briefForm.addEventListener('change', updateLinks);
  const languageObserver=new MutationObserver(updateLinks);
  languageObserver.observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
  updateLinks();
  briefForm.addEventListener('submit', event => { event.preventDefault(); whatsappLink.click(); });
  if(copyLinkButton){
    copyLinkButton.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText('https://alimonerdiop-sketch.github.io/portfolio-/');
        const original = copyLinkButton.textContent;
        copyLinkButton.textContent=text('LINK COPIED ✓','تم نسخ الرابط ✓');
        setTimeout(()=>copyLinkButton.textContent=original,2000);
      } catch (_){
        window.prompt(text('Copy the portfolio link:','انسخ رابط الموقع:'),'https://alimonerdiop-sketch.github.io/portfolio-/');
      }
    });
  }
  function updateSticky(){
    if(!mobileCta) return;
    const contact=$('#contact');
    const isContactVisible=contact && contact.getBoundingClientRect().top < window.innerHeight;
    mobileCta.classList.toggle('is-ready',window.scrollY > 520 && !isContactVisible && !briefDialog.open);
  }
  window.addEventListener('scroll',updateSticky,{passive:true});
  window.addEventListener('resize',updateSticky,{passive:true});
  briefDialog.addEventListener('close',updateSticky);
  updateSticky();
})();
