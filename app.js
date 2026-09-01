const sidebar=document.querySelector('#sidebar');
const menuButton=document.querySelector('#menuButton');
const navScrim=document.querySelector('#navScrim');
const prototypeBar=document.querySelector('.prototype-bar');
const mobileMedia=window.matchMedia('(max-width:800px)');
const appShell=document.querySelector('#appShell');
const mainContent=document.querySelector('main');
const productFooter=document.querySelector('#productFooter');
const scheduleModal=document.querySelector('#scheduleModal');
const emailPreviewModal=document.querySelector('#emailPreviewModal');
const modalBackdrop=document.querySelector('#modalBackdrop');
const scheduleButton=document.querySelector('#scheduleButton');
const scheduleButtonLabel=document.querySelector('#scheduleButtonLabel');
const emailPreviewButton=document.querySelector('#emailPreviewButton');
const modalClose=document.querySelector('#modalClose');
const emailPreviewClose=document.querySelector('#emailPreviewClose');
const closeEmailPreview=document.querySelector('#closeEmailPreview');
const cancelSchedule=document.querySelector('#cancelSchedule');
const scheduleForm=document.querySelector('#scheduleForm');
const stopSchedule=document.querySelector('#stopSchedule');
const toast=document.querySelector('#toast');
const toastMessage=document.querySelector('#toastMessage');
const appliedPeriod=document.querySelector('#appliedPeriod');
const recipientField=document.querySelector('#recipientField');
const recipientError=document.querySelector('#recipientError');
const emailPreviewFooter=document.querySelector('#emailPreviewFooter');
const emailPreviewRecipients=document.querySelector('#emailPreviewRecipients');
const emailPreviewSubject=document.querySelector('#emailPreviewSubject');
const emailPreviewIntro=document.querySelector('#emailPreviewIntro');
const emailHighlights=Array.from(document.querySelectorAll('.email-highlights>div'));
const emailAttention=document.querySelector('.email-attention');
const emailContext=document.querySelector('.email-context');
const calculationToggle=document.querySelector('#calculationToggle');
const calculationToggleLabel=document.querySelector('#calculationToggleLabel');
const calculationAnnouncement=document.querySelector('#calculationAnnouncement');
const calculationTriggers=Array.from(document.querySelectorAll('.calc-trigger'));
const calculationMedia=window.matchMedia('(max-width:800px)');
const calculationStorageKey='tradify.reports.businessHealth.showCalculations';
const calculationKeyStorageKey='tradify.reports.businessHealth.calculationKeySeen';
const conceptStorageKey='tradify.reports.businessHealth.concept';
const conceptButtons=Array.from(document.querySelectorAll('.concept-option'));
const dashboardConcept=document.querySelector('#dashboardConcept');
const demandConcept=document.querySelector('#demandConcept');
const combinedConcept=document.querySelector('#combinedConcept');
const demandFlows=Array.from(document.querySelectorAll('[data-demand-flow]'));
const demandMappingToggle=document.querySelector('#demandMappingToggle');
const demandTags=Array.from(document.querySelectorAll('.demand-tag'));
const prototypeConceptName=document.querySelector('#prototypeConceptName');
const prototypeConceptDescription=document.querySelector('#prototypeConceptDescription');
const reportSubtitle=document.querySelector('#reportSubtitle');
const calculationMetadata={
  'money-in':{
    title:'Money in calculation',category:'Tradify data',categoryType:'tradify',icon:'fa-database',
    definition:'Payments recorded against customer invoices in the selected period.',
    calculation:'$24,600 = $7,400 + $6,200 + $5,800 + $5,200, grouped by payment date. Previous period: $33,000. Change: $24,600 − $33,000 = -$8,400.',
    source:'Invoice payments recorded in Tradify.',
    note:'Includes payments added when invoices are marked as paid. It is not matched to a bank statement and excludes credit notes.'
  },
  'money-out':{
    title:'Money out calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'Payments to suppliers, payroll, expenses and fees that settled in the selected period.',
    calculation:'Prototype example: $31,900 = $6,900 + $8,200 + $7,600 + $9,200. Previous period: $27,600. Change: $31,900 − $27,600 = +$4,300.',
    source:'Not available from Tradify today. This needs a new import of settled transactions from accounting or bank data.',
    note:'Supplier bills in Tradify are only Draft or Approved; they do not record amount paid or payment date.'
  },
  'net-cash':{
    title:'Net cash calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Money left after money out is taken from money in.',
    calculation:'$24,600 − $31,900 = -$7,300.',
    source:'Combines Tradify invoice payments with connected accounting or bank outgoings.',
    note:'Net cash cannot be produced from Tradify alone until money-out data is available.'
  },
  'weekly-flow':{
    title:'Weekly actuals calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Money in and money out grouped into the four weeks in the selected period.',
    calculation:'Money in by week: $7,400, $6,200, $5,800 and $5,200. Money out: $6,900, $8,200, $7,600 and $9,200. Weekly net: +$500, -$2,000, -$1,800 and -$4,000. Total: -$7,300.',
    source:'Payment date for customer receipts; settlement date for accounting or bank outgoings.',
    note:'The money-out side needs new accounting or bank transaction ingestion.'
  },
  profitability:{
    title:'Profitability calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Profit made from selected jobs after recorded labour, material and other job costs.',
    calculation:'Revenue $42,800 − job costs $34,700 = gross profit $8,100. $8,100 ÷ $42,800 = 18.9%, shown as 19%. Previous margin: 26%. Change: -7 points.',
    source:'Same basis as the Job Financial Report: tax-exclusive lines from non-cancelled invoices, timesheet or scheduled labour cost, job products and miscellaneous costs.',
    note:'The period selects jobs, not transactions. All recorded costs and non-cancelled invoice lines for each selected job are included, regardless of their dates. Multi-job invoices can be counted against more than one job.'
  },
  'overdue-invoices':{
    title:'Overdue invoices calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Outstanding customer invoice balances with a due date before 1 Sep 2026.',
    calculation:'$47,820 = $14,240 overdue 1–30 days + $14,900 overdue 31–60 days + $18,680 overdue 60+ days. 8 invoices qualify.',
    source:'Tradify customer invoices: due date, status, total, credits and payments recorded.',
    note:'Draft, cancelled and fully paid invoices are excluded. Payments not yet recorded in Tradify will still appear outstanding.'
  },
  'ready-to-invoice':{
    title:'Ready to invoice calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Completed jobs with recorded value that has not yet been invoiced.',
    calculation:'$38,900 across 11 jobs. The 3 shown total $23,450; 8 more jobs total $15,450.',
    source:'Completed jobs, accepted quote value, charge-up lines and existing invoice links in Tradify.',
    note:'This is a prototype readiness rule. A completed job may still need review before an invoice is created, and invoices are created one at a time.'
  },
  'not-yet-due':{
    title:'Not yet due calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Outstanding issued customer invoices whose due date is 1 Sep 2026 or later.',
    calculation:'19 unpaid invoices have outstanding balances totalling $62,340.',
    source:'Tradify customer invoices: due date, status, total, credits and payments recorded.',
    note:'Draft and cancelled invoices are excluded. This is money owed, not money received.'
  },
  'booked-ahead':{
    title:'Booked ahead calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Committed work value from scheduled jobs and accepted quotes not yet scheduled.',
    calculation:'$264,500 = $142,000 in Sep + $88,500 in Oct + $34,000 in Nov.',
    source:'Scheduled jobs and accepted quote values held in Tradify.',
    note:'This is committed value, not expected cash. It does not account for remaining work, delays, cancellations or payment timing.'
  },
  'demand-performance':{
    title:'Performance calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Gross profit and margin on work invoiced in the selected period.',
    calculation:'$186,400 invoiced − $121,160 cost of work = $65,240 gross profit. $65,240 ÷ $186,400 = 35.0%.',
    source:'Invoice lines linked to jobs, plus recorded labour, material and miscellaneous job costs.',
    note:'This is gross margin before business overheads, tax and owner drawings. Missing job costs will overstate profit.'
  },
  'combined-financial':{
    title:'Overall financial performance',category:'Combined calculation',categoryType:'calculated',icon:'fa-superscript',
    definition:'A combined view of invoiced work, job margin and actual cash movement over the last 30 days.',
    calculation:'$186,400 invoiced produced $65,240 gross profit at 35.0% margin. Cash received was $24,600 and cash paid was $31,900, leaving net cash of -$7,300.',
    source:'Tradify invoices and job costs, combined with accounting or bank transaction data for money out.',
    note:'Invoiced revenue and cash received are different measures. An invoice only affects cash when the customer pays it.'
  },
  'cash-pipeline':{
    title:'Cash pipeline calculation',category:'Mixed measures',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Money already invoiced, work ready to invoice, and committed work shown together as separate pipeline stages.',
    calculation:'$47,820 overdue + $62,340 not yet due are issued invoices. $38,900 is completed work not yet invoiced. $264,500 is committed work over the next 3 months.',
    source:'Tradify invoices, completed jobs, scheduled jobs and accepted quotes.',
    note:'Do not add these values into one cash total. They represent different stages and will convert to cash at different times.'
  },
  'winning-work':{
    title:'Winning work calculation',category:'Calculated',categoryType:'calculated',icon:'fa-superscript',
    definition:'Quote outcomes, open quote value and accepted quote value attached to active jobs.',
    calculation:'Win rate = Accepted ÷ (Accepted + Declined) = 24%. Previous win rate: 37%. Change: -13 points. Open, unexpired sent quotes total $58,900. Accepted ex-tax value on Scheduled jobs is $10,500 and In Progress jobs is $7,000, totalling $17,500.',
    source:'Win rate uses latest Quote versions by Quote date and current status. Pipeline uses current open, unexpired, manually sent Quotes. Booked value uses accepted ex-tax Quotes linked to Scheduled or In Progress jobs.',
    note:'Cancelled, open and draft quotes are excluded from win rate. Accepted value is classified by whole-job status, not allocated to individual appointments.'
  },
  'weeks-booked':{
    title:'Weeks of work booked calculation',category:'Assumption',categoryType:'assumption',icon:'fa-exclamation-circle',
    definition:'Original accepted quoted labour expressed as weeks at an assumed team capacity.',
    calculation:'Accepted direct labour hours plus accepted BOM labour hours (parent quantity × component quantity), divided by assumed productive hours per week = 2.5 weeks.',
    source:'Accepted quoted labour quantities plus an assumed weekly capacity.',
    note:'This is original quoted labour, not remaining work. Tradify has no staff capacity, leave or remaining-work model today, so treat it as a prototype assumption.'
  },
  'cash-outlook':{
    title:'Cash outlook calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'Expected cash balance after known money due in and expected money due out over 8 weeks.',
    calculation:'$31,400 today. Forecast balances by week: $32,600, $29,200, $30,000, $24,800, $22,000, $22,900, $15,700 and $12,600. Overall change: $12,600 − $31,400 = -$18,800.',
    source:'Unpaid invoice due dates from Tradify, plus starting balance, supplier payments, payroll and expenses from new accounting or bank data.',
    note:'Every point after today is projected. This is a forecast, not a guarantee. Tradify supplier bills have due dates but no actual payment records.'
  },
  'cash-trend':{
    title:'Cash balance trend calculation',category:'Accounting data required',categoryType:'accounting',icon:'fa-share-alt',
    definition:'One continuous cash balance, reconstructed from actual weekly cash movement through today and then extended with the 8-week forecast.',
    calculation:'Actual weekly net movement was +$500, -$2,000, -$1,800 and -$4,000. Working backwards from today’s $31,400 balance gives $38,700 opening, then weekly closing balances of $39,200, $37,200, $35,400 and $31,400. Forecast balances are $32,600, $29,200, $30,000, $24,800, $22,000, $22,900, $15,700 and $12,600.',
    source:'Actual customer receipts and settled outgoings, plus today’s starting balance and scheduled invoice and bill dates.',
    note:'The solid line is actual; the dashed line is forecast. The calculation assumes today’s balance reconciles to the closing balance produced by the actual transactions. Forecast values are not a guarantee.'
  }
};
const calculationBackdrop=document.createElement('div');
calculationBackdrop.className='calculation-backdrop';
calculationBackdrop.id='calculationBackdrop';
calculationBackdrop.hidden=true;
const calculationPopover=document.createElement('section');
calculationPopover.className='calculation-popover';
calculationPopover.id='calculationPopover';
calculationPopover.setAttribute('role','dialog');
calculationPopover.setAttribute('aria-labelledby','calculationPopoverTitle');
calculationPopover.setAttribute('aria-modal','false');
calculationPopover.hidden=true;
document.body.append(calculationBackdrop,calculationPopover);
let savedRecipients=['Office team','office@example.com'];
let draftRecipients=[...savedRecipients];
let scheduled=false;
let savedSchedule={frequency:'Weekly',day:'Monday',period:'Last 7 days'};
let activeModal=null;
let lastFocusedElement=null;
let activeCalculationTrigger=null;
let calculationCloseButton=null;
let calculationSheetOwnsInert=false;
let toastTimer=null;

const syncNavigation=()=>{
  const open=sidebar.classList.contains('open');
  if(mobileMedia.matches){
    sidebar.inert=!open;
    sidebar.setAttribute('aria-hidden',String(!open));
    mainContent.inert=open;
    prototypeBar.inert=open;
  }else{
    sidebar.inert=false;
    sidebar.removeAttribute('aria-hidden');
    mainContent.inert=false;
    prototypeBar.inert=false;
  }
};

const closeNavigation=(returnFocus=false)=>{
  sidebar.classList.remove('open');
  navScrim.classList.remove('visible');
  menuButton.setAttribute('aria-expanded','false');
  syncNavigation();
  if(returnFocus&&mobileMedia.matches)menuButton.focus();
};

const showToast=message=>{
  window.clearTimeout(toastTimer);
  toastMessage.textContent=message;
  toast.hidden=false;
  toastTimer=window.setTimeout(()=>{
    toast.hidden=true;
  },4200);
};

const setConcept=(concept,announce=false,persist=false)=>{
  const activeConcept=['dashboard','demand','combined'].includes(concept)?concept:'dashboard';
  const flowActive=activeConcept!=='dashboard';
  dashboardConcept.hidden=activeConcept!=='dashboard';
  demandConcept.hidden=activeConcept!=='demand';
  combinedConcept.hidden=activeConcept!=='combined';
  document.body.classList.toggle('flow-active',flowActive);
  document.body.classList.toggle('combined-active',activeConcept==='combined');
  const subtitles={
    dashboard:'Money in, money out, and what’s left over — as at 31 Aug 2026, 9:00am.',
    demand:'Demand-led sample — last 30 days, as at 1 Sep 2026, 9:18am.',
    combined:'Financial performance and the work that can improve it — last 30 days, as at 1 Sep 2026.'
  };
  reportSubtitle.textContent=subtitles[activeConcept];
  if(activeConcept==='combined'){
    prototypeConceptName.textContent='[ Prototype B ] Business Analysis';
    prototypeConceptDescription.textContent='Integrated overview with deep dives';
  }else{
    prototypeConceptName.textContent='[ Prototype A ] Business Analysis';
    prototypeConceptDescription.textContent='Ordered by counted Savio demand';
  }
  conceptButtons.forEach(button=>{
    const active=button.dataset.concept===activeConcept;
    button.classList.toggle('active',active);
    button.setAttribute('aria-pressed',String(active));
  });
  scheduleButton.removeAttribute('aria-disabled');
  scheduleButton.removeAttribute('title');
  scheduleButtonLabel.textContent=scheduled?`Scheduled ${savedSchedule.frequency.toLowerCase()}`:'Schedule report';
  if(flowActive)closeCalculationPopover(false);
  if(persist){
    try{window.localStorage.setItem(conceptStorageKey,activeConcept)}catch(error){}
    const url=new URL(window.location.href);
    url.searchParams.set('concept',activeConcept);
    window.history.replaceState(null,'',url);
  }
  if(announce){
    const announcements={dashboard:'Dashboard concept shown.',demand:'Demand-led concept shown.',combined:'Combined concept shown.'};
    calculationAnnouncement.textContent=announcements[activeConcept];
  }
};

const demandPerformancePeriods={
  '30d':{dates:'02/08/2026 – 01/09/2026',revenue:186400,cost:121160,previous:38.2},
  aug:{dates:'01/08/2026 – 31/08/2026',revenue:194900,cost:124800,previous:36.1},
  q:{dates:'01/07/2026 – 01/09/2026',revenue:371200,cost:232900,previous:37.4},
  fy:{dates:'01/07/2026 – 01/09/2026',revenue:371200,cost:232900,previous:35.8}
};
const formatDemandMoney=value=>`$${value.toLocaleString('en-AU')}`;
const demandRowLimit=3;
const renderDemandRows=flow=>{
  const activeBucket=flow.dataset.demandBucket||'1-30';
  const rowsExpanded=flow.dataset.demandRowsExpanded==='true';
  const rows=Array.from(flow.querySelectorAll('[data-demand-owed]'));
  const buttons=Array.from(flow.querySelectorAll('[data-demand-bucket]'));
  const showMore=flow.querySelector('.demand-show-more');
  const matches=rows.filter(row=>row.dataset.bucket===activeBucket);
  rows.forEach(row=>{
    const index=matches.indexOf(row);
    row.hidden=index===-1||(!rowsExpanded&&index>=demandRowLimit);
  });
  const hiddenCount=Math.max(0,matches.length-(rowsExpanded?matches.length:demandRowLimit));
  if(showMore){
    showMore.parentElement.hidden=hiddenCount===0;
    showMore.innerHTML=`Show ${hiddenCount} more <i class="fa fa-angle-down" aria-hidden="true"></i>`;
  }
  buttons.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.demandBucket===activeBucket)));
};
const renderDemandPerformance=flow=>{
  const periodSelect=flow.querySelector('.demand-period');
  if(!periodSelect)return;
  const period=demandPerformancePeriods[periodSelect.value];
  const profit=period.revenue-period.cost;
  const margin=profit/period.revenue*100;
  const delta=margin-period.previous;
  const down=delta<0;
  calculationMetadata['demand-performance'].calculation=`${formatDemandMoney(period.revenue)} invoiced − ${formatDemandMoney(period.cost)} cost of work = ${formatDemandMoney(profit)} gross profit. ${formatDemandMoney(profit)} ÷ ${formatDemandMoney(period.revenue)} = ${margin.toFixed(1)}%. Previous period: ${period.previous.toFixed(1)}%.`;
  flow.querySelector('[data-demand-period-dates]').textContent=`Gross margin · ${period.dates}`;
  flow.querySelector('[data-demand-margin]').textContent=`${margin.toFixed(1)}%`;
  const deltaElement=flow.querySelector('[data-demand-margin-delta]');
  deltaElement.classList.toggle('negative',down);
  deltaElement.classList.toggle('positive',!down);
  deltaElement.innerHTML=`<i class="fa fa-arrow-${down?'down':'up'}" aria-hidden="true"></i>${Math.abs(delta).toFixed(1)} pts`;
  flow.querySelector('[data-demand-performance-summary]').textContent=`${formatDemandMoney(profit)} on ${formatDemandMoney(period.revenue)} invoiced · was ${period.previous.toFixed(1)}% previous period`;
  flow.querySelector('[data-demand-revenue-value]').textContent=formatDemandMoney(period.revenue);
  flow.querySelector('[data-demand-cost-value]').textContent=formatDemandMoney(period.cost);
  flow.querySelector('[data-demand-profit-value]').textContent=formatDemandMoney(profit);
  flow.querySelector('[data-demand-cost-bar]').style.width=`${period.cost/period.revenue*100}%`;
  flow.querySelector('[data-demand-profit-bar]').style.width=`${profit/period.revenue*100}%`;
};
const parseCashTrendMetric=part=>{
  const definitions=[
    {prefix:'Last week in ',label:'In',tone:'in'},
    {prefix:'Balance ',label:'Balance',tone:'balance'},
    {prefix:'Previous ',label:'Previous',tone:'balance'},
    {prefix:'Change ',label:'Change',tone:'net'},
    {prefix:'In ',label:'In',tone:'in'},
    {prefix:'Out ',label:'Out',tone:'out'},
    {prefix:'Net ',label:'Net',tone:'net'}
  ];
  const definition=definitions.find(item=>part.startsWith(item.prefix));
  if(definition)return {...definition,value:part.slice(definition.prefix.length)};
  return {label:'Balance',tone:'balance',value:part};
};
const createCashTrendTooltip=hit=>{
  const [title,...parts]=hit.dataset.tooltip.split(' · ');
  const metrics=parts.map(parseCashTrendMetric);
  const balance=metrics.shift();
  const tooltip=document.createElement('span');
  const forecast=title.toLowerCase().includes('forecast');
  tooltip.className=`cash-trend-tooltip ${forecast?'forecast':'actual'}${metrics.length?'':' compact'}`;
  tooltip.setAttribute('aria-hidden','true');
  const header=document.createElement('span');
  header.className='cash-trend-tooltip-header';
  const heading=document.createElement('span');
  heading.textContent=title;
  const value=document.createElement('strong');
  value.textContent=balance?.value||'';
  header.append(heading,value);
  tooltip.append(header);
  if((title==='Today'||forecast)&&metrics.length){
    const caption=document.createElement('span');
    caption.className='cash-trend-tooltip-caption';
    caption.textContent=forecast?'Invoices due minus outgoings':'Last 7 days';
    tooltip.append(caption);
  }
  if(metrics.length){
    const metricsElement=document.createElement('span');
    metricsElement.className='cash-trend-tooltip-metrics';
    metrics.forEach(metric=>{
      const item=document.createElement('span');
      item.className=`cash-trend-tooltip-metric ${metric.tone}${metric.value.startsWith('+')?' positive-value':metric.value.startsWith('−')? ' negative-value':''}`;
      const label=document.createElement('small');
      label.textContent=metric.label;
      const metricValue=document.createElement('strong');
      metricValue.textContent=metric.value;
      item.append(label,metricValue);
      metricsElement.append(item);
    });
    tooltip.append(metricsElement);
  }
  return tooltip;
};
const setupCashTrendInteractions=()=>{
  document.querySelectorAll('.cash-trend-chart').forEach(chart=>{
    const guide=document.createElement('span');
    guide.className='cash-trend-guide';
    guide.setAttribute('aria-hidden','true');
    chart.append(guide);
    chart.querySelectorAll('.cash-trend-hit').forEach(hit=>{
      const tooltip=createCashTrendTooltip(hit);
      hit.append(tooltip);
      const show=()=>{
        chart.style.setProperty('--guide-x',hit.style.getPropertyValue('--x'));
        guide.hidden=hit.dataset.tooltip.startsWith('Today');
        chart.classList.add('is-hovering');
        hit.classList.toggle('tooltip-below',Number.parseFloat(hit.style.getPropertyValue('--y'))<36);
        tooltip.style.removeProperty('--tooltip-shift');
        window.requestAnimationFrame(()=>{
          const chartRect=chart.getBoundingClientRect();
          const tooltipRect=tooltip.getBoundingClientRect();
          const padding=8;
          let shift=0;
          if(tooltipRect.left<chartRect.left+padding)shift=chartRect.left+padding-tooltipRect.left;
          if(tooltipRect.right>chartRect.right-padding)shift=chartRect.right-padding-tooltipRect.right;
          tooltip.style.setProperty('--tooltip-shift',`${Math.round(shift)}px`);
        });
      };
      const hide=()=>{
        chart.classList.remove('is-hovering');
        guide.hidden=false;
      };
      hit.addEventListener('pointerenter',show);
      hit.addEventListener('pointerleave',()=>{if(document.activeElement!==hit)hide()});
      hit.addEventListener('focus',show);
      hit.addEventListener('blur',hide);
    });
  });
};

const positionCalculationPopover=()=>{
  if(!activeCalculationTrigger||calculationPopover.hidden){
    return;
  }
  if(calculationMedia.matches){
    calculationPopover.style.removeProperty('left');
    calculationPopover.style.removeProperty('top');
    return;
  }
  const gap=8;
  const viewportPadding=8;
  const triggerRect=activeCalculationTrigger.getBoundingClientRect();
  calculationPopover.style.left='0px';
  calculationPopover.style.top='0px';
  const popoverRect=calculationPopover.getBoundingClientRect();
  let left=triggerRect.right+gap;
  if(left+popoverRect.width>window.innerWidth-viewportPadding){
    left=triggerRect.left-popoverRect.width-gap;
  }
  left=Math.max(viewportPadding,Math.min(left,window.innerWidth-popoverRect.width-viewportPadding));
  let top=triggerRect.top-10;
  top=Math.max(viewportPadding,Math.min(top,window.innerHeight-popoverRect.height-viewportPadding));
  calculationPopover.style.left=`${Math.round(left)}px`;
  calculationPopover.style.top=`${Math.round(top)}px`;
};

const setCalculationSheetInert=inert=>{
  calculationSheetOwnsInert=inert;
  appShell.inert=inert;
  productFooter.inert=inert;
  prototypeBar.inert=inert;
  if(inert)sidebar.inert=true;else syncNavigation();
};

const closeCalculationPopover=(returnFocus=true)=>{
  if(!activeCalculationTrigger){
    return;
  }
  const trigger=activeCalculationTrigger;
  trigger.setAttribute('aria-expanded','false');
  activeCalculationTrigger=null;
  calculationCloseButton=null;
  calculationPopover.hidden=true;
  calculationBackdrop.hidden=true;
  document.body.classList.remove('calculation-sheet-open');
  if(calculationSheetOwnsInert)setCalculationSheetInert(false);
  if(returnFocus&&document.contains(trigger)){
    trigger.focus();
  }
};

const createCalculationDetail=(heading,copy,className='')=>{
  const section=document.createElement('section');
  section.className=`calculation-detail${className?` ${className}`:''}`;
  const title=document.createElement('h3');
  title.textContent=heading;
  const text=document.createElement('p');
  text.textContent=copy;
  section.append(title,text);
  return section;
};

const renderCalculationPopover=metadata=>{
  const header=document.createElement('header');
  header.className='calculation-popover-header';
  const badge=document.createElement('span');
  badge.className=`calculation-category ${metadata.categoryType}`;
  const badgeIcon=document.createElement('i');
  badgeIcon.className=`fa ${metadata.icon}`;
  badgeIcon.setAttribute('aria-hidden','true');
  badge.append(badgeIcon,document.createTextNode(metadata.category));
  const title=document.createElement('h2');
  title.id='calculationPopoverTitle';
  title.textContent=metadata.title;
  calculationCloseButton=document.createElement('button');
  calculationCloseButton.className='calculation-popover-close';
  calculationCloseButton.type='button';
  calculationCloseButton.setAttribute('aria-label','Close calculation details');
  const closeIcon=document.createElement('i');
  closeIcon.className='fa fa-times';
  closeIcon.setAttribute('aria-hidden','true');
  calculationCloseButton.append(closeIcon);
  calculationCloseButton.addEventListener('click',()=>closeCalculationPopover(true));
  header.append(badge,title,calculationCloseButton);
  const body=document.createElement('div');
  body.className='calculation-popover-body';
  body.append(
    createCalculationDetail('Definition',metadata.definition),
    createCalculationDetail('Source',metadata.source)
  );
  if(metadata.note){
    body.append(createCalculationDetail('Important note',metadata.note,'important'));
  }
  const key=document.createElement('p');
  key.className='calculation-key';
  key.textContent='Labels: Tradify data is recorded; Calculated is worked out; Accounting data required needs a new connection; New tracking needed is not captured yet; Assumption is an estimate.';
  body.append(key);
  calculationPopover.replaceChildren(header,body);
};

const openCalculationPopover=trigger=>{
  if(activeCalculationTrigger===trigger){
    closeCalculationPopover(true);
    return;
  }
  if(activeCalculationTrigger){
    closeCalculationPopover(false);
  }
  const metadata=calculationMetadata[trigger.dataset.calc];
  if(!metadata){
    return;
  }
  activeCalculationTrigger=trigger;
  trigger.setAttribute('aria-expanded','true');
  renderCalculationPopover(metadata);
  calculationPopover.setAttribute('aria-modal',String(calculationMedia.matches));
  calculationPopover.hidden=false;
  calculationBackdrop.hidden=!calculationMedia.matches;
  document.body.classList.toggle('calculation-sheet-open',calculationMedia.matches);
  if(calculationMedia.matches)setCalculationSheetInert(true);
  window.requestAnimationFrame(()=>{
    if(activeCalculationTrigger!==trigger){
      return;
    }
    positionCalculationPopover();
    calculationCloseButton.focus();
  });
};

const setCalculationVisibility=(visible,persist=false,announce=false)=>{
  if(!visible){
    closeCalculationPopover(false);
  }
  document.body.classList.toggle('calculations-visible',visible);
  calculationToggle.setAttribute('aria-pressed',String(visible));
  calculationToggle.setAttribute('aria-label',visible?'Hide calculations':'Show calculations');
  calculationToggleLabel.textContent=visible?'Hide calculations':'Show calculations';
  if(persist){
    try{
      window.localStorage.setItem(calculationStorageKey,String(visible));
    }catch(error){}
  }
  if(announce){
    calculationAnnouncement.textContent=visible?'Calculation details available. Select an info icon next to a figure for details.':'Calculation details hidden.';
  }
};

const renderRecipients=()=>{
  recipientField.replaceChildren();
  draftRecipients.forEach((recipient,index)=>{
    const token=document.createElement('span');
    token.className='recipient-token';
    token.append(document.createTextNode(recipient));
    const removeButton=document.createElement('button');
    removeButton.type='button';
    removeButton.disabled=draftRecipients.length===1;
    removeButton.setAttribute('aria-label',draftRecipients.length===1?'At least one recipient is required':`Remove ${recipient}`);
    const icon=document.createElement('i');
    icon.className='fa fa-times';
    icon.setAttribute('aria-hidden','true');
    removeButton.append(icon);
    removeButton.addEventListener('click',()=>{draftRecipients.splice(index,1);renderRecipients()});
    token.append(removeButton);
    recipientField.append(token);
  });
  const invalid=draftRecipients.length===0;
  recipientField.classList.toggle('invalid',invalid);
  recipientError.hidden=!invalid;
};

const focusableModalElements=()=>Array.from(activeModal.querySelectorAll('button:not([disabled]),select:not([disabled]),[href],input:not([disabled])')).filter(element=>!element.hidden&&element.offsetParent!==null);

const openModal=(modal,initialFocus)=>{
  closeCalculationPopover(false);
  lastFocusedElement=document.activeElement;
  activeModal=modal;
  activeModal.hidden=false;
  modalBackdrop.hidden=false;
  document.body.classList.add('modal-open');
  appShell.inert=true;
  productFooter.inert=true;
  prototypeBar.inert=true;
  sidebar.inert=true;
  window.requestAnimationFrame(()=>initialFocus.focus());
};

const closeModal=()=>{
  if(!activeModal){
    return;
  }
  activeModal.hidden=true;
  activeModal=null;
  modalBackdrop.hidden=true;
  document.body.classList.remove('modal-open');
  appShell.inert=false;
  productFooter.inert=false;
  prototypeBar.inert=false;
  syncNavigation();
  if(lastFocusedElement&&document.contains(lastFocusedElement)){
    lastFocusedElement.focus();
  }
};

const openScheduleModal=()=>{
  draftRecipients=[...savedRecipients];
  document.querySelector('#frequency').value=savedSchedule.frequency;
  document.querySelector('#sendDay').value=savedSchedule.day;
  const reportPeriod=document.querySelector('#reportPeriod');
  reportPeriod.value=savedSchedule.period;
  reportPeriod.disabled=false;
  renderRecipients();
  stopSchedule.hidden=!scheduled;
  openModal(scheduleModal,modalClose);
};

const renderEmailPreviewContent=(reportPeriod,periodPhrase)=>{
  const highlights=[['Net cash','-$7,300'],['Profit margin','19%'],['Quote win rate','24%']];
  const attentionLines=['Follow up 12 quotes worth $42,600','Create quotes for 6 enquiries','Add loss reasons to 8 lost quotes worth $28,400'];
  emailHighlights.forEach((item,index)=>{
    item.querySelector('span').textContent=highlights[index][0];
    item.querySelector('strong').textContent=highlights[index][1];
  });
  emailAttention.querySelector('strong').textContent='Take action';
  Array.from(emailAttention.querySelectorAll('span')).forEach((item,index)=>{item.textContent=attentionLines[index]});
  emailPreviewSubject.textContent=`Your Business Analysis report — ${reportPeriod}`;
  emailPreviewIntro.textContent=`Here’s how money moved through Fandango Plumbing ${periodPhrase}.`;
  emailContext.textContent='2.5 weeks of work booked.';
};

const openEmailPreviewModal=()=>{
  if(!draftRecipients.length){
    renderRecipients();
    recipientField.focus();
    return;
  }
  const reportPeriod=document.querySelector('#reportPeriod').value;
  const periodPhrase=reportPeriod==='Last 7 days'?'over the last 7 days':reportPeriod.toLowerCase();
  emailPreviewRecipients.textContent=draftRecipients.join(', ');
  renderEmailPreviewContent(reportPeriod,periodPhrase);
  emailPreviewFooter.textContent=scheduled?'You’re receiving this scheduled report from Tradify.':'This is a preview of the report you’ll get by email once scheduled.';
  scheduleModal.hidden=true;
  activeModal=emailPreviewModal;
  emailPreviewModal.hidden=false;
  lastFocusedElement=scheduleButton;
  window.requestAnimationFrame(()=>emailPreviewClose.focus());
};

const returnToScheduleModal=()=>{
  emailPreviewModal.hidden=true;
  scheduleModal.hidden=false;
  activeModal=scheduleModal;
  window.requestAnimationFrame(()=>emailPreviewButton.focus());
};

calculationToggle.addEventListener('click',()=>{
  const visible=!document.body.classList.contains('calculations-visible');
  setCalculationVisibility(visible,true,true);
  if(visible){
    let keySeen=false;
    try{keySeen=window.localStorage.getItem(calculationKeyStorageKey)==='true'}catch(error){}
    if(!keySeen){
      showToast('Labels show whether a figure comes from Tradify, is calculated, needs accounting data, needs new tracking, or uses an assumption.');
      try{window.localStorage.setItem(calculationKeyStorageKey,'true')}catch(error){}
    }
  }
});
calculationTriggers.forEach(trigger=>trigger.addEventListener('click',()=>openCalculationPopover(trigger)));
conceptButtons.forEach(button=>button.addEventListener('click',()=>setConcept(button.dataset.concept,true,true)));
calculationBackdrop.addEventListener('click',()=>closeCalculationPopover(true));
calculationMedia.addEventListener('change',()=>{
  if(!activeCalculationTrigger){
    return;
  }
  calculationPopover.setAttribute('aria-modal',String(calculationMedia.matches));
  calculationBackdrop.hidden=!calculationMedia.matches;
  document.body.classList.toggle('calculation-sheet-open',calculationMedia.matches);
  if(calculationMedia.matches)setCalculationSheetInert(true);else if(calculationSheetOwnsInert)setCalculationSheetInert(false);
  window.requestAnimationFrame(positionCalculationPopover);
});
window.addEventListener('resize',positionCalculationPopover);
window.addEventListener('scroll',positionCalculationPopover,true);
document.addEventListener('click',event=>{
  if(!activeCalculationTrigger||calculationPopover.contains(event.target)){
    return;
  }
  if(event.target instanceof Element&&event.target.closest('.calc-trigger')){
    return;
  }
  closeCalculationPopover(false);
});

menuButton.addEventListener('click',()=>{
  const open=!sidebar.classList.contains('open');
  sidebar.classList.toggle('open',open);
  navScrim.classList.toggle('visible',open);
  menuButton.setAttribute('aria-expanded',String(open));
  syncNavigation();
  if(open)window.requestAnimationFrame(()=>sidebar.querySelector('button,a').focus());
});
navScrim.addEventListener('click',()=>closeNavigation(true));
mobileMedia.addEventListener('change',event=>{
  const focusWasInSidebar=sidebar.contains(document.activeElement);
  closeNavigation(false);
  if(event.matches&&focusWasInSidebar)menuButton.focus();
});

document.querySelectorAll('a[href="#"]').forEach(link=>link.addEventListener('click',event=>event.preventDefault()));

document.querySelectorAll('.period-link').forEach(button=>{
  button.addEventListener('click',()=>{
    if(button.dataset.period!=='month'){
      showToast('Only August data is loaded in this prototype.');
      return;
    }
    const summaries={
      month:'Showing August 2026, compared with July 2026',
      'last-month':'Showing July 2026, compared with June 2026',
      quarter:'Showing 1 Jul–30 Sep 2026, compared with 1 Apr–30 Jun 2026',
      'last-quarter':'Showing 1 Apr–30 Jun 2026, compared with 1 Jan–31 Mar 2026'
    };
    document.querySelectorAll('.period-link').forEach(periodButton=>{
      const active=periodButton===button;
      periodButton.classList.toggle('active',active);
      periodButton.setAttribute('aria-pressed',String(active));
    });
    appliedPeriod.textContent=summaries[button.dataset.period];
  });
});

demandMappingToggle.addEventListener('change',()=>demandTags.forEach(tag=>{tag.hidden=!demandMappingToggle.checked}));
demandFlows.forEach(flow=>{
  flow.dataset.demandBucket='1-30';
  flow.dataset.demandRowsExpanded='false';
  flow.querySelectorAll('[data-demand-bucket]').forEach(button=>button.addEventListener('click',()=>{
    flow.dataset.demandBucket=button.dataset.demandBucket;
    flow.dataset.demandRowsExpanded='false';
    renderDemandRows(flow);
  }));
  const showMore=flow.querySelector('.demand-show-more');
  if(showMore)showMore.addEventListener('click',()=>{
    flow.dataset.demandRowsExpanded='true';
    renderDemandRows(flow);
  });
  const periodSelect=flow.querySelector('.demand-period');
  if(periodSelect)periodSelect.addEventListener('change',()=>{
    renderDemandPerformance(flow);
    if(activeCalculationTrigger?.dataset.calc==='demand-performance')closeCalculationPopover(false);
  });
  renderDemandRows(flow);
  renderDemandPerformance(flow);
});
document.querySelectorAll('.combined-deep-link').forEach(link=>link.addEventListener('click',()=>{
  if(link.dataset.demandTargetBucket){
    demandConcept.dataset.demandBucket=link.dataset.demandTargetBucket;
    demandConcept.dataset.demandRowsExpanded='false';
    renderDemandRows(demandConcept);
  }
  setConcept(link.dataset.conceptTarget,true,true);
  const target=link.dataset.targetSection==='ready'
    ?demandConcept.querySelector('.demand-ready')
    :link.dataset.demandTargetBucket
      ?demandConcept.querySelector('.demand-chasing')
      :demandConcept.querySelector('.demand-money-grid');
  window.requestAnimationFrame(()=>target?.scrollIntoView({block:'start'}));
}));

document.querySelectorAll('.analyst-link').forEach(link=>link.addEventListener('click',()=>showToast(link.dataset.toast)));

document.querySelectorAll('.report-nav-item:not(.selected)').forEach(button=>{
  button.addEventListener('click',()=>showToast(`${button.dataset.report} isn’t part of this preview.`));
});

document.querySelector('#reportSelector').addEventListener('change',event=>{
  if(event.target.value!=='business'){
    const reportName=event.target.options[event.target.selectedIndex].text;
    showToast(`${reportName} isn’t part of this preview.`);
    event.target.value='business';
  }
});

scheduleButton.addEventListener('click',openScheduleModal);
emailPreviewButton.addEventListener('click',openEmailPreviewModal);
modalClose.addEventListener('click',closeModal);
cancelSchedule.addEventListener('click',closeModal);
emailPreviewClose.addEventListener('click',returnToScheduleModal);
closeEmailPreview.addEventListener('click',returnToScheduleModal);
document.querySelector('#openFullReport').addEventListener('click',()=>{closeModal();window.setTimeout(()=>document.querySelector('#reportTitle').focus(),0)});
modalBackdrop.addEventListener('click',closeModal);
document.querySelectorAll('.modal').forEach(modal=>{
  modal.addEventListener('click',event=>{
    if(event.target===modal){
      closeModal();
    }
  });
});

scheduleForm.addEventListener('submit',event=>{
  event.preventDefault();
  if(!draftRecipients.length){renderRecipients();recipientField.focus();return}
  savedRecipients=[...draftRecipients];
  savedSchedule={frequency:document.querySelector('#frequency').value,day:document.querySelector('#sendDay').value,period:document.querySelector('#reportPeriod').value};
  const frequency=savedSchedule.frequency.toLowerCase();
  const sendDay=savedSchedule.day;
  scheduled=true;
  scheduleButtonLabel.textContent=`Scheduled ${frequency}`;
  closeModal();
  showToast(`Report scheduled. Your first email will be sent ${sendDay}.`);
});

stopSchedule.addEventListener('click',()=>{
  scheduled=false;
  scheduleButtonLabel.textContent='Schedule report';
  closeModal();
  showToast('Report unscheduled.');
});


document.addEventListener('keydown',event=>{
  if(sidebar.classList.contains('open')&&event.key==='Escape'){
    event.preventDefault();
    closeNavigation(true);
    return;
  }
  if(sidebar.classList.contains('open')&&event.key==='Tab'){
    const focusable=Array.from(sidebar.querySelectorAll('button,[href]')).filter(element=>element.offsetParent!==null);
    const first=focusable[0];
    const last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first.focus();
    }
    return;
  }
  if(activeCalculationTrigger&&event.key==='Escape'){
    event.preventDefault();
    closeCalculationPopover(true);
    return;
  }
  if(activeCalculationTrigger&&calculationMedia.matches&&event.key==='Tab'){
    event.preventDefault();
    calculationCloseButton.focus();
    return;
  }
  if(!activeModal){
    return;
  }
  if(event.key==='Escape'){
    event.preventDefault();
    if(activeModal===emailPreviewModal)returnToScheduleModal();else closeModal();
    return;
  }
  if(event.key==='Tab'){
    const focusable=focusableModalElements();
    if(!focusable.length){
      event.preventDefault();
      return;
    }
    const first=focusable[0];
    const last=focusable[focusable.length-1];
    if(event.shiftKey&&document.activeElement===first){
      event.preventDefault();
      last.focus();
    }else if(!event.shiftKey&&document.activeElement===last){
      event.preventDefault();
      first.focus();
    }
  }
});

let calculationsInitiallyVisible=false;
try{
  calculationsInitiallyVisible=window.localStorage.getItem(calculationStorageKey)==='true';
}catch(error){}
const requestedConcept=new URLSearchParams(window.location.search).get('concept');
let storedConcept;
try{storedConcept=window.localStorage.getItem(conceptStorageKey)}catch(error){}
const validConcepts=['dashboard','demand','combined'];
const initialConcept=validConcepts.includes(requestedConcept)?requestedConcept:validConcepts.includes(storedConcept)?storedConcept:'dashboard';
setupCashTrendInteractions();
setCalculationVisibility(calculationsInitiallyVisible);
setConcept(initialConcept);
syncNavigation();
