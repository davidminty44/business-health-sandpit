(()=>{
  if(document.body.dataset.concept!=='report')return;

  const reportMonths=[
    {
      slug:'aug-2026',label:'August 2026',short:'Aug 2026',previous:'July 2026',year:'August 2025',status:'Needs attention',healthy:false,asAt:'1 Sep 2026',
      moneyIn:24600,moneyInMonth:33000,moneyInYear:28100,moneyOut:31900,moneyOutMonth:27600,moneyOutYear:29400,netCash:-7300,netCashMonth:5400,netCashYear:-1300,outlook:12600,outlookChange:-18800,
      focus:{
        cash:{headline:'Cash is tight. Chasing finished work fixes it fastest.',body:"Net cash is -$7,300 this month, and money in is down while money out is up. The fastest way back isn't new sales — it's collecting work you've already done.",evidence:[['fa-file-text-o','8 overdue invoices · $47,820','$27,630 is tied up in the 3 oldest invoices.'],['fa-clock-o','INV-2841 · $12,400','Largest invoice · 68 days overdue'],['fa-briefcase','11 completed jobs · $38,900','Finished work that has not been invoiced.']],actions:['Chase INV-2841 first — it is the biggest and the oldest.','Follow up the other two invoices over 60 days overdue.','Invoice JB2237, JB2240 and JB2234 — $23,450 ready to send today.']},
        profit:{headline:'Profit margin is 19% this month — one job is dragging it down.',body:'Revenue was $42,800 and job costs were $34,700, leaving $8,100 gross profit. The lowest-margin job needs a closer look.',evidence:[['fa-briefcase','JB2208 · Bellhaven Rest Home','33% margin · $2,060 gross profit'],['fa-briefcase','JB2216 · Whitmore Family','38% margin · $837 gross profit'],['fa-exclamation-circle','JB2231 · Kererū Café','13% margin · well below the other jobs']],actions:["Check Kererū Café's costs against the original quote to see what ran over.","Use Bellhaven Rest Home's 33% margin when pricing similar work.",'Review labour and material costs on jobs under 20% before invoicing.']},
        work:{headline:'Quote win rate is 56% — keep the pipeline moving.',body:"You're winning more than half of decided quotes, but $18,900 of open quotes have gone quiet for 14 days or more.",evidence:[['fa-calculator','8 open quotes · $34,500','$15,600 fresh · $18,900 waiting 14+ days'],['fa-check-circle','9 accepted · $42,700','Compared with 7 declined · $30,900'],['fa-inbox','3 enquiries need a quote','ENQ0025 arrived yesterday.']],actions:['Follow up the 3 quiet quotes, starting with QT01042 for $9,200.','Quote ENQ0025 while the enquiry is still fresh.','Review why 7 quotes were declined and look for a pattern.']}
      }
    },
    {
      slug:'jul-2026',label:'July 2026',short:'Jul 2026',previous:'June 2026',year:'July 2025',status:'Steady',healthy:true,asAt:'1 Aug 2026',
      moneyIn:33000,moneyInMonth:29100,moneyInYear:30200,moneyOut:27600,moneyOutMonth:28100,moneyOutYear:26500,netCash:5400,netCashMonth:1000,netCashYear:3700,outlook:31400,outlookChange:-3200,
      focus:{
        cash:{headline:'Cash is positive, but collection still matters.',body:'Net cash was $5,400 in July. Keeping overdue work moving will protect the cash already in the business.',evidence:[['fa-money','Money in · $33,000','11 customer payments received'],['fa-file-text-o','7 overdue invoices · $39,200','Oldest invoice is 52 days overdue'],['fa-briefcase','8 completed jobs · $27,600','Ready to turn into invoices.']],actions:['Follow up the two invoices over 45 days overdue.','Invoice the three highest-value completed jobs today.','Check next month’s payroll and supplier payments against expected receipts.']},
        profit:{headline:'Profit margin is 26% in July.',body:'Gross profit was $12,000 on $46,100 revenue. Two fixed-price jobs performed above plan and labour recovery was healthy.',evidence:[['fa-line-chart','Gross margin · 26%','Gross profit · $12,000'],['fa-briefcase','JB2198 · Ashbury School','36% margin · completed on plan'],['fa-wrench','Labour recovery · 91%','Timesheets were complete']],actions:['Reuse the Ashbury School estimate for similar work.','Check the two jobs below 20% margin before final invoicing.','Keep timesheets up to date so labour recovery stays visible.']},
        work:{headline:'The pipeline is steady, but five quotes need a decision.',body:'Open quote value held at $41,800. More than half has been waiting for a customer response for two weeks.',evidence:[['fa-calculator','10 open quotes · $41,800','$23,400 waiting 14+ days'],['fa-check-circle','Quote win rate · 48%','9 accepted · 10 declined'],['fa-inbox','4 enquiries need a quote','Two arrived in the last 48 hours.']],actions:['Follow up the five quiet quotes before sending new estimates.','Quote the two newest enquiries today.','Record decline reasons to improve the next round of pricing.']}
      }
    },
    {
      slug:'jun-2026',label:'June 2026',short:'Jun 2026',previous:'May 2026',year:'June 2025',status:'Steady',healthy:true,asAt:'1 Jul 2026',
      moneyIn:29100,moneyInMonth:27300,moneyInYear:26100,moneyOut:28100,moneyOutMonth:26800,moneyOutYear:25500,netCash:1000,netCashMonth:500,netCashYear:600,outlook:34600,outlookChange:1400,
      focus:{
        cash:{headline:'Cash stayed positive, with little room for delays.',body:'Net cash was $1,000. Money in and money out were close, so late customer payments could still put pressure on the month ahead.',evidence:[['fa-money','Money in · $29,100','10 customer payments received'],['fa-money','Money out · $28,100','Bills, wages and expenses'],['fa-file-text-o','6 overdue invoices · $31,700','Two have been overdue for more than 30 days.']],actions:['Chase the two invoices over 30 days overdue.','Confirm payment dates for the three largest invoices due in July.','Review recurring outgoings before the next payroll run.']},
        profit:{headline:'Margin is 24%, but material costs need attention.',body:'Gross profit was $10,200 on $42,500 revenue. Three plumbing jobs carried high material costs that reduced their margins.',evidence:[['fa-line-chart','Gross margin · 24%','Gross profit · $10,200'],['fa-shopping-cart','Material costs · $18,600','Largest job cost category'],['fa-briefcase','3 jobs below 20% margin','All included unquoted material changes.']],actions:['Add variations before completing work that changes material scope.','Review supplier pricing on the three low-margin jobs.','Set a margin check before fixed-price quotes are accepted.']},
        work:{headline:'Win rate is 51%, and new enquiries need attention.',body:'You converted more than half of decided quotes, but only five new enquiries arrived in June. The next month depends on following up open work.',evidence:[['fa-check-circle','Quote win rate · 51%','8 accepted · 7 declined'],['fa-calculator','7 open quotes · $29,600','$12,800 waiting 14+ days'],['fa-inbox','5 new enquiries','Two still need a quote']],actions:['Follow up the three quiet quotes this week.','Contact recent customers about upcoming maintenance work.','Respond to new enquiries within one business day.']}
      }
    }
  ];
  const focusKeys=['cash','profit','work'];
  const pages=['snapshot','cash','profit','work'];
  const summaryBodies={
    'aug-2026':'Cash collection is the first priority. The pages that follow explain what is held up, which job reduced margin, and which quotes need attention.',
    'jul-2026':'Cash finished positive and margin held up. The pages that follow show what still needs collecting, where profit came from, and which quotes need a decision.',
    'jun-2026':'Cash stayed just above break-even. The pages that follow explain the collection risk, rising material costs, and how to protect the next month of work.'
  };
  const report2Priorities={
    'aug-2026':{cash:'Collect overdue invoices and bill finished work.',profit:'Review the low-margin Kererū Café job.',work:'Follow up quotes that have gone quiet.'},
    'jul-2026':{cash:'Keep overdue work moving to protect cash.',profit:'Repeat what worked on profitable jobs.',work:'Get five open quotes to a decision.'},
    'jun-2026':{cash:'Chase overdue invoices before cash gets tight.',profit:'Control material costs and quote variations.',work:'Follow up quotes and reply to new enquiries.'}
  };
  const chatSuggestions={
    report:[['What changed most in this report?','What changed most?'],['What should I do first?','What should I do first?'],['Which job needs attention?','Which job needs attention?'],['Which work should I follow up?','Which work should I follow up?']],
    cash:[['What should I collect first?','What should I collect first?'],['Which invoice should I chase first?','Which invoice first?'],['How can I improve cash fastest?','How can I improve cash?']],
    profit:[['Why was profit margin low?','Why was margin low?'],['Which job needs attention?','Which job needs attention?'],['What should I check first?','What should I check first?']],
    work:[['Which quotes needed a follow-up?','Which quotes needed follow-up?'],['Which enquiry should I quote first?','Which enquiry first?'],['What should I do first?','What should I do first?']]
  };
  const money=value=>`${value<0?'-':''}$${Math.abs(value).toLocaleString('en-AU')}`;
  const shortMonth=label=>{const parts=label.split(' ');return `${parts[0].slice(0,3)} ${parts[1]}`};
  const reportPanel=document.querySelector('#reportConcept');
  const archiveSelect=document.querySelector('#reportArchiveSelect');
  const snapshotTitle=document.querySelector('#reportSnapshotTitle');
  const generatedMeta=document.querySelector('#reportGeneratedMeta');
  const periodSummary=document.querySelector('#reportPeriodSummary');
  const healthTitle=document.querySelector('#reportHealthTitle');
  const healthStatus=document.querySelector('#reportHealthStatus');
  const chatDrawer=document.querySelector('#reportChatDrawer');
  const chatBackdrop=document.querySelector('.report-chat-backdrop');
  const chatContext=document.querySelector('#reportChatContext span');
  const chatThread=document.querySelector('#reportChatThread');
  const chatForm=document.querySelector('#reportChatForm');
  const chatInput=document.querySelector('#reportChatInput');
  const pageTabs=Array.from(document.querySelectorAll('[data-report-page]'));
  const pagePanels=Array.from(document.querySelectorAll('[data-report-panel]'));
  const variantTabs=Array.from(document.querySelectorAll('[data-report-variant]'));
  const variantPanels=Array.from(document.querySelectorAll('[data-report-variant-panel]'));
  const report2ArchiveSelect=document.querySelector('#report2ArchiveSelect');
  const report2Title=document.querySelector('#report2Title');
  const report2GeneratedMeta=document.querySelector('#report2GeneratedMeta');
  const report2Period=document.querySelector('#report2Period');
  const report2HealthTitle=document.querySelector('#report2HealthTitle');
  const report2ChatToggle=document.querySelector('#report2ChatToggle');
  const report2ChatThread=document.querySelector('#report2ChatThread');
  const report2ChatForm=document.querySelector('#report2ChatForm');
  const report2ChatInput=document.querySelector('#report2ChatInput');
  const report2Companion=document.querySelector('.report2-companion');
  const query=new URLSearchParams(window.location.search);
  const requestedSnapshot=query.get('snapshot')||query.get('month');
  let monthIndex=Math.max(0,reportMonths.findIndex(month=>month.slug===requestedSnapshot));
  let activePage=pages.includes(query.get('page'))?query.get('page'):'snapshot';
  let activeVariant=query.get('variant')==='2'?'2':'1';
  let activeFocus='cash';
  let lastChatTrigger=null;
  let toastTimer;

  const reportToast=message=>{
    const toast=document.querySelector('#toast');
    document.querySelector('#toastMessage').textContent=message;
    toast.hidden=false;
    window.clearTimeout(toastTimer);
    toastTimer=window.setTimeout(()=>{toast.hidden=true},4200);
  };

  const setUrl=()=>{
    const url=new URL(window.location.href);
    url.searchParams.set('concept','report');
    url.searchParams.set('snapshot',reportMonths[monthIndex].slug);
    url.searchParams.set('variant',activeVariant);
    if(activeVariant==='1')url.searchParams.set('page',activePage);else url.searchParams.delete('page');
    url.searchParams.delete('month');
    url.searchParams.delete('compare');
    window.history.replaceState({},'',url);
  };

  const deltaCopy=(key,current,reference,label)=>{
    const difference=current-reference;
    const increased=difference>0;
    const neutral=difference===0;
    const good=key==='moneyOut'?!increased:increased;
    if(neutral)return {className:'',icon:'fa-minus',text:`No change vs ${label}`};
    return {className:good?'positive':'negative',icon:`fa-arrow-${increased?'up':'down'}`,text:`${increased?'Up':'Down'} ${money(Math.abs(difference))} vs ${label}`};
  };

  const renderDelta=(element,copy)=>{
    element.classList.remove('positive','negative');
    if(copy.className)element.classList.add(copy.className);
    element.innerHTML=`<i class="fa ${copy.icon}" aria-hidden="true"></i>${copy.text}`;
  };

  const renderMetric=key=>{
    const month=reportMonths[monthIndex];
    reportPanel.querySelector(`[data-report-value="${key}"]`).textContent=money(month[key]);
    renderDelta(reportPanel.querySelector(`[data-report-delta-month="${key}"]`),deltaCopy(key,month[key],month[`${key}Month`],shortMonth(month.previous)));
    renderDelta(reportPanel.querySelector(`[data-report-delta-year="${key}"]`),deltaCopy(key,month[key],month[`${key}Year`],shortMonth(month.year)));
  };

  const renderFocus=()=>{
    const month=reportMonths[monthIndex];
    focusKeys.forEach(key=>{
      const focus=month.focus[key];
      const panel=reportPanel.querySelector(`[data-report-panel="${key}"]`);
      panel.querySelector('[data-focus-headline]').textContent=focus.headline;
      panel.querySelector('[data-focus-body]').textContent=focus.body;
      panel.querySelector('[data-focus-evidence]').innerHTML=focus.evidence.map(item=>`<button class="report-evidence-row" type="button" data-report-source="${item[1]}"><i class="fa ${item[0]}" aria-hidden="true"></i><span><strong>${item[1]}</strong><small>${item[2]}</small></span><i class="fa fa-angle-right" aria-hidden="true"></i></button>`).join('');
      panel.querySelector('[data-focus-actions]').innerHTML=focus.actions.map(action=>`<li>${action}</li>`).join('');
    });
  };

  const renderReport2=()=>{
    const month=reportMonths[monthIndex];
    report2ArchiveSelect.value=month.slug;
    report2Title.textContent=`${month.label} briefing`;
    report2GeneratedMeta.textContent='Sent to Office team';
    report2Period.textContent=`Compared with ${month.previous} and ${month.year}`;
    report2HealthTitle.classList.toggle('healthy',month.healthy);
    report2HealthTitle.querySelector('.fa').className=`fa ${month.healthy?'fa-check-circle':'fa-exclamation-circle'}`;
    report2HealthTitle.querySelector('[data-report2-health]').textContent=`${month.status} this month`;
    ['moneyIn','moneyOut','netCash'].forEach(key=>{
      document.querySelector(`[data-report2-value="${key}"]`).textContent=money(month[key]);
      const monthCopy=deltaCopy(key,month[key],month[`${key}Month`],shortMonth(month.previous));
      const yearCopy=deltaCopy(key,month[key],month[`${key}Year`],shortMonth(month.year));
      const monthDelta=document.querySelector(`[data-report2-delta="${key}"]`);
      const yearDelta=document.querySelector(`[data-report2-delta-year="${key}"]`);
      monthDelta.textContent=monthCopy.text;
      yearDelta.textContent=yearCopy.text;
      monthDelta.className=monthCopy.className;
      yearDelta.className=yearCopy.className;
    });
    const report2Net=document.querySelector('.report2-metric.net');
    report2Net.classList.toggle('negative',month.netCash<0);
    document.querySelector('[data-report2-value="outlook"]').textContent=money(month.outlook);
    const outlookDelta=document.querySelector('[data-report2-outlook]');
    outlookDelta.textContent=`${month.outlookChange<0?'Down':'Up'} ${money(Math.abs(month.outlookChange))} over 8 weeks`;
    outlookDelta.classList.toggle('negative',month.outlookChange<0);
    outlookDelta.classList.toggle('positive',month.outlookChange>0);
    focusKeys.forEach(key=>{
      const focus=month.focus[key];
      document.querySelector(`[data-report2-priority="${key}"]`).textContent=report2Priorities[month.slug][key];
      const section=document.querySelector(`[data-report2-section="${key}"]`);
      section.querySelector('[data-report2-headline]').textContent=focus.headline;
      section.querySelector('[data-report2-body]').textContent=focus.body;
      section.querySelector('[data-report2-evidence]').innerHTML=focus.evidence.map(item=>`<button class="report-evidence-row" type="button" data-report-source="${item[1]}"><i class="fa ${item[0]}" aria-hidden="true"></i><span><strong>${item[1]}</strong><small>${item[2]}</small></span><i class="fa fa-angle-right" aria-hidden="true"></i></button>`).join('');
      section.querySelector('[data-report2-actions]').innerHTML=focus.actions.map(action=>`<li>${action}</li>`).join('');
    });
    document.querySelector('.report2-note span').textContent=`Based on Tradify and connected accounting data up to ${month.asAt}. This briefing won't update after that.`;
    report2ChatToggle.querySelector('small').textContent=`Based on ${month.label}`;
  };

  const renderSnapshot=()=>{
    const month=reportMonths[monthIndex];
    archiveSelect.value=month.slug;
    snapshotTitle.textContent=month.label;
    generatedMeta.textContent=`Generated ${month.asAt} · Emailed to Office team`;
    periodSummary.textContent=`${month.label} report · compared with ${month.previous} and ${month.year}`;
    healthStatus.textContent=`${month.status} this month`;
    healthTitle.classList.toggle('healthy',month.healthy);
    healthTitle.querySelector('.fa').className=`fa ${month.healthy?'fa-check-circle':'fa-exclamation-circle'}`;
    reportPanel.querySelector('[data-report-summary-headline]').textContent=month.focus.cash.headline;
    reportPanel.querySelector('[data-report-summary-body]').textContent=summaryBodies[month.slug];
    chatContext.textContent=`Grounded in the ${month.label} report`;
    renderMetric('moneyIn');
    renderMetric('moneyOut');
    renderMetric('netCash');
    const netCard=reportPanel.querySelector('[data-report-net-card]');
    netCard.classList.toggle('negative',month.netCash<0);
    reportPanel.querySelector('[data-report-value="outlook"]').textContent=money(month.outlook);
    const outlookChange=reportPanel.querySelector('[data-report-outlook-change]');
    const outlookDown=month.outlookChange<0;
    outlookChange.classList.toggle('negative',outlookDown);
    outlookChange.classList.toggle('positive',!outlookDown);
    outlookChange.innerHTML=`<i class="fa fa-arrow-${outlookDown?'down':'up'}" aria-hidden="true"></i>${outlookDown?'Down':'Up'} ${money(Math.abs(month.outlookChange))} over 8 weeks`;
    reportPanel.querySelector('.report-note').innerHTML=`<i class="fa fa-lock" aria-hidden="true"></i>This report uses Tradify and connected accounting data recorded up to ${month.asAt}. It won't change after that.`;
    renderFocus();
    renderReport2();
    setUrl();
  };

  const activatePage=(page,focus=true)=>{
    activePage=page;
    if(focusKeys.includes(page))activeFocus=page;
    const selectedTab=pageTabs.find(tab=>tab.dataset.reportPage===page);
    pageTabs.forEach(tab=>{
      const selected=tab===selectedTab;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
    });
    pagePanels.forEach(panel=>{panel.hidden=panel.dataset.reportPanel!==page});
    const tabList=selectedTab.parentElement;
    if(tabList.scrollWidth>tabList.clientWidth)tabList.scrollTo({left:selectedTab.offsetLeft-(tabList.clientWidth-selectedTab.offsetWidth)/2,behavior:'smooth'});
    setUrl();
    if(focus)reportPanel.querySelector(`[data-report-panel="${page}"]`).focus({preventScroll:true});
  };

  const inertStates=new Map();
  const setReportContentInert=inert=>{
    const targets=document.querySelectorAll('.sidebar,.mobile-header,.reports-list,.breadcrumb,.report-header,.report-archive-bar,.report-reader,#reportConcept>.monthly-report>.report-note');
    targets.forEach(target=>{
      if(inert){inertStates.set(target,target.inert);target.inert=true}
      else target.inert=inertStates.get(target)??false;
    });
    if(!inert)inertStates.clear();
  };

  const renderChatSuggestions=context=>{
    const buttons=Array.from(document.querySelectorAll('[data-report-question]'));
    const suggestions=chatSuggestions[context]||chatSuggestions.report;
    buttons.forEach((button,index)=>{
      const suggestion=suggestions[index];
      button.hidden=!suggestion;
      if(suggestion){button.dataset.reportQuestion=suggestion[0];button.textContent=suggestion[1]}
    });
  };

  const openChat=(trigger,focusKey)=>{
    if(focusKey)activeFocus=focusKey;
    lastChatTrigger=trigger;
    renderChatSuggestions(focusKey||'report');
    chatDrawer.hidden=false;
    chatBackdrop.hidden=false;
    setReportContentInert(true);
    document.body.classList.add('report-chat-open');
    if(focusKey)appendSystem(`Asking about page ${pages.indexOf(focusKey)+1}: ${reportMonths[monthIndex].focus[focusKey].headline}`);
    chatInput.focus();
  };

  const closeChat=()=>{
    if(chatDrawer.hidden)return;
    chatDrawer.hidden=true;
    chatBackdrop.hidden=true;
    setReportContentInert(false);
    document.body.classList.remove('report-chat-open');
    lastChatTrigger?.focus();
  };

  const appendSystem=text=>{
    const message=document.createElement('div');
    message.className='report-chat-message system';
    message.textContent=text;
    chatThread.append(message);
    chatThread.scrollTop=chatThread.scrollHeight;
  };

  const appendMessage=(role,text,source)=>{
    const message=document.createElement('article');
    message.className=`report-chat-message ${role}`;
    if(role==='assistant'){
      const icon=document.createElement('span');
      icon.className='tradify-ai-icon';
      icon.setAttribute('aria-hidden','true');
      message.append(icon);
    }
    const bubble=document.createElement('div');
    if(role==='assistant'){
      const name=document.createElement('strong');
      name.textContent='Business Analysis';
      bubble.append(name);
    }
    const copy=document.createElement('p');
    copy.textContent=text;
    bubble.append(copy);
    if(source){
      const sourceButton=document.createElement('button');
      sourceButton.className='report-chat-source';
      sourceButton.type='button';
      sourceButton.textContent=`Source: ${source}`;
      sourceButton.addEventListener('click',()=>reportToast(`In product, this opens ${source}.`));
      bubble.append(sourceButton);
    }
    message.append(bubble);
    chatThread.append(message);
    chatThread.scrollTop=chatThread.scrollHeight;
    return message;
  };

  const answerFor=question=>{
    const month=reportMonths[monthIndex];
    const normalised=question.toLowerCase();
    if(normalised.includes('changed most')||normalised.includes('do first'))return {text:`${month.focus.cash.headline} ${month.focus.cash.actions[0]}`,source:month.focus.cash.evidence[0][1]};
    if(normalised.includes('money out'))return {text:`The ${month.label} report recorded ${money(month.moneyOut)} going out, ${deltaCopy('moneyOut',month.moneyOut,month.moneyOutMonth,shortMonth(month.previous)).text.toLowerCase()}. Check the connected accounting categories to see which bills, wages or expenses changed.`,source:`Money out · ${money(month.moneyOut)}`};
    if(normalised.includes('invoice')||normalised.includes('chase')||normalised.includes('collect'))return {text:`The report recommends starting here: ${month.focus.cash.evidence[1][1]}. ${month.focus.cash.evidence[1][2]}.`,source:month.focus.cash.evidence[1][1]};
    if(normalised.includes('margin')||normalised.includes('profit')||normalised.includes('job'))return {text:`${month.focus.profit.headline} ${month.focus.profit.evidence[2][1]} — ${month.focus.profit.evidence[2][2]}.`,source:month.focus.profit.evidence[2][1]};
    if(normalised.includes('quote')||normalised.includes('enquiry')||normalised.includes('follow')||normalised.includes('work'))return {text:`${month.focus.work.body} ${month.focus.work.actions[0]}`,source:month.focus.work.evidence[0][1]};
    if(normalised.includes('fast')||normalised.includes('cash'))return {text:`${month.focus.cash.body} The report's first recommendation is to ${month.focus.cash.actions[0].charAt(0).toLowerCase()}${month.focus.cash.actions[0].slice(1)}`,source:`Net cash · ${money(month.netCash)}`};
    const focus=month.focus[activeFocus];
    return {text:`${focus.body} The report recommends that you ${focus.actions[0].charAt(0).toLowerCase()}${focus.actions[0].slice(1)}`,source:focus.evidence[0][1]};
  };

  const askQuestion=question=>{
    const clean=question.trim();
    if(!clean)return;
    appendMessage('user',clean);
    chatInput.value='';
    chatInput.disabled=true;
    const checking=appendMessage('assistant','Checking this report…');
    window.setTimeout(()=>{
      checking.remove();
      const answer=answerFor(clean);
      appendMessage('assistant',answer.text,answer.source);
      chatInput.disabled=false;
      chatInput.focus();
    },450);
  };

  const activateVariant=(variant,focus=false)=>{
    activeVariant=variant;
    if(variant==='2')closeChat();
    variantTabs.forEach(tab=>{
      const selected=tab.dataset.reportVariant===variant;
      tab.classList.toggle('active',selected);
      tab.setAttribute('aria-selected',String(selected));
      tab.tabIndex=selected?0:-1;
    });
    variantPanels.forEach(panel=>{panel.hidden=panel.dataset.reportVariantPanel!==variant});
    setUrl();
    if(focus)variantTabs.find(tab=>tab.dataset.reportVariant===variant).focus();
  };

  const setReport2ChatOpen=(open,focus=false)=>{
    report2Companion.classList.toggle('open',open);
    report2ChatToggle.setAttribute('aria-expanded',String(open));
    report2ChatToggle.querySelector('.fa-angle-up,.fa-angle-down').className=`fa fa-angle-${open?'up':'down'}`;
    if(open&&focus)report2ChatInput.focus();
  };

  const resetReport2Chat=()=>{
    report2ChatThread.innerHTML='<article class="report-chat-message assistant"><span class="tradify-ai-icon" aria-hidden="true"></span><div><strong>Business Analysis</strong><p>I can explain a number, priority or next step.</p></div></article>';
  };

  const appendReport2Message=(role,text,source)=>{
    const message=document.createElement('article');
    message.className=`report-chat-message ${role}`;
    if(role==='assistant'){
      const icon=document.createElement('span');
      icon.className='tradify-ai-icon';
      icon.setAttribute('aria-hidden','true');
      message.append(icon);
    }
    const bubble=document.createElement('div');
    if(role==='assistant'){
      const name=document.createElement('strong');
      name.textContent='Business Analysis';
      bubble.append(name);
    }
    const copy=document.createElement('p');
    copy.textContent=text;
    bubble.append(copy);
    if(source){
      const sourceButton=document.createElement('button');
      sourceButton.className='report-chat-source';
      sourceButton.type='button';
      sourceButton.textContent=`Source: ${source}`;
      sourceButton.addEventListener('click',()=>reportToast(`In product, this opens ${source}.`));
      bubble.append(sourceButton);
    }
    message.append(bubble);
    report2ChatThread.append(message);
    report2ChatThread.scrollTop=report2ChatThread.scrollHeight;
    return message;
  };

  const askReport2Question=question=>{
    const clean=question.trim();
    if(!clean)return;
    setReport2ChatOpen(true,true);
    appendReport2Message('user',clean);
    report2ChatInput.value='';
    report2ChatInput.disabled=true;
    const checking=appendReport2Message('assistant','Checking this briefing…');
    window.setTimeout(()=>{
      checking.remove();
      const answer=answerFor(clean);
      appendReport2Message('assistant',answer.text.replaceAll('report','briefing'),answer.source);
      report2ChatInput.disabled=false;
      report2ChatInput.focus();
    },450);
  };

  archiveSelect.addEventListener('change',()=>{
    monthIndex=reportMonths.findIndex(month=>month.slug===archiveSelect.value);
    closeChat();
    resetReport2Chat();
    activePage='snapshot';
    renderSnapshot();
    activatePage('snapshot',false);
  });
  document.querySelector('#reportDownload').addEventListener('click',()=>reportToast(`${reportMonths[monthIndex].label} Business Analysis PDF would download here.`));
  variantTabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>activateVariant(tab.dataset.reportVariant));
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();
      const target=event.key==='Home'?0:event.key==='End'?variantTabs.length-1:event.key==='ArrowRight'?(index+1)%variantTabs.length:(index-1+variantTabs.length)%variantTabs.length;
      activateVariant(variantTabs[target].dataset.reportVariant,true);
    });
  });
  report2ArchiveSelect.addEventListener('change',()=>{
    monthIndex=reportMonths.findIndex(month=>month.slug===report2ArchiveSelect.value);
    activePage='snapshot';
    resetReport2Chat();
    renderSnapshot();
  });
  document.querySelectorAll('[data-report2-open]').forEach(button=>button.addEventListener('click',()=>{
    const section=document.querySelector(`[data-report2-section="${button.dataset.report2Open}"]`);
    section.open=true;
    section.scrollIntoView({behavior:'smooth',block:'start'});
    section.querySelector('summary').focus({preventScroll:true});
  }));
  document.querySelectorAll('[data-report2-ask]').forEach(button=>button.addEventListener('click',()=>{
    activeFocus=button.dataset.report2Ask;
    setReport2ChatOpen(true,true);
    appendReport2Message('assistant',`I’m looking at “${reportMonths[monthIndex].focus[activeFocus].headline}”. What would you like to know?`);
  }));
  report2ChatToggle.addEventListener('click',()=>setReport2ChatOpen(!report2Companion.classList.contains('open'),true));
  document.querySelectorAll('[data-report2-question]').forEach(button=>button.addEventListener('click',()=>askReport2Question(button.dataset.report2Question)));
  report2ChatForm.addEventListener('submit',event=>{event.preventDefault();askReport2Question(report2ChatInput.value)});
  pageTabs.forEach((tab,index)=>{
    tab.addEventListener('click',()=>activatePage(tab.dataset.reportPage,false));
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();
      const target=event.key==='Home'?0:event.key==='End'?pageTabs.length-1:event.key==='ArrowRight'?(index+1)%pageTabs.length:(index-1+pageTabs.length)%pageTabs.length;
      activatePage(pageTabs[target].dataset.reportPage,false);
      pageTabs[target].focus();
    });
  });
  document.querySelectorAll('[data-report-go]').forEach(button=>button.addEventListener('click',()=>activatePage(button.dataset.reportGo)));
  document.querySelectorAll('[data-report-chat-open]').forEach(button=>button.addEventListener('click',()=>openChat(button)));
  document.querySelectorAll('[data-report-ask]').forEach(button=>button.addEventListener('click',()=>openChat(button,button.dataset.reportAsk)));
  document.querySelectorAll('[data-report-chat-close]').forEach(button=>button.addEventListener('click',closeChat));
  reportPanel.addEventListener('click',event=>{
    const source=event.target.closest('[data-report-source]');
    if(source)reportToast(`In product, this opens ${source.dataset.reportSource}.`);
  });
  document.querySelectorAll('[data-report-question]').forEach(button=>button.addEventListener('click',()=>askQuestion(button.dataset.reportQuestion)));
  chatForm.addEventListener('submit',event=>{event.preventDefault();askQuestion(chatInput.value)});
  document.addEventListener('keydown',event=>{
    if(chatDrawer.hidden)return;
    if(event.key==='Escape'){
      event.preventDefault();
      closeChat();
      return;
    }
    if(event.key==='Tab'){
      const focusable=Array.from(chatDrawer.querySelectorAll('button,input')).filter(element=>!element.disabled);
      const first=focusable[0];
      const last=focusable[focusable.length-1];
      if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus()}
      else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus()}
    }
  });
  renderSnapshot();
  activatePage(activePage,false);
  setReport2ChatOpen(false);
  activateVariant(activeVariant,false);
})();
