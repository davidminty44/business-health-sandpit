(()=>{
  if(document.body.dataset.concept!=='report')return;

  const reportMonths=[
    {
      slug:'aug-2026',label:'August 2026',short:'Aug 2026',previous:'July 2026',year:'August 2025',status:'Needs attention',healthy:false,asAt:'1 Sep 2026',
      moneyIn:24600,moneyInMonth:33000,moneyInYear:28100,moneyOut:31900,moneyOutMonth:27600,moneyOutYear:29400,netCash:-7300,netCashMonth:5400,netCashYear:-1300,outlook:12600,outlookChange:-18800,invoicesToChase:47820,invoicesCount:8,readyToInvoice:38900,readyJobs:11,bookedAhead:264500,grossProfit:8100,grossMargin:19,marginPrevious:26,
      focus:{
        cash:{headline:'Cash is tight. Chasing finished work fixes it fastest.',body:"Net cash is -$7,300 this month, and money in is down while money out is up. The fastest way back isn't new sales — it's collecting work you've already done.",evidence:[['fa-file-text-o','8 overdue invoices · $47,820','$27,630 is tied up in the 3 oldest invoices.'],['fa-clock-o','INV-2841 · $12,400','Largest invoice · 68 days overdue'],['fa-briefcase','11 completed jobs · $38,900','Finished work that has not been invoiced.']],actions:['Chase INV-2841 first — it is the biggest and the oldest.','Follow up the other two invoices over 60 days overdue.','Invoice JB2237, JB2240 and JB2234 — $23,450 ready to send today.']},
        profit:{headline:'Profit margin is 19% this month — one job is dragging it down.',body:'Revenue was $42,800 and job costs were $34,700, leaving $8,100 gross profit. The lowest-margin job needs a closer look.',evidence:[['fa-briefcase','JB2208 · Bellhaven Rest Home','33% margin · $2,060 gross profit'],['fa-briefcase','JB2216 · Whitmore Family','38% margin · $837 gross profit'],['fa-exclamation-circle','JB2231 · Kererū Café','13% margin · well below the other jobs']],actions:["Check Kererū Café's costs against the original quote to see what ran over.","Use Bellhaven Rest Home's 33% margin when pricing similar work.",'Review labour and material costs on jobs under 20% before invoicing.']},
        work:{headline:'Quote win rate is 56% — keep the pipeline moving.',body:"You're winning more than half of decided quotes, but $18,900 of open quotes have gone quiet for 14 days or more.",evidence:[['fa-calculator','8 open quotes · $34,500','$15,600 fresh · $18,900 waiting 14+ days'],['fa-check-circle','9 accepted · $42,700','Compared with 7 declined · $30,900'],['fa-inbox','3 enquiries need a quote','ENQ0025 arrived yesterday.']],actions:['Follow up the 3 quiet quotes, starting with QT01042 for $9,200.','Quote ENQ0025 while the enquiry is still fresh.','Review why 7 quotes were declined and look for a pattern.']}
      }
    },
    {
      slug:'jul-2026',label:'July 2026',short:'Jul 2026',previous:'June 2026',year:'July 2025',status:'Steady',healthy:true,asAt:'1 Aug 2026',
      moneyIn:33000,moneyInMonth:29100,moneyInYear:30200,moneyOut:27600,moneyOutMonth:28100,moneyOutYear:26500,netCash:5400,netCashMonth:1000,netCashYear:3700,outlook:31400,outlookChange:-3200,invoicesToChase:39200,invoicesCount:7,readyToInvoice:27600,readyJobs:8,bookedAhead:242800,grossProfit:12000,grossMargin:26,marginPrevious:24,
      focus:{
        cash:{headline:'Cash is positive, but collection still matters.',body:'Net cash was $5,400 in July. Keeping overdue work moving will protect the cash already in the business.',evidence:[['fa-money','Money in · $33,000','11 customer payments received'],['fa-file-text-o','7 overdue invoices · $39,200','Oldest invoice is 52 days overdue'],['fa-briefcase','8 completed jobs · $27,600','Ready to turn into invoices.']],actions:['Follow up the two invoices over 45 days overdue.','Invoice the three highest-value completed jobs today.','Check next month’s payroll and supplier payments against expected receipts.']},
        profit:{headline:'Profit margin is 26% in July.',body:'Gross profit was $12,000 on $46,100 revenue. Two fixed-price jobs performed above plan and labour recovery was healthy.',evidence:[['fa-line-chart','Gross margin · 26%','Gross profit · $12,000'],['fa-briefcase','JB2198 · Ashbury School','36% margin · completed on plan'],['fa-wrench','Labour recovery · 91%','Timesheets were complete']],actions:['Reuse the Ashbury School estimate for similar work.','Check the two jobs below 20% margin before final invoicing.','Keep timesheets up to date so labour recovery stays visible.']},
        work:{headline:'The pipeline is steady, but five quotes need a decision.',body:'Open quote value held at $41,800. More than half has been waiting for a customer response for two weeks.',evidence:[['fa-calculator','10 open quotes · $41,800','$23,400 waiting 14+ days'],['fa-check-circle','Quote win rate · 48%','9 accepted · 10 declined'],['fa-inbox','4 enquiries need a quote','Two arrived in the last 48 hours.']],actions:['Follow up the five quiet quotes before sending new estimates.','Quote the two newest enquiries today.','Record decline reasons to improve the next round of pricing.']}
      }
    },
    {
      slug:'jun-2026',label:'June 2026',short:'Jun 2026',previous:'May 2026',year:'June 2025',status:'Steady',healthy:true,asAt:'1 Jul 2026',
      moneyIn:29100,moneyInMonth:27300,moneyInYear:26100,moneyOut:28100,moneyOutMonth:26800,moneyOutYear:25500,netCash:1000,netCashMonth:500,netCashYear:600,outlook:34600,outlookChange:1400,invoicesToChase:31700,invoicesCount:6,readyToInvoice:24900,readyJobs:7,bookedAhead:226400,grossProfit:10200,grossMargin:24,marginPrevious:24,
      focus:{
        cash:{headline:'Cash stayed positive, with little room for delays.',body:'Net cash was $1,000. Money in and money out were close, so late customer payments could still put pressure on the month ahead.',evidence:[['fa-money','Money in · $29,100','10 customer payments received'],['fa-money','Money out · $28,100','Bills, wages and expenses'],['fa-file-text-o','6 overdue invoices · $31,700','Two have been overdue for more than 30 days.']],actions:['Chase the two invoices over 30 days overdue.','Confirm payment dates for the three largest invoices due in July.','Review recurring outgoings before the next payroll run.']},
        profit:{headline:'Margin is 24%, but material costs need attention.',body:'Gross profit was $10,200 on $42,500 revenue. Three plumbing jobs carried high material costs that reduced their margins.',evidence:[['fa-line-chart','Gross margin · 24%','Gross profit · $10,200'],['fa-shopping-cart','Material costs · $18,600','Largest job cost category'],['fa-briefcase','3 jobs below 20% margin','All included unquoted material changes.']],actions:['Add variations before completing work that changes material scope.','Review supplier pricing on the three low-margin jobs.','Set a margin check before fixed-price quotes are accepted.']},
        work:{headline:'Win rate is 51%, and new enquiries need attention.',body:'You converted more than half of decided quotes, but only five new enquiries arrived in June. The next month depends on following up open work.',evidence:[['fa-check-circle','Quote win rate · 51%','8 accepted · 7 declined'],['fa-calculator','7 open quotes · $29,600','$12,800 waiting 14+ days'],['fa-inbox','5 new enquiries','Two still need a quote']],actions:['Follow up the three quiet quotes this week.','Contact recent customers about upcoming maintenance work.','Respond to new enquiries within one business day.']}
      }
    }
  ];
  const focusKeys=['cash','profit','work'];
  const reportAiSummaries={
    'aug-2026':"Net cash fell to -$7,300 and margin dropped to 19% as one job's costs pulled down profit. Invoice the $38,900 of finished work sitting unbilled and chase the three oldest overdue invoices, worth $27,630, to rebuild cash fastest.",
    'jul-2026':'Net cash improved to $5,400 and margin rose to 26% on strong labour recovery. Invoice the $27,600 of finished work waiting to be billed, and follow up the five quotes worth $23,400 that have stalled for two weeks.',
    'jun-2026':"Net cash stayed positive at $1,000, with margin holding at 24% while three jobs lost margin to unquoted material changes. Add variations before material scope changes, and chase the two invoices overdue more than 30 days to protect next month's cash."
  };
  const emailRoundups={
    'aug-2026':{
      headline:'Cash tightened and profit margin slipped to 19% this month — the full report has the detail.',
      cash:'Money in slowed while money out rose. Finished work waiting to be invoiced is the fastest way back.',
      profit:"Margin dipped this month. One job's costs pulled the average down.",
      work:"You're still winning more than half your quotes, but a few have gone quiet."
    },
    'jul-2026':{
      headline:'Cash and profit margin both improved this month, with a little tidying up still to do.',
      cash:'Net cash improved, though some invoices are still waiting on payment.',
      profit:'Margin recovered on the back of strong labour recovery.',
      work:'The pipeline held steady, but some quotes are waiting on a decision.'
    },
    'jun-2026':{
      headline:'Cash held steady and margin stayed at 24%, with material costs worth keeping an eye on.',
      cash:'Cash stayed positive, with little room for late payments.',
      profit:'Margin held steady, though material costs are worth watching.',
      work:'Win rate stayed above half, though fewer new enquiries came in.'
    }
  };
  const reportPipelines={
    'aug-2026':{
      quote:{total:34500,monthChange:-7300,yearChange:3300,outcomes:{accepted:[9,42700],declined:[7,30900],awaiting:[8,34500]}},
      invoice:{total:47820,monthChange:8620,yearChange:5720,outcomes:{ready:[11,38900],paid:[12,24600],overdue:[8,47820]}}
    },
    'jul-2026':{
      quote:{total:41800,monthChange:12200,yearChange:6400,outcomes:{accepted:[9,39600],declined:[10,36200],awaiting:[10,41800]}},
      invoice:{total:39200,monthChange:7500,yearChange:2800,outcomes:{ready:[8,27600],paid:[11,33000],overdue:[7,39200]}}
    },
    'jun-2026':{
      quote:{total:29600,monthChange:-3500,yearChange:1800,outcomes:{accepted:[8,37900],declined:[7,28400],awaiting:[7,29600]}},
      invoice:{total:31700,monthChange:2600,yearChange:1200,outcomes:{ready:[7,24900],paid:[10,29100],overdue:[6,31700]}}
    }
  };
  const reportActions={
    'aug-2026':{
      cash:[
        {title:'Chase INV-2841 — Kingsford Property Group',detail:'$12,400 · 68 days overdue',cta:'Open invoice',target:'invoice INV-2841'},
        {title:'Chase INV-2867 — Bellhaven Constructions',detail:'$6,280 · 61 days overdue',cta:'Open invoice',target:'invoice INV-2867'},
        {title:'Invoice JB2237 — Kingsford Property Group',detail:'$9,800 ready to invoice',cta:'Open job',target:'job JB2237'},
        {title:'Invoice JB2240 — Waverley Aquatic Centre',detail:'$7,450 ready to invoice',cta:'Open job',target:'job JB2240'},
        {title:'Invoice JB2234 — Hallam Bros Builders',detail:'$6,200 ready to invoice',cta:'Open job',target:'job JB2234'}
      ],
      profit:[
        {title:'Check JB2231 — Kererū Café',detail:'13% margin · compare costs with the accepted quote',cta:'Open job',target:'job JB2231'},
        {title:'Compare with JB2208 — Bellhaven Rest Home',detail:'33% margin · use this job as a pricing reference',cta:'Open job',target:'job JB2208'},
        {title:'Review every job below 20% margin',detail:'Check labour and material costs before invoicing',cta:'View jobs',target:'Job Financial Report filtered to jobs below 20% margin'}
      ],
      work:[
        {title:'Follow up QT01042 — Riverside Café fit-out',detail:'$9,200 · waiting 14+ days',cta:'Open quote',target:'quote QT01042'},
        {title:'Quote ENQ0025 — Alan Whitfield',detail:'Switchboard upgrade · received yesterday',cta:'Open enquiry',target:'enquiry ENQ0025'},
        {title:'Review the 7 declined quotes',detail:'Look for a pattern before pricing the next job',cta:'View quotes',target:'Quotes filtered to declined'}
      ]
    },
    'jul-2026':{
      cash:[
        {title:'Chase INV-2814 — Everton Retail Fitouts',detail:'$8,600 · 52 days overdue',cta:'Open invoice',target:'invoice INV-2814'},
        {title:'Chase INV-2822 — Pinehurst Dental',detail:'$4,250 · 47 days overdue',cta:'Open invoice',target:'invoice INV-2822'},
        {title:'Invoice the 3 highest-value completed jobs',detail:'JB2198 Ashbury School, JB2201 Northline Logistics and JB2204 Pinehurst Dental',cta:'View 3 jobs',target:'Ready to Invoice filtered to JB2198, JB2201 and JB2204'},
        {title:'Check August cash commitments',detail:'Compare expected receipts with payroll and supplier payments',cta:'Open outlook',target:'Cash Flow Outlook for August 2026'}
      ],
      profit:[
        {title:"Reuse QT01014 — Ashbury School's accepted estimate",detail:'Pricing from JB2198 · 36% margin',cta:'Open quote',target:'quote QT01014'},
        {title:'Check JB2186 — Fenwick Holiday Park',detail:'15% margin · review before invoicing',cta:'Open job',target:'job JB2186'},
        {title:'Check JB2192 — Dalton Family',detail:'17% margin · review before invoicing',cta:'Open job',target:'job JB2192'},
        {title:'Keep timesheets up to date',detail:'Protect the current 91% labour recovery',cta:'Open timesheets',target:'Timesheets for July 2026'}
      ],
      work:[
        {title:'Follow up QT01038 — Hendricks home rewire',detail:'$6,100 · waiting 14+ days',cta:'Open quote',target:'quote QT01038'},
        {title:'Follow up QT01029 — Marlow unit block wiring',detail:'$3,600 · waiting 14+ days',cta:'Open quote',target:'quote QT01029'},
        {title:'Follow up the other 3 quiet quotes',detail:'Open quotes waiting 14+ days',cta:'View 3 quotes',target:'Quotes filtered to open for 14+ days'},
        {title:'Quote the 2 newest enquiries',detail:'Both arrived in the last 48 hours',cta:'View enquiries',target:'Enquiries filtered to newest unquoted'},
        {title:'Record reasons for the 10 declined quotes',detail:'Use the pattern to improve the next round of pricing',cta:'View quotes',target:'Quotes filtered to declined in July 2026'}
      ]
    },
    'jun-2026':{
      cash:[
        {title:'Chase invoices over 30 days overdue',detail:'Start with the 2 oldest balances',cta:'View invoices',target:'Invoices filtered to 30+ days overdue'},
        {title:'Confirm dates for the 3 largest July payments',detail:'Sort unpaid invoices by value',cta:'View invoices',target:'Invoices due in July 2026 sorted by value'},
        {title:'Review recurring outgoings before payroll',detail:'Check bills, fees and scheduled payments',cta:'View money out',target:'Money Out report for June 2026'}
      ],
      profit:[
        {title:'Review material costs on the 3 low-margin jobs',detail:'Each job is below 20% margin',cta:'View jobs',target:'Job Financial Report filtered to jobs below 20% margin'},
        {title:'Add variations when material scope changes',detail:'Capture approval before completing the work',cta:'View variations',target:'Job variations'},
        {title:'Check margin before accepting fixed-price quotes',detail:'Use the quoted labour and material costs',cta:'View quotes',target:'Fixed-price quotes awaiting acceptance'}
      ],
      work:[
        {title:'Follow up the 3 quiet quotes',detail:'Open for 14+ days without a decision',cta:'View quotes',target:'Quotes filtered to open for 14+ days'},
        {title:'Contact recent customers about maintenance work',detail:'Start with customers whose jobs finished recently',cta:'View customers',target:'Customers with recently completed jobs'},
        {title:'Reply to the 2 unquoted enquiries',detail:'Respond within one business day',cta:'View enquiries',target:'Enquiries filtered to unquoted'}
      ]
    }
  };
  const chatSuggestions={
    report:[['What changed most in this report?','What changed most?'],['What should I do first?','What should I do first?'],['Which job needs attention?','Which job needs attention?'],['Which work should I follow up?','Which work should I follow up?']],
    cash:[['What should I collect first?','What should I collect first?'],['Which invoice should I chase first?','Which invoice first?'],['How can I improve cash fastest?','How can I improve cash?']],
    profit:[['Why was profit margin low?','Why was margin low?'],['Which job needs attention?','Which job needs attention?'],['What should I check first?','What should I check first?']],
    work:[['Which quotes needed a follow-up?','Which quotes needed follow-up?'],['Which enquiry should I quote first?','Which enquiry first?'],['What should I do first?','What should I do first?']]
  };
  const money=value=>`${value<0?'-':''}$${Math.abs(value).toLocaleString('en-AU')}`;
  const shortMonth=label=>{const parts=label.split(' ');return `${parts[0].slice(0,3)} ${parts[1]}`};
  const renderEvidenceItems=evidence=>evidence.map(item=>`<li class="report-evidence-row"><i class="fa ${item[0]}" aria-hidden="true"></i><span><strong>${item[1]}</strong><small>${item[2]}</small></span></li>`).join('');
  const renderActionItems=actions=>actions.map(action=>`<li><button class="report-action-row" type="button" data-report-destination="${action.target}"><span class="report-action-copy"><strong>${action.title}</strong><small>${action.detail}</small></span><span class="report-action-cta">${action.cta}<i class="fa fa-angle-right" aria-hidden="true"></i></span></button></li>`).join('');
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
  const variantTabs=Array.from(document.querySelectorAll('[data-report-variant]'));
  const variantPanels=Array.from(document.querySelectorAll('[data-report-variant-panel]'));
  const report2ArchiveSelect=document.querySelector('#report2ArchiveSelect');
  const report2Title=document.querySelector('#report2Title');
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
  let activeVariant='2';
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
    url.searchParams.delete('page');
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
      const panel=reportPanel.querySelector(`[data-report-section="${key}"]`);
      panel.querySelector('[data-focus-headline]').textContent=focus.headline;
      panel.querySelector('[data-focus-body]').textContent=focus.body;
      panel.querySelector('[data-focus-evidence]').innerHTML=renderEvidenceItems(focus.evidence);
      panel.querySelector('[data-focus-actions]').innerHTML=renderActionItems(reportActions[month.slug][key]);
    });
  };

  const renderSubmetrics=month=>{
    const marginChange=month.grossMargin-month.marginPrevious;
    const previousMonth=month.previous.split(' ')[0].slice(0,3);
    const values={
      invoices:money(month.invoicesToChase),
      ready:money(month.readyToInvoice),
      booked:money(month.bookedAhead),
      profit:`${month.grossMargin}% gross margin`
    };
    const details={
      invoices:`${month.invoicesCount} invoices overdue`,
      ready:`${month.readyJobs} jobs completed`,
      booked:'Committed, next 3 months',
      profit:`${money(month.grossProfit)} gross profit`
    };
    Object.entries(values).forEach(([key,value])=>reportPanel.querySelectorAll(`[data-report-submetric-value="${key}"]`).forEach(element=>{element.textContent=value}));
    Object.entries(details).forEach(([key,value])=>reportPanel.querySelectorAll(`[data-report-submetric-detail="${key}"]`).forEach(element=>{element.textContent=value}));
    reportPanel.querySelectorAll('[data-report-submetric-trend="profit"]').forEach(element=>{
      element.classList.remove('positive','negative');
      if(marginChange>0)element.classList.add('positive');else if(marginChange<0)element.classList.add('negative');
      const icon=marginChange===0?'fa-minus':`fa-arrow-${marginChange>0?'up':'down'}`;
      const text=marginChange===0?'No change':`${marginChange>0?'Up':'Down'} ${Math.abs(marginChange)} pts`;
      element.innerHTML=`<i class="fa ${icon}" aria-hidden="true"></i>${text} vs ${previousMonth}`;
    });
  };

  const renderReport2Pipelines=month=>{
    const pipelines=reportPipelines[month.slug];
    document.querySelectorAll('[data-report2-pipeline]').forEach(card=>{
      const type=card.dataset.report2Pipeline;
      const pipeline=pipelines[type];
      card.querySelector('[data-pipeline-total]').textContent=money(pipeline.total);
      ['month','year'].forEach(period=>{
        const change=pipeline[`${period}Change`];
        const element=card.querySelector(`[data-pipeline-change="${period}"]`);
        element.classList.remove('positive','negative');
        if(type==='invoice'&&change!==0)element.classList.add(change>0?'negative':'positive');
        const direction=change===0?'No change':`${change>0?'Up':'Down'} ${money(Math.abs(change))}`;
        const icon=change===0?'fa-minus':`fa-arrow-${change>0?'up':'down'}`;
        element.innerHTML=`<i class="fa ${icon}" aria-hidden="true"></i>${direction} vs last ${period}`;
      });
      Object.entries(pipeline.outcomes).forEach(([outcome,[count,value]])=>{
        const tile=card.querySelector(`[data-pipeline-outcome="${outcome}"]`);
        tile.querySelector('[data-pipeline-count]').textContent=count;
        tile.querySelector('[data-pipeline-value]').textContent=money(value);
      });
    });
  };

  const renderEmailPreview=month=>{
    const roundup=emailRoundups[month.slug];
    const previousMonth=shortMonth(month.previous);
    const marginChange=month.grossMargin-month.marginPrevious;
    const marginDelta={
      className:marginChange===0?'':marginChange>0?'positive':'negative',
      text:marginChange===0?`No change vs ${previousMonth}`:`${marginChange>0?'Up':'Down'} ${Math.abs(marginChange)} points vs ${previousMonth}`
    };
    const metrics={
      moneyIn:{value:money(month.moneyIn),delta:deltaCopy('moneyIn',month.moneyIn,month.moneyInMonth,previousMonth)},
      moneyOut:{value:money(month.moneyOut),delta:deltaCopy('moneyOut',month.moneyOut,month.moneyOutMonth,previousMonth)},
      netCash:{value:money(month.netCash),delta:deltaCopy('netCash',month.netCash,month.netCashMonth,previousMonth)},
      grossMargin:{value:`${month.grossMargin}%`,delta:marginDelta}
    };
    document.querySelector('#emailReportTitle').textContent=`${month.label} Business Analysis Report`;
    document.querySelector('#emailRoundupHeadline').textContent=roundup.headline;
    Object.entries(metrics).forEach(([key,metric])=>{
      const element=document.querySelector(`[data-email-metric="${key}"]`);
      const statusClass=key==='moneyOut'?'negative':metric.delta.className;
      element.classList.remove('email-status-positive','email-status-negative');
      if(statusClass)element.classList.add(`email-status-${statusClass}`);
      element.querySelector('strong').textContent=metric.value;
      element.querySelector('dd span').textContent=metric.delta.text;
    });
    focusKeys.forEach(key=>{document.querySelector(`[data-email-roundup="${key}"]`).textContent=roundup[key]});
    document.querySelector('#emailFullReportLink').setAttribute('href',`?concept=report&variant=2&snapshot=${month.slug}`);
  };

  const renderReport2=()=>{
    const month=reportMonths[monthIndex];
    report2ArchiveSelect.value=month.slug;
    report2Title.textContent=`${month.label} Business Analysis Report`;
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
      renderDelta(monthDelta,monthCopy);
      renderDelta(yearDelta,yearCopy);
    });
    const report2Net=document.querySelector('.report2-metric.net');
    report2Net.classList.toggle('negative',month.netCash<0);
    document.querySelector('[data-report2-value="outlook"]').textContent=money(month.outlook);
    const outlookDelta=document.querySelector('[data-report2-outlook]');
    const outlookNeutral=month.outlookChange===0;
    renderDelta(outlookDelta,{
      className:outlookNeutral?'':month.outlookChange>0?'positive':'negative',
      icon:outlookNeutral?'fa-minus':`fa-arrow-${month.outlookChange>0?'up':'down'}`,
      text:outlookNeutral?'No change over 8 weeks':`${month.outlookChange>0?'Up':'Down'} ${money(Math.abs(month.outlookChange))} over 8 weeks`
    });
    renderReport2Pipelines(month);
    focusKeys.forEach(key=>{
      const focus=month.focus[key];
      const section=document.querySelector(`[data-report2-section="${key}"]`);
      const actions=reportActions[month.slug][key];
      section.querySelector('[data-report2-headline]').textContent=focus.headline;
      section.querySelector('[data-report2-body]').textContent=focus.body;
      section.querySelector('[data-report2-evidence]').innerHTML=renderEvidenceItems(focus.evidence);
      section.querySelector('[data-report2-actions]').innerHTML=renderActionItems(actions);
      section.querySelector('.report2-action-count').textContent=`${actions.length} actions`;
    });
    document.querySelector('.report2-note span').textContent=`Based on Tradify and connected accounting data up to ${month.asAt}. This report won't update after that.`;
  };

  const renderSnapshot=()=>{
    const month=reportMonths[monthIndex];
    archiveSelect.value=month.slug;
    snapshotTitle.textContent=month.label;
    generatedMeta.textContent=`Fixed snapshot · Generated ${month.asAt} · Emailed to Office team`;
    periodSummary.textContent=`Compared with ${month.previous} and ${month.year}`;
    healthStatus.textContent=`${month.status} this month`;
    healthTitle.classList.toggle('healthy',month.healthy);
    healthTitle.querySelector('.fa').className=`fa ${month.healthy?'fa-check-circle':'fa-exclamation-circle'}`;
    reportPanel.querySelectorAll('[data-report-ai-summary]').forEach(element=>{element.textContent=reportAiSummaries[month.slug]});
    chatContext.textContent=`Based on the ${month.label} report`;
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
    renderSubmetrics(month);
    reportPanel.querySelector('.report-note').innerHTML=`<i class="fa fa-lock" aria-hidden="true"></i>This report uses Tradify and connected accounting data recorded up to ${month.asAt}. It won't change after that.`;
    renderFocus();
    renderReport2();
    renderEmailPreview(month);
    setUrl();
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
    if(focusKey)appendSystem(`Asking about: ${reportMonths[monthIndex].focus[focusKey].headline}`);
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
    if(normalised.includes('money in and out')&&normalised.includes('calculat'))return {text:`Money in is customer invoice payments recorded in Tradify during ${month.label}, grouped by payment date. Money out is settled supplier, payroll, expense and fee payments imported from accounting or bank data. For ${month.label}, that gives ${money(month.moneyIn)} in and ${money(month.moneyOut)} out.`,source:`Money in · ${money(month.moneyIn)} · Money out · ${money(month.moneyOut)}`};
    if(normalised.includes('invoice')&&normalised.includes('chase')){const firstInvoice=reportActions[month.slug].cash[0];return {text:`${month.invoicesCount} invoices are overdue, worth ${money(month.invoicesToChase)}. Start with ${firstInvoice.title.replace(/^Chase /,'')} — ${firstInvoice.detail}.`,source:`Invoices to chase · ${money(month.invoicesToChase)}`}}
    if(normalised.includes('ready to invoice'))return {text:`${month.readyJobs} completed jobs are ready to invoice, worth ${money(month.readyToInvoice)}. Send those invoices to turn finished work into cash.`,source:`Ready to invoice · ${money(month.readyToInvoice)}`};
    if(normalised.includes('booked ahead'))return {text:`You have ${money(month.bookedAhead)} of committed work booked over the next 3 months. This is work already in Tradify; costs and profit remain estimates until the jobs are delivered.`,source:`Booked ahead · ${money(month.bookedAhead)}`};
    if(normalised.includes('profitability')){const marginChange=month.grossMargin-month.marginPrevious;const comparison=marginChange===0?'unchanged from last month':`${marginChange>0?'up':'down'} ${Math.abs(marginChange)} points from ${month.previous}`;return {text:`Gross margin is ${month.grossMargin}% for ${month.label}, producing ${money(month.grossProfit)} gross profit — ${comparison}. ${month.focus.profit.evidence[2][1]} — ${month.focus.profit.evidence[2][2]}.`,source:month.focus.profit.evidence[2][1]}}
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
    report2ChatThread.innerHTML='<article class="report-chat-message assistant"><span class="tradify-ai-icon" aria-hidden="true"></span><div><strong>Business Analysis</strong><p>I’m your Business Analysis AI. Ask me about a number, priority or next step.</p></div></article>';
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
    const checking=appendReport2Message('assistant','Checking this report…');
    window.setTimeout(()=>{
      checking.remove();
      const answer=answerFor(clean);
      appendReport2Message('assistant',answer.text,answer.source);
      report2ChatInput.disabled=false;
      report2ChatInput.focus();
    },450);
  };

  archiveSelect.addEventListener('change',()=>{
    monthIndex=reportMonths.findIndex(month=>month.slug===archiveSelect.value);
    closeChat();
    resetReport2Chat();
    renderSnapshot();
  });
  document.querySelector('#reportDownload').addEventListener('click',()=>reportToast(`${reportMonths[monthIndex].label} Business Analysis PDF would download here.`));
  variantTabs.forEach((tab,index)=>{
    tab.addEventListener('click',event=>{event.preventDefault();activateVariant(tab.dataset.reportVariant)});
    tab.addEventListener('keydown',event=>{
      if(!['ArrowLeft','ArrowRight','Home','End'].includes(event.key))return;
      event.preventDefault();
      const target=event.key==='Home'?0:event.key==='End'?variantTabs.length-1:event.key==='ArrowRight'?(index+1)%variantTabs.length:(index-1+variantTabs.length)%variantTabs.length;
      activateVariant(variantTabs[target].dataset.reportVariant,true);
    });
  });
  report2ArchiveSelect.addEventListener('change',()=>{
    monthIndex=reportMonths.findIndex(month=>month.slug===report2ArchiveSelect.value);
    resetReport2Chat();
    renderSnapshot();
  });
  document.querySelectorAll('[data-report2-ask]').forEach(button=>button.addEventListener('click',()=>{
    activeFocus=button.dataset.report2Ask;
    setReport2ChatOpen(true,true);
    appendReport2Message('assistant',`I’m looking at “${reportMonths[monthIndex].focus[activeFocus].headline}”. What would you like to know?`);
  }));
  report2ChatToggle.addEventListener('click',()=>setReport2ChatOpen(!report2Companion.classList.contains('open'),true));
  document.querySelectorAll('[data-report2-question]').forEach(button=>button.addEventListener('click',()=>askReport2Question(button.dataset.report2Question)));
  report2ChatForm.addEventListener('submit',event=>{event.preventDefault();askReport2Question(report2ChatInput.value)});
  document.querySelectorAll('[data-report-chat-open]').forEach(button=>button.addEventListener('click',()=>openChat(button)));
  document.querySelectorAll('[data-report-chat-close]').forEach(button=>button.addEventListener('click',closeChat));
  reportPanel.addEventListener('click',event=>{
    const destination=event.target.closest('[data-report-destination]');
    if(destination)reportToast(`In product, this opens ${destination.dataset.reportDestination}.`);
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
  setReport2ChatOpen(false);
  activateVariant(activeVariant,false);
})();
